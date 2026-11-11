# Home — limpieza visual final EN/ES — 2026-11-11

## Alcance

Se implementaron únicamente las dos correcciones autorizadas del Home bilingüe:

1. Se retiró del render del Home el bloque promocional `Before closing day.` / `Antes del día del cierre.`.
2. Se compactó la presentación de `public/images/home/about.png` dentro de `Why Downtown` / `Por qué Downtown`, tratándola como icono de marca y no como fotografía.

No se modificaron Resources, los artículos, Header, Footer, About, Contact, Hero, Services, CTA final, páginas legales, URLs, branding global o favicon.

## Archivos modificados

- `src/components/HomePage.astro`
  - Eliminado el import y render del componente promocional `Resource`.
  - Resources y sus artículos permanecen en sus rutas y en la navegación global.
- `src/styles/global.css`
  - `Why Downtown` usa una columna visual compacta de hasta 360 px en desktop.
  - La imagen mantiene proporción 198/197, `object-fit: contain`, altura automática y centrado.
  - En móvil la columna visual queda limitada a 290 px.
- `docs/content/home-final-visual-cleanup-2026-11-11.md`

El componente `src/components/home/Resource.astro`, los datos de `resource` y las plantillas de Resources no se eliminaron porque siguen siendo necesarios para el contenido de Resources fuera del Home.

## Resultado esperado EN/ES

- `/` y `/es/` ya no renderizan el bloque `Before closing day.` ni su equivalente español.
- El enlace `Resources` / `Recursos` continúa en Header y Footer.
- `/resources/`, `/es/recursos/` y los cuatro artículos bilingües permanecen intactos.
- `Why Downtown` conserva H2, descripción, dirección, señales de confianza, CTA y textos aprobados.
- `about.png` se muestra completo, centrado y sin recorte ni distorsión.

## SEO y funcionalidad

No se modificaron títulos, descriptions, H1, canonical, hreflang, x-default, Open Graph, Twitter Cards, schema, sitemap, robots, tracking, URLs ni `noindex, nofollow`. La eliminación solo afecta al bloque visual del Home; no se eliminaron rutas ni enlaces globales de Resources.

## Validación ejecutada

- Inspección estática: HomePage ya no importa ni renderiza `Resource`; Header/Footer y navegación conservan Resources/Recursos.
- Imagen: `public/images/home/about.png` existe y mide 198 × 197 px; el CSS usa `object-fit: contain`, proporción fija y límites responsive.
- Build Astro de producción: **bloqueado por el entorno**, antes de generar páginas. Error reproducido en el proyecto y en copia temporal:

  ```text
  GenerateContentTypesError
  require is not defined
  at yaml/dist/index.js durante astro sync
  ```

- Build GitHub Pages (`GITHUB_PAGES_PREVIEW=true`): reproduce el mismo error. No se publicó ni se sincronizó GitHub.
- Validador Playwright y capturas nuevas: pendientes porque no existe un build actualizado verificable. No se declara QA visual aprobado.

## Pendiente para cerrar técnicamente

Resolver el error de dependencias/compatibilidad Astro-Vite-YAML del entorno o ejecutar el proyecto con el runtime/dependencias previamente validados. Después debe repetirse `npm run build`, el build preview, la matriz responsive 1440/1920/768/390/320, comprobación EN/ES, ausencia del bloque, transición hacia CTA, Resources, metadatos y capturas.

No se modificaron archivos de GitHub ni se realizó publicación.
