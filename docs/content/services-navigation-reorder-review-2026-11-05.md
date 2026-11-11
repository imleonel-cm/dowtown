# Services navigation reorder review — 2026-11-05

## Scope and previous state

The shared Services presentation previously followed the six canonical specialty definitions: Manufactured & mobile homes, Short sales, Probate, Reverse mortgage, Residential, and Commercial. Every entry linked to one implemented bilingual page.

This change reorganizes only shared service discovery. It does not create pages, rewrite specialty content, change URLs, add redirects, alter schema, or publish the site.

## Approved order

The shared catalog now renders in this order in English and Spanish:

1. Residential / Residencial
2. Commercial / Comercial
3. Probate / Probate
4. Manufactured Homes / Casas manufacturadas
5. Mobile Homes / Casas móviles
6. Short Sales / Ventas cortas
7. Reverse Mortgage / Hipoteca inversa
8. Wholesale / Wholesale

The order is centralized in `src/data/business.ts` and consumed by Home, About, the desktop/mobile Services disclosure, and the footer. Contextual related-service links inside specialty pages were not reordered.

## Manufactured Homes and Mobile Homes

The two labels are separate catalog entries but resolve to the same existing localized page:

- EN: `/services/manufactured-home-escrow/`
- ES: `/es/servicios/escrow-casas-manufacturadas/`

No second page, metadata set, canonical, schema, or redirect was created. On the shared page, only Manufactured Homes/Casas manufacturadas receives the active style and `aria-current="page"`; Mobile Homes/Casas móviles remains an accessible alternative link to the same canonical destination.

## Wholesale

Wholesale is visible as Coming soon/Próximamente in the submenu, Home catalog, About catalog, and footer. It is rendered as text, not an anchor. It has no route, page, sitemap entry, schema, redirect, or operational claim.

## Files modified

- `src/data/business.ts`
- `src/data/site.ts`
- `src/data/serviceLinks.ts`
- `src/components/Header.astro`
- `src/components/AboutPage.astro`
- `src/components/home/Hero.astro`
- `src/components/home/Services.astro`
- `scripts/validate-site.mjs`
- `scripts/review-alignment.mjs`
- `scripts/capture-bilingual.mjs`
- `scripts/capture-page.mjs`
- `scripts/validate-home.mjs`
- `README.md`
- `docs/site-architecture.md`
- this review

The capture and validation helpers now place temporary Chrome profiles outside the OneDrive project directory to avoid local reparse-point permission failures; this does not affect site output.

## SEO, AEO, GEO, and accessibility decisions

- The six implemented page pairs, slugs, titles, descriptions, H1s, canonicals, reciprocal hreflang, x-default, breadcrumbs, FAQs, and structured data were not changed.
- `noindex, nofollow` remains on all real pages.
- The canonical service-definition list remains separate from the eight-entry presentation catalog, preventing Mobile Homes and Wholesale from becoming false implemented pages.
- Wholesale does not create a crawlable destination or unsupported business claim.
- The disclosure retains progressive enhancement, `inert`, keyboard operation, focus return, and a visible no-JavaScript fallback.

## Validation results

### Build

- Astro 7.4.2 static build: passed.
- Output: 18 rendered pages, including the six bilingual specialty pairs plus Home, About, and Contact pairs; the existing legacy redirect documents remain present.
- The project-local Astro cache and previous `dist` contain OneDrive reparse points that deny replacement. The same source was therefore built with a temporary root/cache/output directory while preserving the production site origin, routes, redirects, and public assets. This is an environment workaround, not a source or configuration change.

### Main browser validator

- 18 real pages × 8 widths (320, 390, 768, 880, 881, 1024, 1440, and 1920): 144 combinations passed.
- Exact service labels, order, links, shared Manufactured/Mobile destination, one active item, and one pending Wholesale item: passed.
- Desktop/mobile disclosure, Enter, Space, Escape, focus return, outside click, `inert`, breakpoint reset, and no-JavaScript navigation: passed.
- EN/ES equivalent-page switching, FAQs, internal links, legacy redirect documents, 404 behavior, reduced motion, fonts, images, and local anchors: passed.
- Canonical, hreflang, x-default, descriptions, and `noindex, nofollow`: passed.
- Horizontal overflow: none across all 144 combinations.
- Web-page console errors: none. Chrome updater permission messages emitted by the host were not page-console errors.

### Playwright

- Existing Playwright review: 54 checks passed.
- Desktop 1440 × 900 and mobile 390 × 844 reviewed for all 18 real pages.
- All pages returned HTTP 200, retained one H1, correct language pairing, canonical/hreflang, noindex, valid images, no clipped hero text, no horizontal overflow, and exclusive FAQ behavior.
- No-JavaScript mobile navigation and native FAQ behavior passed for all 18 pages.
- Playwright errors: 0. Failures: 0.

## Captures

- Full-page Playwright evidence and report: `artifacts/services-navigation-reorder-2026-11-05/`
- Open desktop submenu: `artifacts/screenshots/services-submenu-open-en-1440.png`
- Open mobile submenu: `artifacts/screenshots/services-submenu-open-es-390.png`

Visual review confirmed the eight-item order, the single Manufactured active state, readable pending labels, intact Home/About layouts, and no mobile clipping.

## Remaining items

- Wholesale research, verified operational scope, content, URL, and implementation remain intentionally pending.
- Mobile Homes remains part of the existing Manufactured & Mobile Home Escrow page unless future evidence supports a separate information architecture decision.
- No deployment or publication was performed.
