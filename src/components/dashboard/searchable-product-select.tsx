"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Search, X, Check, ChevronsUpDown, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchableProductSelectProps {
  products: Product[];
  selectedProductId?: string;
  selectedProductName?: string;
  onSelectProduct: (product: Product) => void;
  label?: string;
  placeholder?: string;
  formatPrice: (usd: number) => string;
  className?: string;
}

export function SearchableProductSelect({
  products,
  selectedProductId,
  selectedProductName,
  onSelectProduct,
  label = "Select Product",
  placeholder = "Search among 2,660+ gear items by name, brand, model...",
  formatPrice,
  className = "",
}: SearchableProductSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedProduct = useMemo(() => {
    if (selectedProductId) {
      return products.find((p) => p.id === selectedProductId) || null;
    }
    if (selectedProductName) {
      return products.find((p) => p.name.toLowerCase() === selectedProductName.toLowerCase()) || null;
    }
    return null;
  }, [products, selectedProductId, selectedProductName]);

  // Categories list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category))).filter(Boolean);
    return ["all", ...cats];
  }, [products]);

  // Filtered list with tokenized multi-keyword search
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (categoryFilter !== "all" && p.category !== categoryFilter) {
          return false;
        }
        if (searchQuery.trim()) {
          const terms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
          const searchable = `${p.name} ${p.brand} ${p.category} ${p.shortDescription || ""} ${p.mount || ""}`.toLowerCase();
          return terms.every((t) => searchable.includes(t));
        }
        return true;
      })
      .slice(0, 60); // fast render top 60 matches
  }, [products, searchQuery, categoryFilter]);

  const totalMatchesCount = useMemo(() => {
    if (!searchQuery.trim() && categoryFilter === "all") return products.length;
    return products.filter((p) => {
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const terms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
        const searchable = `${p.name} ${p.brand} ${p.category} ${p.shortDescription || ""} ${p.mount || ""}`.toLowerCase();
        return terms.every((t) => searchable.includes(t));
      }
      return true;
    }).length;
  }, [products, searchQuery, categoryFilter]);

  return (
    <div ref={containerRef} className={`relative space-y-1.5 ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-foreground flex items-center justify-between">
          <span>{label}</span>
          <span className="text-[10px] font-mono text-muted-foreground">
            {products.length} Products in catalog
          </span>
        </label>
      )}

      {/* Trigger Button: Shows selected product preview or placeholder */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-2.5 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-colors flex items-center justify-between gap-3 cursor-pointer group shadow-xs focus:outline-hidden focus:ring-1 focus:ring-primary"
      >
        {selectedProduct ? (
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-secondary border border-border shrink-0">
              <Image
                src={selectedProduct.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"}
                alt={selectedProduct.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                {selectedProduct.name}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <span className="font-bold text-[#FFE600] bg-black px-1.5 py-0.2 rounded text-[10px]">
                  {selectedProduct.brand}
                </span>
                <span>•</span>
                <span className="uppercase text-[10px]">{selectedProduct.category}</span>
                <span>•</span>
                <span className="font-bold text-foreground">{formatPrice(selectedProduct.price)}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-muted-foreground py-1">
            <Package className="w-4 h-4 text-muted-foreground" />
            <span>— Select / Search Catalog Product —</span>
          </div>
        )}

        <div className="flex items-center gap-1 text-muted-foreground group-hover:text-foreground shrink-0">
          <span className="text-[11px] font-mono font-medium hidden sm:inline">Search & Change</span>
          <ChevronsUpDown className="w-4 h-4" />
        </div>
      </button>

      {/* Popover / Search Modal Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Search Header */}
          <div className="p-3 border-b border-border bg-secondary/30 space-y-2.5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-primary font-sans font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[10.5px]">
              <span className="text-muted-foreground font-mono text-[10px] shrink-0">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-2 py-0.5 rounded-md font-mono uppercase whitespace-nowrap transition-colors cursor-pointer ${
                    categoryFilter === cat
                      ? "bg-foreground text-background font-bold"
                      : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-0.5">
              <span>Matching: <strong className="text-foreground">{totalMatchesCount}</strong> items</span>
              {searchQuery && <span>Showing top {filteredProducts.length} matches</span>}
            </div>
          </div>

          {/* Product Items List */}
          <div className="max-h-72 overflow-y-auto divide-y divide-border/60 overscroll-contain">
            {filteredProducts.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <Package className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-xs font-semibold text-foreground">No matching products found</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Try searching with a different keyword</p>
              </div>
            ) : (
              filteredProducts.map((prod) => {
                const isSelected = selectedProduct?.id === prod.id;
                return (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      setIsOpen(false);
                      setSearchQuery("");
                    }}
                    className={`p-2.5 hover:bg-secondary/60 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                      isSelected ? "bg-secondary/80 border-l-2 border-primary" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-secondary border border-border shrink-0">
                        <Image
                          src={prod.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=200&q=80"}
                          alt={prod.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-foreground truncate">
                          {prod.name}
                        </p>
                        <div className="flex items-center gap-2 text-[10.5px] font-mono text-muted-foreground mt-0.5">
                          <span className="font-semibold text-foreground">{prod.brand}</span>
                          <span>•</span>
                          <span className="uppercase text-[10px]">{prod.category}</span>
                          <span>•</span>
                          <span className="font-bold text-primary">{formatPrice(prod.price)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      {isSelected ? (
                        <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </span>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 text-[11px] rounded-lg px-2 text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                          Select
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Close */}
          <div className="p-2 border-t border-border bg-secondary/20 flex items-center justify-between text-[11px]">
            <span className="text-muted-foreground font-mono text-[10px]">ESC or click outside to close</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-7 text-xs rounded-lg cursor-pointer"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
