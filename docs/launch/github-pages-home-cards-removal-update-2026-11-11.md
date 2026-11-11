# GitHub Pages preview update — Home card removal

## Scope

The preview synchronization includes the approved removal of the three specialty cards rendered below the Home hero in English and Spanish: Residential Escrow, Commercial Escrow, and Probate Escrow. The seven-card Services catalog remains rendered below the hero.

## Source and synchronization

- Source: `downtown_v2` on the Desktop.
- Git synchronization clone: `PROYECTO/downtown_clone`.
- Remote: `https://github.com/imleonel-cm/dowtown.git`.
- Production domain was not changed or deployed.

## Validation before commit

- Production build: passed; 31 static pages generated and sitemap generated with 30 URLs.
- GitHub Pages build (`GITHUB_PAGES_PREVIEW=true`): passed; preview base `/dowtown/` applied.
- Home EN and ES: hero specialty-card count 0; Services catalog count 7.
- Hero CTAs, copy, image, canonical/hreflang, `noindex, nofollow`, Resources, legal pages, and branding assets remain present in generated output.
- CSS references resolve under `/_astro/`; preview URLs use `/dowtown/`.

## Deployment status

This report is prepared before the authorized commit and push. The final commit SHA, Actions result, and public preview response checks must be recorded after push.

## Limitations

Visual browser verification and post-deploy GitHub Actions checks are not represented as complete until the push finishes and the public preview is rechecked.
