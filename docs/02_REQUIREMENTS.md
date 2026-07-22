# Requisitos

## Confirmado

### Objetivo

Presentar a CONCREBOX PTY como una empresa premium de construcción modular en Panamá y convertir visitantes en prospectos por WhatsApp.

### Usuarios

- Personas interesadas en casas modulares personalizadas.
- Familias que buscan vivienda moderna.
- Inversionistas interesados en Airbnb, fincas, alquiler vacacional o proyectos inmobiliarios.

### Alcance actual

- Landing page informativa y comercial.
- Catálogo visual de modelos modulares.
- Contacto por WhatsApp, Instagram y correo.
- SEO básico, Open Graph, Twitter Card, JSON-LD, sitemap y robots.
- Exportación estática para Hostinger Single Web Hosting.

### Funcionalidades

- Navegación por secciones internas.
- CTAs externos a WhatsApp.
- Catálogo con filtros por tipo de modelo.
- Slider de fachada/plano por modelo.
- Modal de imagen con navegación.
- Diseño responsive mobile-first.

### Reglas de negocio

- CTA principal a WhatsApp: `https://wa.me/50768272867`.
- Links internos navegan dentro de la misma página.
- Links externos abren en nueva pestaña cuando aplica.
- La marca debe transmitir confianza, innovación, calidad constructiva, diseño arquitectónico, inversión inteligente y exclusividad.

### Requisitos no funcionales

- Estética premium, minimalista y arquitectónica.
- Performance compatible con sitio estático.
- Accesibilidad básica: `alt`, `aria-label`, teclado en modal y foco visible.
- SEO y metadata social relacionados con datos reales del negocio.

## Fuera de alcance actual

- Login de usuarios.
- Base de datos.
- Backend propio.
- Panel administrativo.
- Procesamiento de pagos.
- Formularios con persistencia.

## Supuestos

- El plan Hostinger Single continuará sirviendo el sitio como archivos estáticos desde `public_html`.
- GitHub Actions seguirá siendo el mecanismo de despliegue.

## Pendiente de confirmar

- Si CONCREBOX trabajará formalmente fuera de Panamá y cómo debe comunicarse.
- Si el catálogo requiere precios, fichas técnicas descargables o formularios dedicados.
- Si se implementarán pruebas automatizadas visuales o e2e.
