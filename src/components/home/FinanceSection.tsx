import React from "react";
import Link from "next/link";

export default function FinanceSection() {
  return (
    <section className="mb-16 mt-8" data-purpose="finance-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">
          Sustainable Finance
        </h2>
        <Link href="/category/sustainable-finance">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Sustainable Finance Feature */}
        <div className="lg:w-2/3 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-300 pb-8 lg:pb-0 lg:pr-8">
          <Link
            href="/news/the-carbon-corridor-unlocking-green-investment-for-bangladesh"
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="overflow-hidden mb-5 relative w-full aspect-[16/9] shadow-md border border-gray-200 bg-gray-100 rounded-sm">
              <img
                alt="The Carbon Corridor"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/magazine/oct-dec/pdf-images/p42_img1_2516x1851.jpeg"
              />
            </div>
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-3 block">
              CARBON MARKETS & GREEN INVESTMENT
            </span>
            <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.1] font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors">
              The Carbon Corridor: Unlocking Green Investment for Bangladesh
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-display max-w-3xl">
              How high-integrity carbon markets, Paris Agreement Article 6 mechanisms, and cross-border green investment corridors can mobilize international capital for Bangladesh&apos;s industrial decarbonisation and renewable transition.
            </p>
            <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-auto">
              <span>By Mostafa Monira Firdouse</span>
              <span>&bull;</span>
              <span>ESG, Climate &amp; Sustainable Investment Lead, Innovision Consulting</span>
            </div>
          </Link>
        </div>

        {/* Side Sustainable Finance Stories */}
        <div className="lg:w-1/3 flex flex-col h-full">
          <Link
            href="/news/decarbonisation-financing-in-bangladesh-evolving-role-of-bangladesh-bank"
            className="group cursor-pointer border-b border-gray-300 pb-6 mb-6"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              CENTRAL BANK POLICY
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Decarbonisation Financing in Bangladesh
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              From green banking guidelines to climate risk management and GSSS bonds, how the central bank catalyzes low-carbon transition finance.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Md. Kamrul Hasan
            </div>
          </Link>

          <Link
            href="/news/sustainable-finance-blueprint-coordinated-regulation-bangladesh"
            className="group cursor-pointer border-b border-gray-300 pb-6 mb-6"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              CAPITAL MARKET REFORM
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              The Sustainable Finance Blueprint
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              Turning rooftop solar arrays, cleaner dyeing lines, and recycling ventures into liquid, verifiable capital market securities.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Enamul Hafiz Latifee
            </div>
          </Link>

          <Link
            href="/news/esg-ratings-how-corporates-are-rated-and-why-it-matters"
            className="group cursor-pointer border-b border-gray-300 pb-6 mb-6"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              PLAYBOOK • ESG RATINGS
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              How Corporates are Rated and Why that Matters
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              Understanding how global rating agencies evaluate non-financial corporate performance, double materiality, and sustainability risk.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Alusch H. Amoghli
            </div>
          </Link>

          <Link
            href="/news/denmark-bangladesh-lasting-partnership-greener-turn"
            className="group cursor-pointer flex-1 flex flex-col"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              FRIENDS IN NEED • BILATERAL COOPERATION
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Denmark–Bangladesh: A Lasting Partnership Takes a Greener Turn
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              Five decades of partnership accelerating ESG integration, cleaner textiles, offshore wind, and climate-smart agriculture.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-auto">
              Embassy of Denmark in Bangladesh
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
