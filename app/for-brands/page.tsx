"use client";

import Navbar from "@/app/_components/layout/Navbar";
import Footer from "@/app/_components/layout/Footer";
import { HeroSection } from "./_sections/HeroSection";
import { BentoSection } from "./_sections/BentoSection";
import { AIMatchSection } from "./_sections/AIMatchSection";
import { CampaignCalendarSection } from "./_sections/CampaignCalendarSection";
import { AIAdStrategySection } from "./_sections/AIAdStrategySection";
import { ChromeExtensionSection } from "./_sections/ChromeExtensionSection";
import { CRMSection } from "./_sections/CRMSection";
import { FinalCTASection } from "./_sections/FinalCTASection";

export default function ForBrandsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#09090f" }}>
      {/* Navbar with dark override */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(9,9,15,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <Navbar />
      </div>

      <main>
        <HeroSection />
        <BentoSection />
        <AIMatchSection />
        <CampaignCalendarSection />
        <AIAdStrategySection />
        <ChromeExtensionSection />
        <CRMSection />
        <FinalCTASection />
      </main>

      {/* Footer with dark override */}
      <div style={{ background: "#070710", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Footer />
      </div>
    </div>
  );
}
