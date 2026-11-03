import fs from 'fs';

const post = JSON.parse(fs.readFileSync('scripts/temp-printer-post.json', 'utf8'));
const sections = post.content.rendered.split(/<h3[^>]*>/);

sections.slice(1).forEach((sec, idx) => {
  const title = sec.split(/<\/h3>/)[0].replace(/<[^>]*>/g, '').trim();
  console.log(`\n========================================`);
  console.log(`PRINTER ${idx + 1}: ${title}`);
  
  // Extract images
  const imgMatches = [...sec.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/g)];
  imgMatches.forEach(m => {
    const src = m[1];
    const altMatch = m[0].match(/alt=["']([^"']+)["']/);
    const alt = altMatch ? altMatch[1] : '';
    console.log(`  IMAGE: ${src}`);
    console.log(`  ALT: ${alt}`);
  });

  // Extract first 2 paragraphs
  const pMatches = [...sec.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  if (pMatches.length > 0) {
    console.log(`  INTRO: ${pMatches[0][1].replace(/<[^>]*>/g, '').trim()}`);
  }
  if (pMatches.length > 1) {
    console.log(`  DETAILS: ${pMatches[1][1].replace(/<[^>]*>/g, '').trim()}`);
  }
});
