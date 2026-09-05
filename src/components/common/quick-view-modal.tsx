"use client";

import { useEffect } from "react";
import { useStore } from "@/context/store-context";
import { useRouter } from "next/navigation";

export function QuickViewModal() {
  const router = useRouter();
  const { quickViewProduct, setQuickViewProduct } = useStore();

  useEffect(() => {
    if (quickViewProduct?.id) {
      const id = quickViewProduct.id;
      setQuickViewProduct(null);
      router.push(`/store/${id}`);
    }
  }, [quickViewProduct, router, setQuickViewProduct]);

  return null;
}
