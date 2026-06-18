import type { Metadata, Viewport } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "./globals.css";

const siteUrl = "https://concrebox.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CONCREBOX PTY | Casas modulares en Panamá",
  description:
    "Diseñamos y fabricamos casas modulares personalizadas, transportables y eficientes en Panamá. Viviendas, Airbnb e inversión inmobiliaria.",
  keywords: [
    "casas modulares panama",
    "casas prefabricadas panama",
    "casas transportables panama",
    "construccion modular panama",
    "casas airbnb panama",
    "modular homes panama",
  ],
  openGraph: {
    title: "CONCREBOX PTY | Arquitectura modular sin límites",
    description:
      "Casas modulares personalizadas, fabricadas en planta e instaladas en tu terreno.",
    url: siteUrl,
    siteName: "CONCREBOX PTY",
    locale: "es_PA",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1600,
        height: 900,
        alt: "Casa modular contemporánea CONCREBOX en Panamá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONCREBOX PTY | Casas modulares en Panamá",
    description:
      "Arquitectura modular personalizada para vivir, vacacionar o invertir.",
    images: ["/images/hero.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "CONCREBOX PTY",
  description:
    "Diseño y fabricación de casas modulares personalizadas y transportables en Panamá.",
  url: siteUrl,
  telephone: "+50768272867",
  email: "concreboxpty@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parque Industrial Tocumen Storage",
    addressLocality: "Panama City",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
