import React from "react";
import { categories, magazineData } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CategoryArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const categoryInfo = categories.find((c) => c.slug === slug);
  if (!categoryInfo) {
    notFound();
  }

  // Gather all articles that match the category name (case-insensitive for mock)
  const allArticles = magazineData.flatMap((section) => section.articles);
  const categoryArticles = allArticles.filter(
    (a) => a.category.toLowerCase() === categoryInfo.name.toLowerCase()
  );

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Category Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <img
          src={categoryInfo.imageUrl}
          alt={categoryInfo.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
            Category Archive
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {categoryInfo.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-16">
        {categoryArticles.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-400">No articles found in this category.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article, idx) => (
              <Link href={`/news/${article.slug}`} key={idx} className="group block">
                <div className="rounded-2xl overflow-hidden h-64 mb-6 relative shadow-md group-hover:shadow-xl transition-all">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary-green text-white px-3 py-1 text-xs font-bold uppercase rounded-md shadow-lg">
                    {article.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary-green transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {article.subtitle}
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold text-gray-400">
                  <span>{article.author}</span>
                  <span>&bull;</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
