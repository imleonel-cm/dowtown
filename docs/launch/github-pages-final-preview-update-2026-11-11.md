# Actualización final del preview GitHub Pages — 2026-11-11

## Resultado

La actualización **no se publicó** porque el build reproducible del proyecto local sigue fallando antes de generar `dist`. La regla del brief impide hacer push cuando el build actual falla. No se utilizó `force push`, no se modificó el dominio oficial y no se alteró GitHub Pages.

## Auditoría Git

- Fuente de verdad: `C:\Users\LeonelCondoriMatias\OneDrive - Golden Waters Funding, Inc\Escritorio\downtown_v2`.
- Clon: `C:\Users\LeonelCondoriMatias\OneDrive - Golden Waters Funding, Inc\Escritorio\PROYECTO\downtown_clone`.
- Rama del clon: `main`.
- Remote: `https://github.com/imleonel-cm/dowtown.git`.
- HEAD local/remoto conocido: `544720f Document GitHub Pages visual preview deployment`.
- `git fetch origin` no pudo actualizar `.git/FETCH_HEAD` por `Permission denied` en OneDrive; no se sobrescribió el historial.
- El clon contiene workflow `.github/workflows/deploy.yml`; la fuente principal no tiene `.github`.

La fuente y el clon difieren en los cambios recientes de Home, CSS, documentación y sitemap. No se copió nada al clon ni se creó commit porque el build no está aprobado.

## Cambios locales preparados

La fuente local contiene:

- Home EN/ES sin el bloque `Before closing day.` / `Antes del día del cierre`.
- `Why Downtown` con `about.png` reducido, centrado, proporcional y con `object-fit: contain`.
- Resources, artículos, traducciones, branding y favicon conservados.
- Open Graph, Twitter cards, robots y sitemap presentes.
- `noindex, nofollow` conservado.

## Build

Se ejecutó `npm run build` desde el proyecto y desde una copia temporal fuera de OneDrive. También se probó con `GITHUB_PAGES_PREVIEW=true`.

Todos fallan en `astro sync` con:

```text
GenerateContentTypesError
require is not defined
at @astrojs/internal-helpers/node_modules/yaml/dist/index.js
```

La sustitución temporal de `yaml` y ajustes temporales de resolución Vite no eliminaron el fallo. No se modificaron dependencias ni configuración del proyecto principal para ocultarlo.

## Push y GitHub Actions

- Commit nuevo: no creado.
- Push: no ejecutado.
- GitHub Actions: no iniciado.
- Preview público: no actualizado en esta tarea.

## Validación pendiente

Antes de sincronizar se debe resolver el bloqueo Astro/Vite/YAML y repetir:

1. Build de producción.
2. Build con `GITHUB_PAGES_PREVIEW=true` y base `/dowtown/`.
3. Validación de Home EN/ES, Resources, artículos, servicios, legales, assets, canonical, hreflang, Open Graph, robots y sitemap.
4. Revisión visual en `https://imleonel-cm.github.io/dowtown/`.
5. Commit, push y supervisión de GitHub Actions.

No se afirma que el preview esté actualizado.
