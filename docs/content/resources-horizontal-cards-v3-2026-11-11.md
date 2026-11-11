# More Resources horizontal cards review (2026-11-11)

## Scope

Local-only visual refinement for the shared More Resources cards in EN and ES. No GitHub synchronization or publication.

## Problem and previous rules

The card image used `aspect-ratio: 16 / 9` with `object-fit: cover`, while the card body retained a minimum height and generous padding. At the narrow width of a three-column grid this could crop important embedded text in the resource artwork and make the card feel taller than necessary.

## Implemented refinement

- Card images remain 16:9 but now use `object-fit: contain` with a neutral Downtown surface background.
- Card image markup uses matching `640 × 360` dimensions so the HTML intrinsic ratio does not create a tall contain canvas.
- The card body uses reduced padding and no artificial minimum height.
- The inherited 410 px card minimum height is explicitly reset so unused vertical space is not preserved.
- The title remains multi-line and the excerpt remains visually clamped to approximately three lines.
- The Read Article / Leer artículo link remains accessible and aligned after the content.
- The 3-column desktop, 2-column tablet, and 1-column mobile grid is unchanged.
- The featured Clear to Close layout and both individual article pages are unchanged.

## EN/ES result

The same shared card component and CSS serve `/resources/` and `/es/recursos/`. Titles, categories, excerpts, links, order, images and language switcher remain localized by the existing collection data. No new translations were created in this task.

## Validation

- Production Astro build passed with 31 static pages.
- Resources EN and ES were captured at 1440 px, 768 px and 390 px.
- Delay Closing image remained complete inside its card without distortion; Clear to Close remained featured.
- No horizontal overflow or fictitious cards were observed.
- Canonical, hreflang, Article JSON-LD and `noindex, nofollow` remained unchanged.
- GitHub Pages preview build was not published or synchronized during this task.
