"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useStore } from "@/context/store-context";
import { DEFAULT_HOMEPAGE_CONTENT } from "@/data/homepage-content";

const SLIDE_DURATION = 7000;

export function HeroShowcase() {
  const { homepageContent, products } = useStore();
  const slides = homepageContent?.hero?.slides?.length
    ? homepageContent.hero.slides
    : DEFAULT_HOMEPAGE_CONTENT.hero.slides;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const safeIndex = currentSlideIndex >= slides.length ? 0 : currentSlideIndex;
  const slide = slides[safeIndex] || DEFAULT_HOMEPAGE_CONTENT.hero.slides[0];
  const slideLabel = slide.badge || slide.headline || `Featured offer ${safeIndex + 1}`;
  const selectedProduct = products.find((product) => product.id === slide.productId);
  const slideHref = selectedProduct ? `/store/${selectedProduct.id}` : slide.primaryCtaLink || "/store";

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const interval = window.setInterval(() => {
      setCurrentSlideIndex((index) => (index + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, [slides.length, isPaused]);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1500px] px-3 py-3 sm:px-6 sm:py-5 lg:px-8">
        <div
          className="relative mx-auto isolate aspect-[2/1] w-full max-w-[1420px] overflow-hidden rounded-md bg-[#F1F1EE] sm:aspect-[2.5/1] sm:rounded-lg lg:aspect-[2.84/1]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured offers"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id || safeIndex}
              initial={{ opacity: 0, x: 28, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.99 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {slide.mobileImage ? (
                <Image
                  src={slide.mobileImage}
                  alt={slideLabel}
                  fill
                  priority={safeIndex === 0}
                  unoptimized
                  sizes="100vw"
                  onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
                  className="object-cover sm:hidden"
                />
              ) : (
                <Image
                  src={slide.image}
                  alt={slideLabel}
                  fill
                  priority={safeIndex === 0}
                  unoptimized
                  sizes="100vw"
                  onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
                  className="bg-white object-contain sm:hidden"
                />
              )}
              <Image
                src={slide.image}
                alt={slideLabel}
                fill
                priority={safeIndex === 0}
                unoptimized
                sizes="(max-width: 640px) 100vw, 1200px"
                onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
                className="hidden scale-[1.30] object-cover sm:block"
              />
            </motion.div>
          </AnimatePresence>

          <Link
            href={slideHref}
            aria-label={`View ${selectedProduct?.name || slideLabel}`}
            className="absolute inset-0 z-10 cursor-pointer"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />

          <Link
            href={slideHref}
            aria-label={`${slide.primaryCtaText || "Shop now"}: ${selectedProduct?.name || slideLabel}`}
            className="absolute bottom-3 left-3 z-20 inline-flex min-h-9 items-center gap-2 bg-[#FFE600] px-3.5 py-2 text-[11px] font-black text-black shadow-sm transition-colors hover:bg-white sm:bottom-5 sm:left-5 sm:min-h-11 sm:px-5 sm:text-sm"
          >
            {slide.primaryCtaText || "Shop now"}
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>

          {slides.length > 1 && (
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-0.5 sm:bottom-5 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:gap-1.5" aria-label="Choose featured offer">
              {slides.map((item, index) => (
                <button
                  key={item.id || index}
                  type="button"
                  onClick={() => setCurrentSlideIndex(index)}
                  aria-label={`Show offer ${index + 1}`}
                  aria-current={safeIndex === index ? "true" : undefined}
                  className="flex h-8 w-6 items-center justify-center sm:w-7"
                >
                  <span className={`h-2.5 w-2.5 rounded-full transition-colors sm:h-3 sm:w-3 ${safeIndex === index ? "bg-[#FFE600]" : "bg-white/70 hover:bg-white"}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}