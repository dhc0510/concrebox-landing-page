"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  catalogCollections,
  type CatalogModel,
  type CatalogYear,
} from "@/data/catalog";
import { ModelCard } from "./ModelCard";
import {
  ModelFilters,
  type CatalogFilter,
} from "./ModelFilters";
import { ModelGalleryModal } from "./ModelGalleryModal";
import { Reveal } from "./Reveal";

export function CatalogSection() {
  const [selectedCatalog, setSelectedCatalog] = useState<CatalogYear>("2025");
  const [filter, setFilter] = useState<CatalogFilter>("all");
  const [selectedModel, setSelectedModel] = useState<CatalogModel | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const activeCatalog = catalogCollections[selectedCatalog];

  const filteredModels = useMemo(
    () =>
      activeCatalog.models.filter((model) => {
        if (filter === "one-bedroom") return model.bedrooms === 1;
        if (filter === "two-bedrooms") return model.bedrooms === 2;
        if (filter === "terrace") return model.hasTerrace;
        if (filter === "compact") return model.compact;
        return true;
      }),
    [activeCatalog.models, filter],
  );

  const changeCatalog = (year: CatalogYear) => {
    setSelectedCatalog(year);
    setFilter("all");
    setSelectedModel(null);
    setSelectedImage(0);
  };

  const openGallery = (model: CatalogModel, imageIndex: number) => {
    setSelectedImage(imageIndex);
    setSelectedModel(model);
  };

  const generalWhatsapp =
    "https://wa.me/50768272867?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20CONCREBOX%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20modelo%20personalizado.";

  return (
    <>
      <section id="catalogo" className="catalog section section--light">
        <div className="container">
          <div className="catalog__heading">
            <div className="section-heading">
              <span className="eyebrow">
                <span />
                {activeCatalog.eyebrow}
              </span>
              <h2>{activeCatalog.title}</h2>
              <p>{activeCatalog.description}</p>
            </div>
            <div className="catalog__heading-note">
              <span>{activeCatalog.countLabel}</span>
              <p>{activeCatalog.note}</p>
            </div>
          </div>

          <div className="catalog-switcher" aria-label="Seleccionar catálogo">
            {(["2025", "2026"] as CatalogYear[]).map((year) => (
              <button
                key={year}
                type="button"
                className={selectedCatalog === year ? "is-active" : ""}
                aria-pressed={selectedCatalog === year}
                onClick={() => changeCatalog(year)}
              >
                {catalogCollections[year].label}
              </button>
            ))}
          </div>

          <ModelFilters
            active={filter}
            onChange={setFilter}
            resultCount={filteredModels.length}
          />

          <motion.div layout className="catalog-grid">
            <AnimatePresence mode="popLayout">
              {filteredModels.map((model, index) => (
                <motion.div
                  layout
                  key={`${selectedCatalog}-${model.id}`}
                  className="catalog-card"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min(index * 0.035, 0.18),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ModelCard model={model} onOpen={openGallery} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal className="catalog__footer">
            <div className="catalog__cta-box">
              <div>
                <span>¿No encuentras el modelo perfecto?</span>
                <p>
                  Creamos diseños personalizados adaptados a tu visión, terreno
                  y necesidades.
                </p>
              </div>
              <a
                href={generalWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--gold catalog__cta-button"
              >
                Modelo personalizado <ArrowRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ModelGalleryModal
        key={`${selectedModel?.id ?? "closed"}-${selectedImage}`}
        model={selectedModel}
        initialImage={selectedImage}
        onClose={() => setSelectedModel(null)}
      />
    </>
  );
}
