# Validación final de robots.txt y sitemap.xml — 2026-11-11

## Alcance

Se revisaron únicamente `robots.txt`, `sitemap.xml`, `scripts/generate-sitemap.mjs` y su integración declarada en `npm run build`. No se modificaron rutas, contenido editorial, diseño, DNS, publicación ni la directiva `noindex, nofollow`.

## Estado encontrado

### robots.txt

El archivo fuente y la copia disponible en `dist/robots.txt` contienen UTF-8 sin BOM y exactamente:

```text
User-agent: *
Allow: /

Sitemap: https://downtownescrow.net/sitemap.xml
```

La sintaxis no contiene `Disallow`, reglas contradictorias ni `noindex`. No bloquea CSS, JavaScript, fuentes o imágenes. La URL del sitemap es la del dominio de producción; no se usa GitHub Pages.

### Sitemap

`public/sitemap.xml` y el `dist/sitemap.xml` disponible son XML válido con el namespace `http://www.sitemaps.org/schemas/sitemap/0.9`. Contienen 30 URLs únicas, absolutas y con trailing slash, todas bajo `https://downtownescrow.net`.

Las 30 URLs coinciden con páginas HTML indexables del build disponible. Se comprobó que no incluyen localhost, GitHub Pages, `/dowtown/`, fragmentos, parámetros, 404 ni las dos redirecciones heredadas (`/services/` y `/es/servicios/`). La página 404 tampoco aparece.

El inventario actual incluye Home EN/ES, About/Nosotros, Contact/Contacto, Privacy/Política, Terms/Términos, Resources/Recursos, cuatro artículos bilingües y siete especialidades bilingües (30 URLs). No se excluyeron páginas legales ni Resources sin razón: son rutas reales y forman parte de la arquitectura actual.

## Generador e integración

`scripts/generate-sitemap.mjs` detecta recursivamente los `index.html` del directorio `dist`, normaliza rutas con trailing slash, excluye `/404`, `/services` y `/es/servicios`, y escribe tanto `dist/sitemap.xml` como `public/sitemap.xml` usando siempre el origen de producción. No inventa `lastmod` ni alternates.

`package.json` integra el generador en `npm run build` después de `astro build`:

```text
astro build && node scripts/generate-sitemap.mjs && node scripts/patch-preview-base.mjs
```

La elegibilidad de drafts y fechas futuras se decide antes, en `getStaticPaths` de los artículos (`!entry.data.draft` y `pubDate <= new Date()`). Por tanto, el generador solo recibe HTML que Astro haya generado. Los cuatro artículos actuales tienen `draft: false` y fechas no futuras.

## Pruebas ejecutadas

### Build reproducible

- `npm run build` desde el proyecto y desde una copia temporal OneDrive-safe: **bloqueado** antes de generar páginas.
- Error real: `GenerateContentTypesError`; causa `require is not defined` al cargar `yaml/dist/index.js` desde el module runner de Vite durante `astro sync`.
- No se alteró `astro.config.mjs`, `content.config.ts` ni componentes para ocultar el error. El `dist` inspeccionado corresponde al último build disponible anterior a esta validación y no se presenta como un build recién generado.
- `GITHUB_PAGES_PREVIEW=true npm run build`: reproduce el mismo bloqueo; no se pudo certificar un nuevo artefacto de preview.

### XML, rutas y noindex sobre el artefacto disponible

- Sitemap XML: válido por parseo, 30 URLs, sin duplicados ni dominios no permitidos.
- Cada una de las 30 URLs apunta a un `index.html` existente en `dist`.
- 30 páginas reales comprobadas con canonical `https://downtownescrow.net/...` y `noindex, nofollow`.
- Las dos páginas de redirección heredadas y `404` quedaron fuera del sitemap.
- Canonical y hreflang EN/ES del HTML disponible mantienen equivalencias recíprocas; el sitemap no contiene alternates paralelos.

### HTTP local

Se sirvió el `dist` disponible mediante HTTP en `127.0.0.1:9343` (no `file://`):

| Recurso | HTTP | Content-Type |
|---|---:|---|
| `/robots.txt` | 200 | `text/plain; charset=utf-8` |
| `/sitemap.xml` | 200 | `application/xml; charset=utf-8` |
| `/` | 200 | `text/html; charset=utf-8` |
| `/es/` | 200 | `text/html; charset=utf-8` |

También existe una instancia previa en `9342`, pero la evidencia con Content-Type explícito se obtuvo en `9343`.

### Fixture temporal del generador

El fixture confirmó que agregar un `index.html` al `dist` lo incorpora y eliminarlo lo retira en el siguiente `node scripts/generate-sitemap.mjs`. Drafts y fechas futuras no se representan como HTML porque el filtro vive en `getStaticPaths`; el generador no puede inferir frontmatter desde un HTML ya generado. Esta separación es intencional y no se modificó.

Una ejecución directa del generador contra el `dist` dentro de OneDrive volvió a encontrar `EPERM` al reemplazar `dist/sitemap.xml`, una limitación de los puntos de reparse/caché de OneDrive ya documentada. El fixture fuera de OneDrive permitió comprobar la lógica sin tocar el proyecto.

## Preview GitHub Pages

`astro.config.mjs` mantiene el dominio oficial para producción y activa `base: '/dowtown/'` solo cuando `GITHUB_PAGES_PREVIEW=true`. El generador usa deliberadamente `https://downtownescrow.net` incluso en ese modo. No se ejecutó publicación ni se envió el sitemap a buscadores. Debido al error de `astro sync`, no se pudo generar un nuevo build de preview en esta ronda.

No hay workflow `.github/workflows/deploy.yml` en esta carpeta principal; no se hizo ninguna afirmación sobre GitHub Actions.

## Conclusión y pendientes

`robots.txt` y el sitemap disponible cumplen el alcance funcional y apuntan al dominio correcto. La validación final de un nuevo build queda **pendiente** de resolver el error de entorno/dependencias de Astro/Vite (`require is not defined` con `yaml`). Antes de publicar, debe repetirse el build de producción y el build de preview, validar nuevamente los recursos generados y confirmar que el sitemap recién generado conserva las 30 rutas actuales (o documenta cualquier alta/baja real).

El sitemap está preparado para una futura indexación, pero todas las páginas siguen excluidas mediante `noindex, nofollow`. Retirar esa directiva requiere autorización separada.
