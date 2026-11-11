# About Us / Nosotros EN/ES — implementation review

**Date:** 2026-10-30  
**Status:** Technically complete in the local static build. Unpublished and retained as `noindex, nofollow`.

## 1. Initial state

- The bilingual route pair was reserved in `routeMap` but was not implemented.
- About/Nosotros in header and footer linked to the localized Home `#why-downtown` section.
- Home already contained a short verified-company presentation, office address, phone, and six implemented specialties.
- Shared header, footer, language switcher, breadcrumb, FAQ accordion, service data, canonical/hreflang logic, and responsive styles were functioning.
- The project was not a Git repository; no repository was initialized or cleaned.

## 2. Routes and files

New routes:

- EN: `/about/`
- ES: `/es/nosotros/`

New files:

- `src/data/about.ts`
- `src/components/AboutPage.astro`
- `src/pages/about/index.astro`
- `src/pages/es/nosotros/index.astro`
- `docs/content/about-implementation-review-2026-10-30.md`

Modified files:

- `src/data/site.ts`
- `src/data/navigation.ts`
- `src/components/home/Office.astro`
- `src/styles/global.css`
- `scripts/validate-site.mjs`
- `scripts/review-alignment.mjs`
- `scripts/capture-bilingual.mjs`
- `README.md`
- `docs/site-architecture.md`

No specialty content, URLs, photographs, analytics, tracking, retired Services redirects, or business-contact data were changed.

## 3. Six approved editorial blocks

1. **Hero:** identifies Downtown, escrow activity, Santa Ana office, and specialized transaction focus.
2. **Who We Are / Quiénes somos:** explains company identity, escrow coordination, participants, six specialties, verified office, and direct phone.
3. **What Independent Escrow Means:** provides a direct neutral-escrow definition, written-instruction context, transaction coordination, professional-role boundaries, and a California DFPI source. It explicitly avoids claiming a specific Downtown license classification.
4. **Our Escrow Specialties:** uses the six approved localized service names, short differentiated descriptions, icons, and real localized links.
5. **About Downtown FAQs:** four direct, visible, bilingual answers covering company activity, location, specialties, and independent escrow.
6. **Contact CTA:** uses “Contact Downtown” / “Contactar a Downtown” and temporarily links to the localized Home contact section. No form or fictitious Contact route was created.

The excluded standalone sections—Our Story, Meet Our Team, Our Approach, and Licensing & Credentials—were not implemented or replaced with equivalents.

## 4. SEO, AEO, and GEO review

| Control | EN | ES | Result |
| --- | --- | --- | --- |
| Title | `About Downtown Community Escrow | Santa Ana` | `Nosotros | Downtown Community Escrow en Santa Ana` | Unique |
| Meta description | Institutional, location and specialty context | Equivalent localized intent | Pass |
| H1 | `Independent escrow. Clear coordination.` | `Escrow independiente. Coordinación clara.` | One per page |
| Canonical | `https://downtownescrow.net/about/` | `https://downtownescrow.net/es/nosotros/` | Pass |
| Hreflang | EN, ES, x-default | EN, ES, x-default | Reciprocal |
| Breadcrumb | Home → About | Inicio → Nosotros | Pass |
| Robots | `noindex, nofollow` | `noindex, nofollow` | Preserved |

AEO/GEO content directly identifies who Downtown is, what it does, where the verified office is, which six specialties have dedicated pages, what independent escrow means in context, and how to contact the company. The copy distinguishes verified company facts from general regulatory context and avoids statewide coverage, experience, performance, or credential claims.

## 5. Schema decision

`BreadcrumbList` is retained through the shared breadcrumb component. No `FAQPage` was added. No `Organization`, `LocalBusiness`, or separate `AboutPage` entity was added because the project does not yet have a broader verified entity/schema strategy and several business attributes remain pending. This avoids duplicate or incomplete entities.

## 6. Navigation and internal links

- Header and footer About/Nosotros links now point to the independent page pair.
- About is the sole primary-navigation item with `aria-current="page"` on these routes.
- Services remains a disclosure; it is not visually active on About.
- The language selector preserves the equivalent About/Nosotros page.
- Home retains `#why-downtown`; its contextual action now links to the localized About page.
- Contact navigation and About CTA continue to use the real localized Home `#contact` section.
- All six specialty cards point to their matching localized pages.
- Agents & Lenders and Resources remain hidden.

## 7. Validation performed

### Astro build

- Command: `npm run build`
- Result: passed.
- Output: **16 real static pages** plus the two existing static legacy Services documents.

### Responsive and functional validator

- Script: `scripts/validate-site.mjs`
- Result: passed.
- Coverage: **128 page/viewport combinations** (16 pages × 320, 390, 768, 880, 881, 1024, 1440, and 1920 CSS px).
- Failures: 0.
- Browser/page console errors: 0.
- Horizontal overflow: 0 in every combination.
- Additional checks: metadata, canonical, hreflang, noindex, breadcrumbs, BreadcrumbList, header/footer parity, six specialty links, About active state, mobile menu, Services disclosure, Escape/focus return, FAQ keyboard/exclusivity, no-JavaScript navigation, reduced motion, language pairing, CTA destinations, legacy redirect documents, and 404 handling.

Chrome printed updater IPC “access denied” diagnostics from its background updater. They were external to the rendered pages and did not appear in the captured browser/page error list.

### Playwright

- Script: `scripts/review-alignment.mjs`
- Output: `artifacts/about-implementation-2026-10-30/`
- Result: **48 checks**, 0 errors, 0 failures.
- Coverage: all 16 real pages at 1440×900 and 390×844, plus all 16 routes at 390×844 with JavaScript disabled.
- Verified: HTTP 200, localized `lang`, title, description, robots, canonical, alternates, one H1, expected FAQ count, no overflow, loaded images, unclipped hero text, FAQ exclusivity, equivalent-language navigation, visible no-JavaScript navigation, and native FAQ behavior.

## 8. Captures and visual review

- `artifacts/about-implementation-2026-10-30/about-en-1440.png`
- `artifacts/about-implementation-2026-10-30/about-en-390.png`
- `artifacts/about-implementation-2026-10-30/about-es-1440.png`
- `artifacts/about-implementation-2026-10-30/about-es-390.png`

The four About/Nosotros captures were visually inspected. The established Poppins typography, blue system, depth, spacing, header, footer, fixed language selector, cards, accordion, and CTA remain consistent. No clipped text, broken grid, missing content, or horizontal overflow was observed. No new image was needed; therefore Home and specialty photographs remain untouched.

## 9. Pending business evidence and risks

Before expanding the institutional claims or publishing, confirm:

- Downtown's specific license classification and supporting documentation.
- Verified team names, roles, biographies, and professional credentials.
- Verifiable company history or operating dates.
- Office hours and any additional contact channels.
- Actual operating/service coverage beyond the verified Santa Ana office.
- Any experience figures, transaction counts, testimonials, awards, or outcomes.

The physical office supports entity and local context but does not establish operational coverage across California or nationwide.

## 10. Differences from the earlier architecture

The earlier architecture listed team, licensing/credentials, company-history, or approach concepts. The later approved About brief expressly excluded standalone Story, Team, Approach, and Licensing/Credentials sections. The implementation follows the later six-block decision and records the missing evidence instead of reconstructing excluded sections.

## 11. Closure

About Us / Nosotros is technically complete within the available evidence. Both localized routes, six approved blocks, navigation, Home contextual link, metadata, breadcrumbs, FAQs, specialty links, and temporary contact destinations are implemented and tested. `noindex, nofollow` remains active, and nothing was published or deployed.
