# Reverse Mortgage Escrow EN/ES — revisión de implementación

Fecha: 28 de octubre de 2026  
Proyecto: Downtown v2  
Estado: implementado para revisión local; no publicado; `noindex, nofollow` conservado.

## 1. Resultado

Se completó y validó la implementación de la cuarta especialidad bilingüe, **Reverse Mortgage Escrow EN/ES**, utilizando las rutas y el sistema visual aprobados. Reverse Mortgage ahora aparece como enlace activo y funcional en las tarjetas del Home, en el disclosure Services/Servicios del header, en el menú móvil y en el footer. Residential y Commercial continúan en estado no interactivo “Coming soon” / “Próximamente”.

No se alteró el contenido base ni el diseño de Home, Manufactured Homes, Short Sale o Probate. Sus enlaces compartidos y estados se actualizaron automáticamente mediante el catálogo centralizado al promover `reverseMortgage` dentro de `implementedPageKeys`.

## 2. Rutas implementadas

- EN: `/services/reverse-mortgage-escrow/`
- ES: `/es/servicios/escrow-hipoteca-inversa/`

Ambas rutas responden con HTTP 200 en la vista previa estática de Astro, cuentan con canonical propio hacia el dominio de producción (`https://downtownescrow.net`), alternates recíprocos `en`, `es` y `x-default` (apuntando a `en`), y directiva `noindex, nofollow`.

## 3. Estado encontrado al retomar y qué se completó

### Estado al retomar la sesión
- El plan de investigación `docs/content/reverse-mortgage-seo-aeo-geo-research-plan.md` estaba finalizado y aprobado.
- Los archivos de contenido `src/data/reverseMortgage.ts`, componente adaptador `src/components/ReverseMortgagePage.astro` y las páginas Astro `src/pages/services/reverse-mortgage-escrow/index.astro` y `src/pages/es/servicios/escrow-hipoteca-inversa/index.astro` habían sido redactados en el último tramo de la sesión previa.
- `reverseMortgage` ya figuraba en `implementedPageKeys` dentro de `src/data/site.ts`.
- Los scripts `scripts/validate-site.mjs`, `scripts/review-alignment.mjs` y `scripts/capture-bilingual.mjs` ya incluían las rutas de Reverse Mortgage.

### Qué estaba incompleto o pendiente
- La suite de validación completa no se había ejecutado tras la interrupción (sin informe de validación ni capturas generadas).
- La suite Playwright no se había corrido contra las 10 páginas ni se había generado el reporte `playwright-report.json`.
- La documentación de arquitectura (`docs/site-architecture.md`) mantenía `reverseMortgage` en estado `Planned` y describía 3 especialidades implementadas.
- El archivo `README.md` describía la versión de tres especialidades (8 páginas en lugar de 10).
- El informe de cierre `docs/content/reverse-mortgage-implementation-review-2026-10-28.md` no existía.

### Qué se terminó en esta sesión
1. Verificación integral del contenido y componentes de Reverse Mortgage EN/ES.
2. Actualización de `docs/site-architecture.md` promoviendo `reverseMortgage` a `Implemented`, detallando su arquitectura y actualizando el contrato de navegación.
3. Actualización de `README.md` reflejando las cuatro especialidades y diez páginas activas.
4. Ejecución del build de producción de Astro (`astro build`), generando las 10 páginas estáticas y los 2 redirects legacy.
5. Ejecución del validador completo (`scripts/validate-site.mjs`) cubriendo 80 combinaciones (10 páginas × 8 anchos de pantalla: 320, 390, 768, 880, 881, 1024, 1440 y 1920 px) sin fallos ni desbordamientos horizontales.
6. Ejecución de la suite Playwright (`scripts/review-alignment.mjs`), registrando 30 comprobaciones (20 recorridos responsive en 1440 y 390 px + 10 comprobaciones sin JavaScript en móvil) con cero errores y generando el conjunto de capturas visuales en `artifacts/reverse-mortgage-implementation-2026-10-28/`.
7. Creación de este informe de revisión de implementación.

## 4. Archivos creados y modificados

