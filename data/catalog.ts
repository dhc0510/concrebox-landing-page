export type CatalogImage = {
  src: string;
  fullSrc: string;
  thumbnailSrc: string;
  label: "Fachada" | "Interior" | "Plano";
};

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

// Verified against the supplied PDF. See docs/CATALOG_VERIFICATION.md.
export const catalogModels: CatalogModel[] = [
  {
    "id": 1,
    "name": "Modelo Barva",
    "area": "Área cerrada 21.01 m² + terraza 3.09 m²",
    "price": "B/. 24,274.00",
    "eyebrow": "A-Frame",
    "images": [
      {
        "src": "/images/catalog/verified/barva-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/barva-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/barva-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/barva-plano-2.webp",
        "fullSrc": "/images/catalog/verified/barva-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/barva-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 dormitorio",
      "1 baño",
      "Cocina de concepto abierto",
      "Terraza"
    ],
    "description": "Alojamiento compacto tipo A-Frame para una o dos personas, con cocina abierta y terraza.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 2,
    "name": "Modelo Zurquí",
    "area": "Área cerrada 22.32 m² + terraza 3.78 m²",
    "price": "B/. 28,692.00",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/zurqui-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/zurqui-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/zurqui-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/zurqui-plano-2.webp",
        "fullSrc": "/images/catalog/verified/zurqui-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/zurqui-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 dormitorio",
      "1 baño",
      "Cocina",
      "Sala",
      "Terraza"
    ],
    "description": "Diseño compacto, moderno y funcional para una o dos personas, con sala, cocina y terraza.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 3,
    "name": "Modelo Orosí",
    "area": "Área cerrada 22.32 m² + terraza 3.78 m²",
    "price": "B/. 28,692.00",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/orosi-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/orosi-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/orosi-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/orosi-fachada-2.webp",
        "fullSrc": "/images/catalog/verified/orosi-fachada-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/orosi-fachada-2-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/orosi-plano-3.webp",
        "fullSrc": "/images/catalog/verified/orosi-plano-3-full.webp",
        "thumbnailSrc": "/images/catalog/verified/orosi-plano-3-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 dormitorio",
      "1 baño",
      "Cocina",
      "Sala",
      "Terraza"
    ],
    "description": "Modelo compacto para parejas o viajeros individuales, disponible con piedra clara u oscura.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 4,
    "name": "Modelo Tilarán",
    "area": "Área cerrada 22.32 m² + terraza 3.78 m²",
    "price": "B/. 28,692.00",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/tilaran-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/tilaran-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tilaran-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/tilaran-plano-2.webp",
        "fullSrc": "/images/catalog/verified/tilaran-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tilaran-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 dormitorio",
      "1 baño",
      "Cocina",
      "Sala",
      "Terraza"
    ],
    "description": "Diseño contemporáneo con elementos cálidos y naturales para casas de descanso o alojamiento turístico.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 5,
    "name": "Modelo Upala",
    "area": "Área cerrada 25.11 m² + terraza 3.19 m²",
    "price": "B/. 31,356.50",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/upala-20261001-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/upala-20261001-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/upala-20261001-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/upala-20261001-fachada-2.webp",
        "fullSrc": "/images/catalog/verified/upala-20261001-fachada-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/upala-20261001-fachada-2-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/upala-20261001-fachada-3.webp",
        "fullSrc": "/images/catalog/verified/upala-20261001-fachada-3-full.webp",
        "thumbnailSrc": "/images/catalog/verified/upala-20261001-fachada-3-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/upala-20261001-plano-4.webp",
        "fullSrc": "/images/catalog/verified/upala-20261001-plano-4-full.webp",
        "thumbnailSrc": "/images/catalog/verified/upala-20261001-plano-4-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 dormitorio",
      "1 baño",
      "Cocina",
      "Terraza posterior"
    ],
    "description": "Modelo compacto con cocina, un dormitorio, un baño y terraza posterior.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 6,
    "name": "Modelo Talamanca",
    "area": "Área cerrada 38.34 m² + terraza 21.24 m²",
    "price": "B/. 61,083.00",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/talamanca-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/talamanca-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/talamanca-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/talamanca-plano-2.webp",
        "fullSrc": "/images/catalog/verified/talamanca-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/talamanca-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 recámara",
      "1 baño completo",
      "Cocina abierta con desayunador",
      "Lavandería integrada",
      "Terraza frontal"
    ],
    "description": "Vivienda de un nivel que optimiza el espacio interior y lo integra con una amplia terraza frontal.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 7,
    "name": "Modelo Turrialba",
    "area": "Área cerrada 40.23 m² + terraza 25.12 m²",
    "price": "B/. 66,360.50",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/turrialba-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/turrialba-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/turrialba-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/turrialba-plano-2.webp",
        "fullSrc": "/images/catalog/verified/turrialba-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/turrialba-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 recámara principal",
      "1 baño",
      "Sala de estar",
      "Cocina abierta con desayunador",
      "Terraza exterior"
    ],
    "description": "Vivienda de un nivel que combina espacios sociales amplios con privacidad en la zona de descanso.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 8,
    "name": "Modelo Tenorio",
    "area": "Área cerrada 50.83 m² + terraza 27.42 m²",
    "price": "B/. 80,390.50",
    "eyebrow": "Funcional",
    "images": [
      {
        "src": "/images/catalog/verified/tenorio-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/tenorio-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tenorio-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/tenorio-plano-2.webp",
        "fullSrc": "/images/catalog/verified/tenorio-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tenorio-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 recámaras",
      "1 baño compartido",
      "Sala de estar",
      "Cocina de concepto abierto",
      "Terraza perimetral en U"
    ],
    "description": "Vivienda de un nivel con circulación central que conecta los ambientes y una terraza perimetral en forma de U.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 9,
    "name": "Modelo Tapantí",
    "area": "Área cerrada 51.66 m² + terraza 27.48 m²",
    "price": "B/. 81,393.00",
    "eyebrow": "Funcional",
    "images": [
      {
        "src": "/images/catalog/verified/tapanti-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/tapanti-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tapanti-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/tapanti-plano-2.webp",
        "fullSrc": "/images/catalog/verified/tapanti-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tapanti-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 recámaras",
      "2 baños",
      "Cocina abierta con desayunador",
      "Terraza amplia"
    ],
    "description": "Vivienda de un nivel con distribución funcional y simétrica que aprovecha el espacio disponible.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 10,
    "name": "Modelo Irazú",
    "area": "Área cerrada 63.58 m² + terraza 12.10 m²",
    "price": "B/. 82,797.00",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/irazu-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/irazu-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/irazu-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/irazu-plano-2.webp",
        "fullSrc": "/images/catalog/verified/irazu-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/irazu-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 recámaras",
      "2 baños",
      "Cocina abierta con desayunador",
      "Sala",
      "Lavandería",
      "Terrazas exteriores"
    ],
    "description": "Residencia de una planta que separa las áreas sociales y privadas e incorpora dos terrazas exteriores.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 11,
    "name": "Modelo Miravalles",
    "area": "Área cerrada 74.85 m² + terraza 18.45 m²",
    "price": "B/. 106,369.00",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/miravalles-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/miravalles-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/miravalles-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/miravalles-plano-2.webp",
        "fullSrc": "/images/catalog/verified/miravalles-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/miravalles-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 recámaras",
      "2 baños",
      "Walk-in closets",
      "Cocina abierta con desayunador",
      "Lavandería",
      "Terraza frontal"
    ],
    "description": "Distribución simétrica con áreas sociales y de servicio en el centro y recámaras privadas en ambos extremos.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 12,
    "name": "Modelo Arenal",
    "area": "Área cerrada 74.85 m² + terraza 27.50 m²",
    "price": "B/. 108,077.50 (sin piscina)",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/arenal-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/arenal-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/arenal-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/arenal-plano-2.webp",
        "fullSrc": "/images/catalog/verified/arenal-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/arenal-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 recámaras",
      "1 baño",
      "Sala de estar y comedor",
      "Cocina abierta con desayunador",
      "Terraza amplia",
      "Piscina no incluida en el precio"
    ],
    "description": "Vivienda de un nivel con iluminación y ventilación natural y circulación central entre las zonas privada y social. La piscina ilustrada no está incluida en el precio indicado.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 13,
    "name": "Modelo Poás",
    "area": "Área cerrada 79.50 m² + terraza 22.48 m²",
    "price": "B/. 109,409.00",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/poas-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/poas-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/poas-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/poas-plano-2.webp",
        "fullSrc": "/images/catalog/verified/poas-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/poas-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 recámaras",
      "1 baño",
      "Sala comedor",
      "Cocina abierta con desayunador",
      "Lavandería",
      "Terraza amplia"
    ],
    "description": "Vivienda de un nivel con distribución práctica y eficiente, iluminación natural y circulación central que conecta las habitaciones con la terraza exterior.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 14,
    "name": "Modelo Térraba",
    "area": "Área cerrada 125.46 m² + terraza 8.40 m² + garaje 32.87 m²",
    "price": "B/. 177,295.00",
    "eyebrow": "Familiar",
    "images": [
      {
        "src": "/images/catalog/verified/terraba-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/terraba-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/terraba-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/terraba-interior-2.webp",
        "fullSrc": "/images/catalog/verified/terraba-interior-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/terraba-interior-2-thumb.webp",
        "label": "Interior"
      },
      {
        "src": "/images/catalog/verified/terraba-interior-3.webp",
        "fullSrc": "/images/catalog/verified/terraba-interior-3-full.webp",
        "thumbnailSrc": "/images/catalog/verified/terraba-interior-3-thumb.webp",
        "label": "Interior"
      },
      {
        "src": "/images/catalog/verified/terraba-fachada-4.webp",
        "fullSrc": "/images/catalog/verified/terraba-fachada-4-full.webp",
        "thumbnailSrc": "/images/catalog/verified/terraba-fachada-4-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/terraba-plano-5.webp",
        "fullSrc": "/images/catalog/verified/terraba-plano-5-full.webp",
        "thumbnailSrc": "/images/catalog/verified/terraba-plano-5-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 recámaras + 1 de servicio",
      "3 baños",
      "Sala y comedor",
      "Cocina de concepto abierto",
      "Estudio",
      "Lavandería y depósito",
      "Terraza",
      "Garaje de 32.87 m²"
    ],
    "description": "Vivienda con áreas sociales, estudio, recámara de servicio, espacios de almacenamiento y garaje.",
    "bedrooms": 3,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 15,
    "name": "Casa Bangkok",
    "area": "Área 44 m²",
    "price": "B/. 48,365.50",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/bangkok-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/bangkok-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/bangkok-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/bangkok-plano-2.webp",
        "fullSrc": "/images/catalog/verified/bangkok-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/bangkok-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 dormitorio",
      "1 baño",
      "Sala integrada",
      "Cocina abierta",
      "Terraza de madera"
    ],
    "description": "Vivienda compacta con dormitorio matrimonial, baño, sala integrada con cocina y terraza de madera.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 16,
    "name": "Casa Singapur",
    "area": "Área 44 m²",
    "price": "B/. 51,639.00",
    "eyebrow": "Compacta",
    "images": [
      {
        "src": "/images/catalog/verified/singapur-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/singapur-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/singapur-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/singapur-plano-2.webp",
        "fullSrc": "/images/catalog/verified/singapur-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/singapur-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "1 dormitorio",
      "1 baño",
      "Sala y cocina abierta",
      "Terraza frontal"
    ],
    "description": "Vivienda compacta con un dormitorio, un baño, cocina abierta conectada a la sala y terraza frontal.",
    "bedrooms": 1,
    "hasTerrace": true,
    "compact": true
  },
  {
    "id": 17,
    "name": "Casa New York",
    "area": "Área 67 m²",
    "price": "B/. 71,561.00",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/new-york-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/new-york-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/new-york-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/new-york-plano-2.webp",
        "fullSrc": "/images/catalog/verified/new-york-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/new-york-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 dormitorios",
      "1 baño",
      "Sala integrada",
      "Cocina abierta",
      "Terraza frontal"
    ],
    "description": "Casa con dos dormitorios, baño completo y cocina abierta integrada a la sala, con amplia terraza frontal.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 18,
    "name": "Casa Dubái",
    "area": "Área 106 m²",
    "price": "B/. 114,590.00",
    "eyebrow": "Familiar",
    "images": [
      {
        "src": "/images/catalog/verified/dubai-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/dubai-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/dubai-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/dubai-plano-2.webp",
        "fullSrc": "/images/catalog/verified/dubai-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/dubai-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "3 dormitorios",
      "2 baños",
      "Sala de estar",
      "Cocina",
      "Cochera integrada",
      "Pórtico frontal"
    ],
    "description": "Vivienda familiar con tres dormitorios, dos baños completos, cocina conectada a la sala de estar, cochera y pórtico frontal.",
    "bedrooms": 3,
    "hasTerrace": false,
    "compact": false
  },
  {
    "id": 19,
    "name": "Casa Estambul",
    "area": "Área 119 m²",
    "price": "B/. 114,000.00",
    "eyebrow": "Familiar",
    "images": [
      {
        "src": "/images/catalog/verified/estambul-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/estambul-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/estambul-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/estambul-plano-2.webp",
        "fullSrc": "/images/catalog/verified/estambul-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/estambul-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "3 dormitorios",
      "1 baño",
      "Sala de estar",
      "Comedor",
      "Cocina abierta",
      "Terraza frontal"
    ],
    "description": "Casa de un nivel con tres dormitorios, baño completo, sala de estar, comedor y cocina de concepto abierto, con terraza frontal y techo inclinado.",
    "bedrooms": 3,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 20,
    "name": "Casa París",
    "area": "Área 122 m²",
    "price": "B/. 115,688.00",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/paris-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/paris-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/paris-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/paris-plano-2.webp",
        "fullSrc": "/images/catalog/verified/paris-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/paris-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 dormitorios",
      "1 baño",
      "Sala integrada",
      "Cocina con isla central",
      "Terrazas exteriores"
    ],
    "description": "Casa con dos dormitorios, baño completo y cocina con isla central integrada a la sala; terrazas exteriores y ventanales de piso a techo.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 21,
    "name": "Casa Londres",
    "area": "Área 132 m²",
    "price": "B/. 137,805.00",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/londres-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/londres-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/londres-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/londres-plano-2.webp",
        "fullSrc": "/images/catalog/verified/londres-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/londres-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 dormitorios",
      "1 baño",
      "Sala de estar integrada",
      "Cocina",
      "Terraza amplia"
    ],
    "description": "Vivienda de un nivel con dos dormitorios, baño completo y sala de estar integrada a la cocina, con estructura elevada y amplia terraza.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 22,
    "name": "Casa Tokio",
    "area": "Área 99.23 m²",
    "price": "B/. 95,641.50",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/tokio-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/tokio-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tokio-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/tokio-plano-2.webp",
        "fullSrc": "/images/catalog/verified/tokio-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/tokio-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 dormitorios",
      "1 baño",
      "Cocina",
      "Área de pilas",
      "Terrazas exteriores"
    ],
    "description": "Casa con dos dormitorios, un baño, cocina, área de pilas y terrazas exteriores, con techos inclinados y grandes ventanales.",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  },
  {
    "id": 23,
    "name": "Casa Hawai",
    "area": "Área 72 m² + piscina de 12 m²",
    "price": "B/. 80,908.00",
    "eyebrow": "Residencial",
    "images": [
      {
        "src": "/images/catalog/verified/hawai-fachada-1.webp",
        "fullSrc": "/images/catalog/verified/hawai-fachada-1-full.webp",
        "thumbnailSrc": "/images/catalog/verified/hawai-fachada-1-thumb.webp",
        "label": "Fachada"
      },
      {
        "src": "/images/catalog/verified/hawai-plano-2.webp",
        "fullSrc": "/images/catalog/verified/hawai-plano-2-full.webp",
        "thumbnailSrc": "/images/catalog/verified/hawai-plano-2-thumb.webp",
        "label": "Plano"
      }
    ],
    "features": [
      "2 dormitorios",
      "2 baños",
      "Cocina con isla central",
      "Terraza con pérgola",
      "Piscina de 12 m²"
    ],
    "description": "Casa con dos dormitorios, cada uno con baño privado, cocina abierta con isla central y terraza con pérgola conectada a una piscina de 12 m².",
    "bedrooms": 2,
    "hasTerrace": true,
    "compact": false
  }
];

export const catalogCollection = {
  eyebrow: "Catálogo completo",
  title: "Modelos CONCREBOX",
  description: "Explora todos nuestros modelos disponibles, con fachadas, planos, áreas, distribución y precios.",
  countLabel: `${catalogModels.length} modelos`,
  note: "Selecciona una imagen para verla en alta resolución y navegar entre las vistas disponibles.",
  models: catalogModels,
};
