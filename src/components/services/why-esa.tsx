"use client";

import React from "react";
import { Wrench, Truck, Headphones, RotateCcw, CreditCard, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WhyEsa() {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      title: "100% Authorized Genuine Dealer",
      description: "Direct partnership with Sony Alpha, Canon Cinema EOS, RED, Aputure, and DJI with original factory warranties and certified serials.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-primary" />,
      title: "Same-Day Sensor Cleaning Desk",
      description: "Free lifetime professional wet/dry sensor cleaning, firmware flashing, and lens focus calibration for all customers at our Cairo Flagship.",
    },
    {
      icon: <Truck className="w-5 h-5 text-primary" />,
      title: "Insured Fragile-Cine Courier",
      description: "High-value cinema cameras & glass shipped in foam-padded, climate-controlled, tamper-evident armored packaging.",
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-primary" />,
      title: "14-Day Lens & Body Exchange",
      description: "Test optical sharpness and ergonomic fit on your actual commercial productions with complete peace of mind.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-primary" />,
      title: "0% Installment & Studio Credit",
      description: "Flexible financing up to 24 months via leading Middle East banks, ValU, Tabby, Tamara, and commercial studio credit lines.",
    },
    {
      icon: <Headphones className="w-5 h-5 text-primary" />,
      title: "24/7 Cine Engineer Hotline",
      description: "Direct phone and WhatsApp support from working DP's and sound engineers to troubleshoot on-set technical issues.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="uppercase font-mono text-[10px] tracking-wider mb-2">
            The ESA Standard
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Why Professionals Choose ESA CAM
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            We don&apos;t just sell boxes. We build, calibrate, and support the gear that powers award-winning Egyptian and regional productions.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-foreground/20 hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="font-bold text-base text-foreground leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
