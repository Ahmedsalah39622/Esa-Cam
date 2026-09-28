"use client";

import Link from "next/link";

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
  const logoByBrand = (brand: Brand) => BRAND_LOGOS[brand.search.trim().toLowerCase()] || brand.logo;
  const visibleBrands = brands.filter((brand) => Boolean(logoByBrand(brand)));
  const brandSequence = animated
    ? [...visibleBrands, ...visibleBrands.slice(0, Math.min(2, visibleBrands.length))]
    : visibleBrands;

  return (
    <section className="w-full overflow-hidden bg-white py-7 sm:py-9">
      <div className="mx-auto max-w-[1230px] px-5 sm:px-8">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg font-medium text-black sm:text-xl">Brands</h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className={`flex gap-1 py-1 sm:gap-3 ${animated ? "w-max animate-marquee-slow" : "flex-wrap"}`}>
            {(animated ? [0, 1] : [0]).map((copy) => (
              <div key={copy} className="flex shrink-0 gap-1 sm:gap-3" aria-hidden={copy === 1}>
                {brandSequence.map((brand, index) => {
                  const isRepeated = index >= visibleBrands.length;
                  return (
                    <Link
                      key={`${copy}-${brand.name}-${index}`}
                      href={`/store?brand=${encodeURIComponent(brand.search)}`}
                      onClick={onBrandClick ? (event) => {
                        event.preventDefault();
                        onBrandClick(brand.search);
                      } : undefined}
                      aria-label={`Shop ${brand.name} products`}
                      aria-hidden={copy === 1 || isRepeated}
                      tabIndex={copy === 1 || isRepeated ? -1 : undefined}
                      className={`group flex h-[138px] w-[112px] shrink-0 flex-col items-center justify-between px-2 py-4 sm:h-[154px] sm:w-[158px] sm:px-4 sm:py-5 lg:h-[156px] lg:w-[180px] ${
                        selectedBrands.includes(brand.search) ? "rounded-2xl bg-secondary ring-2 ring-foreground" : ""
                      }`}
                    >
                      <span className="flex h-[76px] w-full items-center justify-center sm:h-[88px]">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}