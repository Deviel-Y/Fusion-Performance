"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Button } from "@/components/ui/Button";
import { Award, Star, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const COACH_IMG =
  "https://images.pexels.com/photos/8874431/pexels-photo-8874431.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop";

const CRED_ICONS = [Award, Star, Users];

export function CoachSection() {
  const { t } = useTranslation();

  return (
    <section
      id="coach"
      className="relative bg-black py-28 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative order-2 lg:order-1"
        >
          {/* Decorative offset border */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-[#CCFF00]/20 pointer-events-none z-0" />

          {/* Photo wrapper */}
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#111]">
            <Image
              src={COACH_IMG}
              alt={t.coach.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.75)" }}
            />

            {/* Green-tinted vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.06)_0%,transparent_65%)]" />

            {/* Grain texture */}
            <div
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Accent bar */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-[#CCFF00]" />

            {/* Name badge overlay */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-black/70 backdrop-blur-sm border border-white/10 px-4 py-3">
                <div className="text-white font-black uppercase tracking-wider text-lg font-heading">
                  {t.coach.name}
                </div>
                <div className="text-[#CCFF00] text-xs font-semibold uppercase tracking-widest">
                  {t.coach.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <SectionBadge label={t.coach.badge} />

          <h2 className="mt-5 text-4xl md:text-5xl font-black uppercase tracking-tighter text-white font-heading leading-tight">
            {t.coach.headingBefore}{" "}
            <span className="text-[#CCFF00]">{t.coach.headingAccent}</span>
            <br />
            {t.coach.headingLine2}
          </h2>

          <p className="mt-6 text-[#888888] text-base leading-relaxed">
            {t.coach.bio1}
          </p>
          <p className="mt-4 text-[#888888] text-base leading-relaxed">
            {t.coach.bio2Before}{" "}
            <span className="text-white font-semibold">
              {t.coach.bio2Highlight}
            </span>
            {t.coach.bio2After}
          </p>

          {/* Credentials */}
          <ul className="mt-8 flex flex-col gap-4">
            {t.coach.credentials.map((cred, i) => {
              const Icon = CRED_ICONS[i];
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 bg-[#CCFF00]/10 border border-[#CCFF00]/20 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#CCFF00]" />
                  </div>
                  <span className="text-sm text-[#aaaaaa] leading-snug">
                    {cred}
                  </span>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-10">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.coach.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
