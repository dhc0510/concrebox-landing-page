"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  catalogCollections,
  type CatalogMode,
  type CatalogModel,
} from "@/data/catalog";
import { ModelCard } from "./ModelCard";
import {
  ModelFilters,
  type CatalogAmenityFilter,
  type CatalogBedroomFilter,
  type CatalogFilter,
  type CatalogSort,
} from "./ModelFilters";
import { ModelGalleryModal } from "./ModelGalleryModal";
import { Reveal } from "./Reveal";

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getModelPrice(model: CatalogModel) {
  if (!model.price) return 0;
  const numericPrice =
    model.price.match(/\d[\d,]*(?:\.\d+)?/)?.[0].replace(/,/g, "") ?? "";
  return Number.parseFloat(numericPrice) || 0;
}

function getModelArea(model: CatalogModel) {
  const match = model.area.match(/\d+(?:[.,]\d+)?/);
  if (!match) return 0;
  return Number.parseFloat(match[0].replace(",", ".")) || 0;
}

function modelIncludes(model: CatalogModel, term: string) {
  const searchableText = normalizeText(
    [
      model.name,
      model.area,
      model.price ?? "",
      model.eyebrow,
      model.description,
      ...model.features,
    ].join(" "),
  );

  return searchableText.includes(normalizeText(term));
}

function modelHasAmenity(model: CatalogModel, amenity: CatalogAmenityFilter) {
  if (amenity === "all") return true;
  const text = normalizeText(
    [model.name, model.area, model.description, ...model.features].join(" "),
  );

  if (amenity === "terrace") return model.hasTerrace;
  if (amenity === "pool") return text.includes("piscina");
  if (amenity === "garage")
    return (
      text.includes("cochera") ||
      text.includes("garaje") ||
      text.includes("garage")
    );

  return true;
}

export function CatalogSection() {
  const [selectedCatalog, setSelectedCatalog] = useState<CatalogMode>("2025");
  const [filter, setFilter] = useState<CatalogFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [bedroomFilter, setBedroomFilter] =
    useState<CatalogBedroomFilter>("all");
  const [amenityFilter, setAmenityFilter] =
    useState<CatalogAmenityFilter>("all");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sort, setSort] = useState<CatalogSort>("default");
  const [selectedModel, setSelectedModel] = useState<CatalogModel | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const activeCatalog = catalogCollections[selectedCatalog];

  const priceCeiling = useMemo(
    () =>
      Math.ceil(
        Math.max(...activeCatalog.models.map((model) => getModelPrice(model))) /
          1000,
      ) * 1000,
    [activeCatalog.models],
  );

  const activeMaxPrice = maxPrice ?? priceCeiling;

  const resetFilters = () => {
    setFilter("all");
    setSearchTerm("");
    setBedroomFilter("all");
    setAmenityFilter("all");
    setMaxPrice(null);
    setSort("default");
  };

  const filteredModels = useMemo(() => {
    const models = activeCatalog.models.filter((model) => {
      if (filter === "one-bedroom" && model.bedrooms !== 1) return false;
      if (filter === "two-bedrooms" && model.bedrooms !== 2) return false;
      if (filter === "terrace" && !model.hasTerrace) return false;
      if (filter === "compact" && !model.compact) return false;
      if (bedroomFilter !== "all" && model.bedrooms !== Number(bedroomFilter))
        return false;
      if (!modelHasAmenity(model, amenityFilter)) return false;
      if (searchTerm.trim() && !modelIncludes(model, searchTerm)) return false;
      if (
        priceCeiling > 0 &&
        activeMaxPrice > 0 &&
        activeMaxPrice < priceCeiling &&
        getModelPrice(model) > activeMaxPrice
      )
        return false;
      return true;
    });

    return models
      .map((model, index) => ({ model, index }))
      .sort((a, b) => {
        if (sort === "price-asc")
          return getModelPrice(a.model) - getModelPrice(b.model);
        if (sort === "price-desc")
          return getModelPrice(b.model) - getModelPrice(a.model);
        if (sort === "area-asc")
          return getModelArea(a.model) - getModelArea(b.model);
        if (sort === "area-desc")
          return getModelArea(b.model) - getModelArea(a.model);
        return a.index - b.index;
      })
      .map(({ model }) => model);
  }, [
    activeCatalog.models,
    amenityFilter,
    activeMaxPrice,
    bedroomFilter,
    filter,
    priceCeiling,
    searchTerm,
    sort,
  ]);

  const hasActiveFilters =
    filter !== "all" ||
    searchTerm.trim().length > 0 ||
    bedroomFilter !== "all" ||
    amenityFilter !== "all" ||
    sort !== "default" ||
    (priceCeiling > 0 && activeMaxPrice < priceCeiling);

  const changeCatalog = (mode: CatalogMode) => {
    setSelectedCatalog(mode);
    resetFilters();
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
            {(["2025", "2026", "complete"] as CatalogMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                className={selectedCatalog === mode ? "is-active" : ""}
                aria-pressed={selectedCatalog === mode}
                onClick={() => changeCatalog(mode)}
              >
                {catalogCollections[mode].label}
              </button>
            ))}
          </div>

          <ModelFilters
            active={filter}
            onChange={setFilter}
            resultCount={filteredModels.length}
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            bedroomFilter={bedroomFilter}
            onBedroomFilterChange={setBedroomFilter}
            amenityFilter={amenityFilter}
            onAmenityFilterChange={setAmenityFilter}
            maxPrice={activeMaxPrice}
            onMaxPriceChange={(value) => setMaxPrice(value)}
            priceCeiling={priceCeiling}
            sort={sort}
            onSortChange={setSort}
            onClear={resetFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <motion.div layout className="catalog-grid">
            <AnimatePresence mode="popLayout">
              {filteredModels.map((model, index) => (
                <motion.div
                  layout
                  key={`${selectedCatalog}-${model.id}-${model.name}`}
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
        key={`${selectedModel?.id ?? "closed"}-${selectedModel?.name ?? ""}-${selectedImage}`}
        model={selectedModel}
        initialImage={selectedImage}
        onClose={() => setSelectedModel(null)}
      />
    </>
  );
}
