import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';

const baseUrl = process.argv[2] ?? 'http://127.0.0.1:4321';
const chromePath = process.env.CHROME_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9445;
const profile = path.join(os.tmpdir(), 'downtown-v2-chrome-qa', `validation-${port}`);
const widths = [320, 390, 768, 880, 881, 1024, 1440, 1920];
const pages = [
  { locale: 'en', path: '/', counterpart: '/es/' },
  { locale: 'es', path: '/es/', counterpart: '/' }
];
const failures = [];
const results = [];

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  'about:blank'
], { stdio: ['ignore', 'ignore', 'inherit'] });

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
let endpoint;
for (let attempt = 0; attempt < 60; attempt += 1) {
  try {
    const tabs = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
    endpoint = tabs.find((tab) => tab.type === 'page')?.webSocketDebuggerUrl;
    if (endpoint) break;
  } catch {}
  await wait(100);
}

if (!endpoint) {
  chrome.kill();
  throw new Error('Chrome DevTools endpoint did not become available.');
}

const socket = new WebSocket(endpoint);
const pending = new Map();
const browserErrors = [];
let commandId = 0;

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (message.method === 'Runtime.exceptionThrown') browserErrors.push(message.params.exceptionDetails.text);
  if (message.method === 'Log.entryAdded' && message.params.entry.level === 'error') browserErrors.push(message.params.entry.text);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++commandId;
  const timeout = setTimeout(() => {
    pending.delete(id);
    reject(new Error(`CDP command timed out: ${method}`));
  }, 10000);
  pending.set(id, {
    resolve: (value) => { clearTimeout(timeout); resolve(value); },
    reject: (error) => { clearTimeout(timeout); reject(error); }
  });
  socket.send(JSON.stringify({ id, method, params }));
});

const evaluate = async (expression) => {
  const response = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (response.exceptionDetails) {
    throw new Error(JSON.stringify(response.exceptionDetails, null, 2));
  }
  return response.result.value;
};

const press = async (key, code = key, modifiers = 0) => {
  const virtualKey = { Enter: 13, ' ': 32, Tab: 9, Escape: 27 }[key];
  const params = { key, code, modifiers, windowsVirtualKeyCode: virtualKey, nativeVirtualKeyCode: virtualKey };
  await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', ...params });
  if (key === ' ') await send('Input.dispatchKeyEvent', { type: 'char', ...params, text: ' ' });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', ...params });
};

const load = async (url) => {
  await send('Page.navigate', { url });
  await wait(900);
};

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

