"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Nav } from "@/components/hero/nav";
import { Footer } from "@/components/footer/footer";
import { ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import { useStore } from "@/context/store-context";
import {
  Search,
  Filter,
  ArrowUpDown,
  Grid3X3,
  LayoutList,
  X,
  RotateCcw,
  Package,
  Sparkles,
  ShieldCheck,
  Eye,
  ShoppingCart,
  Heart,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StorePage() {
  const {
    products,
    formatPrice,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMounts, setSelectedMounts] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating" | "reviews">("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = [
    { id: "all", label: "All Equipment", count: products.length },
    { id: "cameras", label: "Cinema & Mirrorless", count: products.filter((p) => p.category === "cameras").length },
    { id: "lenses", label: "Cinema & Prime Lenses", count: products.filter((p) => p.category === "lenses").length },
    { id: "lighting", label: "Studio & Location Lighting", count: products.filter((p) => p.category === "lighting").length },
    { id: "audio", label: "Broadcast & Field Audio", count: products.filter((p) => p.category === "audio").length },
    { id: "gimbals", label: "Gimbals & Rigs", count: products.filter((p) => p.category === "gimbals").length },
    { id: "drones", label: "Cinema Drones", count: products.filter((p) => p.category === "drones").length },
    { id: "accessories", label: "Power, Media & Rigs", count: products.filter((p) => p.category === "accessories").length },
    { id: "pre-owned", label: "Certified Pre-Owned", count: products.filter((p) => p.category === "pre-owned").length },
  ];

  const allBrands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand)));
  }, [products]);

  const allMounts = ["Sony E", "Canon RF", "L-Mount", "Fujifilm X"];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleMount = (mount: string) => {
    setSelectedMounts((prev) =>
      prev.includes(mount) ? prev.filter((m) => m !== mount) : [...prev, mount]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategory("all");
    setSelectedBrands([]);
    setSelectedMounts([]);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setMaxPrice(10000);
    setSearchQuery("");
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category
        if (selectedCategory !== "all" && product.category !== selectedCategory) {
          return false;
        }
        // Brand
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
          return false;
        }
        // Mount
        if (selectedMounts.length > 0) {
          if (!product.mount || !selectedMounts.includes(product.mount)) return false;
        }
        // In Stock
        if (inStockOnly && product.stockStatus !== "in-stock") {
          return false;
        }
        // On Sale
        if (onSaleOnly && !product.originalPrice) {
          return false;
        }
        // Max Price
        if (product.price > maxPrice) {
          return false;
        }
        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchBrand = product.brand.toLowerCase().includes(q);
          const matchCat = product.category.toLowerCase().includes(q);
          const matchDesc = product.shortDescription?.toLowerCase().includes(q);
          if (!matchName && !matchBrand && !matchCat && !matchDesc) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "reviews") return b.reviewsCount - a.reviewsCount;
        if (a.isBestSeller && !b.isBestSeller) return -1;
        if (!a.isBestSeller && b.isBestSeller) return 1;
        return 0;
      });
  }, [
    products,
    selectedCategory,
    selectedBrands,
    selectedMounts,
    inStockOnly,
    onSaleOnly,
    maxPrice,
    searchQuery,
    sortBy,
  ]);


  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    selectedBrands.length +
    selectedMounts.length +
    (inStockOnly ? 1 : 0) +
    (onSaleOnly ? 1 : 0) +
    (maxPrice < 6000 ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />

      {/* Store Header Banner */}
      <div className="bg-secondary/20 border-b border-border py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">Home</Link>
                <span className="text-xs text-muted-foreground">/</span>
                <span className="text-xs font-semibold text-foreground font-mono">Store Catalog</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
                ESA CAM Store & Gear Inventory
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
                Browse our complete collection of cinema cameras, master prime lenses, studio lighting fixtures, field audio systems, and tested pre-owned equipment.
              </p>
            </div>

            {/* Quick Trust Highlights */}
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground bg-card border border-border p-3.5 rounded-2xl shrink-0 shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>100% Authorized Warranties</span>
              </div>
              <span className="opacity-40">•</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Free Sensor Cleanings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Store Layout (Sidebar + Catalog Grid) */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Desktop Sidebar Filters (3.5 Cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24">
            <div className="bg-card border border-border rounded-3xl p-6 shadow-xs space-y-6">
              {/* Filter Header & Reset */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-bold text-sm text-foreground flex items-center gap-2">
                  <Filter className="w-4 h-4 text-primary" /> Filters & Facets
                </span>
                {activeFilterCount > 0 && (
                  <button
                    onClick={resetAllFilters}
                    className="text-xs text-primary font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset ({activeFilterCount})
                  </button>
                )}
              </div>

              {/* Category Radio / List */}
              <div className="space-y-2.5">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Department
                </h4>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as ProductCategory | "all")}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        selectedCategory === cat.id
                          ? "bg-foreground text-background font-bold shadow-xs"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span suppressHydrationWarning className="font-mono text-[11px] opacity-70">
                        ({isMounted ? cat.count : ""})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Checkboxes */}
              <div className="border-t border-border pt-4 space-y-2.5">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Manufacturer / Brand
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {allBrands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center justify-between text-xs text-foreground hover:bg-secondary/40 px-2 py-1.5 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="rounded border-border text-primary focus:ring-primary h-3.5 w-3.5"
                        />
                        <span className="font-medium">{brand}</span>
                      </div>
                      <span suppressHydrationWarning className="font-mono text-[11px] text-muted-foreground">
                        {isMounted ? products.filter((p) => p.brand === brand).length : ""}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Lens Mount Filter */}
              <div className="border-t border-border pt-4 space-y-2.5">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Lens Mount
                </h4>
                <div className="space-y-1.5">
                  {allMounts.map((mount) => (
                    <label
                      key={mount}
                      className="flex items-center gap-2 text-xs text-foreground hover:bg-secondary/40 px-2 py-1.5 rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMounts.includes(mount)}
                        onChange={() => toggleMount(mount)}
                        className="rounded border-border text-primary focus:ring-primary h-3.5 w-3.5"
                      />
                      <span>{mount} Mount</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter Slider */}
              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <h4 className="font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Max Budget
                  </h4>
                  <span className="font-mono font-bold text-foreground">{formatPrice(maxPrice)}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="6000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>{formatPrice(200)}</span>
                  <span>{formatPrice(6000)}</span>
                </div>
              </div>

              {/* Toggles: In-Stock Only & On Sale */}
              <div className="border-t border-border pt-4 space-y-2">
                <label className="flex items-center justify-between text-xs cursor-pointer py-1">
                  <span className="font-medium text-foreground">In-Stock Gear Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                  />
                </label>
                <label className="flex items-center justify-between text-xs cursor-pointer py-1">
                  <span className="font-medium text-foreground">Discounted Offers Only</span>
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={(e) => setOnSaleOnly(e.target.checked)}
                    className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                  />
                </label>
              </div>
            </div>
          </aside>

          {/* Right Product Grid & Toolbar (9 Cols) */}
          <main className="lg:col-span-9 space-y-6">
            {/* Top Toolbar: Search, Sort, View Switcher & Mobile Filter Trigger */}
            <div className="bg-card border border-border rounded-3xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Search in Catalog */}
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search in store (e.g. Sony FX3, 24-70mm, Aputure 600d, DJI RS 4)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-9 py-2 text-xs rounded-2xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary text-foreground"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Mobile Filter Button */}
                <Button
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  variant="outline"
                  size="sm"
                  className="lg:hidden rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
                </Button>

                {/* Sort dropdown */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-muted-foreground flex items-center gap-1 hidden sm:flex">
                    <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "rating" | "reviews")}
                    className="bg-secondary/40 border border-border px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground cursor-pointer focus:outline-hidden"
                    aria-label="Sort products"
                  >
                    <option value="featured" className="bg-card">Featured / Bestsellers</option>
                    <option value="price-asc" className="bg-card">Price: Low to High</option>
                    <option value="price-desc" className="bg-card">Price: High to Low</option>
                    <option value="rating" className="bg-card">Top Customer Rated</option>
                    <option value="reviews" className="bg-card">Most Reviewed</option>
                  </select>

                  {/* View Mode toggle */}
                  <div className="flex items-center border border-border rounded-xl bg-secondary/30 p-0.5 ml-1 hidden sm:flex">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        viewMode === "grid"
                          ? "bg-background text-foreground shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      title="Grid View"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        viewMode === "list"
                          ? "bg-background text-foreground shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      title="List View"
                    >
                      <LayoutList className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filter Chips */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/60">
                  <span className="text-[11px] font-mono text-muted-foreground">Active:</span>
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="text-[11px] gap-1">
                      Dept: {selectedCategory}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
                    </Badge>
                  )}
                  {selectedBrands.map((b) => (
                    <Badge key={b} variant="secondary" className="text-[11px] gap-1">
                      {b}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => toggleBrand(b)} />
                    </Badge>
                  ))}
                  {selectedMounts.map((m) => (
                    <Badge key={m} variant="secondary" className="text-[11px] gap-1">
                      {m} Mount
                      <X className="w-3 h-3 cursor-pointer" onClick={() => toggleMount(m)} />
                    </Badge>
                  ))}
                  {inStockOnly && (
                    <Badge variant="secondary" className="text-[11px] gap-1">
                      In-Stock Only
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setInStockOnly(false)} />
                    </Badge>
                  )}
                  {onSaleOnly && (
                    <Badge variant="secondary" className="text-[11px] gap-1">
                      On Sale
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setOnSaleOnly(false)} />
                    </Badge>
                  )}
                  {searchQuery && (
                    <Badge variant="secondary" className="text-[11px] gap-1">
                      &quot;{searchQuery}&quot;
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                    </Badge>
                  )}
                  <button
                    onClick={resetAllFilters}
                    className="text-[11px] text-primary font-bold hover:underline ml-auto"
                  >
                    Clear All
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Filter Drawer / Collapse */}
            {isMobileFilterOpen && (
              <div className="lg:hidden bg-card border border-border rounded-3xl p-5 shadow-lg space-y-4 animate-in slide-in-from-top-2">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="font-bold text-sm">Filter Options</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Categories */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase text-muted-foreground">Department</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id as ProductCategory | "all")}
                        className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium ${
                          selectedCategory === cat.id ? "bg-foreground text-background font-bold" : "bg-secondary/40 text-muted-foreground"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply / Close */}
                <Button onClick={() => setIsMobileFilterOpen(false)} className="w-full text-xs font-bold rounded-xl mt-2">
                  Apply Filters ({filteredProducts.length} Results)
                </Button>
              </div>
            )}

            {/* Product Grid / List Render */}
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center bg-card rounded-3xl border border-border p-8 flex flex-col items-center justify-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <Package className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">No equipment matched your filters</h3>
                  <p className="text-xs text-muted-foreground mt-1 max-w-md">
                    Try broadening your brand selection, budget slider, or clearing the search query.
                  </p>
                </div>
                <Button onClick={resetAllFilters} variant="outline" className="rounded-xl text-xs font-semibold">
                  Reset All Store Filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* List View Mode with Technical Specs Table */
              <div className="space-y-4">
                {filteredProducts.map((product) => {
                  const isWished = isInWishlist(product.id);
                  return (
                    <div
                      key={product.id}
                      className="group bg-card border border-border rounded-3xl p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between hover:border-foreground/30 hover:shadow-lg transition-all"
                    >
                      <div className="relative w-full sm:w-40 h-40 rounded-2xl overflow-hidden bg-secondary shrink-0 border border-border">
                        <Image
                          src={product.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"}
                          alt={product.name}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform"
                        />


                        {product.badge && (
                          <div className="absolute top-2 left-2">
                            <Badge variant="default" className="text-[10px] font-bold">
                              {product.badge}
                            </Badge>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground">
                            {product.brand} • {product.category.toUpperCase()}
                          </span>
                          <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{product.rating}</span>
                            <span className="text-muted-foreground text-[10px]">({product.reviewsCount})</span>
                          </div>
                        </div>

                        <h3
                          onClick={() => setQuickViewProduct(product)}
                          className="text-base font-bold text-foreground hover:text-primary cursor-pointer leading-snug"
                        >
                          {product.name}
                        </h3>

                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {product.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {product.specs.slice(0, 3).map((s, idx) => (
                            <span key={idx} className="bg-secondary/60 text-muted-foreground px-2 py-0.5 rounded-md text-[10px] font-mono">
                              <strong>{s.label}:</strong> {s.value}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="w-full sm:w-48 flex flex-col justify-between sm:items-end border-t sm:border-t-0 sm:border-l border-border pt-4 sm:pt-0 sm:pl-5 space-y-3 shrink-0">
                        <div className="text-left sm:text-right">
                          <span className="font-mono text-xl font-black text-foreground block">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="font-mono text-xs text-muted-foreground line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block font-semibold mt-0.5">
                            {product.stockStatus === "in-stock" ? "✓ In Stock" : "Pre-Order"}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                          <Button
                            onClick={() => addToCart(product)}
                            className="flex-1 h-9 rounded-xl text-xs font-bold gap-1.5 cursor-pointer"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </Button>
                          <Button
                            onClick={() => setQuickViewProduct(product)}
                            variant="outline"
                            className="h-9 px-2.5 rounded-xl text-xs cursor-pointer"
                            title="Quick Specs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </Button>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`h-9 w-9 rounded-xl border border-border flex items-center justify-center transition-colors ${
                              isWished ? "bg-rose-500/10 text-rose-500" : "hover:bg-secondary text-muted-foreground"
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${isWished ? "fill-rose-500" : ""}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
