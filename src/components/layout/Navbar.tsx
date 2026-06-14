"use client";

import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/constants";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "@/i18n/navigation";
import type { Translations } from "@/libs/i18n/translations";
import { Globe, Menu, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { create } from "zustand";

type NavState = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const useNavStore = create<NavState>((set) => ({
  isOpen: false,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  close: () => set({ isOpen: false }),
}));

export function Navbar() {
  const { isOpen, toggle, close } = useNavStore();
  const [scrolled, setScrolled] = useState(false);
  const { t, lang } = useTranslation();
  const router = useRouter();

  const switchLocale = () => {
    router.push("/", { locale: lang === "fa" ? "en" : "fa" });
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-8 h-8 bg-[#CCFF00]">
              <Zap className="w-4 h-4 text-black" fill="black" />
            </div>
            <span className="text-white font-black uppercase tracking-wider text-sm font-heading">
              Fusion <span className="text-[#CCFF00]">Performance</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[#888888] hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                >
                  {t.nav[item.key as keyof Translations["nav"]]}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#888888] hover:text-[#CCFF00] border border-white/10 hover:border-[#CCFF00]/40 px-2.5 py-1.5 transition-all duration-200"
              aria-label="Switch language"
            >
              <Globe className="w-3 h-3" />
              <span
                style={
                  lang === "en"
                    ? { fontFamily: "var(--font-vazirmatn), sans-serif" }
                    : undefined
                }
              >
                {t.nav.langSwitch}
              </span>
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.nav.startToday}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggle}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={close}
                    className="text-white text-sm font-semibold uppercase tracking-widest hover:text-[#CCFF00] transition-colors"
                  >
                    {t.nav[item.key as keyof Translations["nav"]]}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={switchLocale}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#888888] uppercase tracking-widest"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span
                    style={
                      lang === "en"
                        ? { fontFamily: "var(--font-vazirmatn), sans-serif" }
                        : undefined
                    }
                  >
                    {t.nav.langSwitch}
                  </span>
                </button>
              </li>
              <li className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    close();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t.nav.startToday}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
