# Downtown Community Escrow — bilingual Home, About, and six specialties

Static Astro implementation of the approved bilingual Home, About/Nosotros, and six specialty pages. The site uses self-hosted Poppins, the approved white/light-blue/deep-blue system, and the approved framed photographs with layered notes and documents. It remains local, unpublished, and marked `noindex, nofollow`.

## Current architecture

Rendered pages:

- English Home: `/`.
- Spanish Home: `/es/`.
- English About: `/about/`.
- Spanish Nosotros: `/es/nosotros/`.
- English Manufactured & Mobile Home Escrow: `/services/manufactured-home-escrow/`.
- Spanish Manufactured & Mobile Home Escrow: `/es/servicios/escrow-casas-manufacturadas/`.
- English Short Sale Escrow: `/services/short-sale-escrow/`.
- Spanish Short Sale Escrow: `/es/servicios/escrow-short-sale/`.
- English Probate Escrow: `/services/probate-escrow/`.
- Spanish Probate Escrow: `/es/servicios/escrow-probate/`.
- English Reverse Mortgage Escrow: `/services/reverse-mortgage-escrow/`.
- Spanish Reverse Mortgage Escrow: `/es/servicios/escrow-hipoteca-inversa/`.
- English Residential Escrow: `/services/residential-escrow/`.
- Spanish Residential Escrow: `/es/servicios/escrow-residencial/`.
- English Commercial Escrow: `/services/commercial-escrow/`.
- Spanish Commercial Escrow: `/es/servicios/escrow-comercial/`.

Retired legacy routes:

- `/services/` redirects to `/#services`.
- `/es/servicios/` redirects to `/es/#services`.

Because this is a static build, `dist` contains small `noindex` HTML redirect documents with a meta refresh and fallback link. Astro Preview serves those documents with HTTP 200; the eventual host may translate the redirect manifest differently. The old Services hub is not rendered as a page.

The full route plan and progressive-navigation contract are documented in [`docs/site-architecture.md`](docs/site-architecture.md). The approved diagram remains at [`docs/references/site-architecture-v1.png`](docs/references/site-architecture-v1.png).

The strategic alignment matrix originally prepared for Home and the first two specialties is documented in [`docs/content/competitive-content-alignment.md`](docs/content/competitive-content-alignment.md). The recovered historical matrix, its decision reconciliation, the newer complementary research, and a provenance record are preserved under [`docs/research/`](docs/research/README.md).

## Navigation

The currently functional primary navigation is:

- EN: Home, Services, About, Contact.
- ES: Inicio, Servicios, Nosotros, Contacto.

Services/Servicios is a single disclosure button, not a link to a hub. Its shared presentation catalog is ordered Residential, Commercial, Probate, Manufactured & Mobile Homes, Short Sales, Reverse Mortgage, and Wholesale. Manufactured & Mobile Homes is one label linked to the existing localized page; Wholesale is visible as Coming soon/Próximamente without a link or route. The six implemented specialty pages remain unchanged. Agents & Lenders and Resources remain hidden until real destinations exist; `featureFlags.resources` remains `false`.

The desktop and mobile disclosure is progressively enhanced. It supports click/touch, Enter, Space, ordered Escape handling, focus return, outside-click closing, `inert` while hidden, and breakpoint changes at 880/881 px. Without JavaScript, the nested list remains visible and the real specialty link stays usable.

Home, About, the desktop/mobile disclosure, and the footer consume the same ordered service catalog. Six entries link to implemented specialties and Wholesale is the single pending non-link. The fixed `EN | ES` selector uses equivalent-page links and retains full localized accessible names, `lang`, `hreflang`, and current-language state without cookies, redirects, or stored preference.

## Local development

Requires Node.js 24+.

```powershell
npm run dev
```

Production build and preview:

```powershell
npm run build
npm run preview
```

Dependencies are already installed. This workspace also contains an ignored portable runtime under `.tools/`. If Node is not on `PATH`:

```powershell
$env:PATH = "$PWD\.tools\node-v24.16.0-win-x64;$env:PATH"
$env:ASTRO_TELEMETRY_DISABLED = "1"
& ".\.tools\node-v24.16.0-win-x64\npm.cmd" run dev
```

Keep preview servers bound to `127.0.0.1`; do not publish this project.

## Data and route decisions

