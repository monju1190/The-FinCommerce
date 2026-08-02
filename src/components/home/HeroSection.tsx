import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16 md:pb-24">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 h-[calc(100vh-10rem)] min-h-[500px]">
        {/* Left Column: Primary Feature (Economy) */}
        <article className="lg:col-span-2 relative rounded-xl overflow-hidden group flex-[1.5] lg:h-full shadow-lg" data-purpose="primary-feature">
          <img 
            alt="Times Square New York City at Night" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAZfRu7IeCbkJisNUbSLUswVfrLw1TejFpxWIkT2mQ1XpSCf-x_T85LoAPepGEjWSD1RXPa-YS1N8d5whmLv0xwunPD7yfN6zFPDU24iZy2yrFPrgj960iS4ss9_V3QNBN7CR7poWS87ZCRzfgBQQZEttnV3fvYCvrGZkRglwZJBYwjIcG9-OyCEs8mpPlWPaEf69cXtez2HtwC7v_ujlAIf9_JABo_H3Bs5CC3uHKnzMaiN3mMS0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
            <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-4 w-fit">Economy</span>
            <h2 className="text-white text-2xl lg:text-4xl font-bold max-w-2xl leading-tight">
              Exploring the Intricacies of Markets, Money, and Global Economies
            </h2>
          </div>
          <Link href="/news" aria-label="Read full economy article" className="absolute inset-0"></Link>
        </article>
        
        {/* Right Column: Secondary Features Stacked */}
        <div className="flex flex-col gap-4 flex-1 lg:h-full">
          {/* Top Secondary: Style */}
          <article className="relative rounded-xl overflow-hidden group flex-1 shadow-lg" data-purpose="secondary-feature-style">
            <img 
              alt="Geometric Architecture" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUZ4FlGaP2Sl-L3vH7TAClRzoC1xZ3FiH8Dz-F4iMzxwrWuPDN6JECWgmc4-7LDrigaT96pEAioDD0Gt-metjq8fzgQZ5-H0gCOoUQ7CKU2IZkEWkkBvgFrcJsWSP7k6nbPfatI9rr0xFuH48JHos246TX5JBWG6oJ6Otgu1dDe6NzYsqvUcuzmZX18vKy5cc5gn5GJzMQjyH0XWB2JGr5gcwMsiWuVuUPSrvBi87l7e8a1Q96b64"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-2 w-fit">Style</span>
              <h3 className="text-white text-lg font-bold leading-tight">
                A Journey Through Colors, Textures, and Trends
              </h3>
            </div>
            <Link href="/news" aria-label="Read full style article" className="absolute inset-0"></Link>
          </article>
          
          {/* Bottom Secondary: Art */}
          <article className="relative rounded-xl overflow-hidden group flex-1 shadow-lg" data-purpose="secondary-feature-art">
            <img 
              alt="Classical Art Setting" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaTUcPYoY9tHAqj_2KHGknvv1zVaTmnyfNOs-97rjyHMXevogX_xVnpxfXNJakmPJCiUviHBEtkOthCKO4oivL9I0k54VWETltuFqW56wJp2TD5LH4d1petxolsMDnkIYLF9HD6-27sFJo3iw0-VI8BZfT8wYC66TgDffDcpRt4Nbgg39bf-govHuOfo-79dcu2afCZ0y_ra8STxbzFDp0ZuHBODbGmp_t5vBPHtyi7eRWohm1XQY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="inline-block bg-green-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-2 w-fit">Art</span>
              <h3 className="text-white text-lg font-bold leading-tight">
                Inspiring Creativity and Fostering Artistic Expression
              </h3>
            </div>
            <Link href="/news" aria-label="Read full art article" className="absolute inset-0"></Link>
          </article>
        </div>
      </div>
    </section>
  );
}
