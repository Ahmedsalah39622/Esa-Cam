"use client";

import React, { useState } from "react";
import { useStore } from "@/context/store-context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Star, Check, ShieldCheck, Truck, Package, Heart, Plus, Minus, ShoppingCart } from "lucide-react";

export function QuickViewModal() {
  const router = useRouter();
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "features" | "box">("specs");

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setQuickViewProduct(null);
    router.push("/cart");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative transform overflow-hidden bg-white text-[#0A0A0A] text-left shadow-2xl border border-[#E5E5E5] transition-all w-full max-w-3xl my-8">
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute right-4 top-4 z-10 p-2 text-[#737373] hover:text-[#0A0A0A] hover:bg-[#F5F5F5] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Image & Media Column */}
            <div className="p-6 md:p-8 bg-[#FAFAFA] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E5E5]">
              <div className="relative aspect-square w-full bg-white border border-[#E5E5E5] flex items-center justify-center p-4">
                <Image
                  src={product.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-contain p-4"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-[#0A0A0A] text-white px-2 py-0.5">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Trust highlights */}
              <div className="mt-6 space-y-2 text-xs text-[#737373]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                  <span>2-Year Official Center Warranty &amp; Calibration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>Ships in 24 Hours with Insured Courier</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                  <span>100% Brand New In Factory Sealed Packaging</span>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#737373] font-mono">
                    {product.brand} • {product.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono">
                    <Star className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-[#737373]">({product.reviewsCount})</span>
                  </div>
                </div>

                <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                  {product.name}
                </h2>

                <p className="text-xs text-[#525252] mt-2 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-3 font-mono">
                  <span className="text-2xl font-black text-[#0A0A0A]">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#737373] line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Stock status indicator */}
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium text-emerald-600">
                    {product.stockStatus === "in-stock"
                      ? `In Stock (${product.stockCount || 5} units available)`
                      : product.stockStatus === "low-stock"
                      ? "Low Stock - Only 2 Left"
                      : "Available on Pre-Order"}
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="mt-6 border-b border-[#E5E5E5] flex gap-4 text-xs font-mono uppercase">
                  <button
                    onClick={() => setActiveTab("specs")}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === "specs"
                        ? "border-[#0A0A0A] text-[#0A0A0A] font-bold"
                        : "border-transparent text-[#737373] hover:text-[#0A0A0A]"
                    }`}
                  >
                    Tech Specs
                  </button>
                  <button
                    onClick={() => setActiveTab("features")}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === "features"
                        ? "border-[#0A0A0A] text-[#0A0A0A] font-bold"
                        : "border-transparent text-[#737373] hover:text-[#0A0A0A]"
                    }`}
                  >
                    Features
                  </button>
                  <button
                    onClick={() => setActiveTab("box")}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === "box"
                        ? "border-[#0A0A0A] text-[#0A0A0A] font-bold"
                        : "border-transparent text-[#737373] hover:text-[#0A0A0A]"
                    }`}
                  >
                    In The Box
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="mt-3 min-h-[100px] max-h-[140px] overflow-y-auto text-xs pr-1">
                  {activeTab === "specs" && (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col font-mono">
                          <span className="text-[#737373] text-[10px]">{spec.label}</span>
                          <span className="font-bold text-[#0A0A0A]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "features" && (
                    <ul className="space-y-1.5 text-[#525252]">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#0A0A0A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === "box" && (
                    <ul className="space-y-1.5 text-[#525252]">
                      {product.inTheBox.map((boxItem, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5 text-[#737373] shrink-0" />
                          <span>{boxItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#E5E5E5] space-y-2.5">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#0A0A0A] bg-white h-10 px-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 hover:text-[#737373] cursor-pointer"
                      title="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-xs font-black px-3 min-w-[28px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 hover:text-[#737373] cursor-pointer"
                      title="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 h-10 bg-white border border-[#0A0A0A] hover:bg-[#FAFAFA] text-[#0A0A0A] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4 text-[#FACC15]" />
                    <span>Add to Cart</span>
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`h-10 w-10 border border-[#E5E5E5] flex items-center justify-center transition-colors cursor-pointer ${
                      isWished
                        ? "bg-rose-50 text-rose-500 border-rose-200"
                        : "bg-white text-[#737373] hover:text-[#0A0A0A]"
                    }`}
                    title={isWished ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart className={`w-4 h-4 ${isWished ? "fill-rose-500" : ""}`} />
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full h-11 bg-[#0A0A0A] hover:bg-[#262626] text-white text-xs font-black uppercase tracking-widest transition-all duration-200 cursor-pointer"
                >
                  BUY NOW • PRO DISPATCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
