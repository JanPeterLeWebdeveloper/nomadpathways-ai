"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, defaultLocale } from "./config";
import { detectLocale } from "./detect";
import { localeStorage } from "./storage";
import { loadTranslations, createTranslator, createPluralTranslator } from "./index";

type TranslatorFunction = (key: string, vars?: Record<string, any>) => string;
type PluralTranslatorFunction = (key: string, count: number, vars?: Record<string, any>) => string;

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslatorFunction;
  tPlural: PluralTranslatorFunction;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations
  useEffect(() => {
    const initLocale = detectLocale();
    setLocaleState(initLocale);

    loadTranslations(initLocale).then((trans) => {
      setTranslations(trans);
      setIsLoading(false);
    });
  }, []);

  // Change locale
  const setLocale = async (newLocale: Locale) => {
    setIsLoading(true);
    setLocaleState(newLocale);
    localeStorage.set(newLocale);

    const trans = await loadTranslations(newLocale);
    setTranslations(trans);
    setIsLoading(false);
  };

  // Create translator functions
  const t = createTranslator(translations, locale);
  const tPlural = createPluralTranslator(translations, locale);

  const value: I18nContextValue = {
    locale,
    setLocale,
    t,
    tPlural,
    isLoading,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
