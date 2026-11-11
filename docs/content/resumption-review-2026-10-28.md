# Reanudación y cierre de alineación estratégica

28 de octubre de 2026. Proyecto activo: downtown_v2. Alcance: Home, Manufactured Homes y Short Sale en inglés y español. Sin publicación ni páginas nuevas.

## Estado recuperado

Los cambios editoriales principales ya estaban guardados al comenzar esta reanudación. La investigación original, su conciliación y la muestra complementaria estaban incorporadas en docs/research/. Se compararon las tres copias con los originales normalizando saltos de línea y espacios finales: las tres coinciden. No se sobrescribieron las referencias.

También estaban terminados los ajustes en site.ts, manufacturedHomes.ts y shortSale.ts: explicación de servicios en Home, descripciones diferenciadas de tarjetas, introducciones más concretas, preparación de consulta y CTA más directos. Las dos especialidades tenían cinco FAQs por idioma tras eliminar preguntas duplicadas. La matriz estratégica y los briefs ya reflejaban esos cambios.

Git está disponible, pero `git rev-parse --show-toplevel` confirma que esta carpeta no pertenece a un repositorio. No se inicializó, limpió ni modificó ninguno. Por ello no se atribuye una comparación completa contra un commit anterior; la recuperación se basó en lectura de fuentes, documentos, fechas y resultados nuevos.

Las capturas anteriores eran del 27 de octubre y precedían a los últimos cambios editoriales documentados. No se utilizaron como validación del estado final.

## Pendientes completados

1. **Validador desactualizado:** esperaba seis FAQs e intentaba enfocar una sexta pregunta inexistente. Se ajustó a las cinco preguntas aprobadas, se utiliza la cantidad real para recorrerlas y se comprueba interacción en las dos especialidades y ambos idiomas. No se restauraron preguntas redundantes para satisfacer una prueba antigua.
2. **Arquitectura documental:** se corrigió la referencia a seis FAQs de Short Sale para que indique cinco.
3. **Recorte móvil real:** la revisión visual mostró que el hero de Manufactured Homes en español excedía su columna y quedaba recortado por el overflow decorativo. La ausencia de scroll horizontal no detectaba el problema. Se añadió min-width: 0 al contenido, un track minmax(0, 1fr) en móvil, ajuste de palabras como protección y tamaño responsive específico para titulares españoles largos. Poppins, colores, fotografías, decoración y estructura se conservan.
4. **Prueba contra recorte interno:** el validador y Playwright comprueban los rectángulos del texto del hero, además del ancho del documento. Esto evita dar por correcto texto oculto fuera del viewport.
5. **Evidencia reproducible:** se añadió scripts/review-alignment.mjs con Playwright para capturas, metadatos, idiomas, FAQs, carga real de imágenes y navegación sin JavaScript.

## Validación final

- Astro build: correcto, seis páginas reales y dos documentos HTML de redirección heredados.
- Validador existente ampliado: 48 combinaciones, seis páginas en 320, 390, 768, 880, 881, 1024, 1440 y 1920 px; sin fallos ni errores de página/consola capturados.
- Playwright: 12 recorridos de página/viewport en 1440 y 390 px, más seis recorridos sin JavaScript en móvil; 18 registros aprobados.
- Comprobados: HTTP 200, un H1, títulos únicos, descripción, canonical, alternates en/es/x-default exactos, noindex/nofollow, cambio de idioma a la página equivalente, cinco FAQs por especialidad y cuatro en Home, apertura exclusiva y cierre de respuesta activa, imágenes cargadas y texto del hero dentro del viewport.
- El validador adicional comprueba menú y submenú, teclado, Escape escalonado, foco, inert, breakpoint 880/881, reduced motion, enlaces locales, disponibilidad de especialidades, footer y redirecciones estáticas.
- Se guardaron 12 capturas completas nuevas. Se revisó visualmente la composición general y el detalle del hero español afectado.
- Las imágenes lazy se recorren y decodifican antes de evaluar su carga. Una imagen aún fuera del viewport no se confunde con un recurso roto.
- Los mensajes de diagnóstico del proceso Chrome sobre su actualizador no son errores de consola del sitio; quedan en validator-stderr.log para trazabilidad.

Evidencia: `artifacts/alignment-review-2026-10-28/validator-report.json`, `playwright-report.json` y capturas en esa misma carpeta. Estas evidencias sustituyen las capturas anteriores únicamente para esta revisión; los archivos históricos se conservan.

## Archivos de esta reanudación

- src/styles/global.css: corrección responsive acotada del hero.
- scripts/validate-site.mjs: cinco FAQs, recorrido bilingüe y detección de recorte.
- scripts/review-alignment.mjs: revisión Playwright y capturas.
- docs/site-architecture.md: número vigente de preguntas.
- README.md y docs/content/competitive-content-alignment.md: enlace al cierre y evidencia actual.
- docs/content/resumption-review-2026-10-28.md: este informe.
- dist y artifacts: salida de build, reportes y capturas nuevas.

Los archivos editoriales TS se conservaron durante esta reanudación: sus ajustes ya estaban terminados. No se modificó business.ts, URLs, metadatos, schema, fotos, selector ni estado de publicación.

## Repetir las pruebas

Con una vista previa activa en 127.0.0.1:4321, ejecutar el script existente `scripts/validate-site.mjs` y `scripts/review-alignment.mjs` mediante Node 24+. El segundo requiere una instalación existente de Playwright. En esta revisión se utilizó el paquete incluido en el entorno de Codex, indicado mediante PLAYWRIGHT_MODULE_PATH; no se instaló Playwright ni se modificaron dependencias de downtown_v2. CHROME_PATH permite indicar otro ejecutable Chrome existente. QA_RUN_LABEL permite guardar una ejecución posterior en otra carpeta de artifacts.

## Límites y siguiente fase

La alineación editorial se considera terminada dentro de la evidencia disponible. Continúan pendientes la confirmación de cobertura operativa, licencias/credenciales, personas y responsabilidades, procedimientos, documentos exigidos, tarifas, horarios, tiempos, imágenes definitivas y canal de formulario. La muestra competitiva sigue siendo cualitativa, sin métricas de demanda o rendimiento verificadas.

Services sigue como botón; solo Manufactured y Short Sale enlazan. Las cuatro especialidades restantes siguen pendientes; Resources y Agents & Lenders ocultos. Las rutas heredadas son redirecciones HTML/HTTP 200 en Preview, no 301/302. Indexabilidad y hosting se resolverán antes de un lanzamiento autorizado.

Probate no se desarrolló. Puede ser la siguiente fase editorial/técnica con su brief y las referencias consolidadas, manteniendo separadas autoridad sucesoria, coordinación de escrow y requisitos de cada jurisdicción. No se declaran mejoras de rankings, conversiones, AEO o GEO sin datos posteriores.

Vista previa local: http://127.0.0.1:4321/ .
