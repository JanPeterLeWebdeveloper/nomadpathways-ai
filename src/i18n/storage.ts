import { Locale, cookieName } from "./config";

// Storage abstraction for web (can be replaced for mobile)
export const localeStorage = {
  get: (): Locale | null => {
    // Try localStorage first (works for both web and mobile)
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(cookieName);
        if (stored) return stored as Locale;
      } catch (e) {
        console.warn("Failed to read from localStorage:", e);
      }
    }
    return null;
  },

  set: (locale: Locale): void => {
    // Set in localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(cookieName, locale);
      } catch (e) {
        console.warn("Failed to write to localStorage:", e);
      }
    }

    // Set cookie for server-side detection
    if (typeof document !== "undefined") {
      document.cookie = `${cookieName}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    }
  },

  getCookie: (): Locale | null => {
    if (typeof document === "undefined") return null;

    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === cookieName) {
        return value as Locale;
      }
    }
    return null;
  },
};
