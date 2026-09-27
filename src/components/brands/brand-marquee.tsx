"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useStore } from "@/context/store-context";

const FEATURED_BRANDS: BrandMarqueeItem[] = [
  { name: "Canon", search: "Canon", logo: "/brands/canon.png" },
  { name: "Comica", search: "Comica", logo: "/brands/comica.jpg" },
  { name: "Dji", search: "DJI", logo: "/brands/dji.jpg" },
  { name: "Sigma", search: "Sigma", logo: "/brands/sigma.png" },
];

const BRAND_LOGOS: Record<string, string> = {};
FEATURED_BRANDS.forEach((brand) => {
  if (brand.logo) BRAND_LOGOS[brand.name.toLowerCase()] = brand.logo;
});
Object.assign(BRAND_LOGOS, {
  atomos: "/brands/atomos.svg",
  benro: "/brands/benro.png",
  "blackmagic design": "/brands/blackmagicdesign.svg",
  feelworld: "/brands/feelworld.png",
  fujifilm: "/brands/fujifilm.svg",
  godox: "/brands/godox.svg",
  gopro: "/brands/gopro.svg",
  hohem: "/brands/hohem.svg",
  hollyland: "/brands/hollyland.png",
  insta360: "/brands/insta360.svg",
  jmary: "/brands/jmary.jpg",
  "k&f concept": "/brands/kfconcept.png",
  kingjoy: "/brands/kingjoy.png",
  kodak: "/brands/kodak.svg",
  lexar: "/brands/lexar.svg",
  neewer: "/brands/neewer.png",
  nikon: "/brands/nikon.svg",
  red: "/brands/red.svg",
  rode: "/brands/rode.svg",
  sennheiser: "/brands/sennheiser.svg",
  sony: "/brands/sony.svg",
  zoom: "/brands/zoom.svg",
});

export interface BrandMarqueeItem {
  name: string;
  search: string;
  logo?: string;
}

interface BrandMarqueeProps {
  brands?: BrandMarqueeItem[];
  selectedBrands?: string[];
  onBrandClick?: (brand: string) => void;
}

