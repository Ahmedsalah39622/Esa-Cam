"use client";

import React from "react";
import Image from "next/image";
import { Star, Camera, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CommunityGallery() {
  const testimonials = [
    {
      name: "Tariq Al-Sayed",
      role: "Director of Photography · Cairo",
      project: "Commercial Campaigns & Ramadan TV Series",
      gear: "Sony FX3 Cinema Line + Sony 24-70 GM II",
      comment: "ESA CAM is the only camera house in Egypt where the staff actually knows cinema codecs and color pipelines. Sourced our full FX3 multi-cam package with custom timecode sync in 24 hours.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      name: "Nourhan Medhat",
      role: "Documentary Filmmaker & Director",
      project: "Red Sea Wildlife Docuseries",
      gear: "Canon EOS R5 C 8K + DJI Mic 2 Kit",
      comment: "When shooting in desert and salt environments, having 100% authorized gear with direct local warranty is non-negotiable. ESA cleaned and calibrated our sensor for free right after our shoot.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      name: "Karim El-Shazly",
      role: "Studio Lead · Cairo Creative House",
      project: "Fashion & Commercial Lookbooks",
      gear: "Aputure 600d Pro + Nanlite PavoTube II 30C",
      comment: "Their studio lighting inventory is unmatched. The Bowens mount modifiers, DMX tubes, and C-stands arrived pre-tested. Seamless 0% financing through our studio account.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      name: "Youssef Fayed",
      role: "Wedding & High-End Event Filmmaker",
      project: "Luxury Destination Weddings",
      gear: "DJI RS 4 Pro + Sony FE 50mm f/1.2 GM",
      comment: "The trade-in desk gave me a top-dollar valuation for my old A7 III body. Upgraded to the new RS 4 Pro combo and couldn't be happier with the automated axis locks.",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="uppercase font-mono text-[10px] tracking-wider mb-2">
            Shot With Gear from ESA CAM
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Trusted by the Region&apos;s Top Creators
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Hear from directors of photography, commercial filmmakers, and studio producers who rely on ESA CAM daily on set.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl border border-border bg-card shadow-xs flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Rating & Gear pill */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Camera className="w-3 h-3" /> {t.gear}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Creator Info */}
              <div className="pt-4 border-t border-border/60 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-secondary shrink-0 border border-border">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-foreground flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