### Archivos creados
- `src/data/reverseMortgage.ts` — contenido editorial bilingüe, límites de rol, variables de cierre, preparación, consideraciones, 5 FAQs, enlace a servicio relacionado, fuentes oficiales y CTA.
- `src/components/ReverseMortgagePage.astro` — componente adaptador de la especialidad para la plantilla compartida `SpecialtyPage.astro`.
- `src/pages/services/reverse-mortgage-escrow/index.astro` — página de ruta en inglés.
- `src/pages/es/servicios/escrow-hipoteca-inversa/index.astro` — página de ruta en español.
- `docs/content/reverse-mortgage-implementation-review-2026-10-28.md` — este informe de cierre.
- `artifacts/reverse-mortgage-implementation-2026-10-28/` — artefactos de prueba (20 capturas PNG full-page y `playwright-report.json`).

### Archivos modificados
- `src/data/site.ts` — `reverseMortgage` integrado en `implementedPageKeys` y servicios localizados.
- `src/components/SpecialtyPage.astro` — tipado de `pageKey` para aceptar `reverseMortgage`.
- `scripts/validate-site.mjs` — configuración de 10 páginas (4 especialidades activas y 2 pendientes), 5 fuentes oficiales, 1 servicio relacionado y validaciones de navegación interactiva y cambio de idioma.
- `scripts/review-alignment.mjs` — 10 rutas bilingües con 5 FAQs para las 4 especialidades.
- `docs/site-architecture.md` — actualización de tabla de rutas (`Implemented`), descripción de arquitectura de Reverse Mortgage y alcance pendiente.
- `README.md` — actualización de arquitectura (10 páginas), navegación de 4 especialidades y resumen de la nueva especialidad.

## 5. Contenido EN/ES

Siguiendo el plan de investigación aprobado, el contenido se estructuró para desambiguar inmediatamente el servicio:

1. **Hero**: H1 comercial claro (`Reverse Mortgage Escrow Services` / `Escrow para hipoteca inversa`), respuesta directa inicial aclarando que coordina el cierre y no la originación o asesoría de préstamos, badges `RM` / `HI` (`Specialty 04` / `Especialidad 04`), botón primario de llamada telefónica y botón secundario hacia la sección de servicios del Home.
2. **Índice interno**: Navegación rápida en la página (`On this page` / `En esta página`) con 7 anclas.
3. **Respuesta directa y límites de rol (Overview & Boundaries)**: Define el papel neutral de escrow de cierre frente a las decisiones de préstamo o reservas del servicer. Define explícitamente que el escrow no sustituye al lender/originador, al counselor de HUD, al loan servicer ni a profesionales de título, legales, fiscales o financieros.
4. **Variables de la transacción**: Explica por qué el proceso puede variar (tipo de préstamo HECM vs propietario, HECM for Purchase vs vivienda existente, condiciones e instrucciones del prestamista, título y gravámenes preexistentes, tiempos y rescisión).
5. **Preparación para la conversación**: Puntos de partida prácticos para una consulta inicial (identificación de propiedad, contexto del préstamo, etapa actual y participantes).
6. **Consideraciones importantes**: Lista de orientación con 8 puntos útiles para tener a mano antes de consultar, sin exigir envío de documentos confidenciales.
7. **Cinco FAQs**: Preguntas y respuestas no repetitivas que aclaran la función de escrow, el proceso de cierre, los documentos necesarios, los responsables de coordinación y aprobación, y las diferencias frente al refinance tradicional.
8. **Servicio relacionado contextual**: Enlace editorialmente justificado hacia *Manufactured & Mobile Home Escrow*, explicando que cuando la propiedad involucra una casa manufacturada o móvil, aplican consideraciones adicionales de terreno, título y registro.
9. **Fuentes oficiales contextualizadas**: 5 fuentes gubernamentales (HUD HECM, CFPB compra con hipoteca inversa, CFPB documentos previos al cierre, CFPB derecho de rescisión y DFPI California información de escrow), presentadas como contexto informativo externo y no como socios o avales.
10. **CTA de contacto**: Bloque de conversión con teléfono directo (`tel:+17142657116`) y enlace a la sección de contacto del Home.

La redacción en español es una adaptación editorial cuidada; conserva términos técnicos necesarios como `HECM`, `lender`, `loan originator`, `servicer`, `counseling` y `escrow` en su debido contexto.

## 6. Requisitos SEO + AEO + GEO

