import React from "react";
import { magazineData } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Find the article from mock data
  let article = null;
  for (const section of magazineData) {
    const found = section.articles.find((a) => a.slug === slug);
    if (found) {
      article = found;
      break;
    }
  }

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white text-gray-900 pb-16 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/magazine">
            <span className="text-primary-green font-bold uppercase tracking-widest text-xs mb-6 inline-block cursor-pointer hover:underline">
              {article.category}
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {article.subtitle}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img
              alt={article.author}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2uL1AJ4fWgqC8W1CjI1Yf8ji-5abe3aYsxy7muXhYEjUrL3Eg07JLHKlPjvhiPBff9njqF4LJpKjnrTzyhvfgCict_WF6RUWxCdD_28cTUrKruAg9D5UlhLIj5t7bMO_EmpXz6Eeirk9VjAinbpsmpHC_jTILATtn6aqLxpQOoACbCwEqNn4VdZs3F1Hf-35laWGV79hPMltxFCtBGQEgMS5hz75Uh0tRfTiVy9hHa6EYs0sWaDE"
              className="w-12 h-12 rounded-full shadow-md object-cover"
            />
            <div className="text-left">
              <p className="font-bold text-sm">By {article.author}</p>
              <p className="text-xs text-gray-500">{article.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto max-w-5xl -mt-10 px-4 mb-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content & Sidebar */}
      <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Social Share Sidebar */}
        <div className="lg:col-span-1 flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 items-center pt-2">
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary-green hover:border-primary-green transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary-green hover:border-primary-green transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary-green hover:border-primary-green transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary-green hover:border-primary-green transition-colors">
            <FaEnvelope />
          </a>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 prose prose-lg prose-orange max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Right Sidebar (Ads or Related) */}
        <div className="lg:col-span-3">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Advertisement</p>
            <div className="bg-gray-200 w-full h-64 flex items-center justify-center text-gray-400 font-bold">
              AD SLOT
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
