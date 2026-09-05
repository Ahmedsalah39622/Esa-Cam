"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import { useAuth } from "@/context/auth-context";
import { PRODUCTS, Product } from "@/data/products";
import {
  Search,
  ShoppingBag,
  Heart,
  X,
  User,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function DesktopNav() {
  const {
    cartItemCount,
    cartTotalUSD,
    wishlist,
    setIsCartOpen,
    formatPrice,
    setSelectedCategory,
    products,
  } = useStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const terms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const pool = products && products.length > 0 ? products : PRODUCTS;
      const results = pool
        .filter((p) => {
          const searchable = `${p.name} ${p.brand} ${p.category} ${p.shortDescription || ""} ${p.mount || ""}`.toLowerCase();
          return terms.every((t) => searchable.includes(t));
        })
        .slice(0, 6);
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery, products]);

  // Click outside search
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navCategories: {
    label: string;
    href: string;
    cat?: string;
  }[] = [
    { label: "Home", href: "/" },
    { label: "Cameras", href: "/store?cat=cameras", cat: "cameras" },
    { label: "Lenses", href: "/store?cat=lenses", cat: "lenses" },
    { label: "Accessories", href: "/store?cat=accessories", cat: "accessories" },
    { label: "Audio & Video", href: "/store?cat=audio", cat: "audio" },
    { label: "Dental Equipments", href: "/store?cat=dental", cat: "dental" },
    { label: "Deals", href: "/store?cat=deals", cat: "deals" },
    { label: "Bags & Straps", href: "/store?cat=bags", cat: "bags" },
    { label: "Stabilizer & Gimbal", href: "/store?cat=gimbals", cat: "gimbals" },
    { label: "Flashes", href: "/store?cat=flashes", cat: "flashes" },
    { label: "Lighting Equipment", href: "/store?cat=lighting", cat: "lighting" },
    { label: "Memory Cards", href: "/store?cat=memory-cards", cat: "memory-cards" },
    { label: "Tripods & Supports", href: "/store?cat=tripods", cat: "tripods" },
    { label: "Used", href: "/store?cat=pre-owned", cat: "pre-owned" },
  ];

  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border transition-colors hidden md:block">
      <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between gap-6">
        {/* Nikon-Inspired Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="bg-[#FFE600] text-black px-3 py-1.5 font-black text-xl sm:text-2xl tracking-tighter uppercase font-sans mr-2 shadow-xs group-hover:scale-105 transition-transform">
            ESA
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg sm:text-xl font-black tracking-widest text-foreground uppercase font-sans">
              CAM
            </span>
            <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-muted-foreground uppercase">
              OPTICS LAB
            </span>
          </div>
        </Link>

        {/* Global Instant Search Bar */}
        <div ref={searchRef} className="relative flex-1 max-w-md hidden md:block">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.trim().length > 1 && setIsSearchOpen(true)}
              placeholder="Search Sony FX3, 24-70mm GM, Aputure, DJI Mic..."
              className="w-full pl-10 pr-9 py-2 text-xs rounded-full border border-border bg-secondary/50 focus:bg-background focus:outline-hidden focus:ring-1 focus:ring-amber-400/50 transition-all font-sans text-foreground placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-card rounded-2xl border border-border shadow-2xl overflow-hidden z-50 divide-y divide-border">
              <div className="p-2.5 bg-secondary/40 text-[11px] font-medium text-muted-foreground flex justify-between items-center">
                <span>Matching Gear ({searchResults.length})</span>
                <span className="text-[10px] font-mono">Press Esc to close</span>
              </div>
              <div className="py-1">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/store/${product.id}`}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="p-3 hover:bg-secondary/60 flex items-center gap-3 cursor-pointer transition-colors"
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary shrink-0 border border-border">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {product.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground font-mono">
                        {product.brand} • {product.category}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold font-mono text-foreground">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Tools: Wishlist, User Account / Admin, Cart Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Wishlist Indicator */}
          <a
            href="#catalog"
            className="relative p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            title="Saved Gear Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </a>

          {/* User Account / Admin Portal Dropdown */}
          <div className="relative">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`p-2 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer border ${
                    isAdmin
                      ? "border-amber-400/50 bg-amber-400/10 text-amber-500 hover:bg-amber-400/20"
                      : "border-border hover:bg-secondary text-foreground"
                  }`}
                  title={user?.name}
                >
                  {isAdmin ? <ShieldCheck className="w-4 h-4 text-amber-500" /> : <User className="w-4 h-4" />}
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-2xl shadow-xl p-3 space-y-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="border-b border-border pb-2">
                      <p className="font-bold text-xs text-foreground truncate">{user?.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono truncate">{user?.email}</p>
                      <Badge variant="secondary" className="text-[9px] font-mono mt-1">
                        {isAdmin ? "⚡ HQ Merchant Admin" : "Studio Account"}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-xs">
                      {isAdmin && (
                        <Link
                          href="/dashboard"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-xl text-amber-600 dark:text-amber-400 font-bold hover:bg-amber-400/10 transition-colors"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Admin Dashboard</span>
                        </Link>
                      )}
                      <Link
                        href="/store"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-xl hover:bg-secondary transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Browse Catalog</span>
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-2 p-2 rounded-xl text-rose-500 hover:bg-rose-500/10 transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors block"
                title="Sign In / Admin Access"
              >
                <User className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Cart Drawer Trigger */}
          <Button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 rounded-full px-4 py-2 h-10 shadow-md font-semibold text-xs cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden lg:inline">Cart</span>
            <span className="bg-background text-foreground text-[11px] font-mono px-1.5 py-0.5 rounded-full font-bold">
              {cartItemCount}
            </span>
            {cartTotalUSD > 0 && (
              <span className="hidden xl:inline text-xs font-mono font-bold opacity-90 pl-1 border-l border-primary-foreground/30">
                {formatPrice(cartTotalUSD)}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Categories Sub-Navigation Bar */}
      <div className="border-t border-border/60 bg-secondary/15 hidden md:block">
        <div className="mx-auto max-w-7xl px-3 lg:px-6 py-2.5">
          <nav className="w-full flex items-center justify-between gap-1 xl:gap-2 overflow-hidden">
            {navCategories.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => {
                  if (item.cat) setSelectedCategory(item.cat);
                }}
                className="text-[10.5px] md:text-[11px] lg:text-[11.5px] xl:text-xs font-medium text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors py-0.5 px-1 hover:bg-secondary/40 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
