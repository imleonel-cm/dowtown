# Downtown Community Escrow — site architecture v1

This document is the source of truth for the approved information architecture and bilingual route pairs. The original diagram is preserved at [`docs/references/site-architecture-v1.png`](references/site-architecture-v1.png).

## Languages and route pairing

- English is primary at the root; Spanish pages live under `/es/`.
- Equivalent pages are paired by stable page keys, not translated through string replacement.
- Language choices are direct links. There are no automatic language redirects, cookies, or stored preferences.
- Only implemented pairs appear in `hreflang` alternates and the language switcher.

| Page key | English | Spanish | Status |
| --- | --- | --- | --- |
| `home` | `/` | `/es/` | Implemented |
| `services` | `/services/` | `/es/servicios/` | Retired; redirects to localized Home `#services` |
| `manufacturedHomes` | `/services/manufactured-home-escrow/` | `/es/servicios/escrow-casas-manufacturadas/` | Implemented |
| `about` | `/about/` | `/es/nosotros/` | Implemented |
| `agentsLenders` | `/for-agents-and-lenders/` | `/es/agentes-y-prestamistas/` | Planned |
| `resources` | `/resources/` | `/es/recursos/` | Planned |
| `contact` | `/contact/` | `/es/contacto/` | Planned |
| `probate` | `/services/probate-escrow/` | `/es/servicios/escrow-probate/` | Implemented |
| `shortSale` | `/services/short-sale-escrow/` | `/es/servicios/escrow-short-sale/` | Implemented |
| `reverseMortgage` | `/services/reverse-mortgage-escrow/` | `/es/servicios/escrow-hipoteca-inversa/` | Implemented |
| `residential` | `/services/residential-escrow/` | `/es/servicios/escrow-residencial/` | Implemented |
| `commercial` | `/services/commercial-escrow/` | `/es/servicios/escrow-comercial/` | Implemented |

The English article opportunity remains reserved at `/resources/what-can-delay-an-escrow-closing/`; it and a Spanish equivalent are not implemented.

## Current page architecture

### Home

One-H1 bilingual Hero with a service/location answer, two conversion paths, preserved responsive reference image, and linked Residential, Commercial, and Probate feature cards; primary services; Why Downtown; general FAQs and consultation preparation; featured resources when enabled; contact CTA; footer. The Hero implementation and validation are documented in `docs/content/home-hero-v2-implementation-review-2026-11-05.md`.

### About / Nosotros

Home/current-page breadcrumb; institutional hero; verified company identity and office; explanation of the neutral independent-escrow role and separate professional roles; links to all six implemented specialties; four company FAQs; and a temporary CTA to the localized Home contact section. The page does not include standalone Story, Team, Approach, or Licensing/Credentials blocks and does not state a specific license classification, history, statewide coverage, awards, results, or unverified personnel.

### Manufactured & Mobile Home Escrow

Home/current-page breadcrumb; proportional hero; direct specialty answer and professional-role boundaries; transaction variables; consultation preparation; useful initial information; specialty FAQs; carefully scoped related sources; telephone and localized Home-contact paths. The page does not assert a universal process, guaranteed jurisdictional coverage, lending services, title insurance, or legal or tax advice.

### Short Sale Escrow

Home/current-page breadcrumb; direct definition; separation of escrow coordination from short sale approval and negotiation; written approvals, title/liens, dates, and documentation variables; consultation preparation; five specialty FAQs; carefully scoped CFPB and HUD sources; telephone and localized Home-contact paths. The page does not promise approval, debt release, service coverage, a closing date, or legal, tax, or credit outcomes.

### Probate Escrow

Home/current-page breadcrumb; direct definition; separation of inherited property, probate procedure, authority, independent administration, and court confirmation; roles and closing variables; consultation preparation; five specialty FAQs; contextual links to Manufactured Homes and Short Sale; four official California and Orange County sources; telephone and localized Home-contact paths. The page does not determine whether probate is required, whether court confirmation applies, who has authority, or whether Downtown can serve a specific matter.

### Reverse Mortgage Escrow

Home/current-page breadcrumb; direct definition of closing escrow distinguishing it from loan origination and servicing reserves; role boundaries separating escrow from lender, counselor, servicer, title, legal, and financial professionals; closing process variables (HECM vs proprietary, HECM for Purchase vs existing home, lender conditions, property/title obligations, participants/documents); consultation preparation; consultation information; five focused FAQs; contextual related service (Manufactured & Mobile Home Escrow); five official sources (HUD, CFPB buy home, CFPB closing docs, CFPB rescission, DFPI); telephone and localized Home-contact paths. The page does not approve loans, determine borrower eligibility, offer counseling, or assert universal rescission, fee, timeline, or closing rules.

### Residential Escrow

Home/current-page breadcrumb; direct definition of residential closing escrow for purchases and sales; role boundaries separating escrow from agents, lenders, title insurers, and legal or tax professionals; transaction variables (property type, financing, location, and participants); consultation preparation; orientation information; five focused FAQs; three carefully scoped official sources (California DRE, California DFPI, and CFPB); telephone and localized Home-contact paths. The page does not assert verified geographic coverage, licensing, an internal wire protocol, a universal process, a guaranteed timeline, or an outcome.

### Commercial Escrow

Home/current-page breadcrumb; direct definition of commercial real estate escrow; role boundaries separating escrow from buyer/seller decisions, brokerage, lending, title, legal/tax advice, business-sale escrow, and a Section 1031 qualified intermediary; transaction-shaping details; consultation preparation; orientation information; five focused FAQs; contextual Residential link; three official sources (California DRE, California DFPI, and California Department of Insurance); telephone and localized Home-contact paths. The page does not assert accepted commercial property or transaction types, geographic coverage, licensing, an internal workflow, a universal timeline, or an outcome.

