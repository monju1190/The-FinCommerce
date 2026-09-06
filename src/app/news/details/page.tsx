import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaClock, FaUserCircle } from "react-icons/fa";

export default function NewsDetailsPage() {
  return (
    <main className="text-gray-900 min-h-screen pb-24">
      <article className="container mx-auto px-4 md:px-12 pt-16 md:pt-24 max-w-4xl">
        
        {/* Category & Date */}
        <div className="flex items-center space-x-4 mb-6">
          <Link href="/category/esg">
            <span className="text-[#16a34a] text-sm font-bold uppercase tracking-widest hover:underline cursor-pointer">
              Sustainability & ESG
            </span>
          </Link>
          <span className="text-gray-400">•</span>
          <div className="flex items-center text-gray-500 text-sm">
            <FaClock className="mr-2" />
            <span>March 15, 2026</span>
          </div>
        </div>

        {/* Title & Excerpt */}
        <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-6">
          How Corporations are Accelerating the Transition to a Circular Economy
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          The shift from a linear "take-make-dispose" model to a circular economy is no longer just an environmental imperative—it is a business necessity. We explore the pioneers leading this change.
        </p>

        {/* Author & Share */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-gray-200 py-6 mb-12 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <FaUserCircle size={48} className="text-gray-300" />
            <div>
              <div className="font-bold text-lg">Dr. Shaquib Quareshi</div>
              <div className="text-sm text-gray-500">Managing Editor</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Share</span>
            <div className="flex space-x-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#16a34a] hover:text-white transition-colors"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mb-12">
          <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzE7c4f0l1rZz8yK3x_y784s9t9z0s0t4t2w9s4t2t9w_s0s0s4w8t4w4t4w4t4w4t4w4t4w4t4w4t4w4t4w4t4w4t4w4t4w4t" 
              alt="Circular Economy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <figcaption className="text-sm text-gray-500 mt-4 text-center italic">
            Innovations in manufacturing are drastically reducing waste and maximizing resource utilization.
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none prose-a:text-[#16a34a] prose-a:no-underline hover:prose-a:underline">
          <p>
            In today's rapidly evolving global market, the concept of a circular economy is gaining unprecedented momentum. Unlike the traditional linear economy, which operates on a 'take, make, dispose' model, a circular economy is restorative and regenerative by design. It aims to keep products, components, and materials at their highest utility and value at all times.
          </p>
          
          <h2>The Business Case for Circularity</h2>
          <p>
            Transitioning to a circular economy is not merely an environmental crusade; it presents a massive economic opportunity. Recent studies suggest that adopting circular principles could unlock ৳4.5 trillion in economic growth globally by 2030. Companies are realizing that by rethinking their supply chains and product lifecycles, they can significantly reduce costs, mitigate risks associated with resource volatility, and tap into new revenue streams.
          </p>
          <p>
            For instance, major technology firms are increasingly designing devices for disassembly, allowing for easier recovery of rare earth metals. Similarly, the fashion industry—historically notorious for its environmental footprint—is seeing a surge in 'clothing as a service' models and advanced recycling technologies that turn old garments into new textiles.
          </p>

          <blockquote>
            "The circular economy is a systemic shift that builds long-term resilience, generates business and economic opportunities, and provides environmental and societal benefits."
          </blockquote>

          <h2>Policy and Regulation</h2>
          <p>
            Government regulations are also acting as powerful catalysts. The European Union's Circular Economy Action Plan, for example, is introducing stringent requirements for product design, waste management, and consumer empowerment. These regulatory frameworks are forcing multinational corporations to adapt swiftly or face significant penalties and market access restrictions.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            The transition to a circular economy is a complex, multi-faceted challenge that requires collaboration across industries, governments, and consumers. However, as the pioneers of this movement are demonstrating, it is a journey well worth undertaking—one that promises a more sustainable, resilient, and prosperous future for all.
          </p>
        </div>

      </article>
    </main>
  );
}
