"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useStore } from "@/context/store-context";
import {
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { DEFAULT_HOMEPAGE_CONTENT } from "@/data/homepage-content";

const SLIDE_DURATION = 7000; // 7 seconds

export function HeroShowcase() {
  const { formatPrice, homepageContent, products } = useStore();

  const slides = homepageContent?.hero?.slides || DEFAULT_HOMEPAGE_CONTENT.hero.slides;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const safeIndex = currentSlideIndex >= slides.length ? 0 : currentSlideIndex;
  const slide = slides[safeIndex] || slides[0] || DEFAULT_HOMEPAGE_CONTENT.hero.slides[0];

  const allProducts = products && products.length > 0 ? products : PRODUCTS;
  const slideProductId = (slide as { productId?: string })?.productId;

  const currentProduct: Product =
    allProducts.find((p) => p.id === slideProductId) ||
    allProducts.find((p) => slideProductId === "sony-fx3" && p.id === "esa-637") ||
    PRODUCTS.find((p) => p.id === slideProductId) ||
    allProducts.find((p) => p.id === "esa-637") ||
    PRODUCTS.find((p) => p.id === "esa-637") ||
    allProducts[0] ||
    PRODUCTS[0];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
  };

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-[#000000] text-white overflow-hidden select-none border-b border-[#27272A]">
      {/* Background Hero Stage Image with Smooth Motion Fade & Scale */}
      <div className="relative w-full min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={`hero-bg-${slide.image}-${safeIndex}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              duration: 1.0,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority
              className="object-cover object-center brightness-[0.82] contrast-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Soft Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10 pointer-events-none z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-1" />

        {/* Top Nikon Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFE600] via-[#FFE600] to-transparent z-20" />

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left 8 Columns: Animated Hero Typography */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`hero-text-${safeIndex}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
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
                        className="bg-black/60 backdrop-blur-md border border-[#27272A] px-3.5 py-2.5 rounded-xl space-y-0.5"
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
              </motion.div>
            </AnimatePresence>

            {/* Nikon Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href={slide.primaryCtaLink || "/store"}
                className="inline-flex items-center justify-center gap-3 bg-[#FFE600] hover:bg-[#FFD000] text-black px-9 py-4 font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 shadow-lg cursor-pointer rounded-xl"
              >
                <span>{slide.primaryCtaText || "EXPLORE THE SHOP"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={slide.secondaryCtaLink || "/store"}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 font-black text-xs sm:text-sm tracking-widest uppercase transition-all cursor-pointer rounded-xl"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#FFE600]" />
                <span>{slide.secondaryCtaText || "CUSTOM RIG BUILDER"}</span>
              </Link>
            </div>
          </div>

          {/* Right 4 Columns: Animated Interactive Product Spotlight Card */}
          <div className="lg:col-span-4 self-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`spotlight-${currentProduct.id}-${safeIndex}`}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -16 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black/65 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 relative group/card hover:border-[#FFE600]/60 transition-colors duration-300"
              >
                {/* Header Badges */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-1.5 bg-[#FFE600]/15 text-[#FFE600] border border-[#FFE600]/30 px-3 py-1 rounded-full text-[10.5px] font-mono font-bold tracking-wider uppercase">
                    <Camera className="w-3.5 h-3.5 text-[#FFE600]" />
                    <span>FEATURED SETUP</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>IN STOCK</span>
                  </div>
                </div>

                {/* Product Thumbnail with Crisp White Studio Container */}
                <Link
                  href={`/store/${currentProduct.id}`}
                  className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-3 transition-transform duration-500 group-hover/card:scale-[1.02] block cursor-pointer"
                  aria-label={`View ${currentProduct.name}`}
                >
                  <Image
                    src={currentProduct.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"}
                    alt={currentProduct.name}
                    fill
                    unoptimized
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="object-contain p-2"
                  />
                </Link>

                {/* Product Info & Pricing */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <span className="bg-[#FFE600] text-black font-black px-1.5 py-0.5 rounded text-[10px] uppercase">
                      {currentProduct.brand}
                    </span>
                    <span className="text-[#A1A1AA]">•</span>
                    <span className="uppercase text-[10px] text-[#A1A1AA] font-semibold">{currentProduct.category}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-wide text-white leading-snug line-clamp-2">
                    {currentProduct.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-[#A1A1AA] block">Official Price</span>
                    <span className="text-xl font-black font-mono text-[#FFE600]">
                      {formatPrice(currentProduct.price)}
                    </span>
                  </div>

                  <Link
                    href={`/store/${currentProduct.id}`}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FFE600] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all hover:scale-105 shadow-md cursor-pointer"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Slide Navigation Bar with Animated Spring Dots */}
        <div className="absolute bottom-6 left-6 right-6 z-30 max-w-7xl mx-auto flex items-center justify-between">
          {/* Animated Slide Dots / Progress */}
          <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
            {slides.map((s, idx) => {
              const isActive = safeIndex === idx;
              return (
                <button
                  key={s.id || idx}
                  onClick={() => goToSlide(idx)}
                  className="relative p-1 cursor-pointer focus:outline-hidden group"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-500 overflow-hidden relative ${
                      isActive
                        ? "w-10 bg-white/20"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        key={`progress-${idx}-${safeIndex}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: SLIDE_DURATION / 1000,
                          ease: "linear",
                        }}
                        className="h-full bg-[#FFE600] rounded-full"
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Previous / Next Chevrons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#FFE600] text-white hover:text-[#FFE600] flex items-center justify-center transition-all hover:scale-105 cursor-pointer bg-black/40 backdrop-blur-md shadow-lg"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#FFE600] text-white hover:text-[#FFE600] flex items-center justify-center transition-all hover:scale-105 cursor-pointer bg-black/40 backdrop-blur-md shadow-lg"
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
