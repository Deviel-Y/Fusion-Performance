"use client";

import { useEffect } from "react";
import { useLangStore } from "@/libs/i18n/langStore";

export function LangProvider() {
  const lang = useLangStore((s) => s.lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
