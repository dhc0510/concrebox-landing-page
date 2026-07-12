"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  CarFront,
  ChefHat,
  Expand,
  Sofa,
  Waves,
} from "lucide-react";
import type { CatalogModel } from "@/data/catalog";
import { useState } from "react";

function FeatureIcon({ feature }: { feature: string }) {
  const normalized = feature.toLowerCase();
  if (normalized.includes("dormitorio") || normalized.includes("recámara"))
    return <BedDouble />;
  if (normalized.includes("baño")) return <Bath />;
  if (normalized.includes("cocina")) return <ChefHat />;
  if (normalized.includes("cochera")) return <CarFront />;
  if (normalized.includes("piscina") || normalized.includes("terraza"))
    return <Waves />;
  return <Sofa />;
}

export function ModelCard({
  model,
  onOpen,
}: {
  model: CatalogModel;
  onOpen: (model: CatalogModel, imageIndex: number) => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const image = model.images[activeImage];

  const changeImage = (direction: 1 | -1) => {
    setActiveImage(
      (current) =>
        (current + direction + model.images.length) % model.images.length,
    );
  };

  const whatsapp = `https://wa.me/50768272867?text=${encodeURIComponent(
    `Hola, vi la página de CONCREBOX y quiero más información sobre ${model.name} (${model.area}${model.price ? `, ${model.price}` : ""}).`,
  )}`;

  return (
    <article className="catalog-card__inner">
      <div
        className={`catalog-card__media ${
          image.label === "Plano" ? "is-plan" : ""
        }`}
      >
        {model.images.map((item, index) => (
          <Image
            key={item.src}
            src={item.src}
            alt={`${item.label} de ${model.name}`}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className={activeImage === index ? "is-active" : ""}
          />
        ))}

        <button
          type="button"
          className="catalog-card__zoom"
          onClick={() => onOpen(model, activeImage)}
          aria-label={`Ver ${image.label.toLowerCase()} de ${model.name} en tamaño completo`}
        >
          <span>
            <Expand size={18} />
            Ver imagen completa
          </span>
        </button>

        <div className="catalog-card__media-top">
          <span>{image.label}</span>
          <span>
            {activeImage + 1} / {model.images.length}
          </span>
        </div>

        <div className="catalog-card__media-controls">
          <button
            type="button"
            onClick={() => changeImage(-1)}
            aria-label={`Imagen anterior de ${model.name}`}
          >
            <ArrowLeft size={17} />
          </button>
          <div>
            {model.images.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={activeImage === index ? "is-active" : ""}
                onClick={() => setActiveImage(index)}
                aria-label={`Ver ${item.label.toLowerCase()} de ${model.name}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => changeImage(1)}
            aria-label={`Imagen siguiente de ${model.name}`}
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <div className="catalog-card__content">
        <header className="catalog-card__header">
          <div className="catalog-card__title">
            <span className="catalog-card__number">
              {String(model.id).padStart(2, "0")}
            </span>
            <div>
              <h3>{model.name}</h3>
              <span className="catalog-card__area">{model.area}</span>
              {model.price && (
                <span className="catalog-card__price">{model.price}</span>
              )}
            </div>
          </div>
          <span className="catalog-card__badge">{model.eyebrow}</span>
        </header>

        <ul className="catalog-card__features">
          {model.features.map((feature) => (
            <li key={feature}>
              <FeatureIcon feature={feature} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="catalog-card__description">{model.description}</p>

        <div className="catalog-card__actions">
          <button type="button" onClick={() => onOpen(model, 0)}>
            Ver detalles <Expand size={15} />
          </button>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Solicitar información sobre ${model.name}`}
          >
            Solicitar información <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
