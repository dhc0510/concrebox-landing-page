# Seguridad

Base de seguridad vigente para la landing estática de CONCREBOX PTY.

## Alcance

Este documento cubre el repositorio de la landing page publicada en `https://concreboxpty.com/`.

## Arquitectura de seguridad

- Sitio estático generado por Next.js con `output: "export"`.
- Producción servida por Hostinger Single Web Hosting desde `public_html`.
- No hay backend propio, base de datos, autenticación, sesiones, API, subida de archivos ni procesamiento de formularios dentro de este repositorio.
- Los CTAs externos navegan a WhatsApp, Instagram, correo, teléfono y Google Maps.
- Los secretos FTP viven en GitHub Actions Secrets y no deben versionarse.

## Matriz de aplicabilidad

| Control | Estado | Evidencia | Prueba | Pendiente |
| --- | --- | --- | --- | --- |
| Secretos | IMPLEMENTADO | `.gitignore`, GitHub Actions secrets referenciados sin valores | `npm run security:check` | Rotación solo desde Hostinger/GitHub si se sospecha exposición |
| Dependencias producción y tooling | CORREGIDO | `package.json`, `package-lock.json`, overrides auditados | `npm audit --audit-level=moderate`, `npm run security:audit-deps` | Revalidar al actualizar ESLint/Next |
| SQL Injection | NO APLICA | No hay backend ni base de datos | Revisión de arquitectura | No aplica |
| Otras inyecciones servidor | NO APLICA | No hay servidor que procese entradas | Revisión de arquitectura | No aplica |
| XSS/DOM | IMPLEMENTADO | React escape por defecto, allowlist para JSON-LD, check de sinks | `npm run security:check` | CSP usa `unsafe-inline` por compatibilidad con Next estático |
| Autenticación | NO APLICA | No hay login | Revisión de arquitectura | No aplica |
| Sesiones/cookies | NO APLICA | No hay sesiones ni cookies propias | Revisión de arquitectura | No aplica |
| Autorización/IDOR/BOLA | NO APLICA | No hay recursos privados ni API | Revisión de arquitectura | No aplica |
| CSRF | NO APLICA | No hay operaciones con cookies ni mutaciones servidor | Revisión de arquitectura | No aplica |
| CORS | NO APLICA | No hay API cross-origin propia | Revisión de arquitectura | No aplica |
| Rate limit | NO APLICA | No hay endpoints propios ni formularios procesados por el sitio | Revisión de arquitectura | Depende de WhatsApp/servicios externos |
| Security headers | IMPLEMENTADO | `public/.htaccess` | `npm run security:headers` | Verificar en producción con respuesta real del hosting |
| TLS/HTTPS | IMPLEMENTADO EN CONFIGURACIÓN | Redirección HTTPS y HSTS en `.htaccess` | `npm run security:headers` | Verificado localmente por configuración, no por request remoto |
| Archivos | NO APLICA | No hay carga/descarga privada de archivos | Revisión de arquitectura | No aplica |
| SSRF | NO APLICA | No hay backend que solicite URLs de usuario | Revisión de arquitectura | No aplica |
| Errores | IMPLEMENTADO | Sitio estático, sin stack traces servidor propios | `npm run build` | No aplica para backend |
| Logs | NO APLICA | No hay logging de aplicación en este repo | Revisión de arquitectura | Logs de hosting fuera de alcance |
| Producción | IMPLEMENTADO EN REPO | `public/.htaccess`, GitHub Actions | `npm run security:check` | No modificar Hostinger/DNS sin autorización |

## Controles implementados

### Headers del navegador

`public/.htaccess` configura para Hostinger/Apache:

- `Strict-Transport-Security`.
- `Content-Security-Policy`.
- `X-Content-Type-Options`.
- `X-Frame-Options`.
- `Referrer-Policy`.
- `Permissions-Policy`.
- `Cross-Origin-Opener-Policy`.
- Redirección HTTP → HTTPS.
- `Options -Indexes`.

Estado: implementado en código y verificado localmente por archivo. Pendiente: verificar respuesta real de producción sin hacer pruebas intrusivas.

### Secretos

- `.env` y `.env.*` están ignorados.
- `.env.example` queda permitido para ejemplos seguros si se necesita en el futuro.
- Los secrets FTP se consumen como `${{ secrets.* }}` en GitHub Actions.

### Dependencias

- Producción auditada con `npm audit --omit=dev --audit-level=moderate`.
- `next`, `postcss`, `sharp` y `minimatch` quedan en versiones corregidas mediante lockfile/overrides.
- `minimatch@10.2.5` se fuerza con `overrides` para resolver el advisory transitivo de `brace-expansion` en tooling dev sin usar `npm audit fix --force`.

## Riesgos aceptados o residuales

| Riesgo | Severidad | Motivo | Acción futura |
| --- | --- | --- | --- |
| CSP contiene `unsafe-inline` para scripts/estilos | BAJO | Next exportado puede necesitar inline scripts/estilos; quitarlo podría romper hidratación o estilos. | Endurecer CSP si se implementa nonce/hash compatible y se prueba visualmente. |
| Headers no verificados por request remoto | BAJO | El prompt no autoriza pruebas contra producción sin permiso explícito. | Con autorización, verificar con `curl -I https://concreboxpty.com/`. |

## Configuración por ambiente

- Local: `npm run dev`, sin headers de Hostinger.
- Build estático: `npm run build`, copia `public/.htaccess` a `out/`.
- Producción: Hostinger debe servir `public_html` con Apache compatible con `.htaccess`.

## Procedimiento de verificación

```bash
npm run security:check
npm run security:headers
npm run security:audit-deps
npm run lint
npm run build
npm run docs:check
```

## No aplicable actualmente

No aplica dentro de este repositorio: SQL/NoSQL Injection, autenticación, sesiones, autorización, CSRF, CORS, rate limit propio, carga de archivos, SSRF, API Security, GraphQL, WebSocket y multi-tenancy.

Si se agrega backend, formularios procesados por servidor, base de datos o autenticación, este documento debe revisarse antes de publicar.
