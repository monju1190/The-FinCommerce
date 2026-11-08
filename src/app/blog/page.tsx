import React from "react";
import Link from "next/link";
import { magazineData } from "@/data/mockData";

export default function BlogIndexPage() {
  const allPosts = magazineData.flatMap((section) => section.articles);

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
              Editorial & Essays • October–December 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Latest Thinking
            </h1>
            <p className="text-xl text-gray-500">
              In-depth essays, policy analyses, and executive perspectives from The Sustainability Voice contributors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-12">
            {allPosts.map((post, idx) => (
              <article
                key={idx}
                className="flex flex-col md:flex-row gap-8 group border-b border-gray-100 pb-12"
              >
                <div className="md:w-1/3 flex-shrink-0">
                  <Link href={`/news/${post.slug}`} className="block rounded-2xl overflow-hidden h-48 relative bg-gray-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <span className="text-primary-green text-xs font-bold uppercase mb-2">
                    {post.category}
                  </span>
                  <Link href={`/news/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-3 leading-snug group-hover:text-primary-green transition-colors font-display">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.subtitle}
                  </p>
                  <div className="flex items-center space-x-3 mt-auto">
                    {post.authorImage ? (
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-xs">
                        {post.author.charAt(0)}
                      </div>
                    )}
                    <div className="text-xs">
                      <p className="font-bold">{post.author}</p>
                      <p className="text-gray-400">{post.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4 font-display">The Quarterly Briefing</h3>
              <p className="text-gray-500 text-sm mb-6">
                Get our latest sustainability insights and digital editions delivered straight to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-primary-green"
              />
              <button className="w-full bg-primary-green text-white font-bold py-3 rounded-xl hover:bg-primary-light transition-colors">
                Subscribe
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2 font-display">
                Issue Sections
              </h3>
              <div className="flex flex-wrap gap-2">
                {magazineData.map((sec) => (
                  <Link
                    key={sec.title}
                    href={`/news/${sec.articles[0].slug}`}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer hover:bg-primary-green hover:text-white transition-colors"
                  >
                    {sec.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
