# Verificación del catálogo

Fuente: `CATALOGO CONCREBOX PTY 2026.pdf`, 30 páginas, aportado por el usuario. Revisión: 2026-09-10.

SHA-256: `BBE8D8E5DC62B973BAF56414788F74BE1C575CC5409FAEF3C5C553AF67B836DD`.

Se revisaron visualmente las páginas 1-30 y se cotejó el texto extraíble de las distribuciones. Los nombres, áreas y precios están mayoritariamente rasterizados en el PDF, por lo que se transcribieron de la revisión visual, no del catálogo anterior. Las páginas 1 y 30 son presentación e inspiración, no modelos adicionales.

| Modelo | Páginas fachada / plano | Área cerrada m² | Terraza m² | Precio B/. | Recámaras | Baños |
| --- | --- | ---: | ---: | ---: | --- | ---: |
| Barva | 2 / 3 | 21.01 | 3.09 | 24,274.00 | 1 | 1 |
| Zurquí | 4 / 5 | 22.32 | 3.78 | 28,692.00 | 1 | 1 |
| Orosí | 6 / 7 | 22.32 | 3.78 | 28,692.00 | 1 | 1 |
| Tilarán | 8 / 9 | 22.32 | 3.78 | 28,692.00 | 1 | 1 |
| Upala | 10 / 11 | 25.11 | 3.19 | 31,356.50 | 1 | 1 |
| Talamanca | 12 / 13 | 38.34 | 21.24 | 61,083.00 | 1 | 1 |
| Turrialba | 14 / 15 | 40.23 | 25.12 | 66,360.50 | 1 | 1 |
| Tenorio | 16 / 17 | 50.83 | 27.42 | 80,390.50 | 2 | 1 |
| Tapantí | 18 / 19 | 51.66 | 27.48 | 81,393.00 | 2 | 2 |
| Irazú | 20 / 21 | 63.58 | 12.10 | 82,797.00 | 2 | 2 |
| Miravalles | 22 / 23 | 74.85 | 18.45 | 106,369.00 | 2 | 2 |
| Arenal | 24 / 25 | 74.85 | 27.50 | 108,077.50 sin piscina | 2 | 1 |
| Poás | 26 / 27 | 79.50 | 22.48 | 109,409.00 | 2 | 1 |
| Térraba | 28 / 29 | 125.46 | 8.40 | 177,295.00 | 2 + 1 de servicio | 3 |

## Precisiones de contenido

- La incorporación inicial contenía 14 fichas. Desde 2026-09-11 se suman las 9 casas del PDF 2025: 23 modelos, sin selector de año.
- Turrialba: corregido el precio anterior de 80,390.50 a 66,360.50 según página 15.
- Barva: 21.01 m² corresponden al área cerrada, según página 2.
- Térraba: garaje adicional de 32.87 m²; el filtro de tres dormitorios cuenta la recámara de servicio y la ficha explica la distribución exacta.
- Arenal: la piscina aparece en fachada, plano y distribución, pero queda excluida expresamente del precio. El filtro Piscina encuentra este diseño.
- Miravalles: baños y walk-in closets se presentan como características separadas, conforme al plano de página 23.
- Orosí: se incluyen ambas variantes de piedra. Upala incluye tres exteriores y Térraba incluye dos fachadas y dos interiores, siempre extraídos de sus propias páginas.
- Se conservaron los planos originales completos con las cotas y textos en su orientación legible; algunas colocaciones del PDF están rotadas. No se redibujaron ni se inventaron imágenes.
- Las áreas se transcriben de los encabezados oficiales, sin recalcular superficies a partir de renders o sumar terraza/garaje al área cerrada.
- La disponibilidad inmediata de Upala no se presenta como inventario vigente: es una afirmación temporal del PDF.
- Compactos es un criterio de navegación de la web (área cerrada menor de 60 m²), no una categoría declarada por el PDF. El orden por área usa área cerrada.

## Imágenes y carga

34 imágenes originales extraídas del PDF: 14 planos y 20 fotos, incluidas variantes e interiores. Carpeta: `public/images/catalog/verified/`.

- Fotos ampliadas: WebP calidad 92 y dimensiones originales, sin ampliación artificial.
- Planos ampliados: WebP sin pérdida, píxeles originales verificados.
- Tarjetas: WebP calidad 90, hasta 960 px; solo se monta la vista activa, con carga diferida.
- Miniaturas del modal: WebP hasta 240 px, calidad 85.
- Las tarjetas no cargan todos los planos ni las imágenes completas ocultas. La galería solicita la imagen completa al abrirla.
- Se mantienen los assets anteriores sin referenciarlos desde el catálogo; no se borraron archivos históricos.

## Validación

La tabla anterior sirve como referencia independiente para cotejar `data/catalog.ts`. La revisión incluye correspondencia visual de las 34 imágenes extraídas, integridad de archivos, compresión sin pérdida de los 14 planos, filtros y galería en navegador, y diseño de escritorio y móvil de 390 px.

## Segunda revisión independiente (2026-09-10)

