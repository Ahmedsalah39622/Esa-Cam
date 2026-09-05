"use client";

import React from "react";
import { useStore, Currency } from "@/context/store-context";
import { PhoneCall, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar() {
  const { currency, setCurrency, homepageContent } = useStore();

  const hotline = homepageContent?.footer?.hotline || "+20 1092298665";
  const whatsappNumber = homepageContent?.footer?.whatsappNumber;
  const announcement = homepageContent?.announcement || {
    announcementText: "OFFICIAL AUTHORIZED CINEMA & OPTICS DISTRIBUTOR",
    courierText: "VIP White-Glove Courier across Egypt",
    courierLink: "/store",
  };

  return (
    <aside aria-label="Announcement" className="w-full bg-foreground text-background text-xs py-2 px-4 border-b border-border/20 z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left message with badge */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-amber-400/15 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-amber-400" /> ESA PRO
          </span>
          <p className="text-[11px] sm:text-xs truncate font-medium">
            {announcement.announcementText || "OFFICIAL AUTHORIZED CINEMA & OPTICS DISTRIBUTOR"}
          </p>
        </div>

        {/* Right tools: Currency Selector, Hotline & Trade-In */}
        <div className="flex items-center gap-4 text-[11px] shrink-0 ml-auto">
          {hotline && (
            <a
              href={`tel:${hotline.replace(/[^0-9+]/g, "")}`}
              className="hidden md:flex items-center gap-1.5 opacity-90 hover:opacity-100 hover:text-amber-400 transition-all font-mono"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>{hotline}</span>
            </a>
          )}

          {whatsappNumber && (
            <>
              <span className="hidden md:inline-block opacity-30">|</span>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1 text-emerald-400 font-bold hover:underline"
              >
                <span>WhatsApp</span>
              </a>
            </>
          )}

          <span className="hidden md:inline-block opacity-30">|</span>

          <Link
            href={announcement.courierLink || "/store"}
            className="hover:underline opacity-80 hover:opacity-100 transition-opacity"
          >
            {announcement.courierText || "Store Catalog"}
          </Link>

          <span className="opacity-30">|</span>

          {/* Currency Dropdown */}
          <div className="flex items-center gap-1 bg-background/10 hover:bg-background/20 px-2 py-0.5 rounded-md transition-colors">
            <Globe className="w-3 h-3 opacity-80" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-transparent text-background font-mono text-[11px] cursor-pointer focus:outline-hidden"
              aria-label="Select Currency"
            >
              <option value="USD" className="text-foreground bg-card">USD ($)</option>
              <option value="EGP" className="text-foreground bg-card">EGP (E£)</option>
              <option value="SAR" className="text-foreground bg-card">SAR (ر.س)</option>
              <option value="AED" className="text-foreground bg-card">AED (د.إ)</option>
              <option value="EUR" className="text-foreground bg-card">EUR (€)</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
