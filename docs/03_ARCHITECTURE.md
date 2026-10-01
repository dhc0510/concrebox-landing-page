# Arquitectura

## Resumen

Aplicación frontend en Next.js con App Router, React, TypeScript, Tailwind CSS, CSS personalizado, Framer Motion y Lucide Icons. Se exporta como sitio estático y se aloja en Hostinger.

## Componentes y responsabilidades

- `app/layout.tsx`: metadata global, viewport, fuentes, estilos globales y JSON-LD.
- `app/page.tsx`: página principal que monta la landing.
- `components/LandingPage.tsx`: composición general de secciones principales.
- `components/CatalogSection.tsx`: usa siempre la colección vigente de 23 modelos de ambos PDF, sin estado ni selector de año; administra los demás filtros y el modal.
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

La preferencia visual se guarda en `localStorage` bajo `concrebox-theme`. Sin elección guardada se sigue el tema del sistema. `public/theme-init.js` aplica el tema antes del primer pintado, sincroniza pestañas y tolera almacenamiento bloqueado; `ThemeToggle` se suscribe mediante `useSyncExternalStore`. Los datos del catálogo siguen versionados en `data/catalog.ts`.

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

## Mantenimiento de dependencias

Next.js y eslint-config-next usan la rama compatible 16.3.4; el override de sharp es 0.35.4. El lockfile registra las correcciones de seguridad sin modificar la arquitectura estática.

## Recuperación FTP — 2026-09-10

La ejecución 34551706055 pasó todos los controles y falló al reemplazar `404/index.html` (FTP 550: ruta inexistente). Se usa `.ftp-deploy-sync-state-v2.json` para reconstruir el seguimiento remoto y crear de nuevo los directorios del export. Se mantiene este nombre en despliegues posteriores; no se activa borrado total. Los archivos históricos fuera del nuevo inventario permanecen en el servidor.

## Navbar transparente — 2026-09-11

Se recuperan los estilos originales del navbar en globals.css: transparente al inicio, línea inferior tenue y fondo oscuro translúcido con desenfoque al superar 36 px de scroll. Se conservan el selector día/noche, su espacio responsive y los demás cambios. El botón del tema usa un acabado transparente con texto blanco dentro del navbar.


## Parche necesario para publicar — 2026-10-01

Se actualizan Next.js y eslint-config-next de 16.3.4 a 16.3.6 para corregir GHSA-vcvr-r3jv-pc5j, detectado por el control de producción del despliegue. Se mantiene el umbral de auditoría y el flujo de Hostinger. Auditoría de producción: 0 vulnerabilidades. Compilación estática y lint comprobados; no se cambian componentes ni estilos. La auditoría completa conserva un aviso en brace-expansion, dependencia de desarrollo fuera de este cambio.
