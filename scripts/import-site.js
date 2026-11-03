const fs = require('fs');
const path = require('path');

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5'
};

const BASE_URL = 'https://ghostguns.com';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: HEADERS, ...options });
      if (res.ok) return res;
      console.warn(`[WARN] Fetch failed for ${url}: ${res.status} ${res.statusText} (attempt ${i + 1}/${retries})`);
    } catch (e) {
      console.warn(`[WARN] Fetch error for ${url}: ${e.message} (attempt ${i + 1}/${retries})`);
    }
    if (i < retries - 1) await new Promise(r => setTimeout(r, delay * (i + 1)));
  }
  return null;
}

async function downloadFile(url, destPath) {
  if (fs.existsSync(destPath)) {
    return true; // Already downloaded
  }
  ensureDir(path.dirname(destPath));
  const res = await fetchWithRetry(url);
  if (!res) {
    console.error(`[ERROR] Could not download file: ${url}`);
    return false;
  }
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
  return true;
}

async function runImporter() {
  const rootDir = path.resolve(__dirname, '..');
  const dataDir = path.join(rootDir, 'src', 'data');
  const publicDir = path.join(rootDir, 'public');
  const imagesDir = path.join(publicDir, 'assets', 'images');
  const fontsDir = path.join(publicDir, 'assets', 'fonts');
  const productsImgDir = path.join(publicDir, 'assets', 'products');
  const rawMirrorDir = path.join(rootDir, 'raw_mirror');

  ensureDir(dataDir);
  ensureDir(imagesDir);
  ensureDir(fontsDir);
  ensureDir(productsImgDir);
  ensureDir(rawMirrorDir);

  console.log('=== Starting Ghost Guns Full Site Import ===\n');

  // 1. Download Theme Assets
  console.log('--- 1. Downloading Theme Assets ---');
  const themeAssets = [
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/images/logo-black.svg`, dest: path.join(imagesDir, 'logo-black.svg') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/images/favicon.svg`, dest: path.join(imagesDir, 'favicon.svg') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/images/hero-bg.webp`, dest: path.join(imagesDir, 'hero-bg.webp') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/images/hero-overlay.webp`, dest: path.join(imagesDir, 'hero-overlay.webp') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/images/hero-pbs.webp`, dest: path.join(imagesDir, 'hero-pbs.webp') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/images/og.png`, dest: path.join(imagesDir, 'og.png') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/fonts/HelveticaNowDisplay-Regular.woff2`, dest: path.join(fontsDir, 'HelveticaNowDisplay-Regular.woff2') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/dist/style.min.css`, dest: path.join(publicDir, 'assets', 'style.min.css') },
    { url: `${BASE_URL}/wp-content/themes/ghost-guns/style.css`, dest: path.join(publicDir, 'assets', 'theme.css') }
  ];

  for (const asset of themeAssets) {
    process.stdout.write(`Downloading ${path.basename(asset.dest)}... `);
    const ok = await downloadFile(asset.url, asset.dest);
    console.log(ok ? 'DONE' : 'FAILED');
  }

  // 2. Fetch Categories / Silos
  console.log('\n--- 2. Fetching Category Silos ---');
  let categories = [];
  const catRes = await fetchWithRetry(`${BASE_URL}/wp-json/wc/store/v1/products/categories?per_page=100`);
  if (catRes) {
    categories = await catRes.json();
    console.log(`Fetched ${categories.length} categories.`);
    fs.writeFileSync(path.join(dataDir, 'categories.json'), JSON.stringify(categories, null, 2));
  } else {
    console.error('Failed to fetch categories!');
  }

  // 3. Fetch Products
  console.log('\n--- 3. Fetching All WooCommerce Products ---');
  let allProducts = [];
  let page = 1;
  while (true) {
    process.stdout.write(`Fetching products page ${page}... `);
    const prodRes = await fetchWithRetry(`${BASE_URL}/wp-json/wc/store/v1/products?per_page=100&page=${page}`);
    if (!prodRes) {
      console.log('Failed or end reached.');
      break;
    }
    const products = await prodRes.json();
    if (!Array.isArray(products) || products.length === 0) {
      console.log('No more products.');
      break;
    }
    allProducts.push(...products);
    console.log(`got ${products.length} products.`);
    if (products.length < 100) break;
    page++;
  }
  console.log(`Total products imported: ${allProducts.length}`);

  // Download product images and localize links
  console.log('\n--- Downloading Product Images ---');
  for (const product of allProducts) {
    if (product.images && product.images.length > 0) {
      for (const img of product.images) {
        if (img.src) {
          const ext = path.extname(new URL(img.src).pathname) || '.png';
          const localFilename = `prod-${product.id}-${img.id}${ext}`;
          const localFilePath = path.join(productsImgDir, localFilename);
          process.stdout.write(`  Product ${product.id} [${product.slug}]: ${localFilename}... `);
          const ok = await downloadFile(img.src, localFilePath);
          if (ok) {
            img.localSrc = `/assets/products/${localFilename}`;
            console.log('OK');
          } else {
            img.localSrc = img.src; // fallback to remote
            console.log('FAILED (fallback to remote)');
          }
        }
      }
    }
  }
  fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(allProducts, null, 2));
  console.log('Saved products to src/data/products.json');

  // 4. Fetch Pages
  console.log('\n--- 4. Fetching WordPress Pages ---');
  let pages = [];
  const pagesRes = await fetchWithRetry(`${BASE_URL}/wp-json/wp/v2/pages?per_page=100`);
  if (pagesRes) {
    pages = await pagesRes.json();
    console.log(`Fetched ${pages.length} pages.`);
    fs.writeFileSync(path.join(dataDir, 'pages.json'), JSON.stringify(pages, null, 2));
  } else {
    console.error('Failed to fetch pages!');
  }

  // 5. Fetch Blog Posts
  console.log('\n--- 5. Fetching Blog Posts ---');
  let posts = [];
  const postsRes = await fetchWithRetry(`${BASE_URL}/wp-json/wp/v2/posts?per_page=100`);
  if (postsRes) {
    posts = await postsRes.json();
    console.log(`Fetched ${posts.length} posts.`);
    fs.writeFileSync(path.join(dataDir, 'posts.json'), JSON.stringify(posts, null, 2));
  } else {
    console.error('Failed to fetch posts!');
  }

  // 6. Build Navigation Taxonomy & Silo Map
  console.log('\n--- 6. Generating Navigation & Silo Structure ---');
  const navigation = {
    header: {
      brand: "GHOST GUNS",
      logo: "/assets/images/logo-black.svg",
      links: [
        { title: "SHOP", url: "/shop" },
        { title: "BUILD KITS", url: "/build-kit/" },
        { title: "80 PERCENT", url: "/80-firearm/" },
        {
          title: "PARTS",
          url: "/component/",
          children: [
            { title: "Slides", url: "/component/slide/" },
            { title: "Rails", url: "/component/rails/" },
            { title: "Receivers", url: "/component/receiver/" }
          ]
        },
        {
          title: "3D PRINTING",
          url: "/3d-printing/",
          children: [
            { title: "3D Files", url: "/3d-printing/3d-files/" },
            { title: "Accessories", url: "/3d-printing/3d-printer-accessories/" }
          ]
        },
        { title: "ACCESSORIES", url: "/gun-accessories/" },
        { title: "CONTACT", url: "/contact" }
      ]
    },
    footer: {
      columns: [
        {
          title: "Ghost Guns",
          links: [
            { title: "/ shop", url: "/shop" },
            { title: "/ about", url: "/about" },
            { title: "/ blog", url: "/blog" },
            { title: "/ instagram", url: "https://www.instagram.com/dd.ghostguns", external: true }
          ]
        },
        {
          title: "Help",
          links: [
            { title: "/ contact", url: "/contact" },
            { title: "/ refund policy", url: "/refund-policy" },
            { title: "/ shipping policy", url: "/shipping-policy" }
          ]
        },
        {
          title: "Legal",
          links: [
            { title: "/ shipping restrictions", url: "/shipping-restrictions" },
            { title: "/ terms & conditions", url: "/terms-and-conditions" },
            { title: "/ privacy policy", url: "/privacy-policy" }
          ]
        },
        {
          title: "All Rights Reversed",
          isCanary: true,
          content: "Since Jan. 1 2021, no warrants have been served to ghostguns.com principals or employees.<br><br>No searches or seizures have been performed on ghostguns.com assets."
        }
      ],
      disclaimer: "Ghost Guns hardware and software are not currently available to persons outside the United States and are not available to residents of and persons in the states of New Jersey and California who do not possess a federal firearms license.",
      copyright: "Ghost Guns 2026"
    }
  };
  fs.writeFileSync(path.join(dataDir, 'navigation.json'), JSON.stringify(navigation, null, 2));
  console.log('Saved navigation to src/data/navigation.json');

  // 7. Save Raw Public HTML Mirrors for Parity Auditing
  console.log('\n--- 7. Saving Raw Public HTML Mirrors ---');
  const urlsToMirror = [
    { name: 'home', url: `${BASE_URL}/` },
    { name: 'shop', url: `${BASE_URL}/shop/` },
    { name: 'about', url: `${BASE_URL}/about/` },
    { name: 'contact', url: `${BASE_URL}/contact/` },
    { name: 'shipping-restrictions', url: `${BASE_URL}/shipping-restrictions/` },
    { name: 'terms-and-conditions', url: `${BASE_URL}/terms-and-conditions/` },
    { name: 'privacy-policy', url: `${BASE_URL}/privacy-policy/` },
    { name: 'refund-policy', url: `${BASE_URL}/refund-policy/` },
    { name: 'shipping-policy', url: `${BASE_URL}/shipping-policy/` },
    { name: 'website-terms-of-use', url: `${BASE_URL}/website-terms-of-use/` },
    { name: 'blog', url: `${BASE_URL}/blog/` },
    { name: 'cart', url: `${BASE_URL}/cart/` },
    { name: 'my-account', url: `${BASE_URL}/my-account/` }
  ];

  for (const item of urlsToMirror) {
    process.stdout.write(`Mirroring ${item.name} (${item.url})... `);
    const res = await fetchWithRetry(item.url);
    if (res) {
      const html = await res.text();
      fs.writeFileSync(path.join(rawMirrorDir, `${item.name}.html`), html);
      console.log(`OK (${html.length} bytes)`);
    } else {
      console.log('FAILED');
    }
  }

  console.log('\n=== Site Importation Completed Successfully! ===');
}

runImporter().catch(err => {
  console.error('Fatal Import Error:', err);
  process.exit(1);
});