- Se volvió a leer el texto de las distribuciones del PDF y a revisar visualmente las 30 páginas, sin tomar el resultado del primer chequeo como evidencia suficiente.
- Resultado: los 14 modelos están presentes, sin duplicados. Todos los nombres, precios, áreas cerradas, terrazas, recámaras y baños coinciden con la fuente; Térraba también conserva los 32.87 m² de garaje y la recámara de servicio.
- Se encontraron dos omisiones en los resúmenes: la circulación central de Arenal (página 24) y de Poás (página 26). Ambas se incorporaron a sus descripciones. La circulación de Tenorio ya estaba presente.
- Se cotejaron todas las características de distribución; se aceptan agrupaciones equivalentes como sala y comedor, o lavandería y depósito. El comedor repetido en la lista de Poás no representa un segundo ambiente adicional.
- Se volvió a extraer cada una de las 34 imágenes desde su página exacta del PDF, se aplicó la codificación documentada y se compararon los bytes con los archivos completos publicados: 34/34 coinciden. Esto incluye las variantes de Orosí, Upala y Térraba y los 14 planos.
- Se amplió `scripts/catalog-check.mjs` con una lista de distribución por casa, detección de modelos duplicados y asociación de rutas de imágenes a su modelo.
- Upala: la descripción resume el uso del modelo; la disponibilidad inmediata del PDF sigue pendiente de confirmación comercial, como se explica arriba. No se presenta como disponibilidad actual garantizada.

## Incorporación del PDF 2025 — 2026-09-11

Fuente: `CATALOGO CONCREBOX 2025(1).pdf`, 20 páginas. SHA-256: `a11d4a69b028ee0d4e83bd80c1f72df242433c652c4427a667ee7ddb0caa11b9`. Páginas 1-2: portada y presentación. Se revisaron visualmente todas las fichas y planos de páginas 3-20.

| Casa | Páginas | Área publicada m² | Precio B/. | Dormitorios | Baños |
| --- | --- | ---: | ---: | ---: | ---: |
| Bangkok | 3-4 | 44 | 48,365.50 | 1 | 1 |
| Singapur | 5-6 | 44 | 51,639.00 | 1 | 1 |
| New York | 7-8 | 67 | 71,561.00 | 2 | 1 |
| Dubái | 9-10 | 106 | 114,590.00 | 3 | 2 |
| Estambul | 11-12 | 119 | 114,000.00 | 3 | 1 |
| París | 13-14 | 122 | 115,688.00 | 2 | 1 |
| Londres | 15-16 | 132 | 137,805.00 | 2 | 1 |
| Tokio | 17-18 | 99.23 | 95,641.50 | 2 | 1 |
| Hawai | 19-20 | 72 + piscina 12 | 80,908.00 | 2 | 2 |

- Corrección explícita del usuario: Singapur tiene 1 dormitorio y 1 baño; Tokio, 2 dormitorios y 1 baño. Estas cifras prevalecen sobre los planos contradictorios. Se conservan los planos originales sin redibujarlos.
- El PDF 2025 presenta área global, no área cerrada: se conserva la etiqueta Área y no se inventa un desglose. Hawai añade 12 m² de piscina; no se afirma que esté excluida del precio.
- Dubái incorpora cochera y pórtico; no se clasifica el pórtico como terraza. Tokio incluye el área de pilas visible en su plano.
- Se añaden 18 imágenes extraídas de las páginas rasterizadas originales de 2481 × 3509 px, recortando solo la fachada o plano correspondiente. Se conservan las cotas de los planos.
- 54 WebP nuevos: completos (fotos calidad 92, planos sin pérdida verificados píxel a píxel), tarjetas hasta 960 px y miniaturas hasta 240 px. No se agregan los 59 MB del PDF al sitio.
- Total combinado: 23 modelos, 52 vistas y 156 variantes. Orden inicial y al limpiar filtros: precio ascendente; todos los demás filtros permanecen disponibles.

### Validación de la ampliación

Build, lint, security:check, seo:check, docs:check y catalog-check correctos. Navegador: 23 precios en orden ascendente; selección y limpieza de orden; búsqueda Singapur y Tokio; filtro Piscina devuelve Hawai/Arenal y Cochera devuelve Dubái/Térraba; modal móvil con plano; escritorio 1280 px y móvil 390 px sin desbordamiento horizontal. Consola sin errores en las interacciones revisadas.


## Actualización exclusiva de Upala — 2026-10-01

- Fuente vigente para Upala: ficha PNG de 454 × 825 px adjunta por el usuario; sustituye sus vistas del PDF 2026. Área cerrada 25.11 m², terraza 3.19 m², precio B/. 31,356.50, un dormitorio, un baño, cocina y terraza posterior.
- Tres exteriores mejorados con la herramienta integrada de imágenes y revisados visualmente contra la referencia. Son reconstrucciones asistidas para mejorar nitidez desde una fuente pequeña; no equivalen a fotografías originales de alta resolución. Instrucción: conservar encuadres, geometría, cubierta, puertas y ventanas sin rediseñar la casa.
- Plano recortado de la ficha original, sin generación ni modificación de cotas; WebP sin pérdida comprobado píxel a píxel. Su detalle sigue limitado por la resolución original.
- Nuevas rutas `upala-20261001-*` evitan reutilizar imágenes antiguas desde caché. Variantes de tarjeta, miniatura y ampliación; foto principal de tarjeta 92,052 bytes. Se conserva la carga diferida existente.
- Los otros 22 registros del catálogo y los componentes, filtros, orden, temas y diseño permanecen iguales.

Validación 2026-10-01: comparación estructural de los otros 22 modelos contra HEAD sin diferencias; catálogo de 23 registros correcto. Chromium/Edge automatizado: búsqueda, cuatro imágenes, apertura/cierre de galería y anchuras 1440, 768 y 390 px sin desbordamiento horizontal ni errores JavaScript. Build, lint, controles de seguridad, auditoría de producción y comprobaciones documentales correctos.