- Business details live in `src/data/business.ts`. The owner-confirmed office address is `640 North Tustin Ave, Suite 202, Santa Ana, CA 92705`; it supersedes the earlier address retained only in historical research copies.
- Localized content and explicit page-key route pairs live in `src/data/site.ts`.
- `implementedPageKeys` contains `home`, `about`, `manufacturedHomes`, `probate`, `shortSale`, `reverseMortgage`, `residential`, and `commercial`.
- Specialty availability and destinations are resolved centrally in `src/data/serviceLinks.ts`; no component invents pending URLs.
- The legacy `services` route pair remains in the route map only to document and redirect old addresses. It is not considered implemented and does not produce language-switcher or `hreflang` entries.
- The former hub content/component remains in source as archived, unreferenced material; no Astro page imports it.
- Astro's configured production origin is `https://downtownescrow.net`; canonical and reciprocal `en`/`es`/`x-default` links exist only for the eight implemented page pairs.
- The original Home content order, photographs, frames, layered notes/documents, company data, phone destination, and “Why Downtown” section title are preserved.

## Manufactured & Mobile Home Escrow

The specialty page provides a direct explanation, transaction variables, professional-role boundaries, consultation preparation, useful initial information, five focused FAQs, carefully scoped related sources, and localized telephone/Home-contact paths. Its breadcrumb is Home → current specialty; it does not imply a removed Services page.

Fannie Mae is used only for background on state variation in manufactured-home titling. California HCD is used only for California registration and transfer context. Neither source is presented as Downtown's process, a partnership, certification, nationwide checklist, or professional advice. The content scope and unresolved operational facts are recorded in [`docs/content/manufactured-mobile-home-escrow-brief.md`](docs/content/manufactured-mobile-home-escrow-brief.md).

## Short Sale Escrow

The second specialty explains the distinction between escrow coordination and lender/servicer approval, common transaction variables, useful context for an initial conversation, five focused FAQs, and carefully limited government sources. CFPB supports the general definition, approval, multiple-mortgage, and deficiency context. HUD is included only as an FHA-specific example, not a universal process. Scope and unresolved business facts are recorded in [`docs/content/short-sale-escrow-brief.md`](docs/content/short-sale-escrow-brief.md).

## Probate Escrow

The third specialty distinguishes inherited property, formal probate, the authority of a court-appointed personal representative, independent administration, and court confirmation when applicable. It explains escrow coordination without assigning Downtown the roles of the court, attorneys, personal representatives, title professionals, lenders, or agents. It includes five focused FAQs, two contextual internal links, four official sources, and localized telephone/Home-contact paths.

The approved research plan is at [`docs/content/probate-seo-aeo-geo-research-plan.md`](docs/content/probate-seo-aeo-geo-research-plan.md). The completed implementation and evidence review is at [`docs/content/probate-implementation-review-2026-10-28.md`](docs/content/probate-implementation-review-2026-10-28.md).

## Reverse Mortgage Escrow

The fourth specialty coordinates the closing side of reverse mortgage transactions, clearly differentiating closing escrow from loan origination, lender approval, counseling, and servicing escrow accounts or set-asides (such as LESA). It defines boundaries between escrow and the lender, HUD-approved counselor, loan servicer, title, legal, tax, and financial professionals. It outlines transaction variables (HECM vs proprietary, HECM for Purchase vs existing home, lender conditions, title and existing liens, participants and documents), initial preparation, useful closing considerations, five focused FAQs, one contextual internal link (Manufactured & Mobile Home Escrow), five official sources (HUD HECM, CFPB purchase, CFPB disclosures, CFPB rescission, DFPI escrow), and localized telephone/Home-contact paths.

The approved research plan is at [`docs/content/reverse-mortgage-seo-aeo-geo-research-plan.md`](docs/content/reverse-mortgage-seo-aeo-geo-research-plan.md). The completed implementation review is at [`docs/content/reverse-mortgage-implementation-review-2026-10-28.md`](docs/content/reverse-mortgage-implementation-review-2026-10-28.md).

## Residential Escrow

The fifth specialty explains residential closing escrow for purchases and sales, separates escrow from real-estate representation, lending, title insurance, and legal or tax advice, and organizes the variables and information useful for an initial conversation. It includes five focused FAQs, three carefully scoped official sources, a transaction-specific CTA, and localized telephone/Home-contact paths. It does not claim a verified service territory, internal wire protocol, licensing status, guaranteed timeline, or transaction outcome.

The completed technical and evidence review is at [`docs/content/residential-implementation-review-2026-10-28.md`](docs/content/residential-implementation-review-2026-10-28.md).

## Commercial Escrow

