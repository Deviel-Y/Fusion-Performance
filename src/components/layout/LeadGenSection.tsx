"use client";

import { SectionBadge } from "@/components/ui/SectionBadge";
import { LeadForm } from "@/components/feature/LeadForm";
import { useTranslation } from "@/hooks/useTranslation";

export function LeadGenSection() {
  const { t, lang } = useTranslation();

  return (
    <section
      id="contact"
      className="relative bg-black py-28 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(204,255,0,0.08)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge label={t.lead.badge} />
          <h2 className="mt-5 text-4xl md:text-6xl font-black uppercase tracking-tighter text-white font-heading leading-tight">
            {t.lead.headingBefore}{" "}
            <span className="text-[#CCFF00]">{t.lead.headingAccent}</span>
          </h2>
          <p className="mt-5 text-[#888888] text-base leading-relaxed max-w-xl mx-auto">
            {t.lead.subtextBefore}{" "}
            <span className="text-white font-semibold">{t.lead.subtextHighlight}</span>
            {t.lead.subtextAfter}
          </p>
        </div>

        {/* Form card */}
        <div className="relative border border-white/8 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#CCFF00]/60" />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#CCFF00]/60" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#CCFF00]/60" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#CCFF00]/60" />

          {/* key=lang remounts the form on language switch so zod errors are in the new language */}
          <LeadForm key={lang} />
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[#555555]">
          {t.lead.trust.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold">
              <span className="w-1 h-1 rounded-full bg-[#CCFF00]/50" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
