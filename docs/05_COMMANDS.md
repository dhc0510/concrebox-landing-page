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
