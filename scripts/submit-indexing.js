import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://ghost-guns.shop';
const INDEXNOW_KEY = 'a8f49c2e71d04b6395e1c8d72f3a60b4';
const LOCALES = ['en', 'de', 'nl', 'fr', 'es', 'it', 'pl', 'bg'];

const products = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const posts = JSON.parse(fs.readFileSync('src/data/posts.json', 'utf8'));
const categories = JSON.parse(fs.readFileSync('src/data/categories.json', 'utf8'));

function getLocalizedPath(pathname, locale) {
  let clean = pathname.startsWith('/') ? pathname : '/' + pathname;
  if (locale === 'en') return clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

const staticPaths = [
  '/',
  '/shop/',
  '/about/',
  '/blog/',
  '/blog/guides/',
  '/blog/learn/',
  '/contact/',
  '/shipping-restrictions/',
  '/terms-and-conditions/',
  '/privacy-policy/',
  '/refund-policy/',
  '/shipping-policy/',
  '/website-terms-of-use/',
  '/3d-printers/',
  '/3d-printing/',
  '/3d-printing/3d-files/',
  '/3d-printing/3d-printer-accessories/',
  '/software/',
  '/build-kit/',
  '/most-popular/',
  '/80-firearm/',
  '/accessories/',
  '/accessories/jigs/',
  '/component/',
  '/component/slide/',
  '/component/rails/',
  '/component/receiver/',
  '/component/glock/',
  '/gun-accessories/',
  '/magazines/'
];

const productPaths = products.map((p) => `/product/${p.slug}/`);
const blogPaths = posts.map((post) => `/blog/${post.slug}/`);

const allBasePaths = Array.from(new Set([...staticPaths, ...productPaths, ...blogPaths]));

const allUrls = [];
for (const basePath of allBasePaths) {
  for (const loc of LOCALES) {
    allUrls.push(`${SITE_URL}${getLocalizedPath(basePath, loc)}`);
  }
}

// 1. Generate public/llms.txt for AI crawlers & answer engines
const llmsLines = [
  '# Ghost Guns (https://ghost-guns.shop)',
  '',
  '> Premier catalog of 3D printed firearm build kits, enclosed CoreXY 3D printers, 80% lower receivers, CNC pistol slides, FMDA/DD19.2 stainless steel rails, router jigs, and PA-CF engineering filaments. Available in 8 languages (EN, DE, NL, FR, ES, IT, PL, BG) with direct Euro (€) and cryptocurrency settlement.',
  '',
  '## Primary Hardware Silos',
  `- [All Hardware Silos & Full Catalog](${SITE_URL}/shop/)`,
  `- [Silo 01: CoreXY & Resin 3D Printers](${SITE_URL}/3d-printers/)`,
  `- [Silo 01: 3D Printing Hub & PA-CF Filaments](${SITE_URL}/3d-printing/)`,
  `- [Silo 01: 3D CAD Files & Reference Packs](${SITE_URL}/3d-printing/3d-files/)`,
  `- [Silo 01: Hardened Nozzles & Upgrades](${SITE_URL}/3d-printing/3d-printer-accessories/)`,
  `- [Silo 02: Complete DIY Firearm Build Kits](${SITE_URL}/build-kit/)`,
  `- [Silo 02: Most Popular Proven Kits](${SITE_URL}/most-popular/)`,
  `- [Silo 03: 80% Lower Receivers & Frames](${SITE_URL}/80-firearm/)`,
  `- [Silo 03: Router Jigs & Milling Tooling](${SITE_URL}/accessories/jigs/)`,
  `- [Silo 04: Precision Firearm Components](${SITE_URL}/component/)`,
  `- [Silo 04: CNC Pistol Slides (G17/G19/G26/G43)](${SITE_URL}/component/slide/)`,
  `- [Silo 04: FMDA & DD19.2 Stainless Rail Kits](${SITE_URL}/component/rails/)`,
  `- [Silo 05: Magazines & Menendez Packs](${SITE_URL}/magazines/)`,
  `- [Silo 05: Gun Accessories & Stocks](${SITE_URL}/gun-accessories/)`,
  '',
  '## Technical Field Guides & Knowledge Base',
  ...posts.map((post) => `- [${post.title.rendered}](${SITE_URL}/blog/${post.slug}/)`),
  '',
  '## Complete Product Index (76 Platforms)',
  ...products.map((p) => `- [${p.name}](${SITE_URL}/product/${p.slug}/)`),
  '',
  '## International Storefronts',
  `- [English Storefront](${SITE_URL}/)`,
  `- [German Storefront (Deutsch)](${SITE_URL}/de/)`,
  `- [Dutch Storefront (Nederlands)](${SITE_URL}/nl/)`,
  `- [French Storefront (Français)](${SITE_URL}/fr/)`,
  `- [Spanish Storefront (Español)](${SITE_URL}/es/)`,
  `- [Italian Storefront (Italiano)](${SITE_URL}/it/)`,
  `- [Polish Storefront (Polski)](${SITE_URL}/pl/)`,
  `- [Bulgarian Storefront (Български)](${SITE_URL}/bg/)`,
  '',
  '## Sitemap',
  `- [XML Sitemap (${allUrls.length} URLs)](${SITE_URL}/sitemap.xml)`
];

fs.writeFileSync('public/llms.txt', llmsLines.join('\n') + '\n', 'utf8');
console.log(`Generated public/llms.txt and collected ${allUrls.length} total URLs.`);

async function submitIndexNow() {
  const payload = {
    host: 'ghost-guns.shop',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: allUrls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });
      const text = await res.text();
      console.log(`[IndexNow -> ${endpoint}] HTTP ${res.status} ${res.statusText} ${text ? '- ' + text : ''}`);
    } catch (err) {
      console.error(`[IndexNow -> ${endpoint}] Error:`, err.message);
    }
  }
}

if (process.argv.includes('--submit')) {
  submitIndexNow();
}