The sixth specialty focuses on commercial real estate escrow and separates the neutral escrow role from buyer/seller decisions, brokerage, lending, title, legal/tax advice, business-sale escrow, and the qualified-intermediary role in a Section 1031 exchange. Because Downtown's accepted commercial property and transaction types remain unverified, the page asks users to describe the property and proposed transaction instead of publishing a “transactions we handle” list. It includes five focused FAQs, one contextual Residential link, three official sources, and a specific consultation CTA.

The approved research plan is at [`docs/content/commercial-escrow-seo-aeo-geo-research-plan.md`](docs/content/commercial-escrow-seo-aeo-geo-research-plan.md). The completed implementation review is at [`docs/content/commercial-implementation-review-2026-10-30.md`](docs/content/commercial-implementation-review-2026-10-30.md).

## About / Nosotros

The institutional page pair identifies the verified company, Santa Ana office, six specialty areas, neutral escrow role, and professional-role boundaries without asserting an unverified license classification, history, team, awards, statewide coverage, or results. Its six approved blocks are Hero, Who We Are, What Independent Escrow Means, Our Escrow Specialties, company FAQs, and a temporary Home-contact CTA. Home retains its shorter Why Downtown section and links contextually to About.

The completed review is at [`docs/content/about-implementation-review-2026-10-30.md`](docs/content/about-implementation-review-2026-10-30.md).

## Validation and captures

Run the focused browser validator against a local preview:

```powershell
& ".\.tools\node-v24.16.0-win-x64\node.exe" scripts\validate-site.mjs http://127.0.0.1:4321
```

It checks the eighteen rendered pages at 320, 390, 768, 880, 881, 1024, 1440, and 1920 CSS pixels; metadata; canonical/hreflang/noindex; active states; shared service order and links; disclosure keyboard/focus behavior; no-JavaScript access; FAQ exclusivity; reduced motion; footer clearance; console errors; a nonexistent-route 404; and both static legacy redirects.

The service-navigation reordering and its validation evidence are documented in [`docs/content/services-navigation-reorder-review-2026-11-05.md`](docs/content/services-navigation-reorder-review-2026-11-05.md).

The controlled bilingual Home Hero redesign is documented in [`docs/content/home-hero-v2-implementation-review-2026-11-05.md`](docs/content/home-hero-v2-implementation-review-2026-11-05.md). It preserves the existing responsive image and overlays, introduces the approved EN/ES copy and Contact destinations, and replaces the three compact tabs with keyboard-accessible Residential, Commercial, and Probate cards. Current Playwright evidence is under `artifacts/home-hero-v2-2026-11-05/`.

Current Commercial review captures:

- `artifacts/commercial-implementation-2026-10-30/commercial-en-1440.png`.
- `artifacts/commercial-implementation-2026-10-30/commercial-en-390.png`.
- `artifacts/commercial-implementation-2026-10-30/commercial-es-1440.png`.
- `artifacts/commercial-implementation-2026-10-30/commercial-es-390.png`.

Current About review captures:

- `artifacts/about-implementation-2026-10-30/about-en-1440.png`.
- `artifacts/about-implementation-2026-10-30/about-en-390.png`.
- `artifacts/about-implementation-2026-10-30/about-es-1440.png`.
- `artifacts/about-implementation-2026-10-30/about-es-390.png`.

Earlier Residential review captures:

- `artifacts/residential-implementation-2026-10-28/residential-en-1440.png`.
- `artifacts/residential-implementation-2026-10-28/residential-en-390.png`.
- `artifacts/residential-implementation-2026-10-28/residential-es-1440.png`.
- `artifacts/residential-implementation-2026-10-28/residential-es-390.png`.

Earlier review captures:

- `artifacts/reverse-mortgage-implementation-2026-10-28/reverse-mortgage-en-1440.png`.
- `artifacts/reverse-mortgage-implementation-2026-10-28/reverse-mortgage-en-390.png`.
- `artifacts/reverse-mortgage-implementation-2026-10-28/reverse-mortgage-es-1440.png`.
- `artifacts/reverse-mortgage-implementation-2026-10-28/reverse-mortgage-es-390.png`.

