# Estado actual

Estado vigente del proyecto. Mantener breve y orientado a lo que funciona hoy.

## Qué funciona

- Landing page en Next.js con exportación estática.
- Diseño responsive premium para CONCREBOX PTY.
- Navbar, hero, beneficios, sistema constructivo, catálogo, proceso, inversión, galería, testimonios, FAQ, contacto y footer.
- Catálogo de modelos con filtros, cards, slider por modelo y modal/lightbox.
- CTAs hacia WhatsApp.
- Metadatos SEO/sociales, canonical de producción, `robots.txt`, `sitemap.xml`, JSON-LD y checks `seo:*`.
- Imágenes principales de la landing optimizadas en JPG para reducir peso sin cambiar la dirección visual.
- Base de seguridad para sitio estático: headers en `.htaccess`, checks `security:*`, audit de dependencias de producción y documentación en `docs/SECURITY.md`.
- Deploy automático a Hostinger desde GitHub Actions cuando se hace push a `main`.
- Sistema de documentación continua en `docs/` con `AGENTS.md`, scripts `docs:*`, hook versionado y validación en CI.

## En desarrollo

- No hay una funcionalidad de aplicación marcada como en desarrollo en este momento.

## Pendiente

- Activar localmente el hook con `git config --local core.hooksPath .githooks` si el usuario lo aprueba.
- Confirmar manualmente previews sociales después de que WhatsApp/Facebook refresquen caché.
- Validar PageSpeed Insights y Rich Results Test tras el próximo deploy.
- Evaluar compresión web de planos del catálogo si el rendimiento móvil lo requiere.
- Pendiente de confirmar: agregar pruebas automatizadas visuales o e2e si el proyecto lo requiere.

## Bloqueos y riesgos conocidos

- Las plataformas sociales pueden cachear Open Graph; un preview viejo no siempre indica metadata incorrecta.
- Hay assets pesados no referenciados en `public/images/`; no afectan la carga principal, pero aumentan el tamaño potencial de deploy si se sube todo `public/`.
- Hostinger depende de secrets FTP en GitHub Actions; no deben documentarse valores sensibles.
- `npm run start` no representa el modo de producción real en Hostinger Single, porque producción sirve archivos estáticos de `out/`.
- `npm audit` completo mantiene un hallazgo dev-only por `brace-expansion` vía ESLint; producción pasa con `npm run security:audit-deps`.
- Los headers están configurados en `.htaccess`, pero su presencia en producción debe verificarse con autorización para consultar el dominio.

## Próximos pasos priorizados

1. Activar el hook local solo con autorización del usuario.
2. Verificar headers reales en producción con autorización del usuario.
3. Usar `npm run docs:status` al iniciar tareas con cambios en el árbol.
4. Revisar assets pesados no referenciados y limpiar solo con confirmación del usuario.
5. Definir si el proyecto necesita pruebas visuales o e2e.

## Última verificación relevante

- Confirmado en esta tarea: `npm run build`, `npm run seo:check`, `npm run seo:links`, `npm run seo:assets`, `npm run seo:build`, `npm run seo:sitemap`, `npm run security:check`, `npm run security:headers`, `npm run security:audit-deps`, `npm run docs:sync`, `npm run docs:check` y `npm run lint`.
