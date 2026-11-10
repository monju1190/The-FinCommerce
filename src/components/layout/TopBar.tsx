import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="bg-black text-white py-2 px-4 md:px-12 text-xs flex justify-between items-center"
      data-purpose="top-utility-bar"
    >
      <div className="flex items-center space-x-4">
        <span>Mon, April 07th, 2025</span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex space-x-3">
          <a className="hover:text-gray-400" href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a className="hover:text-gray-400" href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a className="hover:text-gray-400" href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a className="hover:text-gray-400" href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="text-xs font-mono font-bold">EN</span>
        </div>
      </div>
    </div>
  );
}

