import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const options = Object.fromEntries(process.argv.slice(2).map((value) => {
  const [key, ...rest] = value.replace(/^--/, '').split('=');
  return [key, rest.join('=') || true];
}));

const width = Number(options.width ?? 1440);
const height = Number(options.height ?? 900);
const output = path.resolve(String(options.output ?? 'screenshot.png'));
const url = String(options.url ?? 'http://127.0.0.1:4321/');
const disableJs = options['disable-js'] === true;
const openMenu = options['open-menu'] === true;
const fullPage = options['full-page'] === true;
const reducedMotion = options['reduced-motion'] === true;
const scrollBottom = options['scroll-bottom'] === true;
const port = Number(options.port ?? 9333);
const chromePath = process.env.CHROME_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profile = path.join(os.tmpdir(), 'downtown-v2-chrome-qa', `cdp-${port}`);

await mkdir(path.dirname(output), { recursive: true });
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
for (let attempt = 0; attempt < 50; attempt += 1) {
  try {
    const tabs = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
    endpoint = tabs.find((tab) => tab.type === 'page')?.webSocketDebuggerUrl;
    if (endpoint) break;
  } catch {}
  await wait(100);
}

if (!endpoint) {
  chrome.kill();
  chrome.unref();
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
  }, 15000);
  pending.set(id, {
    resolve: (value) => { clearTimeout(timeout); resolve(value); },
    reject: (error) => { clearTimeout(timeout); reject(error); }
  });
  socket.send(JSON.stringify({ id, method, params }));
});

const report = [];

try {
  process.stderr.write('capture: enabling page\n');
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false
  });
  if (reducedMotion) {
    await send('Emulation.setEmulatedMedia', {
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }]
    });
  }
  if (disableJs) await send('Emulation.setScriptExecutionDisabled', { value: true });
  process.stderr.write('capture: navigating\n');
  await send('Page.navigate', { url });
  await wait(900);

  process.stderr.write('capture: waiting for priority assets\n');
  await send('Runtime.evaluate', {
    expression: "Promise.race([Promise.all([document.fonts.ready, ...Array.from(document.querySelectorAll('.hero-photo img'), (image) => image.complete ? Promise.resolve() : new Promise((resolve) => { image.addEventListener('load', resolve, { once: true }); image.addEventListener('error', resolve, { once: true }); }))]), new Promise((resolve) => setTimeout(resolve, 2000))])",
    awaitPromise: true
  });

  if (fullPage) {
    process.stderr.write('capture: traversing full page\n');
    await send('Runtime.evaluate', {
      expression: `(async () => {
        for (let y = 0; y <= document.documentElement.scrollHeight; y += Math.max(400, innerHeight * .75)) {
          scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        scrollTo(0, 0);
      })()`,
      awaitPromise: true
    });
    await wait(350);
  }

  if (scrollBottom) {
    process.stderr.write('capture: scrolling to footer\n');
    await send('Runtime.evaluate', {
      expression: 'scrollTo(0, document.documentElement.scrollHeight)',
      awaitPromise: true
    });
    await wait(250);
  }

  if (openMenu) {
    await send('Runtime.evaluate', {
      expression: "document.querySelector('.menu-toggle')?.click()",
      awaitPromise: true
    });
    await wait(150);
  }

  const metrics = await send('Page.getLayoutMetrics');
  const clip = fullPage
    ? { x: 0, y: 0, width: metrics.cssContentSize.width, height: metrics.cssContentSize.height, scale: 1 }
    : { x: 0, y: 0, width, height, scale: 1 };
  process.stderr.write(`capture: rasterizing ${Math.round(clip.width)}x${Math.round(clip.height)}\n`);
  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
    clip
  });
  await writeFile(output, Buffer.from(screenshot.data, 'base64'));
  process.stderr.write('capture: saved\n');
  report.push(String(output), `${Math.round(clip.width)}x${Math.round(clip.height)}`);

  if (reducedMotion) {
    const audit = await send('Runtime.evaluate', {
      expression: `JSON.stringify({
        mediaMatches: matchMedia('(prefers-reduced-motion: reduce)').matches,
        scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
        buttonTransitionDuration: getComputedStyle(document.querySelector('.button')).transitionDuration
      })`,
      returnByValue: true
    });
    report.push(audit.result.value);
  }
} finally {
  socket.close();
  chrome.kill();
  chrome.unref();
}

await new Promise((resolve) => process.stdout.write(`${report.join('\n')}\n`, resolve));
process.exit(0);
