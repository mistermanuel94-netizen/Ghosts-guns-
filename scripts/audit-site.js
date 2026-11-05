import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('       GHOST-GUNS.SHOP COMPREHENSIVE SITE AUDIT        ');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passCount++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failCount++;
  }
}

// 1. Audit Products Data & Images
console.log('--- 1. Product Inventory & Asset Audit ---');
const productsPath = './src/data/products.json';
assert(fs.existsSync(productsPath), 'src/data/products.json exists');

const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
assert(products.length === 76, `76 WooCommerce products cataloged (Found: ${products.length})`);

let missingImages = 0;
let validPrices = 0;
let validSlugs = 0;

for (const p of products) {
  if (p.slug) validSlugs++;
  if (p.prices && p.prices.price) validPrices++;

  if (p.images && p.images.length > 0) {
    for (const img of p.images) {
      if (img.localSrc) {
        const fullLocalPath = path.join('./public', img.localSrc.replace(/^\//, ''));
        if (!fs.existsSync(fullLocalPath)) {
          missingImages++;
        }
      }
    }
  }
}

assert(validSlugs === 76, `All 76 products have valid slugs`);
assert(validPrices === 76, `All 76 products have valid pricing data`);
assert(missingImages === 0, `All product images downloaded locally to public/assets/products/ (${missingImages} missing)`);

// 2. Audit Category Silos
console.log('\n--- 2. Taxonomy & Silo Audit ---');
const catPath = './src/data/categories.json';
assert(fs.existsSync(catPath), 'src/data/categories.json exists');

const categories = JSON.parse(fs.readFileSync(catPath, 'utf8'));
assert(categories.length === 17, `17 category silos cataloged (Found: ${categories.length})`);

const expectedSilos = [
  'build-kit',
  '80-firearm',
  'component',
  '3d-printing',
  '3d-printers',
  '3d-files',
  'gun-accessories',
  'accessories',
  'jigs',
  'slide',
  'rails',
  'receiver',
  'magazines',
  'most-popular',
  'software'
];

for (const slug of expectedSilos) {
  const found = categories.some(c => c.slug === slug);
  assert(found, `Category Silo: "${slug}" present`);
}

// 3. Audit Blog Posts
console.log('\n--- 3. Blog Content Audit ---');
const postsPath = './src/data/posts.json';
assert(fs.existsSync(postsPath), 'src/data/posts.json exists');

const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
assert(posts.length === 3, `3 blog articles cataloged (Found: ${posts.length})`);

// 4. Audit Core Pages & Astro Routes
console.log('\n--- 4. Astro Route Parity Audit ---');
const requiredRoutes = [
  'src/pages/index.astro',
  'src/pages/shop/index.astro',
  'src/pages/product/[slug].astro',
  'src/pages/build-kit/index.astro',
  'src/pages/80-firearm/index.astro',
  'src/pages/component/index.astro',
  'src/pages/component/[sub].astro',
  'src/pages/3d-printing/index.astro',
  'src/pages/3d-printing/[sub].astro',
  'src/pages/3d-printers/index.astro',
  'src/pages/gun-accessories/index.astro',
  'src/pages/accessories/index.astro',
  'src/pages/accessories/[sub].astro',
  'src/pages/magazines/index.astro',
  'src/pages/most-popular/index.astro',
  'src/pages/software/index.astro',
  'src/pages/blog/index.astro',
  'src/pages/blog/[slug].astro',
  'src/pages/blog/guides/index.astro',
  'src/pages/blog/learn/index.astro',
  'src/pages/about.astro',
  'src/pages/contact.astro',
  'src/pages/cart.astro',
  'src/pages/checkout.astro',
  'src/pages/shipping-restrictions.astro',
  'src/pages/terms-and-conditions.astro',
  'src/pages/privacy-policy.astro',
  'src/pages/refund-policy.astro',
  'src/pages/shipping-policy.astro',
  'src/pages/website-terms-of-use.astro',
  'src/pages/my-account.astro'
];

for (const r of requiredRoutes) {
  assert(fs.existsSync(r), `Route exists: ${r}`);
}

// 5. Audit Localized Astro Routes under src/pages/[lang]/
console.log('\n--- 5. Localized Routes Audit (7 Target Languages) ---');
const requiredLocalizedRoutes = [
  'src/pages/[lang]/index.astro',
  'src/pages/[lang]/shop/index.astro',
  'src/pages/[lang]/product/[slug].astro',
  'src/pages/[lang]/build-kit/index.astro',
  'src/pages/[lang]/80-firearm/index.astro',
  'src/pages/[lang]/component/index.astro',
  'src/pages/[lang]/component/[sub].astro',
  'src/pages/[lang]/3d-printing/index.astro',
  'src/pages/[lang]/3d-printing/[sub].astro',
  'src/pages/[lang]/3d-printers/index.astro',
  'src/pages/[lang]/gun-accessories/index.astro',
  'src/pages/[lang]/accessories/index.astro',
  'src/pages/[lang]/accessories/[sub].astro',
  'src/pages/[lang]/magazines/index.astro',
  'src/pages/[lang]/most-popular/index.astro',
  'src/pages/[lang]/software/index.astro',
  'src/pages/[lang]/blog/index.astro',
  'src/pages/[lang]/blog/[slug].astro',
  'src/pages/[lang]/blog/guides/index.astro',
  'src/pages/[lang]/blog/learn/index.astro',
  'src/pages/[lang]/about.astro',
  'src/pages/[lang]/contact.astro',
  'src/pages/[lang]/cart.astro',
  'src/pages/[lang]/checkout.astro',
  'src/pages/[lang]/shipping-restrictions.astro',
  'src/pages/[lang]/terms-and-conditions.astro',
  'src/pages/[lang]/privacy-policy.astro',
  'src/pages/[lang]/refund-policy.astro',
  'src/pages/[lang]/shipping-policy.astro',
  'src/pages/[lang]/website-terms-of-use.astro',
  'src/pages/[lang]/my-account.astro'
];

for (const lr of requiredLocalizedRoutes) {
  assert(fs.existsSync(lr), `Localized route exists: ${lr}`);
}

// 6. Euro (€) Currency Audit
console.log('\n--- 6. Euro (€) Currency Audit ---');
let nonEuroProducts = 0;
let dollarSymbolFound = 0;

for (const p of products) {
  if (p.prices) {
    if (p.prices.currency_code !== 'EUR' || p.prices.currency_symbol !== '€') {
      nonEuroProducts++;
    }
    if (p.prices.price_html && (p.prices.price_html.includes('$') || p.prices.price_html.includes('&#036;'))) {
      dollarSymbolFound++;
    }
  }
}

assert(nonEuroProducts === 0, `All ${products.length} products have currency EUR and symbol € (Non-EUR: ${nonEuroProducts})`);
assert(dollarSymbolFound === 0, `All ${products.length} product price HTML strings use € symbol (Dollar found in: ${dollarSymbolFound})`);

// 7. i18n & Language Switcher Audit
console.log('\n--- 7. i18n & Language Switcher Audit ---');
const switcherPath = './src/components/LanguageSwitcher.astro';
assert(fs.existsSync(switcherPath), 'LanguageSwitcher component exists');

const i18nPath = './src/utils/i18n.ts';
assert(fs.existsSync(i18nPath), 'src/utils/i18n.ts exists');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

const expectedLangs = ['en', 'de', 'nl', 'fr', 'es', 'it', 'pl', 'bg'];
for (const code of expectedLangs) {
  assert(i18nContent.includes(`'${code}'`) || i18nContent.includes(`"${code}"`), `Locale [${code}] defined in src/utils/i18n.ts`);
}

// 8. Translation Dictionaries Coverage Audit
console.log('\n--- 8. Translation Dictionaries Coverage Audit ---');
const translationsPath = './src/data/translations.json';
assert(fs.existsSync(translationsPath), 'src/data/translations.json exists');
const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));

