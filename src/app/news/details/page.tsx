import React from "react";
import Link from "next/link";
import { magazineData } from "@/data/mockData";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaClock, FaUserCircle } from "react-icons/fa";

export default function NewsDetailsPage() {
  const article = magazineData[0].articles[0];

  return (
    <main className="text-gray-900 min-h-screen pb-24">
      <article className="container mx-auto px-4 md:px-12 pt-16 md:pt-24 max-w-4xl">
        {/* Category & Date */}
        <div className="flex items-center space-x-4 mb-6">
          <Link href="/category/sustainable-cities">
            <span className="text-[#16a34a] text-sm font-bold uppercase tracking-widest hover:underline cursor-pointer">
              {article.category}
            </span>
          </Link>
          <span className="text-gray-400">•</span>
          <div className="flex items-center text-gray-500 text-sm">
            <FaClock className="mr-2" />
            <span>{article.date}</span>
          </div>
        </div>

        {/* Title & Excerpt */}
        <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-6">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {article.subtitle}
        </p>

        {/* Author & Share */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-gray-200 py-6 mb-12 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            {article.authorImage ? (
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#16a34a]"
              />
            ) : (
              <FaUserCircle size={48} className="text-gray-300" />
            )}
            <div>
              <div className="font-bold text-lg">{article.author}</div>
              <div className="text-sm text-gray-500">{article.authorRole}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Share</span>
            <div className="flex space-x-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mb-12">
          <div className="w-full relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-lg">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto max-h-[680px] object-contain mx-auto block"
            />
          </div>
        </figure>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none prose-a:text-[#16a34a] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}