- `artifacts/screenshots/services-submenu-open-en-1440.png`.
- `artifacts/screenshots/services-submenu-open-es-390.png`.
- `artifacts/screenshots/manufactured-home-escrow-en-1440.png`.
- `artifacts/screenshots/manufactured-home-escrow-en-390.png`.
- `artifacts/screenshots/manufactured-home-escrow-es-1440.png`.
- `artifacts/screenshots/manufactured-home-escrow-es-390.png`.
- `artifacts/screenshots/short-sale-escrow-en-1440.png`.
- `artifacts/screenshots/short-sale-escrow-en-390.png`.
- `artifacts/screenshots/short-sale-escrow-es-1440.png`.
- `artifacts/screenshots/short-sale-escrow-es-390.png`.

Earlier Home and Services-hub captures remain as historical evidence only; they do not describe the current route architecture.

## Pending

- Add Agents & Lenders only when a real localized page or equivalent section exists.
- Replace the generated residential image and add an office photograph only after approved licensed assets are supplied.
- Verify licenses, credentials, office hours, team information, operational coverage, workflows, documents, timelines, fees, and service modalities before publishing related claims.
- Confirm Downtown's specific license classification and any verified team, company-history, or credential information before expanding About.
- Confirm Commercial property and transaction types, exclusions, geographic scope, participants, opening information, internal coordination, wire-verification practices, 1031 boundaries, and CTA workflow before expanding Commercial claims.
- Define contact-form behavior before adding a form.
- Write and implement the planned resource article before exposing its route.
- Confirm whether self-hosted Poppins is the final launch font.

## Resumption review — October 28, 2026

The interrupted strategic-alignment update is complete within the documented evidence boundary. Editorial changes were already saved; this resumption corrected the stale six-question validator, checked both languages, fixed clipped Spanish mobile specialty-hero text, and produced current build/browser evidence. Research copies were compared with their originals and match after line-ending/trailing-whitespace normalization.

See [resumption review](docs/content/resumption-review-2026-10-28.md) for completed work, files, validation, and business-evidence limits. Current evidence is under `artifacts/alignment-review-2026-10-28/`: 48 responsive validator combinations, 18 Playwright records, and 12 full-page captures. Previous screenshots remain historical only.

The additional `scripts/review-alignment.mjs` uses an existing Playwright installation. Set `PLAYWRIGHT_MODULE_PATH` to its package path if it is not available in local dependencies, then run it with Node 24+ against `http://127.0.0.1:4321`. No dependency installation or package changes were required for this review. The script checks lazy-loaded images after scrolling and validates hero text bounds, not just document overflow.

At the time of that resumption review, Probate was still unimplemented. Its later implementation is documented separately below; the historical review remains unchanged.

## Image optimization and Probate planning — October 28, 2026

The 3,252,146-byte residential PNG is now processed through Astro responsive images while preserving the existing photo, crop, focal positions, overlays, and layout. Chrome selected a 42,333-byte AVIF at 390 px and a 211,371-byte AVIF at 1440 px, reductions of 98.70% and 93.50% from the original. The hero remains eager/high-priority and secondary instances remain lazy. No quantified Core Web Vitals improvement is claimed because there was no comparable before/after LCP measurement.

See [`docs/performance/hero-image-optimization-2026-10-28.md`](docs/performance/hero-image-optimization-2026-10-28.md). Current evidence is stored in `artifacts/hero-image-optimization-2026-10-28/`.

That phase produced the Probate research plan only. The later approved implementation is documented in [`docs/content/probate-implementation-review-2026-10-28.md`](docs/content/probate-implementation-review-2026-10-28.md).

## SEO, AEO, and GEO implementation audit — October 28, 2026

The six pages that existed at the time were audited after the owner-confirmed address correction. That historical build, 48-case validator, and 18-record Playwright review passed without page failures or console errors. The audit documents page-level findings, launch blockers, schema and crawl gaps, performance risk, evidence limits, and the approvals required before further implementation.

See [`docs/content/seo-aeo-geo-implementation-audit-2026-10-28.md`](docs/content/seo-aeo-geo-implementation-audit-2026-10-28.md). Its browser evidence is stored in `artifacts/seo-aeo-geo-audit-2026-10-28/`. The site remains local, `noindex, nofollow`, and unpublished.

## Wholesale Real Estate Escrow (2026-11-09)

Wholesale Real Estate Escrow is now the seventh active bilingual specialty. Routes are `/services/wholesale-escrow/` and `/es/servicios/escrow-wholesale/`. The page uses the shared specialty template, five FAQs, official DFPI/DRE resources, and neutral language that does not confirm assignment or double-closing structures. All seven specialties are active in the shared navigation; Resources and Agents & Lenders remain hidden. Development remains local with `noindex, nofollow`.
