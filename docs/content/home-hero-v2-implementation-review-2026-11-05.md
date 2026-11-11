# Home Hero V2 implementation review — November 5, 2026

## Scope and prior state

This review closes the authorized, controlled redesign of the bilingual Home Hero. Before this change, Home already had a two-column composition, the approved illustrative residential photograph, Astro responsive-image output, the DCE document overlay, two calls to action, and three small specialty tabs. The photograph and its focal treatment worked correctly; the copy hierarchy and the specialty access points were the elements changed.

No other Home section, Header, Footer, global navigation, specialty page, route, canonical, hreflang, schema, or business datum was redesigned or rewritten. The site remains local, unpublished, and marked `noindex, nofollow`.

## Files modified

- `src/data/site.ts`: approved EN/ES Hero copy and the three localized featured-service summaries.
- `src/components/HomePage.astro`: passes the existing localized Contact and centralized service routes to the Hero.
- `src/components/home/Hero.astro`: preserves the responsive picture and overlays, and replaces the small tabs with semantic linked cards.
- `src/styles/global.css`: Hero-only composition, typography, card, hover, focus-visible, and responsive rules.
- `scripts/validate-site.mjs`: exact bilingual Hero assertions, centralized destination checks, and regression navigation checks. A test-string escaping defect discovered during validation was corrected; it did not affect site code.
- `scripts/review-alignment.mjs`: Home Hero clipping checks plus explicit Tab order, focus indicator, and Enter activation checks.
- `docs/site-architecture.md`: current Home Hero description.
- `README.md`: current review and evidence references.
- This review document.

## Approved copy

### English

- Eyebrow: `Independent escrow · Santa Ana, CA`
- H1: `Every Property Has a Story. Every Closing Needs Escrow.`
- Supporting text: `Independent escrow services for residential, commercial, and specialized real estate transactions. Based in Santa Ana, California.`
- Primary CTA: `Our Escrow Services` → `#services`
- Secondary CTA: `Contact Downtown` → `/contact/`

### Español

- Eyebrow: `Escrow independiente · Santa Ana, CA`
- H1: `Cada propiedad tiene una historia. Cada cierre necesita escrow.`
- Supporting text: `Servicios independientes de escrow para operaciones inmobiliarias residenciales, comerciales y especializadas. Estamos ubicados en Santa Ana, California.`
- Primary CTA: `Nuestros servicios` → `#services`
- Secondary CTA: `Contactar a Downtown` → `/es/contacto/`

Each localized Home retains one H1. Its second sentence is visually emphasized with the existing corporate blue without creating another heading.

## UI and featured specialty access

The desktop Hero keeps text on the left and the image on the right. The title scale, line length, supporting-copy width, spacing, and CTA hierarchy were refined without introducing another font or dependency. On smaller screens the two columns become one, CTAs wrap safely, and the three specialty cards stack without fixed artificial heights.

The former compact tabs are now three full-anchor cards with a discrete existing icon, title, short explanation, and directional arrow:

1. Residential Escrow → localized Residential page.
2. Commercial Escrow → localized Commercial page.
3. Probate Escrow → localized Probate page.

The cards use centralized routes. Their complete surface is interactive, their hover treatment is limited to hover-capable devices, their transitions are explicit and short, and they expose a visible keyboard focus state. No carousel, automatic motion, new JavaScript, or decorative non-link card was added.

## Final featured-card copy

The final closure pass changed only the six localized descriptions in `src/data/site.ts`. The H1, title scale, supporting text, CTAs, photograph, overlays, routes, icons, card markup, and card CSS were not changed.

English:

- Residential Escrow: `Escrow coordination for home purchases and sales, from opening through closing.`
- Commercial Escrow: `Coordinating escrow requirements for commercial real estate transactions.`
- Probate Escrow: `Escrow coordination for property sales involving probate or estate administration.`

Español:

- Escrow residencial: `Coordinación de escrow para la compra y venta de viviendas, desde la apertura hasta el cierre.`
- Escrow comercial: `Coordinación de requisitos de escrow en transacciones de bienes raíces comerciales.`
- Escrow de probate: `Coordinación de escrow para ventas de propiedades relacionadas con procesos sucesorios.`

The existing flexible card layout accommodated the final copy at every tested width, so no style adjustment was necessary. The validator was extended to assert the exact six descriptions in addition to the titles and localized destinations.

## Image preservation

The existing referential residential image, crop, focal position, dimensions, alt text, caption, pale backdrop, and DCE document overlay remain in place. Astro still emits AVIF, WebP, and JPEG alternatives with the existing responsive widths and sizes. The Hero image remains eager, asynchronously decoded, and high priority as the likely LCP element.

The image is temporary and must be replaced later only with approved official or properly licensed material. This phase did not generate, replace, or alter any photograph.

