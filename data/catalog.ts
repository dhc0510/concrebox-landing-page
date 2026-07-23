export type CatalogImage = {
  src: string;
  label: "Fachada" | "Interior" | "Plano";
};

export type CatalogYear = "2025" | "2026";
export type CatalogMode = CatalogYear | "complete";

export type CatalogModel = {
  id: number;
  name: string;
  area: string;
  price?: string;
  eyebrow: string;
  images: CatalogImage[];
  features: string[];
  description: string;
  bedrooms: number;
  hasTerrace: boolean;
  compact: boolean;
};

export type CatalogCollection = {
  mode: CatalogMode;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  countLabel: string;
  note: string;
  models: CatalogModel[];
};

const catalog2025Models: CatalogModel[] = [
  {
    id: 1,
    name: "Casa Bangkok",
    area: "44 m²",
    price: "B/. 48,365.50",
    eyebrow: "Compacta",
    images: [
      { src: "/images/catalog/bangkok-fachada.png", label: "Fachada" },
      { src: "/images/catalog/bangkok-plano.png", label: "Plano" },
    ],
    features: ["1 dormitorio", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Casa compacta, elegante y funcional, ideal para quienes buscan una vivienda acogedora, moderna y conectada con la naturaleza.",
    bedrooms: 1,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 2,
    name: "Casa Singapur",
    area: "44 m²",
    price: "B/. 51,639.00",
    eyebrow: "Eficiente",
    images: [
      {
        src: "/images/catalog/singapur-fachada-2-dormitorios.png",
        label: "Fachada",
      },
      { src: "/images/catalog/singapur-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Modelo compacto y bien distribuido, pensado para casas vacacionales, parejas o familias pequeñas que buscan eficiencia y comodidad.",
    bedrooms: 2,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 3,
    name: "Casa New York",
    area: "67 m²",
    price: "B/. 71,561.00",
    eyebrow: "Práctica",
    images: [
      { src: "/images/catalog/new-york-fachada.png", label: "Fachada" },
      { src: "/images/catalog/new-york-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Cocina", "Terraza"],
    description:
      "Modelo práctico y moderno, con dos dormitorios y una terraza frontal amplia, ideal como residencia principal o casa vacacional.",
    bedrooms: 2,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 4,
    name: "Casa Dubái",
    area: "106 m²",
    price: "B/. 114,590.00",
    eyebrow: "Familiar",
    images: [
      { src: "/images/catalog/dubai-fachada.png", label: "Fachada" },
      { src: "/images/catalog/dubai-plano.png", label: "Plano" },
    ],
    features: ["3 dormitorios", "2 baños", "Sala", "Cocina", "Cochera"],
    description:
      "Casa familiar amplia, sofisticada y funcional, con espacios bien distribuidos, cochera integrada y diseño residencial moderno.",
    bedrooms: 3,
    hasTerrace: false,
    compact: false,
  },
  {
    id: 5,
    name: "Casa Estambul",
    area: "119 m²",
    price: "B/. 114,000.00",
    eyebrow: "Amplia",
    images: [
      { src: "/images/catalog/estambul-fachada.png", label: "Fachada" },
      { src: "/images/catalog/estambul-plano.png", label: "Plano" },
    ],
    features: ["3 dormitorios", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Modelo amplio con techo inclinado, espacios abiertos y terraza generosa, ideal para entornos naturales o proyectos familiares.",
    bedrooms: 3,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 6,
    name: "Casa París",
    area: "122 m²",
    price: "B/. 115,688.00",
    eyebrow: "Sofisticada",
    images: [
      { src: "/images/catalog/paris-fachada.png", label: "Fachada" },
      { src: "/images/catalog/paris-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Cocina", "Terraza"],
    description:
      "Casa moderna y sofisticada, con distribución amplia, ventanales y espacios pensados para descanso, confort y conexión con el exterior.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 7,
    name: "Casa Londres",
    area: "132 m²",
    price: "B/. 137,805.00",
    eyebrow: "Contemporánea",
    images: [
      { src: "/images/catalog/londres-fachada.png", label: "Fachada" },
      { src: "/images/catalog/londres-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Sala + cocina", "Terraza"],
    description:
      "Modelo contemporáneo con grandes ventanales, estructura elegante y terraza frontal, ideal para residencia principal o casa de descanso.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 8,
    name: "Casa Tokio",
    area: "99.23 m²",
    price: "B/. 95,641.50",
    eyebrow: "Funcional",
    images: [
      { src: "/images/catalog/tokio-fachada.png", label: "Fachada" },
      { src: "/images/catalog/tokio-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "1 baño", "Cocina", "Terraza"],
    description:
      "Casa de diseño contemporáneo, funcional y conectada con el entorno, ideal para quienes buscan amplitud, vistas y comodidad.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 9,
    name: "Casa Hawái",
    area: "72 m² + 12 m² de piscina",
    price: "B/. 80,908.00",
    eyebrow: "Tropical",
    images: [
      { src: "/images/catalog/hawai-fachada.png", label: "Fachada" },
      { src: "/images/catalog/hawai-plano.png", label: "Plano" },
    ],
    features: ["2 dormitorios", "2 baños", "Cocina", "Terraza y piscina"],
    description:
      "Modelo tropical con terraza frontal y piscina privada, ideal para descanso, inversión vacacional o residencia en clima cálido.",
    bedrooms: 2,
    hasTerrace: true,
    compact: true,
  },
];

const catalog2026Models: CatalogModel[] = [
  {
    id: 1,
    name: "Modelo Arenal",
    area: "74.85 m² + terraza 27.50 m²",
    price: "B/. 108,077.50 (sin piscina)",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/arenal-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/arenal-plano.png", label: "Plano" },
    ],
    features: [
      "2 recámaras",
      "1 baño",
      "Sala de estar",
      "Comedor",
      "Cocina abierta con desayunador",
      "Terraza amplia",
      "Piscina",
    ],
    description:
      "Residencia unifamiliar de un nivel con distribución funcional que integra espacios sociales y privados, favoreciendo la iluminación y ventilación natural.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 2,
    name: "Modelo Poas",
    area: "79.50 m² + terraza 22.48 m²",
    price: "B/. 109,409.00",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/poas-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/poas-plano.png", label: "Plano" },
    ],
    features: [
      "2 recámaras",
      "1 baño",
      "Sala comedor",
      "Comedor",
      "Cocina abierta con desayunador",
      "Lavandería",
      "Terraza amplia",
    ],
    description:
      "Vivienda unifamiliar de un nivel, diseñada con una distribución práctica y eficiente que integra áreas sociales y privadas, priorizando comodidad, iluminación natural y funcionalidad.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 3,
    name: "Modelo Talamanca",
    area: "38.34 m² + terraza 21.24 m²",
    price: "B/. 61,083.00",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/talamanca-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/talamanca-plano.png", label: "Plano" },
    ],
    features: [
      "1 recámara",
      "1 baño completo",
      "Cocina abierta con desayunador",
      "Lavandería integrada",
      "Terraza frontal amplia",
    ],
    description:
      "Diseño compacto, moderno y funcional, ideal para una o dos personas, parejas o residencia vacacional, integrando los espacios interiores con una amplia terraza frontal.",
    bedrooms: 1,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 4,
    name: "Modelo Tenorio",
    area: "50.83 m² + terraza 27.42 m²",
    price: "B/. 80,390.50",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/tenorio-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/tenorio-plano.png", label: "Plano" },
    ],
    features: [
      "2 recámaras",
      "1 baño compartido",
      "Sala de estar",
      "Cocina abierta",
      "Terraza perimetral en U",
    ],
    description:
      "Vivienda unifamiliar de un nivel con diseño contemporáneo y funcional, concebida para aprovechar los espacios interiores y su relación con el exterior.",
    bedrooms: 2,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 5,
    name: "Modelo Turrialba",
    area: "40.23 m² + terraza 25.12 m²",
    price: "B/. 80,390.50",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/turrialba-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/turrialba-plano.png", label: "Plano" },
    ],
    features: [
      "1 recámara principal",
      "1 baño",
      "Sala de estar",
      "Cocina abierta con desayunador",
      "Terraza exterior amplia",
    ],
    description:
      "Diseño contemporáneo que combina funcionalidad, confort e integración entre espacios interiores y exteriores, priorizando amplitud social y privacidad en la zona de descanso.",
    bedrooms: 1,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 6,
    name: "Modelo Miravalles",
    area: "74.85 m² + terraza 18.45 m²",
    price: "B/. 106,369.00",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/miravalles-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/miravalles-plano.png", label: "Plano" },
    ],
    features: [
      "2 recámaras",
      "2 baños con walk-in closet",
      "Cocina abierta con desayunador",
      "Lavandería",
      "Terraza frontal amplia",
    ],
    description:
      "Vivienda de distribución simétrica, moderna y altamente funcional, organizada alrededor de un núcleo central social y de servicio con áreas privadas en ambos extremos.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 7,
    name: "Modelo Irazú",
    area: "63.58 m² + terraza 12.10 m²",
    price: "B/. 82,797.00",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/irazu-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/irazu-plano.png", label: "Plano" },
    ],
    features: [
      "2 recámaras",
      "2 baños",
      "Cocina abierta con desayunador",
      "Sala",
      "Lavandería",
      "Terraza",
    ],
    description:
      "Residencia unifamiliar de una planta con distribución funcional que separa áreas sociales y privadas, favoreciendo iluminación, ventilación natural y convivencia exterior.",
    bedrooms: 2,
    hasTerrace: true,
    compact: false,
  },
  {
    id: 8,
    name: "Modelo Tapantí",
    area: "51.66 m² + terraza 27.48 m²",
    price: "B/. 81,393.00",
    eyebrow: "Arquitectónica",
    images: [
      { src: "/images/catalog/2026/tapanti-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/tapanti-plano.png", label: "Plano" },
    ],
    features: [
      "2 recámaras",
      "2 baños",
      "Cocina abierta con desayunador",
      "Terraza amplia",
    ],
    description:
      "Vivienda unifamiliar de un nivel con diseño lineal que optimiza el espacio disponible e integra áreas sociales y privadas con una amplia terraza frontal.",
    bedrooms: 2,
    hasTerrace: true,
    compact: true,
  },
  {
    id: 9,
    name: "Modelo Barva",
    area: "Área abierta 21.01 m² + terraza 3.09 m²",
    price: "B/. 24,274.00",
    eyebrow: "A-Frame",
    images: [
      { src: "/images/catalog/2026/barva-fachada.jpg", label: "Fachada" },
      { src: "/images/catalog/2026/barva-plano.png", label: "Plano" },
    ],
    features: [
      "1 dormitorio",
      "1 baño",
      "Cocina concepto abierto",
      "Terraza",
    ],
    description:
      "Alojamiento tipo A-Frame compacto, cómodo y funcional, ideal para una o dos personas, con distribución pensada para aprovechar al máximo cada espacio.",
    bedrooms: 1,
    hasTerrace: true,
    compact: true,
  },
];

export const catalogModels = catalog2025Models;

export const catalogCollections: Record<CatalogMode, CatalogCollection> = {
  "2025": {
    mode: "2025",
    label: "Catálogo 2025",
    eyebrow: "Catálogo arquitectónico",
    title: "Modelos CONCREBOX",
    description:
      "Explora cada fachada y plano en detalle. Nueve propuestas modulares que pueden adaptarse a tu terreno, estilo de vida y objetivo de inversión.",
    countLabel: "09 modelos",
    note: "Selecciona una imagen para verla en alta resolución y navegar entre las vistas disponibles.",
    models: catalog2025Models,
  },
  "2026": {
    mode: "2026",
    label: "Catálogo 2026",
    eyebrow: "Catálogo arquitectónico 2026",
    title: "Modelos CONCREBOX",
    description:
      "Explora las propuestas del catálogo 2026 extraídas del documento oficial, con fachadas, planos, áreas, distribución y precio arquitectónico por modelo.",
    countLabel: "09 modelos",
    note: "Selecciona una imagen para verla en alta resolución y navegar entre fachada y plano del modelo activo.",
    models: catalog2026Models,
  },
  complete: {
    mode: "complete",
    label: "Catálogo completo",
    eyebrow: "Catálogo completo",
    title: "Modelos CONCREBOX",
    description:
      "Explora en un solo lugar todos los modelos disponibles de los catálogos 2025 y 2026, con fachadas, planos, áreas, distribución y precios.",
    countLabel: "18 modelos",
    note: "Selecciona una imagen para verla en alta resolución. Los filtros trabajan sobre ambos catálogos a la vez.",
    models: [...catalog2025Models, ...catalog2026Models],
  },
};
