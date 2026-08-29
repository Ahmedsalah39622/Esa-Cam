"use client";

import { NavinaHeader } from "@/components/navina/navina-header";
import { HeroShowcase } from "@/components/navina/hero-showcase";
import { BrandMarquee } from "@/components/brands/brand-marquee";
import { BestSellersArched } from "@/components/navina/best-sellers-arched";
import { StudioStage } from "@/components/navina/studio-stage";
import { StylesCollage } from "@/components/navina/styles-collage";
import { EditorialBanner } from "@/components/navina/editorial-banner";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#000000] selection:bg-[#FFE600] selection:text-[#000000]">
      {/* Top Header matching mockup */}
      <NavinaHeader />

      {/* Hero Showcase with Left Menu, Asymmetric Stage & 2 Action CTAs */}
      <HeroShowcase />

      {/* Authorized Brands Slow Infinite Marquee */}
      <BrandMarquee />

      {/* ESA EDITIONS • Flagship Cinema Horizontal Swipeable Carousel (Placed directly between Brand Marquee and Redefine) */}
      <BestSellersArched />

      {/* "Redefine your vision" Studio Stage with Floating Interactive Pin Card */}
      <StudioStage />

      {/* "The styles you want" Organic Filmmaker Collage with Circular Lens Badge */}
      <StylesCollage />

      {/* Editorial Story Banner */}
      <EditorialBanner />

      {/* Cowboy Minimalist Dark Footer with Camera Silhouette */}
      <Footer />
    </main>
  );
}
