"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import { useStore } from "@/context/store-context";
import {
  Search,
  ArrowUpDown,
  Filter,
  Package,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductCatalog() {
  const { selectedCategory, setSelectedCategory } = useStore();
  const [activeSort, setActiveSort] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [filterBrand, setFilterBrand] = useState<string>("all");
  const [localSearch, setLocalSearch] = useState<string>("");

  const categories: { id: ProductCategory; label: string }[] = [
    { id: "all", label: "All Gear (16)" },
    { id: "cameras", label: "Cinema & Mirrorless" },
    { id: "lenses", label: "Prime & Cine Lenses" },
    { id: "lighting", label: "Studio Lighting" },
    { id: "audio", label: "Pro Audio & Mics" },
    { id: "gimbals", label: "Gimbals & Rigs" },
    { id: "drones", label: "Cinema Drones" },
    { id: "accessories", label: "Power & Storage" },
    { id: "pre-owned", label: "Certified Pre-Owned" },
  ];

  const availableBrands = useMemo(() => {
    const brandsSet = new Set(PRODUCTS.map((p) => p.brand));
    return ["all", ...Array.from(brandsSet)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (filterBrand !== "all" && p.brand !== filterBrand) {
        return false;
      }
      // Search term filter
      if (localSearch.trim()) {
        const query = localSearch.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchBrand = p.brand.toLowerCase().includes(query);
        const matchDesc = p.shortDescription.toLowerCase().includes(query);
        if (!matchName && !matchBrand && !matchDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (activeSort === "price-asc") return a.price - b.price;
      if (activeSort === "price-desc") return b.price - a.price;
      if (activeSort === "rating") return b.rating - a.rating;
      // Default: featured/best seller first
      if (a.isBestSeller && !b.isBestSeller) return -1;
      if (!a.isBestSeller && b.isBestSeller) return 1;
      return 0;
    });
  }, [selectedCategory, filterBrand, localSearch, activeSort]);

  return (
    <section id="catalog" className="w-full py-16 md:py-24 bg-secondary/10 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <Badge variant="secondary" className="uppercase font-mono text-[10px] tracking-wider mb-2">
              Pro Catalog
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Featured Gear & Inventory
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-lg">
              Official brand-new cinema bodies, fast lenses, lighting fixtures, and tested pre-owned gems.
            </p>
          </div>

          {/* Quick Stats or Sort */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card border border-border px-3 py-1.5 rounded-xl text-xs font-mono">
              <span className="text-muted-foreground">Showing:</span>
              <span className="font-bold text-foreground">{filteredProducts.length} items</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-card border border-border rounded-2xl p-4 mb-8 space-y-4 shadow-sm">
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-foreground text-background shadow-xs font-bold"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-Filters: Search input, Brand Selector, and Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              {/* Local Search Input */}
              <div className="relative min-w-[220px] flex-1 max-w-xs">
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter by name or model..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary font-sans"
                />
              </div>

              {/* Brand Selector Dropdown */}
              <div className="flex items-center gap-1.5 bg-secondary/30 border border-border px-2.5 py-1.5 rounded-xl text-xs">
                <Filter className="w-3.5 h-3.5 text-muted-foreground" />
                <select
                  value={filterBrand}
                  onChange={(e) => setFilterBrand(e.target.value)}
                  className="bg-transparent text-xs font-medium text-foreground cursor-pointer focus:outline-hidden"
                  aria-label="Filter by Brand"
                >
                  <option value="all">All Brands</option>
                  {availableBrands.filter(b => b !== "all").map((brand) => (
                    <option key={brand} value={brand} className="bg-card text-foreground">
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
              </span>
              <select
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value as "featured" | "price-asc" | "price-desc" | "rating")}
                className="bg-secondary/40 border border-border px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground cursor-pointer focus:outline-hidden"
                aria-label="Sort products"
              >
                <option value="featured" className="bg-card">Featured & Popular</option>
                <option value="price-asc" className="bg-card">Price: Low to High</option>
                <option value="price-desc" className="bg-card">Price: High to Low</option>
                <option value="rating" className="bg-card">Highest Rated (5.0★)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-card rounded-2xl border border-border flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-foreground">No matching photography gear found</h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              Try adjusting your search keywords or resetting your brand and category filters.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("all");
                setFilterBrand("all");
                setLocalSearch("");
              }}
              variant="outline"
              size="sm"
              className="rounded-xl text-xs mt-2"
            >
              Reset All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
