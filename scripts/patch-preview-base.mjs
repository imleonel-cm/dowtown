import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

if (process.env.GITHUB_PAGES_PREVIEW !== 'true') process.exit(0);

const dist = path.resolve('dist');
const base = '/dowtown';

async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) await visit(target);
    else if (/\.(html|css|js|mjs|map)$/i.test(entry.name)) {
      const source = await readFile(target, 'utf8');
      const patched = source
        .replace(/(href|src|action)="\/(?!\/|dowtown\/)/g, `$1="${base}/`)
        .replace(/url\("\/(?!\/|dowtown\/)/g, `url("${base}/`)
        .replace(/url\('\/(?!\/|dowtown\/)/g, `url('${base}/`);
      if (patched !== source) await writeFile(target, patched);
    }
  }
}

await visit(dist);
