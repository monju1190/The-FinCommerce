"use client";
import { useEffect } from "react";

export default function CopyProtection() {
  useEffect(() => {
    // Prevent context menu (right click) on text
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(".article-body") ||
        target?.closest("article") ||
        target?.closest("[data-protected='true']") ||
        target?.closest("p")
      ) {
        e.preventDefault();
      }
    };

    // Prevent copy and cut
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(".article-body") ||
        target?.closest("article") ||
        target?.closest("[data-protected='true']")
      ) {
        e.preventDefault();
      }
    };

    // Prevent shortcut keys like Ctrl+C, Ctrl+U, Ctrl+S
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "u", "s", "p"].includes(e.key.toLowerCase())) {
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}

