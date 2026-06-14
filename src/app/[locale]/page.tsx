import { BentoFeatures } from "@/components/layout/BentoFeatures";
import { CoachSection } from "@/components/layout/CoachSection";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/layout/HeroSection";
import { LeadGenSection } from "@/components/layout/LeadGenSection";
import { ServiceCards } from "@/components/layout/ServiceCards";
import { SocialProofStrip } from "@/components/layout/SocialProofStrip";
import { TransformationGallery } from "@/components/layout/TransformationGallery";
import SectionFallback from "@/components/ui/SectionFallback";
import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
