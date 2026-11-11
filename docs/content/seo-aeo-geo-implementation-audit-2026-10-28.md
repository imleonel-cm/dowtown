# Downtown v2 — auditoría de implementación SEO, AEO y GEO

Fecha de cierre: 28 de octubre de 2026  
Alcance: Home, Manufactured & Mobile Home Escrow y Short Sale Escrow, en inglés y español.  
Entorno: compilación estática local de Astro; no publicado; `noindex, nofollow` conservado.

## A. Estado general

### Comprobado

- Existen seis páginas reales: Home EN/ES, Manufactured Homes EN/ES y Short Sale EN/ES.
- Los antiguos hubs `/services/` y `/es/servicios/` son documentos HTML estáticos `noindex` con meta refresh y respuesta HTTP 200 en Astro Preview. No son redirecciones HTTP 301/302.
- Cada página real devuelve HTTP 200, tiene un H1, title y description propios, canonical de producción y alternates recíprocos `en`, `es` y `x-default`.
- Las dos especialidades tienen breadcrumb visible y `BreadcrumbList` válido y coherente con la página.
- Las respuestas principales están en HTML visible antes de las FAQs. Cada especialidad tiene cinco preguntas y Home cuatro.
- El menú mantiene Services como disclosure, dos especialidades enlazadas y cuatro pendientes sin destinos ficticios. Resources y Agents & Lenders continúan ocultos.
- Poppins carga en pesos 400–700; imágenes, navegación, selector EN/ES, acordeones, foco, teclado, no-JavaScript y reduced motion superaron las pruebas existentes.
- La dirección pública se obtiene de `src/data/business.ts`. Se actualizó a `640 North Tustin Ave, Suite 202`, manteniendo `Santa Ana, CA 92705` y el teléfono existente.
- La dirección anterior no aparece en ningún HTML generado ni en el código que produce contenido público.

### Restricción intencional

`noindex, nofollow` es correcto durante el desarrollo y no se clasifica como defecto actual. Antes del lanzamiento debe existir una revisión de indexabilidad independiente; no basta con retirar la etiqueta sin validar robots, sitemap, canonicals, redirecciones y entorno de producción.

### Parcial o pendiente

- No existen `robots.txt` ni `sitemap.xml`; ambos devuelven 404 en la vista previa.
- No hay metadatos Open Graph/Twitter.
- No existe schema empresarial o de página (`Organization`, `LocalBusiness`, `WebSite`, `WebPage` o `Service`). Solo existe `BreadcrumbList` en las especialidades.
- No se usa `FAQPage`, decisión prudente: la presencia de FAQs no obliga a marcarlo ni garantiza resultados enriquecidos.
- No hay formulario, analytics, tracking ni eventos de conversión. La conversión actual es una llamada telefónica, pero no se mide su resultado.
- No hay páginas reales de About, Contact, Agents & Lenders o Resources. About y Contact son secciones del Home; las otras dos permanecen ocultas.
- Probate, Reverse Mortgage, Residential y Commercial siguen pendientes y no son enlaces.
- No se pueden verificar cobertura operativa, licencias, credenciales, responsables, procesos, tarifas, horarios, plazos ni recepción final de oportunidades con la evidencia disponible.
- La única imagen residencial pesa 3,252,146 bytes y se reutiliza en el Home. Tiene dimensiones declaradas y prioridad correcta en el hero, pero su peso supone un riesgo de LCP en producción.

## B. Matriz por página

### Home

