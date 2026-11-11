import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distRoot = path.resolve('dist');
const productionOrigin = 'https://downtownescrow.net';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (entry.name === 'index.html') files.push(fullPath);
  }
  return files;
}

const files = await walk(distRoot);
const routes = files
  .map((file) => `/${path.relative(distRoot, path.dirname(file)).replaceAll(path.sep, '/')}`.replace(/^\/$/, '/'))
  .filter((route) => route !== '/404' && route !== '/services' && route !== '/es/servicios')
  .map((route) => route.endsWith('/') ? route : `${route}/`)
  .sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${productionOrigin}${route}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(path.join(distRoot, 'sitemap.xml'), xml, 'utf8');
await writeFile(path.resolve('public/sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap with ${routes.length} URLs`);
