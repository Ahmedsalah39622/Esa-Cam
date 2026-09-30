"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ImagePlus, PackagePlus, Save, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { Product, OFFERS } from "@/data/products";
import { CURRENCIES, useStore } from "@/context/store-context";

const USD_TO_EGP = CURRENCIES.EGP.rate;

function formatEgp(amountInUsd: number) {
  return `E£${(amountInUsd * USD_TO_EGP).toLocaleString("en-EG", { maximumFractionDigits: 0 })}`;
}

const defaultForm = {
  id: "",
  name: "",
  brand: "",
  price: "",
  originalPrice: "",
  image: "",
  badge: "",
  stockStatus: "in-stock" as Product["stockStatus"],
  shortDescription: "",
  itemsText: "",
};

function normalizeOffer(form: typeof defaultForm, selectedProducts: Product[]): Product {
  const additionalItems = form.itemsText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const items = Array.from(new Set([...selectedProducts.map((product) => product.name), ...additionalItems]));

  const price = Number(form.price || 0) / USD_TO_EGP;
  const original = form.originalPrice
    ? Number(form.originalPrice) / USD_TO_EGP
    : selectedProducts.length
      ? selectedProducts.reduce((sum, product) => sum + product.price, 0)
      : undefined;
  const computedBadge = form.badge || (original && original > price ? `SAVE ${Math.round(((original - price) / original) * 100)}%` : "HOT DEAL");
  const firstProduct = selectedProducts[0];
  const brands = Array.from(new Set(selectedProducts.map((product) => product.brand)));

  return {
    id: form.id || `offer-${Date.now()}`,
    name: form.name || (firstProduct ? `${firstProduct.name} Bundle` : "New Offer"),
    brand: form.brand || (brands.length === 1 ? brands[0] : "Bundle"),
    category: "deals",
    price,
    originalPrice: original,
    rating: 4.8,
    reviewsCount: 0,
    image: form.image || firstProduct?.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    badge: computedBadge,
    isBestSeller: true,
    stockStatus: form.stockStatus || "in-stock",
    stockCount: 3,
    shortDescription: form.shortDescription || "Bundle offer created from the admin dashboard.",
    items: items.length ? items : ["Main product", "Accessory bundle"],
    bundleProductIds: selectedProducts.map((product) => product.id),
    specs: [
      { label: "Bundle", value: `${items.length || 2} items` },
      { label: "Offer", value: "Custom bundle" },
    ],
    features: ["Official warranty included", "Fast delivery", "Bundle discount"],
    inTheBox: items.length ? items : ["Main product", "Accessory bundle"],
  };
}

