"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type ThemePreference = "system" | "light" | "dark";

const STORAGE_KEY = "imena-theme";

function resolveTheme(preference: ThemePreference) {
  if (preference === "dark") return "dark";
  if (preference === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;
  const resolved = resolveTheme(preference);
  root.classList.toggle("theme-dark", resolved === "dark");
}

export default function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemePreference | null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      setPreference(stored);
      applyTheme(stored);
      return;
    }
    applyTheme("system");
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (preference === "system") {
        applyTheme("system");
      }
    };
    if (media.addEventListener) {
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
    media.addListener(handler);
    return () => media.removeListener(handler);
  }, [preference]);

  const cyclePreference = () => {
    const next: ThemePreference =
      preference === "system" ? "light" : preference === "light" ? "dark" : "system";
    setPreference(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  const resolved = typeof window === "undefined" ? "light" : resolveTheme(preference);
  const Icon = resolved === "dark" ? Moon : Sun;
  const label = preference === "system" ? "System" : preference === "dark" ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={cyclePreference}
      className="fixed bottom-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-[#153273] shadow-lg backdrop-blur hover:bg-white"
      aria-label={`Theme: ${label}`}
      title={`Theme: ${label}`}
    >
      <Icon size={18} />
    </button>
  );
}
