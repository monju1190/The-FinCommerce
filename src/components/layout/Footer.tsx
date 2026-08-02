import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8" data-purpose="site-footer">
      <div className="container mx-auto px-4 md:px-12">
        {/* Newsletter Row */}
        <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center mb-16 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-6 md:mb-0 max-w-xs leading-tight">
            Join our news later
          </h2>
          <div className="flex w-full md:w-auto space-x-2">
            <input
              className="bg-zinc-800 border-none rounded-xl py-3 px-6 w-full md:w-80 text-sm focus:ring-1 focus:ring-orange-500 outline-none text-white placeholder-gray-400"
              placeholder="Enter Your Email"
              type="email"
            />
            <button className="bg-orange-accent text-black font-bold px-8 py-3 rounded-xl hover-orange transition-colors">
              Submit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-zinc-800 pb-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-zinc-700 p-1">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">NewsPrk</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="space-y-3">
              <p className="font-bold text-sm">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-orange-accent transition-colors"
                  href="#"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-orange-accent transition-colors"
                  href="#"
                >
                  <FaTwitter size={14} />
                </a>
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-orange-accent transition-colors"
                  href="#"
                >
                  <FaLinkedinIn size={14} />
                </a>
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-orange-accent transition-colors"
                  href="#"
                >
                  <FaYoutube size={14} />
                </a>
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-orange-accent transition-colors"
                  href="#"
                >
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </div>
          {/* Category Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">category</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="/category/business">business</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/about-us#mission">Our Mission</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/about-us#team">Our Team</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/about-us#partners">Our Partners</a>
              </li>
            </ul>
          </div>
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="/contact">Help Center</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/contact#faq">FAQs</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/contact">Technical Support</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* About Us Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">About Us</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="/about-us">Our Story</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/blog">Blogs</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/magazine">News</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/news">Latest News</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Credits */}
        <div className="text-center text-zinc-600 text-xs py-4">
          Copyright © 2024 All Rights Reserved by Newsprk
        </div>
      </div>
    </footer>
  );
}
