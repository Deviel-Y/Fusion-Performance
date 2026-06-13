import { create } from "zustand";

export type Lang = "en" | "fa";

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

export const useLangStore = create<LangState>((set) => ({
  lang: "fa",
  setLang: (lang) => set({ lang }),
  toggleLang: () => set((s) => ({ lang: s.lang === "fa" ? "en" : "fa" })),
}));
