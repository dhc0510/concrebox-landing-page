# Production readiness

Validación local estricta del proyecto CONCREBOX PTY antes de producción.

## Veredicto

**NO APROBADO PARA PRODUCCIÓN** bajo la puerta estricta del prompt maestro.

La aplicación y el artefacto estático pasaron las validaciones locales disponibles, pero no se puede emitir aprobación estricta porque no se ejecutaron pruebas representativas de producción/hosting real, Firefox/WebKit, carga, observabilidad real ni verificación remota de headers en Hostinger. El repositorio sí queda en buen estado local para revisión manual y para un siguiente ciclo de validación.

## Commit probado

- Commit de aplicación probado: `68f0a391fce22ab27b072eeef8f26954795f9ec2`
- Rama: `main`
- Remoto: `origin` → `https://github.com/dhc0510/concrebox-landing-page.git`
- Upstream: `origin/main`
- Estado al momento de validar: rama local adelantada respecto a `origin/main`.

## Entorno probado

- Sistema: Windows local.
- Node/npm: validados mediante `npm ci`.
- Artefacto: `out/` generado por `npm run build`.
- Servidor local de producción: servidor estático Node apuntando a `out/` en `127.0.0.1:4173`.
- Navegador automatizado: Microsoft Edge headless instalado localmente.

## Matriz de resultados

| Área | Estado | Evidencia | Observaciones |
| --- | --- | --- | --- |
| Instalación limpia | APROBADO | `npm ci` | Reinstalación desde lockfile completada; 0 vulnerabilidades reportadas por npm durante instalación. |
| Build producción | APROBADO | `npm run build` | Next.js exportó `/` y `/_not-found` como contenido estático. |
| Lint | APROBADO | `npm run lint` | ESLint completó sin errores. |
| Dependencias | APROBADO | `npm audit --audit-level=moderate`, `npm run security:audit-deps` | 0 vulnerabilidades moderadas/altas. Se agregó override de `minimatch@10.2.5`. |
| Seguridad estática | APROBADO | `npm run security:check`, `npm run security:headers` | Headers y checks de frontend estático pasan localmente. Headers reales de Hostinger quedan pendientes. |
| SEO | APROBADO | `npm run seo:check` | Metadata, canonical, JSON-LD, robots, sitemap, links y assets referenciados pasan. |
| Documentación | APROBADO | `npm run docs:check` | Documentación determinista actualizada. |
| Artefacto HTTP local | APROBADO | `GET /`, `robots.txt`, `sitemap.xml`, `404` | `/` responde 200; `robots.txt` y `sitemap.xml` responden 200; ruta inexistente responde 404. |
| Funcional headless | APROBADO | Smoke Edge headless | Hero, nav, catálogo, filtros, búsqueda, modal y links externos probados sin errores de consola/red. |
| Responsive local | APROBADO | Viewports 320, 375, 768, 1440, 1920 | Sin overflow horizontal detectado; capturas guardadas temporalmente. |
| Accesibilidad básica | APROBADO PARCIAL | Smoke headless + revisión DOM | `lang=es`, H1 único, imágenes con alt, botones nombrados. No sustituye auditoría WCAG completa con lector de pantalla. |
| Rendimiento local | APROBADO PARCIAL | Pesos de build y assets | JS 810.4 KB, CSS 63.6 KB. Imágenes principales optimizadas; planos del catálogo siguen pesando. |
| Carga/concurrencia | NO EJECUTADO | No hay entorno representativo | Sitio estático sin backend propio; capacidad real depende de Hostinger/CDN. |
| Observabilidad | BLOQUEADO | No hay integración de monitoreo en repo | No existe SDK o dashboard verificable desde local. |
| Producción remota | BLOQUEADO | No se probó Hostinger remoto | No se hicieron pruebas remotas ni push durante esta validación. |
| Firefox/WebKit | BLOQUEADO | Herramienta no disponible | Solo se ejecutó Edge headless local. |

## Comandos ejecutados

