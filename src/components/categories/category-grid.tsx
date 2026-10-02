import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
} from "lucide-react";

interface ShopCategory {
  key: string;
  label: string;
  href: string;
  image: string;
}

const SHOP_CATEGORIES: ShopCategory[] = [
  { key: "cameras", label: "Cameras", href: "/store?cat=cameras", image: "https://icamstore.net/wp-content/uploads/2026/06/Canon-PowerShot-IXUS-285-HS-Digital-Camera-Black.jpg" },
  { key: "lenses", label: "Lenses", href: "/store?cat=lenses", image: "https://icamstore.net/wp-content/uploads/2024/10/1711439138_1817655.jpg" },
  { key: "accessories", label: "Accessories", href: "/store?cat=accessories", image: "https://icamstore.net/wp-content/uploads/2023/12/1-86.jpg" },
  { key: "audio", label: "Audio & Video", href: "/store?cat=audio", image: "https://icamstore.net/wp-content/uploads/2024/09/1706172411_IMG_2171847.jpg" },
  { key: "flashes", label: "Flashes", href: "/store?cat=lighting&q=flash", image: "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1mid-S-TTL-On-Camera-Flash-for-Sony.jpg" },
  { key: "lighting", label: "Lighting", href: "/store?cat=lighting", image: "https://icamstore.net/wp-content/uploads/2025/02/5eb2585839463c8b17046fd6b7e04ef3_4005c0b7-59d8-41a5-b227-ea369fa34314.jpg" },
  { key: "memory-cards", label: "Memory Cards", href: "/store?cat=accessories&q=memory+card", image: "https://icamstore.net/wp-content/uploads/2025/12/1643029255_IMG_1683141-2.jpg" },
  { key: "gimbals", label: "Gimbals", href: "/store?cat=gimbals", image: "https://icamstore.net/wp-content/uploads/2026/05/DJI-Osmo-8P.jpg" },
  { key: "tripods", label: "Tripods & Supports", href: "/store?cat=accessories&q=tripod", image: "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-73-Aluminum-Travel-Tripod-with-Fluid-Head-KF09.172.jpg" },
  { key: "deals", label: "Deals", href: "/store?cat=deals", image: "/categories/deals.png" },
];

export function CategoryGrid() {
  return (
    <section id="categories" className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1230px] px-5 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="mb-1 text-xs font-bold uppercase text-[#71717A]">Find your next setup</p>
            <h2 className="text-2xl font-black text-[#111111] sm:text-3xl">Shop by category</h2>
            <p className="mt-1 text-sm text-[#71717A]">No gear trivia required.</p>
          </div>
          <Link href="/store" className="flex shrink-0 items-center gap-1 text-xs font-bold uppercase text-black hover:text-[#8A7800]">
            View all <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.055 } } }}
          className="mobile-first-reveal-list grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5"
        >
          {SHOP_CATEGORIES.map((category) => (
            <motion.div
              key={category.key}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.36, ease: "easeOut" }}
              className="mobile-first-reveal-item"
            >
              <Link
                href={category.href}
                aria-label={`Shop ${category.label}`}
                className="group relative block min-w-0 overflow-hidden bg-white"
              >
                <Image
                  src={category.image}
                  alt={category.label}
                  width={320}
                  height={320}
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 23vw, 220px"
                  className="aspect-square w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {category.key !== "deals" && (
                  <span className="block px-1 pb-3 text-center text-sm font-semibold leading-tight text-[#171717]">
                    {category.label}
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}