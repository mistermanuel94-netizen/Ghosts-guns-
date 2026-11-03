import fs from 'fs';
import path from 'path';

const rawMirrorDir = './raw_mirror';
const pagesDir = './src/pages';

function extractMainContent(html) {
  // Try finding header and footer
  const headerEndMatch = html.indexOf('</header>');
  const footerStartMatch = html.indexOf('<footer');

  if (headerEndMatch !== -1 && footerStartMatch !== -1) {
    let content = html.slice(headerEndMatch + '</header>'.length, footerStartMatch);
    
    // Remove mobile-menu if it's outside header
    content = content.replace(/<!-- Mobile Menu -->[\s\S]*?<!-- Dark backdrop - tap to close -->\s*<div[^>]*><\/div>\s*<\/div>/gi, '');
    content = content.replace(/<div class="mobile-overlay"><\/div>/gi, '');

    // Replace live URLs with local routes
    content = content.replace(/https:\/\/ghostguns\.com\/product\//g, '/product/');
    content = content.replace(/https:\/\/ghostguns\.com\/category\//g, '/');
    content = content.replace(/https:\/\/ghostguns\.com\/shop\/?/g, '/shop/');
    content = content.replace(/https:\/\/ghostguns\.com\/contact\/?/g, '/contact/');
    content = content.replace(/https:\/\/ghostguns\.com\/about\/?/g, '/about/');
    content = content.replace(/https:\/\/ghostguns\.com\/blog\/?/g, '/blog/');
    content = content.replace(/https:\/\/ghostguns\.com\/cart\/?/g, '/cart/');
    content = content.replace(/https:\/\/ghostguns\.com\/my-account\/?/g, '/my-account/');
    content = content.replace(/https:\/\/ghostguns\.com\//g, '/');
    
    // Replace theme image paths
    content = content.replace(/https:\/\/ghostguns\.com\/wp-content\/themes\/ghost-guns\/images\//g, '/assets/images/');
    
    return content.trim();
  }
  return '';
}

const pagesToExtract = [
  { name: 'about', title: 'About Us | Ghost Guns', desc: 'About Ghost Guns - A real company. Real inventory. Real people. Austin, Texas.' },
  { name: 'contact', title: 'Contact Us | Ghost Guns', desc: 'Contact Ghost Guns support and sales team in Austin, Texas.' },
  { name: 'shipping-restrictions', title: 'Shipping Restrictions by State | Ghost Guns', desc: 'View state-by-state shipping restrictions and legal regulations for firearms kits and parts.' },
  { name: 'terms-and-conditions', title: 'Terms and Conditions | Ghost Guns', desc: 'Terms and conditions for purchasing from Ghost Guns.' },
  { name: 'privacy-policy', title: 'Privacy Policy | Ghost Guns', desc: 'Ghost Guns privacy policy and data protection terms.' },
  { name: 'refund-policy', title: 'Refund Policy | Ghost Guns', desc: 'Ghost Guns refund, returns, and cancellation policy.' },
  { name: 'shipping-policy', title: 'Shipping Policy | Ghost Guns', desc: 'Ghost Guns discreet and fast shipping guidelines.' },
  { name: 'website-terms-of-use', title: 'Website Terms of Use | Ghost Guns', desc: 'Website terms of use and legal disclaimer.' },
  { name: 'my-account', title: 'My Account | Ghost Guns', desc: 'Manage your Ghost Guns account and past orders.' }
];

for (const p of pagesToExtract) {
  const filePath = path.join(rawMirrorDir, `${p.name}.html`);
  if (fs.existsSync(filePath)) {
    const rawHtml = fs.readFileSync(filePath, 'utf8');
    const mainContent = extractMainContent(rawHtml);
    
    const astroPage = `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="${p.title}" description="${p.desc}">
  <div class="content-page-wrapper w-full">
    ${mainContent}
  </div>
</Layout>
`;
    fs.writeFileSync(path.join(pagesDir, `${p.name}.astro`), astroPage);
    console.log(`Generated src/pages/${p.name}.astro (${mainContent.length} chars content)`);
  }
}
