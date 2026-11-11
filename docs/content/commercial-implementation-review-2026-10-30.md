# Commercial Escrow EN/ES — implementation review

**Implementation and validation date:** October 30, 2026  
**Status:** Technically complete in the local static build; unpublished and retained as `noindex, nofollow`.

## 1. Prior state

Commercial already existed as a reserved page key, localized route pair, service card, icon, and Coming soon/Próximamente navigation entry. It did not have page content, route components, canonical/hreflang output, or a language-switcher destination.

The implementation reused the existing specialty-page system. No new visual template, photograph, navigation architecture, tracking behavior, dependency, or publishing configuration was introduced.

## 2. Routes and files

### New routes

- EN: `/services/commercial-escrow/`
- ES: `/es/servicios/escrow-comercial/`

### New files

- `src/data/commercial.ts`
- `src/components/CommercialPage.astro`
- `src/pages/services/commercial-escrow/index.astro`
- `src/pages/es/servicios/escrow-comercial/index.astro`
- `docs/content/commercial-implementation-review-2026-10-30.md`

### Modified files

- `src/data/site.ts`
- `src/components/SpecialtyPage.astro`
- `scripts/validate-site.mjs`
- `scripts/review-alignment.mjs`
- `scripts/capture-bilingual.mjs`
- `README.md`
- `docs/site-architecture.md`

Commercial was added to `implementedPageKeys` only after both localized pages existed. The shared service resolver automatically converted Commercial from status text to a real link in Home, desktop/mobile Services, no-JavaScript navigation, and footer.

## 3. Editorial implementation

The page implements the ten planned functions within the established specialty template:

1. Commercial-specific hero and CTA.
2. Direct definition of commercial real estate escrow.
3. A cautious explanation of the role Downtown can discuss and confirm.
4. Transaction-shaping details instead of an unsupported “transactions we handle” list.
5. A flexible preparation sequence, explicitly not an internal workflow.
6. Separation of buyer/seller, broker/agent, lender, title, escrow, attorney, CPA, and tax-adviser roles.
7. Orientation information, not a mandatory document or due-diligence checklist.
8. Five Commercial FAQs.
9. One contextual link to Residential Escrow.
10. Localized telephone and Home-contact CTA.

The page does not claim that Downtown handles office, retail, industrial, mixed-use, commercial refinance, business sale, asset transfer, or Section 1031 matters. It also does not claim statewide/national coverage, licensing, experience, fees, timing, approval, or results.

## 4. SEO, AEO, GEO, and schema

| Element | English | Spanish | Result |
| --- | --- | --- | --- |
| Title | `Commercial Escrow Services | Downtown` | `Servicios de Escrow Comercial | Downtown` | Unique |
| Meta description | Commercial real estate intent + Santa Ana consultation context | Natural localized equivalent | Unique |
| H1 | `Commercial Escrow Services` | `Servicios de Escrow Comercial` | One per page |
| Direct answer | Defines neutral commercial real estate escrow and written instructions | Equivalent Spanish answer | Visible before FAQs |
| Canonical | `https://downtownescrow.net/services/commercial-escrow/` | `https://downtownescrow.net/es/servicios/escrow-comercial/` | Self-referencing |
| Hreflang | Reciprocal `en`, `es`, and English `x-default` | Reciprocal equivalent | Pass |
| Breadcrumb | Home → Commercial Escrow | Inicio → Escrow comercial | Pass |
| Structured data | Two-item `BreadcrumbList` | Localized two-item `BreadcrumbList` | Pass |
| Robots | `noindex, nofollow` | `noindex, nofollow` | Preserved |

No `FAQPage`, `Service`, `Organization`, or `LocalBusiness` schema was added. Those types would require a broader schema strategy or verified business attributes. The owner-confirmed address remains visible through the shared footer: **640 North Tustin Ave, Suite 202, Santa Ana, CA 92705**.

## 5. Five FAQs

1. What is commercial real estate escrow? / ¿Qué es el escrow de bienes raíces comerciales?
2. How is commercial escrow different from residential escrow? / ¿En qué se diferencia el escrow comercial del residencial?
3. What information may be useful before discussing a commercial escrow? / ¿Qué información puede ser útil antes de consultar un escrow comercial?
4. Who handles funds and closing documents in a commercial transaction? / ¿Quién maneja los fondos y documentos de cierre en una operación comercial?
5. What can affect the timing of a commercial escrow closing? / ¿Qué puede afectar el calendario de un cierre de escrow comercial?

