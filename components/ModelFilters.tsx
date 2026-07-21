import type { ChangeEvent, FormEvent } from "react";

export type CatalogFilter =
  | "all"
  | "one-bedroom"
  | "two-bedrooms"
  | "terrace"
  | "compact";

export type CatalogBedroomFilter = "all" | "1" | "2" | "3";
export type CatalogAmenityFilter = "all" | "terrace" | "pool" | "garage";
export type CatalogSort =
  | "default"
  | "price-asc"
  | "price-desc"
  | "area-asc"
  | "area-desc";

const filters: { value: CatalogFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "one-bedroom", label: "1 dormitorio" },
  { value: "two-bedrooms", label: "2 dormitorios" },
  { value: "terrace", label: "Con terraza" },
  { value: "compact", label: "Compactos" },
];

export function ModelFilters({
  active,
  onChange,
  resultCount,
  searchTerm,
  onSearchTermChange,
  bedroomFilter,
  onBedroomFilterChange,
  amenityFilter,
  onAmenityFilterChange,
  maxPrice,
  onMaxPriceChange,
  priceCeiling,
  sort,
  onSortChange,
  onClear,
  hasActiveFilters,
}: {
  active: CatalogFilter;
  onChange: (filter: CatalogFilter) => void;
  resultCount: number;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  bedroomFilter: CatalogBedroomFilter;
  onBedroomFilterChange: (value: CatalogBedroomFilter) => void;
  amenityFilter: CatalogAmenityFilter;
  onAmenityFilterChange: (value: CatalogAmenityFilter) => void;
  maxPrice: number;
  onMaxPriceChange: (value: number) => void;
  priceCeiling: number;
  sort: CatalogSort;
  onSortChange: (value: CatalogSort) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}) {
  const formattedMaxPrice = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(maxPrice);
  const handleMaxPriceChange = (
    event: ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>,
  ) => {
    onMaxPriceChange(Number(event.currentTarget.value));
  };

  return (
    <div className="catalog-filters" aria-label="Filtrar modelos">
      <div className="catalog-filters__top">
        <div className="catalog-filters__list" role="group">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={active === filter.value ? "is-active" : ""}
              aria-pressed={active === filter.value}
              onClick={() => onChange(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span className="catalog-filters__count">
          {resultCount} {resultCount === 1 ? "modelo" : "modelos"}
        </span>
      </div>

      <div className="catalog-filters__advanced">
        <label className="catalog-filter-field catalog-filter-field--search">
          <span>Buscar</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            placeholder="Nombre o detalle"
          />
        </label>

        <label className="catalog-filter-field">
          <span>Dormitorios</span>
          <select
            value={bedroomFilter}
            onChange={(event) =>
              onBedroomFilterChange(event.target.value as CatalogBedroomFilter)
            }
          >
            <option value="all">Todos</option>
            <option value="1">1 dormitorio</option>
            <option value="2">2 dormitorios</option>
            <option value="3">3 dormitorios</option>
          </select>
        </label>

        <label className="catalog-filter-field">
          <span>Amenidades</span>
          <select
            value={amenityFilter}
            onChange={(event) =>
              onAmenityFilterChange(event.target.value as CatalogAmenityFilter)
            }
          >
            <option value="all">Todas</option>
            <option value="terrace">Terraza</option>
            <option value="pool">Piscina</option>
            <option value="garage">Cochera</option>
          </select>
        </label>

        <label className="catalog-filter-field catalog-filter-field--price">
          <span>Hasta B/. {formattedMaxPrice}</span>
          <input
            type="range"
            min={0}
            max={priceCeiling}
            step={1000}
            value={maxPrice}
            onInput={handleMaxPriceChange}
            onChange={handleMaxPriceChange}
          />
        </label>

        <label className="catalog-filter-field">
          <span>Ordenar</span>
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as CatalogSort)}
          >
            <option value="default">Orden original</option>
            <option value="price-asc">Menor precio</option>
            <option value="price-desc">Mayor precio</option>
            <option value="area-asc">Menor área</option>
            <option value="area-desc">Mayor área</option>
          </select>
        </label>

        <button
          type="button"
          className="catalog-filters__clear"
          onClick={onClear}
          disabled={!hasActiveFilters}
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
