import React from "react";
import { magazineData, magazinePdfLinks, recentEditions } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaBookOpen, FaDownload } from "react-icons/fa";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const allArticles = magazineData.flatMap((s) => s.articles);
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 4);

  const currentIssue = recentEditions[0];

  return (
    <main className="bg-[var(--color-ft-pink)] text-gray-900 pb-20 min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#f5e4da] border-b border-[#dfcfc2] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href={`/category/${article.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            <span className="text-[#16a34a] font-black uppercase tracking-widest text-xs mb-4 inline-block cursor-pointer hover:underline">
              {article.category} • {article.date}
            </span>
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.15] font-display text-gray-900">
            {article.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-display">
            {article.subtitle}
          </p>
          <div className="flex items-center justify-center space-x-4">
            {article.authorImage ? (
              <img
                alt={article.author}
                src={article.authorImage}
                className="w-14 h-14 rounded-full shadow-md object-cover border-2 border-[#dfcfc2]"
              />
            ) : (
              <div className="w-14 h-14 rounded-full shadow-md bg-primary-green text-white flex items-center justify-center font-bold text-xl">
                {article.author.charAt(0)}
              </div>
            )}
            <div className="text-left">
              <p className="font-bold text-base text-gray-900 font-display">By {article.author}</p>
              <p className="text-xs text-gray-600">
                {article.authorRole ? `${article.authorRole} • ` : ""}
                {article.date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto max-w-5xl px-4 mt-8 mb-12 md:mb-16">
        <div className="rounded-2xl overflow-hidden shadow-xl bg-[#fff8f3] border border-[#dfcfc2] p-2 md:p-3">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto max-h-[680px] object-contain mx-auto block rounded-xl"
          />
        </div>
      </div>

      {/* Article Content & Sidebar */}
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Social Share Sidebar */}
        <div className="lg:col-span-1 flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 items-center pt-2">
          <a
            href="https://www.facebook.com/sustainabilityvoice"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#d2c0b2] bg-[#fff8f3] flex items-center justify-center text-gray-600 hover:text-primary-green hover:border-primary-green transition-colors"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-[#d2c0b2] bg-[#fff8f3] flex items-center justify-center text-gray-600 hover:text-primary-green hover:border-primary-green transition-colors"
            aria-label="Share on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/the-sustainability-voice/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#d2c0b2] bg-[#fff8f3] flex items-center justify-center text-gray-600 hover:text-primary-green hover:border-primary-green transition-colors"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:editor@sustainabilityvoice.com"
            className="w-10 h-10 rounded-full border border-[#d2c0b2] bg-[#fff8f3] flex items-center justify-center text-gray-600 hover:text-primary-green hover:border-primary-green transition-colors"
            aria-label="Share via Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-7 prose prose-lg max-w-none font-display text-gray-900 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
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
                <span>Live Read Full Issue</span>
              </Link>
              <a
                href={magazinePdfLinks.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-md"
              >
                <FaDownload size={13} />
                <span>Download Soft Copy (PDF)</span>
              </a>
            </div>
          </div>

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
