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
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-[#111111] hover:bg-[#D92B2B] text-[#F7F5F0] border border-black/20 shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group ${
        isVisible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-4"
      }`}
    >
      <FaArrowUp
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}

