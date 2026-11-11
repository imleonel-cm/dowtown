# Strategic content alignment — current six-page site

Audit and implementation date: October 27, 2026.

## Decision hierarchy and evidence boundary

This audit covers the six rendered pages: Home EN/ES, Manufactured & Mobile Home Escrow EN/ES, and Short Sale Escrow EN/ES. Current instructions and the later reconciliation control when they differ from the October 23 matrix.

Evidence used:

1. **Historical research:** `docs/research/MATRIZ_ARQUITECTURA_CONTENIDO_V1.md`. It records the original synthesis of Advantage One, Alliance Mutual, Lighthouse, Hacienda, and Clear Water. These are historical observations, not new checks performed in this implementation.
2. **Decision reconciliation:** `docs/research/historical-research-reconciliation-2026-10-27.md`. It preserves the historical strategy while recording later decisions: no Services hub, broad commercial orientation, six Home cards, Resources hidden, and About/Contact anchored to real Home sections until their pages exist.
3. **Recent complementary research:** `docs/research/competitive-research-2026-10-27.md`. Its exploratory sample includes Generations, Alliance Mutual, Meridian, Menifee Valley, iScribe Closing, and Westlake. These competitors are not attributed to the original study.
4. **Approved content briefs:** `docs/content/manufactured-mobile-home-escrow-brief.md` and `docs/content/short-sale-escrow-brief.md`.
5. **Current implementation:** shared business, route, navigation, metadata, Home, and specialty data/components in `src/`.

The research supplies qualitative patterns and editorial hypotheses. It does not supply search volume, difficulty, rankings, traffic, conversions, or proof that Downtown outperforms another company. External subject-matter sources explain transactions; they do not verify Downtown's licenses, coverage, experience, staffing, or processes.

## Research findings carried into this update

### Historical findings retained

- **Advantage One:** a dedicated manufactured-home page supports depth by specialty.
- **Alliance Mutual:** continuity between service choice, useful explanation, preparation, and a real next step.
- **Lighthouse:** people and responsibilities can strengthen trust when the company supplies verifiable names, roles, biographies, and credentials.
- **Hacienda and Clear Water:** local commercial and contact references, not proof of rankings, traffic, or conversion performance.

### Recent observations used separately

- Brief service lists are common, but a list alone does not help a visitor distinguish transaction situations.
- Practical preparation and a visible next step improve continuity, provided Downtown does not copy another company's workflow or requirements.
- Specificity about land/title for manufactured homes and approvals/conditions for short sales is more useful than generic claims of experience.
- Bilingual parity is observable in Downtown's implementation, but no research proves it is an exclusive competitive advantage.

### Later decisions preserved

- Services remains a disclosure button; the retired hub is not restored.
- Only Manufactured Homes and Short Sale are active specialty links.
- Probate, Reverse Mortgage, Residential, and Commercial remain non-interactive pending entries.
- Resources and Agents & Lenders remain hidden.
- The Santa Ana office is visible, but the commercial proposition is not artificially limited to Orange County and does not claim nationwide coverage.
- Legacy `/services/` and `/es/servicios/` documents remain static HTML/meta-refresh redirects served as HTTP 200 in Astro Preview, not HTTP 301/302 redirects.

## Update matrix

Status meanings: **comprobado** is supported by project evidence or observable implementation; **hipótesis** is plausible but unmeasured; **recomendación** is a bounded action or guardrail.

