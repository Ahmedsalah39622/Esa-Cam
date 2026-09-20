"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import { useAuth } from "@/context/auth-context";
import {
  Menu,
  X,
  ShoppingBag,
  ShieldCheck,
  Search,
  ChevronRight,
  User,
  LogOut,
  ChevronDown,
  Phone,
  Layers,
  Sparkles,
  Camera,
  Aperture,
  Zap,
  Mic,
  SlidersHorizontal,
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
  const { cartItemCount, setIsCartOpen, homepageContent } = useStore();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAllDeptsOpen, setIsAllDeptsOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const announcement = homepageContent?.announcement || {
    announcementText: "OFFICIAL AUTHORIZED CINEMA & OPTICS DISTRIBUTOR",
    courierText: "VIP White-Glove Courier across Egypt",
    courierLink: "/store",
  };

  const handleMouseEnter = (deptId: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsAllDeptsOpen(false);
    setActiveDropdown(deptId);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsAllDeptsOpen(false);
    }, 180);
  };

  const handleDeptsMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(null);
    setIsAllDeptsOpen(true);
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
    <header className="sticky top-0 z-50 w-full bg-[#000000] text-[#FFFFFF] border-b border-[#27272A] select-none">
      {/* Top Micro Notification Strip (Nikon Style) */}
      <div className="bg-[#18181B] border-b border-[#27272A] text-[11px] font-mono py-1.5 px-6 sm:px-12 flex items-center justify-between text-[#A1A1AA]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse" />
          <span className="text-white font-bold">{announcement.announcementText}</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {homepageContent?.footer?.hotline && (
            <a
              href={`tel:${homepageContent.footer.hotline}`}
              className="hover:text-[#FFE600] transition-colors flex items-center gap-1 text-white font-mono"
            >
              <Phone className="w-3 h-3 text-[#FFE600]" />
              <span>{homepageContent.footer.hotline}</span>
            </a>
          )}
          {homepageContent?.footer?.whatsappNumber && (
            <a
              href={`https://wa.me/${homepageContent.footer.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFE600] transition-colors flex items-center gap-1 text-emerald-400 font-bold font-mono"
            >
              <span>WhatsApp</span>
            </a>
          )}
          <Link href={announcement.courierLink || "/store"} className="hover:text-[#FFE600] transition-colors flex items-center gap-1">
            <span>{announcement.courierText}</span>
            <ChevronRight className="w-3 h-3 text-[#FFE600]" />
          </Link>
        </div>
      </div>


      {/* Main Nikon-Style Header Bar */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4 xl:gap-8 flex-nowrap">
          {/* Left: Hamburger (Mobile) + Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-6 mr-2 sm:mr-6 lg:mr-10 xl:mr-14 shrink-0">
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

          {/* Center: Dynamic Desktop Navigation with Rich Dropdowns */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 flex-1 justify-center">
            {NAV_DEPARTMENTS.map((dept) => {
              const isOpen = activeDropdown === dept.id;
              return (
                <div
                  key={dept.id}
                  className="relative py-6 shrink-0"
                  onMouseEnter={() => handleMouseEnter(dept.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={dept.href}
                    className={`text-xs font-black uppercase tracking-wider transition-colors relative py-1 flex items-center gap-1.5 whitespace-nowrap group ${
                      isOpen ? "text-[#FFE600]" : "text-[#D4D4D8] hover:text-[#FFE600]"
                    }`}
                  >
                    <span>{dept.name}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-[#A1A1AA] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#FFE600]" : "group-hover:text-[#FFE600]"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#FFE600] transition-all duration-200 ${
                        isOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* Desktop Dropdown Flyout */}
                  {isOpen && (
                    <div
                      onMouseEnter={() => handleMouseEnter(dept.id)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-0 mt-0 w-72 bg-[#121214] border border-[#27272A] border-t-2 border-t-[#FFE600] rounded-b-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden"
                    >
                      {/* Dropdown Header */}
                      <div className="bg-[#18181B] px-4 py-2.5 border-b border-[#27272A] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
                          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#D4D4D8]">
                            {dept.name}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-[#A1A1AA]">
                          Catalog Facet
                        </span>
                      </div>

                      {/* Items List */}
                      <div className="py-1.5 max-h-[380px] overflow-y-auto">
                        {dept.items.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center justify-between px-4 py-2.5 hover:bg-[#1E1E22] transition-colors border-b border-[#1E1E22]/40 last:border-0"
                          >
                            <span className="text-xs font-medium text-[#D4D4D8] group-hover:text-white group-hover:translate-x-0.5 transition-all">
                              {sub.label}
                            </span>
                            <div className="flex items-center gap-1.5">
                              {sub.count !== undefined && (
                                <span className="text-[10px] font-mono text-[#71717A] group-hover:text-[#FFE600] transition-colors">
                                  {sub.count}
                                </span>
                              )}
                              <ChevronRight className="w-3.5 h-3.5 text-[#52525B] group-hover:text-[#FFE600] group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown Footer */}
                      <Link
                        href={dept.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block bg-[#09090B] px-4 py-2.5 text-center text-xs font-bold text-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors font-mono tracking-wider uppercase border-t border-[#27272A]"
                      >
                        {dept.viewAllText}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            {/* All Departments Mega Flyout Trigger (Image 3) */}
            <div
              className="relative py-6 shrink-0 ml-1 xl:ml-3"
              onMouseEnter={handleDeptsMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-xs font-black uppercase tracking-wider transition-colors py-1.5 flex items-center gap-2 px-3.5 rounded-sm border cursor-pointer whitespace-nowrap ${
                  isAllDeptsOpen
                    ? "border-[#FFE600] bg-[#FFE600]/10 text-[#FFE600]"
                    : "border-[#27272A] hover:border-[#FFE600]/40 text-[#D4D4D8] hover:text-[#FFE600]"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#FFE600] shrink-0" />
                <span className="whitespace-nowrap">All Departments</span>
                <ChevronDown
                  className={`w-3 h-3 text-[#A1A1AA] transition-transform duration-200 shrink-0 ${
                    isAllDeptsOpen ? "rotate-180 text-[#FFE600]" : ""
                  }`}
                />
              </button>

              {/* All 13 Categories Menu (Exact Match Image 3) */}
              {isAllDeptsOpen && (
                <div
                  onMouseEnter={handleDeptsMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full right-0 xl:left-0 mt-0 w-80 bg-[#121214] border border-[#27272A] border-t-2 border-t-[#FFE600] rounded-b-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden"
                >
                  <div className="bg-[#18181B] px-4 py-2.5 border-b border-[#27272A] flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#FFE600] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" /> Store Departments
                    </span>
                    <span className="text-[10px] font-mono text-[#A1A1AA]">
                      13 Categories
                    </span>
                  </div>

                  <div className="py-1 max-h-[420px] overflow-y-auto">
                    {ALL_13_CATEGORIES.map((cat, idx) => (
                      <Link
                        key={idx}
                        href={cat.href}
                        onClick={() => setIsAllDeptsOpen(false)}
                        className="group flex items-center justify-between px-4 py-2 hover:bg-[#1E1E22] transition-colors border-b border-[#1E1E22]/40 last:border-0"
                      >
                        <span className="text-xs font-medium text-[#D4D4D8] group-hover:text-white group-hover:translate-x-0.5 transition-all">
                          {cat.label}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-[#71717A] group-hover:text-[#FFE600] transition-colors">
                            {cat.count}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#52525B] group-hover:text-[#FFE600] group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/store"
                    onClick={() => setIsAllDeptsOpen(false)}
                    className="block bg-[#09090B] px-4 py-2.5 text-center text-xs font-bold text-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors font-mono tracking-wider uppercase border-t border-[#27272A]"
                  >
                    Explore Complete Inventory (2,660) →
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Search, Login / Account Dropdown, & Cart Button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 flex-nowrap">
            <Link
              href="/store"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#27272A] text-[#A1A1AA] hover:text-white transition-colors"
              title="Search Catalog"
            >
              <Search className="w-4 h-4" />
            </Link>

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
  );
}
