import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';

const baseUrl = process.argv[2] ?? 'http://127.0.0.1:4321';
const chromePath = process.env.CHROME_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9450;
const profile = path.join(os.tmpdir(), 'downtown-v2-chrome-qa', `bilingual-captures-${port}`);
const outputDirectory = path.resolve('artifacts/screenshots');
const segmentRoot = path.join(os.tmpdir(), 'downtown-bilingual-captures');
const captureFilter = process.argv[3];
const captureDefinitions = [
  { name: 'home-adjusted-en-1440.png', path: '/', width: 1440, height: 900, fullPage: true },
  { name: 'home-adjusted-en-390.png', path: '/', width: 390, height: 844, fullPage: true },
  { name: 'home-adjusted-es-1440.png', path: '/es/', width: 1440, height: 900, fullPage: true },
  { name: 'home-adjusted-es-390.png', path: '/es/', width: 390, height: 844, fullPage: true },
  { name: 'home-adjusted-faq-en-1440.png', path: '/', width: 1440, height: 900, scrollSelector: '#faq' },
  { name: 'home-adjusted-language-switcher-footer-es-390.png', path: '/es/', width: 390, height: 844, scrollBottom: true },
  { phase: 'services', name: 'services-home-regression-en-1440.png', path: '/', width: 1440, height: 900, fullPage: true },
  { phase: 'services', name: 'services-home-regression-es-390.png', path: '/es/', width: 390, height: 844, fullPage: true },
  { phase: 'services', name: 'services-language-switcher-footer-es-390.png', path: '/es/servicios/escrow-casas-manufacturadas/', width: 390, height: 844, scrollBottom: true },
  { phase: 'navigation', name: 'navigation-selector-en-1440.png', path: '/services/manufactured-home-escrow/', width: 1440, height: 760 },
  { phase: 'navigation', name: 'navigation-selector-es-390.png', path: '/es/servicios/escrow-casas-manufacturadas/', width: 390, height: 760, openMenu: true },
  { phase: 'navigation', name: 'language-selector-footer-es-390.png', path: '/es/servicios/escrow-casas-manufacturadas/', width: 390, height: 844, scrollBottom: true },
  { phase: 'submenu', name: 'services-submenu-open-en-1440.png', path: '/services/manufactured-home-escrow/', width: 1440, height: 760, openServicesSubmenu: true },
  { phase: 'submenu', name: 'services-submenu-open-es-390.png', path: '/es/servicios/escrow-casas-manufacturadas/', width: 390, height: 844, openMenu: true, openServicesSubmenu: true },
  { phase: 'specialty', name: 'manufactured-home-escrow-en-1440.png', path: '/services/manufactured-home-escrow/', width: 1440, height: 900, fullPage: true },
  { phase: 'specialty', name: 'manufactured-home-escrow-en-390.png', path: '/services/manufactured-home-escrow/', width: 390, height: 844, fullPage: true },
  { phase: 'specialty', name: 'manufactured-home-escrow-es-1440.png', path: '/es/servicios/escrow-casas-manufacturadas/', width: 1440, height: 900, fullPage: true },
  { phase: 'specialty', name: 'manufactured-home-escrow-es-390.png', path: '/es/servicios/escrow-casas-manufacturadas/', width: 390, height: 844, fullPage: true },
  { phase: 'short-sale', name: 'short-sale-escrow-en-1440.png', path: '/services/short-sale-escrow/', width: 1440, height: 900, fullPage: true },
  { phase: 'short-sale', name: 'short-sale-escrow-en-390.png', path: '/services/short-sale-escrow/', width: 390, height: 844, fullPage: true },
  { phase: 'short-sale', name: 'short-sale-escrow-es-1440.png', path: '/es/servicios/escrow-short-sale/', width: 1440, height: 900, fullPage: true },
  { phase: 'short-sale', name: 'short-sale-escrow-es-390.png', path: '/es/servicios/escrow-short-sale/', width: 390, height: 844, fullPage: true },
  { phase: 'reverse-mortgage', name: 'reverse-mortgage-escrow-en-1440.png', path: '/services/reverse-mortgage-escrow/', width: 1440, height: 900, fullPage: true },
  { phase: 'reverse-mortgage', name: 'reverse-mortgage-escrow-en-390.png', path: '/services/reverse-mortgage-escrow/', width: 390, height: 844, fullPage: true },
  { phase: 'reverse-mortgage', name: 'reverse-mortgage-escrow-es-1440.png', path: '/es/servicios/escrow-hipoteca-inversa/', width: 1440, height: 900, fullPage: true },
  { phase: 'reverse-mortgage', name: 'reverse-mortgage-escrow-es-390.png', path: '/es/servicios/escrow-hipoteca-inversa/', width: 390, height: 844, fullPage: true },
  { phase: 'residential', name: 'residential-escrow-en-1440.png', path: '/services/residential-escrow/', width: 1440, height: 900, fullPage: true },
  { phase: 'residential', name: 'residential-escrow-en-390.png', path: '/services/residential-escrow/', width: 390, height: 844, fullPage: true },
  { phase: 'residential', name: 'residential-escrow-es-1440.png', path: '/es/servicios/escrow-residencial/', width: 1440, height: 900, fullPage: true },
  { phase: 'residential', name: 'residential-escrow-es-390.png', path: '/es/servicios/escrow-residencial/', width: 390, height: 844, fullPage: true },
  { phase: 'commercial', name: 'commercial-escrow-en-1440.png', path: '/services/commercial-escrow/', width: 1440, height: 900, fullPage: true },
  { phase: 'commercial', name: 'commercial-escrow-en-390.png', path: '/services/commercial-escrow/', width: 390, height: 844, fullPage: true },
  { phase: 'commercial', name: 'commercial-escrow-es-1440.png', path: '/es/servicios/escrow-comercial/', width: 1440, height: 900, fullPage: true },
  { phase: 'commercial', name: 'commercial-escrow-es-390.png', path: '/es/servicios/escrow-comercial/', width: 390, height: 844, fullPage: true },
  { phase: 'about', name: 'about-en-1440.png', path: '/about/', width: 1440, height: 900, fullPage: true },
  { phase: 'about', name: 'about-en-390.png', path: '/about/', width: 390, height: 844, fullPage: true },
  { phase: 'about', name: 'about-es-1440.png', path: '/es/nosotros/', width: 1440, height: 900, fullPage: true },
  { phase: 'about', name: 'about-es-390.png', path: '/es/nosotros/', width: 390, height: 844, fullPage: true },
  { phase: 'contact', name: 'contact-en-1440.png', path: '/contact/', width: 1440, height: 900, fullPage: true },
  { phase: 'contact', name: 'contact-en-390.png', path: '/contact/', width: 390, height: 844, fullPage: true },
  { phase: 'contact', name: 'contact-es-1440.png', path: '/es/contacto/', width: 1440, height: 900, fullPage: true },
  { phase: 'contact', name: 'contact-es-390.png', path: '/es/contacto/', width: 390, height: 844, fullPage: true }
];
const captures = captureFilter === 'services-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'services')
  : captureFilter === 'navigation-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'navigation')
  : captureFilter === 'submenu-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'submenu')
  : captureFilter === 'specialty-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'specialty')
  : captureFilter === 'short-sale-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'short-sale')
  : captureFilter === 'reverse-mortgage-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'reverse-mortgage')
  : captureFilter === 'residential-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'residential')
  : captureFilter === 'commercial-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'commercial')
  : captureFilter === 'about-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'about')
  : captureFilter === 'contact-phase'
  ? captureDefinitions.filter((capture) => capture.phase === 'contact')
  : captureFilter
  ? captureDefinitions.filter((capture) => capture.name === captureFilter)
  : captureDefinitions;
