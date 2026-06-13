"use client";

import { useLangStore } from "@/libs/i18n/langStore";
import { translations } from "@/libs/i18n/translations";

export function useTranslation() {
  const lang = useLangStore((s) => s.lang);
  const t = translations[lang];
  const isRTL = lang === "fa";
  return { t, lang, isRTL };
}
