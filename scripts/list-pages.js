import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('./src/data/pages.json', 'utf8'));

console.log('Pages in pages.json:');
pages.forEach(p => {
  console.log(`  - slug: "${p.slug}", title: "${p.title.rendered}", length: ${p.content.rendered.length}`);
});