### Retired Services hub

The former bilingual hub is no longer part of the rendered information architecture. Its two legacy addresses redirect to the localized Home services section through `noindex` static HTML documents with meta refresh and fallback links. Astro Preview serves those static documents with HTTP 200; a future host may translate the redirect manifest differently. Archived hub components/content remain unreferenced in source for recoverability and are not routes.

## Planned page architecture
- Agents & Lenders: audience, escrow-opening request, initial information, coordination, professional questions, CTA.
- Resources: guides, escrow basics, resources by service, common questions, official sources, service links.
- Contact: office, phone, confirmed hours, defined form behavior, location, operational questions.
- Future specialties: clear initial answer, scope, verified coordination/process information, reviewed requirements, questions, and contact.

## Progressive navigation

The approved final menu is `Home, Services, About, Agents & Lenders, Contact` and `Inicio, Servicios, Nosotros, Agentes y prestamistas, Contacto`. The current functional navigation omits Agents & Lenders until it has a real destination. About/Nosotros points to the implemented localized page pair. Contact/Contacto continues to point to the real `#contact` section of the localized Home. The Home section heading “Why Downtown” remains unchanged and links contextually to About.

Services/Servicios is one disclosure button, not a hub link and not a split link/button control. Its shared presentation catalog is ordered Residential, Commercial, Probate, Manufactured Homes, Mobile Homes, Short Sales, Reverse Mortgage, and Wholesale in both languages. Manufactured Homes and Mobile Homes are separate labels resolving to the same existing localized Manufactured & Mobile Home Escrow page; only Manufactured Homes can receive `aria-current="page"`. Wholesale is a pending non-link labeled Coming soon/Próximamente and has no route, schema, sitemap entry, or content claim. The six canonical specialty definitions and pages remain unchanged.

On desktop the list opens as a compact panel; on mobile it expands inside the primary navigation. The disclosure supports click/touch, Tab, Enter, Space, Escape with focus return, outside-click closing, and `inert` while hidden. Escape closes the innermost open disclosure first. Without JavaScript, the nested list is visible and its implemented link remains usable. No `menu` or `menubar` roles are used.

On a specialty page, Services may have a visual section-active treatment but must not receive `aria-current="page"`; only one current specialty link receives it. Home, About, the desktop/mobile disclosure, and the footer consume the same ordered presentation catalog. The footer exposes seven links because two labels share one canonical destination, plus one pending Wholesale item.

Resources remains hidden via `featureFlags.resources = false`. The fixed selector displays `EN | ES` but retains full localized accessible names, `lang`, `hreflang`, direct equivalent-page destinations, and current-language state.

## SEO, AEO, and GEO foundation

- `html lang`, title, description, canonical, and alternates are localized.
- Canonicals/alternates use Astro's configured production origin, never localhost.
- Implemented pairs have reciprocal English, Spanish, and English `x-default` entries.
- The retired hub is excluded from `implementedPageKeys`, the language switcher, and alternates.
- All current pages and static redirect fallbacks remain `noindex`; rendered pages use `noindex, nofollow`.
- About and specialty breadcrumbs use a two-item Home/current-page `BreadcrumbList`.
- No unverified licenses, credentials, availability, reviews, history, performance figures, timelines, fees, processes, or outcomes may be added. FAQ structured data remains intentionally omitted.

## Content pending review

- Final licensed photography and a verified office photograph.
- Licenses, credentials, office hours, team information, form handling, workflows, required documents, timelines, fees, and service coverage/modality.
- About evidence pending: specific license classification, verified company history, team information, credentials, and any broader operating-coverage claim.
- Future guides and Spanish equivalents.
- Manufactured/mobile-home operational scope: jurisdictions, land/home transaction scope, intake/file opening, records, roles, response times, fees, and coordination practices. See `docs/content/manufactured-mobile-home-escrow-brief.md`.
- Short-sale operational scope: jurisdictions, intake/file opening, written approvals, title/payoff coordination, records, participant communications, roles, timelines, fees, and closing practices. See `docs/content/short-sale-escrow-brief.md`.
- Probate operational scope: accepted matters, full/limited-authority handling, court-confirmation workflow, intake records, participant communications, jurisdictions, responsibilities, timelines, fees, license, and verifiable experience. See `docs/content/probate-implementation-review-2026-10-28.md`.
- Reverse mortgage operational scope: accepted transaction types (HECM, proprietary, HECM for Purchase), intake/opening requirements, lender instructions and conditions handling, payoffs and existing lien coordination, participant communications, rescission procedures, timelines, fees, license, and verifiable experience. See `docs/content/reverse-mortgage-implementation-review-2026-10-28.md`.
- Residential operational scope: accepted transaction types and property types, geographic coverage, intake/opening requirements, wire-verification procedures, participant communications, roles, timelines, fees, license, and verifiable experience. See `docs/content/residential-implementation-review-2026-10-28.md`.
- Commercial operational scope: accepted commercial property and transaction types, business-sale distinction, refinance and Section 1031 boundaries, geographic coverage, intake/opening requirements, participant communications, wire-verification procedures, roles, timelines, fees, license, and verifiable experience. See `docs/content/commercial-implementation-review-2026-10-30.md`.

## Strategic research references

The recovered historical matrix, the later decision reconciliation, and the recent complementary competitive sample are preserved in `docs/research/`. The historical matrix is not a current route specification: the reconciliation and later approved instructions prevail. The active implementation audit and update matrix are maintained in `docs/content/competitive-content-alignment.md`.
