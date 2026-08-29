"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { useStore } from "@/context/store-context";

export function EditorialBanner() {
  const { homepageContent } = useStore();
  const editorial = homepageContent?.editorial || {
    headerTag: "Nikon & Cinema Engineering Masterclass • 6 Min Read",
    title: "THE REVOLUTION OF LARGE-DIAMETER MOUNT OPTICS",
    description:
      "Discover how short 16mm flange geometry and giant 55mm inner diameter enable unprecedented corner-to-corner brightness, virtually zero distortion, and new frontiers in optical brilliance.",
    image:
      "https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?auto=format&fit=crop&w=1200&q=85",
    tags: ["8K Cinema", "Z-Mount Optics", "Color Science", "Anamorphic", "LiDAR AF"],
    ctaText: "Read Full Technical Paper",
    ctaLink: "/store",
  };

  const tags = editorial.tags && editorial.tags.length > 0
    ? editorial.tags
    : ["8K Cinema", "Z-Mount Optics", "Color Science", "Anamorphic", "LiDAR AF"];

  const [activeTag, setActiveTag] = useState(tags[0] || "8K Cinema");

  return (
    <section id="editorial" className="w-full bg-[#FFFFFF] text-[#000000] px-6 sm:px-10 lg:px-12 pt-4 sm:pt-6 pb-16 sm:py-24 select-none border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#000000] text-white p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative overflow-hidden shadow-2xl">
          {/* Top Yellow Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFE600]" />

          {/* Left 5 Columns: Photo */}
          <div className="lg:col-span-5 relative w-full h-72 sm:h-96 overflow-hidden bg-[#18181B] border border-[#27272A]">
            <Image
              src={editorial.image}
              alt={editorial.title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right 7 Columns: Story Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider transition-colors cursor-pointer border ${
                    activeTag === tag
                      ? "bg-[#FFE600] text-black border-[#FFE600]"
                      : "bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#FFE600] uppercase tracking-widest font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{editorial.headerTag}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white uppercase leading-tight">
                {editorial.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {editorial.description}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={editorial.ctaLink || "/store"}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FFE600] hover:text-white transition-colors group"
              >
                <span>{editorial.ctaText || "Read Full Technical Paper"}</span>
                <ArrowRight className="w-4 h-4 text-[#FFE600] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

