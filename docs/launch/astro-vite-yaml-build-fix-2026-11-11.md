# Reparación del build Astro/Vite/YAML — 2026-11-11

## Diagnóstico

El proyecto usaba Astro `7.4.2`, que resolvía `@astrojs/internal-helpers 0.13.0`, Vite `8.3.5` y YAML `2.9.1`. Una instalación limpia reproducía el fallo durante `astro sync`:

```text
GenerateContentTypesError
ReferenceError: require is not defined
at @astrojs/internal-helpers/node_modules/yaml/dist/index.js
```

No era contenido inválido ni una colección dañada: el error aparecía antes de generar tipos y se reproducía fuera de OneDrive. Cambiar aliases Vite, `ssr.external`, `ssr.noExternal`, condiciones de resolución o solo YAML no resolvió la causa.

## Corrección mínima

Se actualizó únicamente Astro al parche compatible `7.4.11` y se regeneró el lockfile. Esa versión usa `@astrojs/internal-helpers 0.13.2` y Vite `8.3.8`, eliminando el fallo del module runner.

Archivos modificados:

- `package.json` — Astro `7.4.2` → `7.4.11`.
- `package-lock.json` — árbol reproducible actualizado.
- `docs/launch/astro-vite-yaml-build-fix-2026-11-11.md`.

Se conservó un respaldo temporal del lockfile anterior fuera del proyecto. No se modificaron componentes, contenido, URLs, diseño, SEO ni el clon Git.

## Versiones verificadas

- Node local: `v24.16.0`.
- npm local: `11.13.0`.
- Astro: `7.4.11`.
- Vite: `8.3.8`.
- `@astrojs/internal-helpers`: `0.13.2`.
- YAML: `2.9.1`.
- Workflow: `withastro/action@v6`, con `GITHUB_PAGES_PREVIEW=true`; no se modificó.

## Validación reproducible

En una copia temporal íntegra fuera de OneDrive se ejecutó `npm ci --ignore-scripts` usando el lockfile actualizado:

- Instalación limpia: correcta, 185 paquetes, 0 vulnerabilidades.
- `npm run build`: correcto.
- Salida: 31 páginas estáticas.
- Sitemap: 30 URLs.
- Content Collections: sincronizadas y tipos generados.
- Sin `require is not defined` ni errores nuevos de dependencias.

Con `GITHUB_PAGES_PREVIEW=true`:

- Build correcto.
- 31 páginas estáticas.
- Sitemap de 30 URLs.
- Base `/dowtown/` aplicada a assets y enlaces internos.
- Canonicals/OG del preview mantienen la configuración de preview prevista por `astro.config.mjs`; la producción sigue usando `https://downtownescrow.net` cuando la variable no está activa.

## Regresión de contenido y SEO

Sobre el artefacto de preview recién generado se verificó:

- Home EN y ES sin `Before closing day.` ni su equivalente.
- `about.png` presente y referenciada en Why Downtown.
- `employer-escrow.jpeg` presente y referenciada por Hero.
- Resources/Recursos y los artículos EN/ES generados.
- 7 especialidades bilingües generadas.
- Logo, favicon y fuentes generados.
- `noindex, nofollow` presente en Home EN/ES.
- robots y sitemap generados; 30 URLs, sin 404 ni redirecciones heredadas.
- Home, ES, Resources, Recursos, robots, sitemap y CSS respondieron HTTP 200 mediante servidor local del artefacto preview.

## Limitaciones

- El build directo dentro de OneDrive continúa pudiendo fallar al reemplazar `.astro`/`dist` por `EPERM`; no es un fallo del proyecto. La validación reproducible se realizó desde copia limpia fuera de OneDrive.
- El validador Playwright existente no pudo iniciar Chrome por permisos del entorno (`Chrome DevTools endpoint did not become available`). No se modificó el validador ni se declaró QA visual de navegador como aprobado.
- El selector histórico `#mobile-homes` pertenece a una prueba obsoleta y se mantuvo separado del problema de compilación.
- No se hizo commit, push ni publicación. El clon Git permanece sin sincronizar hasta una validación posterior autorizada.
