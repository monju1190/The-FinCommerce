import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BusinessSection from "@/components/home/BusinessSection";
import DualGridSection from "@/components/home/DualGridSection";
import SecuritySection from "@/components/home/SecuritySection";
import MagazineSection from "@/components/home/MagazineSection";
import BankingSection from "@/components/home/BankingSection";
import FinanceSection from "@/components/home/FinanceSection";
import CompanySection from "@/components/home/CompanySection";
import CtaSection from "@/components/shared/CtaSection";
import MagazineAdBanner from "@/components/shared/MagazineAdBanner";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-12 pb-8">
      <div className="pt-4 md:pt-6">
        <HeroSection />
      </div>
      <MagazineSection />
      
      {/* Magazine Advertisement 1 (Page 1) */}
      <MagazineAdBanner adPage={1} />

      <BusinessSection />
      <FinanceSection />
      <BankingSection />

      {/* Magazine Advertisement 2 (Page 41) */}
      <MagazineAdBanner adPage={41} />

      <CompanySection />
      <DualGridSection />

      {/* Magazine Advertisement 3 (Page 73) */}
      <MagazineAdBanner adPage={73} />

      <SecuritySection />
      <CtaSection />
    </main>
  );
}

