"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

type Brand = {
  name: string;
  search: string;
  logo?: string;
};

const FEATURED_BRANDS: Brand[] = [
  { name: "Neewer", search: "Neewer", logo: "/brands/neewer.png" },
  { name: "Nikon", search: "Nikon", logo: "/brands/nikon.svg" },
  { name: "RED", search: "RED", logo: "/brands/red.svg" },
  { name: "Sony", search: "Sony", logo: "/brands/sony.svg" },
  { name: "Canon", search: "Canon", logo: "/brands/canon.png" },
  { name: "DJI", search: "DJI", logo: "/brands/dji.jpg" },
  { name: "FeelWorld", search: "FeelWorld", logo: "/brands/feelworld.png" },
];

const BRAND_LOGOS: Record<string, string> = {
  canon: "/brands/canon.png",
  dji: "/brands/dji.jpg",
  feelworld: "/brands/feelworld.png",
  fujifilm: "/brands/fujifilm.svg",
  godox: "/brands/godox.svg",
  gopro: "/brands/gopro.svg",
  hohem: "/brands/hohem.svg",
  neewer: "/brands/neewer.png",
  nikon: "/brands/nikon.svg",
  red: "/brands/red.svg",
  sony: "/brands/sony.svg",
};

interface BrandMarqueeProps {
  brands?: Brand[];
  selectedBrands?: string[];
  onBrandClick?: (brand: string) => void;
  animated?: boolean;
}

export function BrandMarquee({
  brands = FEATURED_BRANDS,
  selectedBrands = [],
  onBrandClick,
  animated = true,
}: BrandMarqueeProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  const isPointerDown = useRef(false);
  const lastInteractionAt = useRef(0);
  const logoByBrand = (brand: Brand) => BRAND_LOGOS[brand.search.trim().toLowerCase()] || brand.logo;
  const visibleBrands = brands.filter((brand) => Boolean(logoByBrand(brand)));

  useEffect(() => {
    if (!animated || !emblaApi || visibleBrands.length < 2) return;

    const interval = window.setInterval(() => {
      if (!isPointerDown.current && Date.now() - lastInteractionAt.current >= 3500) {
        emblaApi.scrollNext();
      }
    }, 3500);

    return () => window.clearInterval(interval);
  }, [animated, emblaApi, visibleBrands.length]);

  const brandSequence = visibleBrands;

  return (
    <section className="w-full overflow-hidden bg-white py-7 sm:py-9">
      <div className="mx-auto max-w-[1230px] px-5 sm:px-8">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg font-medium text-black sm:text-xl">Brands</h2>
        </div>

        <div
          ref={animated ? emblaRef : undefined}
          className="relative w-full overflow-hidden touch-pan-y"
          onPointerDown={() => {
            isPointerDown.current = true;
            lastInteractionAt.current = Date.now();
          }}
          onPointerUp={() => {
            isPointerDown.current = false;
            lastInteractionAt.current = Date.now();
          }}
          onPointerCancel={() => {
            isPointerDown.current = false;
            lastInteractionAt.current = Date.now();
          }}
        >
          <div className={`flex gap-1 py-1 sm:gap-3 ${animated ? "cursor-grab active:cursor-grabbing" : "flex-wrap"}`}>
            {brandSequence.map((brand) => {
                const needsDarkLogoSurface = brand.name === "Neewer" || brand.name === "Sony";
                return (
                  <Link
                    key={brand.name}
                    href={`/store?brand=${encodeURIComponent(brand.search)}`}
                    onClick={onBrandClick ? (event) => {
                      event.preventDefault();
                      onBrandClick(brand.search);
                    } : undefined}
                    aria-label={`Shop ${brand.name} products`}
                    className={`group flex h-[138px] w-[112px] shrink-0 flex-col items-center justify-between px-2 py-4 sm:h-[154px] sm:w-[158px] sm:px-4 sm:py-5 lg:h-[156px] lg:w-[180px] ${
                      selectedBrands.includes(brand.search) ? "rounded-2xl bg-secondary ring-2 ring-foreground" : ""
                    }`}
                  >
                    <span className={`flex h-[76px] w-full items-center justify-center sm:h-[88px] ${needsDarkLogoSurface ? "rounded-lg bg-[#111111] px-3" : ""}`}>
                      {logoByBrand(brand) ? (
                        <img
                          src={logoByBrand(brand)}
                          alt={`${brand.name} logo`}
                          className="max-h-full max-w-[82%] object-contain transition-transform duration-200 group-hover:scale-105"
                        />
                      ) : (
                        <span className="text-center text-lg font-bold text-muted-foreground">{brand.name}</span>
                      )}
                    </span>
                    <span className="text-center text-sm font-medium text-[#171717] sm:text-base">
                      {brand.name}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}