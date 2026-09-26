"use client";

import React, { useState, useRef, useEffect, useDeferredValue } from "react";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import { useAuth } from "@/context/auth-context";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ShoppingBag,
  ShieldCheck,
  Search,
  ArrowRight,
  User,
  LogOut,
  ChevronDown,
  Layers,
  Camera,
  Aperture,
  Zap,
  Mic,
  SlidersHorizontal,
  Smartphone,
} from "lucide-react";

interface SubItem {
  label: string;
  href: string;
  count?: number;
  hasArrow?: boolean;
}

interface NavDepartment {
  id: string;
  name: string;
  href: string;
  description: string;
  viewAllText: string;
  icon: React.ElementType;
  items: SubItem[];
}

const NAV_DEPARTMENTS: NavDepartment[] = [
  {
    id: "cameras",
    name: "Cameras",
    href: "/store?cat=cameras",
    description: "Official Cinema Bodies & Pro Mirrorless",
    viewAllText: "View All Cameras (226 Items) →",
    icon: Camera,
    items: [
      { label: "Canon Camera", href: "/store?cat=cameras&brand=Canon", count: 46 },
      { label: "Sony Camera", href: "/store?cat=cameras&brand=Sony", count: 58 },
      { label: "Nikon Camera", href: "/store?cat=cameras&brand=Nikon", count: 38 },
      { label: "Fujifilm Camera", href: "/store?cat=cameras&brand=Fujifilm", count: 12 },
      { label: "Kodak Camera", href: "/store?cat=cameras&brand=Kodak", count: 2 },
      { label: "Red Camera", href: "/store?cat=cameras&brand=RED", count: 4 },
      { label: "Streaming & PTZ Camera", href: "/store?cat=cameras&q=PTZ", count: 6 },
      { label: "Action Cameras & Accessories", href: "/store?cat=cameras&q=Action", count: 8, hasArrow: true },
    ],
  },
  {
    id: "lenses",
    name: "Lenses",
    href: "/store?cat=lenses",
    description: "Master Cinema Primes, Telephotos & Zooms",
    viewAllText: "View All Lenses & Optics (392 Items) →",
    icon: Aperture,
    items: [
      { label: "Sony E-Mount Lenses", href: "/store?cat=lenses&brand=Sony", count: 78 },
      { label: "Canon RF / EF Lenses", href: "/store?cat=lenses&brand=Canon", count: 84 },
      { label: "Nikon Z-Mount Lenses", href: "/store?cat=lenses&brand=Nikon", count: 64 },
      { label: "Sigma Art & Cine Lenses", href: "/store?cat=lenses&brand=Sigma", count: 34 },
      { label: "Viltrox Cinema & Primes", href: "/store?cat=lenses&brand=Viltrox", count: 14 },
      { label: "Tamron Zoom Lenses", href: "/store?cat=lenses&brand=Tamron", count: 10 },
      { label: "Cinema Primes & Anamorphic", href: "/store?cat=lenses&q=Cinema", count: 18 },
      { label: "Lens Filters & Adapters", href: "/store?cat=lenses&q=Filter", count: 42, hasArrow: true },
    ],
  },
  {
    id: "lighting",
    name: "Lighting",
    href: "/store?cat=lighting",
    description: "High-Power COB, Tubes, Flashes & Modifiers",
    viewAllText: "View All Lighting & Studio (665 Items) →",
    icon: Zap,
    items: [
      { label: "LED Monolights & Point-Source", href: "/store?cat=lighting&q=Monolight", count: 48 },
      { label: "RGB Tube Lights & Soft Panels", href: "/store?cat=lighting&q=RGB", count: 65 },
      { label: "Godox Strobe & Studio Lights", href: "/store?cat=lighting&brand=Godox", count: 30 },
      { label: "Aputure & Amaran Fixtures", href: "/store?cat=lighting&brand=Aputure", count: 15 },
      { label: "Nanlite & Forza Studio Light", href: "/store?cat=lighting&brand=Nanlite", count: 51 },
      { label: "Camera Flashes & Speedlights", href: "/store?cat=flashes", count: 168 },
      { label: "Softboxes, Grids & Diffusers", href: "/store?cat=lighting&q=Softbox", count: 72 },
      { label: "C-Stands, Booms & Grip", href: "/store?cat=lighting&q=Stand", count: 36, hasArrow: true },
    ],
  },
  {
    id: "audio",
    name: "Audio",
    href: "/store?cat=audio",
    description: "Broadcast Wireless, Shotguns & Recorders",
    viewAllText: "View All Audio Gear (354 Items) →",
    icon: Mic,
    items: [
      { label: "Wireless Lavalier Microphone Kits", href: "/store?cat=audio&q=Wireless", count: 94 },
      { label: "DJI Mic & Mic 2 Series", href: "/store?cat=audio&brand=DJI", count: 16 },
      { label: "RØDE Broadcast Microphones", href: "/store?cat=audio&brand=RODE", count: 18 },
      { label: "Boya & Hollyland Systems", href: "/store?cat=audio&brand=Boya", count: 35 },
      { label: "Shotgun & Directional Mics", href: "/store?cat=audio&q=Shotgun", count: 42 },
      { label: "32-Bit Float Audio Recorders", href: "/store?cat=audio&q=Recorder", count: 28 },
      { label: "Wireless Video Transmitters (Mars)", href: "/store?q=Mars", count: 14 },
      { label: "On-Camera Field Monitors", href: "/store?q=Monitor", count: 22, hasArrow: true },
    ],
  },
  {
    id: "gimbals",
    name: "Gimbals & Rigs",
    href: "/store?cat=gimbals",
    description: "3-Axis Cinema Stabilizers, Cages & Sliders",
    viewAllText: "View All Stabilizers & Rigs (504 Items) →",
    icon: SlidersHorizontal,
    items: [
      { label: "DJI Ronin RS 3 / RS 4 Pro", href: "/store?cat=gimbals&brand=DJI", count: 28 },
      { label: "Zhiyun Handheld Stabilizers", href: "/store?cat=gimbals&brand=Zhiyun", count: 12 },
      { label: "Smartphone Gimbals & Vlogging", href: "/store?cat=gimbals&q=Mobile", count: 16 },
      { label: "Tilta Modular Rigs & Handles", href: "/store?brand=Tilta", count: 110 },
      { label: "SmallRig Production Cages", href: "/store?brand=SmallRig", count: 95 },
      { label: "Video Tripods & Fluid Heads", href: "/store?cat=tripods", count: 231 },
      { label: "Wireless Follow Focus Systems", href: "/store?q=Follow+Focus", count: 8 },
      { label: "Matte Boxes & Carbon Rods", href: "/store?q=Matte", count: 15, hasArrow: true },
    ],
  },
];

