"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import { Star, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export function StylesCollage() {
  const { setQuickViewProduct, formatPrice, homepageContent } = useStore();
  const primeLensKit = PRODUCTS.find((p) => p.id === "sony-24-70-gm2") || PRODUCTS[0];

  const collage = homepageContent?.stylesCollage || {
    badge: "AUTHENTIC VISUAL CRAFT",
    title: "THE STYLES YOU WANT. THE GLASS YOU TRUST.",
    description:
      "From high-octane automotive commercials to intimate narrative dramas, explore the lenses and lighting setups trusted by Egypt's top cinematographers and production houses.",
    primaryImage:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85",
    lensName: "Sony FE 24-70mm f/2.8 GM II",
    lensRating: "5.0",
    lensReviews: "215 Reviews",
    lensPrice: 2298,
    lensImage:
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=400&q=80",
    ctaText: "Explore Full Optics Range",
    ctaLink: "/store",
  };

  return (
    <section className="w-full bg-[#FFFFFF] text-[#000000] px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-8 sm:pb-12 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left 7 Columns: Overlapping Imagery */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px]">
          {/* Main Photo */}
          <div className="relative w-4/5 h-72 sm:h-96 overflow-hidden bg-[#F4F4F5] border border-[#E4E4E7] shadow-lg">
            <Image
              src={collage.primaryImage}
              alt="Cinematographer on Set"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Secondary Overlapping Photo */}
          <div className="absolute bottom-0 right-2 sm:right-6 w-3/5 sm:w-1/2 h-56 sm:h-64 overflow-hidden bg-[#F4F4F5] shadow-2xl border-4 border-white">
            <Image
              src={collage.secondaryImage}
              alt="Director at Console"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Floating Lens Badge Card */}
          <div className="absolute top-6 right-0 z-20 flex items-center gap-3 bg-black text-white p-3 border border-[#27272A] max-w-[270px] shadow-2xl">
            <div className="relative w-12 h-12 bg-[#18181B] border border-[#27272A] shrink-0">
              <Image
                src={collage.lensImage}
                alt={collage.lensName}
                fill
                className="object-contain p-1"
              />
            </div>

            <div className="space-y-0.5 min-w-0">
              <h4 className="font-black text-xs uppercase tracking-wide text-white truncate">
                {collage.lensName}
              </h4>
              <div className="flex items-center gap-1 text-[10px] font-mono text-[#A1A1AA]">
                <Star className="w-3 h-3 text-[#FFE600] fill-[#FFE600]" />
                <span>{collage.lensRating}</span>
                <span>({collage.lensReviews})</span>
              </div>
              <div className="flex items-center justify-between gap-2 pt-0.5 font-mono">
                <span className="font-black text-xs text-[#FFE600]">
                  {formatPrice(collage.lensPrice)}
                </span>
                <button
                  onClick={() => setQuickViewProduct(primeLensKit)}
                  className="text-[10px] font-bold text-white underline hover:text-[#FFE600] cursor-pointer uppercase"
                >
                  Inspect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Typography & Call to Action */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FFE600] inline-block" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#71717A]">
              {collage.badge}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-[#000000] uppercase leading-[1.05]">
            {collage.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
            {collage.description}
          </p>

          <div>
            <Link
              href={collage.ctaLink || "/store"}
              className="inline-flex items-center gap-3 bg-black hover:bg-[#FFE600] text-white hover:text-black px-8 py-4 text-xs font-black tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>{collage.ctaText || "EXPLORE ALL OPTICS"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