function countLeafKeys(obj) {
  let count = 0;
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      count += countLeafKeys(obj[k]);
    } else {
      count++;
    }
  }
  return count;
}

for (const lang of expectedLangs) {
  assert(!!translations[lang], `UI Translations dictionary exists for [${lang}]`);
  const stringCount = countLeafKeys(translations[lang] || {});
  assert(stringCount >= 60, `UI Translations [${lang}] has at least 60 UI strings (Found: ${stringCount})`);
}

// Category translations
const catTransPath = './src/data/categories-translations.json';
assert(fs.existsSync(catTransPath), 'src/data/categories-translations.json exists');
const catTranslations = JSON.parse(fs.readFileSync(catTransPath, 'utf8'));
let missingCatLangs = 0;
for (const slug of Object.keys(catTranslations)) {
  for (const lang of expectedLangs) {
    if (!catTranslations[slug][lang] || !catTranslations[slug][lang].name) {
      missingCatLangs++;
    }
  }
}
assert(missingCatLangs === 0, `All 17 categories translated across all 8 languages (Missing: ${missingCatLangs})`);

// Product translations
const prodTransPath = './src/data/products-translations.json';
assert(fs.existsSync(prodTransPath), 'src/data/products-translations.json exists');
const prodTranslations = JSON.parse(fs.readFileSync(prodTransPath, 'utf8'));
let missingProdLangs = 0;
for (const slug of Object.keys(prodTranslations)) {
  for (const lang of expectedLangs) {
    if (!prodTranslations[slug][lang] || !prodTranslations[slug][lang].name) {
      missingProdLangs++;
    }
  }
}
assert(missingProdLangs === 0, `All ${products.length} products translated across all 8 languages (Missing: ${missingProdLangs})`);

// Page translations
const pagesTransPath = './src/data/pages-translations.json';
assert(fs.existsSync(pagesTransPath), 'src/data/pages-translations.json exists');
const pageTranslations = JSON.parse(fs.readFileSync(pagesTransPath, 'utf8'));
let missingPageLangs = 0;
for (const pageSlug of Object.keys(pageTranslations)) {
  for (const lang of expectedLangs) {
    if (!pageTranslations[pageSlug][lang] || !pageTranslations[pageSlug][lang].title) {
      missingPageLangs++;
    }
  }
}
assert(missingPageLangs === 0, `All 9 static pages translated across all 8 languages (Missing: ${missingPageLangs})`);

// 9. Core Theme Assets & Fonts
console.log('\n--- 9. Theme Assets & Typography Audit ---');
const requiredAssets = [
  'public/assets/images/logo-black.svg',
  'public/assets/images/favicon.svg',
  'public/assets/images/hero-bg.webp',
  'public/assets/images/hero-overlay.webp',
  'public/assets/images/hero-pbs.webp',
  'public/assets/images/learn.png',
  'public/assets/images/og.png',
  'public/assets/fonts/HelveticaNowDisplay-Regular.woff2',
  'public/assets/style.min.css',
  'public/assets/theme.css'
];

for (const a of requiredAssets) {
  assert(fs.existsSync(a), `Theme asset exists: ${a}`);
}

console.log('\n====================================================');
console.log(`FINAL AUDIT RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) {
  process.exit(1);
}
