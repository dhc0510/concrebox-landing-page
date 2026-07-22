# SEO, contenido y rendimiento

Estado vigente del SEO técnico de CONCREBOX PTY.

## Veredicto actual

El sitio cuenta con una base SEO sólida para una landing estática: URL canónica de producción, metadata social, `robots.txt`, `sitemap.xml`, JSON-LD, H1 único, enlaces verificables y assets principales optimizados.

No se promete ranking. La optimización implementada reduce fricción técnica para indexación, previews sociales y rendimiento percibido.

## Dominio canónico

- Producción: `https://concreboxpty.com/`
- Sitemap: `https://concreboxpty.com/sitemap.xml`
- Idioma: español para Panamá (`es` en HTML, `es-PA` en datos estructurados).

## Inventario SEO

| Área | Estado | Implementación |
| --- | --- | --- |
| Title y description | Cubierto | `app/layout.tsx` |
| Canonical | Cubierto | `https://concreboxpty.com/` |
| Open Graph | Cubierto | Título, descripción, URL, site name, tipo website e imagen absoluta |
| Twitter Card | Cubierto | `summary_large_image` |
| Meta keywords | Removido | No se usa porque es obsoleto |
| Robots | Cubierto | `public/robots.txt` |
| Sitemap | Cubierto | `public/sitemap.xml` |
| JSON-LD | Cubierto | `WebSite`, `HomeAndConstructionBusiness`, `FAQPage` |
| H1 | Cubierto | Un H1 principal en el hero |
| Enlaces internos | Cubierto | Checks validan que los anchors existan |
| Enlaces externos | Cubierto | Checks validan apertura segura |
| Imágenes críticas | Mejorado | JPG optimizados para hero, sistema, modelos y galería |
| Lighthouse | Pendiente | No se agregó dependencia pesada; usar PageSpeed Insights o Lighthouse local si se requiere |

## Assets optimizados

Se crearon versiones JPG optimizadas para las imágenes principales de la landing:

| Imagen | Antes | Después | Reducción aproximada |
| --- | ---: | ---: | ---: |
| `hero.png` → `hero-optimized.jpg` | 2242.8 KB | 253.3 KB | 88.7% |
| `system.png` → `system-optimized.jpg` | 2627.7 KB | 300.6 KB | 88.6% |
| `compact.png` → `compact-optimized.jpg` | 2501.3 KB | 286.5 KB | 88.5% |
| `family.png` → `family-optimized.jpg` | 2663.0 KB | 344.1 KB | 87.1% |
| `premium.png` → `premium-optimized.jpg` | 2560.4 KB | 313.1 KB | 87.8% |
| `investment.png` → `investment-optimized.jpg` | 2429.8 KB | 274.7 KB | 88.7% |
| `interior.png` → `interior-optimized.jpg` | 2860.3 KB | 293.0 KB | 89.8% |
| `installation.png` → `installation-optimized.jpg` | 2495.8 KB | 262.7 KB | 89.5% |

Los PNG originales se mantienen en `public/images/` por seguridad histórica, pero ya no se referencian desde la landing principal. Hay assets pesados no referenciados que podrían limpiarse en una tarea futura si el usuario confirma que no se necesitan.

## Comandos SEO

Ejecutar primero:

```bash
npm run build
```

Después:

```bash
npm run seo:check
npm run seo:links
npm run seo:assets
npm run seo:build
npm run seo:sitemap
```

- `seo:check`: revisión completa del export estático.
- `seo:links`: anchors internos y enlaces externos seguros.
- `seo:assets`: imágenes referenciadas y presupuestos básicos de peso.
- `seo:build`: presencia de salida estática y metadata crítica.
- `seo:sitemap`: `robots.txt` y `sitemap.xml`.

## CI

El workflow `.github/workflows/deploy-hostinger.yml` ejecuta `npm run seo:check` después de `npm run build` y antes del deploy FTP.

## Medición de build

Última medición local:

- JavaScript en `out/_next`: 810.4 KB.
- CSS en `out/_next`: 63.6 KB.
- Fuentes WOFF/WOFF2 en `out/_next`: 611.3 KB.
- Imágenes referenciadas detectadas por `seo:assets`: 49.
- Peso aproximado de imágenes referenciadas: 30.25 MB, principalmente por planos del catálogo.

## Riesgos y próximos pasos

- WhatsApp, Facebook y otras plataformas pueden cachear previews antiguos aunque la metadata ya esté correcta.
- El catálogo usa varios planos arquitectónicos pesados; son útiles para detalle visual, pero conviene evaluar versiones comprimidas específicas para web.
- Pendiente recomendado: validar producción con PageSpeed Insights, Rich Results Test y Facebook Sharing Debugger después del próximo deploy.
- Pendiente opcional: limpiar assets grandes no referenciados si el usuario confirma que no se necesitan.
