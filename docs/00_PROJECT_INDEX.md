# Índice del proyecto

Puerta de entrada para entender y mantener la documentación técnica de CONCREBOX PTY sin recorrer todo el repositorio.

## Resumen

Landing page premium para CONCREBOX PTY, empresa de construcción modular en Panamá. El sitio presenta beneficios, sistema constructivo, catálogo de modelos, proceso, inversión y contacto orientado a WhatsApp.

## Estado general

Producción activa en [https://concreboxpty.com/](https://concreboxpty.com/) con despliegue automático desde GitHub Actions hacia Hostinger.

## Documentos disponibles

<!-- AUTO-GENERATED:START documentos -->
Contenido administrado automáticamente. No editar dentro de los marcadores.

- [00_PROJECT_INDEX.md](00_PROJECT_INDEX.md)
- [01_CURRENT_STATUS.md](01_CURRENT_STATUS.md)
- [02_REQUIREMENTS.md](02_REQUIREMENTS.md)
- [03_ARCHITECTURE.md](03_ARCHITECTURE.md)
- [04_MODULE_MAP.md](04_MODULE_MAP.md)
- [05_COMMANDS.md](05_COMMANDS.md)
- [06_DECISIONS.md](06_DECISIONS.md)
- [07_TASK_CONTEXT_TEMPLATE.md](07_TASK_CONTEXT_TEMPLATE.md)
<!-- AUTO-GENERATED:END documentos -->

## Cuándo consultar cada documento

- [01_CURRENT_STATUS.md](01_CURRENT_STATUS.md): estado funcional, riesgos, bloqueos y próximos pasos.
- [02_REQUIREMENTS.md](02_REQUIREMENTS.md): alcance, requisitos confirmados y fuera de alcance.
- [03_ARCHITECTURE.md](03_ARCHITECTURE.md): arquitectura vigente, integraciones, seguridad y despliegue.
- [04_MODULE_MAP.md](04_MODULE_MAP.md): mapa para localizar código sin escanear el repositorio.
- [05_COMMANDS.md](05_COMMANDS.md): comandos reales y verificados.
- [06_DECISIONS.md](06_DECISIONS.md): decisiones materiales con impacto futuro.
- [07_TASK_CONTEXT_TEMPLATE.md](07_TASK_CONTEXT_TEMPLATE.md): plantilla breve para futuras tareas con Codex.

## Orden de lectura recomendado

- Tarea general: `AGENTS.md` → este índice → `01_CURRENT_STATUS.md`.
- Cambio visual o funcional: añade `02_REQUIREMENTS.md`, `03_ARCHITECTURE.md` y `04_MODULE_MAP.md`.
- Cambio de scripts, build, CI o despliegue: añade `05_COMMANDS.md`, `03_ARCHITECTURE.md` y `06_DECISIONS.md`.
- Cambio documental: añade este índice, `05_COMMANDS.md` y `AGENTS.md`.

## Estructura detectada

<!-- AUTO-GENERATED:START estructura-detectada -->
Contenido administrado automáticamente. No editar dentro de los marcadores.

- `.agents` — directorio
- `.githooks` — directorio
- `.github` — directorio
- `.gitignore` — archivo
- `AGENTS.md` — archivo
- `app` — directorio
- `components` — directorio
- `data` — directorio
- `docs` — directorio
- `eslint.config.mjs` — archivo
- `next-env.d.ts` — archivo
- `next.config.ts` — archivo
- `package-lock.json` — archivo
- `package.json` — archivo
- `postcss.config.mjs` — archivo
- `public` — directorio
- `README.md` — archivo
- `scripts` — directorio
- `tsconfig.json` — archivo
<!-- AUTO-GENERATED:END estructura-detectada -->

## Mapeo de cambios a documentación

| Cambio detectado | Documento a revisar |
| --- | --- |
| Documento agregado, eliminado o renombrado | `docs/00_PROJECT_INDEX.md` |
| Funcionalidad visible, tarea terminada, bloqueo o siguiente prioridad | `docs/01_CURRENT_STATUS.md` |
| Requisito, alcance o regla de negocio | `docs/02_REQUIREMENTS.md` |
| Capas, flujos, dependencias, seguridad, integraciones o infraestructura | `docs/03_ARCHITECTURE.md` |
| Módulo, ruta, componente o dato agregado, eliminado o movido | `docs/04_MODULE_MAP.md` |
| Manifiesto, dependencia, script, build, lint, CI o comando | `docs/05_COMMANDS.md` |
| Decisión técnica o de producto con consecuencias futuras | `docs/06_DECISIONS.md` |
| Forma recomendada de solicitar tareas | `docs/07_TASK_CONTEXT_TEMPLATE.md` |
| Reglas permanentes de trabajo para Codex | `AGENTS.md` |
| Instalación, requisitos, inicio rápido u onboarding | `README.md` |

## Documentos pendientes o con revisión requerida

- Pendiente de confirmar: no hay pruebas automatizadas de UI o e2e registradas.
- Pendiente de confirmar: no se ha activado el hook local `.githooks/pre-commit`.
