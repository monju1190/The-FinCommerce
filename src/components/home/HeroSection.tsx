"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const slides = [
  {
    tag: "AUGUST 2026 ISSUE",
    title: "Mapping the Information Frost",
    desc: "How data transmission networks are achieving near-zero latency through new translucent physical infrastructure.",
    img: "/magazine cover/1.png",
    category: "TECHNOLOGY",
    link: "/magazine/august-2026"
  },
  {
    tag: "JULY 2026 ISSUE",
    title: "The Pulse of Global Markets",
    desc: "To spread the word, the company embarked on a mass marketing drive, TV campaigns launched in the platform's key markets.",
    img: "/magazine cover/2.png",
    category: "ECONOMY",
    link: "/magazine/july-2026"
  },
  {
    tag: "JUNE 2026 ISSUE",
    title: "Smart Homes, Smarter Living",
    desc: "Exploring how IoT and AI are revolutionizing consumer interaction with living spaces on a daily basis.",
    img: "/magazine cover/image.png",
    category: "INNOVATION",
    link: "/magazine/june-2026"
  },
  {
    tag: "MAY 2026 ISSUE",
    title: "Eco-Tourism & Sustainability",
    desc: "New regulations are forcing legacy airlines to offset carbon footprints, creating a booming secondary market.",
    img: "/magazine cover/image copy.png",
    category: "ENVIRONMENT",
    link: "/magazine/may-2026"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0b101e] relative overflow-hidden" data-purpose="hero-slider">
      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-center h-[calc(100vh-180px)] md:h-[calc(100vh-280px)] min-h-[500px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative w-full h-[85%] lg:h-[90%]">
          
          {/* Left Content */}
          <div className="flex-1 w-full relative z-10 flex flex-col justify-center">
            {slides.map((slide, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${
                  idx === activeSlide ? "opacity-100 translate-y-0 z-20" : "opacity-0 translate-y-4 z-0 pointer-events-none"
                }`}
              >
                {/* Tag */}
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1.5 mb-6 w-fit border border-white/10 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                  <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{slide.tag}</span>
                </div>

                {/* Title & Desc */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
                  {slide.desc}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mb-16">
                  <Link href={slide.link} className="flex items-center space-x-2 bg-[#d1f0ff] hover:bg-white text-[#0b101e] px-6 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg">
                    <span>Read Article</span>
                    <FaArrowRight size={14} />
                  </Link>
                  <Link href="/magazine" className="flex items-center space-x-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-colors">
                    <span>Full Coverage</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Spacer to give height since absolute divs don't take space */}
            <div className="invisible">
              <div className="flex items-center space-x-2 px-3 py-1.5 mb-6"><div className="w-1.5 h-1.5"></div><span className="text-[10px]">SPACER</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-display leading-tight">Mapping the Information Frost</h1>
              <p className="text-base md:text-lg mb-10">How data transmission networks are achieving near-zero latency through new translucent physical infrastructure.</p>
              <div className="flex gap-4 mb-16"><div className="px-6 py-3.5">Spacer</div><div className="px-6 py-3.5">Spacer</div></div>
            </div>

            {/* Bottom Progress Indicator */}
            <div className="w-full max-w-sm mt-auto relative z-20">
              <div className="flex justify-between items-center mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>Active Slide</span>
                <span>0{activeSlide + 1} / 0{slides.length}</span>
              </div>
              <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#d1f0ff] transition-all duration-500 ease-out"
                  style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="flex-1 w-full relative z-10 flex justify-end h-full py-4">
            <div className="relative w-full max-w-[500px] h-full max-h-[600px] aspect-auto lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 bg-[#121826]">
              {slides.map((slide, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === activeSlide ? "opacity-100 z-20" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    alt={slide.title}
                    src={slide.img}
                    className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
                      idx === activeSlide ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
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
