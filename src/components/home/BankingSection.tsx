import React from "react";
import Link from "next/link";

export default function BankingSection() {
  const articles = [
    {
      tag: "CENTRAL BANKS",
      title: "Federal Reserve signals potential rate cut as inflation cools",
      desc: "Policymakers hint at a September reduction, ending a prolonged period of aggressive monetary tightening.",
      time: "2h ago"
    },
    {
      tag: "INVESTMENT BANKING",
      title: "Goldman Sachs reshuffles leadership in elite advisory unit",
      desc: "The Wall Street giant is promoting a new generation of dealmakers amidst a sluggish M&A market recovery.",
      time: "4h ago"
    },
    {
      tag: "REGULATION",
      title: "European regulators probe major banks over Basel III compliance",
      desc: "New capital requirement rules are forcing institutions to hold billions more in reserves, sparking industry backlash.",
      time: "5h ago"
    },
    {
      tag: "RETAIL BANKING",
      title: "Digital-only challengers capture 15% of new checking accounts",
      desc: "Traditional lenders struggle to retain younger demographics who favor app-based seamless banking experiences.",
      time: "7h ago"
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
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-3 block">
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
