import React from "react";
import Link from "next/link";

export default function SecuritySection() {
  return (
    <section className="mb-16" data-purpose="security-category">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">
          Cities, Wildlife & Health
        </h2>
        <Link href="/category/sustainable-cities">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
        {/* Main Sustainable Cities Story */}
        <div className="lg:col-span-8 flex flex-col h-full border-r-0 lg:border-r border-gray-300 lg:pr-8">
          <Link
            href="/news/a-suffocated-buriganga-existential-threat-for-dhaka"
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="overflow-hidden mb-4 relative w-full flex-1 min-h-[260px] sm:min-h-[380px] lg:min-h-[450px] bg-gray-100 rounded-sm">
              <img
                alt="A Suffocated Buriganga"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/magazine/oct-dec/pdf-images/p25_img2_2370x1550.jpeg"
              />
            </div>
            <div className="mt-4">
              <span className="text-[#16a34a] text-xs font-black uppercase tracking-widest mb-2 block">
                Sustainable Cities • River Restoration
              </span>
              <h3 className="text-3xl md:text-5xl font-bold mt-1 mb-4 leading-tight font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors">
                A Suffocated Buriganga: An Existential Threat for Dhaka
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-display">
                In winter the Buriganga carries 0.63 milligrams of oxygen per litre—an eighth of what a river needs to keep a fish alive. The government has mapped the 224 outlets discharging into the Buriganga and Turag; what it needs next is an enforceable deadline.
              </p>
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>By Rifat Hossain</span>
                <span>&bull;</span>
                <span>Executive Director, Institute for Public Systems, Geneva</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Sidebar List */}
        <div className="lg:col-span-4 flex flex-col">
          <Link
            href="/news/the-deltas-edge-ecological-balance-wildlife-human-survival"
            className="group cursor-pointer pb-6 mb-6 border-b border-gray-300"
          >
            <div className="overflow-hidden mb-3 relative w-full aspect-[16/10] bg-gray-900 rounded-sm">
              <img
                alt="The Delta's Edge"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/magazine/oct-dec/pdf-images/p126_img1_2100x1172.jpeg"
              />
            </div>
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Wildlife Conservation
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              The Delta’s Edge: Negotiating Ecological Balance, Wildlife, and Human Survival
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Shamim Ahmed
            </div>
          </Link>

          <Link
            href="/news/the-kingfishers-of-bangladesh-twelve-species"
            className="group cursor-pointer pb-6 mb-6 border-b border-gray-300"
          >
            <div className="overflow-hidden mb-3 relative w-full aspect-[16/10] bg-gray-900 rounded-sm">
              <img
                alt="The Kingfishers of Bangladesh"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/magazine/oct-dec/pdf-images/p128_img1_963x1035.jpeg"
              />
            </div>
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Wildlife • Biodiversity
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              The Kingfishers of Bangladesh: Twelve Species Across the Delta
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Rehana Begum, Shahariar Shabab & Golam Kibria
            </div>
          </Link>

          <Link
            href="/news/living-well-health-in-an-unequal-world-longevity-blueprint"
            className="group cursor-pointer pb-6 mb-6"
          >
            <div className="overflow-hidden mb-3 relative w-full aspect-[16/10] bg-gray-100 rounded-sm">
              <img
                alt="Living Well by Hari Nair"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/magazine/oct-dec/pdf-images/p121_img1_2513x1402.jpeg"
              />
            </div>
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Health & Longevity
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Living Well: Health in an Unequal World — High-Tech Hype vs. Sustainable Science
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              By Hari Nair PhD
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
