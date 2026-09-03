"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import { useStore } from "@/context/store-context";
import { ArrowRight, Flame, RefreshCw, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DealBento() {
  const { formatPrice, addToCart, setIsCartOpen } = useStore();

  const fx3 = PRODUCTS.find((p) => p.id === "esa-637" || p.id === "sony-fx3");
  const fujiUsed = PRODUCTS.find((p) => p.id === "fujifilm-x-t5-used");

  const handleAddIndieBundle = () => {
    if (fx3) addToCart(fx3);
    const lens = PRODUCTS.find((p) => p.id === "sony-24-70-gm2");
    if (lens) addToCart(lens);
    const gimbal = PRODUCTS.find((p) => p.id === "dji-rs4-pro");
    if (gimbal) addToCart(gimbal);
    setIsCartOpen(true);
  };

  return (
    <section id="deals" className="w-full py-16 md:py-24 border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="uppercase font-mono text-[10px] tracking-wider mb-2 bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/25">
            Limited Weekly Offers
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Featured Cine Bundles & Trade-In
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Curated filmmaker bundles with guaranteed savings, ready for production on day one.
          </p>
        </div>

        {/* Bento Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Large Featured Indie Kit (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg hover:border-amber-400/30 transition-colors group">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-foreground">
              <Flame className="w-40 h-40" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="text-xs font-bold px-2.5 py-1 flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-black border border-amber-400/40">
                  <Flame className="w-3.5 h-3.5 fill-current" /> BEST VALUE BUNDLE
                </Badge>
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                  Save {formatPrice(550)} Instant Rebate
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                The Indie Filmmaker Pro Master Kit
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
                Everything required to shoot high-end commercial films, music videos, and cinematic weddings: 
                <strong> Sony FX3 Cinema Body</strong> + <strong>Sony 24-70mm f/2.8 GM II Lens</strong> + <strong>DJI RS 4 Pro Gimbal</strong>.
              </p>

              {/* Items Pill */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="bg-secondary/50 border border-border/60 rounded-xl p-2.5 text-xs">
                  <p className="font-bold text-foreground">Sony FX3</p>
                  <p className="text-[10px] text-muted-foreground font-mono">4K 120p Full-Frame</p>
                </div>
                <div className="bg-secondary/50 border border-border/60 rounded-xl p-2.5 text-xs">
                  <p className="font-bold text-foreground">24-70mm GM II</p>
                  <p className="text-[10px] text-muted-foreground font-mono">f/2.8 G Master</p>
                </div>
                <div className="bg-secondary/50 border border-border/60 rounded-xl p-2.5 text-xs">
                  <p className="font-bold text-foreground">DJI RS 4 Pro</p>
                  <p className="text-[10px] text-muted-foreground font-mono">LiDAR 4.5kg Gimbal</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 mt-6 relative z-10">
              <div>
                <span className="text-[11px] text-muted-foreground font-mono line-through block">
                  {formatPrice(7296)}
                </span>
                <span className="text-2xl sm:text-3xl font-black font-mono text-foreground">
                  {formatPrice(6746)}
                </span>
              </div>

              <Button
                onClick={handleAddIndieBundle}
                size="lg"
                className="rounded-xl font-bold text-xs shadow-md cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                <span>Claim Indie Bundle Deal</span>
              </Button>
            </div>
          </div>

          {/* Right Column (5 Cols: 2 stacked cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: Trade-In Program */}
            <div className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-primary" /> ESA Trade-In Desk
                  </span>
                  <Badge variant="secondary" className="text-[10px] font-mono">
                    Instant Quote
                  </Badge>
                </div>

                <h4 className="text-lg font-bold text-foreground">
                  Trade Your Old DSLR for Modern Mirrorless
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bring your Canon 5D, Sony A7 III or used glass to our Cairo/Zayed flagship store for an instant 90-point sensor inspection and up to 75% trade-in credit toward new cinema gear.
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-4">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  +10% Extra Credit on Sony & Canon
                </span>
                <a
                  href="tel:+20227363456"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Book Evaluation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Certified Pre-Owned Highlight */}
            {fujiUsed && (
              <div className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Badge variant="secondary" className="text-[10px] font-bold text-primary font-mono">
                        Certified Pre-Owned
                      </Badge>
                      <span className="text-[11px] font-mono text-muted-foreground">Grade A+ (1,420 clicks)</span>
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      {fujiUsed.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      Includes 12-Month Official ESA Warranty & Full Box.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg font-mono font-bold text-foreground">
                      {formatPrice(fujiUsed.price)}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground line-through ml-2">
                      {formatPrice(fujiUsed.originalPrice || 1699)}
                    </span>
                  </div>

                  <Button
                    onClick={() => addToCart(fujiUsed)}
                    size="sm"
                    variant="outline"
                    className="rounded-xl text-xs font-semibold"
                  >
                    Add Used Body
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
