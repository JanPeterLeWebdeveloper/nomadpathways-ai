export const supportedLocales = ["en", "de", "es", "ko"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export const cookieName = "np_locale";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  ko: "한국어",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
  es: "🇪🇸",
  ko: "🇰🇷",
};
