# AGENTS.md

Guía permanente para Codex y otros agentes que trabajen en este repositorio.

## Protocolo de lectura selectiva

1. Lee este archivo.
2. Lee [docs/00_PROJECT_INDEX.md](docs/00_PROJECT_INDEX.md).
3. Lee [docs/01_CURRENT_STATUS.md](docs/01_CURRENT_STATUS.md).
4. Abre únicamente la documentación indicada por el índice para la tarea actual.
5. Si el árbol contiene cambios, ejecuta `npm run docs:status` antes de modificar archivos.
6. Revisa el diff o los archivos staged cuando existan cambios.
7. Inspecciona solo los módulos y archivos directamente relacionados.
8. Amplía la búsqueda únicamente cuando falte evidencia para continuar.

No recorras todo el repositorio como comportamiento predeterminado. Ignora `.git/`, `.obsidian/`, `node_modules/`, `.next/`, `out/`, dependencias, salidas de compilación, cachés, cobertura, `.env` reales y secretos.

## Documentación después de cambios materiales

Después de cualquier cambio material:

1. Identifica la documentación afectada usando el mapeo de [docs/00_PROJECT_INDEX.md](docs/00_PROJECT_INDEX.md).
2. Ejecuta `npm run docs:sync`.
3. Actualiza manualmente los documentos que requieran criterio.
4. Ejecuta las validaciones de la aplicación relacionadas con el cambio.
5. Ejecuta `npm run docs:check`.
6. No marques la tarea como completa si la documentación relevante quedó desactualizada.

## Commits locales

Cuando una unidad funcional coherente esté completa, probada y documentada, crea un commit local atómico con Conventional Commits, salvo que el usuario indique lo contrario.

- No incluyas cambios ajenos.
- No uses `git add .` si puede incluir archivos fuera de alcance.
- Revisa el diff staged antes de confirmar.
- No hagas `push`, no abras PRs y no realices escrituras remotas sin autorización explícita.
- No uses `--no-verify`, `amend`, `rebase`, `reset`, reescritura de historial ni force push sin autorización explícita.

## Comandos documentales reales

- `npm run docs:sync`: actualiza secciones automáticas.
- `npm run docs:check`: valida secciones automáticas y revisiones obligatorias.
- `npm run docs:status`: mapea cambios actuales o staged a documentos posiblemente afectados.
- `npm run docs:watch`: observa rutas relevantes y ejecuta sincronización/validación con debounce.
- `npm run docs:hook`: comando usado por `.githooks/pre-commit`.

## Hook versionado

El hook vive en `.githooks/pre-commit`. Para activarlo localmente, pide autorización al usuario y ejecuta:

```bash
git config --local core.hooksPath .githooks
```

Para desactivarlo localmente:

```bash
git config --local --unset core.hooksPath
```

El hook no agrega archivos automáticamente. Si `docs:sync` modifica documentación, el commit se detiene para revisar y staged los archivos correctos.

## Entrega final

En la entrega final informa:

- Documentación actualizada.
- Validaciones ejecutadas.
- Commit local creado, si aplica.
- Cambios pendientes o sin commit y la razón.
