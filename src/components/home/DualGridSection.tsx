import React from "react";
import Link from "next/link";

export default function DualGridSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" data-purpose="news-grids">
      
      {/* Worlds News */}
      <div data-purpose="worlds-news" className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 pb-3 border-b-2 border-primary-green">
            <h2 className="text-2xl font-bold font-display">Worlds News</h2>
          </div>
          <Link href="/category/world">
            <span className="text-primary-green text-xs font-bold uppercase cursor-pointer hover:underline">
              View All
            </span>
          </Link>
        </div>

        {/* Featured News Card */}
        <Link href="/news/world-1" className="group cursor-pointer mb-8">
          <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
            <img
              alt="World News Main"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ko91mT-wSZ9ThhG4QNKxVESvNSnBlEXkfPQuzmSJ_8VbZ_uSPuptpOntY3O_C3u6RdUgMm79EcX2UBhHIXymVwXI4Pbgrs6nMdk_vE52A4c1h4Qw4hIB2bmxfduJWZ7TE5_LRnvGQ2DD-G0_yfbys-9U0NJm4lGPw1fKQ4-fXO_6kKMZmJht1SNS06v5azGP_oAdpbnj-QMBbpVwDJoL74JZdUd23kqkCa2pLRzUfDYmBJO15dM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-primary-green text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm mb-3 inline-block">
                Politics
              </span>
              <h3 className="text-white font-bold text-2xl group-hover:text-primary-light transition-colors leading-snug">
                Siriya attacked by a long established fact that a reader will be distracted by
              </h3>
              <p className="text-white/70 text-xs mt-3 flex items-center space-x-2">
                <span>Astaroth</span>
                <span>&bull;</span>
                <span>Yesterday</span>
              </p>
            </div>
          </div>
        </Link>

        {/* List Items */}
        <div className="flex flex-col space-y-6 flex-1 justify-between">
          <Link href="/news/world-2" className="flex space-x-6 items-center group cursor-pointer bg-gray-50 rounded-xl p-3 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
              <img
                alt="World grid"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBZZpJp_Hcj5oaxruO_gCZbCu9jAQ0J0y_4s27dhLhV9oiDH3sDAUvBV3tYa4otaFlp1ru4lSMqRTIaoczElJwXUSJJwe3v74eod4OpZduWfuQn7YSfGQl2Wz-f5hFAYRFaZRpdgYLQX924ee_jhB6QMlN5gB50e1LE5BCWqsIe7ArBAJS7meV7ki3XaxmTSqDDBXPbQ35SM7ZUqje-ImjneFx29n3vRdGYBBe5_-E3V1VSqGHflw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                Global Markets &bull; 1 April 2025
              </p>
              <h4 className="font-bold text-base leading-snug group-hover:text-primary-green transition-colors text-gray-900 line-clamp-2">
                It is a long established fact that a reader will be done
              </h4>
            </div>
          </Link>

          <Link href="/news/world-3" className="flex space-x-6 items-center group cursor-pointer bg-gray-50 rounded-xl p-3 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
              <img
                alt="World grid"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAICfj4SOit-PIORAWO09js0GWnY3hHPzPOSrqgLuE389xzkfRDjMGJtJBmua_voOgt2rZE7b8SiM89C4BMF6LfhgImBYrUKRtxHeikwQxqSLM6S3AYBoGAADpUlcBKF-7Rd00zVrAIc7qfEgIg6F453joHJwLfcKadwKB0eGqKCk_lUczqSePmX-BckoS_Xh8En6uQLKO4TMTVb6K1b3t0qsGvTWnoV2HPUfLR23xIV_Nqp_8FWKY"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                Economics &bull; 1 April 2025
              </p>
              <h4 className="font-bold text-base leading-snug group-hover:text-primary-green transition-colors text-gray-900 line-clamp-2">
                Where Business News Meets Strategic Thinking
              </h4>
            </div>
          </Link>

          <Link href="/news/world-4" className="flex space-x-6 items-center group cursor-pointer bg-gray-50 rounded-xl p-3 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
              <img
                alt="World grid"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc77A75zRP91evk9OQA_J1aAe_iBCkvQN2-4WhBdEUGxX1gxPe2q375-R6zlq7N7t9uTbzFowwPjiVmjcSjTc2Ag2ZrHPuJDOozU_rOqILQ6hXwW6Zh88qzj03rfWrupN362ke87soN71RaQO1LsPntzge_-P9uvJwa238QEPyyZSJpvqhGUIBag6zbXyTSLoezQtFDMz2j7zvlAFfMJEaHMvVhPeWeHSsc-QO8kc2ZIwGu3YZhbE"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                Policy &bull; 1 March 2025
              </p>
              <h4 className="font-bold text-base leading-snug group-hover:text-primary-green transition-colors text-gray-900 line-clamp-2">
                In-Depth Business Journalism, Redefined
              </h4>
            </div>
          </Link>
        </div>
      </div>

      {/* Technology News */}
      <div data-purpose="technology-news" className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 pb-3 border-b-2 border-primary-green">
            <h2 className="text-2xl font-bold font-display">Technology News</h2>
          </div>
          <Link href="/category/technology">
            <span className="text-primary-green text-xs font-bold uppercase cursor-pointer hover:underline">
              View All
            </span>
          </Link>
        </div>

        {/* Featured News Card */}
        <Link href="/news/tech-1" className="group cursor-pointer mb-8">
          <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
            <img
              alt="Tech Main"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQd3epbeePAAV2hCAfL8EV336_ncEQecx_luKQnKBYOnhv0wMhnL9jeNo8T5u2qVuhqPQRRxIaGedOuNmfHXW72REDsKN5vEcazwXJfg54GaIoe_NZMb7eRQdHZ3jJPvg3c10n5l47oAQuGARYodChjot8DClM0eLF0dogQjAqQreCzcAJPoa4cIAN8ZJIhKIta1doHbWVz8hW6VeDqUF8wkm-rYFweU4xraFOGDfmDYoryC5BNwo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-primary-green text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm mb-3 inline-block">
                Innovation
              </span>
              <h3 className="text-white font-bold text-2xl group-hover:text-primary-light transition-colors leading-snug">
                It is a long established fact that a reader will be distracted by
              </h3>
              <p className="text-white/70 text-xs mt-3 flex items-center space-x-2">
                <span>Bathin</span>
                <span>&bull;</span>
                <span>Yesterday</span>
              </p>
            </div>
          </div>
        </Link>

        {/* List Items */}
        <div className="flex flex-col space-y-6 flex-1 justify-between">
          <Link href="/news/tech-2" className="flex space-x-6 items-center group cursor-pointer bg-gray-50 rounded-xl p-3 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
              <img
                alt="tech list"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1tdhzMDAJ-cn7HChtucx7G_4RcAOkm8eZgqgmWZ64Yb1hvBUCpAoq6WP3901GKpng5UQTNRocqeonuDuzNdvBgInWAkpEDy7XqT-z2qrWja78fzndooExyyxf1ndDzAkTR7GT4IgGPJUhFCcA9mQTtOeezXQrOTU0hVtbJoK57wdI9rVsZ6Ab2q4gJ-J0XDNkKbdq9UMdPCR81Ig49zpg6YwfugN8iRJyo3QDYyz21X1GCwLlkvw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                Hardware &bull; 6mo ago
              </p>
              <h4 className="font-bold text-base leading-snug group-hover:text-primary-green transition-colors text-gray-900 line-clamp-2">
                Innovating the Future, One Byte at a Time
              </h4>
            </div>
          </Link>

          <Link href="/news/tech-3" className="flex space-x-6 items-center group cursor-pointer bg-gray-50 rounded-xl p-3 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
              <img
                alt="tech list"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NiHJ1boujB6iDCeA538jQiX3lEuJlQJ4AG0l5fyHnkfupZoXZbKIT-P3PbUnTfEnH1N_ew-qAEBtwA089axwM4lkhOVejklQEDXMkrpCEW33hNju9C0_8bxX5PUuOTRg3ACBg1xljdtfqdi1sZMQDe9AVhstk_uZX3UTcKUGWvbZs7DtgSh9Y3SSn2cYWq68M-86POurhehDgsxC2FkiOWwc31r9WWEntcJz9PuTWK-rgRbel4Q"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                Cybersecurity &bull; 8mo ago
              </p>
              <h4 className="font-bold text-base leading-snug group-hover:text-primary-green transition-colors text-gray-900 line-clamp-2">
                Decoding Innovation for the Digital Age
              </h4>
            </div>
          </Link>

          <Link href="/news/tech-4" className="flex space-x-6 items-center group cursor-pointer bg-gray-50 rounded-xl p-3 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
              <img
                alt="tech list"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK-ntxDD0tLEwRwe8X5As-JI_v2bbHPnmDq4JPowBdrXgVvHV3Qon49ZVK4-7IjzkbEhLLoFLzF0HWnFZWLSx3zhqFS_wCIiLbbTqT5NstkZ6yE8PKd6cPvYFcZ6w9oDCoR7ItVd871lXdtrljpL3J2_7j8XcgnOwGTfYMZwUUJke9-zOe4i0kAe9ypDx0QXl5PxFpef2MMZlLpkQz81d-5tuum67fpFd5mAy3r0DJUuSYVLUaOOA"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                Media &bull; 9mo ago
              </p>
              <h4 className="font-bold text-base leading-snug group-hover:text-primary-green transition-colors text-gray-900 line-clamp-2">
                Your Window to the World of Tomorrow
              </h4>
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}
