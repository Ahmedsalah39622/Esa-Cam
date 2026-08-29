"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import {
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Eye,
  Camera,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { DEFAULT_HOMEPAGE_CONTENT } from "@/data/homepage-content";

export function HeroShowcase() {
  const { setQuickViewProduct, formatPrice, homepageContent } = useStore();

  const slides = homepageContent?.hero?.slides || DEFAULT_HOMEPAGE_CONTENT.hero.slides;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const safeIndex = currentSlideIndex >= slides.length ? 0 : currentSlideIndex;
  const slide = slides[safeIndex] || slides[0] || DEFAULT_HOMEPAGE_CONTENT.hero.slides[0];

  const currentProduct: Product =
    PRODUCTS.find((p) => p.id === (slide as { productId?: string }).productId) || PRODUCTS[0];

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-[#000000] text-white overflow-hidden select-none border-b border-[#27272A]">
      {/* Background Hero Stage Image with Nikon-Style Dark Overlay */}
      <div className="relative w-full min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] flex items-center">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.headline}
          fill
          priority
          className="object-cover object-center brightness-[0.38] contrast-110 transition-opacity duration-700"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

        {/* Top Nikon Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFE600] via-[#FFE600] to-transparent z-20" />

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left 8 Columns: Hero Typography */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Yellow Bar & Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-10 h-[3px] bg-[#FFE600]" />
              <span className="text-xs font-mono font-black uppercase tracking-widest text-[#FFE600] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {slide.badge}
              </span>
              <span className="hidden sm:inline text-xs font-mono text-[#71717A]">
                / {slide.tagline}
              </span>
            </div>

            {/* Massive Nikon Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-sans drop-shadow-md">
                {slide.headline}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wide text-[#FFE600] font-sans">
                {slide.subheadline}
              </p>
            </div>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed max-w-xl font-normal">
              {slide.description}
            </p>

            {/* 4 Nikon Signature Spec Chips */}
            {slide.specs && slide.specs.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-2xl">
                {slide.specs.map((spec: { label: string; value: string }, idx: number) => (
                  <div
                    key={idx}
                    className="bg-black/60 backdrop-blur-md border border-[#27272A] px-3.5 py-2.5 rounded-sm space-y-0.5"
                  >
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                      {spec.label}
                    </p>
                    <p className="text-xs font-mono font-bold text-white whitespace-nowrap">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            )}


            {/* Nikon Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href={slide.primaryCtaLink || "/store"}
                className="inline-flex items-center justify-center gap-3 bg-[#FFE600] hover:bg-[#FFD000] text-black px-9 py-4 font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 shadow-lg cursor-pointer"
              >
                <span>{slide.primaryCtaText || "EXPLORE THE SHOP"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={slide.secondaryCtaLink || "/store"}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 font-black text-xs sm:text-sm tracking-widest uppercase transition-all cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#FFE600]" />
                <span>{slide.secondaryCtaText || "CUSTOM RIG BUILDER"}</span>
              </Link>
            </div>
          </div>

          {/* Right 4 Columns: Interactive Product Spotlight Card */}
          <div className="lg:col-span-4 self-center">
            <div className="bg-black/80 backdrop-blur-xl border border-[#27272A] p-6 rounded-sm shadow-2xl space-y-5 relative group/card">
              {/* Card Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#FFE600] text-xs w-12 h-12 -top-6 -right-6" />
              </div>

              <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                  <Camera className="w-4 h-4 text-[#FFE600]" />
                  <span>FEATURED SETUP</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  ● IN STOCK
                </span>
              </div>

              {/* Product Thumbnail */}
              <div className="relative w-full aspect-video bg-[#18181B] rounded-sm overflow-hidden border border-[#27272A] flex items-center justify-center p-3">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  className="object-contain p-2 group-hover/card:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info & Pricing */}
              <div className="space-y-1">
                <h3 className="text-sm font-black uppercase tracking-wide text-white leading-snug line-clamp-2">
                  {currentProduct.name}
                </h3>
                <p className="text-[11px] text-[#A1A1AA] font-mono">
                  {currentProduct.brand} • {currentProduct.category.toUpperCase()}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#27272A]">
                <div>
                  <span className="text-[10px] font-mono text-[#A1A1AA] block">Official Price</span>
                  <span className="text-lg font-black font-mono text-[#FFE600]">
                    {formatPrice(currentProduct.price)}
                  </span>
                </div>

                <button
                  onClick={() => setQuickViewProduct(currentProduct)}
                  className="px-4 py-2 bg-white hover:bg-[#FFE600] hover:text-black text-black font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slide Navigation Bar */}
        <div className="absolute bottom-6 left-6 right-6 z-30 max-w-7xl mx-auto flex items-center justify-between">
          {/* Slide Dots / Progress */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-1.5 transition-all cursor-pointer rounded-full ${
                  currentSlideIndex === idx
                    ? "w-10 bg-[#FFE600]"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Previous / Next Arrow Chevrons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentSlideIndex(
                  (prev) => (prev - 1 + slides.length) % slides.length
                )
              }
              className="w-10 h-10 border border-white/30 hover:border-[#FFE600] text-white hover:text-[#FFE600] flex items-center justify-center transition-colors cursor-pointer bg-black/40 backdrop-blur-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev + 1) % slides.length)
              }
              className="w-10 h-10 border border-white/30 hover:border-[#FFE600] text-white hover:text-[#FFE600] flex items-center justify-center transition-colors cursor-pointer bg-black/40 backdrop-blur-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
