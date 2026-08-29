"use client";

import React from "react";
import Image from "next/image";
import { CATEGORIES_LIST } from "@/data/products";
import { useStore } from "@/context/store-context";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CategoryGrid() {
  const { setSelectedCategory } = useStore();

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const catalogElement = document.getElementById("catalog");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <Badge variant="secondary" className="uppercase font-mono text-[10px] tracking-wider mb-2">
              Gear Departments
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Shop by Department
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-lg">
              Explore cinema cameras, optics, sound gear, and studio lighting crafted for uncompromising visual storytellers.
            </p>
          </div>

          <a
            href="#catalog"
            onClick={() => setSelectedCategory("all")}
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View Complete Inventory (400+ items)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Grid of Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_LIST.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card p-6 flex flex-col justify-between h-[280px] hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              {/* Background Cover Image with cinematic darkening gradient */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-108 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
              </div>

              {/* Top tag & Count */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold font-mono uppercase tracking-wider bg-background/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-border text-foreground">
                  {cat.tag}
                </span>
                <span className="text-xs font-mono text-muted-foreground font-semibold">
                  {cat.itemCount}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 space-y-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5 line-clamp-1">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                  <span className="truncate">{cat.brands}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
