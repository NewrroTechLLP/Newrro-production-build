"use client";

import { RICKHeroSection } from "@/components/RICK-sections/hero-section";
import { RICKIntelligenceFeatures } from "@/components/RICK-sections/intelligence-features";
import { RICKSpecificationSection } from "@/components/RICK-sections/specification-section";
import { RICKReviewsSection } from "@/components/RICK-sections/reviews-section";

export default function RICKPage() {
  return (
    <div className="min-h-screen bg-white">
      <RICKHeroSection />
      <RICKIntelligenceFeatures />
      <RICKSpecificationSection />
      <RICKReviewsSection />
    </div>
  );
}
