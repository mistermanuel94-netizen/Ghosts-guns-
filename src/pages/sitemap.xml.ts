import type { APIRoute } from 'astro';
import products from '../data/products.json';
import posts from '../data/posts.json';
import { LOCALES, getLocalizedPath } from '../utils/i18n';
import { SILO_PILLARS } from '../utils/silo';

const SITE_URL = 'https://ghost-guns.shop';

export const GET: APIRoute = () => {
  const staticPaths = [
    '/',
    '/shop/',
    '/about/',
    '/blog/',
    '/contact/',
    '/shipping-restrictions/',
    '/terms-and-conditions/',
    '/privacy-policy/',
    '/refund-policy/',
    '/shipping-policy/',
    '/website-terms-of-use/'
  ];

  // Collect all unique silo spoke paths
  const siloPaths = new Set<string>();
  for (const pillar of SILO_PILLARS) {
    siloPaths.add(pillar.path);
    for (const spoke of pillar.spokes) {
      siloPaths.add(spoke.path);
    }
  }

  // Collect all product paths
  const productPaths = products.map((p: any) => `/product/${p.slug}/`);

  // Collect all blog post paths
  const blogPaths = posts.map((post: any) => `/blog/${post.slug}/`);

  const allBasePaths = [
    ...staticPaths,
    ...Array.from(siloPaths),
    ...productPaths,
    ...blogPaths
  ];

  const uniqueBasePaths = Array.from(new Set(allBasePaths));
  const lastmod = new Date().toISOString().split('T')[0];

  const urlEntries: string[] = [];

  for (const basePath of uniqueBasePaths) {
    const priority =
      basePath === '/'
        ? '1.0'
        : basePath === '/shop/' || siloPaths.has(basePath)
        ? '0.9'
        : basePath.startsWith('/product/')
        ? '0.8'
        : basePath.startsWith('/blog/')
        ? '0.7'
        : '0.5';

    const changefreq =
      basePath === '/' || basePath === '/shop/' || siloPaths.has(basePath)
        ? 'daily'
        : 'weekly';

    const alternates = LOCALES.map((loc) => {
      const href = `${SITE_URL}${getLocalizedPath(basePath, loc)}`;
      return `    <xhtml:link rel="alternate" hreflang="${loc}" href="${href}" />`;
    }).join('\n');

    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${getLocalizedPath(basePath, 'en')}" />`;

    for (const loc of LOCALES) {
      const locUrl = `${SITE_URL}${getLocalizedPath(basePath, loc)}`;
      urlEntries.push(`  <url>
    <loc>${locUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
${xDefault}
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