| Page or component | Finding and provenance | Current state before update | Concrete gap | Change and reason | Priority / expected benefit / risk | Validation | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home hero EN/ES | Original Home brief calls for an explicit business description beside the creative heading; reconciliation requires broad orientation | The hero said only “independent escrow services for property transactions” | It did not help a visitor understand the range or choose a specialty | Name independent escrow coordination and direct the visitor to the specialty matching the property and transaction | P1 / faster orientation / low risk because the six service categories already exist in shared data | Verify EN/ES meaning, one H1, CTA to real `#services`, responsive wrapping | comprobado |
| Home service cards EN/ES | Historical depth-by-specialty principle; recent sample shows that lists alone do not differentiate services | Several descriptions were generic; “dependable” and “experienced” were unsupported claims | Cards did not clearly distinguish the transaction question behind each service | Replace generic marketing language with a concise differentiator for land/records, written approvals/liens, authority, loan role, residential, or commercial context | P1 / better service selection / medium risk of implying unverified process, controlled with neutral wording | Verify all six cards, only two links, pending status for four, bilingual parity | comprobado |
| Home consultation FAQ EN/ES | Alliance pattern: explanation should lead to a useful next step | Answer repeated a file-opening warning already addressed elsewhere | Conversion path was cautious but less helpful than necessary | Ask the visitor to bring property, transaction, and questions; explain that the conversation identifies the relevant specialty | P2 / clearer next step / low risk; no response-time or acceptance promise | Verify phone, Home contact section, FAQ exclusivity, no-JS details | recomendación |
| Home identity and office | Lighthouse trust principle; business facts in `business.ts` | Legal name, phone, address, illustrative-image disclaimer, and office context are visible | Team, roles, credentials, and actual office photo remain unavailable | Preserve current verified identity; do not simulate team evidence | P1 / factual trust / high risk if invented | Confirm shared NAP, image alt/caption, footer consistency | comprobado |
| Manufactured hero EN/ES | Original specialty depth; recent P1 recommendation calls for a concrete opening and less repetition | Hero listed six audience groups; overview repeated the same audience | The service answer was accurate but verbose and repetitive | State Downtown's escrow-coordination role, then foreground land, location, and title/registration information | P1 / clearer commercial intent / low risk | Verify metadata, H1, direct answer, EN/ES editorial equivalence | comprobado |
| Manufactured preparation | Alliance preparation pattern; approved brief protects land/title/location precision | Generic four-step path repeated the following orientation list | Two consecutive sections covered nearly the same facts | Reframe preparation as four transaction questions: what is included, where it is, what records exist, and who participates | P1 / more practical consultation preparation / low risk because no mandatory workflow is asserted | Check headings, index anchors, mobile composition | comprobado |
| Manufactured FAQ | AEO guidance: FAQs should add value, not duplicate the page | First FAQ repeated the dedicated preparation and information sections | Redundant answer added length without new decision value | Remove the duplicated “information before calling” FAQ; retain land, state variation, out-of-state, lending, and file-opening questions | P2 / less repetition / low risk | Verify exclusive accordion, no-JS disclosure, keyboard behavior | recomendación |
| Manufactured CTA | Recent CRO recommendation: concrete next step without a false promise | CTA repeated that consultation does not open a file, already covered in FAQ | Precaution dominated the final invitation | Invite a call about the property, transaction, and available information | P1 / clearer action / low risk; file-opening boundary remains in FAQ | Verify telephone target and localized Home-contact link | recomendación |
| Short Sale hero EN/ES | CFPB-backed definition; recent P1 calls for two short sentences and separation of definition from escrow role | One long sentence listed audience groups and role boundaries | The service was clear but dense | Keep the definition; state Downtown's closing-coordination role; assign approval to lender/servicer | P1 / faster comprehension / low risk | Verify visible HTML answer, H1, metadata, EN/ES parity | comprobado |
| Short Sale overview | Historical depth and recent recommendation to concentrate precautions near the relevant claim | Body repeated a long participant list and role caveats also present in the boundary panel | Repetition diluted the explanation of escrow | Reduce the body to alignment with written instructions and leave decisions in the adjacent boundary panel | P1 / stronger information hierarchy / low risk | Verify boundary titles and content remain complete | comprobado |
| Short Sale preparation | Recent research prioritizes status, approvals, conditions, dates, and next step | Intro repeated acceptance/approval/timeline warnings | The caution was accurate but already covered in hero, variables, and FAQs | Focus the intro on sale status, written communications, participants, and dates | P1 / practical preparation / low risk | Verify the four steps and orientation list remain distinct | comprobado |
| Short Sale FAQ | AEO guidance: do not rely on or duplicate FAQs | “What information should I have?” repeated two preceding sections | Redundant question added length | Remove that FAQ; preserve approval, date, out-of-state, and remaining-debt answers | P2 / tighter answers / low risk | Verify five exclusive questions and debt qualification | recomendación |
| Short Sale CTA | Recent CRO recommendation favors a useful action over repeated warnings | Final CTA repeated approval and timing disclaimers already explained | Commercial invitation was less concrete than the page's preparation content | Ask the caller to discuss property, status, written approval communications, and questions | P1 / better continuity / low risk; no approval or timing promise is made | Verify telephone and localized contact links | recomendación |
| Shared navigation/footer | Later architecture overrides the old hub proposal | Disclosure, two active links, four pending labels, About/Contact anchors, hidden flags | No implementation gap found | Preserve centralized resolver and progressive disclosure | P1 / prevents broken destinations / high regression risk if changed unnecessarily | Full validator, keyboard, Escape, focus, no-JS, 880/881 breakpoint | comprobado |
| SEO/AEO/GEO foundation | Original matrix plus current architecture | Unique titles/H1s, direct answers, canonical/hreflang pairs, breadcrumbs, scoped sources, consistent entity data | No schema or metadata quantity gap demonstrated | Change only descriptions where Home clarity improves; add no new schema | P2 / clearer snippet context / risk of unsupported claims kept low | Inspect head, structured data, reciprocal alternates, noindex | comprobado |
| Research archive and documentation | Reconciliation explicitly requires versioned references | Original files existed only outside the active repository | Future work could repeat the mistaken conclusion that research was absent | Copy all three references unchanged into `docs/research/` and record their provenance | P1 / durable decision context / low risk | Normalized-content comparison with originals | comprobado |
| Competitive performance | No source contains verified outcomes | No performance claims are published | Organic or conversion impact is unknown | Measure only after launch; do not claim improvement now | P1 / prevents false conclusions / no implementation risk | Future Search Console/analytics baseline and approved call measurement | hipótesis |

