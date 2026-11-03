import fs from 'fs';
import path from 'path';

const images = [
  { num: 18, name: 'bambu-lab-p2s.png' },
  { num: 19, name: 'elegoo-centauri-carbon.png' },
  { num: 20, name: 'prusa-core-one-plus.png' },
  { num: 21, name: 'creality-sparkx-i7.png' },
  { num: 22, name: 'anycubic-kobra-x.png' },
  { num: 23, name: 'bambu-lab-h2d.png' },
  { num: 24, name: 'snapmaker-u1.png' },
  { num: 25, name: 'anycubic-kobra-3-max.png' },
  { num: 26, name: 'elegoo-mars-5-ultra.png' },
  { num: 27, name: 'anycubic-photon-mono-m7-pro.png' }
];

async function downloadAll() {
  const destDir = path.resolve('public/assets/products');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  for (const item of images) {
    const url = `https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-${item.num}.png`;
    const targetFile = path.join(destDir, item.name);
    console.log(`Downloading ${url} -> ${item.name}...`);
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      fs.writeFileSync(targetFile, Buffer.from(arrayBuffer));
      console.log(`✓ Saved ${item.name} (${arrayBuffer.byteLength} bytes)`);
    } catch (err) {
      console.error(`Failed to download ${item.name}:`, err.message);
    }
  }
  console.log('Finished downloading all printer images.');
}

downloadAll();