if (captures.length === 0) throw new Error(`Unknown capture: ${captureFilter}`);

await mkdir(outputDirectory, { recursive: true });
await mkdir(profile, { recursive: true });

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
for (let attempt = 0; attempt < 80; attempt += 1) {
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
let commandId = 0;

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
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
  }, method === 'Page.captureScreenshot' ? 120000 : 30000);
  pending.set(id, {
    resolve: (value) => { clearTimeout(timeout); resolve(value); },
    reject: (error) => { clearTimeout(timeout); reject(error); }
  });
  socket.send(JSON.stringify({ id, method, params }));
});

const evaluate = async (expression) => {
  const response = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description ?? response.exceptionDetails.text);
  return response.result.value;
};

try {
  await send('Page.enable');
  await send('Runtime.enable');

  for (const capture of captures) {
    process.stdout.write(`Capturing ${capture.name}...\n`);
    await send('Emulation.setDeviceMetricsOverride', {
      width: capture.width,
      height: capture.height,
      deviceScaleFactor: 1,
      mobile: false
    });
    await send('Page.navigate', { url: `${baseUrl}${capture.path}` });
    await wait(1000);

    if (capture.openMenu) {
      await evaluate("document.querySelector('.menu-toggle')?.click()");
      await wait(250);
    }

    if (capture.openServicesSubmenu) {
      await evaluate("document.querySelector('.services-submenu-toggle')?.click()");
      await wait(250);
    }

    await evaluate(`(async () => {
      for (let y = 0; y <= document.documentElement.scrollHeight; y += Math.max(400, innerHeight * .75)) {
        scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 110));
      }
      scrollTo(0, ${capture.scrollBottom ? 'document.documentElement.scrollHeight' : '0'});
    })()`);
    await wait(400);

    if (capture.fullPage) {
      const segmentDirectory = path.join(segmentRoot, capture.name.replace(/\.png$/i, ''));
      await mkdir(segmentDirectory, { recursive: true });
      await evaluate("document.documentElement.style.scrollBehavior = 'auto'; document.querySelector('.language-switcher').style.visibility = 'hidden'; scrollTo(0, 0)");
      const pageMetrics = await send('Page.getLayoutMetrics');
      const totalHeight = Math.ceil(pageMetrics.cssContentSize.height);
      let segmentIndex = 0;
      const composite = [];
      for (let y = 0; y < totalHeight; y += capture.height) {
        await evaluate(`scrollTo(0, ${y})`);
        await wait(180);
        const segmentHeight = Math.min(capture.height, totalHeight - y);
        const screenshot = await send('Page.captureScreenshot', {
          format: 'png',
          fromSurface: true,
          captureBeyondViewport: false,
          clip: {
            x: 0,
            y,
            width: capture.width,
            height: segmentHeight,
            scale: 1
          }
        });
        const segmentPath = path.join(segmentDirectory, `${String(segmentIndex).padStart(3, '0')}.png`);
        await writeFile(segmentPath, Buffer.from(screenshot.data, 'base64'));
        composite.push({ input: segmentPath, left: 0, top: y });
        segmentIndex += 1;
      }
      const output = path.join(outputDirectory, capture.name);
      await sharp({ create: { width: capture.width, height: totalHeight, channels: 4, background: '#ffffff' } })
        .composite(composite)
        .png()
        .toFile(output);
      process.stdout.write(`SEGMENTS ${segmentDirectory} ${capture.width}x${totalHeight} count=${segmentIndex}\n`);
      process.stdout.write(`${output} ${capture.width}x${totalHeight}\n`);
      continue;
    }

    if (capture.scrollSelector) {
      await evaluate(`document.querySelector(${JSON.stringify(capture.scrollSelector)})?.scrollIntoView({ block: 'start' })`);
      await wait(250);
    }

    const metrics = await send('Page.getLayoutMetrics');
    const clip = { x: 0, y: metrics.cssVisualViewport.pageY, width: capture.width, height: capture.height, scale: 1 };
    process.stdout.write(`Rasterizing ${Math.round(clip.width)}x${Math.round(clip.height)}...\n`);
    const screenshot = await send('Page.captureScreenshot', {
      format: 'png',
      fromSurface: true,
      captureBeyondViewport: false,
      clip
    });
    const output = path.join(outputDirectory, capture.name);
    await writeFile(output, Buffer.from(screenshot.data, 'base64'));
    process.stdout.write(`${output} ${Math.round(clip.width)}x${Math.round(clip.height)}\n`);
  }
} finally {
  socket.close();
  chrome.kill();
  chrome.unref();
}
