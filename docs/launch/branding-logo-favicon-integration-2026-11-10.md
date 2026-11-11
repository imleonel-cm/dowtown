# Integración de logo y favicon — Downtown V2

**Fecha:** 2026-11-10  
**Estado:** integrada localmente; no publicada ni sincronizada.

## Carpeta principal

La carpeta definitiva es `C:\\Users\\LeonelCondoriMatias\\OneDrive - Golden Waters Funding, Inc\\Escritorio\\downtown_v2`. La carpeta anterior `PROYECTO\\downtown_v2\\downtown_v2` se conserva intacta como respaldo histórico y fuente de comparación. Se creó un respaldo verificable antes de consolidar los archivos.

## Branding

- `public/branding/downtown-logo.png` — variante para Header y Footer sobre fondos claros.
- `public/branding/downtown-logo-white.png` — variante disponible para fondos oscuros existentes.
- `public/favicon.png` — favicon oficial usado por `BaseLayout.astro` y `404.astro`.

Los originales encontrados en `public/images/branding/` se conservaron. El favicon se encontró en `Escritorio\\recursos` y se copió sin modificar.

## Archivos modificados

- `src/components/Wordmark.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/404.astro`
- `src/styles/global.css`
- Esta documentación.

El wordmark conserva el enlace al Home, dimensiones explícitas, proporción, alt descriptivo y soporte para variante inversa. Las rutas `/branding/` y `/favicon.png` son compatibles con el mecanismo de base `/dowtown/` del preview.

## Validación

- La copia consolidada compila correctamente: 27 páginas estáticas.
- Preview con `GITHUB_PAGES_PREVIEW=true`: logo, favicon y recursos se generan con prefijo `/dowtown/`.
- `dist/branding/downtown-logo.png` y `dist/favicon.png` existen.
- Home conserva `noindex, nofollow`.
- La carpeta nueva no contiene `.git`; la conexión Git existente permanece en el clon separado `PROYECTO\downtown_clone`, remoto `https://github.com/imleonel-cm/dowtown.git`. No se hizo push ni publicación.
- No se ejecutó QA visual Playwright en esta fase; la limitación de Chrome DevTools ya documentada permanece.
