"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "az" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({
  lang: "az",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("az");

  useEffect(() => {
    // Deliberate: server has no localStorage, so the first render must use
    // the "az" default and sync the saved preference in on mount to avoid
    // a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "az") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
