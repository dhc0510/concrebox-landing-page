import type { Metadata, Viewport } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "./globals.css";
import "./catalog.css";

const siteUrl = "https://concreboxpty.com";
const canonicalUrl = `${siteUrl}/`;
const siteName = "CONCREBOX PTY";
const ogImage = "/images/og-concrebox.jpg";
const title = "CONCREBOX PTY | Casas modulares personalizadas en Panamá";
const description =
  "Diseñamos y fabricamos casas modulares personalizadas, transportables y eficientes en Panamá. Soluciones modernas para vivienda, Airbnb, fincas e inversión inmobiliaria.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Construcción modular",
  classification: "Portable Building Service",
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName,
    locale: "es_PA",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "CONCREBOX PTY - Casas modulares personalizadas en Panamá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "og:image:secure_url": `${siteUrl}${ogImage}`,
    "og:phone_number": "+50768272867",
    "og:email": "concreboxpty@hotmail.com",
    "business:contact_data:locality": "Panama City",
    "business:contact_data:country_name": "Panamá",
    "business:contact_data:phone_number": "+50768272867",
    "business:contact_data:email": "concreboxpty@hotmail.com",
    "geo.region": "PA-8",
    "geo.placename": "Panama City, Panamá",
    "theme-color": "#0D0D0D",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: canonicalUrl,
      inLanguage: "es-PA",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      legalName: "CONCREBOX PTY",
      description,
      url: canonicalUrl,
      image: `${siteUrl}${ogImage}`,
      logo: `${siteUrl}/favicon.svg`,
      telephone: "+50768272867",
      email: "concreboxpty@hotmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Parque Industrial Tocumen Storage",
        addressLocality: "Panama City",
        addressRegion: "Panamá",
        addressCountry: "PA",
      },
      areaServed: {
        "@type": "Country",
        name: "Panamá",
      },
      sameAs: [
        "https://www.instagram.com/concrebox_pty/",
        "https://www.facebook.com/ConcreboxPTY",
        "https://wa.me/50768272867",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+50768272867",
          contactType: "WhatsApp",
          areaServed: "PA",
          availableLanguage: ["es", "en"],
        },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Casas modulares personalizadas",
            serviceType: "Construcción modular",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soluciones modulares para Airbnb e inversión inmobiliaria",
            serviceType: "Portable Building Service",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      inLanguage: "es-PA",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Las casas son transportables?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Nuestro sistema se diseña desde el inicio considerando fabricación, transporte e instalación. La viabilidad final depende del modelo, el acceso y las condiciones del terreno.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo personalizar el diseño?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Adaptamos distribución, dimensiones, fachadas, materiales y acabados para responder a tu estilo de vida, terreno y presupuesto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda el proceso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El plazo varía según el tamaño, nivel de personalización, permisos y condiciones del sitio. Tras conocer tu proyecto, preparamos una ruta de trabajo clara.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo usarla para Airbnb?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Podemos diseñar unidades enfocadas en privacidad, experiencia del huésped, eficiencia operativa y atractivo fotográfico.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde están ubicados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estamos ubicados en Tocume Storage Complex, Ciudad de Panamá, Panamá. Puedes visitarnos o coordinar una asesoría virtual.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajan fuera de Panamá?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evaluamos cada proyecto según destino, logística, normativas y accesibilidad. Escríbenos para revisar la viabilidad de tu ubicación.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
        />
      </body>
    </html>
  );
}
