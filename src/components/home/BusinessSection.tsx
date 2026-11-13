import React from "react";
import Link from "next/link";

export default function BusinessSection() {
  return (
    <section className="mb-16" data-purpose="business-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">
          Industry Practices
        </h2>
        <Link href="/category/industry-practices">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
        {/* Main Industry Practices Story */}
        <div className="lg:col-span-8 flex flex-col h-full border-r-0 lg:border-r border-gray-300 lg:pr-8">
          <Link
            href="/news/beyond-the-plaque-green-certification-to-green-operations"
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="overflow-hidden mb-4 relative w-full flex-1 min-h-[260px] sm:min-h-[360px] lg:min-h-[400px] bg-gray-900 rounded-sm">
              <img
                alt="Beyond the Plaque: LEED Factories in Bangladesh"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/magazine/oct-dec/pdf-images/p60_img1_1376x768.jpeg"
              />
            </div>
            <div className="mt-4">
              <span className="text-[#16a34a] text-xs font-black uppercase tracking-widest mb-2 block">
                Textile & Garments • Green Operations
              </span>
              <h3 className="text-3xl md:text-5xl font-bold mt-1 mb-4 leading-tight font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors">
                Beyond the Plaque: From Green Certification to Green Operations in the Bangladeshi Textile and Garments Industry
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-display">
                Bangladesh houses 349 LEED-certified factories—the highest concentration in the world. However, true transformation will only materialize when green infrastructure is grounded in lean production management, rigorous utility monitoring, and a daily culture of sustainability.
              </p>
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>By Kabir Ahmad</span>
                <span>&bull;</span>
                <span>October–December 2026</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Sidebar List */}
        <div className="lg:col-span-4 flex flex-col">
          {/* Item 1 */}
          <Link
            href="/news/from-audit-to-accountability-export-competitiveness-hredd"
            className="group cursor-pointer pb-6 mb-6 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Rule Book • Export Readiness
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              From Audit to Accountability Strengthening Bangladesh’s Export Competitiveness through HREDD
            </h4>
            <p className="text-gray-600 text-sm font-display mb-3 line-clamp-2">
              Global buyers now demand active identification, prevention, and remediation of human rights and environmental risks across entire supply chains.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Mohammad Monower Hossain
            </div>
          </Link>

          {/* Item 2 */}
          <Link
            href="/news/the-governance-gap-why-sustainability-needs-to-reach-the-boardroom"
            className="group cursor-pointer pb-6 mb-6 border-b border-gray-300"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Governance • Boardroom Strategy
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              The Governance Gap
            </h4>
            <p className="text-gray-600 text-sm font-display mb-3 line-clamp-2">
              Closing the gap between corporate sustainability pledges and daily procurement decisions requires structural board-level oversight.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Tahseen Salman Choudhury
            </div>
          </Link>

          {/* Item 3 */}
          <Link
            href="/news/sustainability-practices-radisson-blu-chattogram"
            className="group cursor-pointer pb-6 mb-6 flex-1 flex flex-col"
          >
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Hospitality • Industry Practices
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Radisson Blu Chattogram Bay View
            </h4>
            <p className="text-gray-600 text-sm font-display mb-3 line-clamp-2">
              Advancing ESG principles through energy efficiency, responsible resource management, and community engagement in Bangladesh&apos;s hospitality sector.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-auto">
              By TSV Desk
            </div>
          </Link>

          <Link
            href="/category/industry-practices"
            className="mt-auto pt-4 border-t border-gray-900 group flex items-center justify-between"
          >
            <span className="font-bold text-sm uppercase tracking-widest text-gray-900 group-hover:text-[#1a2c5a] transition-colors">
              See All Industry Practices
            </span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
