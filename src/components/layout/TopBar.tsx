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
          <img
            alt="US Flag"
            className="w-4 h-3"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs-fbqk8Xssm4LU_D61PKurpoexE7_fqJ8E3Ox50th-JDRenH2NCHgz_f8KV_2H5385BbL7RAfzzoM6eq7V6Xeg4hxjNCCXyJZj20ETeSdzZjvo-9m9RcxdwVTeCcN1ie0JflPNBGBuMJ8TDBXwXnQOw500B1aGAbVa5oDjs6KMlCG3IGUMaeWzBN9A3HE0RnM4i1TcOdhpfMzGDI_OaTMvbvFGXIT3P1lrjHM2gfkqIHcqIzx-Pc"
          />
          <span>Eng</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
