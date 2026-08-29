"use client";

import React from "react";
import { useStore } from "@/context/store-context";

export function BrandMarquee() {
  const { brands } = useStore();
  const activeBrands = brands.filter((b) => b.isActive);

  if (activeBrands.length === 0) return null;

  return (
    <section className="w-full bg-[#FFFFFF] pt-8 sm:pt-10 pb-4 overflow-hidden select-none">
      {/* Infinite Smooth Scrolling Clean Grayscale Logo Marquee */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex w-max animate-marquee-slow items-center gap-12 sm:gap-20 md:gap-24 py-2">
          {[...activeBrands, ...activeBrands, ...activeBrands].map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center justify-center shrink-0 opacity-45 hover:opacity-100 transition-all duration-300 cursor-pointer group"
              title={brand.name}
            >
              {brand.logoImage ? (
                /* Custom Uploaded/URL Image Logo in Grayscale */
                <div className="h-8 sm:h-10 max-w-[140px] flex items-center justify-center">
                  <img
                    src={brand.logoImage}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ) : (
                /* Frameless Clean Monochromatic Brand Mark (Matching Reference 1:1) */
                <div className="flex flex-col items-center justify-center text-center">
                  <span
                    className={`text-lg sm:text-2xl tracking-widest uppercase text-[#5C564E] group-hover:text-[#1A1816] transition-colors duration-300 ${
                      brand.name.toLowerCase().includes("canon")
                        ? "font-serif font-black tracking-normal italic"
                        : brand.name.toLowerCase().includes("sony")
                        ? "font-sans font-black tracking-[0.25em]"
                        : brand.name.toLowerCase().includes("red")
                        ? "font-mono font-black tracking-[0.3em]"
                        : brand.name.toLowerCase().includes("arri")
                        ? "font-sans font-black tracking-[0.2em]"
                        : brand.name.toLowerCase().includes("blackmagic")
                        ? "font-sans font-extrabold tracking-tight"
                        : brand.name.toLowerCase().includes("leica")
                        ? "font-serif font-bold italic tracking-wide"
                        : brand.name.toLowerCase().includes("fujifilm")
                        ? "font-mono font-bold tracking-[0.15em]"
                        : "font-sans font-extrabold tracking-wider"
                    }`}
                  >
                    {brand.logoText || brand.name}
                  </span>
                  {brand.sub && (
                    <span className="text-[9px] font-mono tracking-widest text-[#9A9388] uppercase opacity-70 group-hover:opacity-100 transition-opacity mt-0.5">
                      {brand.sub}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