Answers are visible HTML, concrete, conditional where necessary, and do not turn general regulatory context into Downtown operating claims.

## 6. Internal linking and conversion

- Home Commercial card now links to the localized Commercial page.
- Services disclosure exposes all six specialty links in both languages.
- Footer uses the same six shared destinations.
- EN/ES selector preserves Commercial across languages.
- Breadcrumb contains Home and the current specialty only.
- Commercial links to Residential where property use may determine the correct starting point.
- Primary CTA is `Discuss a commercial escrow` / `Consulta sobre un escrow comercial`.
- No Open Escrow flow, form, dedicated Commercial team, Resources link, or retired Services hub was introduced.

## 7. Validation results

All tests were run against the final local static preview at `http://127.0.0.1:4321`.

- Astro build: **passed; 14 real pages built**.
- Responsive validator: **112 page/viewport checks** (14 pages × 320, 390, 768, 880, 881, 1024, 1440, and 1920 CSS px).
- Validator failures: **0**.
- Validator browser errors: **0**.
- Horizontal overflow: **0**.
- Playwright review: **42 checks** (14 pages at 1440 and 390 px plus 14 no-JavaScript mobile checks).
- Playwright failures: **0**.
- Playwright page/console errors: **0**.
- Broken images: **0**.
- Clipped specialty-hero text: **0**.

The tests covered metadata, unique H1/title behavior, canonical/hreflang/x-default, BreadcrumbList, current service, six-link navigation/footer, Home cards, mobile menu, keyboard, Enter, Space, Escape, focus return, outside click, `inert`, FAQs, language switching, internal links, no-JavaScript access, reduced motion, legacy static redirect documents, 404 behavior, and regressions across Home and all five earlier specialties.

Chrome emitted updater IPC access-denied messages in the host process. They were external to the pages and were not recorded as browser-console or page errors.

## 8. Captures

Evidence directory: `artifacts/commercial-implementation-2026-10-30/`

- `commercial-en-1440.png`
- `commercial-en-390.png`
- `commercial-es-1440.png`
- `commercial-es-390.png`
- `playwright-report.json`

The directory also contains current 1440 px and 390 px captures for the other twelve localized pages. Visual inspection found no clipped headings, overlap, missing content, broken layout, misplaced language switcher, or mobile horizontal overflow.

## 9. Differences from the research plan

- The proposed “Commercial Transactions We Handle” block was intentionally replaced by transaction-shaping details because accepted Commercial modalities remain unverified.
- The implementation uses the existing specialty template instead of creating ten separate visual sections. All ten editorial functions remain represented.
- Only Residential is linked as a related service because it provides a meaningful property-use distinction.
- The source list is limited to DRE, DFPI, and California Department of Insurance. Business-sale, CDTFA, IRS, and 1031 sources were not added because those are boundaries, not confirmed Downtown services.

## 10. Pending business evidence and risks

Before expanding or launching Commercial claims, Downtown must confirm:

- Whether Commercial real estate escrow is currently accepted.
- Accepted property types: office, retail, industrial, mixed-use, multi-unit, vacant land, or others.
- Accepted transactions: purchase, sale, refinance, business sale, asset transfer, bulk sale, or others.
- Whether it coordinates closings related to Section 1031 and how it separates its role from the qualified intermediary.
- Geographic and jurisdictional coverage.
- Transactions the company does not accept.
- Opening information, written-instruction handling, wire verification, documents, participants, communication, title/lender coordination, and internal workflow.
- License, number, responsible professionals, verifiable experience, fees, hours, response expectations, and timelines.
- Whether the approved CTA remains a consultation or should later connect to a documented opening process.

The principal risk is presenting a broad commercial category as proof that every commercial property or business transaction is accepted. The current copy mitigates that risk by asking Downtown to confirm fit and by avoiding a public modality list.

## 11. Closure

Commercial EN/ES is technically complete within the available evidence. The six specialty pairs are active and localized, the complete regression suite passes, `noindex, nofollow` remains in place, and nothing was published or deployed.
