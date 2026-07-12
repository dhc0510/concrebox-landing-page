"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MessageCircle, X } from "lucide-react";
import type { CatalogModel } from "@/data/catalog";
import { useEffect, useRef, useState } from "react";

export function ModelGalleryModal({
  model,
  initialImage,
  onClose,
}: {
  model: CatalogModel | null;
  initialImage: number;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(initialImage);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!model) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight")
        setActiveImage((current) => (current + 1) % model.images.length);
      if (event.key === "ArrowLeft")
        setActiveImage(
          (current) =>
            (current - 1 + model.images.length) % model.images.length,
        );
      if (event.key === "Tab") {
        const modal = document.querySelector(".model-modal__dialog");
        const focusable = modal?.querySelectorAll<HTMLElement>(
          "button, a[href], [tabindex]:not([tabindex='-1'])",
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [model, onClose]);

  const whatsapp = model
    ? `https://wa.me/50768272867?text=${encodeURIComponent(
        `Hola, vi la página de CONCREBOX y quiero más información sobre ${model.name} (${model.area}${model.price ? `, ${model.price}` : ""}).`,
      )}`
    : "#";

  return (
    <AnimatePresence>
      {model && (
        <motion.div
          className="model-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="model-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="model-modal__dialog"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="model-modal__header">
              <div>
                <span>
                  Modelo {String(model.id).padStart(2, "0")} ·{" "}
                  {model.images[activeImage].label}
                </span>
                <h2 id="model-modal-title">{model.name}</h2>
                <p>{model.area}</p>
                {model.price && <p>{model.price}</p>}
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Cerrar galería"
              >
                <X />
              </button>
            </header>

            <div
              className={`model-modal__stage ${
                model.images[activeImage].label === "Plano" ? "is-plan" : ""
              }`}
            >
              <Image
                src={model.images[activeImage].src}
                alt={`${model.images[activeImage].label} de ${model.name}`}
                fill
                priority
                sizes="95vw"
              />
              <button
                type="button"
                className="model-modal__arrow model-modal__arrow--left"
                onClick={() =>
                  setActiveImage(
                    (activeImage - 1 + model.images.length) %
                      model.images.length,
                  )
                }
                aria-label="Imagen anterior"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                className="model-modal__arrow model-modal__arrow--right"
                onClick={() =>
                  setActiveImage((activeImage + 1) % model.images.length)
                }
                aria-label="Imagen siguiente"
              >
                <ArrowRight />
              </button>
            </div>

            <footer className="model-modal__footer">
              <div className="model-modal__thumbnails">
                {model.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={activeImage === index ? "is-active" : ""}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Ver ${image.label.toLowerCase()}`}
                  >
                    <span>
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="120px"
                        className={image.label === "Plano" ? "is-plan" : ""}
                      />
                    </span>
                    {image.label}
                  </button>
                ))}
              </div>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} />
                Consultar este modelo
              </a>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
