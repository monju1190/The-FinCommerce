import React from "react";
import Link from "next/link";

export default function DualGridSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-16" data-purpose="news-grids">
      
      {/* Home & The World */}
      <div data-purpose="worlds-news" className="flex flex-col h-full border-t-4 border-gray-900 pt-2">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-black font-display tracking-tight text-gray-900">
            Home & The World
          </h2>
          <Link href="/category/home-and-the-world">
            <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
              View All
            </span>
          </Link>
        </div>

        {/* Featured Card */}
        <Link href="/news/bangladesh-at-the-crossroads-un-sdg-report-2026" className="group cursor-pointer mb-6">
          <div className="overflow-hidden mb-3 relative w-full aspect-[16/9] bg-gray-100 rounded-sm">
            <img
              alt="Bangladesh at the Crossroads"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/magazine/oct-dec/pdf-images/p85_img4_1054x618.jpeg"
            />
          </div>
          <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block mt-2">
            UN SDG Report 2026
          </span>
          <h3 className="text-2xl font-bold font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug mb-2">
            Bangladesh at the Crossroads
          </h3>
          <p className="text-gray-600 text-sm font-display mb-2">
            One of Asia’s fastest SDG improvers and the world’s leader in green garment factories—yet ranked 110th of 169 with crucial policy choices ahead of LDC graduation.
          </p>
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            By Prof. Dr. Mohammad Nurunnabi
          </div>
        </Link>

        {/* List Items */}
        <div className="flex flex-col flex-1 border-t border-gray-300">
          <Link
            href="/news/climate-change-and-decent-work-ivory-coast"
            className="group cursor-pointer py-4 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Labor & Climate Adaptation
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Climate Change And Decent Work: Protecting Ivorian Workers From Heat and Extreme Risks
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              By Abel Karno, ITCILO Alumnus
            </div>
          </Link>

          <Link
            href="/news/the-balance-sheet-of-development-asia-pacific-sustainability"
            className="group cursor-pointer py-4 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Asia-Pacific Policy
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              The Balance Sheet of Development
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              By Mozaharul Alam, UNEP Asia-Pacific
            </div>
          </Link>

          <Link
            href="/news/bangladesh-national-sustainability-news-solar-duties-climate-finance"
            className="group cursor-pointer py-4 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Top Stories • National Briefing
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Bangladesh Slashes Solar Import Duties to 1% & Mobilizes Climate Finance
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              By National Desk
            </div>
          </Link>
        </div>
      </div>

      {/* Technology & Waste Management */}
      <div
        data-purpose="technology-news"
        className="flex flex-col h-full border-t-4 border-gray-900 pt-2 lg:pl-12 lg:border-l lg:border-t-0 lg:border-gray-300 relative"
      >
        <div className="absolute top-0 left-0 w-full border-t-4 border-gray-900 lg:hidden"></div>
        <div className="absolute top-0 left-12 w-[calc(100%-3rem)] border-t-4 border-gray-900 hidden lg:block"></div>

        <div className="flex justify-between items-end mb-6 mt-2 lg:mt-0">
          <h2 className="text-3xl font-black font-display tracking-tight text-gray-900">
            Technology & Waste Management
          </h2>
          <Link href="/category/technology">
            <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
              View All
            </span>
          </Link>
        </div>

        {/* Featured Tech Card */}
        <Link href="/news/the-semiconductor-race-can-bangladesh-catch-up" className="group cursor-pointer mb-6">
          <div className="overflow-hidden mb-3 relative w-full aspect-[16/9] bg-gray-100 rounded-sm">
            <img
              alt="The Semiconductor Race"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/magazine/oct-dec/pdf-images/p69_img1_2515x1230.jpeg"
            />
          </div>
          <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block mt-2">
            Semiconductors & High-Tech
          </span>
          <h3 className="text-2xl font-bold font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug mb-2">
            The Semiconductor Race: Can Bangladesh Catch Up?
          </h3>
          <p className="text-gray-600 text-sm font-display mb-2">
            Building the engineering talent pool, chip design centers, OSAT packaging capabilities, and IP governance needed to capture a share of the global semiconductor value chain.
          </p>
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            By Rezaul Haque, Director, Solidigm Technology
          </div>
        </Link>

        {/* List Items */}
        <div className="flex flex-col flex-1 border-t border-gray-300">
          <Link
            href="/news/ai-infrastructure-closing-the-environmental-clearance-gap"
            className="group cursor-pointer py-4 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              AI & Environmental Governance
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              AI Infrastructure: Closing the Environmental Clearance Gap
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              By Dr. Zunaid Kazi
            </div>
          </Link>

          <Link
            href="/news/plastic-waste-management-bangladesh-extended-producer-responsibility"
            className="group cursor-pointer py-4 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Waste Management • UNIDO
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Making the ‘Extended Producer Responsibility’ Work
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              UNIDO Country Office, Bangladesh
            </div>
          </Link>

          <Link
            href="/news/transforming-waste-into-hope-tmss-waste-collection-business"
            className="group cursor-pointer py-4 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Circular Economy • TMSS
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              How TMSS is Shaping the Future of the Waste Collection Business
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              By Sadia Mehrun Shawan, TMSS
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}
