"use client";
import React, { useEffect, useState } from "react";

export default function EditorialCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only on desktop (screens >= 1024px and hover-capable)
    if (window.innerWidth < 1024 || !window.matchMedia("(hover: hover)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const isLead = Boolean(target?.closest("img") || target?.closest("a") || target?.closest(".broadsheet-frame"));
      setIsPointer(isLead);
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible || !isPointer) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-mono text-[10px] tracking-widest font-black uppercase transition-transform duration-100 ease-out shadow-2xl bg-[#D92B2B] text-white w-14 h-14"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      READ
    </div>
  );
}

