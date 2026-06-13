"use client";

import { motion } from "motion/react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/constants";
import { Flame, Target, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const SERVICE_ICONS = {
  strength: Target,
  "fat-loss": Flame,
  hiit: Zap,
};

export function ServiceCards() {
  const { t } = useTranslation();

  return (
    <section
      id="programs"
      className="relative bg-[#050505] py-28 px-6 lg:px-8"
    >
      {/* Subtle top grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(204,255,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t.services.badge} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-4xl md:text-5xl font-black uppercase tracking-tighter text-white font-heading"
          >
            {t.services.headingBefore}{" "}
            <span className="text-[#CCFF00]">{t.services.headingAccent}</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS];
            const text = t.services.items[i];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col bg-[#0d0d0d] border border-white/8 p-8 overflow-hidden transition-all duration-400 hover:border-[#CCFF00]/40 hover:shadow-[0_0_50px_rgba(204,255,0,0.08)]"
              >
                {/* Top glow on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/0 to-transparent group-hover:via-[#CCFF00]/60 transition-all duration-500" />

                {/* Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20">
                    {text.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 border border-white/10 bg-white/[0.03] group-hover:border-[#CCFF00]/30 group-hover:bg-[#CCFF00]/5 transition-all duration-300 mb-6">
                  {Icon && (
                    <Icon className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors duration-300" strokeWidth={1.5} />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black uppercase tracking-tight text-white font-heading mb-3">
                  {text.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed flex-1">
                  {text.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-white/6 group-hover:bg-[#CCFF00]/15 transition-colors duration-300" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-7">
                  {text.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-black text-[#CCFF00] font-heading">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-[#555555] font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full group-hover:bg-[#CCFF00] group-hover:text-black transition-colors duration-300"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.services.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
