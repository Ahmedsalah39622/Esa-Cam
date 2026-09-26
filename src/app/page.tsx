"use client";

import { NavinaHeader } from "@/components/navina/navina-header";
import { CategoryGrid } from "@/components/categories/category-grid";
import { HeroShowcase } from "@/components/navina/hero-showcase";
import { BrandMarquee } from "@/components/brands/brand-marquee";
import { EditorialBanner } from "@/components/navina/editorial-banner";
import { HomepageProductShelves } from "@/components/products/homepage-product-shelves";
import { Footer } from "@/components/footer/footer";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { MotionConfig } from "motion/react";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#000000] selection:bg-[#FFE600] selection:text-[#000000]">
        <NavinaHeader />
        <ScrollReveal><HeroShowcase /></ScrollReveal>
        <ScrollReveal><BrandMarquee /></ScrollReveal>
        <ScrollReveal><CategoryGrid /></ScrollReveal>
        <ScrollReveal><EditorialBanner /></ScrollReveal>
        <ScrollReveal><HomepageProductShelves /></ScrollReveal>
        <ScrollReveal><Footer /></ScrollReveal>
      </main>
    </MotionConfig>
  );
}
