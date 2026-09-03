"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

export function BestSellersArched() {
  const { setQuickViewProduct, formatPrice, homepageContent, products } = useStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const bestSellers = homepageContent?.bestSellers || {
    badge: "FLAGSHIP BENCHMARK",
    title: "ESA EDITIONS & CINEMA GEAR",
    subtitle: "Authorized flagship bodies, master prime sets, and high-power studio lighting in Egypt.",
  };

  const pool = products && products.length > 0 ? products : PRODUCTS;

  const flagshipEditions: Product[] = [
    pool.find((p) => p.id === "esa-637" || p.id === "sony-fx3") || pool[0],
    pool.find((p) => p.id === "esa-5745") || pool[1],
    pool.find((p) => p.id === "esa-5735") || pool[2],
    pool.find((p) => p.id === "esa-5729") || pool[3],
    pool.find((p) => p.id === "icam-62091") || pool[4],
    pool.find((p) => p.id === "icam-48665") || pool[5],
    pool.find((p) => p.id === "icam-55125") || pool[6],
    pool.find((p) => p.id === "icam-11631") || pool[7],
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] text-[#000000] px-6 sm:px-10 lg:px-12 py-16 sm:py-24 select-none border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b-2 border-[#000000] pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFE600] inline-block" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#71717A]">
                {bestSellers.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-sans uppercase tracking-tight text-[#000000]">
              {bestSellers.title}
            </h2>
          </div>


          <div className="flex items-center gap-4">
            {/* Scroll Navigation Chevrons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleScroll("left")}
                className="w-10 h-10 border border-[#000000] flex items-center justify-center text-black hover:bg-[#FFE600] transition-colors cursor-pointer"
                title="Scroll Left"
                aria-label="Previous Products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-10 h-10 border border-[#000000] flex items-center justify-center text-black hover:bg-[#FFE600] transition-colors cursor-pointer"
                title="Scroll Right"
                aria-label="Next Products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/store"
              className="text-xs font-black tracking-widest uppercase text-black hover:text-[#B45309] transition-colors hidden sm:flex items-center gap-1.5 pl-3 border-l border-[#E4E4E7]"
            >
              <span>View All Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#FFE600]" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-3 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3"
        >
          {flagshipEditions.map((product) => (
            <div
              key={product.id}
              className="w-[calc(50vw-24px)] min-w-[155px] sm:w-[280px] md:w-[320px] shrink-0 snap-start flex flex-col justify-between space-y-3 sm:space-y-4 group cursor-pointer border border-[#E4E4E7] hover:border-[#000000] hover:shadow-xl p-3 sm:p-5 transition-all duration-300 bg-white"
              onClick={() => setQuickViewProduct(product)}
            >
              {/* Product Image Stage */}
              <div className="relative w-full aspect-square bg-[#FAFAFA] flex items-center justify-center p-4 overflow-hidden border border-[#F4F4F5]">
                {product.badge && (
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-mono font-black uppercase tracking-wider bg-[#FFE600] text-black px-2 py-0.5 shadow-2xs">
                    {product.badge}
                  </span>
                )}
                <Image
                  src={product.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"}
                  alt={product.name}
                  fill
                  unoptimized
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                  <span className="uppercase font-bold text-black">{product.brand}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#FFE600] fill-[#FFE600]" />
                    <span className="font-bold text-black">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-black text-xs uppercase tracking-wide text-black line-clamp-2 leading-snug">
                  {product.name}
                </h3>

                <p className="font-black text-base font-mono text-black">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setQuickViewProduct(product);
                }}
                className="w-full py-3.5 px-4 bg-black text-white hover:bg-[#FFE600] hover:text-black transition-all text-xs font-black tracking-widest uppercase text-center cursor-pointer shadow-xs"
              >
                CHOOSE OPTIONS
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