export function BrandMarquee({
  brands,
  selectedBrands = [],
  onBrandClick,
}: BrandMarqueeProps) {
  const { products, brands: managedBrands } = useStore();
  const managedBrandLogos = useMemo(
    () => new Map(managedBrands.filter((brand) => brand.logoImage).map((brand) => [brand.name.trim().toLowerCase(), brand.logoImage!])),
    [managedBrands]
  );
  const displayedBrands = useMemo(() => {
    const sourceBrands: BrandMarqueeItem[] = brands ?? (() => {
      const catalogBrands = new Map<string, string>();
      products.forEach((product) => {
        if (product.brand) catalogBrands.set(product.brand.trim().toLowerCase(), product.brand.trim());
      });
      managedBrands.filter((brand) => brand.isActive).forEach((brand) => {
        catalogBrands.set(brand.name.trim().toLowerCase(), brand.name.trim());
      });

      const allNames = Array.from(catalogBrands.values()).sort((first, second) => first.localeCompare(second));
      return (allNames.length > 0 ? allNames : FEATURED_BRANDS.map((brand) => brand.name)).map((name) => ({
        name,
        search: name,
      }));
    })();

    return sourceBrands
      .map((brand) => ({
        ...brand,
        logo: brand.logo ?? managedBrandLogos.get(brand.name.trim().toLowerCase()) ?? BRAND_LOGOS[brand.name.toLowerCase()],
      }))
      .filter((brand) => Boolean(brand.logo));
  }, [brands, managedBrandLogos, managedBrands, products]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const firstCopyRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; scrollLeft: number } | null>(null);
  const draggedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    const container = scrollRef.current;
    const firstSet = firstSetRef.current;
    if (!container || !firstSet) return;

    const updateCopyCount = () => {
      const setWidth = firstSet.offsetWidth;
      if (!setWidth) return;

      setRepeatCount(Math.max(1, Math.ceil(container.clientWidth / setWidth) + 1));
    };

    updateCopyCount();
    const observer = new ResizeObserver(updateCopyCount);
    observer.observe(container);
    observer.observe(firstSet);
    return () => observer.disconnect();
  }, [displayedBrands.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    dragStartRef.current = { x: event.clientX, scrollLeft: scrollRef.current.scrollLeft };
    draggedRef.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || !scrollRef.current) return;
    const delta = event.clientX - dragStartRef.current.x;
    if (Math.abs(delta) > 4 && !draggedRef.current) {
      draggedRef.current = true;
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (!draggedRef.current) return;

    const copyWidth = firstCopyRef.current?.offsetWidth ?? 0;
    const nextScrollLeft = dragStartRef.current.scrollLeft - delta;
    scrollRef.current.scrollLeft = copyWidth > 0
      ? ((nextScrollLeft % copyWidth) + copyWidth) % copyWidth
      : nextScrollLeft;
  };

  const handlePointerUp = () => {
    dragStartRef.current = null;
    setIsDragging(false);
    if (draggedRef.current) {
      window.setTimeout(() => {
        draggedRef.current = false;
      }, 0);
    }
  };

  const handleBrandClick = (brand: string) => (event: React.MouseEvent) => {
    if (draggedRef.current) {
      event.preventDefault();
      event.stopPropagation();
      draggedRef.current = false;
      return;
    }
    onBrandClick?.(brand);
  };

  return (
    <section className="w-full overflow-hidden bg-white py-4 sm:py-5">
      <div className="mx-auto max-w-[1230px] px-5 sm:px-8">
        <h2 className="mb-2 text-lg font-medium text-black sm:mb-3 sm:text-xl">Brands</h2>

        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`flex w-full overflow-x-auto overscroll-x-contain py-1 touch-pan-x select-none no-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <div className="flex w-max animate-marquee-slow" style={{ animationDuration: "55s" }}>
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                ref={copyIndex === 0 ? firstCopyRef : undefined}
                aria-hidden={copyIndex > 0}
                className="flex shrink-0"
              >
                {Array.from({ length: repeatCount }, (_, setIndex) => (
                  <div
                    key={`${copyIndex}-${setIndex}`}
                    ref={copyIndex === 0 && setIndex === 0 ? firstSetRef : undefined}
                    className="flex shrink-0 gap-1 pr-1 sm:gap-3 sm:pr-3"
                  >
                    {displayedBrands.map((brand) => {
                      const logo = brand.logo;
                      const isSelected = selectedBrands.some((selected) => selected.toLowerCase() === brand.search.toLowerCase());
                      const className = `group flex h-[112px] w-[112px] shrink-0 flex-col items-center justify-between rounded-lg px-2 py-3 transition-colors sm:h-[130px] sm:w-[158px] sm:px-4 sm:py-4 ${isSelected ? "bg-secondary" : "hover:bg-secondary/50"}`;
                      const content = (
                        <>
                          <span className="flex h-[62px] w-full items-center justify-center sm:h-[78px]">
                            <img
                              src={logo}
                              alt={`${brand.name} logo`}
                              draggable={false}
                              loading="lazy"
                              onError={(event) => {
                                event.currentTarget.style.visibility = "hidden";
                              }}
                              className="max-h-[48px] max-w-[82%] object-contain transition-transform duration-200 group-hover:scale-105 sm:max-h-[58px]"
                            />
                          </span>
                          <span className="text-center text-sm font-medium text-[#171717] sm:text-base">
                            {brand.name}
                          </span>
                        </>
                      );
                      const tabIndex = copyIndex > 0 ? -1 : undefined;

                      return onBrandClick ? (
                        <button
                          key={`${copyIndex}-${setIndex}-${brand.search}`}
                          type="button"
                          onClick={handleBrandClick(brand.search)}
                          aria-label={`Filter by ${brand.name}`}
                          aria-pressed={isSelected}
                          tabIndex={tabIndex}
                          className={className}
                        >
                          {content}
                        </button>
                      ) : (
                        <Link
                          key={`${copyIndex}-${setIndex}-${brand.search}`}
                          href={`/store?brand=${encodeURIComponent(brand.search)}`}
                          onClick={handleBrandClick(brand.search)}
                          aria-label={`Shop ${brand.name} products`}
                          tabIndex={tabIndex}
                          className={className}
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}