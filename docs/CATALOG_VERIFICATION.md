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

- El catálogo vigente reemplaza los modelos anteriores y contiene 14 fichas, sin selector de año.
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