## Correctly implemented elements preserved

- Approved routes, Poppins, white/light-blue/deep-blue palette, photographs, frames, depth, and layered notes/documents.
- Six compact Home cards with only implemented services linked.
- Shared navigation and footer destinations from one resolver.
- Services as one disclosure button, with semantic nested lists and no `menu`/`menubar` roles.
- Click, touch, keyboard, Escape, focus return, outside-click handling, `inert`, breakpoint cleanup, reduced motion, and functional no-JavaScript fallback.
- Direct localized language links and reciprocal canonical/hreflang for implemented pairs.
- One H1, descriptive headings, visible breadcrumbs, and matching `BreadcrumbList` data.
- `noindex, nofollow`, hidden Resources and Agents & Lenders, and the retired hub behavior.
- Manufactured details about land, title/registration, property location, and professional roles.
- Short Sale details about written approvals, conditions, dates, liens, and possible remaining debt.
- Narrow source descriptions that do not present Fannie Mae, HCD, CFPB, or HUD as Downtown partners or procedures.

## Editorial examples

| Location | Before | After | Reason |
| --- | --- | --- | --- |
| Home hero EN | “Independent escrow services for property transactions.” | “Downtown Community Escrow provides independent escrow coordination across six property-transaction specialties…” | Names the business function and helps the visitor choose. |
| Home Short Sale card EN | “Experienced escrow support through the short sale process.” | “Escrow coordination around written approval terms, title or liens, and closing instructions…” | Removes an unsupported experience claim and adds transaction-specific meaning. |
| Manufactured hero EN | Audience list followed by a general neutral-coordination statement | Direct Downtown role followed by land, location, and record questions | Keeps specialty depth while removing duplication with the overview. |
| Short Sale CTA EN | Warning that the call promises no acceptance, approval, or date | Invitation to discuss the property, status, written approvals, and questions | Moves the next step forward while role/timing limits remain where they are explained. |

