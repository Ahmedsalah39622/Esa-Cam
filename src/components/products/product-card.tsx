"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useStore } from "@/context/store-context";
import { Star, Eye, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductImage } from "@/lib/product-image";

export function ProductCard({ product }: { product: Product }) {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const isWished = isInWishlist(product.id);
  const fallbackImage = getProductImage(undefined, product.category);
  const [imgSrc, setImgSrc] = React.useState(
    getProductImage(product.image, product.category)
  );

  React.useEffect(() => {
    setImgSrc(getProductImage(product.image, product.category));
  }, [product.image, product.category]);

  return (
    <div className="group relative rounded-2xl border border-border bg-card p-2.5 sm:p-4 flex flex-col justify-between hover:border-amber-400/40 hover:shadow-xl transition-all duration-300">
      {/* Top Image Container */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-secondary/40 border border-border/60">
        <Link
          href={`/store/${product.id}`}
          className="absolute inset-0 block cursor-pointer z-0"
          aria-label={`View ${product.name}`}
        >
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            onError={() => setImgSrc(fallbackImage)}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badges on top left */}
        <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.badge && (
            <Badge variant="default" className="text-[9px] sm:text-[10px] font-bold shadow-xs px-1.5 sm:px-2 py-0.5 border border-amber-400/20 pointer-events-auto">
              {product.badge}
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="secondary" className="text-[8px] sm:text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-400/10 border border-amber-400/25 backdrop-blur-xs px-1 sm:px-1.5 py-0.5 pointer-events-auto">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button top right */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer ${
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
        <Link
          href={`/store/${product.id}`}
          className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-2 p-4 z-10"
        >
          <Button
            variant="secondary"
            size="sm"
            className="rounded-xl text-xs font-semibold shadow-lg backdrop-blur-md bg-card/95 text-foreground hover:bg-card cursor-pointer pointer-events-none"
          >
            <Eye className="w-3.5 h-3.5 mr-1.5" />
            View Product
          </Button>
        </Link>
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
          <Link
            href={`/store/${product.id}`}
            className="font-bold text-xs sm:text-sm text-foreground line-clamp-2 leading-snug cursor-pointer hover:text-primary transition-colors block"
            title={product.name}
          >
            {product.name}
          </Link>

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
