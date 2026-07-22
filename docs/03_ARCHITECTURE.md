# Arquitectura

## Resumen

Aplicación frontend en Next.js con App Router, React, TypeScript, Tailwind CSS, CSS personalizado, Framer Motion y Lucide Icons. Se exporta como sitio estático y se aloja en Hostinger.

## Componentes y responsabilidades

- `app/layout.tsx`: metadata global, viewport, fuentes, estilos globales y JSON-LD.
- `app/page.tsx`: página principal que monta la landing.
- `components/LandingPage.tsx`: composición general de secciones principales.
- `components/CatalogSection.tsx`: estado del catálogo, filtros y modal.
- `components/ModelCard.tsx`: card de modelo con slider, características y CTA.
- `components/ModelFilters.tsx`: filtros del catálogo.
- `components/ModelGalleryModal.tsx`: lightbox accesible.
- `components/Reveal.tsx`: animaciones de aparición.
- `data/catalog.ts`: datos editables de modelos.
- `public/`: imágenes, favicon, robots y sitemap.
- `public/.htaccess`: redirección HTTPS y headers de seguridad para Hostinger/Apache.
- `scripts/security-check.mjs`: validaciones deterministas de seguridad estática.
- `scripts/seo-tools.mjs`: validaciones deterministas de SEO técnico, links, sitemap y assets.

## Flujo principal

1. El usuario entra a `https://concreboxpty.com/`.
2. Next sirve HTML/CSS/JS estático generado en `out/`.
3. React hidrata interacciones del catálogo, navegación, modal y animaciones.
4. Los CTAs externos llevan a WhatsApp u otros canales de contacto.

## Persistencia

No hay persistencia en la aplicación. Los datos del catálogo están versionados en `data/catalog.ts`.

## Autenticación y autorización

No aplica en el alcance actual.

## Integraciones externas

- WhatsApp mediante enlaces `wa.me`.
- Instagram y correo mediante enlaces externos.
- GitHub Actions para build/deploy.
- Hostinger FTP para publicación.

## Infraestructura y despliegue

- `next.config.ts` usa `output: "export"` e imágenes sin optimización remota para generar sitio estático.
- `.github/workflows/deploy-hostinger.yml` ejecuta `npm ci`, validación documental, validación de seguridad, audit de dependencias de producción, build, validación SEO del output y deploy FTP.
- Producción se sirve desde `/domains/concreboxpty.com/public_html/` en Hostinger.

## SEO y rendimiento

- `app/layout.tsx` define metadata global, canonical, Open Graph, Twitter Card y JSON-LD.
- El JSON-LD usa un grafo con `WebSite`, `HomeAndConstructionBusiness` y `FAQPage`.
- `public/robots.txt` apunta al sitemap de producción.
- `public/sitemap.xml` contiene la URL canónica principal.
- Las imágenes principales de landing usan variantes `*-optimized.jpg` para reducir peso en el render inicial y se mantienen los PNG originales como assets históricos.
- `npm run seo:check` valida el export estático en `out/` después del build.

## Seguridad

- No se versionan secretos FTP; se usan GitHub Actions secrets.
- No hay archivos `.env` requeridos para la versión actual.
- Links externos deben usar prácticas seguras cuando abran nueva pestaña.
- `.gitignore` ignora `.env` y `.env.*`.
- `public/.htaccess` configura HSTS, CSP, frame-ancestors, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy y deshabilita listado de directorios.
- `npm run security:check` valida sinks DOM peligrosos, enlaces `target="_blank"`, headers esperados, URLs no HTTPS no permitidas, secretos obvios y presencia de checks en CI.

## Dependencias importantes

- `next`, `react`, `react-dom`.
- `framer-motion` para animaciones.
- `lucide-react` para iconos.
- `@fontsource/manrope` y `@fontsource/playfair-display` para fuentes.
- `overrides.minimatch` se usa para mantener auditoría completa limpia en tooling de lint.

## Decisiones pendientes

- Pendiente de confirmar: estrategia de pruebas automatizadas.
- Pendiente de confirmar: monitoreo o analítica de producción.
