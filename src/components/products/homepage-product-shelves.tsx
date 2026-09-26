"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Product, PRODUCTS } from "@/data/products";
import { useStore } from "@/context/store-context";
import { ProductCard } from "@/components/products/product-card";

interface ProductShelfProps {
  title: string;
  href: string;
  products: Product[];
}

function ProductShelf({ title, href, products }: ProductShelfProps) {
  if (products.length === 0) return null;

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1230px] px-5 sm:px-8">
        <div className="mb-5 flex items-center justify-between gap-4 sm:mb-7">
          <h2 className="text-xl font-black text-[#111111] sm:text-2xl">{title}</h2>
          <Link href={href} className="flex shrink-0 items-center gap-1 text-xs font-bold uppercase text-black hover:text-[#8A7800]">
            View all <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="mobile-first-reveal-list grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.34, ease: "easeOut" }}
              className="mobile-first-reveal-item min-w-0"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function HomepageProductShelves() {
  const { products: storeProducts } = useStore();
  const products = storeProducts.length ? storeProducts : PRODUCTS;
  const bestSellers = [...products]
    .sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller) || b.reviewsCount - a.reviewsCount)
    .slice(0, 6);
  const cameras = products.filter((product) => product.category === "cameras").slice(0, 6);
  const lenses = products.filter((product) => product.category === "lenses").slice(0, 6);
  const offers = products
    .filter((product) => product.isSale || Boolean(product.originalPrice && product.originalPrice > product.price))
    .slice(0, 6);

  return (
    <>
      <ProductShelf title="Best sellers" href="/store" products={bestSellers} />
      <ProductShelf title="Cameras" href="/store?cat=cameras" products={cameras} />
      <ProductShelf title="Lenses & optics" href="/store?cat=lenses" products={lenses} />
      <ProductShelf title="Special offers" href="/store?cat=deals" products={offers} />
    </>
  );
}