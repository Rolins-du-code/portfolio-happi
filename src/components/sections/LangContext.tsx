"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/lib/i18n";

type T = typeof translations.fr;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}

const LangContext = createContext<LangCtx>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    document.title = translations[l].meta_title;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
