"use client";

import { BRANDS } from "@/constants";
import { Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

function Separator() {
  return (
    <span className="text-[#CCFF00]/40 font-bold select-none mx-2">✦</span>
  );
}

export function SocialProofStrip() {
  const { t } = useTranslation();
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="relative bg-black border-y border-white/5 py-6 overflow-hidden">
      {/* Transformations badge */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="h-px w-12 bg-[#CCFF00]/30" />
        <div className="flex items-center gap-2 px-4 py-1.5 border border-[#CCFF00]/20 bg-[#CCFF00]/5">
          <Users className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">
            {t.social.badge}
          </span>
        </div>
        <div className="h-px w-12 bg-[#CCFF00]/30" />
      </div>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee */}
      <div className="flex overflow-hidden">
        <div
          className="flex shrink-0 items-center gap-0 whitespace-nowrap"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {doubled.map((brand, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[#555555] hover:text-[#CCFF00] transition-colors duration-300 text-sm font-bold uppercase tracking-[0.2em] px-6">
                {brand}
              </span>
              <Separator />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
