"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useStore } from "@/context/store-context";
import { Star, Eye, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const {
    formatPrice,
    addToCart,
    setQuickViewProduct,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const isWished = isInWishlist(product.id);
  const fallbackImage = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80";
  const [imgSrc, setImgSrc] = React.useState(
    product.image && product.image.trim().length > 10 ? product.image : fallbackImage
  );

  React.useEffect(() => {
    if (product.image && product.image.trim().length > 10) {
      setImgSrc(product.image);
    }
  }, [product.image]);

  return (
    <div className="group relative rounded-2xl border border-border bg-card p-2.5 sm:p-4 flex flex-col justify-between hover:border-amber-400/40 hover:shadow-xl transition-all duration-300">
      {/* Top Image Container */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-secondary/40 border border-border/60">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          unoptimized
          onError={() => setImgSrc(fallbackImage)}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />


        {/* Badges on top left */}
        <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 flex flex-col gap-1 z-10">
          {product.badge && (
            <Badge variant="default" className="text-[9px] sm:text-[10px] font-bold shadow-xs px-1.5 sm:px-2 py-0.5 border border-amber-400/20">
              {product.badge}
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="secondary" className="text-[8px] sm:text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-400/10 border border-amber-400/25 backdrop-blur-xs px-1 sm:px-1.5 py-0.5">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button top right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
            isWished
              ? "bg-rose-500/10 text-rose-500 border border-rose-500/30"
              : "bg-background/70 text-muted-foreground hover:text-foreground hover:bg-background"
          }`}
          title={isWished ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          <Heart className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isWished ? "fill-rose-500" : ""}`} />
        </button>

        {/* Quick View Hover Button (Center Overlay) */}
        <div className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-2 p-4">
          <Button
            onClick={() => setQuickViewProduct(product)}
            variant="secondary"
            size="sm"
            className="rounded-xl text-xs font-semibold shadow-lg backdrop-blur-md bg-card/95 text-foreground hover:bg-card cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 mr-1.5" />
            Quick View Specs
          </Button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="pt-2.5 sm:pt-4 flex flex-col justify-between flex-1 space-y-2 sm:space-y-3">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono uppercase font-bold text-[9px] sm:text-[10px] text-muted-foreground tracking-wider truncate">
              {product.brand}
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400 text-[10px] sm:text-xs font-semibold shrink-0">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
              <span>{product.rating}</span>
              <span className="text-muted-foreground text-[8px] sm:text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-bold text-xs sm:text-sm text-foreground line-clamp-2 leading-snug cursor-pointer hover:text-primary transition-colors"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Key spec highlight */}
          {product.specs?.[0] && (
            <p className="text-[10px] sm:text-[11px] text-muted-foreground font-mono mt-1 line-clamp-1 hidden sm:block">
              {product.specs[0].label}: {product.specs[0].value}
            </p>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="pt-1.5 sm:pt-2 border-t border-border/60 space-y-2">
          <div className="flex flex-wrap items-baseline justify-between gap-1">
            <div className="flex items-baseline gap-1">
              <span className="font-mono font-black text-xs sm:text-base text-foreground whitespace-nowrap">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-mono text-[9px] sm:text-xs text-muted-foreground line-through hidden sm:inline">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock indicator */}
            <span className="text-[9px] sm:text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
              {product.stockStatus === "in-stock"
                ? "In Stock"
                : "Pre-Order"}
            </span>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={() => addToCart(product)}
            className="w-full h-8 sm:h-9 rounded-xl font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
