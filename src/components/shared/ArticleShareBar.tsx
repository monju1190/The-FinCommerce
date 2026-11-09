"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaLink,
  FaCheck,
  FaShareNodes,
} from "react-icons/fa6";

interface ArticleShareBarProps {
  title: string;
  slug: string;
  vertical?: boolean;
}

export default function ArticleShareBar({
  title,
  slug,
  vertical = false,
}: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [hasNativeShare, setHasNativeShare] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      setHasNativeShare(Boolean(navigator.share));
    }
  }, [slug]);

  const handleCopyLink = async () => {
    try {
      const urlToCopy = currentUrl || `${window.location.origin}/news/${slug}`;
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Read "${title}" on The Sustainability Voice`,
          url: currentUrl || `${window.location.origin}/news/${slug}`,
        });
      } catch {
        // User cancelled or not supported
      }
    } else {
      handleCopyLink();
    }
  };

  const shareUrl = encodeURIComponent(currentUrl || `https://sustainabilityvoice.com/news/${slug}`);
  const shareText = encodeURIComponent(`Read "${title}" on The Sustainability Voice:`);

  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;

  if (vertical) {
    return (
      <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3 items-center sticky top-28 z-20">
        <span className="hidden lg:block text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">
          Share
        </span>

        {/* Native Mobile / System Share (Covers Instagram, Telegram, etc.) */}
        {hasNativeShare && (
          <button
            onClick={handleNativeShare}
            aria-label="Share via system dialog"
            title="Share to Instagram, Telegram, etc."
            className="w-10 h-10 rounded-full bg-primary-green text-white flex items-center justify-center hover:bg-primary-light transition-all shadow-md cursor-pointer hover:scale-105"
          >
            <FaShareNodes size={15} />
          </button>
        )}

        {/* Facebook */}
        <a
          href={fbShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          title="Share on Facebook"
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-xs cursor-pointer hover:scale-105"
        >
          <FaFacebookF size={14} />
        </a>

        {/* LinkedIn */}
        <a
          href={linkedInShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-xs cursor-pointer hover:scale-105"
        >
          <FaLinkedinIn size={14} />
        </a>

        {/* Twitter / X */}
        <a
          href={twitterShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (Twitter)"
          title="Share on X"
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-black hover:border-black transition-all shadow-xs cursor-pointer hover:scale-105"
        >
          <FaXTwitter size={14} />
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          title="Share on WhatsApp"
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-xs cursor-pointer hover:scale-105"
        >
          <FaWhatsapp size={16} />
        </a>

        {/* Copy Link */}
        <div className="relative">
          <button
            onClick={handleCopyLink}
            aria-label="Copy Article Link"
            title="Copy link to clipboard"
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-primary-green hover:border-primary-green transition-all shadow-xs cursor-pointer hover:scale-105"
          >
            {copied ? <FaCheck size={14} className="text-[#16a34a]" /> : <FaLink size={14} />}
          </button>
          {copied && (
            <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow whitespace-nowrap animate-fade-in z-30">
              Copied!
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal variant (for article footer or top bar)
  return (
    <div className="flex flex-wrap items-center gap-3 py-4 border-y border-black/10 my-8">
      <span className="text-xs font-black uppercase tracking-widest text-gray-700 mr-2 flex items-center gap-1.5">
        <FaShareNodes size={13} className="text-primary-green" />
        <span>Share Article</span>
      </span>

      {hasNativeShare && (
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-1.5 bg-primary-green hover:bg-primary-light text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
        >
          <FaShareNodes size={12} />
          <span>Share...</span>
        </button>
      )}

      <a
        href={fbShare}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-white hover:bg-[#1877F2] hover:text-white text-gray-700 border border-gray-300 text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-xs"
      >
        <FaFacebookF size={12} />
        <span>Facebook</span>
      </a>

      <a
        href={linkedInShare}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-white hover:bg-[#0A66C2] hover:text-white text-gray-700 border border-gray-300 text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-xs"
      >
        <FaLinkedinIn size={12} />
        <span>LinkedIn</span>
      </a>

      <a
        href={twitterShare}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-white hover:bg-black hover:text-white text-gray-700 border border-gray-300 text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-xs"
      >
        <FaXTwitter size={12} />
        <span>Post</span>
      </a>

      <a
        href={whatsappShare}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-white hover:bg-[#25D366] hover:text-white text-gray-700 border border-gray-300 text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-xs"
      >
        <FaWhatsapp size={13} />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={handleCopyLink}
        className="flex items-center gap-1.5 bg-white hover:border-primary-green text-gray-700 border border-gray-300 text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
      >
        {copied ? <FaCheck size={12} className="text-[#16a34a]" /> : <FaLink size={12} />}
        <span>{copied ? "Link Copied!" : "Copy Link"}</span>
      </button>
    </div>
  );
}

