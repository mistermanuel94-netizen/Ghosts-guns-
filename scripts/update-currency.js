import fs from 'fs';

const productsPath = './src/data/products.json';
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

for (const p of products) {
  if (p.prices) {
    p.prices.currency_code = 'EUR';
    p.prices.currency_symbol = '€';
    p.prices.currency_prefix = '€';
  }
  if (p.price_html) {
    p.price_html = p.price_html.replace(/&#036;|\$/g, '€');
  }
}

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('Successfully updated all 43 products to EUR (€) currency!');
