import { createRequire } from 'node:module';
import { stat, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const base = process.argv[2] || 'http://127.0.0.1:4321';
const output = path.resolve('artifacts', 'hero-image-optimization-2026-10-28');
const originalBytes = (await stat(path.resolve('src/assets/residential-escrow-illustration.png'))).size;
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true
});
const results = [];

await mkdir(output, { recursive: true });
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 900 } });
    const page = await context.newPage();
    await page.goto(`${base}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.office-image').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.querySelectorAll('picture img')].every((image) => image.complete && image.naturalWidth > 0));
    const images = await page.evaluate(() => [...document.querySelectorAll('picture img')].map((image) => ({
      alt: image.alt,
      currentSrc: image.currentSrc,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      renderedWidth: Math.round(image.getBoundingClientRect().width),
      renderedHeight: Math.round(image.getBoundingClientRect().height),
      loading: image.loading,
      fetchPriority: image.fetchPriority,
      objectPosition: getComputedStyle(image).objectPosition
    })));
    for (const image of images) {
      const url = new URL(image.currentSrc);
      const file = path.resolve('dist', url.pathname.replace(/^\//, ''));
      const bytes = (await stat(file)).size;
      image.bytes = bytes;
      image.reductionPercent = Number(((1 - bytes / originalBytes) * 100).toFixed(2));
    }
    results.push({ width, images });
    await context.close();
  }
} finally {
  await browser.close();
}

const report = { generatedAt: new Date().toISOString(), base, originalBytes, results };
await writeFile(path.join(output, 'image-selection-report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
