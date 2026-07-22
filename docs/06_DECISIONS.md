# Decisiones

## 2026-07-22 — Exportación estática para Hostinger

- Estado: aceptada.
- Decisión: usar `output: "export"` en Next.js y desplegar la carpeta `out/` a Hostinger.
- Contexto: el plan Hostinger Single sirve correctamente archivos estáticos y no está pensado para ejecutar `next start` como servidor Node.
- Motivo: la landing no requiere backend, base de datos ni SSR dinámico.
- Consecuencias: imágenes con `next/image` se configuran como `unoptimized`; el despliegue se realiza por FTP desde GitHub Actions.

## 2026-07-22 — Dominio canónico de producción

- Estado: aceptada.
- Decisión: usar `https://concreboxpty.com/` como URL canónica.
- Contexto: el dominio fue comprado y configurado en Hostinger.
- Motivo: evitar previews, SEO y documentación apuntando al dominio temporal de Vercel.
- Consecuencias: metadata, sitemap, robots y README deben mantenerse con el dominio real.

## 2026-07-22 — Documentación continua con sincronización determinista

- Estado: aceptada.
- Decisión: usar documentos Markdown en `docs/`, reglas en `AGENTS.md` y scripts Node sin dependencias nuevas.
- Contexto: el proyecto ya usa Node/npm por Next.js.
- Motivo: mantener documentación concisa, verificable y útil para Codex/Obsidian sin introducir herramientas externas.
- Consecuencias: cambios materiales deben acompañarse de `npm run docs:sync` y `npm run docs:check`.

## 2026-07-22 — Seguridad esencial para landing estática

- Estado: aceptada.
- Decisión: implementar controles aplicables al sitio estático mediante `.htaccess`, scripts Node sin dependencias nuevas y validaciones en GitHub Actions.
- Contexto: el proyecto no tiene backend, base de datos, autenticación, API ni formularios procesados por servidor.
- Motivo: reducir riesgos reales del frontend/hosting sin inventar una arquitectura inexistente.
- Consecuencias: SQL Injection, CSRF, CORS, auth, sesiones, SSRF y rate limit propio quedan documentados como no aplicables; headers, secretos, dependencias, XSS/DOM y enlaces externos se validan localmente.

## 2026-07-22 — SEO técnico verificable para sitio estático

- Estado: aceptada.
- Decisión: validar SEO mediante scripts Node locales sin dependencias nuevas y ejecutar `npm run seo:check` en CI después del build.
- Contexto: el sitio se exporta como HTML estático para Hostinger y necesita previews sociales, canonical y crawl básicos confiables.
- Motivo: evitar regresiones en metadata, JSON-LD, sitemap, robots, enlaces y assets sin depender de revisión manual.
- Consecuencias: el SEO se verifica sobre `out/`; se debe ejecutar `npm run build` antes de los comandos `seo:*`.

## 2026-07-22 — Optimización de imágenes principales

- Estado: aceptada.
- Decisión: crear variantes JPG `*-optimized.jpg` para imágenes principales de hero, sistema, modelos y galería.
- Contexto: las imágenes PNG principales pesaban entre 2.2 MB y 2.9 MB cada una.
- Motivo: reducir peso de carga manteniendo la calidad visual premium de la landing.
- Consecuencias: los PNG originales permanecen en `public/images/` como referencia histórica, pero la landing usa las variantes optimizadas.
