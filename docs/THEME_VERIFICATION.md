# Verificación del modo día y noche

Fecha: 2026-09-10. Entorno: desarrollo local y exportación estática de producción.

## Comportamiento

- Botón con iconos sol/luna y nombre accesible que describe el modo de destino.
- Preferencia guardada en `concrebox-theme`; sin elección se sigue el sistema.
- Cambios del sistema, sincronización entre pestañas y almacenamiento bloqueado cubiertos por `node scripts/theme-check.mjs`.
- Script local de inicialización anterior al pintado; sin dependencias nuevas ni cambios en los archivos fotográficos.

## Pruebas realizadas

- Cambio día/noche en navegador y recarga: permanece el modo elegido.
- Catálogo de escritorio revisado visualmente en ambos modos.
- Móvil: menú abre, navega al catálogo y cierra; búsqueda Barva devuelve una ficha; limpiar restaura las 14.
- Modal móvil: abre en ambos modos, cambia a plano completo y cierra. Imagen WebP completa cargada correctamente, sin filtros de color.
- Preguntas frecuentes: expansión y texto legible en modo noche.
- Contacto y menú nocturnos revisados visualmente en tablet/móvil.
- Anchos revisados: 320, 390, 768, 1101, 1280 y 1440 px; sin desbordamiento horizontal de la página. El punto de cambio del menú mantiene separados navegación y acciones.
- Consola del navegador sin errores durante las interacciones revisadas.
- `npm run lint`, `npm run build`, `npm run security:check`, `npm run seo:check`, `node scripts/catalog-check.mjs` y `node scripts/theme-check.mjs`: correctos.

SEO mantiene un aviso previo sobre assets históricos pesados no referenciados; no corresponden a la carga del selector. La revisión responsive usa emulación de tamaño en el navegador, no dispositivos físicos.

## Entrega local

Servidor de desarrollo en `http://localhost:3000/`. No se publicó en producción. Identidad Git local configurada con los datos autorizados por el usuario. Catálogo registrado en `9767f26`; el tema se registra en un commit local separado.

## Transición de tema — 2026-09-11

Cambio de colores y superficies en 260 ms con ease-in-out. `theme-init.js` activa un atributo temporal durante 320 ms y lo renueva ante cambios rápidos. La carga inicial aplica el tema directamente. Se respetan las preferencias de movimiento reducido; al terminar se restauran las transiciones de interacción existentes. Fotografías y dimensiones no se animan.
