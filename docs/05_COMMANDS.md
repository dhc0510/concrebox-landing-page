# Comandos

Comandos reales del proyecto. No marcar como probado si no se ejecutó en la tarea actual.

## Requisitos locales

- Node.js 20 o superior recomendado.
- npm.

## Instalación

```bash
npm install
```

Para CI se usa:

```bash
npm ci
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

Genera el sitio estático en `out/` por la configuración `output: "export"`.

## Lint

```bash
npm run lint
```

## Documentación

```bash
npm run docs:sync
npm run docs:check
npm run docs:status
npm run docs:watch
```

## Seguridad

```bash
npm run security:check
npm run security:test
npm run security:headers
npm run security:audit-deps
```

- `security:check`: validación local determinista de controles estáticos.
- `security:test`: alias de `security:check`.
- `security:headers`: valida la configuración de headers en `public/.htaccess`.
- `security:audit-deps`: ejecuta `npm audit --omit=dev --audit-level=moderate`.

## SEO

Ejecutar primero:

```bash
npm run build
```

Luego:

```bash
npm run seo:check
npm run seo:links
npm run seo:assets
npm run seo:build
npm run seo:sitemap
```

- `seo:check`: validación completa de metadata, canonical, JSON-LD, robots, sitemap, links y assets.
- `seo:links`: valida anchors internos y enlaces externos seguros.
- `seo:assets`: valida imágenes referenciadas y reporta assets pesados no referenciados.
- `seo:build`: valida presencia del export y metadata crítica.
- `seo:sitemap`: valida `robots.txt` y `sitemap.xml`.

## Scripts detectados en package.json

<!-- AUTO-GENERATED:START scripts-package-json -->
Contenido administrado automáticamente. No editar dentro de los marcadores.

- `npm run build` → `next build`
- `npm run dev` → `next dev`
- `npm run docs:check` → `node scripts/docs-tools.mjs check`
- `npm run docs:hook` → `node scripts/docs-tools.mjs hook`
- `npm run docs:status` → `node scripts/docs-tools.mjs status`
- `npm run docs:sync` → `node scripts/docs-tools.mjs sync`
- `npm run docs:watch` → `node scripts/docs-tools.mjs watch`
- `npm run lint` → `eslint .`
- `npm run security:audit-deps` → `npm audit --omit=dev --audit-level=moderate`
- `npm run security:check` → `node scripts/security-check.mjs check`
- `npm run security:headers` → `node scripts/security-check.mjs headers`
- `npm run security:test` → `npm run security:check`
- `npm run seo:assets` → `node scripts/seo-tools.mjs assets`
- `npm run seo:build` → `node scripts/seo-tools.mjs build`
- `npm run seo:check` → `node scripts/seo-tools.mjs check`
- `npm run seo:links` → `node scripts/seo-tools.mjs links`
- `npm run seo:sitemap` → `node scripts/seo-tools.mjs sitemap`
- `npm run start` → `next start`
<!-- AUTO-GENERATED:END scripts-package-json -->

## Hook documental

Activar localmente, solo con autorización del usuario:

```bash
git config --local core.hooksPath .githooks
```

Desactivar:

```bash
git config --local --unset core.hooksPath
```

## Despliegue

El despliegue automático ocurre en GitHub Actions al hacer push a `main`.

No ejecutar push sin autorización explícita del usuario.
