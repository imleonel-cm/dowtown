# Resources: migración de los dos artículos originales (2026-11-10)

## Resultado

La migración local quedó completada para los dos artículos originales identificados en la biblioteca de Resources. No se publicaron cambios ni se sincronizó GitHub.

Artículos incorporados en inglés:

1. **What Happens After Your Loan Is Clear to Close?**
   - Ruta: `/resources/what-happens-after-clear-to-close/`
   - Categoría: `Escrow Process`
   - Orden editorial: 2 (featured, más reciente)
2. **What Can Delay an Escrow Closing? 3 Issues That Can Slow Things Down**
   - Ruta: `/resources/what-can-delay-an-escrow-closing/`
   - Categoría: `Escrow Closing`
   - Orden editorial: 1

No se creó una traducción española: no existe una versión española original verificada. El índice `/es/recursos/` continúa disponible y no muestra contenido inglés como si fuera español.

## Evidencia utilizada

La página pública `https://downtownescrow.net/resources/` no pudo consultarse directamente desde el entorno de herramientas en esta sesión. El contenido completo sí estaba disponible en artefactos locales de migraciones anteriores:

- `blog1-source.json`, que conserva los párrafos del artículo sobre retrasos de cierre.
- `downtown-web-preview/dist/resources/what-can-delay-an-escrow-closing/index.html`, versión HTML validada del primer artículo.
- `implement_article2.py`, que contiene el cuerpo completo, metadatos y fuentes del artículo “Clear to Close”.
- `articles.json`, que conserva títulos, slugs, descripciones, categorías y orden editorial de ambos artículos.

No se inventaron fechas, autores, credenciales, resultados, imágenes ni traducciones. Como las fuentes disponibles no aportan una fecha ni autor verificables, esos campos se omiten.

## Archivos modificados

- `src/content.config.ts`
  - Se conectó el loader `glob` de Astro 7 para `src/content/resources/`.
  - `pubDate` quedó opcional para no inventar fechas.
  - Se añadió `editorialOrder` para conservar el orden de la biblioteca documentado en `articles.json`.
- `src/content/resources/what-can-delay-an-escrow-closing.md`
- `src/content/resources/what-happens-after-clear-to-close.md`
- `src/components/ResourcesPage.astro`
  - Ordena por `editorialOrder` y usa la fecha solo cuando existe.
  - Mantiene featured + recursos anteriores y el estado vacío para español.
- `src/components/ResourceArticle.astro`
  - Fecha y autor opcionales.
  - Añade JSON-LD `Article` únicamente con datos verificables.
  - No genera hreflang de artículo cuando no existe traducción equivalente.
- `src/layouts/BaseLayout.astro`
  - Añade un slot de head para el JSON-LD del artículo.
- `src/pages/resources/[...slug].astro`
- `src/pages/es/recursos/[...slug].astro`
  - Cada ruta solo genera entradas del idioma correspondiente.

No se modificaron Home, About, Contact, Services, especialidades, legal, Header, Footer, branding, tracking ni URLs existentes.

## SEO, AEO y GEO

- Cada artículo tiene title, meta description, URL limpia, canonical a `https://downtownescrow.net/...` y un único H1.
- Se conserva `noindex, nofollow` durante la fase de preview.
- Breadcrumbs visibles y `BreadcrumbList` permanecen presentes.
- JSON-LD `Article` usa el nombre empresarial verificado y no añade autor, fecha o imagen inexistentes.
- El contenido responde directamente a la intención informativa: definición de “clear to close”, causas habituales de demora, responsabilidades de escrow y preguntas prácticas antes del cierre.
- Los enlaces externos apuntan a CFPB y California DRE en el artículo correspondiente; los enlaces internos conectan ambos artículos y Contact.
- No se declara cobertura nacional, experiencia cuantificada ni capacidades no confirmadas.

## Validación ejecutada

- `npm run build`: **correcto**, 29 páginas estáticas generadas.
- Se generaron y comprobaron las dos páginas EN:
  - `dist/resources/what-can-delay-an-escrow-closing/index.html`
  - `dist/resources/what-happens-after-clear-to-close/index.html`
- Índices comprobados:
  - `dist/resources/index.html`
  - `dist/es/recursos/index.html`
- Cada página comprobada tiene un H1, title, description, canonical y `noindex, nofollow`.
- Las páginas de artículos no generan hreflang EN/ES engañoso; el selector dirige al índice español porque todavía no existe traducción.
- El build mantuvo las páginas y rutas existentes del proyecto.

## Pendientes reales

- Confirmar desde la fuente pública si existen fechas, autoría, imágenes editoriales o una traducción española oficial.
- Revisar visualmente los artículos con Playwright cuando el navegador local esté disponible; en esta ejecución no se realizó una ronda Playwright nueva.
- Mantener la migración en preview hasta aprobar contenido y legalidad; no se publicó ni se activó indexación.

## Sincronización GitHub Pages

- Rama: `main`
- Commit desplegado: `bc3f127` (`Add original Downtown escrow articles to Resources`)
- Workflow: `Deploy Downtown Preview`, ejecución `42883614232`, terminó correctamente.
- Preview: https://imleonel-cm.github.io/dowtown/resources/
- Artículo destacado: https://imleonel-cm.github.io/dowtown/resources/what-happens-after-clear-to-close/
- More Resources: https://imleonel-cm.github.io/dowtown/resources/what-can-delay-an-escrow-closing/
- Índice español: https://imleonel-cm.github.io/dowtown/es/recursos/ (sin traducciones inglesas ficticias).

Validación pública: las cuatro URLs respondieron HTTP 200; CSS, fuentes Poppins, logo y favicon respondieron HTTP 200. El orden destacado → segundo artículo, JSON-LD Article, breadcrumbs, enlaces a Contact y `noindex, nofollow` fueron comprobados en HTML desplegado. No se modificó `downtownescrow.net`.
