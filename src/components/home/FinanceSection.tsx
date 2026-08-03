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
          <Link href="/news/finance-1" className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden mb-5 relative w-full aspect-[16/9] shadow-md border border-gray-200">
              <img
                alt="Stock Market Trading Floor"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-3 block">
              MARKETS
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1] font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors">
              Global equities rally as tech giants post record quarterly profits
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-display max-w-3xl">
              Investors shrugged off geopolitical tensions, driving major indices to all-time highs fueled by unexpectedly strong earnings from the magnificent seven technology firms. Analysts warn, however, that valuations may be stretched.
            </p>
            <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-auto">
              <span>By Sarah Jenkins</span>
              <span>&bull;</span>
              <span>1h ago</span>
            </div>
          </Link>
        </div>

        {/* Side Finance Stories */}
        <div className="lg:w-1/3 flex flex-col h-full">
          <Link href="/news/finance-2" className="group cursor-pointer border-b border-gray-300 pb-6 mb-6">
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              PRIVATE EQUITY
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Blackstone eyes $10bn buyout of European logistics powerhouse
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              The potential acquisition highlights the ongoing appetite for industrial real estate amidst e-commerce growth.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">3h ago</div>
          </Link>

          <Link href="/news/finance-3" className="group cursor-pointer border-b border-gray-300 pb-6 mb-6">
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              WEALTH MANAGEMENT
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Family offices shift assets from crypto back to sovereign bonds
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              Ultra-high-net-worth individuals are prioritizing yield and security over volatile digital assets in 2026.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">5h ago</div>
          </Link>

          <Link href="/news/finance-4" className="group cursor-pointer border-b border-gray-300 pb-6 mb-6">
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              COMMODITIES
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Oil prices slip below $70 amid supply glut concerns
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              OPEC+ struggles to maintain cohesion as member states quietly exceed production quotas.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">6h ago</div>
          </Link>

          <Link href="/news/finance-5" className="group cursor-pointer flex-1 flex flex-col">
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              CURRENCIES
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Euro strengthens against dollar ahead of ECB rate decision
            </h4>
            <p className="text-gray-600 text-sm font-display line-clamp-2 mb-3">
              Currency traders are betting on a hawkish tone from the European Central Bank despite slowing regional growth.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-auto">8h ago</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
