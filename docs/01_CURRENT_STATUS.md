# Estado actual

Estado vigente del proyecto. Mantener breve y orientado a lo que funciona hoy.

## Qué funciona

- Landing page en Next.js con exportación estática.
- Diseño responsive premium para CONCREBOX PTY.
- Navbar, hero, beneficios, sistema constructivo, catálogo, proceso, inversión, galería, testimonios, FAQ, contacto y footer.
- Catálogo unificado con los 23 modelos de ambos PDF visibles inicialmente, ordenados por precio ascendente, sin selector de año. Conserva búsqueda, filtros por tipo, dormitorios, amenidades y precio, ordenamiento, cards, slider y modal/lightbox.
- CTAs hacia WhatsApp.
- Metadatos SEO/sociales, canonical de producción, `robots.txt`, `sitemap.xml`, JSON-LD y checks `seo:*`.
- Imágenes principales de la landing optimizadas en JPG para reducir peso sin cambiar la dirección visual.
- Base de seguridad para sitio estático: headers en `.htaccess`, checks `security:*`, audit de dependencias de producción y documentación en `docs/SECURITY.md`.
- Auditoría completa de dependencias sin vulnerabilidades moderadas/altas tras override de `minimatch`.
- Deploy automático a Hostinger desde GitHub Actions cuando se hace push a `main`.
- Sistema de documentación continua en `docs/` con `AGENTS.md`, scripts `docs:*`, hook versionado y validación en CI.

## En desarrollo

- No hay una funcionalidad de aplicación marcada como en desarrollo en este momento.

## Pendiente

- Activar localmente el hook con `git config --local core.hooksPath .githooks` si el usuario lo aprueba.
- Confirmar manualmente previews sociales después de que WhatsApp/Facebook refresquen caché.
- Validar PageSpeed Insights y Rich Results Test tras el próximo deploy.
- Catálogo revisado contra el PDF: ver `docs/CATALOG_VERIFICATION.md`; planos WebP sin pérdida y fotos optimizadas.
- Pendiente de confirmar: agregar pruebas automatizadas visuales o e2e si el proyecto lo requiere.

## Bloqueos y riesgos conocidos

- Las plataformas sociales pueden cachear Open Graph; un preview viejo no siempre indica metadata incorrecta.
- Hay assets pesados no referenciados en `public/images/`; no afectan la carga principal, pero aumentan el tamaño potencial de deploy si se sube todo `public/`.
- Hostinger depende de secrets FTP en GitHub Actions; no deben documentarse valores sensibles.
- `npm run start` no representa el modo de producción real en Hostinger Single, porque producción sirve archivos estáticos de `out/`.
- Los headers están configurados en `.htaccess`, pero su presencia en producción debe verificarse con autorización para consultar el dominio.

## Próximos pasos priorizados

1. Activar el hook local solo con autorización del usuario.
2. Verificar headers reales en producción con autorización del usuario.
3. Usar `npm run docs:status` al iniciar tareas con cambios en el árbol.
4. Revisar assets pesados no referenciados y limpiar solo con confirmación del usuario.
5. Definir si el proyecto necesita pruebas visuales o e2e.

## Última verificación relevante

- Confirmado en esta tarea: `npm ci`, `npm run build`, `npm run lint`, `npm audit --audit-level=moderate`, `npm run security:audit-deps`, `npm run security:check`, `npm run security:headers`, `npm run seo:check`, `npm run seo:links`, `npm run seo:assets`, `npm run seo:build`, `npm run seo:sitemap`, `npm run docs:check` y smoke headless con Edge contra `out/` servido localmente.

- Catálogo 2026-09-10: build, lint, seguridad, SEO, docs y cotejo de 14 fichas; revisión visual de PDF completo, imágenes extraídas, escritorio y móvil. Validación píxel a píxel de 14 planos completos. Identidad Git local configurada con los datos autorizados; catálogo registrado en el commit `9767f26`.
- Segunda revisión del catálogo: 14/14 fichas y 34/34 imágenes cotejadas de nuevo con el PDF; completadas las descripciones de circulación de Arenal y Poás.

## Modo día y noche — 2026-09-10

Selector disponible en escritorio y móvil, con preferencia persistente y tema inicial del sistema. Paletas completas para secciones, catálogo, navegación y visores, manteniendo los colores originales de las fotografías. Verificación detallada en [THEME_VERIFICATION.md](THEME_VERIFICATION.md).

## Corrección del despliegue — 2026-09-10

La ejecución 34551396726 falló en Audit dependencies antes de compilar o desplegar. Se actualizan Next.js y eslint-config-next a 16.3.4, sharp a 0.35.4 y las dependencias transitivas afectadas; se conserva la auditoría obligatoria.

Validación local de la corrección: build, lint, security:check, auditoría de producción (0 vulnerabilidades), pruebas de catálogo y tema, SEO y docs:check correctos.

## Recuperación FTP — 2026-09-10

La ejecución 34551706055 pasó todos los controles y falló al reemplazar `404/index.html` (FTP 550: ruta inexistente). Se usa `.ftp-deploy-sync-state-v2.json` para reconstruir el seguimiento remoto y crear de nuevo los directorios del export. Se mantiene este nombre en despliegues posteriores; no se activa borrado total. Los archivos históricos fuera del nuevo inventario permanecen en el servidor.