const ALL_13_CATEGORIES = [
  { label: "Cameras", href: "/store?cat=cameras", count: 226 },
  { label: "Lenses & Accessories", href: "/store?cat=lenses", count: 392 },
  { label: "Printers & Instax Cameras", href: "/store?q=Instax", count: 21 },
  { label: "Professional Video", href: "/store?q=Cinema", count: 187 },
  { label: "Batteries & Power", href: "/store?q=Battery", count: 295 },
  { label: "Accessories", href: "/store?cat=accessories", count: 250 },
  { label: "Lighting & Studio", href: "/store?cat=lighting", count: 665 },
  { label: "Tripods & Supports", href: "/store?cat=tripods", count: 231 },
  { label: "Gimbals & Stabilizers", href: "/store?cat=gimbals", count: 135 },
  { label: "Rigs & Supports", href: "/store?q=Cage", count: 369 },
  { label: "Storages & Accessories", href: "/store?cat=memory-cards", count: 163 },
  { label: "Audio", href: "/store?cat=audio", count: 354 },
  { label: "Mobile Equipment", href: "/store?cat=bags", count: 239 },
];

export function NavinaHeader() {
  const { cartItemCount, setIsCartOpen, homepageContent, products, formatPrice } = useStore();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [activeTopCategory, setActiveTopCategory] = useState<string | null>(null);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(() => {
    const initialAnnouncement = homepageContent?.announcement;
    return initialAnnouncement?.enabled !== false && Boolean(
      initialAnnouncement?.announcementText?.trim() || initialAnnouncement?.courierText?.trim(),
    );
  });
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const [activeSearchField, setActiveSearchField] = useState<"desktop" | "mobile" | null>(null);
  const deferredSearchQuery = useDeferredValue(headerSearchQuery.trim().toLowerCase());

  const userMenuRef = useRef<HTMLDivElement>(null);
  const announcement = homepageContent?.announcement;
  const isAnnouncementEnabled = announcement?.enabled !== false;
  const announcementScrollDuration = Math.min(90, Math.max(20, Number(announcement?.scrollDuration) || 45));
  const tickerMessages = [
    announcement?.announcementText,
    announcement?.courierText,
  ].filter((message): message is string => Boolean(message?.trim()));
  useEffect(() => {
    setIsAnnouncementVisible(isAnnouncementEnabled && tickerMessages.length > 0);
  }, [isAnnouncementEnabled, announcement?.announcementText, announcement?.courierText]);
  const activeCategory = ALL_13_CATEGORIES.find((category) => category.label === activeTopCategory);
  const activeCategoryId = activeCategory?.href.match(/[?&]cat=([^&]+)/)?.[1];
  const activeSearchTerm = activeCategory?.href.match(/[?&]q=([^&]+)/)?.[1]?.replace(/\+/g, " ");
  const activeDepartment = NAV_DEPARTMENTS.find((department) =>
    activeCategoryId ? department.href.includes(`cat=${activeCategoryId}`) : false,
  );
  const menuProducts = products.filter((product) => {
    if (activeCategoryId) return product.category === activeCategoryId;
    if (activeSearchTerm) {
      const searchTerm = decodeURIComponent(activeSearchTerm).toLowerCase();
      return `${product.name} ${product.brand}`.toLowerCase().includes(searchTerm);
    }
    return true;
  });
  const menuLinks = activeTopCategory === "Home"
    ? ALL_13_CATEGORIES.slice(0, 10).map(({ label, href }) => ({ label, href }))
    : activeDepartment?.items || menuProducts.slice(0, 8).map((product) => ({
        label: product.name,
        href: `/store/${product.id}`,
      }));
  const menuBrands = [...new Set((menuProducts.length ? menuProducts : products).map((product) => product.brand))]
    .filter(Boolean)
    .slice(0, 8);
  const searchResults = deferredSearchQuery
    ? products
        .filter((product) =>
          `${product.name} ${product.brand} ${product.category}`
            .toLowerCase()
            .includes(deferredSearchQuery),
        )
        .slice(0, 6)
    : [];
  const handleSearchBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setActiveSearchField(null);
    }
  };
  const renderSearchResults = (field: "desktop" | "mobile") => {
    if (activeSearchField !== field || !headerSearchQuery.trim()) return null;

    return (
      <div
        role="region"
        aria-label="Product search results"
        className="absolute left-0 right-0 top-full z-[80] mt-2 max-h-80 overflow-y-auto border border-[#3F3F46] bg-[#09090B] text-white shadow-2xl"
      >
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <Link
              key={product.id}
              href={`/store/${product.id}`}
              onClick={() => setActiveSearchField(null)}
              className="flex items-center justify-between gap-4 border-b border-[#27272A] px-4 py-3 last:border-b-0 hover:bg-[#18181B]"
            >
              <span className="min-w-0">
                <span className="block truncate text-xs font-semibold">{product.name}</span>
                <span className="mt-1 block text-[10px] text-[#A1A1AA]">{product.brand}</span>
              </span>
              <span className="shrink-0 text-xs font-bold text-[#FFE600]">{formatPrice(product.price)}</span>
            </Link>
          ))
        ) : (
          <p className="px-4 py-3 text-xs text-[#A1A1AA]">No products found</p>
        )}
      </div>
    );
  };

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        className={`overflow-hidden transition-[max-height,opacity,transform,visibility] duration-300 ease-out ${
          isAnnouncementVisible
            ? "visible max-h-12 translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
        aria-hidden={!isAnnouncementVisible}
        role="region"
        aria-label="Store announcements"
      >
        {isAnnouncementEnabled && tickerMessages.length > 0 && (
          <div className="border-b border-black/15 bg-[#FFE600] text-black">
            <p className="sr-only">{tickerMessages.join(". ")}</p>
            <div className="overflow-hidden">
              <div
                className="flex w-max animate-marquee-slow"
                style={{ animationDuration: `${announcementScrollDuration}s` }}
                aria-hidden="true"
              >
                {[0, 1, 2, 3].map((copy) => (
                  <div key={copy} className="flex shrink-0 items-center gap-8 px-4 py-2 text-[10px] font-bold sm:gap-12 sm:px-8 sm:text-xs">
                    {tickerMessages.map((message, index) => (
                      <React.Fragment key={`${copy}-${index}`}>
                        {index > 0 && <span className="h-1 w-1 shrink-0 rounded-full bg-black/50" />}
                        {index === 1 && announcement?.courierLink ? (
                          <Link href={announcement.courierLink} className="whitespace-nowrap underline decoration-black/30 underline-offset-2 hover:decoration-black">
                            {message}
                          </Link>
                        ) : (
                          <span className="whitespace-nowrap">{message}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <header className="sticky top-0 z-50 w-full bg-[#000000] text-[#FFFFFF] select-none">
      {/* Main Nikon-Style Header Bar */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4 xl:gap-8 flex-nowrap">
          {/* Left: Hamburger (Mobile) + Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-6 mr-1 sm:mr-4 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#FFE600] transition-colors p-1 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo Block */}
            <Link href="/" className="flex items-center group shrink-0">
              <div className="bg-[#FFE600] text-black px-3 py-1.5 font-black text-xl sm:text-2xl tracking-tighter uppercase font-sans mr-2 shadow-xs group-hover:scale-105 transition-transform">
                ESA
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg sm:text-xl font-black tracking-widest text-white uppercase font-sans">
                  CAM
                </span>
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#A1A1AA] uppercase">
                  OPTICS LAB
                </span>
              </div>
            </Link>
          </div>

          <div className="relative hidden max-w-2xl flex-1 sm:block" onBlur={handleSearchBlur} onKeyDown={(event) => event.key === "Escape" && setActiveSearchField(null)}>
            <form action="/store" className="flex items-center gap-3 border border-[#3F3F46] bg-[#18181B] px-4 py-2.5 text-white focus-within:border-[#FFE600]">
              <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-[#A1A1AA]" />
              <label htmlFor="desktop-store-search" className="sr-only">Search the store</label>
              <input
                id="desktop-store-search"
                name="q"
                type="search"
                value={headerSearchQuery}
                onChange={(event) => setHeaderSearchQuery(event.target.value)}
                onFocus={() => setActiveSearchField("desktop")}
                autoComplete="off"
                placeholder="Search cameras, lenses, audio..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#A1A1AA]"
              />
              <button type="submit" className="text-xs font-bold text-[#FFE600] hover:text-white">Search</button>
            </form>
            {renderSearchResults("desktop")}
          </div>

          {/* Right: Search, Login / Account Dropdown, & Cart Button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 flex-nowrap">
            {/* Login / User Account Menu */}
            {isAuthenticated ? (
              <div className="relative shrink-0" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-sm border transition-colors cursor-pointer text-xs font-bold font-sans shrink-0 ${
                    isAdmin
                      ? "border-[#FFE600]/40 bg-[#FFE600]/10 text-[#FFE600] hover:bg-[#FFE600]/20"
                      : "border-[#27272A] bg-[#18181B] text-white hover:border-[#FFE600]/40"
                  }`}
                  title={user?.name}
                >
                  {isAdmin ? (
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFE600]" />
                  ) : (
                    <User className="w-3.5 h-3.5 text-[#FFE600]" />
                  )}
                  <span className="max-w-[100px] truncate hidden md:inline">
                    {user?.name?.split(" ")[0] || "Account"}
                  </span>
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#121214] border border-[#27272A] rounded-xl shadow-2xl p-3 space-y-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="border-b border-[#27272A] pb-2">
                      <p className="font-bold text-xs text-white truncate">{user?.name}</p>
                      <p className="text-[10px] text-[#A1A1AA] font-mono truncate">{user?.email}</p>
                      <div className="mt-1.5 inline-block text-[9px] font-mono px-2 py-0.5 rounded bg-[#1F1F23] text-[#FFE600] border border-[#FFE600]/30 font-bold">
                        {isAdmin ? "⚡ HQ Merchant Admin" : "Studio Client Account"}
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      {isAdmin && (
                        <>
                          <Link
                            href="/dashboard"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-2 p-2 rounded-lg text-[#FFE600] font-bold hover:bg-[#FFE600]/10 transition-colors"
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Admin HQ Dashboard</span>
                          </Link>
                          <Link
                            href="/admin-app"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-2 p-2 rounded-lg text-emerald-400 font-bold hover:bg-emerald-500/10 transition-colors"
                          >
                            <Smartphone className="w-3.5 h-3.5" />
                            <span>تطبيق إدارة الطلبات 📱</span>
                          </Link>
                        </>
                      )}
                      <Link
                        href="/store"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-lg text-[#D4D4D8] hover:text-white hover:bg-[#27272A] transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#A1A1AA]" />
                        <span>Browse Catalog</span>
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-2 p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors text-left cursor-pointer"
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
                className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white hover:text-[#FFE600] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-sm hover:bg-[#18181B] border border-transparent hover:border-[#27272A] transition-all font-sans shrink-0"
                title="Sign In / Admin Access"
              >
                <User className="w-3.5 h-3.5 text-[#FFE600]" />
                <span className="hidden sm:inline">LOGIN</span>
              </Link>
            )}

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#FFE600] hover:bg-[#FFD000] text-black px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-sm text-[11px] sm:text-xs font-black tracking-wider sm:tracking-widest uppercase transition-all duration-200 hover:scale-105 cursor-pointer shadow-md font-sans shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>CART</span>
              {cartItemCount > 0 && (
                <span className="bg-black text-[#FFE600] text-[9px] sm:text-[10px] font-mono font-black px-1.5 py-0.5 rounded-sm">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#27272A] bg-[#09090B]">
        <div className="relative sm:hidden" onBlur={handleSearchBlur} onKeyDown={(event) => event.key === "Escape" && setActiveSearchField(null)}>
          <form action="/store" className="flex items-center gap-3 border-b border-[#27272A] px-4 py-3">
            <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-[#A1A1AA]" />
            <label htmlFor="mobile-store-search" className="sr-only">Search the store</label>
            <input
              id="mobile-store-search"
              name="q"
              type="search"
              value={headerSearchQuery}
              onChange={(event) => setHeaderSearchQuery(event.target.value)}
              onFocus={() => setActiveSearchField("mobile")}
              autoComplete="off"
              placeholder="Search cameras, lenses, audio..."
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#A1A1AA]"
            />
            <button type="submit" aria-label="Search" className="text-[#FFE600]">
              <Search aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
          {renderSearchResults("mobile")}
        </div>
        <div
          className="relative"
          onMouseLeave={() => setActiveTopCategory(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setActiveTopCategory(null);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setActiveTopCategory(null);
          }}
        >
          <nav aria-label="Shop categories" className="mx-auto flex max-w-[1720px] items-center gap-6 overflow-x-auto px-4 py-3 sm:px-8 lg:px-12 xl:px-16 no-scrollbar">
            <Link
              href="/"
              onMouseEnter={() => setActiveTopCategory("Home")}
              onFocus={() => setActiveTopCategory("Home")}
              aria-haspopup="true"
              aria-expanded={activeTopCategory === "Home"}
              className={`shrink-0 text-[11px] font-bold uppercase transition-colors hover:text-[#FFE600] ${activeTopCategory === "Home" ? "text-[#FFE600]" : "text-white"}`}
            >
              Home
            </Link>
            {ALL_13_CATEGORIES.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                onMouseEnter={() => setActiveTopCategory(category.label)}
                onFocus={() => setActiveTopCategory(category.label)}
                aria-haspopup="true"
                aria-expanded={activeTopCategory === category.label}
                className={`shrink-0 text-[11px] font-semibold transition-colors hover:text-[#FFE600] ${activeTopCategory === category.label ? "text-[#FFE600]" : "text-[#D4D4D8]"}`}
              >
                {category.label}
              </Link>
            ))}
          </nav>

          <AnimatePresence initial={false}>
            {activeTopCategory && (
              <motion.div
                key={activeTopCategory}
                id="category-mega-menu"
                role="region"
                aria-label={`${activeTopCategory} menu`}
                initial={{ opacity: 0, y: -12, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.995 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute left-0 right-0 top-full z-[60] hidden origin-top bg-white text-[#171717] shadow-[0_18px_40px_rgba(0,0,0,0.16)] lg:block"
              >
              <div className="mx-auto grid max-w-[1720px] gap-8 px-4 py-7 sm:px-8 lg:grid-cols-[minmax(190px,0.8fr)_minmax(0,1.8fr)_minmax(190px,0.8fr)] lg:px-12 xl:px-16">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#71717A]">
                    {activeDepartment?.name || "Shop department"}
                  </p>
                  <h2 className="mt-2 text-xl font-black">{activeCategory?.label || "Explore the catalog"}</h2>
                  <Link
                    href={activeCategory?.href || "/store"}
                    className="mt-5 inline-flex items-center gap-2 border-b-2 border-[#FFE600] pb-1 text-xs font-bold hover:text-[#E71928]"
                  >
                    View all {activeCategory ? activeCategory.label : "categories"}
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#52525B]">
                    {activeDepartment ? "Browse categories" : "Popular products"}
                  </h3>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {(menuLinks.length > 0 ? menuLinks : [{
                      label: `Shop all ${activeCategory?.label || "products"}`,
                      href: activeCategory?.href || "/store",
                    }]).map((item) => (
                      <Link key={`${item.label}-${item.href}`} href={item.href} className="py-1 text-sm text-[#3F3F46] transition-colors hover:text-[#E71928]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#52525B]">Popular brands</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {menuBrands.map((brand) => (
                      <Link
                        key={brand}
                        href={`/store?brand=${encodeURIComponent(brand)}`}
                        className="py-1 text-sm text-[#3F3F46] transition-colors hover:text-[#E71928]"
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#27272A] bg-[#0A0A0A] px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2 font-sans">
            {/* Departments Accordions */}
            {NAV_DEPARTMENTS.map((dept) => {
              const isExpanded = expandedMobileCategory === dept.id;
              return (
                <div key={dept.id} className="border-b border-[#1F1F23] pb-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={dept.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-black uppercase tracking-wider text-white hover:text-[#FFE600]"
                    >
                      {dept.name}
                    </Link>
                    <button
                      onClick={() =>
                        setExpandedMobileCategory(isExpanded ? null : dept.id)
                      }
                      className="p-1.5 text-[#A1A1AA] hover:text-[#FFE600]"
                      aria-label="Toggle subcategories"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180 text-[#FFE600]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-3 pr-1 py-1 space-y-1 bg-[#141416] rounded-lg border border-[#27272A]">
                      {dept.items.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2 text-xs text-[#A1A1AA] hover:text-[#FFE600] hover:bg-[#1C1C1F] rounded"
                        >
                          <span>{sub.label}</span>
                          {sub.count !== undefined && (
                            <span className="text-[10px] font-mono text-[#71717A]">
                              ({sub.count})
                            </span>
                          )}
                        </Link>
                      ))}
                      <Link
                        href={dept.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-center text-xs font-bold text-[#FFE600] border-t border-[#27272A]"
                      >
                        {dept.viewAllText}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            {/* All 13 Categories Accordion */}
            <div className="border-b border-[#1F1F23] pb-2">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-black uppercase tracking-wider text-[#FFE600] flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> All Departments
                </span>
                <button
                  onClick={() =>
                    setExpandedMobileCategory(
                      expandedMobileCategory === "all-depts" ? null : "all-depts"
                    )
                  }
                  className="p-1.5 text-[#A1A1AA] hover:text-[#FFE600]"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedMobileCategory === "all-depts" ? "rotate-180 text-[#FFE600]" : ""
                    }`}
                  />
                </button>
              </div>

              {expandedMobileCategory === "all-depts" && (
                <div className="pl-3 pr-1 py-1 space-y-1 bg-[#141416] rounded-lg border border-[#27272A]">
                  {ALL_13_CATEGORIES.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={cat.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 px-2 text-xs text-[#A1A1AA] hover:text-[#FFE600] hover:bg-[#1C1C1F] rounded"
                    >
                      <span>{cat.label}</span>
                      <span className="text-[10px] font-mono text-[#71717A]">
                        ({cat.count})
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* User Account / Auth Section on Mobile */}
            {isAuthenticated ? (
              <div className="pt-2 pb-2 border-b border-[#1F1F23] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white truncate">{user?.name}</span>
                  <span className="text-[9px] font-mono text-[#FFE600] font-bold px-2 py-0.5 rounded bg-[#1F1F23] border border-[#FFE600]/30">
                    {isAdmin ? "⚡ HQ Admin" : "Studio Client"}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {isAdmin && (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 text-center py-2 px-3 bg-[#FFE600] text-black font-bold text-xs uppercase rounded-sm hover:bg-[#FFD000]"
                      >
                        HQ Dashboard
                      </Link>
                      <Link
                        href="/admin-app"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 text-center py-2 px-3 bg-emerald-500 text-black font-bold text-xs uppercase rounded-sm hover:bg-emerald-400 flex items-center justify-center gap-1"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        Orders App
                      </Link>
                    </>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 border border-rose-500/40 text-rose-400 font-bold text-xs rounded-sm hover:bg-rose-500/10 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-black uppercase tracking-wider text-[#FFE600] flex items-center justify-between py-2 border-b border-[#1F1F23]"
              >
                <span>Sign In / Login</span>
                <User className="w-4 h-4 text-[#FFE600]" />
              </Link>
            )}

            <Link
              href="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-[#FFE600] flex items-center justify-between py-2"
            >
              <span>View Cart &amp; Checkout</span>
              <span className="bg-[#FFE600] text-black text-xs font-mono font-bold px-2 py-0.5 rounded-sm">
                {cartItemCount}
              </span>
            </Link>

            {/* Quick Contact on Mobile */}
            {(homepageContent?.footer?.hotline || homepageContent?.footer?.whatsappNumber) && (
              <div className="pt-3 border-t border-[#1F1F23] flex items-center gap-2">
                {homepageContent?.footer?.whatsappNumber && (
                  <a
                    href={`https://wa.me/${homepageContent.footer.whatsappNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 rounded-sm text-xs font-bold text-center"
                  >
                    💬 WhatsApp
                  </a>
                )}
                {homepageContent?.footer?.hotline && (
                  <a
                    href={`tel:${homepageContent.footer.hotline}`}
                    className="flex-1 py-2 px-3 bg-white/10 text-[#FFE600] border border-[#FFE600]/30 rounded-sm text-xs font-bold text-center"
                  >
                    📞 Call Hotline
                  </a>
                )}
              </div>
            )}
          </nav>
        </div>
      )}
      </header>
    </>
  );
}
