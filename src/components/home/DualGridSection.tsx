import React from "react";
import Link from "next/link";

export default function DualGridSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-16" data-purpose="news-grids">
      
      {/* Worlds News */}
      <div data-purpose="worlds-news" className="flex flex-col h-full border-t-4 border-gray-900 pt-2">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-black font-display tracking-tight text-gray-900">Worlds News</h2>
          <Link href="/category/world">
            <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
              View All
            </span>
          </Link>
        </div>

        {/* Featured News Card */}
        <Link href="/news/details" className="group cursor-pointer mb-6">
          <div className="overflow-hidden mb-3 relative w-full h-[250px]">
            <img
              alt="World News Main"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ko91mT-wSZ9ThhG4QNKxVESvNSnBlEXkfPQuzmSJ_8VbZ_uSPuptpOntY3O_C3u6RdUgMm79EcX2UBhHIXymVwXI4Pbgrs6nMdk_vE52A4c1h4Qw4hIB2bmxfduJWZ7TE5_LRnvGQ2DD-G0_yfbys-9U0NJm4lGPw1fKQ4-fXO_6kKMZmJht1SNS06v5azGP_oAdpbnj-QMBbpVwDJoL74JZdUd23kqkCa2pLRzUfDYmBJO15dM"
            />
          </div>
          <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block mt-2">
            Politics
          </span>
          <h3 className="text-2xl font-bold font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug mb-2">
            Dhaka Startups Lead the Charge in E-Waste Management
          </h3>
          <p className="text-gray-600 text-sm font-display mb-2">
            A comprehensive look at how local innovators are tackling the growing problem of electronic waste and recycling.
          </p>
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Yesterday
          </div>
        </Link>

        {/* List Items */}
        <div className="flex flex-col flex-1 border-t border-gray-300">
          <Link href="/news/details" className="group cursor-pointer py-4 border-b border-gray-300">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Global Markets
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Rooftop Solar in Dhaka: A Sustainable Energy Revolution
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              1 April 2025
            </div>
          </Link>

          <Link href="/news/details" className="group cursor-pointer py-4 border-b border-gray-300">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Economics
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Where Business News Meets Strategic Thinking
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              1 April 2025
            </div>
          </Link>

          <Link href="/news/details" className="group cursor-pointer py-4 border-b border-gray-300">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Policy
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              In-Depth Business Journalism, Redefined
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              1 March 2025
            </div>
          </Link>
        </div>
      </div>

      {/* Technology News */}
      <div data-purpose="technology-news" className="flex flex-col h-full border-t-4 border-gray-900 pt-2 lg:pl-12 lg:border-l lg:border-t-0 lg:border-gray-300 relative">
        {/* We need a top border just for mobile, or we handle it with responsive borders */}
        <div className="absolute top-0 left-0 w-full border-t-4 border-gray-900 lg:hidden"></div>
        <div className="absolute top-0 left-12 w-[calc(100%-3rem)] border-t-4 border-gray-900 hidden lg:block"></div>

        <div className="flex justify-between items-end mb-6 mt-2 lg:mt-0">
          <h2 className="text-3xl font-black font-display tracking-tight text-gray-900">Technology News</h2>
          <Link href="/category/technology">
            <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
              View All
            </span>
          </Link>
        </div>

        {/* Featured News Card */}
        <Link href="/news/details" className="group cursor-pointer mb-6">
          <div className="overflow-hidden mb-3 relative w-full h-[250px]">
            <img
              alt="Tech Main"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQd3epbeePAAV2hCAfL8EV336_ncEQecx_luKQnKBYOnhv0wMhnL9jeNo8T5u2qVuhqPQRRxIaGedOuNmfHXW72REDsKN5vEcazwXJfg54GaIoe_NZMb7eRQdHZ3jJPvg3c10n5l47oAQuGARYodChjot8DClM0eLF0dogQjAqQreCzcAJPoa4cIAN8ZJIhKIta1doHbWVz8hW6VeDqUF8wkm-rYFweU4xraFOGDfmDYoryC5BNwo"
            />
          </div>
          <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block mt-2">
            Innovation
          </span>
          <h3 className="text-2xl font-bold font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug mb-2">
            Sundarbans Conservation: New Corporate Pledges Show Promise
          </h3>
          <p className="text-gray-600 text-sm font-display mb-2">
            Local corporations and NGOs team up to restore mangrove ecosystems and protect endangered wildlife.
          </p>
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Yesterday
          </div>
        </Link>

        {/* List Items */}
        <div className="flex flex-col flex-1 border-t border-gray-300">
          <Link href="/news/details" className="group cursor-pointer py-4 border-b border-gray-300">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Hardware
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Dhaka Tech Hubs Lead Green Innovation
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              6mo ago
            </div>
          </Link>

          <Link href="/news/details" className="group cursor-pointer py-4 border-b border-gray-300">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Cybersecurity
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Cybersecurity in Smart Grids
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              8mo ago
            </div>
          </Link>

          <Link href="/news/details" className="group cursor-pointer py-4 border-b border-gray-300">
            <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest mb-1 block">
              Media
            </span>
            <h4 className="font-bold text-lg font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors leading-snug">
              Media's Role in Climate Awareness
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
              9mo ago
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}
