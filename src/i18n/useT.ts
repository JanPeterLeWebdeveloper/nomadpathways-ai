"use client";

import { useI18n } from "./provider";

export function useT() {
  const { t, tPlural, locale } = useI18n();
  return { t, tPlural, locale };
}
