import { Locale, supportedLocales, defaultLocale } from "./config";
import { localeStorage } from "./storage";

// Detect locale from browser
function getBrowserLocale(): Locale | null {
  if (typeof navigator === "undefined") return null;

  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (!browserLang) return null;

  // Extract base language (de-DE → de)
  const baseLang = browserLang.split("-")[0].toLowerCase();

  // Check if supported
  if (supportedLocales.includes(baseLang as Locale)) {
    return baseLang as Locale;
  }

  return null;
}

// Detect locale with fallback chain
export function detectLocale(): Locale {
  // 1. Check cookie
  const cookieLocale = localeStorage.getCookie();
  if (cookieLocale && supportedLocales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Check localStorage
  const storedLocale = localeStorage.get();
  if (storedLocale && supportedLocales.includes(storedLocale)) {
    return storedLocale;
  }

  // 3. Check browser language
  const browserLocale = getBrowserLocale();
  if (browserLocale) {
    return browserLocale;
  }

  // 4. Default
  return defaultLocale;
}