### SEO on-page
- **Inglés**:
  - URL: `/services/reverse-mortgage-escrow/`
  - Title: `Reverse Mortgage Escrow Services | Downtown Community Escrow`
  - Meta Description: `Learn what reverse mortgage escrow coordinates, how closing differs from loan approval, and what to discuss with Downtown about an existing transaction.`
  - H1 único: `Reverse Mortgage Escrow Services`
  - Headings estructurados jerárquicamente (H1 → H2 → H3).
- **Español**:
  - URL: `/es/servicios/escrow-hipoteca-inversa/`
  - Title: `Escrow para hipoteca inversa | Downtown Community Escrow`
  - Meta Description: `Conoce qué coordina el escrow para una hipoteca inversa, cómo se diferencia de la aprobación del préstamo y qué consultar con Downtown.`
  - H1 único: `Escrow para hipoteca inversa`
- **Técnico**:
  - Canonical absoluto a producción para cada versión.
  - Hreflang recíproco `en`, `es` y `x-default` apuntando a la versión en inglés.
  - Directiva `robots`: `noindex, nofollow` activa.
  - Cero dependencias de enlaces hacia el hub retirado.

### AEO (Answer Engine Optimization)
- Respuestas directas, atómicas y visibles antes del acordeón de preguntas frecuentes.
- Desambiguación explícita entre el servicio de escrow de cierre neutral y las cuentas de reserva / LESA administradas por el servicer del préstamo.
- Distinción clara entre HECM asegurado por FHA, hipotecas inversas propietarias y HECM for Purchase.
- Cinco preguntas frecuentes precisas, exclusivas en el acordeón y legibles sin JavaScript mediante elementos nativos `<details>` y `<summary>`.

### GEO (Generative Engine Optimization)
- Identidad comercial inequívoca: `Downtown Community Escrow Services Inc.`.
- Ubicación oficial: `640 North Tustin Ave, Suite 202, Santa Ana, CA 92705`.
- Teléfono oficial: `(714) 265-7116` (`tel:+17142657116`).
- Señal local coherente de Santa Ana y Orange County, sin declarar cobertura estatal o nacional no confirmada.
- Distinción inequívoca de entidades regulatorias y participantes: HUD, FHA, CFPB, DFPI, DRE, lender, loan servicer, counselor aprobado por HUD y compañía de título.
- Sin atribución de licencias, capacidades de asesoría o resultados no documentados.

## 7. Pruebas ejecutadas y resultados

### 1. Astro Production Build
- Comando: `npm run build`
- Resultado: Exitoso (código 0). 10 páginas HTML estáticas generadas y 2 documentos HTML estáticos de redirección con meta refresh y noindex. Cero advertencias o errores.

### 2. Validador funcional y responsive (`scripts/validate-site.mjs`)
- Comando ejecutado contra servidor de vista previa en `http://127.0.0.1:4321`.
- Cobertura: 80 combinaciones (10 páginas en anchos 320, 390, 768, 880, 881, 1024, 1440 y 1920 CSS pixels).
- Métricas validadas:
  - Desbordamiento horizontal: `overflow = 0` en todas las combinaciones.
  - Texto recortado en hero: cero textos fuera de viewport.
  - H1 único por página y lenguaje correcto (`lang="en"`, `lang="es"`).
  - Metadatos: Title, description, `noindex, nofollow`, canonicals de producción y hreflang recíprocos con `x-default`.
  - Selector de idioma: enlaces bidireccionales correctos con `aria-current="page"`.
  - Navegación principal: enlaces y atributos consistentes en Home y especialidades.
  - Services disclosure: estado inicial colapsado e inerte, apertura interactiva con teclado (Enter, Space), cierre con Escape y retorno de foco, cierre por clic externo.
  - Submenú de especialidades: 4 enlaces activos (Manufactured, Short sale, Probate, Reverse mortgage) y 2 pendientes (Residential, Commercial).
  - Breadcrumbs: 2 niveles (`Home → Reverse Mortgage Escrow` / `Inicio → Escrow para hipoteca inversa`) coincidentes exactamente con el marcado estructurado `BreadcrumbList`.
  - FAQs: 5 items con comportamiento exclusivo al abrir/cerrar.
  - Enlaces internos: enlace a Manufactured Homes funcional; 5 fuentes oficiales con URLs HTTPS válidas.
  - Accesibilidad sin JavaScript: navegación visible, 4 enlaces accesibles y acordeón funcional.
  - Preferencias de movimiento reducido (`prefers-reduced-motion: reduce`): respetado.
  - Códigos de estado: 200 en páginas reales y redirecciones estáticas; 404 verificado en ruta inexistente `/services/not-a-real-specialty/`.
  - Errores de consola: `browserErrors = []` (cero errores en navegador).
  - Resultado final del validador: `failures = []` (aprobado 100%).

