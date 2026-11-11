# Corrección del preview GitHub Pages desactualizado — 2026-11-11

## Diagnóstico

La causa comprobada es una desincronización entre la fuente local y el clon utilizado para GitHub Pages. La fuente local ya contiene la eliminación del bloque promocional del Home y el CSS compacto de Why Downtown; el clon todavía contiene la versión anterior.

### Evidencia de diferencias

| Archivo | Fuente local | Clon Git |
|---|---|---|
| `src/components/HomePage.astro` | elimina import/render de `Resource` | conserva `{featureFlags.resources && <Resource ... />}` |
| `src/styles/global.css` | columna visual hasta 360 px, imagen auto/contain | marco grande, altura 410–540 px |
| `public/robots.txt` | hash distinto, sitemap actualizado | copia anterior |
| `public/sitemap.xml` | 30 URLs | copia anterior |
| `public/images/home/about.png` | igual | igual |
| `public/images/home/employer-escrow.jpeg` | igual | igual |
| `src/components/home/Hero.astro` | igual | igual |

La referencia del Hero aprobada (`employer-escrow.jpeg`) existe en ambas carpetas y el componente Hero la usa explícitamente. No se modificó el Hero.

## Git y workflow

- Clon: `C:\Users\LeonelCondoriMatias\OneDrive - Golden Waters Funding, Inc\Escritorio\PROYECTO\downtown_clone`.
- Rama: `main`.
- Remote: `https://github.com/imleonel-cm/dowtown.git`.
- HEAD local conocido y `origin/main`: `544720f` (`Document GitHub Pages visual preview deployment`).
- `git fetch origin` no pudo actualizar `.git/FETCH_HEAD` por `Permission denied` en OneDrive.
- Workflow: `.github/workflows/deploy.yml`, dispara en `main`, usa `actions/checkout@v7`, `withastro/action@v6`, `GITHUB_PAGES_PREVIEW=true` y `actions/deploy-pages@v5`.

No se pudo demostrar desde este entorno el SHA del último artefacto de GitHub Actions ni inspeccionar el HTML público: las conexiones a GitHub/GitHub Pages fallaron durante esta sesión. No se atribuyó el problema a caché sin esa evidencia.

## Build

Se intentó un build limpio desde una copia temporal actualizada fuera de OneDrive. Producción y `GITHUB_PAGES_PREVIEW=true` fallan durante `astro sync` con:

```text
GenerateContentTypesError
require is not defined
at @astrojs/internal-helpers/node_modules/yaml/dist/index.js
```

La corrección temporal de dependencias y varias opciones Vite no resolvieron el error; no se modificaron dependencias ni configuración principal. Conforme al brief, no se copió al clon, no se creó commit y no se hizo push con un build fallido.

## Estado de sincronización

- Archivos corregidos en el clon: ninguno.
- Commit nuevo: ninguno.
- Push: no ejecutado.
- GitHub Actions: no iniciado.
- Preview: permanece en la versión desplegada previamente.
- Dominio `downtownescrow.net`: sin cambios.

## Corrección pendiente

Resolver primero la incompatibilidad del entorno/dependencias Astro 7.4.2 + Vite 8 + módulo CommonJS de `yaml` durante `astro sync`. Después se debe:

1. Copiar al clon solo los archivos legítimos de la fuente, excluyendo dependencias, `dist`, cachés, logs y documentos sensibles.
2. Ejecutar build de producción y preview.
3. Comprobar HTML EN/ES sin `Before closing day`, CSS compacto, Hero, Resources, robots, sitemap, canonical, hreflang y noindex.
4. Revisar `git diff`, crear commit normal y hacer push a `main`.
5. Confirmar GitHub Actions, SHA desplegado y HTML público antes de declarar resuelto el preview.

No se presentan como verificadas las pruebas visuales públicas porque no pudieron ejecutarse.
