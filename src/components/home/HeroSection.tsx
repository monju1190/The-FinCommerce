"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBookOpen, FaDownload } from "react-icons/fa6";
import { magazinePdfLinks } from "@/data/mockData";

const slides = [
  {
    tag: "OCTOBER–DECEMBER 2026 • COVER STORY",
    title: "Waterlogging in Dhaka: Integrated Management Required",
    desc: "Waterlogging is not merely a shortage of drains or pumps; it is a citywide hydrological and urban-planning challenge requiring a catchment-based master plan.",
    img: "/magazine/oct-dec/cover.jpg",
    category: "COVER STORY",
    link: "/news/waterlogging-in-dhaka-integrated-management"
  },
  {
    tag: "OCTOBER–DECEMBER 2026 • SUSTAINABLE FINANCE",
    title: "The Carbon Corridor: Unlocking Green Investment for Bangladesh",
    desc: "How high-integrity carbon markets, Article 6 mechanisms, and cross-border green investment corridors can finance Bangladesh's industrial decarbonisation.",
    img: "/magazine/oct-dec/photos/bangladesh-bank-hero.jpg",
    category: "SUSTAINABLE FINANCE",
    link: "/news/the-carbon-corridor-unlocking-green-investment-for-bangladesh"
  },
  {
    tag: "OCTOBER–DECEMBER 2026 • HOME & THE WORLD",
    title: "Bangladesh at the Crossroads: UN SDG Report 2026",
    desc: "Bangladesh is one of Asia’s fastest SDG improvers and the world’s leader in green garment factories—yet critical policy gaps remain ahead of LDC graduation.",
    img: "/magazine/oct-dec/media/OK_Bangladesh_at_the_Crossroads_Nurunnabi/image13.png",
    category: "HOME & THE WORLD",
    link: "/news/bangladesh-at-the-crossroads-un-sdg-report-2026"
  },
  {
    tag: "OCTOBER–DECEMBER 2026 • INDUSTRY PRACTICES",
    title: "Beyond the Plaque: From Green Certification to Green Operations",
    desc: "With 349 LEED-certified factories, Bangladesh leads the world in green buildings. Now the textile sector must embed lean management and daily operational sustainability.",
    img: "/magazine/oct-dec/media/OK_Beyonnd_the_Plaque/image1.jpg",
    category: "INDUSTRY PRACTICES",
    link: "/news/beyond-the-plaque-green-certification-to-green-operations"
  },
  {
    tag: "OCTOBER–DECEMBER 2026 • AGRICULTURE",
    title: "From the Sands of Arabia to the Rivers of Bengal",
    desc: "Dr. Turki Faisal Al Rasheed explores how Saudi Arabia and Bangladesh can build shared resilience in sustainable agriculture and the Food–Water Security Nexus.",
    img: "/magazine/oct-dec/photos/solar-irrigation.jpg",
    category: "AGRICULTURE",
    link: "/news/from-the-sands-of-arabia-to-the-rivers-of-bengal"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary-green relative overflow-hidden shadow-xl border-y border-black/20" data-purpose="hero-slider">
      <div className="w-full px-6 md:px-12 flex flex-col justify-center min-h-[520px] lg:min-h-[620px] py-12 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-8 lg:gap-16 relative w-full max-w-[1600px] mx-auto">

          {/* Left Content */}
          <div className="flex-1 w-full relative z-10 flex flex-col justify-center">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${
                  idx === activeSlide
                    ? "opacity-100 translate-y-0 z-20"
                    : "opacity-0 translate-y-4 z-0 pointer-events-none"
                }`}
              >
                {/* Tag */}
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 lg:py-1.5 mb-3 lg:mb-6 w-fit border border-white/10 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]"></div>
                  <span className="text-[8px] lg:text-[10px] text-gray-200 font-bold uppercase tracking-widest">
                    {slide.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 lg:mb-6 font-display leading-tight tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm md:text-lg max-w-xl mb-6 lg:mb-10 leading-relaxed">
                  {slide.desc}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-6 lg:mb-14">
                  <Link
                    href={slide.link}
                    className="flex items-center space-x-2 bg-[#d1f0ff] hover:bg-white text-[#0b101e] px-4 py-2.5 lg:px-6 lg:py-3.5 font-bold text-[10px] lg:text-sm transition-colors shadow-lg"
                  >
                    <span>Read Article</span>
                    <FaArrowRight size={12} />
                  </Link>
                  <Link
                    href="/magazine/october-december-2026"
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2.5 lg:px-6 lg:py-3.5 font-medium text-[10px] lg:text-sm transition-colors"
                  >
                    <FaBookOpen size={12} />
                    <span>Live Read Issue</span>
                  </Link>
                  <a
                    href={magazinePdfLinks.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-4 py-2.5 lg:px-5 lg:py-3.5 font-medium text-[10px] lg:text-sm transition-colors"
                  >
                    <FaDownload size={12} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Spacer to give height since absolute divs don't take space */}
            <div className="invisible">
              <div className="flex items-center space-x-2 px-3 py-1 lg:py-1.5 mb-3 lg:mb-6">
                <div className="w-1.5 h-1.5"></div>
                <span className="text-[8px] lg:text-[10px]">SPACER</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 lg:mb-6 font-display leading-tight">
                Waterlogging in Dhaka: Integrated Management Required
              </h1>
              <p className="text-xs sm:text-sm md:text-lg mb-6 lg:mb-10">
                Waterlogging is not merely a shortage of drains or pumps; it is a citywide hydrological and urban-planning challenge requiring a catchment-based master plan.
              </p>
              <div className="flex gap-3 lg:gap-4 mb-6 lg:mb-14">
                <div className="px-4 py-2.5 lg:px-6 lg:py-3.5">Spacer</div>
                <div className="px-4 py-2.5 lg:px-6 lg:py-3.5">Spacer</div>
              </div>
            </div>

            {/* Bottom Progress Indicator & Slide Dots */}
            <div className="w-full max-w-sm mt-auto relative z-20">
              <div className="flex justify-between items-center mb-3 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                <span>Featured Stories • Issue 1, Vol. 1</span>
                <span>
                  0{activeSlide + 1} / 0{slides.length}
                </span>
              </div>
              <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#d1f0ff] transition-all duration-500 ease-out"
                  style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex gap-2 mt-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === activeSlide ? "w-6 bg-[#d1f0ff]" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-[350px] lg:max-w-[430px] aspect-[3/4] overflow-hidden shadow-2xl border border-white/10 bg-[#121826]">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === activeSlide ? "opacity-100 z-20" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    alt={slide.title}
                    src={slide.img}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-transform duration-[10000ms] ${
                      idx === activeSlide ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category Pill */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {slide.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
