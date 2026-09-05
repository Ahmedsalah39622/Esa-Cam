"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/hero/nav";
import { Footer } from "@/components/footer/footer";
import { useStore } from "@/context/store-context";
import {
  Star,
  Check,
  ShieldCheck,
  Truck,
  Package,
  Heart,
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  Share2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;

  const {
    products,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const fallbackImage =
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80";

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "features" | "box">("specs");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [productId]);

  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [products, productId]
  );

  const galleryImages = useMemo(() => {
    if (product?.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }
    return [product?.image || fallbackImage];
  }, [product, fallbackImage]);

  const activeImage = galleryImages[selectedImageIndex] || galleryImages[0] || fallbackImage;

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.id !== product.id && p.category === product.category)
      .slice(0, 4);
  }, [products, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Nav />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 py-24">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
            <Package className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-foreground">Product Not Found</h1>
          <p className="text-sm text-muted-foreground max-w-md text-center">
            The product you&apos;re looking for doesn&apos;t exist or may have been removed from our inventory.
          </p>
          <Button
            onClick={() => router.push("/store")}
            className="rounded-xl text-xs font-bold gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Store
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/cart");
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />

      {/* Breadcrumb */}
      <div className="bg-secondary/20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/store" className="hover:text-foreground transition-colors">
              Store
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Product Image & Multi-Angle Gallery */}
          <div className="space-y-4">
            <div className="group relative aspect-square w-full rounded-3xl overflow-hidden bg-white dark:bg-[#121214] border border-border shadow-xs">
              <Image
                key={activeImage}
                src={activeImage}
                alt={`${product.name} - view ${selectedImageIndex + 1}`}
                fill
                unoptimized
                priority
                className="object-contain p-6 sm:p-10 transition-all duration-300"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    variant="default"
                    className="text-[10px] font-bold shadow-sm px-2.5 py-1 border border-amber-400/20"
                  >
                    {product.badge}
                  </Badge>
                </div>
              )}
              {product.originalPrice && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    variant="secondary"
                    className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-400/10 border border-amber-400/25 backdrop-blur-sm px-2 py-1"
                  >
                    SAVE{" "}
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </Badge>
                </div>
              )}

              {/* Prev / Next Arrows for cycling gallery */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImageIndex((prev) =>
                        prev > 0 ? prev - 1 : galleryImages.length - 1
                      );
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md z-10"
                    aria-label="Previous view"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImageIndex((prev) =>
                        prev < galleryImages.length - 1 ? prev + 1 : 0
                      );
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md z-10"
                    aria-label="Next view"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md backdrop-blur-xs z-10">
                    {selectedImageIndex + 1} / {galleryImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Gallery Thumbnails Strip (matching user's screenshot with highlighted border) */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
                {galleryImages.map((img, idx) => {
                  const isSelected = idx === selectedImageIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      onMouseEnter={() => setSelectedImageIndex(idx)}
                      className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl bg-white dark:bg-[#18181b] overflow-hidden shrink-0 transition-all p-1.5 cursor-pointer ${
                        isSelected
                          ? "ring-2 ring-red-500 border-red-500 shadow-md scale-105"
                          : "border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`View angle ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} - thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          const t = e.currentTarget;
                          t.src = fallbackImage;
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Trust Highlights (below image) */}
            <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>2-Year Official Center Warranty &amp; Calibration</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Truck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Ships in 24 Hours with Insured Courier</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Package className="w-4 h-4 text-primary shrink-0" />
                <span>100% Brand New In Factory Sealed Packaging</span>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              {/* Brand & Rating */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                  {product.brand} • {product.category.toUpperCase()}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-foreground">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviewsCount} reviews)
                  </span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 font-mono">
                <span className="text-3xl sm:text-4xl font-black text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    product.stockStatus === "in-stock"
                      ? "bg-emerald-500 animate-pulse"
                      : product.stockStatus === "low-stock"
                      ? "bg-amber-500 animate-pulse"
                      : "bg-blue-500"
                  }`}
                />
                <span
                  className={`font-medium ${
                    product.stockStatus === "in-stock"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : product.stockStatus === "low-stock"
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {product.stockStatus === "in-stock"
                    ? `In Stock (${product.stockCount || 5} units available)`
                    : product.stockStatus === "low-stock"
                    ? "Low Stock — Only 2 Left"
                    : "Available on Pre-Order"}
                </span>
              </div>

              {/* Specs / Features / In The Box Tabs */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Tab Switcher */}
                <div className="border-b border-border flex">
                  {(["specs", "features", "box"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                        activeTab === tab
                          ? "bg-foreground text-background font-bold"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                      }`}
                    >
                      {tab === "specs"
                        ? "Tech Specs"
                        : tab === "features"
                        ? "Features"
                        : "In The Box"}
                    </button>
                  ))}
                </div>

                {/* Tab Contents */}
                <div className="p-5 min-h-[160px]">
                  {activeTab === "specs" && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col font-mono">
                          <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
                            {spec.label}
                          </span>
                          <span className="font-bold text-sm text-foreground">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "features" && (
                    <ul className="space-y-2.5">
                      {product.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === "box" && (
                    <ul className="space-y-2.5">
                      {product.inTheBox.map((boxItem, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Package className="w-4 h-4 text-muted-foreground shrink-0" />
                          <span>{boxItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity Selector */}
                <div className="flex items-center border border-border bg-card rounded-xl h-11 px-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:text-muted-foreground cursor-pointer"
                    title="Decrease"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-sm font-black px-4 min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:text-muted-foreground cursor-pointer"
                    title="Increase"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart */}
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 h-11 rounded-xl font-bold text-sm gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`h-11 w-11 rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
                    isWished
                      ? "bg-rose-500/10 text-rose-500 border-rose-500/30"
                      : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  title={isWished ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    className={`w-4 h-4 ${isWished ? "fill-rose-500" : ""}`}
                  />
                </button>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="h-11 w-11 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer"
                  title="Copy link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Buy Now */}
              <Button
                onClick={handleBuyNow}
                variant="outline"
                className="w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest cursor-pointer border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
              >
                BUY NOW • PRO DISPATCH
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge
                  variant="secondary"
                  className="uppercase font-mono text-[10px] tracking-wider mb-2"
                >
                  Related Gear
                </Badge>
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                  You May Also Like
                </h2>
              </div>
              <Button
                onClick={() => router.push(`/store?cat=${product.category}`)}
                variant="outline"
                size="sm"
                className="rounded-xl text-xs font-semibold cursor-pointer"
              >
                View All
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
