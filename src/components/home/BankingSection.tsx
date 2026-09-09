import React from "react";
import Link from "next/link";

export default function BankingSection() {
  const articles = [
    {
      tag: "CENTRAL BANKS",
      title: "Bangladesh Bank Introduces Green Refinance Scheme",
      desc: "Central bank allocates ৳50 billion to support eco-friendly projects and green industries across the country.",
      time: "2026-08-16"
    },
    {
      tag: "SUSTAINABLE FINANCE",
      title: "BRAC Bank Champions Green Financing",
      desc: "BRAC Bank recognized for its outstanding portfolio in financing small-scale renewable energy and recycling initiatives.",
      time: "4h ago"
    },
    {
      tag: "INNOVATION",
      title: "Standard Chartered Bangladesh Launches Carbon-Neutral Card",
      desc: "New offering allows customers to offset their carbon footprint with everyday purchases through local afforestation projects.",
      time: "5h ago"
    },
    {
      tag: "FINTECH",
      title: "bKash Integrates Carbon Footprint Tracker",
      desc: "Leading mobile financial service introduces a new feature helping users monitor and reduce their daily environmental impact.",
      time: "9h ago"
    }
  ];

  return (
    <section className="mb-16 mt-8" data-purpose="banking-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">Banking</h2>
        <Link href="/category/banking">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, idx) => (
          <Link href={`/news/banking-${idx}`} key={idx} className="group cursor-pointer flex flex-col h-full border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-8 last:border-0 last:pr-0">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-3 block">
              {article.tag}
            </span>
            <h3 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-3">
              {article.title}
            </h3>
            <p className="text-gray-700 text-sm font-display mb-4 line-clamp-3">
              {article.desc}
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-auto">
              {article.time}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
