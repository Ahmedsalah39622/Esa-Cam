"use client";

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function StoreContent() {
  const {
    products,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const searchParams = useSearchParams();
  const router = useRouter();
  const urlCat = searchParams.get("cat") as ProductCategory | "deals" | null;
  const urlBrand = searchParams.get("brand");
  const urlSearch = searchParams.get("q");

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all" | "deals">("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMounts, setSelectedMounts] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating" | "reviews">("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (urlCat) {
      setSelectedCategory(urlCat);
    } else {
      setSelectedCategory("all");
    }

    if (urlBrand) {
      setSelectedBrands([urlBrand]);
    } else {
      setSelectedBrands([]);
    }

    if (urlSearch) {
      setSearchQuery(urlSearch);
    } else {
      setSearchQuery("");
    }
  }, [urlCat, urlBrand, urlSearch]);

  const handleSelectCategory = (catId: ProductCategory | "all" | "deals") => {
    setSelectedCategory(catId);
    if (catId === "all") {
      router.push("/store", { scroll: false });
    } else {
      router.push(`/store?cat=${catId}`, { scroll: false });
    }
  };

  const categories: { id: ProductCategory | "all" | "deals"; label: string; count: number }[] = [
    { id: "all", label: "All Equipment", count: products.length },
    { id: "cameras", label: "Cameras", count: products.filter((p) => p.category === "cameras").length },
    { id: "lenses", label: "Lenses", count: products.filter((p) => p.category === "lenses").length },
    { id: "accessories", label: "Accessories", count: products.filter((p) => p.category === "accessories").length },
    { id: "audio", label: "Audio & Video", count: products.filter((p) => p.category === "audio").length },
    { id: "dental", label: "Dental Equipments", count: products.filter((p) => p.category === "dental").length },
    { id: "deals", label: "Deals", count: products.filter((p) => Boolean(p.originalPrice && p.originalPrice > p.price) || Boolean(p.badge?.includes("SAVE"))).length },
    { id: "bags", label: "Bags & Straps", count: products.filter((p) => p.category === "bags").length },
    { id: "gimbals", label: "Stabilizer & Gimbal", count: products.filter((p) => p.category === "gimbals").length },
    { id: "flashes", label: "Flashes", count: products.filter((p) => p.category === "flashes").length },
    { id: "lighting", label: "Lighting Equipment", count: products.filter((p) => p.category === "lighting").length },
    { id: "memory-cards", label: "Memory Cards", count: products.filter((p) => p.category === "memory-cards").length },
    { id: "tripods", label: "Tripods & Supports", count: products.filter((p) => p.category === "tripods").length },
    { id: "pre-owned", label: "Used", count: products.filter((p) => p.category === "pre-owned").length },
  ];

  const allBrands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand))).filter(Boolean).sort();
  }, [products]);

  const allMounts = ["Sony E", "Canon RF", "L-Mount", "Fujifilm X", "Universal"];

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
    handleSelectCategory("all");
    setSelectedBrands([]);
    setSelectedMounts([]);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setMaxPrice(100000);
    setSearchQuery("");
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category / Deals
        if (selectedCategory === "deals") {
          const isSaleItem = Boolean(product.originalPrice && product.originalPrice > product.price) || Boolean(product.badge?.includes("SAVE"));
          if (!isSaleItem) return false;
        } else if (selectedCategory !== "all") {
          if (product.category !== selectedCategory) {
            return false;
          }
        }

        // Brand
        if (selectedBrands.length > 0) {
          const hasBrand = selectedBrands.some(
            (b) =>
              product.brand?.toLowerCase() === b.toLowerCase() ||
              product.name?.toLowerCase().includes(b.toLowerCase())
          );
          if (!hasBrand) return false;
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

        // Search - Multi-word token matching
        if (searchQuery.trim()) {
          const terms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
          const searchable = `${product.name} ${product.brand} ${product.category} ${product.shortDescription || ""} ${product.mount || ""}`.toLowerCase();
          const matches = terms.every((t) => searchable.includes(t));
          if (!matches) return false;
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
    (searchQuery.trim() ? 1 : 0);

  const ITEMS_PER_PAGE = 36;
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    selectedBrands,
    selectedMounts,
    inStockOnly,
    onSaleOnly,
    maxPrice,
    searchQuery,
    sortBy,
  ]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                {selectedCategory !== "all" && (
                  <>
                    <span className="text-xs text-muted-foreground">/</span>
                    <span className="text-xs font-bold text-primary capitalize font-mono">
                      {categories.find((c) => c.id === selectedCategory)?.label || selectedCategory}
                    </span>
                  </>
                )}
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
                <div className="space-y-1 max-h-[480px] overflow-y-auto pr-1 no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
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
                  Mount / Standard
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
                      <span>{mount}</span>
                    </label>
                  ))}
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
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, brand, mount, or spec..."
                    className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border bg-secondary/30 text-xs text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-primary font-sans"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sort & Layout Controls */}
                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                      className="bg-secondary/40 border border-border rounded-xl px-3 py-2 text-xs font-medium text-foreground focus:outline-hidden cursor-pointer"
                    >
                      <option value="featured">Featured / Bestsellers</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="reviews">Most Reviewed</option>
                    </select>
                  </div>

                  {/* View Mode Buttons */}
                  <div className="hidden sm:flex items-center bg-secondary/50 border border-border rounded-xl p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        viewMode === "grid" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      }`}
                      title="Grid View"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        viewMode === "list" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      }`}
                      title="List View"
                    >
                      <LayoutList className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mobile Filter Button */}
                  <Button
                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                    variant="outline"
                    className="lg:hidden rounded-xl text-xs font-semibold gap-2"
                  >
                    <Filter className="w-3.5 h-3.5" />
                    <span>Filters</span>
                    {activeFilterCount > 0 && (
                      <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                        {activeFilterCount}
                      </span>
                    )}
                  </Button>
                </div>
              </div>

              {/* Active Filter Tags */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
                  <span className="text-[11px] font-mono text-muted-foreground">Active:</span>
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="text-[11px] gap-1 capitalize">
                      {categories.find((c) => c.id === selectedCategory)?.label || selectedCategory}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => handleSelectCategory("all")} />
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
                      {m}
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
                    className="text-[11px] text-primary font-bold hover:underline ml-auto cursor-pointer"
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
                  <button onClick={() => setIsMobileFilterOpen(false)} className="cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Categories */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase text-muted-foreground">Department</p>
                  <div className="grid grid-cols-2 gap-1.5 max-h-60 overflow-y-auto pr-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          handleSelectCategory(cat.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          selectedCategory === cat.id ? "bg-foreground text-background font-bold" : "bg-secondary/40 text-muted-foreground"
                        }`}
                      >
                        {cat.label} ({cat.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply / Close */}
                <Button onClick={() => setIsMobileFilterOpen(false)} className="w-full text-xs font-bold rounded-xl mt-2 cursor-pointer">
                  Apply Filters ({filteredProducts.length} Results)
                </Button>
              </div>
            )}

            <div ref={gridTopRef} className="scroll-mt-28" />

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
                <Button onClick={resetAllFilters} variant="outline" className="rounded-xl text-xs font-semibold cursor-pointer">
                  Reset All Store Filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* List View Mode with Technical Specs Table */
              <div className="space-y-4">
                {paginatedProducts.map((product) => {
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

                        <Link
                          href={`/store/${product.id}`}
                          className="text-base font-bold text-foreground hover:text-primary cursor-pointer leading-snug block"
                        >
                          {product.name}
                        </Link>

                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {product.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {product.specs?.slice(0, 3).map((spec, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono bg-secondary/60 text-muted-foreground px-2 py-0.5 rounded-md border border-border"
                            >
                              {spec.label}: <strong className="text-foreground">{spec.value}</strong>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="sm:w-48 flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-border w-full">
                        <div className="text-left sm:text-right">
                          <span className="font-mono text-lg font-black text-foreground block">
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
                          <Link
                            href={`/store/${product.id}`}
                            className="h-9 px-2.5 rounded-xl text-xs cursor-pointer inline-flex items-center justify-center border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
                            title="View Product"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`h-9 w-9 rounded-xl border border-border flex items-center justify-center transition-colors cursor-pointer ${
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

            {/* Pagination Controls */}
            {filteredProducts.length > ITEMS_PER_PAGE && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6">
                <div className="text-xs font-mono text-muted-foreground">
                  Showing <strong className="text-foreground">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</strong> to{" "}
                  <strong className="text-foreground">{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</strong> of{" "}
                  <strong className="text-foreground">{filteredProducts.length.toLocaleString()}</strong> equipment
                </div>

                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-9 px-3 rounded-xl text-xs font-semibold gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </Button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => {
                      if (p === 1 || p === totalPages) return true;
                      if (Math.abs(p - currentPage) <= 2) return true;
                      return false;
                    })
                    .reduce<(number | string)[]>((acc, p, idx, arr) => {
                      if (idx > 0 && p - (arr[idx - 1] as number) > 1) {
                        acc.push("...");
                      }
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((item, idx) =>
                      typeof item === "number" ? (
                        <button
                          key={idx}
                          onClick={() => handlePageChange(item)}
                          className={`h-9 min-w-9 px-3 rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer ${
                            currentPage === item
                              ? "bg-primary text-primary-foreground shadow-xs"
                              : "bg-secondary/60 hover:bg-secondary text-foreground"
                          }`}
                        >
                          {item}
                        </button>
                      ) : (
                        <span key={idx} className="px-1 text-xs text-muted-foreground font-mono">
                          ...
                        </span>
                      )
                    )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-9 px-3 rounded-xl text-xs font-semibold gap-1 cursor-pointer"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function StorePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-sm font-mono">Loading ESA CAM Store...</div>}>
      <StoreContent />
    </Suspense>
  );
}
