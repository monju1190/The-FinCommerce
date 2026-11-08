"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-green hover:bg-[#8DC63F] text-white hover:text-gray-950 border border-white/20 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 group ${
        isVisible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-6"
      }`}
    >
      <FaArrowUp
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}

