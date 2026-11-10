import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

// Use an existing Playwright installation; this script installs nothing.
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const base = process.argv[2] || 'http://127.0.0.1:4321';
const output = path.resolve('artifacts', process.env.QA_RUN_LABEL || 'alignment-review-2026-10-28');
const routes = [
  { name: 'home-en', url: '/', other: '/es/', locale: 'en', faqs: 4 },
  { name: 'home-es', url: '/es/', other: '/', locale: 'es', faqs: 4 },
  { name: 'about-en', url: '/about/', other: '/es/nosotros/', locale: 'en', faqs: 4 },
  { name: 'about-es', url: '/es/nosotros/', other: '/about/', locale: 'es', faqs: 4 },
  { name: 'contact-en', url: '/contact/', other: '/es/contacto/', locale: 'en', faqs: 4 },
  { name: 'contact-es', url: '/es/contacto/', other: '/contact/', locale: 'es', faqs: 4 },
  { name: 'manufactured-en', url: '/services/manufactured-home-escrow/', other: '/es/servicios/escrow-casas-manufacturadas/', locale: 'en', faqs: 5 },
  { name: 'manufactured-es', url: '/es/servicios/escrow-casas-manufacturadas/', other: '/services/manufactured-home-escrow/', locale: 'es', faqs: 5 },
  { name: 'short-sale-en', url: '/services/short-sale-escrow/', other: '/es/servicios/escrow-short-sale/', locale: 'en', faqs: 5 },
  { name: 'short-sale-es', url: '/es/servicios/escrow-short-sale/', other: '/services/short-sale-escrow/', locale: 'es', faqs: 5 },
  { name: 'probate-en', url: '/services/probate-escrow/', other: '/es/servicios/escrow-probate/', locale: 'en', faqs: 5 },
  { name: 'probate-es', url: '/es/servicios/escrow-probate/', other: '/services/probate-escrow/', locale: 'es', faqs: 5 },
  { name: 'reverse-mortgage-en', url: '/services/reverse-mortgage-escrow/', other: '/es/servicios/escrow-hipoteca-inversa/', locale: 'en', faqs: 5 },
  { name: 'reverse-mortgage-es', url: '/es/servicios/escrow-hipoteca-inversa/', other: '/services/reverse-mortgage-escrow/', locale: 'es', faqs: 5 },
  { name: 'residential-en', url: '/services/residential-escrow/', other: '/es/servicios/escrow-residencial/', locale: 'en', faqs: 5 },
  { name: 'residential-es', url: '/es/servicios/escrow-residencial/', other: '/services/residential-escrow/', locale: 'es', faqs: 5 },
  { name: 'commercial-en', url: '/services/commercial-escrow/', other: '/es/servicios/escrow-comercial/', locale: 'en', faqs: 5 },
  { name: 'commercial-es', url: '/es/servicios/escrow-comercial/', other: '/services/commercial-escrow/', locale: 'es', faqs: 5 }
];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const report = { generatedAt: new Date().toISOString(), base, checks: [], errors: [], failures: [] };
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => report.errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') report.errors.push(message.text()); });
  const titles = new Set();
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    for (const route of routes) {
      const response = await page.goto(base + route.url, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, route.name);
      await page.evaluate(() => document.fonts.ready);
      // Scroll lazy-loaded images into view before checking their load state.
      await page.evaluate(async () => {
        for (const image of document.images) {
          image.scrollIntoView();
          await image.decode();
        }
        window.scrollTo(0, 0);
      });
      const audit = await page.evaluate(() => ({
        lang: document.documentElement.lang,
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        robots: document.querySelector('meta[name="robots"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        alternates: Object.fromEntries([...document.querySelectorAll('link[rel="alternate"][hreflang]')].map(link => [link.hreflang, link.href])),
        h1: [...document.querySelectorAll('h1')].map(node => node.textContent.trim()),
        faqCount: document.querySelectorAll('.faq-item').length,
        overflow: document.documentElement.scrollWidth > innerWidth,
        imageErrors: [...document.images].filter(image => !image.complete || !image.naturalWidth).length,
        clippedHeroText: [...document.querySelectorAll('.hero-copy h1, .hero-copy p, .hero-specialty-card__copy, .services-heading h2, .services-heading > p:last-child, .service-card__copy, .specialty-hero__copy h1, .specialty-hero__copy p, .about-hero__copy h1, .about-hero__copy p')].flatMap(node => {
          const range = document.createRange();
          range.selectNodeContents(node);
          return [...range.getClientRects()].filter(rect => rect.right > innerWidth + 1 || rect.left < -1).map(() => node.textContent.trim());
        }),
        schemaTypes: [...document.querySelectorAll('script[type="application/ld+json"]')].map(script => JSON.parse(script.textContent)['@type'])
      }));
      assert.equal(audit.lang, route.locale);
      assert.equal(audit.h1.length, 1);
      assert.equal(audit.faqCount, route.faqs);
      assert.equal(audit.robots, 'noindex, nofollow');
      assert.equal(audit.canonical, 'https://downtownescrow.net' + route.url);
      assert.equal(audit.alternates[route.locale], audit.canonical);
      assert.equal(audit.alternates[route.locale === 'en' ? 'es' : 'en'], 'https://downtownescrow.net' + route.other);
      assert.equal(audit.alternates['x-default'], 'https://downtownescrow.net' + (route.locale === 'en' ? route.url : route.other));
      assert.ok(audit.description?.trim());
      assert.equal(audit.overflow, false);
      assert.equal(audit.imageErrors, 0);
      assert.deepEqual(audit.clippedHeroText, [], `${route.name}@${width}: clipped hero text`);
      if (width === 1440) { assert.ok(!titles.has(audit.title)); titles.add(audit.title); }
      if (route.name.startsWith('home-')) {
        const primary = page.locator('.hero-copy .button').first();
        const secondary = page.locator('.hero-copy .button--outline');
        const featured = page.locator('.hero-specialty-card').first();
        await primary.focus();
        await page.keyboard.press('Tab');
        assert.equal(await secondary.evaluate(node => node === document.activeElement), true, `${route.name}@${width}: secondary CTA keyboard order`);
        await page.keyboard.press('Tab');
        assert.equal(await featured.evaluate(node => node === document.activeElement), true, `${route.name}@${width}: featured card keyboard order`);
        const focusStyle = await featured.evaluate(node => {
          const style = getComputedStyle(node);
          return { outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth };
        });
        assert.notEqual(focusStyle.outlineStyle, 'none', `${route.name}@${width}: featured card focus indicator`);
        assert.notEqual(focusStyle.outlineWidth, '0px', `${route.name}@${width}: featured card focus width`);
        const target = route.locale === 'en' ? '/services/residential-escrow/' : '/es/servicios/escrow-residencial/';
        await Promise.all([page.waitForURL(base + target), page.keyboard.press('Enter')]);
        await page.goto(base + route.url, { waitUntil: 'networkidle' });
        const serviceLinks = page.locator('#services .service-card > a.service-card__surface');
        assert.equal(await serviceLinks.count(), 7, `${route.name}@${width}: active service card count`);
        assert.equal(await page.locator('#wholesale a, #wholesale button').count(), 0, `${route.name}@${width}: Wholesale must not be interactive`);
        await serviceLinks.first().focus();
        const serviceFocusStyle = await serviceLinks.first().evaluate(node => {
          const style = getComputedStyle(node);
          return { outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth, height: node.getBoundingClientRect().height };
        });
        assert.notEqual(serviceFocusStyle.outlineStyle, 'none', `${route.name}@${width}: service card focus indicator`);
        assert.notEqual(serviceFocusStyle.outlineWidth, '0px', `${route.name}@${width}: service card focus width`);
        assert.ok(serviceFocusStyle.height >= 44, `${route.name}@${width}: service card target height`);
        await Promise.all([page.waitForURL(base + target), page.keyboard.press('Enter')]);
        await page.goto(base + route.url, { waitUntil: 'networkidle' });
      }
      const questions = page.locator('.faq-item summary');
      for (let index = 1; index < route.faqs; index++) {
        await questions.nth(index).click();
        assert.equal(await page.locator('.faq-item[open]').count(), 1);
        assert.equal(await questions.nth(index).evaluate(node => node.parentElement.open), true);
      }
      await questions.last().click();
      assert.equal(await page.locator('.faq-item[open]').count(), 0);
      await questions.first().click();
      await page.evaluate(() => window.scrollTo(0, 0));
      const capture = `${route.name}-${width}.png`;
      await page.screenshot({ path: path.join(output, capture), fullPage: true });
      const otherLocale = route.locale === 'en' ? 'es' : 'en';
      await page.locator(`.language-switcher a[lang="${otherLocale}"]`).click();
      await page.waitForURL(base + route.other);
      report.checks.push({ name: route.name, width, status: 200, ...audit, capture, equivalentLanguageNavigation: true });
    }
  }
  await context.close();
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const fallback = await noJs.newPage();
  for (const route of routes) {
    await fallback.goto(base + route.url, { waitUntil: 'networkidle' });
    assert.equal(await fallback.locator('.services-submenu a:visible').count(), 7);
    assert.equal(await fallback.locator('.services-submenu__pending:visible').count(), 1);
    await fallback.locator('.faq-item summary').nth(1).click();
    assert.equal(await fallback.locator('.faq-item[open]').count(), 1);
    report.checks.push({ name: route.name, width: 390, noJavaScript: true, navigationVisible: true, nativeFaqExclusive: true });
  }
  await noJs.close();
  assert.deepEqual(report.errors, []);
} catch (error) {
  report.failures.push(error.stack || String(error));
  process.exitCode = 1;
} finally {
  await browser.close();
  await writeFile(path.join(output, 'playwright-report.json'), JSON.stringify(report, null, 2));
}
console.log(JSON.stringify({ output, checks: report.checks.length, errors: report.errors, failures: report.failures }, null, 2));
