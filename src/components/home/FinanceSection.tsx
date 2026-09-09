import React from "react";
import Link from "next/link";

export default function FinanceSection() {
  return (
    <section className="mb-16 mt-8" data-purpose="finance-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">Finance</h2>
        <Link href="/category/finance">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Finance Feature */}
        <div className="lg:w-2/3 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-300 pb-8 lg:pb-0 lg:pr-8">
          <Link href="/news/details" className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden mb-5 relative w-full aspect-[16/9] shadow-md border border-gray-200">
              <img
                alt="Stock Market Trading Floor"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-3 block">
              MARKETS
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1] font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors">
              Dhaka Stock Exchange Sees Surge in Green Tech Investments
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-display max-w-3xl">
              Local investors are increasingly prioritizing ESG metrics, driving capital towards green bonds and sustainable tech startups in Dhaka. Analysts project robust growth for eco-conscious portfolios over the coming years.
            </p>
            <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-auto">
              <span>By Shaquib Quareshi</span>
              <span>&bull;</span>
              <span>1h ago</span>
            </div>
          </Link>
        </div>

        {/* Side Finance Stories */}
        <div className="lg:w-1/3 flex flex-col h-full">
          <Link href="/news/details" className="group cursor-pointer border-b border-gray-300 pb-6 mb-6">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              LOGISTICS
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Local conglomerates eye ৳10bn investment in eco-friendly supply chains
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              The shift towards electric delivery fleets highlights a growing commitment to sustainable operations.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">3h ago</div>
          </Link>

          <Link href="/news/details" className="group cursor-pointer border-b border-gray-300 pb-6 mb-6">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              WEALTH MANAGEMENT
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Family offices shift focus to sustainable agriculture
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              High-net-worth individuals are prioritizing long-term yield and food security over volatile assets.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">5h ago</div>
          </Link>

          <Link href="/news/details" className="group cursor-pointer border-b border-gray-300 pb-6 mb-6">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              CARBON MARKETS
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Carbon credits gain traction in local industries
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              Bangladeshi manufacturers start exploring international carbon markets as a new sustainable revenue stream.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">6h ago</div>
          </Link>

          <Link href="/news/details" className="group cursor-pointer flex-1 flex flex-col">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              BONDS
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Green Taka bonds attract foreign investment
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              International investors show strong interest in Bangladesh's latest green bond issuance.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-auto">8h ago</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
