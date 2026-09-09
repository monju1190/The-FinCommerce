import React from "react";
import Link from "next/link";

export default function CompanySection() {
  const companies = [
    {
      name: "Rahimafrooz Renewable",
      title: "Leading solar provider expands footprint to rural Bangladesh",
      desc: "Aiming to connect 1 million more homes, the company continues its drive toward bringing clean energy to off-grid communities.",
      img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Walton Eco-Tech",
      title: "Walton announces new line of highly energy-efficient appliances",
      desc: "The new series promises to significantly reduce household carbon footprints and electricity consumption across the country.",
      img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Beximco Pharma",
      title: "Beximco commits to zero-waste manufacturing by 2030",
      desc: "Setting a new standard for sustainable healthcare in South Asia, the company unveils its comprehensive eco-strategy.",
      img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="mb-16 mt-8" data-purpose="company-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">Companies</h2>
        <Link href="/category/companies">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, idx) => (
          <Link href={`/news/company-${idx}`} key={idx} className="group cursor-pointer flex flex-col h-full border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-8 last:border-0 last:pr-0">
            <div className="overflow-hidden mb-4 relative w-full aspect-[4/3] border border-gray-200">
              <img
                alt={company.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
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