| Criterio | Estado | Evidencia | Problema | Acción recomendada |
| --- | --- | --- | --- | --- |
| Intención y propuesta | CORRECTO | Hero identifica Downtown y la coordinación de escrow; la sección Services presenta seis especialidades | No se detectó confusión principal | Conservar; evitar forzar keywords exactas |
| SEO on-page | PARCIAL | Title, description, H1 y headings son únicos; Santa Ana y Orange County aparecen en contenido visible | Title y description no incorporan contexto local explícito; no hay datos de demanda que justifiquen reescritura | Evaluar una variante local solo con aprobación y medición posterior |
| AEO | CORRECTO | Definición y selección de servicio antes de cuatro FAQs visibles | Ninguno material | Conservar respuestas directas y FAQs complementarias |
| GEO / entidad | PARCIAL | Nombre legal, teléfono, dirección, Santa Ana y Orange County son consistentes | Cobertura, licencias, equipo y credenciales no son verificables; no hay schema empresarial | Confirmar evidencia y luego evaluar `LocalBusiness`/`Organization` |
| Enlaces internos | CORRECTO | Home enlaza las dos especialidades reales; cuatro servicios son texto pendiente | No hay enlaces ficticios | Activar cada servicio solo al existir el par EN/ES |
| CRO | PARCIAL | CTA de llamada y acceso a Services/Contact son claros | No existe medición de clics o leads; no hay formulario | Definir medición y propietario de conversiones antes del lanzamiento |
| Rendimiento | PARCIAL | Fuentes pequeñas autoalojadas, dimensiones de imagen y `fetchpriority` en hero | PNG principal de 3.25 MB | Aprobar optimización AVIF/WebP y `srcset` sin cambiar la imagen visual |
| EN/ES | CORRECTO | Rutas, selector, labels, contenido y hreflang equivalentes | Ninguno detectado | Mantener revisión editorial, no traducción automática |

### Manufactured & Mobile Home Escrow

| Criterio | Estado | Evidencia | Problema | Acción recomendada |
| --- | --- | --- | --- | --- |
| Intención y especificidad | CORRECTO | H1, hero y secciones cubren terreno, ubicación, title/registration, documentación y participantes | Ninguno material | Conservar diferenciación por propiedad y jurisdicción |
| Roles y precisión | CORRECTO | Separa escrow de agente, lender, title y asesoría legal/fiscal | No describe un proceso propio no confirmado | Mantener límites hasta contar con evidencia operativa |
| HCD y fuentes | CORRECTO | HCD se presenta como contexto específico de California; Fannie Mae como contexto limitado | No son prueba de capacidad empresarial | Conservar etiquetas de alcance y no presentarlas como socios |
| SEO técnico | CORRECTO | HTTP 200, title/description únicos, H1 único, canonical/hreflang y breadcrumb coherentes | Ninguno detectado | Conservar slug y arquitectura |
| AEO | CORRECTO | Respuesta directa en hero, secciones por variables y cinco FAQs no duplicativas | Ninguno material | Mantener FAQs como apoyo, no como contenido principal |
| GEO / cobertura | PARCIAL | Solicita ciudad/estado y explica variación jurisdiccional | No hay evidencia de estados o modalidades realmente atendidos | Confirmar cobertura antes de afirmar disponibilidad |
| CRO | CORRECTO | CTA telefónico específico y lista útil para preparar la conversación | La recepción y resultado de la llamada no se pueden medir | Definir tracking autorizado antes del lanzamiento |
| EN/ES | CORRECTO | Estructura y significado editorial equivalentes; prueba responsive aprobada | Ninguno detectado | Mantener control editorial bilingüe |

### Short Sale Escrow

| Criterio | Estado | Evidencia | Problema | Acción recomendada |
| --- | --- | --- | --- | --- |
| Intención y definición | CORRECTO | Define short sale y asigna la aprobación al lender/servicer, no a escrow | Ninguno material | Conservar definición directa |
| Función de Downtown | CORRECTO | Limita la oferta a coordinación de información, documentos, fondos e instrucciones autorizadas | No afirma negociación o aprobación | Mantener hasta confirmar procesos internos |
| Contenido específico | CORRECTO | Incluye aprobaciones escritas, liens, fechas, documentación y posible deficiency | Ninguno material | Conservar alcance transaccional |
| Fuentes | CORRECTO | CFPB respalda contexto general; HUD está delimitado como ejemplo FHA | Las fuentes no acreditan capacidad empresarial | Mantener separación entre educación y oferta comercial |
| SEO técnico | CORRECTO | HTTP 200, title/description únicos, H1 único, canonical/hreflang y breadcrumb coherentes | Ninguno detectado | Conservar slug y arquitectura |
| AEO | CORRECTO | Respuesta directa, secciones semánticas y cinco FAQs específicas | Ninguno material | Mantener respuestas concisas y verificables |
| GEO / cobertura | PARCIAL | Explica que requisitos y disponibilidad varían por estado | Cobertura real e interacción operativa con acreedores no confirmadas | Obtener evidencia antes de ampliar claims |
| CRO | CORRECTO | CTA solicita propiedad, estado de la venta, comunicaciones y preguntas | No existe medición del clic o resultado | Definir medición antes del lanzamiento |
| EN/ES | CORRECTO | Paridad de intención, estructura, límites y CTA; pruebas aprobadas | Ninguno detectado | Mantener revisión editorial bilingüe |