Spanish copy is editorially equivalent rather than mechanically literal; it retains common project terminology such as `escrow`, `short sale`, and `probate` where that improves recognition.

## SEO, AEO, and GEO assessment

### SEO

- Home owns the broad brand/service-selection intent; Manufactured and Short Sale own distinct specialty intents.
- Manufactured centers on the property, land, title/registration, and jurisdiction. Short Sale centers on lender/servicer approval, written conditions, liens, dates, and possible deficiency. No material intent cannibalization is evident in the current pages.
- Titles, descriptions, one H1, headings, routes, localized internal links, canonical, and reciprocal hreflang remain page-specific.
- Search demand, difficulty, ranking opportunity, and performance remain unmeasured.

### AEO

- The service answer appears in rendered HTML before the FAQ.
- Important questions are answered in explanatory sections and focused lists; the FAQ is supplementary.
- Removing duplicated preparation questions reduces repetition without removing material answers.
- No FAQ schema is added merely because FAQs exist.

### GEO

- Legal name, phone, and office address come from shared business data.
- The office location is a factual entity signal, not a claim that every service is limited to Santa Ana or Orange County.
- General explanations and official sources are separated from unverified Downtown capabilities.
- Jurisdiction-specific and program-specific sources retain explicit scope. No national-service, licensing, rating, experience, or outcome claim is added.

## Business evidence still required

Before publishing corresponding claims, obtain internal confirmation and evidence for:

- escrow licenses, license identifiers, credentials, responsible people, roles, biographies, and permission to publish them;
- active service coverage by jurisdiction and transaction type;
- manufactured-home scope when land is or is not included;
- actual intake, review, file-opening, assignment, communications, title/payoff, and closing practices;
- required documents, response standards, timelines, fees, office hours, and service modalities;
- authorized team and office photographs;
- contact-form ownership, data handling, and response expectations;
- reconciliation of the confirmed office address with conflicting public information before launch.

No placeholders or generalized “trusted/experienced/expert” claims should substitute for this evidence.

## Criteria before developing Probate

1. Use the historical matrix, the reconciliation, the recent research, and the approved Probate brief together; later decisions prevail.
2. Confirm the intended audience and transaction question without treating all inherited property as probate.
3. Separate escrow coordination from authority to act for an estate, legal advice, estate administration, and court decisions.
4. Explain jurisdiction and court-approval variation without turning a California example into a national rule.
5. Request business confirmation for Downtown's actual probate scope, staff responsibility, intake, records, and coordination practices.
6. Draft a direct HTML answer and transaction-specific sections before writing FAQs.
7. Use only real destinations; activate the navigation link only when both localized routes exist.
8. Preserve EN/ES editorial equivalence, unique metadata/H1, reciprocal hreflang, visible/machine-readable breadcrumbs, and `noindex` during development.
9. Run the full validator and visual checks at every existing width before declaring the pair ready.
10. Do not infer organic, AEO, GEO, or conversion performance from implementation alone.

Probate remains out of scope for this update.

## Resumption validation — October 28, 2026

The editorial changes in the matrix above were found already saved at resumption and were preserved. All three archived research references match their external originals after line-ending/trailing-whitespace normalization. The remaining work was validation and documentation, plus a Spanish mobile specialty-hero clipping defect found during visual review.

The hero now uses a shrinkable grid/content track and responsive Spanish heading sizing without changing the approved brand, images, or structure. Validator coverage now checks hidden text overflow as well as document overflow, expects five specialty questions, and exercises FAQ interaction in both languages. Final evidence: 48 responsive combinations and 18 Playwright records passed with no page-console errors or failures. See `resumption-review-2026-10-28.md` and `artifacts/alignment-review-2026-10-28/`.

This confirms implementation and presentation within the current scope, not organic performance or unverified company capabilities. Probate and the evidence-pending list above remain future work.
