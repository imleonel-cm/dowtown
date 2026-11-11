# Probate Escrow EN/ES — revisión de implementación

Fecha: 28 de octubre de 2026  
Proyecto: Downtown v2  
Estado: implementado para revisión local; no publicado; `noindex, nofollow` conservado.

## 1. Resultado

Se implementó la tercera especialidad bilingüe usando las rutas y el sistema visual ya reservados. Probate ahora aparece como enlace real en las tarjetas del Home, el disclosure Services/Servicios y el footer. Reverse Mortgage, Residential y Commercial continúan como estado no interactivo.

No se modificó el contenido de Home, Manufactured Homes o Short Sale. Sus enlaces compartidos se actualizaron automáticamente al promover `probate` dentro de `implementedPageKeys`.

## 2. Rutas implementadas

- EN: `/services/probate-escrow/`
- ES: `/es/servicios/escrow-probate/`

Ambas responden con HTTP 200 en la vista previa local, tienen canonical propio y alternates recíprocos `en`, `es` y `x-default`.

## 3. Archivos creados

- `src/data/probate.ts` — contenido editorial y metadata EN/ES.
- `src/components/ProbatePage.astro` — adaptador de la especialidad a la plantilla compartida.
- `src/pages/services/probate-escrow/index.astro` — ruta inglesa.
- `src/pages/es/servicios/escrow-probate/index.astro` — ruta española.
- `docs/content/probate-implementation-review-2026-10-28.md` — este informe.

## 4. Archivos modificados

- `src/data/site.ts` — Probate añadido a `implementedPageKeys`.
- `src/data/specialty.ts` — bloque opcional y tipado de servicios relacionados.
- `src/components/SpecialtyPage.astro` — soporte para `pageKey="probate"` y render opcional de servicios relacionados.
- `src/styles/global.css` — estilos del bloque relacionado, usando el sistema visual existente.
- `scripts/validate-site.mjs` — ocho páginas, tres especialidades enlazadas, tres pendientes, Probate EN/ES, enlaces relacionados y 404.
- `scripts/review-alignment.mjs` — Probate añadido a Playwright desktop, móvil y sin JavaScript.
- `README.md` — arquitectura, navegación, validación y estado actualizados.
- `docs/site-architecture.md` — Probate marcado como implementado y contrato de navegación actualizado.

No se cambiaron las rutas existentes, datos empresariales, fotografías, tipografía, selector de idioma, redirecciones heredadas, tracking o configuración de publicación.

## 5. Contenido EN/ES

Los diez temas del plan se agruparon en la plantilla actual para evitar una página fragmentada:

1. Hero con identificación del servicio, respuesta breve y CTA telefónico.
2. Definición de probate escrow y función neutral de cierre.
3. Qué coordina escrow dentro del alcance confirmado.
4. Límites frente a personal representative, court, attorneys, title, lender y agentes.
5. Proceso y variables: autoridad, administración independiente, participantes y condiciones de cierre.
6. Preparación: propiedad, probate, autoridad disponible, participantes, estado y preguntas.
7. Información útil para una consulta inicial, sin presentarla como lista obligatoria.
8. Cinco FAQs específicas.
9. Manufactured Homes y Short Sale como servicios relacionados contextuales.
10. Cuatro fuentes oficiales y CTA final.

El español se adaptó editorialmente; no es una traducción mecánica. Conserva términos como `probate`, `executor`, `administrator`, `Letters` y `Notice of Proposed Action` cuando ayudan a evitar ambigüedad, acompañados de contexto en español.

## 6. SEO implementado

### Inglés

- Keyword principal: `probate escrow services`.
- Secundarias contextuales: `probate escrow`, `probate real estate`, `personal representative`, `independent administration`, `court confirmation`, `Orange County` y `California`.
- Title: `Probate Escrow Services | Downtown Community Escrow`.
- Description: `Learn what probate escrow coordinates, who may be involved, and what information can help Downtown review a probate-related real estate transaction.`
- H1: `Probate Escrow Services`.

### Español

- Keyword principal: `escrow para propiedades en sucesión`.
- Secundarias contextuales: `escrow de probate`, `propiedad heredada`, `representante personal`, `administración independiente` y `confirmación judicial`.
- Title: `Escrow para propiedades en sucesión | Downtown`.
- Description: `Conoce qué coordina un escrow de probate, quiénes pueden intervenir y qué información ayuda a Downtown a revisar una operación inmobiliaria de sucesión.`
- H1: `Escrow para propiedades en sucesión`.

