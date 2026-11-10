import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const baseUrl = process.argv[2] ?? 'http://127.0.0.1:4321';
const productionOrigin = 'https://downtownescrow.net';
const chromePath = process.env.CHROME_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9446;
const profile = path.join(os.tmpdir(), 'downtown-v2-chrome-qa', `site-validation-${port}`);
const widths = [320, 390, 768, 880, 881, 1024, 1440, 1920];
const specialtyRoutes = {
  en: ['/services/manufactured-home-escrow/', '/services/short-sale-escrow/', '/services/probate-escrow/', '/services/reverse-mortgage-escrow/', '/services/residential-escrow/', '/services/commercial-escrow/'],
  es: ['/es/servicios/escrow-casas-manufacturadas/', '/es/servicios/escrow-short-sale/', '/es/servicios/escrow-probate/', '/es/servicios/escrow-hipoteca-inversa/', '/es/servicios/escrow-residencial/', '/es/servicios/escrow-comercial/']
};
const catalogRoutes = {
  en: [specialtyRoutes.en[4], specialtyRoutes.en[5], specialtyRoutes.en[2], specialtyRoutes.en[0], specialtyRoutes.en[0], specialtyRoutes.en[1], specialtyRoutes.en[3]],
  es: [specialtyRoutes.es[4], specialtyRoutes.es[5], specialtyRoutes.es[2], specialtyRoutes.es[0], specialtyRoutes.es[0], specialtyRoutes.es[1], specialtyRoutes.es[3]]
};
const aboutRoutes = { en: '/about/', es: '/es/nosotros/' };
const contactRoutes = { en: '/contact/', es: '/es/contacto/' };
const pages = [
  { key: 'home', locale: 'en', path: '/', counterpart: '/es/', home: '/', currentService: null, sourceCount: 0, relatedCount: 0 },
  { key: 'home', locale: 'es', path: '/es/', counterpart: '/', home: '/es/', currentService: null, sourceCount: 0, relatedCount: 0 },
  { key: 'about', locale: 'en', path: aboutRoutes.en, counterpart: aboutRoutes.es, home: '/', currentService: null, sourceCount: 0, relatedCount: 0 },
  { key: 'about', locale: 'es', path: aboutRoutes.es, counterpart: aboutRoutes.en, home: '/es/', currentService: null, sourceCount: 0, relatedCount: 0 },
  { key: 'contact', locale: 'en', path: contactRoutes.en, counterpart: contactRoutes.es, home: '/', currentService: null, sourceCount: 0, relatedCount: 0 },
  { key: 'contact', locale: 'es', path: contactRoutes.es, counterpart: contactRoutes.en, home: '/es/', currentService: null, sourceCount: 0, relatedCount: 0 },
  { key: 'manufacturedHomes', locale: 'en', path: specialtyRoutes.en[0], counterpart: specialtyRoutes.es[0], home: '/', currentService: 3, sourceCount: 2, relatedCount: 0 },
  { key: 'manufacturedHomes', locale: 'es', path: specialtyRoutes.es[0], counterpart: specialtyRoutes.en[0], home: '/es/', currentService: 3, sourceCount: 2, relatedCount: 0 },
  { key: 'shortSale', locale: 'en', path: specialtyRoutes.en[1], counterpart: specialtyRoutes.es[1], home: '/', currentService: 5, sourceCount: 3, relatedCount: 0 },
  { key: 'shortSale', locale: 'es', path: specialtyRoutes.es[1], counterpart: specialtyRoutes.en[1], home: '/es/', currentService: 5, sourceCount: 3, relatedCount: 0 },
  { key: 'probate', locale: 'en', path: specialtyRoutes.en[2], counterpart: specialtyRoutes.es[2], home: '/', currentService: 2, sourceCount: 4, relatedCount: 2 },
  { key: 'probate', locale: 'es', path: specialtyRoutes.es[2], counterpart: specialtyRoutes.en[2], home: '/es/', currentService: 2, sourceCount: 4, relatedCount: 2 },
  { key: 'reverseMortgage', locale: 'en', path: specialtyRoutes.en[3], counterpart: specialtyRoutes.es[3], home: '/', currentService: 6, sourceCount: 5, relatedCount: 1 },
  { key: 'reverseMortgage', locale: 'es', path: specialtyRoutes.es[3], counterpart: specialtyRoutes.en[3], home: '/es/', currentService: 6, sourceCount: 5, relatedCount: 1 },
  { key: 'residential', locale: 'en', path: specialtyRoutes.en[4], counterpart: specialtyRoutes.es[4], home: '/', currentService: 0, sourceCount: 3, relatedCount: 0 },
  { key: 'residential', locale: 'es', path: specialtyRoutes.es[4], counterpart: specialtyRoutes.en[4], home: '/es/', currentService: 0, sourceCount: 3, relatedCount: 0 },
  { key: 'commercial', locale: 'en', path: specialtyRoutes.en[5], counterpart: specialtyRoutes.es[5], home: '/', currentService: 1, sourceCount: 3, relatedCount: 1 },
  { key: 'commercial', locale: 'es', path: specialtyRoutes.es[5], counterpart: specialtyRoutes.en[5], home: '/es/', currentService: 1, sourceCount: 3, relatedCount: 1 }
];
const navigationLabels = {
  en: ['Home', 'About', 'Contact'],
  es: ['Inicio', 'Nosotros', 'Contacto']
};
const serviceLabels = {
  en: ['Residential', 'Commercial', 'Probate', 'Manufactured Homes', 'Mobile Homes', 'Short Sales', 'Reverse Mortgage'],
  es: ['Residencial', 'Comercial', 'Probate', 'Casas manufacturadas', 'Casas móviles', 'Ventas cortas', 'Hipoteca inversa']
};
const wholesaleLabels = { en: 'Wholesale', es: 'Wholesale' };
const heroExpectations = {
  en: {
    kicker: 'Independent escrow · Santa Ana, CA',
    h1: 'Every Property Has a Story. Every Closing Needs Escrow.',
    intro: 'Independent escrow services for residential, commercial, and specialized real estate transactions. Based in Santa Ana, California.',
    primary: 'Our Escrow Services',
    secondary: 'Contact Downtown',
    cards: ['Residential Escrow', 'Commercial Escrow', 'Probate Escrow'],
    cardDescriptions: [
      'Escrow coordination for home purchases and sales, from opening through closing.',
      'Coordinating escrow requirements for commercial real estate transactions.',
      'Escrow coordination for property sales involving probate or estate administration.'
    ]
  },
  es: {
    kicker: 'Escrow independiente · Santa Ana, CA',
    h1: 'Cada propiedad tiene una historia. Cada cierre necesita escrow.',
    intro: 'Servicios independientes de escrow para operaciones inmobiliarias residenciales, comerciales y especializadas. Estamos ubicados en Santa Ana, California.',
    primary: 'Nuestros servicios',
    secondary: 'Contactar a Downtown',
    cards: ['Escrow residencial', 'Escrow comercial', 'Escrow de probate'],
    cardDescriptions: [
      'Coordinación de escrow para la compra y venta de viviendas, desde la apertura hasta el cierre.',
      'Coordinación de requisitos de escrow en transacciones de bienes raíces comerciales.',
      'Coordinación de escrow para ventas de propiedades relacionadas con procesos sucesorios.'
    ]
  }
};
const serviceButtonLabels = { en: 'Services', es: 'Servicios' };
const serviceToggleLabels = {
  en: { open: 'Open Services specialties', close: 'Close Services specialties' },
  es: { open: 'Abrir especialidades de Servicios', close: 'Cerrar especialidades de Servicios' }
};
const comingSoonLabels = { en: 'Coming soon', es: 'Próximamente' };
const homeServiceExpectations = {
  en: {
    eyebrow: 'Our services',
    heading: 'Escrow Services for Every Type of Transaction',
    intro: 'Explore residential, commercial, and specialized escrow services designed to match the type of property and transaction involved.',
    labels: ['Residential Escrow', 'Commercial Escrow', 'Probate Escrow', 'Manufactured Homes', 'Mobile Homes', 'Short Sales', 'Reverse Mortgage', 'Wholesale'],
    descriptions: [
      'Escrow coordination for home purchases and sales, from opening through closing.',
      'Escrow coordination for commercial real estate transactions and closing requirements.',
      'Escrow coordination for property sales involving probate or estate administration.',
      'Escrow coordination for manufactured home transactions shaped by title, land, and property records.',
      'Escrow coordination for mobile home transactions involving title, land, and location-specific requirements.',
      'Escrow coordination for short sale transactions involving lender approval and closing instructions.',
      'Escrow coordination when a reverse mortgage is part of the transaction or closing process.',
      'Coming soon.'
    ]
  },
  es: {
    eyebrow: 'Nuestros servicios',
    heading: 'Servicios de escrow para cada tipo de operación',
    intro: 'Explora servicios de escrow residenciales, comerciales y especializados, según el tipo de propiedad y la operación que necesites coordinar.',
    labels: ['Escrow residencial', 'Escrow comercial', 'Escrow de probate', 'Manufactured Homes', 'Mobile Homes', 'Short Sales', 'Reverse Mortgage', 'Wholesale'],
    descriptions: [
      'Coordinación de escrow para la compra y venta de viviendas, desde la apertura hasta el cierre.',
      'Coordinación de escrow para transacciones de bienes raíces comerciales y sus requisitos de cierre.',
      'Coordinación de escrow para ventas de propiedades relacionadas con probate o administración sucesoria.',
      'Coordinación de escrow para operaciones con manufactured homes, según título, terreno y registros de propiedad.',
      'Coordinación de escrow para operaciones con mobile homes, según título, terreno y requisitos de ubicación.',
      'Coordinación de escrow para operaciones short sale sujetas a aprobación del prestamista e instrucciones de cierre.',
      'Coordinación de escrow cuando una reverse mortgage forma parte de la operación o del cierre.',
      'Próximamente.'
    ]
  }
};
const failures = [];
const results = [];
const browserErrors = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const chrome = spawn(chromePath, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, 'about:blank'
], { stdio: ['ignore', 'ignore', 'inherit'] });

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
  }, 15000);
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
const load = async (url) => {
  await send('Page.navigate', { url });
  for (let attempt = 0; attempt < 60; attempt += 1) {
    await wait(100);
    try {
      if (await evaluate(`location.href === ${JSON.stringify(url)} && document.readyState === 'complete'`)) break;
    } catch {}
  }
  await evaluate('document.fonts.ready');
};
const press = async (key, code = key, modifiers = 0) => {
  const virtualKey = { Enter: 13, ' ': 32, Tab: 9, Escape: 27 }[key];
  const params = { key, code, modifiers, windowsVirtualKeyCode: virtualKey, nativeVirtualKeyCode: virtualKey };
  await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', ...params });
  if (key === ' ') await send('Input.dispatchKeyEvent', { type: 'char', ...params, text: ' ' });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', ...params });
};

