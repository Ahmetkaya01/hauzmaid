"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { DICTIONARIES, LANG_STORAGE_KEY, type Dictionary, type Lang } from "@/lib/i18n";

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getLangSnapshot(): Lang {
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return stored === "ms" ? "ms" : "en";
}

function getServerLangSnapshot(): Lang {
  return "en";
}

function setStoredLang(lang: Lang): void {
  window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: DICTIONARIES.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getLangSnapshot, getServerLangSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang: setStoredLang, t: DICTIONARIES[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): LanguageContextValue {
  return useContext(LanguageContext);
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-md border border-[var(--hm-border)] text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language / Bahasa"
    >
      {(
        [
          ["en", "EN"],
          ["ms", "BM"],
        ] as const
      ).map(([value, label]) => (
        <button
          key={value}
          type="button"
          onClick={() => setLang(value)}
          aria-pressed={lang === value}
          className={`min-h-10 px-2.5 py-2 transition-colors sm:min-h-0 sm:py-1.5 ${
            lang === value
              ? "bg-[var(--hm-accent)] text-white"
              : "text-[var(--hm-muted)] hover:text-[var(--hm-text)]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
