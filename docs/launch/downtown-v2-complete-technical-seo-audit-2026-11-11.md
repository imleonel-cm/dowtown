# Downtown V2 — auditoría técnica SEO/AEO/GEO (2026-11-11)

## Resumen ejecutivo

La auditoría se realizó sobre la fuente de verdad local `downtown_v2`. El build actual genera 31 páginas estáticas: Home EN/ES, About, Contact, siete especialidades bilingües, Resources, cuatro artículos bilingües y cuatro páginas legales bilingües, además de documentos heredados de redirección y 404.

Se comprobaron como correctos los canonicals de producción, las relaciones EN/ES, x-default, H1 únicos, breadcrumbs, Article JSON-LD en recursos, ALT, enlaces internos principales, Poppins, favicon y el estado intencional `noindex, nofollow`.

## Problemas priorizados

### P1 — Open Graph y Twitter metadata ausentes

Estado anterior: el layout común solo emitía description, canonical, favicon y hreflang.

Corrección: `BaseLayout.astro` ahora genera `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description` y `twitter:image`. Los artículos reutilizan su imagen destacada; el resto usa la imagen corporativa aprobada del Home.

Riesgo: bajo. No cambia URLs ni contenido visible.

### P1 — Sitemap desactualizado

Estado anterior: `public/sitemap.xml` no incluía Resources ni los cuatro artículos traducidos.

Corrección: se añadió `scripts/generate-sitemap.mjs`, ejecutado después de `astro build`. Genera `dist/sitemap.xml` y actualiza el archivo fuente con las rutas reales del build, excluyendo 404 y redirecciones heredadas. El resultado actual contiene 30 URLs canónicas.

Riesgo: bajo. El sitemap mantiene el dominio de producción y no altera `noindex`.

### P2 — Validación automatizada heredada

El validador existente sigue deteniéndose en `#mobile-homes`, selector que ya no corresponde a la arquitectura actual de Manufactured & Mobile Homes. No se modificó la web para satisfacerlo ni se eliminaron pruebas. Requiere una tarea separada de mantenimiento del validador.

### P3 — Métricas de campo

No se midieron PageSpeed Insights, Search Console, CWV de campo, rankings ni conversiones. El proyecto permanece en prepublicación.

## Implementación controlada

Archivos modificados:

- `src/layouts/BaseLayout.astro`
- `src/components/ResourceArticle.astro`
- `package.json`
- `scripts/generate-sitemap.mjs`
- `public/sitemap.xml` (regenerado)
- `docs/launch/downtown-v2-seo-metadata-matrix-2026-11-11.md`
- `docs/launch/downtown-v2-complete-technical-seo-audit-2026-11-11.md`

No se modificaron URLs, slugs, copy editorial aprobado, navegación, servicios, legales, tracking, imágenes ni el dominio oficial.

## SEO internacional

- Cada página EN y ES usa su propio canonical absoluto en `https://downtownescrow.net`.
- Las páginas con pareja implementada emiten alternates EN, ES y x-default.
- Los cuatro artículos tienen `translationRef` recíproco y selector directo a su traducción.
- El build de preview conserva `/dowtown/` en recursos de preview sin contaminar los canonicals de producción.
- No se encontraron referencias a localhost en el HTML generado.

## Robots y sitemap

- `noindex, nofollow` continúa presente en las páginas de contenido.
- `robots.txt` permite rastreo futuro y apunta al sitemap de producción; no se usa como mecanismo de privacidad.
- El sitemap generado excluye `/404.html`, `/services/` y `/es/servicios/` porque son documentos de error o redirección.
- No se añadieron `lastmod` inventados.

## Schema y AEO/GEO

- Los artículos conservan Article JSON-LD con headline, description, URL canónica, idioma, publisher, imagen y solo las fechas/autores presentes.
- BreadcrumbList permanece en las páginas compartidas.
- No se añadió FAQPage, LocalBusiness adicional ni entidades no verificadas.
- Las respuestas directas, límites del papel de escrow y fuentes oficiales existentes se conservaron.

## On-page, arquitectura y enlaces

- El inventario contiene una fila por página en la [matriz SEO](./downtown-v2-seo-metadata-matrix-2026-11-11.md).
- No se detectaron títulos duplicados en el HTML generado.
- Todas las páginas de contenido tienen un H1.
- Resources EN/ES usa la misma plantilla y contiene dos artículos por idioma.
- Los artículos enlazan a su equivalente localizado y a Contact en el idioma correcto.
- Services heredado continúa como redirección HTML y no se reactivó el hub antiguo.

## Rendimiento y recursos

- Hero conserva carga eager y `fetchpriority="high"`.
- Imágenes secundarias mantienen lazy loading y dimensiones explícitas.
- Las fuentes Poppins siguen autoalojadas y precargadas.
- No se prometen resultados de Core Web Vitals sin medición de campo.

## Validación realizada

- `npm run build`: correcto, 31 páginas estáticas.
- Build con `GITHUB_PAGES_PREVIEW=true`: correcto, rutas `/dowtown/` y canonicals de preview verificadas.
- Sitemap generado: 30 URLs canónicas.
- Auditoría HTML: titles, descriptions, H1, canonical, robots, hreflang, x-default y Open Graph comprobados.
- Resources EN/ES y los cuatro artículos comprobados.
- Imágenes, favicon, fuentes y enlaces internos presentes.
- Capturas visuales EN/ES revisadas previamente en desktop, tablet y móvil.
- Validador general ejecutado; se detuvo en el selector obsoleto `#mobile-homes` en `scripts/validate-site.mjs:440`.

## Pendientes antes del lanzamiento

- Resolver el selector obsoleto del validador sin reducir su cobertura.
- Confirmar aprobación legal de Privacy Policy y Terms & Conditions.
- Revisar datos empresariales definitivos y cualquier discrepancia histórica de dirección fuera de este alcance.
- Retirar `noindex, nofollow` únicamente con autorización de lanzamiento.
- Ejecutar mediciones reales de CWV, Search Console, sitemap y resultados orgánicos después de publicar.

No se publicó ni se sincronizó GitHub Pages durante esta auditoría.
