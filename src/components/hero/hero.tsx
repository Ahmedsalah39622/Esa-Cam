"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HERO_HIGHLIGHTS, PRODUCTS } from "@/data/products";
import { useStore } from "@/context/store-context";
import {
  ShieldCheck,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
  Eye,
  ShoppingCart,
  Wrench,
  Camera,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const { formatPrice, addToCart } = useStore();
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  const currentHero = HERO_HIGHLIGHTS[activeHighlightIndex];
  const matchedProduct = PRODUCTS.find((p) => p.id === currentHero.id);

  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-border bg-radial-[at_50%_0%] from-secondary/40 via-background to-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Badges & Notice */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border text-xs text-foreground">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-semibold">Spring Cine Gear Drop 2026</span>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <span className="text-muted-foreground hidden sm:inline">New Sony FX3 & Canon RF Lenses In Stock</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              100% Authorized Distributor
            </span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-primary" />
              Certified Tech Desk
            </span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Headline & Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Master Every Frame. <br />
              <span className="text-muted-foreground">The Premier Cine & Optics Hub.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Equipping directors, DP&apos;s, commercial studios, and independent creators with the world&apos;s finest cinema cameras, master prime optics, studio lighting, and broadcast audio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button size="lg" className="rounded-xl px-7 font-bold text-sm h-12 shadow-lg cursor-pointer" asChild>
                <a href="#catalog">
                  <span>Explore 2026 Gear Catalog</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-6 font-semibold text-sm h-12 border-border hover:bg-secondary cursor-pointer"
                asChild
              >
                <a href="#rig-builder" className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-primary" />
                  <span>Build Custom Cine Rig</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="rounded-xl px-5 font-semibold text-xs h-12 text-muted-foreground hover:text-foreground cursor-pointer"
                asChild
              >
                <a href="#deals">
                  <span>Weekly Deals (-15%)</span>
                </a>
              </Button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-8 border-t border-border/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl font-black font-mono text-foreground">15K+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Film Crews Equipped</p>
              </div>
              <div>
                <p className="text-2xl font-black font-mono text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-0.5">Official Brand Warranty</p>
              </div>
              <div>
                <p className="text-2xl font-black font-mono text-foreground">24h</p>
                <p className="text-xs text-muted-foreground mt-0.5">Express Cairo Dispatch</p>
              </div>
            </div>
          </div>

          {/* Right Interactive Cinema HUD Showcase (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-border bg-card shadow-2xl p-6 sm:p-7 overflow-hidden">
              {/* Top Selector Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-primary" />
                  Featured Camera Body
                </span>

                {/* Tabs */}
                <div className="flex gap-1 bg-secondary/70 p-1 rounded-xl">
                  {HERO_HIGHLIGHTS.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveHighlightIndex(idx)}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                        activeHighlightIndex === idx
                          ? "bg-background text-foreground shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name.split(" ")[1] || item.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Visual & Overlays */}
              <div className="relative my-4 aspect-4/3 w-full rounded-2xl overflow-hidden bg-secondary/60 border border-border/80 group">
                <Image
                  src={currentHero.image}
                  alt={currentHero.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                <div className="absolute top-3 left-3">
                  <Badge variant="default" className="text-xs font-semibold shadow-md">
                    {currentHero.tag}
                  </Badge>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400/30 text-amber-300 text-xs font-mono font-bold shadow-md">
                  {formatPrice(currentHero.price)}
                </div>
              </div>

              {/* Camera Specifications HUD */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground leading-tight">
                      {currentHero.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                      {currentHero.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {currentHero.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-secondary/40 border border-border/60 rounded-xl px-2.5 py-2 text-[11px] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                      <span className="truncate font-medium text-foreground">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Quick actions for hero item */}
                <div className="pt-3 flex items-center gap-2">
                  {matchedProduct && (
                    <>
                      <Button
                        onClick={() => addToCart(matchedProduct)}
                        className="flex-1 font-semibold text-xs h-10 rounded-xl cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                        <span>Add Body to Cart</span>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="h-10 px-3 rounded-xl text-xs font-medium cursor-pointer"
                        title="View Full Spec Sheet"
                      >
                        <Link href={`/store/${matchedProduct.id}`}>
                          <Eye className="w-3.5 h-3.5 mr-1" />
                          <span>Specs</span>
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
