"use client";

import { motion } from "motion/react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { FEATURES } from "@/constants";
import { Dumbbell, Salad, MessageCircle, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import type { Translations } from "@/libs/i18n/translations";

const ICON_MAP = {
  training: Dumbbell,
  nutrition: Salad,
  support: MessageCircle,
  tracking: TrendingUp,
};

export function BentoFeatures() {
  const { t, isRTL } = useTranslation();

  return (
    <section className="relative bg-black py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t.bento.badge} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-4xl md:text-5xl font-black uppercase tracking-tighter text-white font-heading leading-tight"
          >
            {t.bento.headingBefore}{" "}
            <span className="text-[#CCFF00]">{t.bento.headingAccent}</span>
            {t.bento.headingAfter && <> {t.bento.headingAfter}</>}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 text-[#888888] max-w-lg text-base leading-relaxed"
          >
            {t.bento.subtext}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.id as keyof typeof ICON_MAP];
            const isWide = feature.colSpan === 2;
            const text = t.features[feature.id as keyof Translations["features"]];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden border border-white/8 bg-white/[0.02] backdrop-blur-sm p-8 flex flex-col justify-between hover:border-[#CCFF00]/30 transition-all duration-500 hover:bg-white/[0.04] ${
                  isWide ? "lg:col-span-2" : ""
                }`}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#CCFF00]/0 group-hover:border-[#CCFF00]/60 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#CCFF00]/0 group-hover:border-[#CCFF00]/60 transition-all duration-500" />

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(204,255,0,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 border border-[#CCFF00]/20 bg-[#CCFF00]/5 group-hover:bg-[#CCFF00]/10 transition-colors duration-300 mb-6">
                    {Icon && (
                      <Icon className="w-5 h-5 text-[#CCFF00]" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white font-heading mb-3">
                    {text.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {text.description}
                  </p>
                </div>

                {isWide && (
                  <div className="relative z-10 mt-8 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t.bento.learnMore}
                    <span className={`ml-1 group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? "rotate-180" : ""}`}>→</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
