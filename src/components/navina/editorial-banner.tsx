"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useStore } from "@/context/store-context";

export function EditorialBanner() {
  const { homepageContent } = useStore();
  const editorial = homepageContent?.editorial || {
    headerTag: "GEAR UP FOR YOUR NEXT SHOOT",
    title: "THE RIGHT KIT MAKES ALL THE DIFFERENCE",
    description:
      "Build your setup with trusted cameras, lenses, lighting and sound, with expert help when you need it.",
    image:
      "https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?auto=format&fit=crop&w=1200&q=85",
    tags: ["Cameras", "Lenses", "Audio", "Lighting"],
    ctaText: "Explore the store",
    ctaLink: "/store",
  };

  return (
    <section id="editorial" className="w-full bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-[1230px] px-5 sm:px-8">
        <div className="relative grid overflow-hidden bg-[#111111] text-white md:grid-cols-2">
          <div className="relative min-h-56 bg-[#18181B] sm:min-h-72">
            <Image
              src={editorial.image}
              alt={editorial.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-[#FFE600]">
              <span className="h-2 w-2 bg-[#FFE600]" />
              <span>{editorial.headerTag}</span>
            </div>
            <h2 className="max-w-xl text-2xl font-black uppercase leading-tight sm:text-4xl">
              {editorial.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
              {editorial.description}
            </p>
            <Link
              href={editorial.ctaLink || "/store"}
              className="mt-6 inline-flex w-fit items-center gap-2 bg-[#FFE600] px-5 py-3 text-xs font-black uppercase text-black transition-colors hover:bg-white"
            >
              <span>{editorial.ctaText || "Explore the store"}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

