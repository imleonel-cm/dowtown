# Integración de imágenes y mejora visual de Resources (2026-11-11)

## Alcance

Implementación local únicamente. No se modificó GitHub Pages ni el dominio de producción.

## Imágenes verificadas

- `public/images/home/employer-escrow.jpeg` — JPEG, 1200 × 1200 px, 157,498 bytes. Se usa en el Hero EN/ES con carga prioritaria, dimensiones explícitas y `object-fit: cover` mediante los estilos existentes.
- `public/images/home/about.png` — PNG, 198 × 197 px, 35,575 bytes. Se usa en Why Downtown EN/ES con `object-fit: contain` para conservar el logotipo sin deformarlo.
- `public/images/resources/Your Loan.png` — PNG, 1672 × 941 px, 1,891,367 bytes. Se asigna exclusivamente al artículo `What Happens After Your Loan Is Clear to Close?` y se muestra en Resources destacado y en la página individual.

Se conservaron los archivos originales. No se generaron duplicados ni imágenes nuevas.

## Archivos modificados

- `src/components/home/Hero.astro`
  - Sustituye la imagen residencial anterior por `employer-escrow.jpeg`.
  - Mantiene composición, superposición, caption, documento, CTAs y responsive.
- `src/components/home/Office.astro`
  - Sustituye la fotografía anterior por `about.png`.
  - Mantiene marcos, dirección, señales de confianza y enlace About/Nosotros.
- `src/data/site.ts`
  - Actualiza ALT y captions EN/ES para describir las imágenes reales sin afirmar que sean la oficina.
- `src/content/resources/what-happens-after-clear-to-close.md`
  - Añade `featuredImage` y ALT descriptivo para `Your Loan.png`.
- `src/components/ResourcesPage.astro`
  - Añade variante explícita para tarjetas sin imagen.
  - Usa grid `auto-fit` para que una tarjeta ocupe un ancho cómodo y dos tarjetas se equilibren.
  - Limita visualmente extractos a tres líneas y alinea el enlace inferior.
- `src/styles/global.css`
  - Ajusta proporciones, padding y altura mínima de tarjetas.
  - Conserva una variante compacta para tarjetas sin imagen en desktop y mobile.
  - Mantiene `object-fit` y dimensiones responsivas sin overflow.
- `docs/content/home-resources-images-visual-v2-2026-11-11.md`

No se modificaron textos editoriales de los artículos, slugs, metadatos SEO, schema, navegación, servicios, legales, tracking ni selector EN/ES.

## Verificación visual

Se sirvió el build estático por HTTP local en `127.0.0.1:4326` y se capturaron:

- `artifacts/screenshots/images-home-en-1440.png`
- `artifacts/screenshots/images-home-es-390.png`
- `artifacts/screenshots/images-resources-en-1440.png`
- `artifacts/screenshots/images-resources-en-390.png`
- `artifacts/screenshots/images-resources-es-390.png`

La revisión confirmó:

- Hero EN/ES con `employer-escrow.jpeg`.
- Why Downtown EN/ES con `about.png`.
- Clear to Close destacado con `Your Loan.png`.
- Tarjeta More Resources compacta y de ancho completo cuando no tiene imagen.
- Resources ES mantiene estado vacío sin mostrar artículos ingleses.
- Sin desbordamiento visual en las capturas desktop/mobile.

## Validación técnica

- `npm run build`: correcto, 29 páginas estáticas.
- Home EN/ES y Resources EN/ES generados correctamente. El artículo con `Your Loan.png` existe en inglés; Resources ES conserva deliberadamente el estado vacío porque no hay artículos en español publicados en la colección actual.
- `noindex, nofollow` conservado.
- ALT presentes en las tres integraciones.
- Rutas locales de imágenes comprobadas en `dist/images/home/` y `dist/images/resources/`.
- Imagen del Hero conserva `loading="eager"` y `fetchpriority="high"`; imágenes fuera del viewport mantienen lazy loading cuando corresponde.
- El validador existente se ejecutó sin modificarlo, pero falló por una expectativa antigua de navegación (`#mobile-homes`) que ya no existe en la arquitectura actual. El fallo no ocurrió durante la compilación ni en la carga de imágenes; queda documentado como limitación del validador.
- No se ejecutó una publicación ni sincronización con GitHub.

## Sincronización del preview

- Rama: `main`.
- Commit de la actualización visual: `377d424` (`Update Home and Resources imagery and card layouts`).
- Workflow: [GitHub Actions run 43066433371](https://github.com/imleonel-cm/dowtown/actions/runs/43066433371), completado correctamente.
- Preview: `https://imleonel-cm.github.io/dowtown/`.
- Verificación pública HTTP 200: Home EN/ES, Resources EN/ES, los dos artículos EN y los tres assets nuevos.
- Captura pública: `artifacts/screenshots/github-pages-preview-1440.png`.
- El dominio `https://downtownescrow.net` no fue modificado.
- No se sincronizaron `node_modules`, `dist`, `.astro`, logs, temporales, credenciales ni archivos `.env`.

## Pendientes

- Confirmar si `employer-escrow.jpeg` debe conservar el texto incrustado visible en el Hero o si se requiere una versión editorial sin texto.
- Si se desea reducir peso de `Your Loan.png`, generar una versión optimizada aprobada sin sustituir el original.
- Actualizar el validador en una tarea separada para reflejar la arquitectura actual de Services y Resources; no se alteró en esta implementación.
