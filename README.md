# CONCREBOX PTY — Landing Page

Landing page premium para **CONCREBOX PTY**, empresa panameña especializada en el diseño y fabricación de casas modulares personalizadas.

El sitio presenta sus modelos, beneficios, sistema constructivo, proceso de trabajo y oportunidades de inversión mediante una experiencia visual moderna, responsive y orientada a generar prospectos por WhatsApp.

[Ver sitio en producción](https://concreboxpty.com/)

![Vista principal de CONCREBOX PTY](public/images/hero.png)

## Características

- Diseño premium inspirado en estudios de arquitectura contemporánea.
- Experiencia responsive y mobile-first.
- Navegación con efecto glassmorphism.
- Animaciones y microinteracciones con Framer Motion.
- Secciones de beneficios, sistema constructivo, proceso e inversión.
- Galerías editoriales con lightbox.
- Preguntas frecuentes.
- Información de contacto y ubicación.
- Integración directa con WhatsApp.
- Metadatos SEO, Open Graph y JSON-LD.
- Imágenes optimizadas mediante `next/image`.
- Soporte para usuarios que prefieren movimiento reducido.

## Catálogo premium de modelos

La sección **Modelos CONCREBOX** funciona como un catálogo inmobiliario interactivo.

Incluye:

- Nueve modelos de casas modulares.
- Cards amplias con fachada, nombre, área y categoría.
- Slider independiente con fachada y plano arquitectónico.
- Tratamiento de imagen específico:
  - Fachadas con `object-fit: cover`.
  - Planos completos con `object-fit: contain`.
- Controles de navegación e indicadores visuales.
- Overlay de zoom con acceso a la imagen completa.
- Características acompañadas de iconos.
- Filtros dinámicos:
  - Todos.
  - 1 dormitorio.
  - 2 dormitorios.
  - Con terraza.
  - Compactos.
- Animaciones al filtrar los resultados.
- WhatsApp contextual con el nombre y área del modelo seleccionado.

### Galería modal

Cada modelo puede abrirse en un modal responsive que ofrece:

- Imágenes en alta resolución sin recortes.
- Navegación mediante flechas.
- Miniaturas de fachada y plano.
- Indicador de la imagen seleccionada.
- Nombre y área del modelo.
- Cierre con tecla `Esc`.
- Navegación mediante las flechas del teclado.
- Cierre al seleccionar el fondo exterior.
- Control de foco para accesibilidad.
- Botón para consultar el modelo por WhatsApp.

## Tecnologías

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- CSS personalizado
- [Framer Motion](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)
- GitHub Actions para despliegue automático
- Hostinger Single Web Hosting como alojamiento de producción

## Instalación local

### Requisitos

- Node.js 20 o superior.
- npm.

### Pasos

Clona el repositorio:

```bash
git clone https://github.com/dhc0510/concrebox-landing-page.git
```

Entra al proyecto:

```bash
cd concrebox-landing-page
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

El catálogo puede abrirse directamente desde:

[http://localhost:3000/#catalogo](http://localhost:3000/#catalogo)

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Ejecuta el proyecto en modo desarrollo. |
| `npm run build` | Genera la versión estática optimizada en la carpeta `out/`. |
| `npm run start` | Ejecuta una compilación de producción en entornos Node compatibles. |
| `npm run lint` | Analiza el código con ESLint. |
| `npm run security:check` | Verifica controles estáticos esenciales de seguridad. |
| `npm run security:headers` | Verifica la configuración de headers en `public/.htaccess`. |
| `npm run security:audit-deps` | Audita dependencias de producción. |

## Estructura principal

```text
concrebox-landing-page/
├── app/
│   ├── catalog.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CatalogSection.tsx
│   ├── LandingPage.tsx
│   ├── Logo.tsx
│   ├── ModelCard.tsx
│   ├── ModelFilters.tsx
│   ├── ModelGalleryModal.tsx
│   └── Reveal.tsx
├── data/
│   └── catalog.ts
├── public/
│   └── images/
│       └── catalog/
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Arquitectura del catálogo

- `data/catalog.ts`: tipos y datos editables de cada modelo.
- `CatalogSection.tsx`: estado de filtros, resultados y apertura del modal.
- `ModelCard.tsx`: presentación, slider y CTA contextual de cada modelo.
- `ModelFilters.tsx`: filtros reutilizables y contador de resultados.
- `ModelGalleryModal.tsx`: lightbox, miniaturas y navegación accesible.
- `app/catalog.css`: estilos responsive exclusivos del catálogo.

Para agregar un modelo nuevo, añade un objeto en `data/catalog.ts` y guarda sus imágenes dentro de `public/images/catalog`.

## Accesibilidad

- Textos alternativos descriptivos para las imágenes.
- Botones con `aria-label`.
- Estado de filtros mediante `aria-pressed`.
- Modal identificado con `role="dialog"` y `aria-modal`.
- Navegación por teclado.
- Cierre con `Esc`.
- Contención de foco dentro del modal.
- Estados `focus-visible`.
- Compatibilidad con `prefers-reduced-motion`.

## SEO

La landing incluye:

- Título y descripción optimizados.
- Palabras clave relacionadas con construcción modular en Panamá.
- Open Graph para compartir el sitio en WhatsApp, Facebook y redes sociales.
- Twitter Card.
- URL canónica.
- Schema `HomeAndConstructionBusiness` mediante JSON-LD.
- Imagen social dedicada `public/images/og-concrebox.jpg`.
- `robots.txt` y `sitemap.xml`.

## Despliegue

El proyecto está desplegado en:

[https://concreboxpty.com/](https://concreboxpty.com/)

El deploy se ejecuta automáticamente desde GitHub Actions cada vez que se hace push a la rama `main`.

Flujo de publicación:

```text
GitHub main
→ GitHub Actions
→ npm ci
→ npm run build
→ carpeta out/
→ Hostinger public_html
```

El proyecto usa `output: "export"` en `next.config.ts`, por lo que Next.js genera archivos estáticos listos para alojamiento compartido.

### Secrets requeridos en GitHub Actions

El workflow `.github/workflows/deploy-hostinger.yml` usa estos secrets:

```text
HOSTINGER_FTP_SERVER
HOSTINGER_FTP_USERNAME
HOSTINGER_FTP_PASSWORD
HOSTINGER_FTP_DIR
```

Directorio de producción en Hostinger:

```text
/domains/concreboxpty.com/public_html/
```

No se requieren variables de entorno para ejecutar la versión actual.

## Contacto

**CONCREBOX PTY**

- Ubicación: Parque Industrial Tocumen Storage, Ciudad de Panamá.
- WhatsApp: [+507 6827-2867](https://wa.me/50768272867)
- Instagram: [@concrebox_pty](https://www.instagram.com/concrebox_pty/)
- Correo: [concreboxpty@hotmail.com](mailto:concreboxpty@hotmail.com)

---

Desarrollado para presentar una nueva forma de vivir, vacacionar e invertir mediante arquitectura modular.
