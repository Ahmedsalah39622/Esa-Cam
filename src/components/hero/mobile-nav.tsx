"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useStore } from "@/context/store-context";

import { useAuth } from "@/context/auth-context";
import { ShoppingBag, Menu, X, Search, PhoneCall, Heart, User, ShieldCheck, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavSubcategory {
  label: string;
  href: string;
}

interface MobileNavCategory {
  label: string;
  href: string;
  cat?: string;
  subcategories?: MobileNavSubcategory[];
}

export function MobileNav() {
  const { cartItemCount, setIsCartOpen, setSelectedCategory, wishlist, homepageContent } = useStore();
  const hotline = homepageContent?.footer?.hotline || "+20 1092298665";
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [mobileSearch, setMobileSearch] = useState("");

  const categories: MobileNavCategory[] = [
    { label: "Home", href: "/" },
    {
      label: "Cameras",
      href: "/store?cat=cameras",
      cat: "cameras",
      subcategories: [
        { label: "Canon Camera", href: "/store?cat=cameras&brand=Canon" },
        { label: "Sony Camera", href: "/store?cat=cameras&brand=Sony" },
        { label: "Nikon Camera", href: "/store?cat=cameras&brand=Nikon" },
        { label: "Fujifilm Camera", href: "/store?cat=cameras&brand=Fujifilm" },
      ],
    },
    {
      label: "Lenses",
      href: "/store?cat=lenses",
      cat: "lenses",
      subcategories: [
        { label: "Sony E-Mount Lenses", href: "/store?cat=lenses&brand=Sony" },
        { label: "Canon RF / EF Lenses", href: "/store?cat=lenses&brand=Canon" },
        { label: "Nikon Z-Mount Lenses", href: "/store?cat=lenses&brand=Nikon" },
        { label: "Sigma Art & Cine Lenses", href: "/store?cat=lenses&brand=Sigma" },
      ],
    },
    { label: "Accessories", href: "/store?cat=accessories", cat: "accessories" },
    {
      label: "Audio & Video",
      href: "/store?cat=audio",
      cat: "audio",
      subcategories: [
        { label: "Wireless Microphones", href: "/store?cat=audio&q=wireless" },
        { label: "DJI Microphones", href: "/store?cat=audio&brand=DJI" },
        { label: "Shotgun Microphones", href: "/store?cat=audio&q=shotgun" },
        { label: "Audio Recorders", href: "/store?cat=audio&q=recorder" },
      ],
    },
    { label: "Dental Equipments", href: "/store?cat=dental", cat: "dental" },
    { label: "Deals", href: "/store?cat=deals", cat: "deals" },
    { label: "Bags & Straps", href: "/store?cat=bags", cat: "bags" },
    {
      label: "Stabilizer & Gimbal",
      href: "/store?cat=gimbals",
      cat: "gimbals",
      subcategories: [
        { label: "DJI Ronin Stabilizers", href: "/store?cat=gimbals&brand=DJI" },
        { label: "Zhiyun Stabilizers", href: "/store?cat=gimbals&brand=Zhiyun" },
        { label: "Smartphone Gimbals", href: "/store?cat=gimbals&q=mobile" },
        { label: "Cages & Camera Rigs", href: "/store?cat=gimbals&q=rig" },
      ],
    },
    { label: "Flashes", href: "/store?cat=flashes", cat: "flashes" },
    {
      label: "Lighting Equipment",
      href: "/store?cat=lighting",
      cat: "lighting",
      subcategories: [
        { label: "LED Lights & Monolights", href: "/store?cat=lighting&q=monolight" },
        { label: "RGB Tubes & Soft Panels", href: "/store?cat=lighting&q=RGB" },
        { label: "Studio Strobes", href: "/store?cat=lighting&q=strobe" },
        { label: "Softboxes & Modifiers", href: "/store?cat=lighting&q=softbox" },
      ],
    },
    { label: "Memory Cards", href: "/store?cat=memory-cards", cat: "memory-cards" },
    { label: "Tripods & Supports", href: "/store?cat=tripods", cat: "tripods" },
    { label: "Used", href: "/store?cat=pre-owned", cat: "pre-owned" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border md:hidden">
      <div className="px-4 py-3 flex items-center justify-between gap-2">
        {/* Nikon-Inspired Brand Logo */}
        <Link href="/" className="flex items-center group min-w-0">
          <div className="bg-[#FFE600] text-black px-2.5 py-1 font-black text-lg tracking-tighter uppercase font-sans mr-1.5 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
            ESA
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-widest text-foreground uppercase font-sans">
              CAM
            </span>
            <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">
              OPTICS LAB
            </span>
          </div>
        </Link>

        {/* Right Tools: Wishlist, User Account, Pill Cart, and Hamburger Menu Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Wishlist Heart Icon */}
          <a
            href="#catalog"
            className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Saved Wishlist"
            aria-label="Wishlist"
          >
            <Heart className={`w-5 h-5 ${wishlist.length > 0 ? "text-rose-500 fill-rose-500" : ""}`} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center font-mono">
                {wishlist.length}
              </span>
            )}
          </a>

          {/* User / Admin Icon */}
          <Link
            href={isAuthenticated ? (isAdmin ? "/dashboard" : "/store") : "/login"}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            title={isAuthenticated ? user?.name : "Sign In"}
            aria-label="User Account"
          >
            {isAdmin ? (
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            ) : (
              <User className={`w-5 h-5 ${isAuthenticated ? "text-primary" : ""}`} />
            )}
          </Link>

          {/* Pill Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-foreground text-background px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="w-5 h-5 rounded-full bg-background text-foreground text-[10px] font-bold font-mono flex items-center justify-center">
              {cartItemCount}
            </span>
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-foreground rounded-lg hover:bg-secondary transition-colors cursor-pointer ml-0.5"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-border bg-card px-5 py-6 space-y-5 animate-in slide-in-from-top-2">
          {/* Quick Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cameras, lenses, mics..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-border bg-secondary/50 focus:outline-hidden text-foreground"
            />
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-mono">
              Shop Categories
            </p>
            <div className="flex flex-col space-y-1">
              {categories.map((item) => {
                const isExpanded = expandedCategory === item.cat;
                const subcategoryId = `mobile-subcategories-${item.cat}`;

                return (
                  <div key={item.label} className="border-b border-border/40 last:border-0">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (item.cat) setSelectedCategory(item.cat);
                          setIsOpen(false);
                        }}
                        className="flex-1 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                      {item.subcategories && (
                        <button
                          type="button"
                          onClick={() => setExpandedCategory(isExpanded ? null : item.cat || null)}
                          aria-label={`${isExpanded ? "Hide" : "Show"} ${item.label} subcategories`}
                          aria-expanded={isExpanded}
                          aria-controls={subcategoryId}
                          className="flex h-9 w-10 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                        >
                          <ChevronDown
                            aria-hidden="true"
                            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180 text-primary" : ""}`}
                          />
                        </button>
                      )}
                    </div>
                    {isExpanded && item.subcategories && (
                      <div id={subcategoryId} className="mb-2 ml-2 border-l border-border pl-3">
                        {item.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.label}
                            href={subcategory.href}
                            onClick={() => {
                              if (item.cat) setSelectedCategory(item.cat);
                              setIsOpen(false);
                            }}
                            className="block py-2 text-xs text-muted-foreground transition-colors hover:text-primary"
                          >
                            {subcategory.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* User Account / Auth Mobile Section */}
          {isAuthenticated ? (
            <div className="pt-3 border-t border-border space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-foreground truncate">{user?.name}</span>
                <span className="text-[10px] font-mono text-amber-500 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {isAdmin ? "⚡ HQ Admin" : "Studio Client"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <Button asChild size="sm" className="flex-1 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-black">
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      HQ Dashboard
                    </Link>
                  </Button>
                )}
                <Button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl text-xs text-rose-500 hover:text-rose-600 gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="pt-3 border-t border-border">
              <Button asChild variant="outline" className="w-full rounded-xl text-xs font-bold gap-2">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <User className="w-4 h-4" />
                  <span>Sign In / Admin Access</span>
                </Link>
              </Button>
            </div>
          )}

          <div className="pt-3 border-t border-border flex flex-col gap-3">
            {hotline && (
              <a
                href={`tel:${hotline.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-xs font-semibold text-foreground py-1"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Call Hotline: {hotline}</span>
              </a>
            )}
            <Button
              onClick={() => {
                setIsOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full rounded-xl text-xs font-bold"
            >
              View Cart ({cartItemCount} items)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
