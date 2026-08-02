import React from "react";
import Link from "next/link";
import { magazineData, recentEditions } from "@/data/mockData";

export default function MagazinePage() {
  const currentEdition = recentEditions[0];

  return (
    <main className="container mx-auto px-4 md:px-12 py-8 min-h-screen">
      {/* Magazine Header */}
      <div className="flex flex-col md:flex-row gap-8 items-center border-b border-gray-200 pb-12 mb-12">
        <div className="md:w-1/3">
          <img 
            src={currentEdition.imageUrl} 
            alt={currentEdition.month} 
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{currentEdition.month}</h1>
          <p className="text-gray-500 mb-6 text-lg">
            Explore the latest insights, in-depth essays, and cultural reviews in this month's edition.
          </p>
          <button className="bg-orange-accent text-white px-8 py-3 rounded-xl font-bold hover-orange transition-colors">
            Download eBook
          </button>
        </div>
      </div>

      {/* Sections */}
      {magazineData.map((section, idx) => (
        <section key={idx} className="mb-16">
          <div className="flex justify-between items-center mb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 pb-2 border-b-2 border-orange-500">
              <div className="w-2 h-2 rounded-full bg-orange-accent"></div>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <span className="text-orange-accent text-xs font-bold uppercase cursor-pointer hover:underline">
              View All
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section.articles.map((article, articleIdx) => (
              <Link href={`/news/${article.slug}`} key={articleIdx} className="group flex flex-col md:flex-row gap-6">
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
                  <span className="text-orange-accent text-xs font-bold uppercase mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-orange-accent transition-colors">
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
