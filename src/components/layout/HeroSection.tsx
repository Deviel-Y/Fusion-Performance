"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HERO_IMG =
  "https://images.pexels.com/photos/8875043/pexels-photo-8875043.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80";

export function HeroSection() {
  const { t, isRTL } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Athlete photo — flips to left side in RTL */}
        <div
          className={`absolute top-0 h-full w-full lg:w-[60%] ${isRTL ? "left-0" : "right-0"}`}
        >
          <Image
            src={HERO_IMG}
            alt="Elite athlete"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-[center_15%]"
            style={isRTL ? { transform: "scaleX(-1)" } : undefined}
          />
          {/* Green radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(204,255,0,0.18)_0%,transparent_55%)]" />
          {/* Edge fade — blends into the text side */}
          <div
            className={`absolute inset-0 ${
              isRTL
                ? "bg-gradient-to-l from-black via-black/75 to-transparent"
                : "bg-gradient-to-r from-black via-black/75 to-transparent"
            }`}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent" />
          {/* Top fade */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent" />
        </div>

        {/* Solid black background behind the text side */}
        <div
          className={`absolute top-0 h-full w-1/2 bg-black ${isRTL ? "right-0" : "left-0"}`}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] z-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025] z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t.hero.badge} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.92] tracking-tighter text-white font-heading"
          >
            {t.hero.headingLine1}{" "}
            <span className="text-[#CCFF00]">{t.hero.headingAccent1}</span>
            <br />
            {t.hero.headingLine2}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.hero.headingAccent2}</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-[#CCFF00]/20 -z-0" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-7 text-[#888888] text-lg leading-relaxed max-w-md"
          >
            {t.hero.subtextBefore}{" "}
            <span className="text-white font-semibold">{t.hero.subtextHighlight}</span>{" "}
            {t.hero.subtextAfter}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.cta1}{" "}
              {isRTL ? (
                <ArrowLeft className="inline w-4 h-4 ms-1" />
              ) : (
                <ArrowRight className="inline w-4 h-4 ms-1" />
              )}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.cta2}
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-10"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-3xl font-black text-[#CCFF00] font-heading">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#555555]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#555555]">
          {t.hero.scroll}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#CCFF00]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
