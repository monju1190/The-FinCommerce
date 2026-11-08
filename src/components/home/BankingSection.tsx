import React from "react";
import Link from "next/link";

export default function BankingSection() {
  const articles = [
    {
      tag: "STANDARDS • IFRS 9",
      title: "The Accounting Rule That's Secretly a Technology Story",
      desc: "Why IFRS 9—often viewed as the most compliance-heavy rule in banking—might actually be a financial institution's smartest technology and risk investment.",
      author: "By Masihul Huq Chowdhury",
      slug: "the-accounting-rule-thats-secretly-a-technology-story-ifrs9"
    },
    {
      tag: "PLAYBOOK • RATINGS",
      title: "ESG Ratings: How Corporates Are Rated and Why It Matters",
      desc: "A comprehensive guide to how rating agencies assess environmental, social, and governance risks and why methodologies diverge.",
      author: "By Alusch H. Amoghli",
      slug: "esg-ratings-how-corporates-are-rated-and-why-it-matters"
    },
    {
      tag: "PLAYBOOK • REGULATION",
      title: "The Sustainable Finance Blueprint: Coordinated Regulation in Bangladesh",
      desc: "Building the institutional machinery that turns green projects into tradable securities with verified records of delivery.",
      author: "By Enamul Hafiz Latifee",
      slug: "sustainable-finance-blueprint-coordinated-regulation-bangladesh"
    },
    {
      tag: "CENTRAL BANKING",
      title: "Decarbonisation Financing in Bangladesh: Role of Bangladesh Bank",
      desc: "How green banking guidelines, refinance schemes, and climate risk management frameworks are shaping low-carbon finance.",
      author: "By Md. Kamrul Hasan",
      slug: "decarbonisation-financing-in-bangladesh-evolving-role-of-bangladesh-bank"
    }
  ];

  return (
    <section className="mb-16 mt-8" data-purpose="banking-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">
          Playbook & Standards
        </h2>
        <Link href="/category/playbook">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, idx) => (
          <Link
            href={`/news/${article.slug}`}
            key={idx}
            className="group cursor-pointer flex flex-col h-full border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-8 last:border-0 last:pr-0"
          >
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
              {article.author}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
