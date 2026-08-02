import React from "react";

export default function DualGridSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" data-purpose="news-grids">
      {/* Worlds News */}
      <div data-purpose="worlds-news" className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 pb-2 border-b-2 border-primary-green">
            <h2 className="text-xl font-bold">Worlds News</h2>
          </div>
          <div className="flex space-x-2 text-gray-400">
            <button className="hover:text-black transition-colors">←</button>
            <button className="hover:text-black transition-colors">→</button>
          </div>
        </div>
        <div className="relative flex-1 min-h-[200px] rounded-2xl overflow-hidden mb-6 group cursor-pointer">
          <img
            alt="World News Main"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ko91mT-wSZ9ThhG4QNKxVESvNSnBlEXkfPQuzmSJ_8VbZ_uSPuptpOntY3O_C3u6RdUgMm79EcX2UBhHIXymVwXI4Pbgrs6nMdk_vE52A4c1h4Qw4hIB2bmxfduJWZ7TE5_LRnvGQ2DD-G0_yfbys-9U0NJm4lGPw1fKQ4-fXO_6kKMZmJht1SNS06v5azGP_oAdpbnj-QMBbpVwDJoL74JZdUd23kqkCa2pLRzUfDYmBJO15dM"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
            <span className="bg-primary-green text-white text-[10px] absolute top-4 right-4 px-2 py-0.5 rounded font-bold">
              WAR
            </span>
            <p className="text-white/80 text-[10px] mb-1">
              Astaroth | Yesterday 03:52 pm
            </p>
            <h3 className="text-white font-bold text-lg group-hover:underline">
              Siriya attacked by a long established fact that a reader will be distracted by
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="cursor-pointer group">
            <img
              alt="World grid"
              className="rounded-xl mb-2 w-full h-24 object-cover group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBZZpJp_Hcj5oaxruO_gCZbCu9jAQ0J0y_4s27dhLhV9oiDH3sDAUvBV3tYa4otaFlp1ru4lSMqRTIaoczElJwXUSJJwe3v74eod4OpZduWfuQn7YSfGQl2Wz-f5hFAYRFaZRpdgYLQX924ee_jhB6QMlN5gB50e1LE5BCWqsIe7ArBAJS7meV7ki3XaxmTSqDDBXPbQ35SM7ZUqje-ImjneFx29n3vRdGYBBe5_-E3V1VSqGHflw"
            />
            <p className="text-[10px] text-gray-400">Hantu Raya | 1 April 2025</p>
            <p className="font-bold text-xs mt-1 leading-snug group-hover:text-primary-green transition-colors">
              It is a long established fact that a reader will done
            </p>
          </div>
          <div className="cursor-pointer group">
            <img
              alt="World grid"
              className="rounded-xl mb-2 w-full h-24 object-cover group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAICfj4SOit-PIORAWO09js0GWnY3hHPzPOSrqgLuE389xzkfRDjMGJtJBmua_voOgt2rZE7b8SiM89C4BMF6LfhgImBYrUKRtxHeikwQxqSLM6S3AYBoGAADpUlcBKF-7Rd00zVrAIc7qfEgIg6F453joHJwLfcKadwKB0eGqKCk_lUczqSePmX-BckoS_Xh8En6uQLKO4TMTVb6K1b3t0qsGvTWnoV2HPUfLR23xIV_Nqp_8FWKY"
            />
            <p className="text-[10px] text-gray-400">Astaroth | 1 April 2025</p>
            <p className="font-bold text-xs mt-1 leading-snug group-hover:text-primary-green transition-colors">
              Where Business News Meets Strategic Thinking
            </p>
          </div>
          <div className="cursor-pointer group">
            <img
              alt="World grid"
              className="rounded-xl mb-2 w-full h-24 object-cover group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc77A75zRP91evk9OQA_J1aAe_iBCkvQN2-4WhBdEUGxX1gxPe2q375-R6zlq7N7t9uTbzFowwPjiVmjcSjTc2Ag2ZrHPuJDOozU_rOqILQ6hXwW6Zh88qzj03rfWrupN362ke87soN71RaQO1LsPntzge_-P9uvJwa238QEPyyZSJpvqhGUIBag6zbXyTSLoezQtFDMz2j7zvlAFfMJEaHMvVhPeWeHSsc-QO8kc2ZIwGu3YZhbE"
            />
            <p className="text-[10px] text-gray-400">Jantu Maya | 1 March 2025</p>
            <p className="font-bold text-xs mt-1 leading-snug group-hover:text-primary-green transition-colors">
              In-Depth Business Journalism, Redefined
            </p>
          </div>
          <div className="cursor-pointer group">
            <img
              alt="World grid"
              className="rounded-xl mb-2 w-full h-24 object-cover group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwxRf6tpLYA50L_4fiKKIRdki4TGSjl9uxYg2BzXLF6dM_Lr96qDpqhrQARPiOrTzrLG3UYSOmZgzUidxeoTfzzQgmsci4A62fW63tuIRvFoqeR11K8OVbjft-Uw6tPY2B6gvtNAPeo6etYM6lYPY6O19yo4CEkL38WlV73xSyuy4eiJ_tAS0IvxoIo5wRCc0MVXL5aPEVPmaAiKAAg8cxOETCbtBPpf2qCwLY5qdzMxRyzChSEUw"
            />
            <p className="text-[10px] text-gray-400">Astaroth | 1 April 2025</p>
            <p className="font-bold text-xs mt-1 leading-snug group-hover:text-primary-green transition-colors">
              The Pulse of Global Markets and Enterprise
            </p>
          </div>
        </div>
      </div>
      {/* Technology News */}
      <div data-purpose="technology-news" className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 pb-2 border-b-2 border-primary-green">
            <h2 className="text-xl font-bold">Technology News</h2>
          </div>
          <div className="flex space-x-2 text-gray-400">
            <button className="hover:text-black transition-colors">←</button>
            <button className="hover:text-black transition-colors">→</button>
          </div>
        </div>
        <div className="relative flex-1 min-h-[200px] rounded-2xl overflow-hidden mb-6 group cursor-pointer">
          <img
            alt="Tech Main"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQd3epbeePAAV2hCAfL8EV336_ncEQecx_luKQnKBYOnhv0wMhnL9jeNo8T5u2qVuhqPQRRxIaGedOuNmfHXW72REDsKN5vEcazwXJfg54GaIoe_NZMb7eRQdHZ3jJPvg3c10n5l47oAQuGARYodChjot8DClM0eLF0dogQjAqQreCzcAJPoa4cIAN8ZJIhKIta1doHbWVz8hW6VeDqUF8wkm-rYFweU4xraFOGDfmDYoryC5BNwo"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
            <p className="text-white/80 text-[10px] mb-1">
              Bathin | Yesterday 03:52 pm
            </p>
            <h3 className="text-white font-bold text-lg group-hover:underline">
              It is a long established fact that a reader will be distracted by
            </h3>
          </div>
        </div>
        <div className="space-y-4">
          {/* Tech item list style */}
          <div className="flex space-x-4 items-center group cursor-pointer">
            <img
              alt="tech list"
              className="w-20 h-14 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1tdhzMDAJ-cn7HChtucx7G_4RcAOkm8eZgqgmWZ64Yb1hvBUCpAoq6WP3901GKpng5UQTNRocqeonuDuzNdvBgInWAkpEDy7XqT-z2qrWja78fzndooExyyxf1ndDzAkTR7GT4IgGPJUhFCcA9mQTtOeezXQrOTU0hVtbJoK57wdI9rVsZ6Ab2q4gJ-J0XDNkKbdq9UMdPCR81Ig49zpg6YwfugN8iRJyo3QDYyz21X1GCwLlkvw"
            />
            <div>
              <p className="text-[9px] text-gray-500 uppercase font-bold">
                Computer | 6mo ago
              </p>
              <h4 className="font-bold text-xs group-hover:text-primary-green transition-colors">
                Innovating the Future, One Byte at a Time
              </h4>
            </div>
          </div>
          <div className="flex space-x-4 items-center group cursor-pointer">
            <img
              alt="tech list"
              className="w-20 h-14 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NiHJ1boujB6iDCeA538jQiX3lEuJlQJ4AG0l5fyHnkfupZoXZbKIT-P3PbUnTfEnH1N_ew-qAEBtwA089axwM4lkhOVejklQEDXMkrpCEW33hNju9C0_8bxX5PUuOTRg3ACBg1xljdtfqdi1sZMQDe9AVhstk_uZX3UTcKUGWvbZs7DtgSh9Y3SSn2cYWq68M-86POurhehDgsxC2FkiOWwc31r9WWEntcJz9PuTWK-rgRbel4Q"
            />
            <div>
              <p className="text-[9px] text-gray-500 uppercase font-bold">
                Syber | 8mo ago
              </p>
              <h4 className="font-bold text-xs group-hover:text-primary-green transition-colors">
                Decoding Innovation for the Digital Age
              </h4>
            </div>
          </div>
          <div className="flex space-x-4 items-center group cursor-pointer">
            <img
              alt="tech list"
              className="w-20 h-14 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK-ntxDD0tLEwRwe8X5As-JI_v2bbHPnmDq4JPowBdrXgVvHV3Qon49ZVK4-7IjzkbEhLLoFLzF0HWnFZWLSx3zhqFS_wCIiLbbTqT5NstkZ6yE8PKd6cPvYFcZ6w9oDCoR7ItVd871lXdtrljpL3J2_7j8XcgnOwGTfYMZwUUJke9-zOe4i0kAe9ypDx0QXl5PxFpef2MMZlLpkQz81d-5tuum67fpFd5mAy3r0DJUuSYVLUaOOA"
            />
            <div>
              <p className="text-[9px] text-gray-500 uppercase font-bold">
                Media | 9mo ago
              </p>
              <h4 className="font-bold text-xs group-hover:text-primary-green transition-colors">
                Your Window to the World of Tomorrow
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