### 3. Suite Playwright (`scripts/review-alignment.mjs`)
- Configuración: `PLAYWRIGHT_MODULE_PATH` integrado y `QA_RUN_LABEL = 'reverse-mortgage-implementation-2026-10-28'`.
- Cobertura: 30 comprobaciones (20 páginas/viewports en 1440×900 y 390×844 + 10 comprobaciones sin JavaScript en móvil).
- Resultados: Cero errores (`errors = []`), cero fallos (`failures = []`).
- Capturas generadas y archivadas en `artifacts/reverse-mortgage-implementation-2026-10-28/`:
  - `home-en-1440.png`, `home-en-390.png`
  - `home-es-1440.png`, `home-es-390.png`
  - `manufactured-en-1440.png`, `manufactured-en-390.png`
  - `manufactured-es-1440.png`, `manufactured-es-390.png`
  - `short-sale-en-1440.png`, `short-sale-en-390.png`
  - `short-sale-es-1440.png`, `short-sale-es-390.png`
  - `probate-en-1440.png`, `probate-en-390.png`
  - `probate-es-1440.png`, `probate-es-390.png`
  - `reverse-mortgage-en-1440.png`, `reverse-mortgage-en-390.png`
  - `reverse-mortgage-es-1440.png`, `reverse-mortgage-es-390.png`
  - `playwright-report.json`

## 8. Pendientes empresariales

Antes de publicar o incorporar afirmaciones operativas detalladas, Downtown debe confirmar con documentación verificable:

1. Si acepta actualmente operaciones de reverse mortgage escrow de manera regular.
2. Si coordina préstamos HECM, productos propietarios, o ambos.
3. Si atiende operaciones de HECM for Purchase, transacciones sobre viviendas ya poseídas (refinance), o ambas.
4. Procedimiento formal de apertura, recepción y ejecución de instrucciones del prestamista.
5. Coordinación de gravámenes preexistentes, payoffs, firmas, desembolsos y plazos de rescisión cuando apliquen.
6. Licencia aplicable, número de licencia emitido por DFPI/DRE y fuente oficial para su verificación pública.
7. Identidad, roles y experiencia publicable de los oficiales de escrow a cargo de la especialidad.
8. Cobertura geográfica real (condados o jurisdicciones específicas) y disponibilidad de coordinación presencial vs. remota.
9. Estructura de tarifas y honorarios aplicables al cierre de una hipoteca inversa.
10. Revisión formal del contenido por parte del asesor legal o de cumplimiento de la empresa.

## 9. Riesgos y mitigaciones

- **Riesgo YMYL**: Los usuarios pueden confundir una empresa de escrow con un prestamista o asesor de hipotecas inversas.  
  *Mitigación*: Se estableció desde el primer párrafo del Hero y en el bloque de límites que Downtown presta únicamente servicios neutrales de coordinación de cierre; no origina, no aprueba ni asesora sobre préstamos.
- **Riesgo de ambigüedad de término**: Confundir el escrow de cierre con cuentas de reserva de impuestos y seguros (LESA).  
  *Mitigación*: Se redactó una aclaración explícita tanto en el Overview como en las FAQs diferenciando el closing escrow de los fondos administrados por el servicer.
- **Riesgo de generalización regulatoria**: Asumir que toda hipoteca inversa tiene 3 días de derecho de rescisión o sigue reglas HECM.  
  *Mitigación*: Se enfatiza la diferencia entre HECM y productos propietarios, así como las particularidades de HECM for Purchase frente a operaciones no destinadas a compra.
- **Riesgo de indexación prematura**:  
  *Mitigación*: La directiva `<meta name="robots" content="noindex, nofollow" />` se mantiene estrictamente activa en las 10 páginas del proyecto.

## 10. Conclusión y estado final

La especialidad **Reverse Mortgage Escrow EN/ES** está 100% completada, integrada y validada técnicamente. El proyecto cuenta ahora con 10 páginas bilingües funcionales, libre de errores y regresiones, y alineado con los criterios de aceptación y los planes de investigación aprobados.

