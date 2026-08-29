"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";
import { useStore } from "@/context/store-context";
import {
  Camera,
  Layers,
  Sparkles,
  Zap,
  Mic,
  BatteryCharging,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function RigBuilder() {
  const { rigItems, setRigItem, addRigToCart, formatPrice } = useStore();

  const cameraOptions = PRODUCTS.filter((p) => p.category === "cameras");
  const lensOptions = PRODUCTS.filter((p) => p.category === "lenses");
  const gimbalOptions = PRODUCTS.filter((p) => p.category === "gimbals" || p.category === "accessories");
  const audioOptions = PRODUCTS.filter((p) => p.category === "audio");
  const powerOptions = PRODUCTS.filter((p) => p.id === "smallrig-vb99-vmount" || p.id === "sony-cfexpress-160gb" || p.id === "smallrig-fx3-cage-kit");

  const selectedList = Object.values(rigItems).filter(
    (item): item is Product => item !== null
  );

  const rawTotalUSD = selectedList.reduce((sum, item) => sum + item.price, 0);
  const isBundleComplete = selectedList.length >= 3;
  const bundleDiscountUSD = isBundleComplete ? rawTotalUSD * 0.1 : 0;
  const finalRigPriceUSD = Math.max(0, rawTotalUSD - bundleDiscountUSD);

  return (
    <section id="rig-builder" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/25 text-xs font-bold font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Interactive Rig Configurator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Build Your Custom Filmmaking Rig
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-xl">
              Match cinema camera bodies, prime glass, wireless audio, and V-mount power. Build 3+ pieces to unlock a <strong>10% Complete Rig Bundle Discount</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-secondary/80 px-3 py-1.5 rounded-xl border border-border">
              Configured: <strong>{selectedList.length} / 5 Modules</strong>
            </span>
          </div>
        </div>

        {/* Rig Builder Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configurator Slots (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Slot 1: Camera Body */}
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-primary" /> 1. Cinema / Camera Body
                </span>
                {rigItems.camera && (
                  <span className="text-xs font-mono font-bold text-foreground">
                    {formatPrice(rigItems.camera.price)}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {cameraOptions.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRigItem("camera", item)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rigItems.camera?.id === item.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-foreground/30 bg-secondary/20"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs text-foreground line-clamp-1">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{item.resolution || item.brand}</p>
                    </div>
                    <p className="font-mono text-xs font-semibold mt-2 text-foreground">{formatPrice(item.price)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 2: Optics & Glass */}
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-primary" /> 2. Lens & Optics
                </span>
                {rigItems.lens && (
                  <span className="text-xs font-mono font-bold text-foreground">
                    {formatPrice(rigItems.lens.price)}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {lensOptions.slice(0, 2).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRigItem("lens", item)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rigItems.lens?.id === item.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-foreground/30 bg-secondary/20"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs text-foreground line-clamp-1">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{item.mount} Mount</p>
                    </div>
                    <p className="font-mono text-xs font-semibold mt-2 text-foreground">{formatPrice(item.price)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 3: Gimbal / Stabilizer */}
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-primary" /> 3. Gimbal & Rigging
                </span>
                {rigItems.gimbal && (
                  <span className="text-xs font-mono font-bold text-foreground">
                    {formatPrice(rigItems.gimbal.price)}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {gimbalOptions.slice(0, 2).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRigItem("gimbal", item)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rigItems.gimbal?.id === item.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-foreground/30 bg-secondary/20"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs text-foreground line-clamp-1">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{item.badge || item.brand}</p>
                    </div>
                    <p className="font-mono text-xs font-semibold mt-2 text-foreground">{formatPrice(item.price)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 4: Audio System */}
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                  <Mic className="w-4 h-4 text-primary" /> 4. Field & Wireless Audio
                </span>
                {rigItems.audio && (
                  <span className="text-xs font-mono font-bold text-foreground">
                    {formatPrice(rigItems.audio.price)}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {audioOptions.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRigItem("audio", item)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rigItems.audio?.id === item.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-foreground/30 bg-secondary/20"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs text-foreground line-clamp-1">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{item.badge || item.brand}</p>
                    </div>
                    <p className="font-mono text-xs font-semibold mt-2 text-foreground">{formatPrice(item.price)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 5: Power & Media */}
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4 text-primary" /> 5. Power / High-Speed Media
                </span>
                {rigItems.power && (
                  <span className="text-xs font-mono font-bold text-foreground">
                    {formatPrice(rigItems.power.price)}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {powerOptions.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRigItem("power", item)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rigItems.power?.id === item.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-foreground/30 bg-secondary/20"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs text-foreground line-clamp-1">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{item.badge || item.brand}</p>
                    </div>
                    <p className="font-mono text-xs font-semibold mt-2 text-foreground">{formatPrice(item.price)}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary & Checkout Column (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-extrabold text-lg text-foreground">Cine Rig Specification</h3>
                  <p className="text-xs text-muted-foreground font-mono">Custom Pack Summary</p>
                </div>
                {isBundleComplete && (
                  <Badge variant="default" className="text-xs font-semibold px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-black border border-amber-400">
                    10% Bundle Discount Active
                  </Badge>
                )}
              </div>

              {/* Selected Modules List */}
              <div className="space-y-3 divide-y divide-border/60">
                {selectedList.map((item, idx) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-5 h-5 rounded-full bg-secondary font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-foreground truncate">{item.name}</span>
                    </div>
                    <span className="font-mono font-semibold text-foreground shrink-0">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing breakdown */}
              <div className="border-t border-border pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Regular Total</span>
                  <span className="font-mono">{formatPrice(rawTotalUSD)}</span>
                </div>
                {isBundleComplete && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Complete Bundle Savings (10%)
                    </span>
                    <span className="font-mono">-{formatPrice(bundleDiscountUSD)}</span>
                  </div>
                )}
                <div className="flex justify-between text-muted-foreground">
                  <span>2-Year ESA Warranty & Setup Calibration</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">FREE Included</span>
                </div>

                <div className="border-t border-border pt-3 flex justify-between items-baseline font-black text-lg text-foreground">
                  <span>Rig Price</span>
                  <span className="font-mono text-2xl">{formatPrice(finalRigPriceUSD)}</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-secondary/40 rounded-xl p-3 text-[11px] text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>All items are factory tested for mutual mount and power compatibility before shipment.</span>
              </div>

              {/* Add Rig to Cart button */}
              <Button
                onClick={addRigToCart}
                className="w-full h-12 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add Full Cine Rig to Cart</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
