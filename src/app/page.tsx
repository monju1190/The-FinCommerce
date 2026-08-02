import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BusinessSection from "@/components/home/BusinessSection";
import DualGridSection from "@/components/home/DualGridSection";
import SecuritySection from "@/components/home/SecuritySection";
import MagazineSection from "@/components/home/MagazineSection";
import CtaSection from "@/components/shared/CtaSection";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-12 py-8">
      <HeroSection />
      <MagazineSection />
      <BusinessSection />
      <DualGridSection />
      <SecuritySection />
      <CtaSection />
    </main>
  );
}

