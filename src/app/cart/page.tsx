"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import { NavinaHeader } from "@/components/navina/navina-header";
import { Footer } from "@/components/footer/footer";
import {
  ArrowLeft,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  ArrowRight,
  Truck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    formatPrice,
    cartTotalUSD,
    cartItemCount,
    shippingSettings,
    calculateShippingFee,
  } = useStore();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const hasFreeShipping = shippingSettings.enableFreeShipping;
  const freeThreshold = shippingSettings.freeShippingThresholdUSD;
  const progressPercent = hasFreeShipping
    ? Math.min(100, (cartTotalUSD / freeThreshold) * 100)
    : 0;
  const remainingForFreeShipping = hasFreeShipping
    ? Math.max(0, freeThreshold - cartTotalUSD)
    : 0;
  const isFreeUnlocked = hasFreeShipping && cartTotalUSD >= freeThreshold;

  const estimatedShippingCost = calculateShippingFee(cartTotalUSD);
  const discountAmount = promoApplied ? cartTotalUSD * 0.1 : 0;
  const finalTotalUSD = Math.max(0, cartTotalUSD - discountAmount + estimatedShippingCost);


  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    if (
      promoCode.trim().toUpperCase() === "ESAFILM10" ||
      promoCode.trim().toUpperCase() === "CINE10"
    ) {
      setPromoApplied(true);
      toast.success("10% Creator Discount Applied!");
    } else {
      toast.error("Invalid discount code. Try 'CINE10'");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-[#FACC15]">
      <NavinaHeader />

      <section className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        {/* Top Cart Title Bar (ZAD Style) */}
        <div className="flex items-end justify-between border-b border-[#E5E5E5] pb-6 mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#0A0A0A] uppercase leading-none">
              YOUR CART
            </h1>
            <p className="text-xs font-mono text-[#737373] tracking-wider uppercase mt-2">
              {cartItemCount} {cartItemCount === 1 ? "Item" : "Items"}
            </p>
          </div>

          <Link
            href="/store"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#737373] hover:text-[#0A0A0A] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#FACC15]" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          /* ─── Empty Cart State (1:1 Minimalist Luxury) ─── */
          <div className="flex flex-col items-center justify-center py-24 sm:py-32 space-y-6 text-center">
            <div className="w-20 h-20 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#A3A3A3]">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-black uppercase tracking-tight text-[#0A0A0A]">
                Your cart is empty
              </h2>
              <p className="text-xs text-[#737373] max-w-xs font-mono">
                Explore our flagship cameras, master primes, and studio gear.
              </p>
            </div>
            <Link href="/store">
              <button className="bg-[#0A0A0A] hover:bg-[#262626] text-white px-8 py-4 text-xs font-black tracking-widest uppercase transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                BROWSE COLLECTION
              </button>
            </Link>
          </div>
        ) : (
          /* ─── Cart Items & Order Summary ─── */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Cart Items List */}
            <div className="lg:col-span-7 divide-y divide-[#E5E5E5]">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="py-6 first:pt-0 flex gap-5 sm:gap-6 group"
                >
                  {/* Product Square Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-[#FAFAFA] border border-[#E5E5E5] shrink-0 overflow-hidden flex items-center justify-center p-2">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0A0A0A] leading-snug line-clamp-2">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#A3A3A3] hover:text-red-600 transition-colors shrink-0 p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#737373] font-mono mt-1">
                        {item.product.brand}
                        {item.selectedMount ? ` • ${item.selectedMount}` : ""}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Clean Minimalist Stepper */}
                      <div className="flex items-center border border-[#0A0A0A] text-[#0A0A0A] bg-white">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-2.5 py-1 hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
                          title="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-black px-3 min-w-[32px] text-center border-x border-[#0A0A0A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-2.5 py-1 hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
                          title="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right">
                        <p className="text-sm font-black font-mono text-[#0A0A0A]">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-[10px] text-[#737373] font-mono">
                            {formatPrice(item.product.price)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#E5E5E5] p-6 sm:p-8 space-y-6 sticky top-24">
              <h2 className="text-xs font-mono font-black uppercase tracking-widest text-[#0A0A0A] border-b border-[#E5E5E5] pb-3">
                SUMMARY
              </h2>

              {/* Free Shipping Progress Indicator */}
              {hasFreeShipping && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 font-bold text-[#0A0A0A]">
                      <Truck className="w-3.5 h-3.5 text-[#FACC15]" />
                      {isFreeUnlocked ? (
                        <span className="text-emerald-600 font-bold">
                          ✓ FREE VIP Express Shipping Unlocked!
                        </span>
                      ) : (
                        <span>
                          Add <strong>{formatPrice(remainingForFreeShipping)}</strong> for Free Express
                        </span>
                      )}
                    </span>
                    <span className="text-[#737373] text-[10px]">
                      {Math.round(progressPercent)}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-[#E5E5E5] overflow-hidden">
                    <div
                      className="h-full bg-[#0A0A0A] transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Promo Coupon Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Coupon code (e.g. CINE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={promoApplied}
                  className="flex-1 px-4 py-2.5 text-xs border border-[#E5E5E5] bg-white focus:outline-hidden focus:border-[#0A0A0A] uppercase placeholder:normal-case font-mono"
                />
                <button
                  type="submit"
                  disabled={promoApplied || !promoCode.trim()}
                  className="px-4 py-2.5 text-xs font-black uppercase tracking-wider bg-white border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer disabled:opacity-40"
                >
                  {promoApplied ? "Applied ✓" : "Apply"}
                </button>
              </form>

              {/* Breakdown */}
              <div className="space-y-3 text-xs border-t border-[#E5E5E5] pt-4 font-mono">
                <div className="flex justify-between text-[#737373]">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#0A0A0A]">{formatPrice(cartTotalUSD)}</span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#FACC15]" /> Promo Discount (10%)
                    </span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#737373]">
                  <span>Warranty (2 Years)</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>

                <div className="flex justify-between text-[#737373]">
                  <span>Shipping</span>
                  <span>
                    {isFreeUnlocked || estimatedShippingCost === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE Express</span>
                    ) : (
                      <span className="font-bold text-[#0A0A0A]">{formatPrice(estimatedShippingCost)}</span>
                    )}
                  </span>
                </div>

                <div className="border-t border-[#0A0A0A] pt-4 flex justify-between items-baseline font-sans">
                  <span className="text-sm font-black uppercase text-[#0A0A0A]">Total Amount</span>
                  <span className="font-mono font-black text-xl text-[#0A0A0A]">
                    {formatPrice(finalTotalUSD)}
                  </span>
                </div>
              </div>


              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#737373] bg-white border border-[#E5E5E5] py-3 px-4">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                <span>100% Genuine Authorized Gear • 14-Day Guarantee</span>
              </div>

              {/* Primary Action Button */}
              <Link href="/checkout" className="block w-full">
                <button className="w-full bg-[#0A0A0A] hover:bg-[#262626] text-white font-black text-xs sm:text-sm py-4 uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.01] cursor-pointer shadow-md">
                  <span>PROCEED TO PRO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 text-[#FACC15]" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