## C. Problemas priorizados

### P0 — crítico

No se detectaron problemas P0 en el entorno local. El sitio no está publicado y permanece intencionalmente fuera de indexación.

### P1 — alto impacto

#### P1.1 — Preparación de indexabilidad para lanzamiento

- **Estado actual:** `noindex, nofollow` activo; `robots.txt` y `sitemap.xml` devuelven 404.
- **Archivo afectado:** futuro ajuste en layout/configuración y nuevos archivos de rastreo; no implementado en esta etapa.
- **Problema:** el estado es correcto en desarrollo, pero no constituye una configuración de producción.
- **Cambio recomendado:** crear un checklist de lanzamiento, sitemap de las rutas aprobadas, robots coherente y retirada controlada de `noindex` únicamente en producción.
- **Razón:** SEO técnico e indexabilidad.
- **Impacto:** alto.
- **Riesgo:** indexación prematura o bloqueo accidental si se cambia antes de cerrar el sitio.
- **Validación necesaria:** entorno de producción, códigos HTTP, robots, sitemap, canonicals, hreflang, inspección de URL y ausencia de rutas pendientes.

#### P1.2 — Evidencia empresarial y E-E-A-T

- **Estado actual:** nombre, teléfono y dirección están confirmados; cobertura, licencias, equipo, responsables y procesos no.
- **Archivo afectado:** futuros datos empresariales, About, Contact y contenido de servicios; no implementado.
- **Problema:** faltan señales verificables para sostener claims y schema completos.
- **Cambio recomendado:** recopilar evidencia del propietario antes de publicar afirmaciones o datos estructurados.
- **Razón:** GEO, E-E-A-T y riesgo YMYL.
- **Impacto:** alto.
- **Riesgo:** claims falsos o inconsistentes si se completa con supuestos.
- **Validación necesaria:** documentos internos autorizados y conciliación con perfiles públicos.

#### P1.3 — Rendimiento de la imagen principal

- **Estado actual:** `public/images/residential-escrow-illustration.png` pesa 3,252,146 bytes y se usa como LCP en Home.
- **Archivo afectado:** imagen y marcado responsive; no modificado.
- **Problema:** posible impacto en LCP y consumo móvil.
- **Cambio recomendado:** generar derivados AVIF/WebP y `srcset`, preservando encuadre, ALT y original.
- **Razón:** Core Web Vitals, UX y SEO.
- **Impacto:** alto.
- **Riesgo:** degradación visual o recorte si se procesa sin QA.
- **Validación necesaria:** comparación visual, tamaños transferidos, Lighthouse/PSI y datos de campo después del lanzamiento.

#### P1.4 — Medición de conversiones

- **Estado actual:** CTA telefónico real; no hay analytics, tracking ni eventos.
- **Archivo afectado:** futura capa de medición; no implementada.
- **Problema:** no se podrá atribuir tráfico, clics o leads.
- **Cambio recomendado:** definir plataforma, consentimiento, eventos y propietario de datos antes de instrumentar.
- **Razón:** CRO y medición SEO.
- **Impacto:** alto.
- **Riesgo:** privacidad, duplicación de eventos o datos incompletos.
- **Validación necesaria:** modo debug, llamadas/pruebas no reales, deduplicación y documentación de conversiones.

### P2 — importante

#### P2.1 — Schema empresarial y de servicios

- **Estado actual:** solo `BreadcrumbList` en páginas de especialidad.
- **Archivo afectado:** futuro componente JSON-LD compartido; no implementado.
- **Problema:** la entidad y sus servicios no están expresados en datos estructurados.
- **Cambio recomendado:** evaluar `LocalBusiness` u `Organization`, `WebSite`, `WebPage` y `Service` una vez confirmados NAP, cobertura, URL pública y credenciales aplicables.
- **Razón:** comprensión semántica y GEO.
- **Impacto:** medio/alto.
- **Riesgo:** contradicción con contenido visible o propiedades inventadas.
- **Validación necesaria:** Schema Markup Validator, Rich Results Test cuando aplique y comparación exacta con HTML visible.

#### P2.2 — Arquitectura incompleta

