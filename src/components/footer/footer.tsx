"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { useStore } from "@/context/store-context";
import { toast } from "sonner";

export function Footer() {
  const { homepageContent } = useStore();
  const footerData = homepageContent?.footer || {
    tagline: "Receive firmware updates, VIP optical release notices, and exclusive technical masterclasses directly to your inbox.",
    hotline: "+20 2 2736 3456",
    email: "pro@esacam.com",
    address: "Zamalek Cinema Hub, Cairo",
    copyright: "ESA CAM. Authorized Cinema Distributor.",
    instagramUrl: "https://instagram.com/esacam.store",
    youtubeUrl: "https://youtube.com/@esacam",
    tiktokUrl: "https://tiktok.com/@esacam.store",
    facebookUrl: "https://facebook.com/esacam.store",
    twitterUrl: "https://x.com/esacam_store",
    whatsappNumber: "+201023456789",
  };

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    toast.success("Subscribed to the ESA CAM Filmmaker Community!");
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#000000] text-white overflow-hidden select-none border-t border-[#27272A] min-h-[500px] flex flex-col justify-between"
    >
      {/* Top Nikon Accent Bar */}
      <div className="w-full h-[4px] bg-[#FFE600]" />

      {/* Top Main Section */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 pt-16 sm:pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 relative z-10">
        {/* Left: Community Newsletter & Headline */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FFE600] inline-block" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#A1A1AA]">
                Stay Connected
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white leading-none uppercase">
              JOIN THE <span className="text-[#FFE600]">CREATORS.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-normal leading-relaxed max-w-sm">
              {footerData.tagline}
            </p>
          </div>


          {/* Minimalist Underline Email Input */}
          <form onSubmit={handleSubscribe} className="relative max-w-xs">
            <div className="relative flex items-center border-b border-[#3F3F46] focus-within:border-[#FFE600] transition-colors duration-300 pb-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                required
                className="w-full bg-transparent text-sm text-white placeholder:text-[#71717A] focus:outline-hidden font-sans pr-10"
              />
              <button
                type="submit"
                disabled={subscribed || !email.trim()}
                className="absolute right-0 text-[#A1A1AA] hover:text-[#FFE600] transition-colors cursor-pointer disabled:opacity-30"
                title="Submit Email"
                aria-label="Submit Email"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            {subscribed && (
              <p className="text-[11px] text-[#FFE600] font-mono mt-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
                Welcome to the official creator circle.
              </p>
            )}
          </form>
        </div>

        {/* Right: Navigation Links */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
          {/* Discover */}
          <div className="space-y-5">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] border-b border-[#27272A] pb-2">
              Catalog
            </h4>
            <ul className="space-y-3 font-semibold text-[#D4D4D8]">
              <li>
                <Link href="/store" className="hover:text-[#FFE600] transition-colors duration-200">
                  Cameras &amp; Bodies
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-[#FFE600] transition-colors duration-200">
                  Z-Mount &amp; Cine Optics
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-[#FFE600] transition-colors duration-200">
                  Lighting &amp; Modifiers
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-[#FFE600] transition-colors duration-200">
                  Pre-Owned Certified
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] border-b border-[#27272A] pb-2">
              Channels
            </h4>
            <ul className="space-y-3 font-semibold text-[#D4D4D8]">
              {footerData.instagramUrl && (
                <li>
                  <a
                    href={footerData.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FFE600] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    Instagram
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              )}
              {footerData.youtubeUrl && (
                <li>
                  <a
                    href={footerData.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FFE600] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    YouTube
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              )}
              {footerData.tiktokUrl && (
                <li>
                  <a
                    href={footerData.tiktokUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FFE600] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    TikTok
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              )}
              {footerData.facebookUrl && (
                <li>
                  <a
                    href={footerData.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FFE600] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    Facebook
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              )}
              {footerData.twitterUrl && (
                <li>
                  <a
                    href={footerData.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FFE600] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    X (Twitter)
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              )}
              {footerData.whatsappNumber && (
                <li>
                  <a
                    href={`https://wa.me/${footerData.whatsappNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FFE600] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    WhatsApp
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Showroom Hubs */}
          <div className="space-y-5 col-span-2 sm:col-span-1">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] border-b border-[#27272A] pb-2">
              Showrooms
            </h4>
            <div className="space-y-3 text-[#D4D4D8] font-semibold">
              <p className="text-xs text-white">
                Flagship Experience Centers:
              </p>
              <p className="text-[11px] text-[#A1A1AA] font-mono leading-relaxed">
                • {footerData.address}
              </p>
              <a
                href={`tel:${footerData.hotline}`}
                className="hover:text-[#FFE600] transition-colors duration-200 block text-xs font-mono text-[#FFE600]"
              >
                {footerData.hotline}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-6 border-t border-[#1F1F23] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-[11px] text-[#71717A] font-mono">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-[#FFE600] text-black px-2 py-0.5 font-black text-xs">ESA</div>
          <span className="font-black text-sm text-white tracking-widest uppercase">
            CAM
          </span>
        </div>

        {/* Copyright & Links */}
        <div className="flex flex-wrap items-center gap-4 text-center sm:text-right">
          <p>© {new Date().getFullYear()} {footerData.copyright}</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms
            </Link>

            <span>·</span>
            <Link href="/dashboard" className="text-[#FFE600] hover:underline font-bold">
              HQ Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