try {
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');

  for (const page of pages) {
    for (const width of widths) {
      console.log(`Validating ${page.locale} at ${width}px...`);
      await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
      await send('Emulation.setScriptExecutionDisabled', { value: false });
      await send('Emulation.setEmulatedMedia', { features: [] });
      await load(`${baseUrl}${page.path}`);

      const audit = JSON.parse(await evaluate(`JSON.stringify({
        lang: document.documentElement.lang,
        title: document.title,
        h1Count: document.querySelectorAll('h1').length,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        heroImageLoaded: document.querySelector('.hero-photo img')?.complete && document.querySelector('.hero-photo img')?.naturalWidth > 0,
        fonts: [400, 500, 600, 700].every((weight) => document.fonts.check(weight + ' 16px Poppins')),
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        alternates: Object.fromEntries(Array.from(document.querySelectorAll('link[rel="alternate"]'), (link) => [link.hreflang, link.href])),
        activeLanguage: document.querySelector('.language-switcher [aria-current="page"]')?.getAttribute('lang'),
        counterpart: document.querySelector('.language-switcher a:not([aria-current="page"])')?.getAttribute('href'),
        menuVisible: getComputedStyle(document.querySelector('.menu-toggle')).display !== 'none',
        navInert: document.querySelector('#primary-navigation').inert,
        anchorLinksLocal: Array.from(document.querySelectorAll('.primary-nav a')).every((link) => link.getAttribute('href')?.startsWith('#')),
        anchorTargetsExist: Array.from(document.querySelectorAll('a[href^="#"]')).every((link) => document.querySelector(link.getAttribute('href'))),
        resourcesAbsent: !document.querySelector('#resources, a[href="#resources"]'),
        serviceCount: document.querySelectorAll('.service-card').length,
        servicesClipped: Array.from(document.querySelectorAll('.service-card')).some((card) => card.scrollHeight > card.clientHeight + 1),
        faqCount: document.querySelectorAll('.faq-item').length,
        faqOpenCount: document.querySelectorAll('.faq-item[open]').length,
        faqNamed: Array.from(document.querySelectorAll('.faq-item')).every((item) => item.getAttribute('name') === 'home-faq'),
        servicesHeight: Math.round(document.querySelector('#services')?.getBoundingClientRect().height ?? 0),
        noindex: document.querySelector('meta[name="robots"]')?.content === 'noindex, nofollow'
      })`));

      const tag = `${page.locale}@${width}`;
      results.push({ tag, overflow: audit.overflow, servicesHeight: audit.servicesHeight, title: audit.title });
      assert(audit.lang === page.locale, `${tag}: html lang is ${audit.lang}`);
      assert(audit.h1Count === 1, `${tag}: expected one H1, found ${audit.h1Count}`);
      assert(audit.overflow <= 0, `${tag}: horizontal overflow ${audit.overflow}px`);
      assert(audit.heroImageLoaded, `${tag}: priority hero image failed to load`);
      assert(audit.fonts, `${tag}: one or more Poppins weights unavailable`);
      assert(Boolean(audit.canonical), `${tag}: canonical missing`);
      assert(Boolean(audit.alternates.en && audit.alternates.es && audit.alternates['x-default']), `${tag}: alternates incomplete`);
      assert(audit.activeLanguage === page.locale, `${tag}: active language is ${audit.activeLanguage}`);
      assert(audit.counterpart === page.counterpart, `${tag}: counterpart is ${audit.counterpart}`);
      assert(audit.anchorLinksLocal, `${tag}: header exposes a non-anchor route`);
      assert(audit.anchorTargetsExist, `${tag}: one or more local anchors have no target`);
      assert(audit.resourcesAbsent, `${tag}: Resources remains visible or linked`);
      assert(audit.serviceCount === 6 && !audit.servicesClipped, `${tag}: service count or card clipping failed`);
      assert(audit.faqCount === 4 && audit.faqOpenCount === 1 && audit.faqNamed, `${tag}: initial FAQ structure/state failed`);
      assert(audit.noindex, `${tag}: noindex missing`);
      assert(width <= 880 ? audit.menuVisible && audit.navInert : !audit.menuVisible && !audit.navInert, `${tag}: responsive navigation state is incorrect`);
    }
  }

  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: false });
  await send('Emulation.setScriptExecutionDisabled', { value: false });
  await load(`${baseUrl}/es/`);
  await evaluate("document.querySelector('.menu-toggle').focus()");
  await press(' ', 'Space');
  await wait(80);
  let menu = JSON.parse(await evaluate(`JSON.stringify({
    expanded: document.querySelector('.menu-toggle').getAttribute('aria-expanded'),
    inert: document.querySelector('#primary-navigation').inert,
    label: document.querySelector('.menu-toggle .sr-only').textContent
  })`));
  assert(menu.expanded === 'true' && menu.inert === false && menu.label === 'Cerrar navegación', 'mobile keyboard activation failed');
  await press('Escape');
  await wait(80);
  menu = JSON.parse(await evaluate(`JSON.stringify({
    expanded: document.querySelector('.menu-toggle').getAttribute('aria-expanded'),
    inert: document.querySelector('#primary-navigation').inert,
    focusReturned: document.activeElement === document.querySelector('.menu-toggle')
  })`));
  assert(menu.expanded === 'false' && menu.inert === true && menu.focusReturned, 'Escape close or focus return failed');

  await evaluate("document.querySelector('.menu-toggle').click(); document.querySelector('.primary-nav a[href=\"#services\"]').focus()");
  await press('Enter');
  await wait(120);
  const anchor = JSON.parse(await evaluate(`JSON.stringify({
    hash: location.hash,
    expanded: document.querySelector('.menu-toggle').getAttribute('aria-expanded'),
    inert: document.querySelector('#primary-navigation').inert,
    focusedId: document.activeElement?.id
  })`));
  assert(anchor.hash === '#services' && anchor.expanded === 'false' && anchor.inert === true && anchor.focusedId === 'services', 'anchor close or destination focus failed');

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await load(`${baseUrl}/`);
  await evaluate("document.querySelectorAll('.faq-item summary')[0].focus()");
  await press('Enter');
  await wait(80);
  assert(await evaluate("document.querySelectorAll('.faq-item[open]').length") === 0, 'active FAQ row did not close with Enter');
  await press(' ', 'Space');
  await wait(80);
  assert(await evaluate("document.querySelectorAll('.faq-item[open]').length === 1 && document.querySelectorAll('.faq-item')[0].open"), 'FAQ row did not open with Space');
  await press('Tab', 'Tab');
  assert(await evaluate("document.activeElement === document.querySelectorAll('.faq-item summary')[1]"), 'FAQ Tab order failed');
  await press('Tab', 'Tab', 8);
  assert(await evaluate("document.activeElement === document.querySelectorAll('.faq-item summary')[0]"), 'FAQ Shift+Tab order failed');
  for (let index = 1; index < 4; index += 1) {
    await evaluate(`document.querySelectorAll('.faq-item summary')[${index}].focus()`);
    await press('Enter');
    await wait(80);
    const state = await evaluate(`JSON.stringify(Array.from(document.querySelectorAll('.faq-item'), (item) => item.open))`);
    const open = JSON.parse(state);
    assert(open.filter(Boolean).length === 1 && open[index], `FAQ exclusivity failed at item ${index + 1}`);
  }
  await press(' ', 'Space');
  await wait(80);
  assert(await evaluate("document.querySelectorAll('.faq-item[open]').length") === 0, 'final active FAQ row did not close');

  await evaluate(`(async () => {
    for (let y = 0; y <= document.documentElement.scrollHeight; y += Math.max(400, innerHeight * .75)) {
      scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    scrollTo(0, document.documentElement.scrollHeight);
  })()`);
  await wait(500);
  const allImagesLoaded = await evaluate("Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0)");
  assert(allImagesLoaded, 'one or more lazy images failed to load after full-page traversal');
  const overlap = JSON.parse(await evaluate(`JSON.stringify((() => {
    const switcher = document.querySelector('.language-switcher').getBoundingClientRect();
    const overlaps = Array.from(document.querySelectorAll('.site-footer a')).filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.left < switcher.right && rect.right > switcher.left && rect.top < switcher.bottom && rect.bottom > switcher.top;
    }).map((element) => element.textContent.trim());
    return { overlaps, switcherBottom: switcher.bottom, viewportHeight: innerHeight };
  })())`));
  assert(overlap.overlaps.length === 0, `language switcher overlaps footer links: ${overlap.overlaps.join(', ')}`);
  assert(overlap.switcherBottom <= overlap.viewportHeight, 'language switcher is outside the mobile viewport');

  await send('Emulation.setScriptExecutionDisabled', { value: true });
  await load(`${baseUrl}/es/`);
  const noJs = JSON.parse(await evaluate(`JSON.stringify({
    toggleDisplay: getComputedStyle(document.querySelector('.menu-toggle')).display,
    navDisplay: getComputedStyle(document.querySelector('#primary-navigation')).display,
    navLinks: document.querySelectorAll('#primary-navigation a').length,
    switchLinks: Array.from(document.querySelectorAll('.language-switcher a'), (link) => link.getAttribute('href')),
    faqCount: document.querySelectorAll('.faq-item').length,
    faqAnswersInHtml: Array.from(document.querySelectorAll('.faq-answer')).every((answer) => answer.textContent.trim().length > 0),
    faqNamed: Array.from(document.querySelectorAll('.faq-item')).every((item) => item.getAttribute('name') === 'home-faq')
  })`));
  assert(noJs.toggleDisplay === 'none' && noJs.navDisplay !== 'none' && noJs.navLinks > 0, 'no-JavaScript navigation is not available');
  assert(noJs.switchLinks.includes('/') && noJs.switchLinks.includes('/es/'), 'no-JavaScript language links are incomplete');
  assert(noJs.faqCount === 4 && noJs.faqAnswersInHtml && noJs.faqNamed, 'no-JavaScript FAQ content or native behavior is unavailable');

  await send('Emulation.setScriptExecutionDisabled', { value: false });
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await load(`${baseUrl}/`);
  const reducedMotion = JSON.parse(await evaluate(`JSON.stringify({
    matches: matchMedia('(prefers-reduced-motion: reduce)').matches,
    scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    transitionDuration: getComputedStyle(document.querySelector('.button')).transitionDuration
  })`));
  assert(reducedMotion.matches && reducedMotion.scrollBehavior === 'auto', 'reduced-motion scroll behavior failed');
  assert(reducedMotion.transitionDuration.split(',').every((value) => parseFloat(value) <= 0.001), `reduced-motion transition is ${reducedMotion.transitionDuration}`);
  assert(browserErrors.length === 0, `browser errors: ${browserErrors.join(' | ')}`);
} finally {
  socket.close();
  chrome.kill();
  chrome.unref();
}

console.log(JSON.stringify({ baseUrl, results, browserErrors, failures }, null, 2));
if (failures.length > 0) process.exit(1);