- **Estado actual:** About y Contact son secciones; Agents & Lenders y Resources están ocultos; cuatro especialidades pendientes.
- **Archivo afectado:** futuras rutas aprobadas; no implementado.
- **Problema:** autoridad temática, confianza y rutas de conversión aún son parciales.
- **Cambio recomendado:** completar página por página, empezando solo cuando se cierre la evidencia de negocio correspondiente.
- **Razón:** arquitectura, E-E-A-T, SEO y CRO.
- **Impacto:** medio/alto.
- **Riesgo:** thin content o destinos huérfanos si se crean prematuramente.
- **Validación necesaria:** intención propia, enlaces internos, par EN/ES, metadatos y QA completo.

#### P2.3 — Metadatos sociales

- **Estado actual:** cero etiquetas Open Graph/Twitter en las seis páginas.
- **Archivo afectado:** `src/layouts/BaseLayout.astro`; no modificado.
- **Problema:** previsualizaciones sociales no controladas.
- **Cambio recomendado:** añadir título, descripción, URL, locale e imagen social aprobada por página.
- **Razón:** distribución, confianza y CTR fuera del buscador.
- **Impacto:** medio.
- **Riesgo:** imágenes inexistentes o claims no aprobados.
- **Validación necesaria:** HTML renderizado y validadores de previews.

#### P2.4 — Privacidad y transparencia

- **Estado actual:** no hay formulario ni captura de datos en la web, pero tampoco páginas visibles de privacidad/términos.
- **Archivo afectado:** futuras páginas legales y footer; no implementado.
- **Problema:** la transparencia deberá cerrarse antes de añadir formularios o tracking.
- **Cambio recomendado:** obtener textos legales aprobados y enlazarlos cuando correspondan.
- **Razón:** confianza, E-E-A-T y cumplimiento.
- **Impacto:** medio/alto.
- **Riesgo:** inventar política o práctica de datos.
- **Validación necesaria:** revisión legal/empresarial y comprobación del comportamiento real.

### P3 — secundario

#### P3.1 — Experiencia 404 propia

- **Estado actual:** una URL inexistente responde 404, pero no existe una página 404 de marca.
- **Archivo afectado:** futura ruta 404; no implementada.
- **Problema:** recuperación y navegación mejorables.
- **Cambio recomendado:** diseñar una 404 accesible con enlaces a Home, Services y Contact.
- **Razón:** UX y rastreo.
- **Impacto:** bajo.
- **Riesgo:** bajo.
- **Validación necesaria:** HTTP 404 real, no soft-404, y enlaces funcionales.

#### P3.2 — Keyword local en snippet

- **Estado actual:** el Home comunica Santa Ana y Orange County en el cuerpo, pero no fuerza `escrow services Orange County` o `escrow company Santa Ana` en title/description.
- **Archivo afectado:** `src/data/site.ts`; no modificado.
- **Problema:** oportunidad hipotética, sin datos de volumen, posición o CTR.
- **Cambio recomendado:** evaluar con Search Console/SERP después del lanzamiento antes de reescribir.
- **Razón:** SEO on-page local.
- **Impacto:** potencialmente medio, aún no medido.
- **Riesgo:** sobreoptimización o pérdida de claridad de marca.
- **Validación necesaria:** consultas reales, CTR y comparación de snippet.

## D. Corrección de dirección

Dirección confirmada por el propietario: **640 North Tustin Ave, Suite 202, Santa Ana, CA 92705**.

### Archivo público modificado

- `src/data/business.ts`: `addressLine` cambió de `2677 N Main St, Suite 320` a `640 North Tustin Ave, Suite 202`.

Home EN/ES, FAQ, bloque Office y Footer consumen este dato compartido. No fue necesario modificar componentes, teléfono, nombre legal, horarios ni cobertura.

### Referencias históricas

`docs/research/MATRIZ_ARQUITECTURA_CONTENIDO_V1.md` y `docs/research/competitive-research-2026-10-27.md` conservan la dirección anterior como parte de copias históricas inalteradas. No generan contenido público. La confirmación de esta auditoría prevalece y queda registrada en este informe y en `docs/research/README.md`.

### Validación

- Dirección nueva presente en seis archivos HTML reales generados.
- Dirección anterior presente en cero archivos HTML generados.
- Dirección anterior presente en cero archivos bajo `src`, `public`, scripts o configuración.
- La vista previa del Home devuelve HTTP 200 y muestra la dirección nueva.

