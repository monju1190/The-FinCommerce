import React from "react";
import Link from "next/link";
import { magazineData, recentEditions } from "@/data/mockData";
import { notFound } from "next/navigation";

export default function SingleMagazinePage({ params }: { params: { slug: string } }) {
  const currentEdition = recentEditions.find(ed => ed.slug === params.slug);

  if (!currentEdition) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 md:px-12 py-12 min-h-screen">
      {/* Magazine Header */}
      <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 p-8 md:p-16 rounded-[2rem] mb-16 shadow-inner">
        <div className="md:w-1/3">
          <img 
            src={currentEdition.imageUrl} 
            alt={currentEdition.month} 
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
        <div className="md:w-2/3">
          <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
            Digital Edition
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-display tracking-tight">{currentEdition.month}</h1>
          <p className="text-gray-500 mb-8 text-xl leading-relaxed max-w-2xl">
            Explore the latest insights, in-depth essays, and cultural reviews in this month's edition of The FinCommerce. Read the highlights online or download the full eBook for offline reading.
          </p>
          <button className="bg-primary-green text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-light transition-colors text-lg shadow-lg hover:shadow-xl">
            Download eBook
          </button>
        </div>
      </div>

      {/* Sections */}
      {magazineData.map((section, idx) => (
        <section key={idx} className="mb-16">
          <div className="flex justify-between items-center mb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 pb-2 border-b-2 border-primary-green">
              <div className="w-2 h-2 rounded-full bg-primary-green"></div>
              <h2 className="text-3xl font-bold font-display">{section.title}</h2>
            </div>
            <Link href="/news">
              <span className="text-primary-green text-xs font-bold uppercase cursor-pointer hover:underline">
                View All
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {section.articles.map((article, articleIdx) => (
              <Link href={`/news/${article.slug}`} key={articleIdx} className="group flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-4 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden h-48 md:h-full">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 flex flex-col justify-center">
                  <span className="text-primary-green text-xs font-bold uppercase mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {article.subtitle}
                  </p>
                  <p className="text-xs font-bold text-gray-700">
                    by {article.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
