import React from "react";
import Link from "next/link";
import { FaHandshake, FaBullhorn, FaChartLine, FaRegStar, FaBookOpen, FaArrowLeft, FaArrowRight, FaFileInvoiceDollar } from "react-icons/fa";
import { magazineAds } from "@/data/mockData";

export default function AdvertisePage() {
  const whyPartner = [
    {
      num: "01",
      icon: <FaBullhorn />,
      title: "Targeted C-Suite Visibility",
      desc: "Position your brand directly before corporate boards, factory owners, policymakers, and institutional sustainability directors in Bangladesh and abroad."
    },
    {
      num: "02",
      icon: <FaHandshake />,
      title: "Verifiable ESG Credentials",
      desc: "Showcase concrete operational milestones—from LEED Platinum certifications to water-recycling innovations—within an evidence-based editorial framework."
    },
    {
      num: "03",
      icon: <FaRegStar />,
      title: "Institutional Brand Equity",
      desc: "Associate your corporate identity with Bangladesh's premier independent broadside dedicated exclusively to long-term climate resilience and ethical governance."
    },
    {
      num: "04",
      icon: <FaBookOpen />,
      title: "Executive Thought Leadership",
      desc: "Contribute expert perspectives, white papers, and leadership analyses addressing EU CSDDD, carbon tariffs, and green finance architecture."
    },
    {
      num: "05",
      icon: <FaChartLine />,
      title: "High-Caliber Network Engagement",
      desc: "Engage commercial banks, central bankers, multilateral development partners, trade associations, and researchers across all four quarterly cycles."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111] antialiased">
      {/* 1. EDITORIAL HEADER BAR */}
      <section className="border-b border-black/15 bg-[#F7F5F0] py-10 md:py-14">
        <div className="master-container">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-700 hover:text-black transition-colors font-bold"
            >
              <FaArrowLeft size={10} />
              <span>Back to Main Page</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/15">
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-[#111111] uppercase max-w-4xl leading-tight">
                Put Your Brand Where Sustainability Matters
              </h1>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
                COMMERCIAL INVENTORY
              </span>
              <span className="text-sm font-serif text-gray-700 italic block">
                Quarterly Print &amp; Digital Placements
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN EDITORIAL CONTENT */}
      <div className="master-container py-12 md:py-16 space-y-16">

        {/* Lead Proposition Deck */}
        <section className="border border-black/15 bg-white p-6 sm:p-10 md:p-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#111111] leading-relaxed">
              Your brand. Your sustainability journey. An influential audience of corporate leaders, policymakers, bankers, and international buyers shaping the transition economy.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-sans">
              Association with The Sustainability Voice provides organizations with a credible platform to articulate substantive ESG investments, transition roadmaps, and environmental stewardship without the risk of greenwashing.
            </p>
          </div>
        </section>

        {/* 3. WHY PARTNER WITH US */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Why Partner With The Sustainability Voice?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/15 border border-black/15">
            {whyPartner.map((item) => (
              <div
                key={item.num}
                className="bg-white p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:bg-[#F7F5F0] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gray-400">
                      {item.num}
                    </span>
                    <div className="text-gray-700 text-lg">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#111111] leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-serif pt-3 border-t border-black/10">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Inquiries Callout Tile */}
            <div className="bg-[#1b4332] text-white p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#8DC63F] uppercase tracking-widest">
                  BESPOKE PARTNERSHIPS
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  Corporate Storytelling &amp; Custom Dossiers
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-serif leading-relaxed">
                We design custom C-suite interviews, sustainability factory profiles, and roundtable symposia aligned with global disclosure standards.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors w-fit"
              >
                <span>Inquire With Desk</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. PRICING & RATE CARD */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Print &amp; Digital Advertising Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-black/15 bg-white divide-y md:divide-y-0 md:divide-x divide-black/15">
            {/* Premium Positions */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="border-b border-black/15 pb-4">
                <h3 className="text-xl font-extrabold font-display text-[#111111]">
                  Premium Broadsheet Positions
                </h3>
                <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-wider">
                  Cover &amp; Editorial Facing Placements
                </p>
              </div>

              <div className="divide-y divide-black/10">
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Back Cover (Full Spread Color)</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Exterior Archival Page</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#111111]">BDT 150,000</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Inside Front Cover (IFC)</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">First Impression Facing TOC</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#111111]">BDT 100,000</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Inside Back Cover (IBC)</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Terminal Issue Spread</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#111111]">BDT 80,000</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Facing Editorial Page</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Prime Editorial Proximity</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#111111]">BDT 70,000</span>
                </div>
              </div>
            </div>

            {/* Standard Positions */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="border-b border-black/15 pb-4">
                <h3 className="text-xl font-extrabold font-display text-[#111111]">
                  Standard Interior Positions
                </h3>
                <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-wider">
                  Regular Thematic Section Placements
                </p>
              </div>

              <div className="divide-y divide-black/10">
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Full Page Color (Interior)</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Section Run of Paper</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#111111]">BDT 60,000</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Half Page Horizontal / Vertical</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Contextual Column Insertion</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#111111]">BDT 50,000</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Quarter Page Grid Placement</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Briefings &amp; Directory Quadrant</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#111111]">BDT 40,000</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold font-display text-[#111111] block">Digital Edition Inclusion</span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Interactive Linkage &amp; PDF Embed</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#1a4d2e]">Included Complimentary</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MULTI-ISSUE & ANNUAL CORPORATE PARTNER */}
        <section className="grid grid-cols-1 md:grid-cols-2 border border-black/15 bg-white divide-y md:divide-y-0 md:divide-x divide-black/15">
          {/* Annual Partner Package */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                ANNUAL COMMITMENT
              </span>
              <h3 className="text-2xl font-extrabold font-display text-[#111111]">
                Annual Corporate Partner
              </h3>
              <p className="text-base font-mono font-bold text-[#1a4d2e]">
                4 ISSUES • 12 MONTHS • BDT 300,000
              </p>
            </div>
            <p className="text-sm text-gray-600 font-serif leading-relaxed">
              Your organization represented continuously throughout the entire publishing calendar. Includes a Full-Page color placement in all four consecutive print editions, prominent corporate brand attribution in the Annual Partner register, and 60 complimentary archival copies per issue.
            </p>
          </div>

          {/* Multi-Issue Volume Discounts */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                VOLUME DISCOUNTS
              </span>
              <h3 className="text-2xl font-extrabold font-display text-[#111111]">
                Advance Booking Incentives
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                Preferential Rates for Multi-Edition Commitments
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px bg-black/15 border border-black/15">
              <div className="bg-[#F7F5F0] p-4 text-center">
                <span className="text-xs font-mono uppercase text-gray-600 block">2 Issues</span>
                <span className="text-lg font-mono font-bold text-[#111111]">5% OFF</span>
              </div>
              <div className="bg-[#F7F5F0] p-4 text-center">
                <span className="text-xs font-mono uppercase text-gray-600 block">3 Issues</span>
                <span className="text-lg font-mono font-bold text-[#111111]">10% OFF</span>
              </div>
              <div className="bg-[#F7F5F0] p-4 text-center">
                <span className="text-xs font-mono uppercase text-gray-600 block">4 Issues</span>
                <span className="text-lg font-mono font-bold text-[#1a4d2e]">15% OFF</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-serif">
              Multi-issue retainers lock in rate cards and guarantee priority position assignment across subsequent quarters.
            </p>
          </div>
        </section>

        {/* 6. SAMPLE PRINT PLACEMENTS */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Featured Advertisements in Print Edition
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-black/15 border border-black/15">
            {magazineAds.slice(0, 8).map((ad, idx) => (
              <div
                key={idx}
                className="bg-white p-4 flex flex-col justify-between space-y-3 hover:bg-[#F7F5F0] transition-colors"
              >
                <div className="border border-black/15 bg-white aspect-[3/4] overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={ad.imageUrl}
                    alt={ad.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                    Page {ad.page}
                  </span>
                  <p className="text-xs font-bold font-display text-[#111111] truncate mt-0.5">
                    {ad.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. NAVIGATION FOOTNOTE */}
        <section className="border border-black/15 bg-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-700 font-bold">
              <FaFileInvoiceDollar />
              <span>Commercial Booking Protocol • Desk of Business Development</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-serif">
              All commercial engagements are executed in accordance with TSV statutory guidelines. To reserve an insertion:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-black/20 hover:border-black bg-[#111111] text-white hover:bg-[#1a4d2e] px-5 py-3 text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <span>Transmit Booking Inquiry</span>
              <FaArrowRight size={10} />
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 border border-black/20 hover:border-black bg-[#F7F5F0] hover:bg-black hover:text-white px-4 py-2.5 text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <span>Terms of Dispatch</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