export default function OffersAdminPage() {
  const { products: inventoryProducts, refreshProducts } = useStore();
  const [offers, setOffers] = useState<Product[]>(OFFERS);
  const [form, setForm] = useState(defaultForm);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [productSearch, setProductSearch] = useState("");

  const selectableProducts = useMemo(
    () => inventoryProducts.filter((product) => product.category !== "deals"),
    [inventoryProducts]
  );
  const filteredProducts = useMemo(() => {
    const query = productSearch.trim().toLowerCase();
    if (!query) return selectableProducts;
    return selectableProducts.filter((product) => `${product.name} ${product.brand}`.toLowerCase().includes(query));
  }, [selectableProducts, productSearch]);
  const selectedProducts = useMemo(
    () => selectableProducts.filter((product) => selectedProductIds.includes(product.id)),
    [selectableProducts, selectedProductIds]
  );

  useEffect(() => {
    fetch("/api/offers")
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || "Could not load offers");
        setOffers(result.data as Product[]);
        if (result.persistenceAvailable === false) {
          toast.error("تم عرض العروض الافتراضية؛ قاعدة البيانات غير متاحة حاليًا");
        }
      })
      .catch((error: unknown) => {
        console.error("Could not load offers:", error);
        toast.error("تعذر تحميل العروض من قاعدة البيانات");
      });
  }, []);

  const totalSavings = useMemo(
    () => offers.reduce((sum, offer) => {
      if (!offer.originalPrice || offer.originalPrice <= offer.price) return sum;
      return sum + (offer.originalPrice - offer.price);
    }, 0),
    [offers]
  );

  const handleChange = (key: keyof typeof defaultForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("اختار ملف صورة صالح");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("حجم الصورة لازم يكون أقل من 10 ميجابايت");
      return;
    }

    try {
      const imageData = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("Could not read image"));
        reader.onload = () => {
          const image = new window.Image();
          image.onerror = () => reject(new Error("Could not process image"));
          image.onload = () => {
            const scale = Math.min(1, 1000 / Math.max(image.width, image.height));
            const canvas = document.createElement("canvas");
            canvas.width = Math.round(image.width * scale);
            canvas.height = Math.round(image.height * scale);
            const context = canvas.getContext("2d");
            if (!context) {
              reject(new Error("Could not optimize image"));
              return;
            }
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", 0.85));
          };
          image.src = String(reader.result);
        };
        reader.readAsDataURL(file);
      });
      handleChange("image", imageData);
      toast.success("تم رفع الصورة وتجهيزها");
    } catch {
      toast.error("تعذر قراءة الصورة، جرّب ملفًا آخر");
    }
  };

  const handleSave = async () => {
    if (selectedProducts.length < 2) {
      toast.error("اختار منتجين على الأقل للعرض");
      return;
    }
    if (!Number.isFinite(Number(form.price)) || Number(form.price) <= 0) {
      toast.error("أدخل السعر النهائي للعرض");
      return;
    }

    const nextOffer = normalizeOffer(form, selectedProducts);
    try {
      const response = await fetch("/api/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextOffer),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Could not save offer");
      setOffers((current) => [result.data as Product, ...current.filter((offer) => offer.id !== nextOffer.id)]);
      await refreshProducts();
      setForm(defaultForm);
      setSelectedProductIds([]);
      toast.success("تم حفظ العرض في قاعدة البيانات");
    } catch (error) {
      console.error("Could not save offer:", error);
      toast.error(error instanceof Error ? error.message : "تعذر حفظ العرض في قاعدة البيانات");
    }
  };

  const toggleProduct = (productId: string) => {
    setSelectedProductIds((current) => current.includes(productId)
      ? current.filter((id) => id !== productId)
      : [...current, productId]
    );
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/offers?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Could not delete offer");
      setOffers((prev) => prev.filter((offer) => offer.id !== id));
      toast.info("تم حذف العرض");
    } catch (error) {
      console.error("Could not delete offer:", error);
      toast.error("تعذر حذف العرض");
    }
  };

  const resetOffers = async () => {
    try {
      const response = await fetch("/api/offers?reset=true", { method: "DELETE" });
      if (!response.ok) throw new Error("Could not reset offers");
      setOffers(OFFERS);
      toast.success("تم استرجاع العروض الافتراضية");
    } catch (error) {
      console.error("Could not reset offers:", error);
      toast.error("تعذر استرجاع العروض الافتراضية");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white" dir="rtl">
      <header className="border-b border-neutral-800 bg-[#121214] sticky top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Link href="/admin-app" className="rounded-xl border border-neutral-700 p-2 text-neutral-300 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-xs text-neutral-400">Admin Panel</p>
              <h1 className="text-lg font-black">إدارة العروض</h1>
            </div>
          </div>
          <button
            onClick={resetOffers}
            className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs font-bold text-neutral-200 hover:border-neutral-500"
          >
            استرجاع الافتراضي
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-5 rounded-3xl border border-neutral-800 bg-[#121214] p-5 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[#FFE600]/10 p-2 text-[#FFE600]">
              <PackagePlus className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Create Offer</p>
              <h2 className="text-xl font-black">إضافة باقة جديدة</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-neutral-300">
              <span>اسم العرض</span>
              <input value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder="Sony Creator Kit" />
            </label>

            <label className="space-y-2 text-sm text-neutral-300">
              <span>الماركة</span>
              <input value={form.brand} onChange={(e) => handleChange("brand", e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder="Sony" />
            </label>

            <label className="space-y-2 text-sm text-neutral-300">
              <span>السعر النهائي بالجنيه المصري</span>
              <input type="number" min="1" step="1" value={form.price} onChange={(e) => handleChange("price", e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder="168888" />
            </label>

            <label className="space-y-2 text-sm text-neutral-300">
              <span>السعر قبل الخصم بالجنيه المصري</span>
              <input type="number" min="1" step="1" value={form.originalPrice} onChange={(e) => handleChange("originalPrice", e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder="190000" />
            </label>

            <div className="space-y-2 text-sm text-neutral-300 sm:col-span-2">
              <label htmlFor="offer-image-url">صورة العرض</label>
              <input id="offer-image-url" value={form.image.startsWith("data:") ? "" : form.image} onChange={(e) => handleChange("image", e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder="رابط الصورة (اختياري)" />
              <div className="flex flex-wrap items-center gap-3">
                <label htmlFor="offer-image-upload" className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs font-bold text-neutral-200 transition hover:border-[#FFE600]">
                  <ImagePlus className="h-4 w-4" />
                  رفع صورة من الجهاز
                </label>
                <input id="offer-image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
                {form.image.startsWith("data:") && (
                  <button type="button" onClick={() => handleChange("image", "")} className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300">
                    <X className="h-3.5 w-3.5" />
                    إزالة الصورة
                  </button>
                )}
              </div>
              {form.image && <img src={form.image} alt="معاينة صورة العرض" className="h-24 w-24 rounded-xl border border-neutral-700 object-cover" />}
            </div>

            <label className="space-y-2 text-sm text-neutral-300">
              <span>Badge</span>
              <input value={form.badge} onChange={(e) => handleChange("badge", e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder="SAVE 15%" />
            </label>

            <label className="space-y-2 text-sm text-neutral-300">
              <span>حالة المخزون</span>
              <select value={form.stockStatus} onChange={(e) => handleChange("stockStatus", e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]">
                <option value="in-stock">متوفر</option>
                <option value="low-stock">قليل</option>
                <option value="pre-order">مسبوق</option>
              </select>
            </label>

            <label className="space-y-2 text-sm text-neutral-300 sm:col-span-2">
              <span>وصف العرض</span>
              <textarea value={form.shortDescription} onChange={(e) => handleChange("shortDescription", e.target.value)} className="min-h-[90px] w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder="وصف سريع للباقة" />
            </label>

            <div className="space-y-2 text-sm text-neutral-300 sm:col-span-2">
              <label htmlFor="offer-inventory-search">اختيار المنتجات من المخزون</label>
              <input
                id="offer-inventory-search"
                value={productSearch}
                onChange={(event) => setProductSearch(event.target.value)}
                className="w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]"
                placeholder="ابحث بالاسم أو الماركة"
              />
              <div className="max-h-56 overflow-y-auto rounded-xl border border-neutral-700 bg-[#0d0d0f]">
                {filteredProducts.map((product) => (
                  <label key={product.id} className="flex cursor-pointer items-center gap-3 border-b border-neutral-800 px-3 py-2.5 last:border-b-0 hover:bg-neutral-800/60">
                    <input
                      type="checkbox"
                      checked={selectedProductIds.includes(product.id)}
                      onChange={() => toggleProduct(product.id)}
                      className="h-4 w-4 accent-[#FFE600]"
                    />
                    <span className="min-w-0 flex-1 truncate">{product.name} <span className="text-neutral-500">· {product.brand}</span></span>
                    <span className="shrink-0 font-mono text-xs text-neutral-400">{formatEgp(product.price)}</span>
                  </label>
                ))}
                {filteredProducts.length === 0 && <p className="px-3 py-4 text-center text-xs text-neutral-500">لا توجد منتجات مطابقة</p>}
              </div>
              <p className="text-xs text-neutral-500">المنتجات المختارة: {selectedProducts.length} · يُستخدم مجموع أسعارها كسعر قديم تلقائيًا عند تركه فارغًا.</p>
            </div>

            <label className="space-y-2 text-sm text-neutral-300 sm:col-span-2">
              <span>إضافات أخرى غير موجودة في المخزون (اختياري، كل عنصر في سطر)</span>
              <textarea value={form.itemsText} onChange={(e) => handleChange("itemsText", e.target.value)} className="min-h-[110px] w-full rounded-xl border border-neutral-700 bg-[#0d0d0f] px-3 py-2.5 text-white outline-none focus:border-[#FFE600]" placeholder={"Sony FX3\n24-70 GM lens\nWireless mic kit"} />
            </label>
          </div>

          <button onClick={handleSave} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFE600] px-4 py-3 text-sm font-black text-black transition hover:bg-[#ffe600]/90">
            <Save className="h-4 w-4" />
            حفظ العرض
          </button>
        </section>

        <aside className="space-y-5 rounded-3xl border border-neutral-800 bg-[#121214] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400">Current Offers</p>
              <h3 className="text-xl font-black">العروض الحالية</h3>
            </div>
            <span className="rounded-full border border-[#FFE600]/30 bg-[#FFE600]/10 px-2 py-1 text-xs font-bold text-[#FFE600]">
              {offers.length}
            </span>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-[#0d0d0f] p-3 text-sm text-neutral-300">
            إجمالي الخصومات: <span className="font-black text-[#FFE600]">{formatEgp(totalSavings)}</span>
          </div>

          <div className="space-y-3">
            {offers.map((offer) => (
              <div key={offer.id} className="rounded-2xl border border-neutral-800 bg-[#0d0d0f] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-black text-white">{offer.name}</h4>
                    <p className="text-xs text-neutral-400">{offer.brand}</p>
                  </div>
                  {!OFFERS.some((defaultOffer) => defaultOffer.id === offer.id) && (
                    <button onClick={() => handleDelete(offer.id)} className="rounded-xl border border-red-500/40 bg-red-500/5 p-2 text-red-400 hover:bg-red-500/10">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="mt-3 flex items-baseline gap-2 font-mono">
                  <span className="text-xl font-black text-white">{formatEgp(offer.price)}</span>
                  {offer.originalPrice && (
                    <span className="text-xs text-neutral-500 line-through">{formatEgp(offer.originalPrice)}</span>
                  )}
                </div>

                {offer.items && offer.items.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {offer.items.slice(0, 4).map((item, index) => (
                      <span key={`${offer.id}-${item}-${index}`} className="rounded-full border border-neutral-700 bg-[#121214] px-2 py-1 text-[10px] text-neutral-300">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
