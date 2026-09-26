"use client";

import Link from "next/link";

const FEATURED_BRANDS = [
  { name: "Canon", search: "Canon", logo: "/brands/canon.png" },
  { name: "Comica", search: "Comica", logo: "/brands/comica.jpg" },
  { name: "Dji", search: "DJI", logo: "/brands/dji.jpg" },
  { name: "Sigma", search: "Sigma", logo: "/brands/sigma.png" },
];

const BRAND_SEQUENCE = [
  ...FEATURED_BRANDS,
  FEATURED_BRANDS[0],
  FEATURED_BRANDS[1],
];

export function BrandMarquee() {
  return (
    <section className="w-full overflow-hidden bg-white py-7 sm:py-9">
      <div className="mx-auto max-w-[1230px] px-5 sm:px-8">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg font-medium text-black sm:text-xl">Brands</h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee-slow gap-1 py-1 sm:gap-3">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-1 sm:gap-3" aria-hidden={copy === 1}>
                {BRAND_SEQUENCE.map((brand, index) => {
                  const isRepeated = index >= FEATURED_BRANDS.length;
                  return (
                    <Link
                      key={`${copy}-${brand.name}-${index}`}
                      href={`/store?brand=${encodeURIComponent(brand.search)}`}
                      aria-label={`Shop ${brand.name} products`}
                      aria-hidden={copy === 1 || isRepeated}
                      tabIndex={copy === 1 || isRepeated ? -1 : undefined}
                      className="group flex h-[138px] w-[112px] shrink-0 flex-col items-center justify-between px-2 py-4 sm:h-[154px] sm:w-[158px] sm:px-4 sm:py-5 lg:h-[156px] lg:w-[180px]"
                    >
                      <span className="flex h-[76px] w-full items-center justify-center sm:h-[88px]">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="max-h-full max-w-[82%] object-contain transition-transform duration-200 group-hover:scale-105"
                        />
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