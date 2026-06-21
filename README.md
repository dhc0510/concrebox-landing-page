# CONCREBOX PTY — Landing Page

Landing page premium para **CONCREBOX PTY**, empresa panameña especializada en el diseño y fabricación de casas modulares personalizadas.

El sitio presenta sus modelos, beneficios, sistema constructivo, proceso de trabajo y oportunidades de inversión mediante una experiencia visual moderna, responsive y orientada a generar prospectos por WhatsApp.

[Ver sitio en producción](https://concrebox.vercel.app/)

![Vista principal de CONCREBOX PTY](public/images/hero.png)

## Características

- Diseño premium inspirado en estudios de arquitectura contemporánea.
- Experiencia completamente responsive y mobile-first.
- Navegación con efecto glassmorphism.
- Animaciones y transiciones suaves.
- Catálogo de modelos modulares.
- Secciones de beneficios, construcción, proceso e inversión.
- Galerías editoriales con lightbox.
- Preguntas frecuentes.
- Información de contacto y ubicación.
- Integración directa con WhatsApp.
- Metadatos SEO, Open Graph y JSON-LD.
- Imágenes optimizadas mediante `next/image`.
- Soporte para usuarios que prefieren movimiento reducido.

## Tecnologías

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- CSS personalizado
- [Framer Motion](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/) para despliegue

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

## Comandos disponibles

```bash
npm run dev
```

Ejecuta el proyecto en modo desarrollo.

```bash
npm run build
```

Genera una compilación optimizada para producción.

```bash
npm run start
```

Ejecuta localmente la compilación de producción.

```bash
npm run lint
```

Analiza el código con ESLint.

## Estructura principal

```text
concrebox-landing-page/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── LandingPage.tsx
│   ├── Logo.tsx
│   └── Reveal.tsx
├── public/
│   └── images/
├── package.json
├── next.config.ts
└── tsconfig.json
```

## SEO

La landing incluye:

- Título y descripción optimizados.
- Palabras clave relacionadas con construcción modular en Panamá.
- Open Graph para compartir el sitio en redes sociales.
- Twitter Card.
- URL canónica.
- Schema `HomeAndConstructionBusiness` mediante JSON-LD.

## Despliegue

El proyecto está preparado para desplegarse directamente en Vercel:

1. Importa el repositorio desde GitHub.
2. Vercel detectará automáticamente Next.js.
3. Conserva la configuración predeterminada.
4. Selecciona **Deploy**.

No se requieren variables de entorno para ejecutar la versión actual.

## Contacto

**CONCREBOX PTY**

- Ubicación: Parque Industrial Tocumen Storage, Ciudad de Panamá.
- WhatsApp: [+507 6827-2867](https://wa.me/50768272867)
- Instagram: [@concrebox_pty](https://www.instagram.com/concrebox_pty/)
- Correo: [concreboxpty@hotmail.com](mailto:concreboxpty@hotmail.com)

---

Desarrollado para presentar una nueva forma de vivir, vacacionar e invertir mediante arquitectura modular.
