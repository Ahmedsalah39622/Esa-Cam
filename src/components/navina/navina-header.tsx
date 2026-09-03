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
} from "lucide-react";

export function NavinaHeader() {
  const { cartItemCount, setIsCartOpen, homepageContent } = useStore();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const announcement = homepageContent?.announcement || {
    announcementText: "OFFICIAL AUTHORIZED CINEMA & OPTICS DISTRIBUTOR",
    courierText: "VIP White-Glove Courier across Egypt",
    courierLink: "/store",
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

  const navLinks = [
    { name: "Cameras", href: "/store" },
    { name: "Z-Mount & Optics", href: "/store" },
    { name: "Lighting & Sound", href: "/store" },
    { name: "Pre-Owned Gear", href: "/store" },
    { name: "Studio Solutions", href: "#studios" },
  ];

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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left: Hamburger (Mobile) + Nikon-Style Brand Logo */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#FFE600] transition-colors p-1 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Nikon-Inspired Logo Block */}
            <Link href="/" className="flex items-center group">
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

          {/* Center: Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-[#D4D4D8] hover:text-[#FFE600] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFE600] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Right: Search, Login / Account Dropdown, & Cart Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/store"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#27272A] text-[#A1A1AA] hover:text-white transition-colors"
              title="Search Catalog"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Login / User Account Menu */}
            {isAuthenticated ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border transition-colors cursor-pointer text-xs font-bold font-sans ${
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
                        <Link
                          href="/dashboard"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg text-[#FFE600] font-bold hover:bg-[#FFE600]/10 transition-colors"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Admin HQ Dashboard</span>
                        </Link>
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
                className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white hover:text-[#FFE600] px-3 py-2 rounded-sm hover:bg-[#18181B] border border-transparent hover:border-[#27272A] transition-all font-sans"
                title="Sign In / Admin Access"
              >
                <User className="w-3.5 h-3.5 text-[#FFE600]" />
                <span className="hidden sm:inline">LOGIN</span>
              </Link>
            )}

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2.5 bg-[#FFE600] hover:bg-[#FFD000] text-black px-4 sm:px-5 py-2.5 rounded-sm text-xs font-black tracking-widest uppercase transition-all duration-200 hover:scale-105 cursor-pointer shadow-md font-sans"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CART</span>
              {cartItemCount > 0 && (
                <span className="bg-black text-[#FFE600] text-[10px] font-mono font-black px-1.5 py-0.5 rounded-sm">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#27272A] bg-[#0A0A0A] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-black uppercase tracking-wider text-white hover:text-[#FFE600] py-2 border-b border-[#1F1F23]"
              >
                {link.name}
              </Link>
            ))}

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
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 text-center py-2 px-3 bg-[#FFE600] text-black font-bold text-xs uppercase rounded-sm hover:bg-[#FFD000]"
                    >
                      HQ Dashboard
                    </Link>
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