Cada página tiene un solo H1, headings naturales, canonical de producción y `hreflang` recíproco. No se añadieron meta keywords ni repeticiones artificiales. La intención inglesa prioriza el servicio; la española usa una formulación comprensible para propiedad en sucesión y conserva `probate` como término de apoyo.

## 7. AEO y GEO

Las respuestas principales aparecen en HTML visible antes de la FAQ:

- Qué es probate escrow.
- Qué coordina y qué no decide escrow.
- Por qué no toda propiedad heredada requiere probate formal.
- Por qué court confirmation no es universal.
- Quién puede actuar por el estate y dónde se documenta la autoridad.
- Qué información puede ayudar a preparar una consulta.

Las afirmaciones procesales se apoyan en California Courts y Orange County Superior Court. Las fuentes externas se presentan como contexto, no como avales, socios o evidencia de los procedimientos de Downtown.

## 8. FAQs implementadas

1. What is probate escrow? / ¿Qué es el escrow de probate?
2. Does every inherited property have to go through probate? / ¿Toda propiedad heredada debe pasar por probate?
3. Does every probate sale require court confirmation? / ¿Toda venta de probate requiere confirmación judicial?
4. Who has authority to act for the estate? / ¿Quién tiene autoridad para actuar por la sucesión?
5. What information is useful before contacting probate escrow? / ¿Qué información es útil antes de contactar a escrow de probate?

Las cinco respuestas son visibles, exclusivas en el acordeón y utilizables sin JavaScript mediante `details/summary`. No se añadió `FAQPage`.

## 9. Datos estructurados

- `BreadcrumbList`: implementado mediante el componente existente y coherente con el breadcrumb visible `Home/Inicio → Probate`.
- `WebPage`: no añadido. El proyecto no lo aplica todavía como estrategia consistente para todas las páginas y el plan lo consideraba opcional.
- `Service`: evaluado y no añadido. Provider, `areaServed`, alcance operativo y capacidades específicas siguen pendientes de verificación empresarial.
- `FAQPage`: omitido intencionalmente; las FAQs se mantienen por utilidad, no para perseguir un resultado enriquecido.
- `Organization` / `LocalBusiness`: permanecen pendientes de una decisión global y evidencia empresarial, no específica de Probate.

Solo el schema visible y ya aprobado —`BreadcrumbList`— se reutilizó.

## 10. Enlaces internos

- Home EN/ES → tarjeta Probate.
- Services/Servicios disclosure → ruta equivalente de Probate.
- Footer EN/ES → ruta equivalente de Probate.
- Selector EN/ES → conserva la especialidad Probate.
- Probate → Home/Inicio `#services` y `#contact`.
- Probate → Manufactured & Mobile Home Escrow cuando la clasificación, terreno, título o registro es central.
- Probate → Short Sale Escrow cuando también existe una aprobación de short sale.

El hub retirado no fue restaurado. Resources y Agents & Lenders continúan ocultos.

## 11. Fuentes visibles

- California Courts — Guide to property after someone dies: https://selfhelp.courts.ca.gov/probate
- Orange County Superior Court — Administering the Probate Estate: https://www.occourts.org/self-help/self-help-probate/wills-trusts/administering-probate-estate
- California Courts — Petition for Court Confirmation of Sale (DE-260): https://selfhelp.courts.ca.gov/jcc-form/DE-260
- California DFPI — Consumer Information: Escrow: https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/

DFPI se usa únicamente como contexto general; no se presenta como prueba de licencia o alcance de Downtown.

## 12. CRO y accesibilidad

- CTA primario: llamada telefónica real mediante `tel:+17142657116`.
- CTA secundario: sección localizada de servicios del Home.
- CTA final: llamada más enlace a la información de contacto del Home.
- Navegación por teclado, foco, Escape, `inert`, acordeón exclusivo y reduced motion conservados.
- Sin formulario nuevo porque el proyecto no tiene aún un comportamiento de formulario aprobado.
- La página no incorpora imágenes propias; por ello no se añadieron ALT o recursos duplicados. La optimización del Home permanece intacta.