```bash
npm ci
npm run build
npm run lint
npm audit --audit-level=moderate
npm run security:audit-deps
npm run security:check
npm run security:headers
npm run seo:check
npm run docs:check
```

También se sirvió `out/` localmente en `127.0.0.1:4173` y se ejecutó un smoke headless con Edge.

## Evidencia funcional

Smoke headless final:

- URL local: `127.0.0.1:4173`
- Viewports: 320×900, 375×900, 768×1000, 1440×1000, 1920×1080.
- Overflow horizontal: no detectado.
- H1: 1.
- Cards de catálogo iniciales: 9.
- Links WhatsApp detectados: 24.
- Navegación hash a catálogo: hash actualizado a `#catalogo`.
- Filtro “2 dormitorios”: estado activo y contador “6 modelos”.
- Búsqueda “Tokio”: contenido visible detectado.
- Modal: abre “Casa Bangkok” y cierra con Escape.
- Links externos: `target="_blank"` y `rel="noopener noreferrer"` verificados.
- Consola: 0 errores.
- Excepciones: 0.
- Fallos de red: 0.
- HTTP 4xx/5xx inesperados: 0.

Capturas temporales generadas en:

`C:\Users\User\AppData\Local\Temp\concrebox-readiness\`

## Rendimiento y tamaño

- Total de archivos exportados en `out/`: 197.
- Tamaño total de `out/`: 153.72 MB.
- JS en `out/_next`: 810.4 KB.
- CSS en `out/_next`: 63.6 KB.
- Fuentes WOFF/WOFF2 en `out/_next`: 611.3 KB.
- Imágenes referenciadas por la página: 49.
- Peso aproximado de imágenes referenciadas: 30.25 MB.

Hallazgo informativo: `out/` incluye assets pesados no referenciados provenientes de `public/images/`, por ejemplo `model_0_0.png` de 14 MB y varios `model_*.png`. No afectan directamente el render inicial si no se solicitan, pero inflan el paquete que se sube por FTP.

## Correcciones realizadas durante la validación

| Severidad | Hallazgo | Corrección | Regresión |
| --- | --- | --- | --- |
| Alta | `npm audit` completo reportaba vulnerabilidades altas vía `brace-expansion`/`minimatch` en tooling dev. | Se agregó `overrides.minimatch = 10.2.5` y se actualizó `package-lock.json`. | `npm ci`, `npm run lint`, `npm audit --audit-level=moderate`, `npm run build` pasan. |

## Limitaciones

- No se ejecutó Lighthouse ni PageSpeed Insights.
- No se midieron Core Web Vitals de campo.
- No se probó producción remota en `https://concreboxpty.com/`.
- No se verificaron headers reales servidos por Hostinger.
- No se ejecutó prueba de carga representativa.
- No se probó Firefox ni WebKit.
- No se verificó tecnología asistiva real; la revisión de accesibilidad fue básica/automatizada.
- No existe observabilidad verificable en el repositorio.
- No se hizo push.

## Riesgos restantes

1. Assets no referenciados hacen que el export pese 153.72 MB.
2. Los planos del catálogo pesan bastante; conviene optimizarlos si PageSpeed móvil sale bajo.
3. La aprobación final requiere validar producción remota después del próximo deploy.
4. La aprobación estricta requiere una matriz de navegadores más completa o una decisión explícita de soporte.

## Próximos pasos recomendados

1. Revisar visualmente la página local en `127.0.0.1:4173`.
2. Si se aprueba visualmente, considerar limpieza/archivo fuera de `public/` de assets pesados no referenciados.
3. Ejecutar push cuando se quiera activar GitHub Actions.
4. Tras deploy, validar:
   - `curl -I https://concreboxpty.com/`
   - PageSpeed Insights.
   - Rich Results Test.
   - Facebook Sharing Debugger / preview de WhatsApp.
5. Añadir Playwright/Lighthouse si se quiere convertir esta validación en suite repetible.

## Estado de push

No se hizo push. Bajo la puerta estricta del prompt, el veredicto es **NO APROBADO PARA PRODUCCIÓN**, por lo tanto no corresponde publicar automáticamente.