## SEO, AEO, GEO, and CRO review

- One visible H1 per language is retained.
- Existing title, meta description, canonical, hreflang, x-default, schema, and `noindex, nofollow` are unchanged.
- Visible HTML identifies the escrow service, residential/commercial/specialized transaction context, and Santa Ana location.
- Residential, Commercial, and Probate have direct contextual internal links in both languages.
- The image retains meaningful localized alt text.
- The two primary conversion paths remain distinct: discover services and contact Downtown.
- No credential, result, service territory, license, statistic, or operational capability was invented.

This implementation improves clarity and internal navigation, but no traffic, ranking, Core Web Vitals, or conversion improvement is claimed without post-launch measurement.

## Build and validation actually performed

OneDrive continued to lock the project-local Astro cache/output reparse points. The previously documented temporary validation root was therefore used for the build; it referenced the unchanged project source and dependencies and wrote only temporary build output.

- Astro 7.4.2 production build: passed; 18 real pages generated, with the two retained static legacy redirect documents also rendered.
- Main browser validator: passed for all 18 real pages at 320, 390, 768, 880, 881, 1024, 1440, and 1920 CSS px (144 page/viewport combinations).
- Main validator result: zero horizontal overflow, zero browser errors, zero assertion failures.
- Metadata regression: canonical, localized hreflang, x-default, one H1, `noindex, nofollow`, centralized navigation, service destinations, images, and internal links passed.
- Playwright alignment review: 54 records passed across 1440 px, 390 px, and JavaScript-disabled mobile contexts; `errors: []`, `failures: []`.
- Hero-specific Playwright checks: text bounds, image loading, exact language navigation, CTA sequence, Tab order, visible focus indicator, Enter activation, and FAQ regression passed.
- No-JavaScript review: shared service navigation remained visible and the native FAQ behavior remained functional on every route.
- Visual review: EN and ES were inspected at 1440 and 390 px. No clipped words, cropped card copy, accidental overlaps, or broken hierarchy were found in the Hero.

## Captures and evidence

Before evidence (historical state immediately before this Hero phase):

- `artifacts/services-navigation-reorder-2026-11-05/home-en-1440.png`
- `artifacts/services-navigation-reorder-2026-11-05/home-en-390.png`
- `artifacts/services-navigation-reorder-2026-11-05/home-es-1440.png`
- `artifacts/services-navigation-reorder-2026-11-05/home-es-390.png`

After evidence and machine-readable report:

- `artifacts/home-hero-v2-2026-11-05/home-en-1440.png`
- `artifacts/home-hero-v2-2026-11-05/home-en-390.png`
- `artifacts/home-hero-v2-2026-11-05/home-es-1440.png`
- `artifacts/home-hero-v2-2026-11-05/home-es-390.png`
- `artifacts/home-hero-v2-2026-11-05/playwright-report.json`

Final closure evidence after the approved card-copy adjustment:

- `artifacts/home-hero-v2-final-2026-11-05/home-en-1440.png`
- `artifacts/home-hero-v2-final-2026-11-05/home-en-390.png`
- `artifacts/home-hero-v2-final-2026-11-05/home-es-1440.png`
- `artifacts/home-hero-v2-final-2026-11-05/home-es-390.png`
- `artifacts/home-hero-v2-final-2026-11-05/playwright-report.json`

The Playwright directory also contains current desktop/mobile regression captures for About, Contact, and all six specialty page pairs.

## Problems detected and corrections

The first main-validator run reported the approved H1 and primary CTA as failures in both languages. Direct DOM inspection showed that the rendered copy and links were correct. The cause was an escaping defect in the newly added validator expression: `\s` was consumed when the expression was serialized for Chrome and behaved as a literal `s`. The validator was corrected to preserve the intended whitespace regular expression and the complete matrix was rerun successfully.

No production Hero defect was hidden or waived. No unrelated component was changed in response to that test-only defect.

The final card-copy pass compiled successfully through the documented temporary OneDrive-safe build root. The static validator passed all 18 real pages at the eight widths from 320 through 1920 px with `browserErrors: []` and `failures: []`. The final Playwright run produced 54 passing records with `errors: []` and `failures: []`; EN/ES desktop and mobile captures were visually reviewed and showed equal card alignment, intact arrows, no clipping, and no unnecessary increase to the Hero height.

## Pending

- Replace the referential residential image with approved official or licensed photography when supplied.
- Measure real LCP, engagement, specialty-card use, CTA use, leads, and conversions only after an authorized production launch and sufficient data collection.
- Revisit copy or visual emphasis only if later user testing or measured behavior identifies a specific issue.

## Technical completion

The bilingual Home Hero V2 is technically complete within the authorized scope. The site was not published or deployed.
