import { Suspense } from "react";
import { HeroSection } from "@/components/layout/HeroSection";
import { SocialProofStrip } from "@/components/layout/SocialProofStrip";
import { BentoFeatures } from "@/components/layout/BentoFeatures";
import { ServiceCards } from "@/components/layout/ServiceCards";
import { CoachSection } from "@/components/layout/CoachSection";
import { TransformationGallery } from "@/components/layout/TransformationGallery";
import { LeadGenSection } from "@/components/layout/LeadGenSection";
import { Footer } from "@/components/layout/Footer";

function SectionFallback({ height = "h-96" }: { height?: string }) {
  return (
    <div
      className={`${height} bg-[#0a0a0a] animate-pulse flex items-center justify-center`}
    >
      <div className="w-8 h-8 border-2 border-[#CCFF00]/30 border-t-[#CCFF00] rounded-full animate-spin" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex-1">
      <Suspense fallback={<SectionFallback height="h-screen" />}>
        <HeroSection />
      </Suspense>

      <SocialProofStrip />

      <Suspense fallback={<SectionFallback />}>
        <BentoFeatures />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ServiceCards />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CoachSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TransformationGallery />
      </Suspense>

      <Suspense fallback={<SectionFallback height="h-64" />}>
        <LeadGenSection />
      </Suspense>

      <Footer />
    </main>
  );
}
