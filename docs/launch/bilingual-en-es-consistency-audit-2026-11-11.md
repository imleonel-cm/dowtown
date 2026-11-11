# Auditoría de consistencia bilingüe EN/ES (2026-11-11)

## Alcance y causa comprobada

Auditoría local de la fuente de verdad `downtown_v2`. El problema de Resources no era una plantilla antigua: la colección solo contenía dos entradas `language: en`, por lo que `/es/recursos/` mostraba correctamente el estado vacío y los artículos ingleses no tenían traducción equivalente. Además, las entradas inglesas no tenían `translationRef`, así que el selector no podía resolver un artículo específico.

No se sincronizó GitHub Pages ni se publicó el dominio comercial.

## Matriz de equivalencias

| Página | EN | ES | Componente / estado | Selector y SEO |
|---|---|---|---|---|
| Home | `/` | `/es/` | `HomePage`; implementado | `routeMap.home`; canonical propio, hreflang recíproco, x-default EN |
| About | `/about/` | `/es/nosotros/` | `AboutPage`; implementado | `routeMap.about`; par equivalente |
| Contact | `/contact/` | `/es/contacto/` | `ContactPage`; implementado | `routeMap.contact`; par equivalente |
| Residential | `/services/residential-escrow/` | `/es/servicios/escrow-residencial/` | `ResidentialPage`; implementado | `routeMap.residential`; par equivalente |
| Commercial | `/services/commercial-escrow/` | `/es/servicios/escrow-comercial/` | `CommercialPage`; implementado | `routeMap.commercial`; par equivalente |
| Probate | `/services/probate-escrow/` | `/es/servicios/escrow-probate/` | `ProbatePage`; implementado | `routeMap.probate`; par equivalente |
| Manufactured & Mobile Homes | `/services/manufactured-home-escrow/` | `/es/servicios/escrow-casas-manufacturadas/` | `ManufacturedHomesPage`; implementado | `routeMap.manufacturedHomes`; par equivalente |
| Short Sale | `/services/short-sale-escrow/` | `/es/servicios/escrow-short-sale/` | `ShortSalePage`; implementado | `routeMap.shortSale`; par equivalente |
| Reverse Mortgage | `/services/reverse-mortgage-escrow/` | `/es/servicios/escrow-hipoteca-inversa/` | `ReverseMortgagePage`; implementado | `routeMap.reverseMortgage`; par equivalente |
| Wholesale | `/services/wholesale-escrow/` | `/es/servicios/escrow-wholesale/` | `WholesalePage`; implementado | `routeMap.wholesale`; par equivalente |
| Resources | `/resources/` | `/es/recursos/` | `ResourcesPage`; mismo componente, dos artículos por idioma | `routeMap.resources`; canonical propio y hreflang |
| Clear to Close | `/resources/what-happens-after-clear-to-close/` | `/es/recursos/que-sucede-despues-de-clear-to-close/` | `ResourceArticle`; traducción incorporada | `translationRef` recíproco, canonical propio, Article JSON-LD |
| Delay Closing | `/resources/what-can-delay-an-escrow-closing/` | `/es/recursos/que-puede-retrasar-el-cierre-de-un-escrow/` | `ResourceArticle`; traducción incorporada | `translationRef` recíproco, canonical propio, Article JSON-LD |
| Privacy Policy | `/privacy-policy/` | `/es/politica-de-privacidad/` | `LegalPage`; borrador legal | `routeMap.privacyPolicy`; par equivalente |
| Terms & Conditions | `/terms-and-conditions/` | `/es/terminos-y-condiciones/` | `LegalPage`; borrador legal | `routeMap.terms`; par equivalente |
| Services legacy | `/services/` | `/es/servicios/` | Redirección HTML heredada al Home; no es hub renderizado | No describir como 301; no se reactivó el hub |
| Agents & Lenders | documentado, oculto | documentado, oculto | Sin ruta renderizada | No se creó enlace ficticio |
| 404 | `/404.html` | fallback EN | Página de error | No se presenta como par indexable |

## Cambios editoriales

- Se añadieron traducciones completas y naturales de los dos artículos publicados.
- Se conservaron estructura, fuentes, enlaces, intención, imágenes, límites de escrow y contenido sustancial de los originales.
- No se inventaron autores, fechas, estadísticas, credenciales ni requisitos.
- Las imágenes se reutilizan: `Your Loan.png` para Clear to Close y `delay-closing.png` para Delay Closing.

## Cambios técnicos

- Se añadió `translationRef` recíproco a las dos entradas inglesas.
- Se crearon dos entradas españolas en la misma colección Astro:
  - `que-sucede-despues-de-clear-to-close.md`
  - `que-puede-retrasar-el-cierre-de-un-escrow.md`
- `ResourceArticle.astro` ya utiliza `translationRef` para construir selector, canonical, hreflang y x-default; no requirió cambios.
- `ResourcesPage.astro` continúa siendo la plantilla compartida EN/ES.
- Las rutas de preview mantienen la base `/dowtown/` en el build específico de GitHub Pages.

## SEO, AEO y GEO

- Cada artículo tiene title, description, H1, breadcrumb y Article JSON-LD en su idioma.
- Los canonicals apuntan a la URL propia del idioma.
- EN y ES enlazan recíprocamente mediante `hreflang` y el selector EN | ES.
- `x-default` conserva la URL inglesa.
- `noindex, nofollow` permanece activo.
- Los artículos mantienen respuestas directas, fuentes oficiales y límites claros sobre el papel de escrow.

## Validación realizada

- Build producción: correcto, 31 páginas estáticas.
- Build preview con `GITHUB_PAGES_PREVIEW=true`: correcto, 31 páginas y referencias `/dowtown/`.
- Resources EN/ES generados con dos tarjetas/artículos y el mismo layout.
- Las cuatro rutas individuales de artículos generadas.
- Canonical, hreflang recíproco, x-default, H1 único, breadcrumbs, Article JSON-LD y noindex comprobados en los cuatro artículos.
- Imágenes `Your Loan.png` y `delay-closing.png` presentes en EN y ES.
- Capturas visuales revisadas en Resources ES desktop y Delay Closing ES móvil.
- El validador general recorrió la matriz responsive existente, pero se detuvo en el selector heredado `#mobile-homes` de Services, que ya no existe en la arquitectura actual. No se debilitó ni se reescribió esa prueba.

## Pendientes y limitaciones

- La incidencia del validador `#mobile-homes` debe resolverse en una tarea separada de mantenimiento de pruebas.
- Las páginas legales continúan siendo borradores pendientes de aprobación jurídica.
- No se midieron rankings, tráfico ni rendimiento orgánico; el sitio conserva `noindex`.
- No se verificó GitHub Pages en esta tarea porque la sincronización estaba expresamente fuera de alcance.