## 13. Capturas

- `artifacts/probate-implementation-2026-10-28/probate-en-1440.png`
- `artifacts/probate-implementation-2026-10-28/probate-en-390.png`
- `artifacts/probate-implementation-2026-10-28/probate-es-1440.png`
- `artifacts/probate-implementation-2026-10-28/probate-es-390.png`
- El mismo directorio contiene capturas regresivas de las ocho páginas y `playwright-report.json`.

La revisión visual confirmó jerarquía, legibilidad, CTA y composición sin recortes. El español produce una página naturalmente más larga, pero no presenta overflow ni texto fuera del viewport.

## 14. Pruebas y resultados

- Astro build: correcto; ocho páginas reales y dos documentos HTML estáticos heredados.
- Rutas Probate EN/ES: HTTP 200.
- Validador: 64 combinaciones —ocho páginas × ocho anchos de 320 a 1920 px— sin fallos.
- Playwright: 24 registros —ocho páginas en 1440 y 390 px, más ocho comprobaciones sin JavaScript— sin fallos ni errores de consola.
- H1, title, description, canonical, reciprocal hreflang y `x-default`: correctos.
- `noindex, nofollow`: presente en las ocho páginas.
- Breadcrumb visible y `BreadcrumbList`: correctos.
- Cinco FAQs por especialidad y comportamiento exclusivo: correctos.
- Menú móvil, teclado, Enter, Space, Escape, foco, `inert`, breakpoint 880/881 y navegación sin JavaScript: correctos.
- Links de Home, disclosure, footer, servicios relacionados y selector EN/ES: correctos.
- Responsive: cero overflow y cero texto de hero recortado.
- Recursos visuales: sin roturas.
- Ruta inexistente `/services/not-a-real-specialty/`: HTTP 404.
- Redirecciones HTML heredadas `/services/` y `/es/servicios/`: conservadas como documentos `noindex` servidos con HTTP 200 en Astro Preview; no se describen como 301.

Los mensajes de Chrome Updater sobre una tubería local con acceso denegado pertenecen al actualizador del navegador; no fueron errores de consola de las páginas y no produjeron fallos del validador.

## 15. Pendientes empresariales

- Confirmar qué operaciones probate acepta Downtown.
- Confirmar manejo de autoridad plena, limitada y casos con court confirmation.
- Documentar intake, documentos requeridos, apertura formal, instrucciones y comunicación entre partes.
- Confirmar jurisdicciones y cobertura operativa real.
- Verificar licencia, número, vigencia y fuente oficial antes de publicarlos.
- Confirmar experiencia, responsables o formación publicables.
- Confirmar tarifas, plazos, horarios y modalidades de firma o comunicación.
- Definir formulario y medición de conversiones antes de añadirlos.

La página usa lenguaje prudente y solicita una conversación; no afirma que Downtown acepte universalmente cada caso.

## 16. Riesgos

- El tema es YMYL y puede interpretarse como orientación legal si se eliminan los límites de roles.
- Los procedimientos pueden variar por autoridad, caso y jurisdicción; no convertir el contenido en una lista universal.
- Las fuentes oficiales pueden actualizarse y deben revisarse antes del lanzamiento.
- No usar la ubicación de Santa Ana para inferir cobertura estatal o nacional.
- No añadir `Service`, licencia, experiencia o `areaServed` sin evidencia.

## 17. Diferencias respecto al plan aprobado

- Los diez temas no se convirtieron en diez franjas independientes. Se agruparon en la plantilla existente para mejorar ritmo y coherencia visual.
- Se añadió un bloque opcional reutilizable de servicios relacionados; las otras especialidades no cambian porque no proporcionan ese contenido.
- Las fuentes oficiales permanecen en una sección propia para que el usuario distinga evidencia externa de capacidades empresariales.
- No se añadió `WebPage`, `Service` o `FAQPage` por las limitaciones documentadas.
- No se añadió formulario; se reutilizó el contacto telefónico y el enlace localizado al Home.

## Cierre

La implementación cumple el alcance aprobado y está lista para revisión local. El sitio permanece en `127.0.0.1`, `noindex, nofollow`, sin publicación o despliegue. No se inició Reverse Mortgage, Residential, Commercial ni otra página.