## E. Pruebas realizadas

### Build

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
& '.\.tools\node-v24.16.0-win-x64\node.exe' '.\node_modules\astro\bin\astro.mjs' build
```

Resultado: build correcto; seis páginas reales y dos documentos estáticos heredados generados.

### Validador existente

```powershell
& '.\.tools\node-v24.16.0-win-x64\node.exe' '.\scripts\validate-site.mjs' 'http://127.0.0.1:4321'
```

Resultado: 48 combinaciones en 320, 390, 768, 880, 881, 1024, 1440 y 1920 px; cero fallos y cero errores de página. Se validaron metadatos, canonical/hreflang, `noindex`, fuentes, overflow, navegación, disclosure, foco, Escape, no-JavaScript, FAQs, reduced motion, enlaces y documentos heredados.

Los mensajes de Chrome Updater sobre una tubería local con acceso denegado son diagnósticos del actualizador de Chrome, no errores de consola de las páginas; `browserErrors` terminó vacío.

### Playwright

```powershell
$env:PLAYWRIGHT_MODULE_PATH = 'C:\Users\LeonelCondoriMatias\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\playwright'
$env:QA_RUN_LABEL = 'seo-aeo-geo-audit-2026-10-28'
& '.\.tools\node-v24.16.0-win-x64\node.exe' '.\scripts\review-alignment.mjs' 'http://127.0.0.1:4321'
```

Resultado: 18 registros; cero fallos y cero errores. Incluye las seis páginas a 1440×900 y 390×844, cambio de idioma, FAQs exclusivas, imágenes, overflow, texto del hero y navegación sin JavaScript. Evidencia en `artifacts/seo-aeo-geo-audit-2026-10-28/`.

### Comprobaciones adicionales

- Seis páginas reales HTTP 200.
- Dos documentos heredados HTTP 200 en Astro Preview, `noindex`, con canonical al Home localizado.
- URL inexistente HTTP 404.
- `robots.txt` HTTP 404 y `sitemap.xml` HTTP 404.
- Un H1 por página real.
- Cero etiquetas Open Graph.
- `BreadcrumbList` presente solo en las cuatro páginas de especialidad.
- Cero formularios, analytics o scripts de tracking encontrados.
- No se publicó ni se alteró producción.

Limitaciones: no se ejecutó Lighthouse/PageSpeed ni se dispone de datos de campo, Search Console, Analytics, rankings, CTR, leads o recepción de llamadas. Por ello no se atribuye ninguna mejora de rendimiento orgánico o conversión.

## F. Pendientes empresariales

Antes de publicar o ampliar claims, Downtown debe confirmar con evidencia:

- licencia, número de licencia, entidad reguladora y forma autorizada de mostrarla;
- responsables, equipo, cargos, biografías y permisos de publicación;
- cobertura real por estado, tipo de operación y modalidad;
- alcance operativo de manufactured/mobile homes cuando el terreno está o no incluido;
- interacción real en short sales con servicers, acreedores, title y otros participantes;
- apertura de archivo, intake, documentos, comunicaciones, asignación y cierre;
- horarios, tarifas, plazos orientativos y estándares de respuesta;
- fotografías aprobadas de oficina y equipo;
- propietario de llamadas/leads y método de medición;
- política de privacidad, términos y manejo de datos antes de añadir formularios o tracking;
- conciliación de la nueva dirección con todos los perfiles públicos, sin editar cuentas externas desde este proyecto.

## G. Próximos pasos antes de Probate

1. Aprobar y completar la conciliación del NAP en canales públicos, manteniendo una sola dirección oficial.
2. Confirmar cobertura, licencia, responsables y procesos que puedan publicarse.
3. Decidir el paquete técnico de lanzamiento: indexabilidad, robots, sitemap, schema, Open Graph, 404 y medición.
4. Aprobar la optimización técnica de la imagen principal sin cambiar el diseño.
5. Resolver privacidad y destino real de oportunidades antes de formularios o tracking.
6. Medir una línea base cuando exista un entorno publicado; no inferir resultados desde localhost.
7. Solo después, iniciar Probate como par EN/ES usando la investigación consolidada, sin asumir que toda propiedad heredada requiere probate ni que todos los estados siguen el mismo proceso.

No se inició Probate, no se creó ninguna ruta y no se publicó el sitio.
