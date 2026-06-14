"use client";

import type { Translations } from "@/libs/i18n/translations";
import type { Lang } from "@/types/types";
import { useLocale, useMessages } from "next-intl";

export function useTranslation() {
  const lang = useLocale() as Lang;
  const messages = useMessages() as Translations;
  const isRTL = lang === "fa";
  return { t: messages, lang, isRTL };
}
