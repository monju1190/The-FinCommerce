import React from "react";

export default function CtaSection() {
  return (
    <section className="bg-ft-pink w-full pt-16 pb-16 border-t border-black/20 mt-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-[#1a1a1a] rounded-[2rem] p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden">
          
          {/* Background Giant Text */}
          <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap opacity-5 select-none pointer-events-none">
            <span className="text-[20vw] md:text-[15vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-none font-display text-white">
              FINCOMMERCE
            </span>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-2">
              Stay in the loop
            </h2>
            <p className="text-zinc-400 text-sm font-medium">Subscribe to our newsletter for the latest updates.</p>
          </div>
          <div className="w-full lg:w-auto relative z-10">
            <div className="flex relative">
              <input
                className="bg-zinc-800/80 border border-zinc-700/50 rounded-full py-4 pl-6 pr-32 w-full lg:w-[400px] text-white focus:ring-2 focus:ring-primary-green outline-none text-sm placeholder-zinc-500"
                placeholder="Your email address"
                type="email"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-green text-white px-6 h-10 rounded-full font-bold flex items-center justify-center hover:bg-primary-light transition-colors shadow-sm text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
