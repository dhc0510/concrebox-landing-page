"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("concrebox-theme-change", callback);
  return () => window.removeEventListener("concrebox-theme-change", callback);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme ?? "light",
    () => "light",
  );
  const dark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={dark ? "Activar modo día" : "Activar modo noche"}
      title={dark ? "Activar modo día" : "Activar modo noche"}
      onClick={() => window.dispatchEvent(new CustomEvent("concrebox-theme-select", { detail: dark ? "light" : "dark" }))}
    >
      <Sun className="theme-toggle__sun" size={19} aria-hidden="true" />
      <Moon className="theme-toggle__moon" size={19} aria-hidden="true" />
      <span className="theme-toggle__label">{dark ? "Día" : "Noche"}</span>
    </button>
  );
}
