import { Locale, defaultLocale } from "./config";

type TranslationDictionary = Record<string, any>;
type Translations = Record<Locale, TranslationDictionary>;

// Cache for loaded translations
const translationsCache: Partial<Translations> = {};

// Load translation file
export async function loadTranslations(locale: Locale): Promise<TranslationDictionary> {
  if (translationsCache[locale]) {
    return translationsCache[locale]!;
  }

  try {
    const translations = await import(`@/locales/${locale}.json`);
    translationsCache[locale] = translations.default || translations;
    return translationsCache[locale]!;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    // Fallback to default locale
    if (locale !== defaultLocale) {
      return loadTranslations(defaultLocale);
    }
    return {};
  }
}

// Get nested value from object using dot notation
function getNestedValue(obj: any, path: string): string | undefined {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return typeof current === "string" ? current : undefined;
}

// Replace variables in string
function interpolate(str: string, vars?: Record<string, any>): string {
  if (!vars) return str;

  return str.replace(/\{(\w+)\}/g, (match, key) => {
    return vars[key] !== undefined ? String(vars[key]) : match;
  });
}

// Main translator function
export function createTranslator(translations: TranslationDictionary, locale: Locale) {
  return function t(key: string, vars?: Record<string, any>): string {
    // Try to get translation for current locale
    let translation = getNestedValue(translations, key);

    // Fallback to English if not found and locale is not English
    if (!translation && locale !== defaultLocale && translationsCache[defaultLocale]) {
      translation = getNestedValue(translationsCache[defaultLocale]!, key);
    }

    // If still not found, return the key itself
    if (!translation) {
      console.warn(`Missing translation for key: ${key} (locale: ${locale})`);
      return key;
    }

    // Interpolate variables
    return interpolate(translation, vars);
  };
}

// Plural helper
export function createPluralTranslator(translations: TranslationDictionary, locale: Locale) {
  return function tPlural(key: string, count: number, vars?: Record<string, any>): string {
    // Simple plural rules (English-style for now)
    const pluralKey = count === 1 ? `${key}_one` : `${key}_other`;

    let translation = getNestedValue(translations, pluralKey);

    // Fallback to default key
    if (!translation) {
      translation = getNestedValue(translations, key);
    }

    // Fallback to English
    if (!translation && locale !== defaultLocale && translationsCache[defaultLocale]) {
      const defaultTranslation =
        getNestedValue(translationsCache[defaultLocale]!, pluralKey) ||
        getNestedValue(translationsCache[defaultLocale]!, key);
      if (defaultTranslation) {
        translation = defaultTranslation;
      }
    }

    if (!translation) {
      console.warn(`Missing plural translation for key: ${key} (locale: ${locale})`);
      return key;
    }

    return interpolate(translation, { ...vars, count });
  };
}