try {
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');

  for (const page of pages) {
    for (const width of widths) {
      console.log(`Validating ${page.key} ${page.locale} at ${width}px...`);
      await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
      await send('Emulation.setScriptExecutionDisabled', { value: false });
      await send('Emulation.setEmulatedMedia', { features: [] });
      await load(`${baseUrl}${page.path}`);
      const audit = JSON.parse(await evaluate(`JSON.stringify({
        lang: document.documentElement.lang,
        h1Count: document.querySelectorAll('h1').length,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        fonts: [400, 500, 600, 700].every((weight) => document.fonts.check(weight + ' 16px Poppins')),
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        description: document.querySelector('meta[name="description"]')?.content,
        alternates: Object.fromEntries(Array.from(document.querySelectorAll('link[rel="alternate"]'), (link) => [link.hreflang, link.href])),
        noindex: document.querySelector('meta[name="robots"]')?.content === 'noindex, nofollow',
        languageCurrent: document.querySelector('.language-switcher [aria-current="page"]')?.getAttribute('lang'),
        languageTarget: document.querySelector('.language-switcher a:not([aria-current="page"])')?.getAttribute('href'),
        mainNavigation: Array.from(document.querySelectorAll('.primary-nav__list > li > a'), (link) => ({ label: link.textContent.trim(), href: link.getAttribute('href'), current: link.getAttribute('aria-current') })),
        servicesButton: (() => {
          const button = document.querySelector('.services-submenu-toggle');
          const submenu = document.querySelector('.services-submenu');
          return { text: button?.querySelector('span')?.textContent.trim(), label: button?.getAttribute('aria-label'), expanded: button?.getAttribute('aria-expanded'), controls: button?.getAttribute('aria-controls'), target: submenu?.id, active: button?.classList.contains('active'), submenuInert: submenu?.inert, submenuVisible: submenu ? getComputedStyle(submenu).display !== 'none' : false };
        })(),
        submenuLinks: Array.from(document.querySelectorAll('.services-submenu a'), (link) => ({ label: link.textContent.trim(), href: link.getAttribute('href'), current: link.getAttribute('aria-current') })),
        submenuPending: Array.from(document.querySelectorAll('.services-submenu__pending'), (item) => ({ label: item.querySelector('span')?.textContent.trim(), status: item.querySelector('small')?.textContent.trim() })),
        footerNavigation: Array.from(document.querySelectorAll('.footer-grid > .footer-column:nth-child(2) a'), (link) => ({ label: link.textContent.trim(), href: link.getAttribute('href') })),
        footerServiceLinks: Array.from(document.querySelectorAll('.footer-column:nth-child(3) a'), (link) => link.getAttribute('href')),
        footerServicePending: Array.from(document.querySelectorAll('.footer-service-pending'), (item) => item.textContent.trim()),
        hubLinks: Array.from(document.querySelectorAll('a'), (link) => link.getAttribute('href')).filter((href) => href === '/services/' || href === '/es/servicios/' || href?.startsWith('/services/#') || href?.startsWith('/es/servicios/#')),
        localAnchorsValid: Array.from(document.querySelectorAll('a[href^="#"]')).every((link) => document.querySelector(link.getAttribute('href'))),
        menuVisible: getComputedStyle(document.querySelector('.menu-toggle')).display !== 'none',
        navInert: document.querySelector('#primary-navigation').inert,
        resourcesAbsent: !document.querySelector('#resources, a[href="/resources/"], a[href="/es/recursos/"]'),
        homeServiceCardLinks: Array.from(document.querySelectorAll('.service-card a'), (link) => link.getAttribute('href')),
        homeServiceLabels: Array.from(document.querySelectorAll('.service-card h3'), (heading) => heading.textContent.trim()),
        homeServiceDescriptions: Array.from(document.querySelectorAll('.service-card p'), (item) => item.textContent.trim()),
        homeServicePending: Array.from(document.querySelectorAll('.service-card__status'), (item) => item.textContent.trim()),
        homeServicesEyebrow: document.querySelector('#services .services-heading .eyebrow')?.textContent.trim(),
        homeServicesHeading: document.querySelector('#services .services-heading h2')?.textContent.trim(),
        homeServicesIntro: document.querySelector('#services .services-heading > p:last-child')?.textContent.trim(),
        homeServiceSurfaceLinks: document.querySelectorAll('.service-card > a.service-card__surface').length,
        homeServiceArrows: document.querySelectorAll('.service-card__arrow').length,
        homeServiceIcons: Array.from(document.querySelectorAll('.service-card-icon'), (icon) => Array.from(icon.classList).find((name) => name.startsWith('service-card-icon--'))),
        wholesaleIsNonInteractive: !document.querySelector('#wholesale a, #wholesale button') && !!document.querySelector('#wholesale.service-card--pending'),
        heroServiceLinks: Array.from(document.querySelectorAll('.hero-specialties a'), (link) => link.getAttribute('href')),
        heroCardTitles: Array.from(document.querySelectorAll('.hero-specialty-card__copy strong'), (item) => item.textContent.trim()),
        heroCardDescriptions: Array.from(document.querySelectorAll('.hero-specialty-card__copy > span'), (item) => item.textContent.trim()),
        heroKicker: document.querySelector('.hero-kicker')?.textContent.trim(),
        heroH1: document.querySelector('.hero-copy h1')?.textContent.replace(/\\s+/g, ' ').trim(),
        heroIntro: document.querySelector('.hero-intro')?.textContent.trim(),
        heroPrimaryHref: document.querySelector('.hero-copy .button')?.getAttribute('href'),
        heroPrimaryText: document.querySelector('.hero-copy .button')?.textContent.replace(/\\s+/g, ' ').trim(),
        heroSecondaryHref: document.querySelector('.hero-copy .button--outline')?.getAttribute('href'),
        heroSecondaryText: document.querySelector('.hero-copy .button--outline')?.textContent.trim(),
        headerCtaHref: document.querySelector('.primary-nav > .button')?.getAttribute('href'),
        homeAboutHref: document.querySelector('#why-downtown .text-link')?.getAttribute('href'),
        breadcrumbCount: document.querySelectorAll('.breadcrumb li').length,
        breadcrumbLabels: Array.from(document.querySelectorAll('.breadcrumb li'), (item) => item.textContent.trim()),
        breadcrumbSchema: Array.from(document.querySelectorAll('script[type="application/ld+json"]'), (script) => script.textContent).find((value) => value.includes('BreadcrumbList')),
        specialtySecondaryHref: document.querySelector('.specialty-hero .button--outline')?.getAttribute('href'),
        clippedHeroText: Array.from(document.querySelectorAll('.specialty-hero__copy h1, .specialty-hero__copy p')).some((element) => { const range = document.createRange(); range.selectNodeContents(element); return Array.from(range.getClientRects()).some((rect) => rect.right > innerWidth + 1 || rect.left < -1); }),
        specialtyFaqCount: document.querySelectorAll('#specialty-faq .faq-item').length,
        specialtyRelatedLinks: Array.from(document.querySelectorAll('.specialty-related__list a'), (link) => link.getAttribute('href')),
        specialtySourceLinks: Array.from(document.querySelectorAll('.specialty-source-list a'), (link) => link.getAttribute('href')),
        aboutFaqCount: document.querySelectorAll('#about-faq .faq-item').length,
        aboutSpecialtyLinks: Array.from(document.querySelectorAll('.about-specialty-grid h3 a'), (link) => link.getAttribute('href')),
        aboutSpecialtyLabels: Array.from(document.querySelectorAll('.about-specialty-grid h3'), (heading) => heading.textContent.trim()),
        aboutSourceLinks: Array.from(document.querySelectorAll('.about-independent__copy > a'), (link) => link.getAttribute('href')),
        aboutContactHref: document.querySelector('.about-contact .phone-button')?.getAttribute('href'),
        serviceContactHref: document.querySelector('.services-contact__home')?.getAttribute('href'),
        contactFaqCount: document.querySelectorAll('#contact-faq .faq-item').length,
        contactForm: (() => {
          const form = document.querySelector('.contact-form');
          const fieldset = form?.querySelector('fieldset');
          return {
            exists: Boolean(form),
            action: form?.getAttribute('action'),
            method: form?.getAttribute('method'),
            fieldsetDisabled: Boolean(fieldset?.disabled),
            controls: form ? Array.from(form.querySelectorAll('input, select, textarea, button')).length : 0,
            allDisabled: form ? Array.from(form.querySelectorAll('input, select, textarea, button')).every((control) => control.matches(':disabled')) : false,
            statusVisible: Boolean(document.querySelector('#contact-form-status'))
          };
        })(),
        contactAddress: document.querySelector('.contact-office__card')?.innerText.replace(/\\s+/g, ' ').trim(),
        directionsHref: document.querySelector('.contact-office__card a')?.getAttribute('href'),
        mailtoCount: document.querySelectorAll('a[href^="mailto:"]').length,
        contactHeroPrimaryHref: document.querySelector('.contact-page-hero .button:not(.button--outline)')?.getAttribute('href'),
        contactHeroSecondaryHref: document.querySelector('.contact-page-hero .button--outline')?.getAttribute('href'),
        telPresent: Boolean(document.querySelector('a[href="tel:+17142657116"]')),
        imagesUnbroken: Array.from(document.images).every((image) => !image.complete || image.naturalWidth > 0)
      })`));
      const tag = `${page.key}:${page.locale}@${width}`;
      results.push({ tag, overflow: audit.overflow });
      const expectedMainNavigation = [
        { label: navigationLabels[page.locale][0], href: page.home },
        { label: navigationLabels[page.locale][1], href: aboutRoutes[page.locale] },
        { label: navigationLabels[page.locale][2], href: contactRoutes[page.locale] }
      ];
      assert(audit.lang === page.locale && audit.h1Count === 1, `${tag}: language or H1 failed`);
      assert(audit.overflow <= 0, `${tag}: horizontal overflow ${audit.overflow}px`);
      assert(!audit.clippedHeroText, `${tag}: hero text clipped outside viewport`);
      assert(audit.fonts && audit.noindex && audit.description?.trim(), `${tag}: fonts, noindex or description failed`);
      assert(audit.canonical === `${productionOrigin}${page.path}`, `${tag}: canonical is ${audit.canonical}`);
      assert(audit.alternates.en && audit.alternates.es && audit.alternates['x-default'], `${tag}: hreflang set incomplete`);
      assert(audit.languageCurrent === page.locale && audit.languageTarget === page.counterpart, `${tag}: language pairing failed`);
      assert(JSON.stringify(audit.mainNavigation.map(({ label, href }) => ({ label, href }))) === JSON.stringify(expectedMainNavigation), `${tag}: primary links failed`);
      assert(audit.mainNavigation.filter((item) => item.current === 'page').length === (['home', 'about', 'contact'].includes(page.key) ? 1 : 0), `${tag}: main aria-current failed`);
      assert(audit.servicesButton.text === serviceButtonLabels[page.locale] && audit.servicesButton.label === serviceToggleLabels[page.locale].open && audit.servicesButton.expanded === 'false' && audit.servicesButton.controls === audit.servicesButton.target && audit.servicesButton.submenuInert && !audit.servicesButton.submenuVisible, `${tag}: Services button initial state failed`);
      assert(audit.servicesButton.active === (page.currentService !== null), `${tag}: Services visual section state failed`);
      assert(audit.submenuLinks.length === 7 && audit.submenuLinks.every((item, index) => item.label === serviceLabels[page.locale][index] && item.href === catalogRoutes[page.locale][index]), `${tag}: implemented specialty links failed`);
      assert(audit.submenuLinks.every((item, index) => item.current === (page.currentService === index ? 'page' : null)), `${tag}: specialty aria-current failed`);
      assert(audit.submenuPending.length === 1 && audit.submenuPending[0].label === wholesaleLabels[page.locale] && audit.submenuPending[0].status === comingSoonLabels[page.locale], `${tag}: pending specialties failed`);
      assert(audit.hubLinks.length === 0, `${tag}: rendered link still depends on retired hub`);
      assert(JSON.stringify(audit.footerNavigation) === JSON.stringify(expectedMainNavigation), `${tag}: footer navigation failed`);
      assert(JSON.stringify(audit.footerServiceLinks) === JSON.stringify(catalogRoutes[page.locale]) && audit.footerServicePending.length === 1 && audit.footerServicePending[0].includes(wholesaleLabels[page.locale]) && audit.footerServicePending[0].includes(comingSoonLabels[page.locale]), `${tag}: footer specialty availability failed`);
      assert(audit.localAnchorsValid && audit.resourcesAbsent && audit.telPresent && audit.imagesUnbroken, `${tag}: anchors, hidden resources, telephone or images failed`);
      assert(width <= 880 ? audit.menuVisible && audit.navInert : !audit.menuVisible && !audit.navInert, `${tag}: responsive navigation state failed`);
      if (page.key === 'home') {
        assert(JSON.stringify(audit.homeServiceCardLinks) === JSON.stringify(catalogRoutes[page.locale]), `${tag}: Home service cards expose incorrect links`);
        assert(audit.homeServicesEyebrow === homeServiceExpectations[page.locale].eyebrow && audit.homeServicesHeading === homeServiceExpectations[page.locale].heading && audit.homeServicesIntro === homeServiceExpectations[page.locale].intro, `${tag}: Home Services heading copy failed`);
        assert(JSON.stringify(audit.homeServiceLabels) === JSON.stringify(homeServiceExpectations[page.locale].labels) && JSON.stringify(audit.homeServiceDescriptions) === JSON.stringify(homeServiceExpectations[page.locale].descriptions), `${tag}: Home service copy or order failed`);
        assert(JSON.stringify(audit.homeServicePending) === JSON.stringify([homeServiceExpectations[page.locale].descriptions[7]]) && audit.wholesaleIsNonInteractive, `${tag}: Home Wholesale state failed`);
        assert(audit.homeServiceSurfaceLinks === 7 && audit.homeServiceArrows === 7 && audit.homeServiceIcons.length === 8 && new Set(audit.homeServiceIcons).size === 8, `${tag}: Home service interaction or icon family failed`);
        assert(JSON.stringify(audit.heroServiceLinks) === JSON.stringify(catalogRoutes[page.locale].slice(0, 3)), `${tag}: featured services expose incorrect links`);
        assert(audit.heroKicker === heroExpectations[page.locale].kicker && audit.heroH1 === heroExpectations[page.locale].h1 && audit.heroIntro === heroExpectations[page.locale].intro, `${tag}: approved Hero copy failed`);
        assert(JSON.stringify(audit.heroCardTitles) === JSON.stringify(heroExpectations[page.locale].cards), `${tag}: featured Hero card labels failed`);
        assert(JSON.stringify(audit.heroCardDescriptions) === JSON.stringify(heroExpectations[page.locale].cardDescriptions), `${tag}: featured Hero card copy failed`);
        assert(audit.heroPrimaryHref === '#services' && audit.heroPrimaryText.startsWith(heroExpectations[page.locale].primary), `${tag}: general Services CTA failed`);
        assert(audit.heroSecondaryHref === contactRoutes[page.locale] && audit.heroSecondaryText === heroExpectations[page.locale].secondary, `${tag}: Hero Contact CTA failed`);
        assert(audit.homeAboutHref === aboutRoutes[page.locale], `${tag}: Home About link failed`);
        assert(audit.headerCtaHref === contactRoutes[page.locale], `${tag}: Home header contact CTA failed`);
      } else if (page.key === 'about') {
        const breadcrumbData = audit.breadcrumbSchema ? JSON.parse(audit.breadcrumbSchema) : null;
        assert(audit.breadcrumbCount === 2 && breadcrumbData?.itemListElement?.length === 2 && breadcrumbData.itemListElement.every((item, index) => item.name === audit.breadcrumbLabels[index] && item.position === index + 1), `${tag}: About breadcrumb or BreadcrumbList failed`);
        assert(audit.aboutFaqCount === 4, `${tag}: About FAQ count failed`);
        assert(JSON.stringify(audit.aboutSpecialtyLinks) === JSON.stringify(catalogRoutes[page.locale]) && JSON.stringify(audit.aboutSpecialtyLabels) === JSON.stringify([...serviceLabels[page.locale], wholesaleLabels[page.locale]]), `${tag}: About specialty links or order failed`);
        assert(audit.aboutSourceLinks.length === 1 && audit.aboutSourceLinks[0].startsWith('https://dfpi.ca.gov/'), `${tag}: About source link failed`);
        assert(audit.aboutContactHref === contactRoutes[page.locale] && audit.headerCtaHref === contactRoutes[page.locale], `${tag}: About contact CTA failed`);
      } else if (page.key === 'contact') {
        const breadcrumbData = audit.breadcrumbSchema ? JSON.parse(audit.breadcrumbSchema) : null;
        assert(audit.breadcrumbCount === 2 && breadcrumbData?.itemListElement?.length === 2 && breadcrumbData.itemListElement.every((item, index) => item.name === audit.breadcrumbLabels[index] && item.position === index + 1), `${tag}: Contact breadcrumb or BreadcrumbList failed`);
        assert(audit.contactFaqCount === 4, `${tag}: Contact FAQ count failed`);
        assert(audit.contactForm.exists && audit.contactForm.action === null && audit.contactForm.method === null && audit.contactForm.fieldsetDisabled && audit.contactForm.controls === 5 && audit.contactForm.allDisabled && audit.contactForm.statusVisible, `${tag}: blocked form state failed`);
        assert(audit.contactAddress?.includes('640 North Tustin Ave, Suite 202') && audit.contactAddress?.includes('Santa Ana, CA 92705'), `${tag}: Contact NAP failed`);
        assert(audit.directionsHref?.startsWith('https://www.google.com/maps/search/?api=1&query=') && audit.mailtoCount === 0, `${tag}: directions or unverified email failed`);
        assert(audit.contactHeroPrimaryHref === 'tel:+17142657116' && audit.contactHeroSecondaryHref === '#message-form' && audit.headerCtaHref === 'tel:+17142657116', `${tag}: Contact hero or header CTA failed`);
      } else {
        const breadcrumbData = audit.breadcrumbSchema ? JSON.parse(audit.breadcrumbSchema) : null;
        assert(audit.breadcrumbCount === 2 && breadcrumbData?.itemListElement?.length === 2 && breadcrumbData.itemListElement.every((item, index) => item.name === audit.breadcrumbLabels[index] && item.position === index + 1), `${tag}: breadcrumb or BreadcrumbList failed`);
        assert(audit.specialtySecondaryHref === `${page.home}#services`, `${tag}: specialty Services CTA failed`);
        assert(audit.specialtyFaqCount === 5 && audit.specialtyRelatedLinks.length === page.relatedCount && audit.specialtySourceLinks.length === page.sourceCount && audit.specialtySourceLinks.every((href) => href.startsWith('https://')), `${tag}: specialty FAQ, related links or sources failed`);
        assert(audit.serviceContactHref === contactRoutes[page.locale] && audit.headerCtaHref === contactRoutes[page.locale], `${tag}: specialty Contact links failed`);
      }

      await evaluate('scrollTo(0, document.documentElement.scrollHeight)');
      await wait(100);
      const footerOverlap = await evaluate(`(() => {
        const switcher = document.querySelector('.language-switcher').getBoundingClientRect();
        return Array.from(document.querySelectorAll('.site-footer a, .site-footer p, .site-footer h2, .copyright span')).some((element) => {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0 && switcher.left < rect.right && switcher.right > rect.left && switcher.top < rect.bottom && switcher.bottom > rect.top;
        });
      })()`);
      assert(!footerOverlap, `${tag}: language selector overlaps footer content`);
    }
  }

  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: false });
  for (const page of pages) {
    await load(`${baseUrl}${page.path}`);
    assert(await evaluate("document.querySelector('.services-submenu').inert && (document.querySelector('.services-submenu a').focus(), document.activeElement !== document.querySelector('.services-submenu a'))"), `${page.path}: hidden submenu link accepted focus`);
    await evaluate("document.querySelector('.menu-toggle').focus()");
    await press(' ', 'Space');
    assert(await evaluate("document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true' && !document.querySelector('#primary-navigation').inert"), `${page.path}: mobile menu keyboard open failed`);
    await evaluate("document.querySelector('.services-submenu-toggle').focus()");
    await press('Enter');
    assert(await evaluate("document.querySelector('.services-submenu-toggle').getAttribute('aria-expanded') === 'true' && !document.querySelector('.services-submenu').inert"), `${page.path}: mobile Services keyboard open failed`);
    await press('Escape');
    assert(await evaluate("document.querySelector('.services-submenu-toggle').getAttribute('aria-expanded') === 'false' && document.querySelector('.services-submenu').inert && document.activeElement === document.querySelector('.services-submenu-toggle') && document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true'"), `${page.path}: first Escape/focus return failed`);
    await press('Escape');
    assert(await evaluate("document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'false' && document.querySelector('#primary-navigation').inert && document.activeElement === document.querySelector('.menu-toggle')"), `${page.path}: second Escape/focus return failed`);
  }

  await send('Emulation.setDeviceMetricsOverride', { width: 880, height: 844, deviceScaleFactor: 1, mobile: false });
  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.menu-toggle').click(); document.querySelector('.services-submenu-toggle').click()");
  await send('Emulation.setDeviceMetricsOverride', { width: 881, height: 844, deviceScaleFactor: 1, mobile: false });
  await wait(100);
  assert(await evaluate("!document.querySelector('#primary-navigation').inert && document.querySelector('.services-submenu-toggle').getAttribute('aria-expanded') === 'false' && document.querySelector('.services-submenu').inert"), '880 to 881 breakpoint left stale state');
  await evaluate("document.querySelector('.services-submenu-toggle').click()");
  await send('Emulation.setDeviceMetricsOverride', { width: 880, height: 844, deviceScaleFactor: 1, mobile: false });
  await wait(100);
  assert(await evaluate("document.querySelector('#primary-navigation').inert && document.querySelector('.services-submenu-toggle').getAttribute('aria-expanded') === 'false' && document.querySelector('.services-submenu').inert"), '881 to 880 breakpoint left stale state');

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.services-submenu-toggle').focus()");
  await press(' ', 'Space');
  assert(await evaluate("document.querySelector('.services-submenu-toggle').getAttribute('aria-expanded') === 'true' && !document.querySelector('.services-submenu').inert"), 'Desktop Services Space open failed');
  await press('Tab');
  assert(await evaluate("document.activeElement === document.querySelector('.services-submenu a')"), 'Desktop submenu link not next in Tab order');
  await press('Escape');
  assert(await evaluate("document.querySelector('.services-submenu-toggle').getAttribute('aria-expanded') === 'false' && document.activeElement === document.querySelector('.services-submenu-toggle')"), 'Desktop Escape/focus return failed');
  await press('Enter');
  await evaluate("document.querySelector('.site-header').dispatchEvent(new MouseEvent('click', { bubbles: true }))");
  assert(await evaluate("document.querySelector('.services-submenu-toggle').getAttribute('aria-expanded') === 'false' && document.activeElement === document.querySelector('.services-submenu-toggle')"), 'Outside click moved focus or failed to close submenu');

  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.hero-copy .button').click()");
  await wait(150);
  assert(await evaluate("location.pathname === '/' && location.hash === '#services'"), 'Home general Services CTA failed');
  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.hero-copy .button--outline').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/contact/'"), 'Home Hero Contact CTA failed');
  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.hero-specialty-card[href=\"/services/residential-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/residential-escrow/'"), 'Hero Residential card failed');
  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.hero-specialty-card[href=\"/services/commercial-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/commercial-escrow/'"), 'Hero Commercial card failed');
  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.hero-specialty-card[href=\"/services/probate-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/probate-escrow/'"), 'Hero Probate card failed');
  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.service-card a[href=\"/services/manufactured-home-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/manufactured-home-escrow/'"), 'Home to specialty navigation failed');
  await evaluate("document.querySelector('.specialty-hero .button--outline').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/' && location.hash === '#services'"), 'Specialty to Home Services section failed');

  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('#mobile-homes a[href=\"/services/manufactured-home-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/manufactured-home-escrow/'"), 'Mobile Homes did not share the Manufactured Homes destination');

  await load(`${baseUrl}/`);
  await evaluate('document.querySelector(\'.primary-nav__list > li > a[href="/about/"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/about/'"), 'Home to About navigation failed');
  await evaluate('document.querySelector(\'.language-switcher a[lang="es"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/es/nosotros/'"), 'About language switch failed');
  await evaluate("document.querySelector('.about-contact .phone-button').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/es/contacto/'"), 'About contact CTA failed');
  await evaluate('document.querySelector(\'.language-switcher a[lang="en"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/contact/'"), 'Contact language switch failed');

  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.service-card a[href=\"/services/short-sale-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/short-sale-escrow/'"), 'Home to Short Sale navigation failed');

  await load(`${baseUrl}/es/servicios/escrow-casas-manufacturadas/`);
  await evaluate('document.querySelector(\'.language-switcher a[lang="en"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/services/manufactured-home-escrow/'"), 'Specialty language switch failed');

  await load(`${baseUrl}/es/servicios/escrow-short-sale/`);
  await evaluate('document.querySelector(\'.language-switcher a[lang="en"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/services/short-sale-escrow/'"), 'Short Sale language switch failed');

  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.service-card a[href=\"/services/probate-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/probate-escrow/'"), 'Home to Probate navigation failed');

  await load(`${baseUrl}/es/servicios/escrow-probate/`);
  await evaluate('document.querySelector(\'.language-switcher a[lang="en"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/services/probate-escrow/'"), 'Probate language switch failed');

  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.service-card a[href=\"/services/reverse-mortgage-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/reverse-mortgage-escrow/'"), 'Home to Reverse Mortgage navigation failed');

  await load(`${baseUrl}/es/servicios/escrow-hipoteca-inversa/`);
  await evaluate('document.querySelector(\'.language-switcher a[lang="en"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/services/reverse-mortgage-escrow/'"), 'Reverse Mortgage language switch failed');

  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.service-card a[href=\"/services/residential-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/residential-escrow/'"), 'Home to Residential navigation failed');

  await load(`${baseUrl}/es/servicios/escrow-residencial/`);
  await evaluate('document.querySelector(\'.language-switcher a[lang="en"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/services/residential-escrow/'"), 'Residential language switch failed');

  await load(`${baseUrl}/`);
  await evaluate("document.querySelector('.service-card a[href=\"/services/commercial-escrow/\"]').click()");
  await wait(250);
  assert(await evaluate("location.pathname === '/services/commercial-escrow/'"), 'Home to Commercial navigation failed');

  await load(`${baseUrl}/es/servicios/escrow-comercial/`);
  await evaluate('document.querySelector(\'.language-switcher a[lang="en"]\').click()');
  await wait(250);
  assert(await evaluate("location.pathname === '/services/commercial-escrow/'"), 'Commercial language switch failed');

  for (const specialtyPath of [...specialtyRoutes.en, ...specialtyRoutes.es]) {
    await load(`${baseUrl}${specialtyPath}`);
    const faqCount = await evaluate("document.querySelectorAll('#specialty-faq summary').length");
    for (let index = 1; index < faqCount; index += 1) {
      await evaluate(`document.querySelectorAll('#specialty-faq summary')[${index}].focus()`);
      await press(index % 2 ? ' ' : 'Enter', index % 2 ? 'Space' : 'Enter');
      const open = JSON.parse(await evaluate("JSON.stringify(Array.from(document.querySelectorAll('#specialty-faq .faq-item'), (item) => item.open))"));
      assert(open.filter(Boolean).length === 1 && open[index], `${specialtyPath}: FAQ exclusivity failed at item ${index + 1}`);
    }
  }

  for (const aboutPath of Object.values(aboutRoutes)) {
    await load(`${baseUrl}${aboutPath}`);
    const faqCount = await evaluate("document.querySelectorAll('#about-faq summary').length");
    for (let index = 1; index < faqCount; index += 1) {
      await evaluate(`document.querySelectorAll('#about-faq summary')[${index}].focus()`);
      await press(index % 2 ? ' ' : 'Enter', index % 2 ? 'Space' : 'Enter');
      const open = JSON.parse(await evaluate("JSON.stringify(Array.from(document.querySelectorAll('#about-faq .faq-item'), (item) => item.open))"));
      assert(open.filter(Boolean).length === 1 && open[index], `${aboutPath}: FAQ exclusivity failed at item ${index + 1}`);
    }
  }

  for (const contactPath of Object.values(contactRoutes)) {
    await load(`${baseUrl}${contactPath}`);
    const faqCount = await evaluate("document.querySelectorAll('#contact-faq summary').length");
    for (let index = 1; index < faqCount; index += 1) {
      await evaluate(`document.querySelectorAll('#contact-faq summary')[${index}].focus()`);
      await press(index % 2 ? ' ' : 'Enter', index % 2 ? 'Space' : 'Enter');
      const open = JSON.parse(await evaluate("JSON.stringify(Array.from(document.querySelectorAll('#contact-faq .faq-item'), (item) => item.open))"));
      assert(open.filter(Boolean).length === 1 && open[index], `${contactPath}: FAQ exclusivity failed at item ${index + 1}`);
    }
  }

  await send('Emulation.setScriptExecutionDisabled', { value: true });
  for (const width of [390, 1440]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
    for (const page of pages) {
      await load(`${baseUrl}${page.path}`);
      const noJs = JSON.parse(await evaluate(`JSON.stringify({
        menuToggleHidden: getComputedStyle(document.querySelector('.menu-toggle')).display === 'none',
        servicesToggleHidden: getComputedStyle(document.querySelector('.services-submenu-toggle')).display === 'none',
        fallbackVisible: getComputedStyle(document.querySelector('.services-submenu-fallback-label')).display !== 'none',
        navVisible: getComputedStyle(document.querySelector('#primary-navigation')).display !== 'none',
        submenuVisible: getComputedStyle(document.querySelector('.services-submenu')).display !== 'none',
        links: Array.from(document.querySelectorAll('.services-submenu a'), (link) => link.getAttribute('href')),
        pendingCount: document.querySelectorAll('.services-submenu__pending').length
      })`));
      assert(noJs.menuToggleHidden && noJs.servicesToggleHidden && noJs.fallbackVisible && noJs.navVisible && noJs.submenuVisible && JSON.stringify(noJs.links) === JSON.stringify(catalogRoutes[page.locale]) && noJs.pendingCount === 1, `${page.path}@${width}: no-JavaScript navigation failed`);
    }
  }

  await send('Emulation.setScriptExecutionDisabled', { value: false });
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await load(`${baseUrl}/services/manufactured-home-escrow/`);
  const reduced = JSON.parse(await evaluate(`JSON.stringify({
    matches: matchMedia('(prefers-reduced-motion: reduce)').matches,
    scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    transitionDuration: getComputedStyle(document.querySelector('.button')).transitionDuration
  })`));
  assert(reduced.matches && reduced.scrollBehavior === 'auto' && reduced.transitionDuration.split(',').every((value) => parseFloat(value) <= .001), 'Reduced-motion check failed');

  const redirects = [
    { path: '/services/', target: '/#services', file: path.resolve('dist/services/index.html') },
    { path: '/es/servicios/', target: '/es/#services', file: path.resolve('dist/es/servicios/index.html') }
  ];
  for (const redirect of redirects) {
    const response = await fetch(`${baseUrl}${redirect.path}`, { redirect: 'manual' });
    assert(response.status === 200, `${redirect.path}: static preview response is ${response.status}`);
    const html = await readFile(redirect.file, 'utf8');
    assert(html.includes(`http-equiv="refresh" content="0;url=${redirect.target}"`) && html.includes('<meta name="robots" content="noindex">'), `${redirect.path}: static HTML redirect failed`);
  }

  const missingResponse = await fetch(`${baseUrl}/services/not-a-real-specialty/`, { redirect: 'manual' });
  assert(missingResponse.status === 404, `nonexistent route returned ${missingResponse.status} instead of 404`);

  assert(browserErrors.length === 0, `browser errors: ${browserErrors.join(' | ')}`);
} finally {
  socket.close();
  chrome.kill();
  chrome.unref();
}

console.log(JSON.stringify({ baseUrl, results, browserErrors, failures }, null, 2));
if (failures.length > 0) process.exit(1);
