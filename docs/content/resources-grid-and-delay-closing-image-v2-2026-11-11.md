# Resources grid and Delay Closing image review (2026-11-11)

## Scope

Local-only change. GitHub Pages was not synchronized and no production domain was changed.

## Changes

- `public/images/resources/delay-closing.png` is the verified PNG resource image (1672 × 941 px, 1,942,315 bytes). The original file had a PNG signature but no extension, which made the public asset MIME handling unreliable.
- The image is connected through the collection frontmatter of `what-can-delay-an-escrow-closing.md`.
- The image now appears in the More Resources card and the individual article page.
- More Resources uses three columns at desktop, two at tablet, and one at mobile.
- A single previous article occupies only the first desktop column; no placeholders are rendered.
- Resource cards use a 16:9 image ratio, readable multi-line titles, clamped excerpts, and flex-aligned links.
- Clear to Close remains the featured article with `Your Loan.png` unchanged.
- Resources ES remains empty because no Spanish article translations are confirmed.

## SEO and accessibility

- Slugs, titles, descriptions, canonical, hreflang, Article JSON-LD, internal links and `noindex, nofollow` were preserved.
- The new image has explicit dimensions and a descriptive ALT.
- No translation, author, date, credential, or business claim was invented.

## Validation

- Production build passed: 29 static pages.
- Preview-base build passed with `GITHUB_PAGES_PREVIEW=true`; `/dowtown/` asset references and `noindex, nofollow` were confirmed.
- Resources EN and ES generated correctly. EN shows Clear to Close as featured and Delay Closing in More Resources; ES remains empty without fabricated translations.
- Both English article routes generated and returned through the local HTTP server.
- Captures reviewed at 1440, 768, 390 and 320 px. The 1440 and 390 captures also cover the new image and vertical card layout.
- Evidence captures: `artifacts/screenshots/resources-delay-grid-1440.png`, `resources-delay-grid-768.png`, `resources-delay-grid-390.png`, `resources-delay-grid-320.png`, and `delay-closing-article-1440.png`.
- The existing general validator ran across the responsive page matrix but stopped at its known stale `#mobile-homes` selector in the current Services architecture. No validator checks were weakened or rewritten.
- No horizontal overflow, missing image, image distortion, fictitious card, or large internal card gap was observed in the reviewed captures.

## Delay Closing visibility correction

- The physical file contained a valid PNG signature (`89 50 4E 47...`) but had no extension.
- It was renamed to `public/images/resources/delay-closing.png` without changing its bytes.
- The collection field now uses `/images/resources/delay-closing.png`, so both the card and article use the same public asset reference.
- Production and `/dowtown/` preview builds both contain the asset and the generated HTML reference.
- The image was visually confirmed in the article at desktop and mobile sizes.
