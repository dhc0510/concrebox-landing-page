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
- `.github/workflows/deploy-hostinger.yml` ejecuta `npm ci`, validación documental, build y deploy FTP.
- Producción se sirve desde `/domains/concreboxpty.com/public_html/` en Hostinger.

## Seguridad

- No se versionan secretos FTP; se usan GitHub Actions secrets.
- No hay archivos `.env` requeridos para la versión actual.
- Links externos deben usar prácticas seguras cuando abran nueva pestaña.

## Dependencias importantes

- `next`, `react`, `react-dom`.
- `framer-motion` para animaciones.
- `lucide-react` para iconos.
- `@fontsource/manrope` y `@fontsource/playfair-display` para fuentes.

## Decisiones pendientes

- Pendiente de confirmar: estrategia de pruebas automatizadas.
- Pendiente de confirmar: monitoreo o analítica de producción.
