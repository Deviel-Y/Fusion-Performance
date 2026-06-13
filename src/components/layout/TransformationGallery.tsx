"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TRANSFORMATIONS } from "@/constants";
import { useTranslation } from "@/hooks/useTranslation";

function TransformationCard({
  transformation,
  index,
  before,
  after,
  duration,
  result,
  isRTL,
}: {
  transformation: (typeof TRANSFORMATIONS)[0];
  index: number;
  before: string;
  after: string;
  duration: string;
  result: string;
  isRTL: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative overflow-hidden border border-white/8 hover:border-[#CCFF00]/30 transition-all duration-400 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)]"
    >
      {/* Before / After panels */}
      <div className="flex h-56 relative">
        {/* ── BEFORE ── */}
        <div className="flex-1 relative overflow-hidden">
          <Image
            src={transformation.photoUrl}
            alt={`${transformation.name} ${before}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover object-top"
            style={{
              filter: "grayscale(100%) brightness(0.38) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-0.5">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#555555]">
              {before}
            </span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="relative flex items-center justify-center z-10 shrink-0">
          <div className="absolute inset-y-0 w-px bg-[#CCFF00]/50" />
          <div className="relative z-10 w-7 h-7 bg-[#CCFF00] flex items-center justify-center shadow-[0_0_12px_rgba(204,255,0,0.5)]">
            <span className="text-black text-[10px] font-black">{isRTL ? "←" : "→"}</span>
          </div>
        </div>

        {/* ── AFTER ── */}
        <div className="flex-1 relative overflow-hidden">
          <Image
            src={transformation.photoUrl}
            alt={`${transformation.name} ${after}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover object-top brightness-90 group-hover:brightness-100 transition-[filter] duration-500"
          />
          <div className="absolute inset-0 bg-[#CCFF00]/5 group-hover:bg-[#CCFF00]/8 transition-colors duration-300" />
          <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-0.5">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">
              {after}
            </span>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="bg-[#0d0d0d] border-t border-white/6 group-hover:border-[#CCFF00]/15 px-4 py-3 flex items-center justify-between transition-colors duration-300">
        <div>
          <div className="text-sm font-black text-white uppercase tracking-wide font-heading">
            {transformation.name}
          </div>
          <div className="text-[10px] text-[#555555] uppercase tracking-widest font-semibold">
            {duration}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-black text-[#CCFF00] font-heading">
            {result}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TransformationGallery() {
  const { t, isRTL } = useTranslation();

  return (
    <section
      id="results"
      className="relative bg-[#050505] py-28 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t.gallery.badge} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-4xl md:text-5xl font-black uppercase tracking-tighter text-white font-heading"
          >
            {t.gallery.headingBefore}{" "}
            <span className="text-[#CCFF00]">{t.gallery.headingAccent}</span>
            {t.gallery.headingAfter && <> {t.gallery.headingAfter}</>}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 text-[#888888] max-w-md text-base"
          >
            {t.gallery.subtext}
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRANSFORMATIONS.map((item, i) => (
            <TransformationCard
              key={item.id}
              transformation={item}
              index={i}
              before={t.gallery.before}
              after={t.gallery.after}
              duration={t.transformations[i]?.duration ?? item.duration}
              result={t.transformations[i]?.result ?? item.result}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-[#555555] text-sm mb-5 uppercase tracking-widest font-semibold">
            {t.gallery.joinText}
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#CCFF00] text-black text-sm font-black uppercase tracking-widest hover:bg-[#d4ff1a] hover:shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-all duration-300 active:scale-[0.98]"
          >
            {t.gallery.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
