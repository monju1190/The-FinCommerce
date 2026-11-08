import React from "react";
import Link from "next/link";

export default function CompanySection() {
  const companies = [
    {
      name: "FRONTRUNNER • EPYLLION GROUP",
      title: "Epyllion Group: Championing ESG",
      desc: "Employing over 24,000 people across 12 enterprises, DGM Mohammad Shah Alam speaks to TSV on LEED facilities, circularity, and publishing their first GRI-aligned ESG Report.",
      img: "/magazine/oct-dec/photos/epyllion-main.jpg",
      slug: "epyllion-group-championing-esg-beyond-compliance"
    },
    {
      name: "AGRICULTURE • SYNGENTA BANGLADESH",
      title: "From Salinity to Sustainability",
      desc: "Managing Director Hedayet Ullah details how salt-tolerant crop diversification, freshwater reservoirs, and vermicompost enterprises are transforming farming in Shyamnagar.",
      img: "/magazine/oct-dec/photos/syngenta-crop.jpg",
      slug: "from-salinity-to-sustainability-syngenta-gogrow-coastal-bangladesh"
    },
    {
      name: "ESG AWARD • 32 COMPANIES RECOGNIZED",
      title: "Verifiable Impact: Inside Bangladesh’s Inaugural ESG Excellence Awards",
      desc: "32 companies and three individuals were honored across 20 evidence-based categories anchored in IFRS S1/S2, GRI Standards, UNGC, and SBTi frameworks.",
      img: "/magazine/oct-dec/photos/esg-award-gold-1.jpg",
      slug: "verifiable-impact-bangladesh-inaugural-esg-excellence-awards"
    }
  ];

  return (
    <section className="mb-16 mt-8" data-purpose="company-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">
          Frontrunner & Spotlights
        </h2>
        <Link href="/category/frontrunner">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, idx) => (
          <Link
            href={`/news/${company.slug}`}
            key={idx}
            className="group cursor-pointer flex flex-col h-full border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-8 last:border-0 last:pr-0"
          >
            <div className="overflow-hidden mb-4 relative w-full aspect-[4/3] border border-gray-200 bg-gray-100">
              <img
                alt={company.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={company.img}
              />
            </div>
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-2 block">
              {company.name}
            </span>
            <h3 className="font-bold text-2xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-3">
              {company.title}
            </h3>
            <p className="text-gray-700 text-sm font-display leading-relaxed">
              {company.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
