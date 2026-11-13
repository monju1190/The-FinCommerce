import React from "react";
import { magazineData, magazinePdfLinks, recentEditions } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import MagazineAdBanner from "@/components/shared/MagazineAdBanner";
import ArticleShareBar from "@/components/shared/ArticleShareBar";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const effectiveSlug = slug === "bonbibi-and-humbaba-ancient-guardians-of-the-forest" ? "bonbibi" : slug;

  const allArticles = magazineData.flatMap((s) => s.articles);
  const article = allArticles.find((a) => a.slug === effectiveSlug);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles
    .filter((a) => a.slug !== effectiveSlug)
    .slice(0, 4);

  const currentIssue = recentEditions[0];

  return (
    <main className="bg-[#F7F5F0] text-[#111111] pb-24 min-h-screen antialiased">
      {/* Editorial Breadcrumb & Header */}
      <div className="border-b border-black/15 bg-white py-10 md:py-14 px-4">
        <div className="master-container max-w-4xl mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-700 hover:text-black transition-colors font-bold"
          >
            <FaArrowLeft size={10} />
            <span>Back to Main Page</span>
          </Link>
        </div>

        <div className="master-container max-w-4xl text-center">
          <Link href={`/category/${article.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            <span className="text-[#1a4d2e] font-mono font-bold uppercase tracking-[0.2em] text-xs mb-4 inline-block hover:underline">
              {article.category} • {article.date}
            </span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.12] font-display text-[#111111] uppercase tracking-tight">
            {article.title}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-serif italic measure-readable">
            &ldquo;{article.subtitle}&rdquo;
          </p>
          <div className="inline-flex items-center justify-center space-x-4 border-t border-black/15 pt-4">
            {article.authorImage ? (
              <img
                alt={article.author}
                src={article.authorImage}
                className="w-12 h-12 rounded-none object-cover border border-black/20"
              />
            ) : (
              <div className="w-12 h-12 rounded-none bg-[#111111] text-[#F7F5F0] flex items-center justify-center font-bold text-lg font-mono">
                {article.author.charAt(0)}
              </div>
            )}
            <div className="text-left font-mono">
              <p className="font-bold text-sm text-[#111111] uppercase">
                {article.author.toLowerCase().includes("interview")
                  ? article.author
                  : article.author.startsWith("By ")
                  ? article.author
                  : `By ${article.author}`}
              </p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                {article.author.toLowerCase().includes("interview")
                  ? ""
                  : article.authorRole
                  ? `${article.authorRole} • `
                  : ""}
                {article.date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="master-container max-w-5xl mt-10 mb-12 md:mb-16">
        <div className="border border-black/15 bg-white p-2 sm:p-3 relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto max-h-[680px] object-contain mx-auto block"
          />
        </div>
      </div>

      {/* Article Content & Sidebar */}
      <div className="master-container max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Social Share Sidebar */}
        <div className="lg:col-span-1 pt-2 flex justify-center lg:justify-start">
          <ArticleShareBar title={article.title} slug={article.slug} vertical />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-7 prose prose-lg max-w-none font-serif text-[#111111] leading-relaxed">
          <article
            data-protected="true"
            className="article-body no-copy select-none text-justify"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Bottom Article Share Bar */}
          <ArticleShareBar title={article.title} slug={article.slug} />
        </div>

        {/* Right Sidebar: Issue PDF & Related Articles */}
        <div className="lg:col-span-4 space-y-8">
          {/* Magazine Issue Card */}
          <div className="bg-[#f8ebe3] p-6 rounded-2xl border border-[#dfcfc2] shadow-sm">
            <span className="text-[10px] font-black text-[#16a34a] uppercase tracking-widest block mb-2">
              Published in {currentIssue.month}
            </span>
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4">
              {currentIssue.issueNumber}
            </h3>
            <Link href={`/magazine/${currentIssue.slug}`} className="block mb-4 overflow-hidden rounded-xl border border-[#d2c0b2] shadow-sm bg-[#0b101e]">
              <img
                src={currentIssue.imageUrl}
                alt={currentIssue.month}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <div className="space-y-2.5">
              <Link
                href={`/magazine/${currentIssue.slug}`}
                className="w-full bg-primary-green text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary-light transition-colors shadow-md"
              >
                <FaBookOpen size={13} />
                <span>Explore Volume 01</span>
              </Link>
            </div>
          </div>

          {/* Sponsored Partner from Print Edition */}
          <MagazineAdBanner variant="sidebar" adPage={47} />

          {/* Related Stories */}
          <div className="bg-[#fff8f3] p-6 rounded-2xl border border-[#dfcfc2] shadow-sm">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 border-b border-[#dfcfc2] pb-3 mb-4">
              More From This Issue
            </h4>
            <div className="space-y-4">
              {relatedArticles.map((rel, i) => (
                <Link
                  key={i}
                  href={`/news/${rel.slug}`}
                  className="group block border-b border-[#ebdcd1] pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-[10px] font-black uppercase text-[#16a34a] block mb-1">
                    {rel.category}
                  </span>
                  <h5 className="font-bold text-sm font-display text-gray-900 group-hover:text-primary-green transition-colors leading-snug">
                    {rel.title}
                  </h5>
                  <p className="text-xs text-gray-500 mt-1 font-display">By {rel.author}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
