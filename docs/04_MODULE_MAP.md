# Mapa de módulos

Este mapa ayuda a localizar código sin escanear todo el repositorio.

## Rutas de alto nivel detectadas

<!-- AUTO-GENERATED:START rutas-alto-nivel -->
Contenido administrado automáticamente. No editar dentro de los marcadores.

- `.githooks/` — ruta detectada
- `.github/` — ruta detectada
- `app/` — ruta detectada
- `components/` — ruta detectada
- `data/` — ruta detectada
- `docs/` — ruta detectada
- `public/` — ruta detectada
- `scripts/` — ruta detectada
<!-- AUTO-GENERATED:END rutas-alto-nivel -->

## Mapa funcional

| Área | Ruta relativa | Responsabilidad | Entradas principales | Consumidores |
| --- | --- | --- | --- | --- |
| App shell | `app/layout.tsx` | Metadata, fuentes, estilos y schema | Metadata del negocio | Todo el sitio |
| Página principal | `app/page.tsx` | Render de la landing | `LandingPage` | Next.js |
| Landing | `components/LandingPage.tsx` | Secciones principales y CTAs | Imágenes públicas, copy del negocio | `app/page.tsx` |
| Catálogo | `components/CatalogSection.tsx` | Filtros, resultados y modal | `catalogModels` | Landing |
| Card de modelo | `components/ModelCard.tsx` | Presentación de cada modelo | `CatalogModel` | Catálogo |
| Filtros | `components/ModelFilters.tsx` | UI de filtros | Estado de filtro | Catálogo |
| Modal | `components/ModelGalleryModal.tsx` | Visualización ampliada | Modelo seleccionado | Catálogo |
| Datos | `data/catalog.ts` | Modelos, áreas, imágenes y features | Edición manual | Catálogo |
| Estilos catálogo | `app/catalog.css` | Diseño responsive del catálogo | Clases del catálogo | Componentes de catálogo |
| Estilos globales | `app/globals.css` | Diseño general de la landing | Clases globales | Todo el sitio |
| Automatización docs | `scripts/docs-tools.mjs` | Sync/check/status/watch documental | Git, docs, package.json | npm scripts, hook |
| Seguridad estática | `scripts/security-check.mjs` | Validación de headers, secretos, enlaces y sinks DOM | Código fuente, `.htaccess`, workflow | npm scripts, hook, CI |
| SEO técnico | `scripts/seo-tools.mjs` | Validación de metadata, canonical, JSON-LD, links, robots, sitemap y assets | Export `out/`, código fuente, `public/` | npm scripts, CI |
| Hook docs | `.githooks/pre-commit` | Validación antes del commit | npm docs hook | Git local si se activa |
| Headers Hostinger | `public/.htaccess` | HTTPS, headers de navegador y listado de directorios | Apache/Hostinger | Producción estática |
| Deploy | `.github/workflows/deploy-hostinger.yml` | Build y FTP a Hostinger | GitHub secrets | GitHub Actions |

## Notas

- Evitar listar cada imagen individual salvo que la tarea sea de assets.
- Para cambios de catálogo, empezar por `data/catalog.ts`, `CatalogSection.tsx`, `ModelCard.tsx` y `ModelGalleryModal.tsx`.
