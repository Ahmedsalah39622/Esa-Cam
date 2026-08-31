"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";
import {
  DEFAULT_HOMEPAGE_CONTENT,
  HomepageContentState,
} from "@/data/homepage-content";
import {
  DEFAULT_SHIPPING_SETTINGS,
  ShippingSettings,
} from "@/data/shipping-defaults";

import { toast } from "sonner";



export type Currency = "USD" | "EGP" | "SAR" | "AED" | "EUR";

interface CurrencyRate {
  symbol: string;
  rate: number; // relative to USD
  prefix: boolean;
}

export const CURRENCIES: Record<Currency, CurrencyRate> = {
  USD: { symbol: "$", rate: 1, prefix: true },
  EGP: { symbol: "E£", rate: 50.5, prefix: true },
  SAR: { symbol: "SAR ", rate: 3.75, prefix: true },
  AED: { symbol: "AED ", rate: 3.67, prefix: true },
  EUR: { symbol: "€", rate: 0.92, prefix: true },
};

export interface CartItem {
  product: Product;
  quantity: number;
  selectedMount?: string;
}

export interface RigItem {
  category: "camera" | "lens" | "gimbal" | "audio" | "power";
  product: Product | null;
}

export interface BrandItem {
  id: string;
  name: string;
  sub?: string;
  logoText: string;
  logoImage?: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
  isActive: boolean;
}

export const DEFAULT_BRANDS: BrandItem[] = [
  {
    id: "brand-sony",
    name: "Sony",
    sub: "Alpha & Cinema",
    logoText: "SONY",
    textColor: "#FFFFFF",
    bgColor: "#000000",
    borderColor: "#3F3F46",
    accentColor: "#FF5500",
    isActive: true,
  },
  {
    id: "brand-canon",
    name: "Canon",
    sub: "Cinema EOS & RF",
    logoText: "Canon",
    textColor: "#CC0000",
    bgColor: "#CC000015",
    borderColor: "#CC000035",
    accentColor: "#CC0000",
    isActive: true,
  },
  {
    id: "brand-nikon",
    name: "Nikon",
    sub: "Z-Mount & Nikkor",
    logoText: "Nikon",
    textColor: "#FFE600",
    bgColor: "#000000",
    borderColor: "#FFE60050",
    accentColor: "#FFE600",
    isActive: true,
  },
  {
    id: "brand-tamron",
    name: "Tamron",
    sub: "Optical Zoom Master",
    logoText: "TAMRON",
    textColor: "#2B5BA3",
    bgColor: "#2B5BA315",
    borderColor: "#2B5BA340",
    accentColor: "#2B5BA3",
    isActive: true,
  },
  {
    id: "brand-profoto",
    name: "Profoto",
    sub: "Studio Strobe Masters",
    logoText: "Profoto",
    textColor: "#18181B",
    bgColor: "#FFFFFF",
    borderColor: "#E4E4E7",
    accentColor: "#0096D6",
    isActive: true,
  },
  {
    id: "brand-red",
    name: "RED Digital Cinema",
    sub: "V-RAPTOR & KOMODO",
    logoText: "RED",
    textColor: "#E01E26",
    bgColor: "#E01E2615",
    borderColor: "#E01E2640",
    accentColor: "#E01E26",
    isActive: true,
  },
  {
    id: "brand-blackmagic",
    name: "Blackmagic Design",
    sub: "Pocket & DaVinci",
    logoText: "Blackmagic",
    textColor: "#00A3E0",
    bgColor: "#18181B",
    borderColor: "#00A3E040",
    accentColor: "#00A3E0",
    isActive: true,
  },
  {
    id: "brand-arri",
    name: "ARRI",
    sub: "ALEXA 35 & SkyPanel",
    logoText: "ARRI",
    textColor: "#004F9F",
    bgColor: "#004F9F15",
    borderColor: "#004F9F40",
    accentColor: "#004F9F",
    isActive: true,
  },
  {
    id: "brand-fujifilm",
    name: "Fujifilm",
    sub: "GFX & X-Series",
    logoText: "FUJIFILM",
    textColor: "#008559",
    bgColor: "#00855915",
    borderColor: "#00855940",
    accentColor: "#008559",
    isActive: true,
  },
  {
    id: "brand-leica",
    name: "Leica",
    sub: "SL3 & M-System",
    logoText: "Leica",
    textColor: "#FFFFFF",
    bgColor: "#E2001A",
    borderColor: "#E2001A",
    accentColor: "#E2001A",
    isActive: true,
  },
  {
    id: "brand-hasselblad",
    name: "Hasselblad",
    sub: "Medium Format",
    logoText: "HASSELBLAD",
    textColor: "#D4AF37",
    bgColor: "#18181B",
    borderColor: "#D4AF3740",
    accentColor: "#D4AF37",
    isActive: true,
  },
  {
    id: "brand-lumix",
    name: "Panasonic Lumix",
    sub: "S5 IIX & BGH1",
    logoText: "LUMIX",
    textColor: "#E60012",
    bgColor: "#18181B",
    borderColor: "#E6001240",
    accentColor: "#E60012",
    isActive: true,
  },
  {
    id: "brand-dji",
    name: "DJI Pro",
    sub: "Ronin 4D & RS 4",
    logoText: "DJI PRO",
    textColor: "#0077FF",
    bgColor: "#18181B",
    borderColor: "#0077FF40",
    accentColor: "#0077FF",
    isActive: true,
  },
  {
    id: "brand-aputure",
    name: "Aputure",
    sub: "LS 600d & Amaran",
    logoText: "Aputure",
    textColor: "#F59E0B",
    bgColor: "#F59E0B15",
    borderColor: "#F59E0B40",
    accentColor: "#F59E0B",
    isActive: true,
  },
  {
    id: "brand-godox",
    name: "Godox",
    sub: "Knowled & Flash",
    logoText: "Godox",
    textColor: "#FF6B00",
    bgColor: "#FF6B0015",
    borderColor: "#FF6B0040",
    accentColor: "#FF6B00",
    isActive: true,
  },
  {
    id: "brand-nanlite",
    name: "Nanlite",
    sub: "Forza & PavoTube",
    logoText: "NANLITE",
    textColor: "#00A4E4",
    bgColor: "#00A4E415",
    borderColor: "#00A4E440",
    accentColor: "#00A4E4",
    isActive: true,
  },
  {
    id: "brand-rode",
    name: "RØDE",
    sub: "Wireless PRO",
    logoText: "RØDE",
    textColor: "#D4AF37",
    bgColor: "#18181B",
    borderColor: "#D4AF3740",
    accentColor: "#D4AF37",
    isActive: true,
  },
  {
    id: "brand-sennheiser",
    name: "Sennheiser",
    sub: "MKH 416 & EW-DP",
    logoText: "SENNHEISER",
    textColor: "#0072CE",
    bgColor: "#0072CE15",
    borderColor: "#0072CE40",
    accentColor: "#0072CE",
    isActive: true,
  },
  {
    id: "brand-smallrig",
    name: "SmallRig",
    sub: "Cages & V-Mount",
    logoText: "SmallRig",
    textColor: "#FF5500",
    bgColor: "#FF550015",
    borderColor: "#FF550040",
    accentColor: "#FF5500",
    isActive: true,
  },
  {
    id: "brand-sigma",
    name: "Sigma",
    sub: "Art & Cine Primes",
    logoText: "SIGMA",
    textColor: "#FFFFFF",
    bgColor: "#000000",
    borderColor: "#52525B",
    accentColor: "#FFFFFF",
    isActive: true,
  },
  {
    id: "brand-zeiss",
    name: "Zeiss",
    sub: "Supreme Primes",
    logoText: "ZEISS",
    textColor: "#FFFFFF",
    bgColor: "#003087",
    borderColor: "#003087",
    accentColor: "#003087",
    isActive: true,
  },
  {
    id: "brand-tilta",
    name: "Tilta",
    sub: "Tactical Arm Rigs",
    logoText: "TILTA",
    textColor: "#FF3333",
    bgColor: "#18181B",
    borderColor: "#FF333340",
    accentColor: "#FF3333",
    isActive: true,
  },
  {
    id: "brand-atomos",
    name: "Atomos",
    sub: "Ninja Ultra HDR",
    logoText: "ATOMOS",
    textColor: "#00FFCC",
    bgColor: "#18181B",
    borderColor: "#00FFCC40",
    accentColor: "#00FFCC",
    isActive: true,
  },
];

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  currency: Currency;
  isCartOpen: boolean;
  quickViewProduct: Product | null;
  searchQuery: string;
  selectedCategory: string;
  brands: BrandItem[];
  rigItems: {
    camera: Product | null;
    lens: Product | null;
    gimbal: Product | null;
    audio: Product | null;
    power: Product | null;
  };
  setCurrency: (c: Currency) => void;
  setIsCartOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;
  setSearchQuery: (q: string) => void;
  setSelectedCategory: (cat: string) => void;
  addToCart: (product: Product, quantity?: number, mount?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  formatPrice: (amountInUSD: number) => string;
  cartTotalUSD: number;
  cartItemCount: number;
  setRigItem: (type: keyof StoreContextType["rigItems"], product: Product | null) => void;
  addRigToCart: () => void;
  // Products management
  products: Product[];
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  resetProducts: () => Promise<void>;
  refreshProducts: () => Promise<void>;
  // Brand management methods
  addBrand: (brand: Omit<BrandItem, "id">) => void;
  updateBrand: (id: string, brand: Partial<BrandItem>) => void;
  deleteBrand: (id: string) => void;
  toggleBrandActive: (id: string) => void;
  resetBrands: () => void;
  // Homepage CMS & Sections Management
  homepageContent: HomepageContentState;
  updateHomepageSection: <K extends keyof HomepageContentState>(
    section: K,
    content: Partial<HomepageContentState[K]>
  ) => Promise<void>;
  resetHomepageSection: (section: keyof HomepageContentState) => Promise<void>;
  resetAllHomepageContent: () => Promise<void>;
  // Shipping Settings Management
  shippingSettings: ShippingSettings;
  updateShippingSettings: (newSettings: Partial<ShippingSettings>) => Promise<void>;
  calculateShippingFee: (
    totalUSD: number,
    cityKey?: string,
    isExpress?: boolean,
    paymentMethod?: string
  ) => number;
  resetShippingSettings: () => Promise<void>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [currency, setCurrency] = useState<Currency>("EGP");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [brands, setBrands] = useState<BrandItem[]>(DEFAULT_BRANDS);
  const [homepageContent, setHomepageContent] = useState<HomepageContentState>(
    DEFAULT_HOMEPAGE_CONTENT
  );
  const [shippingSettings, setShippingSettings] = useState<ShippingSettings>(
    DEFAULT_SHIPPING_SETTINGS
  );


  const [rigItems, setRigItemsState] = useState<{
    camera: Product | null;
    lens: Product | null;
    gimbal: Product | null;
    audio: Product | null;
    power: Product | null;
  }>({
    camera: PRODUCTS.find((p) => p.id === "sony-fx3") || null,
    lens: PRODUCTS.find((p) => p.id === "sony-24-70-gm2") || null,
    gimbal: PRODUCTS.find((p) => p.id === "dji-rs4-pro") || null,
    audio: PRODUCTS.find((p) => p.id === "dji-mic-2-kit") || null,
    power: PRODUCTS.find((p) => p.id === "smallrig-vb99-vmount") || null,
  });

  interface DbProductRow {
    id: string;
    name: string;
    brand: string;
    price: number | string;
    original_price?: number | string | null;
    category: Product["category"];
    image_url?: string;
    image?: string;
    badge?: string | null;
    stock_status?: Product["stockStatus"];
    rating?: number | string;
    reviews_count?: number | string;
    short_description?: string | null;
    specs_json?: string | object | null;
  }

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        const serverMapped: Product[] = (data.data as DbProductRow[]).map((row) => ({
          id: row.id,
          name: row.name,
          brand: row.brand,
          price: Number(row.price),
          originalPrice: row.original_price ? Number(row.original_price) : undefined,
          category: row.category,
          image: row.image_url || row.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
          badge: row.badge || undefined,
          stockStatus: row.stock_status || "in-stock",
          rating: Number(row.rating || 5.0),
          reviewsCount: Number(row.reviews_count || 0),
          shortDescription: row.short_description || "Professional cinema gear.",
          specs: row.specs_json
            ? (typeof row.specs_json === "string" ? JSON.parse(row.specs_json) : row.specs_json)
            : [{ label: "Brand", value: row.brand }],
          features: ["Official 2-Year Warranty", "Factory Sealed & Calibrated"],
          inTheBox: [row.name, "Accessories", "User Documentation"],
        }));

        setProducts((current) => {
          let localCustom: Product[] = [];
          try {
            const saved = localStorage.getItem("esa_cam_products");
            if (saved) localCustom = JSON.parse(saved);
          } catch {}

          if (localCustom.length === 0) {
            localCustom = current;
          }

          const serverMap = new Map(serverMapped.map((p) => [p.id, p]));
          const merged = [...serverMapped];

          for (const lp of localCustom) {
            if (!serverMap.has(lp.id)) {
              merged.unshift(lp);
            }
          }

          try {
            localStorage.setItem("esa_cam_products", JSON.stringify(merged));
          } catch {}

          return merged;
        });
      }
    } catch (err) {
      console.warn("Could not fetch products from API:", err);
    }
  };

  // Load products, cart, wishlist, brands, & homepage content on client
  useEffect(() => {
    try {
      const savedProds = localStorage.getItem("esa_cam_products");
      if (savedProds) {
        const parsed = JSON.parse(savedProds);
        if (Array.isArray(parsed) && parsed.length >= PRODUCTS.length) {
          setProducts(parsed);
        } else if (Array.isArray(parsed)) {
          const catalogMap = new Map(PRODUCTS.map((p) => [p.id, p]));
          const merged = [...PRODUCTS];
          for (const p of parsed) {
            if (!catalogMap.has(p.id)) {
              merged.unshift(p);
            }
          }
          setProducts(merged);
          localStorage.setItem("esa_cam_products", JSON.stringify(merged));
        }
      } else {
        setProducts(PRODUCTS);
      }
      const savedCart = localStorage.getItem("esa_cam_cart");
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWishlist = localStorage.getItem("esa_cam_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      const savedCurrency = localStorage.getItem("esa_cam_curr") as Currency;
      if (savedCurrency && CURRENCIES[savedCurrency]) setCurrency(savedCurrency);
      const savedBrands = localStorage.getItem("esa_cam_brands");
      if (savedBrands) setBrands(JSON.parse(savedBrands));
      const savedContent = localStorage.getItem("esa_cam_homepage_content");
      if (savedContent) {
        setHomepageContent((prev) => ({ ...prev, ...JSON.parse(savedContent) }));
      }
      const savedShipping = localStorage.getItem("esa_cam_shipping_settings");
      if (savedShipping) {
        setShippingSettings((prev) => ({ ...prev, ...JSON.parse(savedShipping) }));
      }
    } catch {
      // ignore
    }

    fetchProducts();

    // Fetch latest shipping settings from database API in background
    fetch("/api/shipping-settings")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setShippingSettings(data.data);
          try {
            localStorage.setItem("esa_cam_shipping_settings", JSON.stringify(data.data));
          } catch {
            // ignore
          }
        }
      })
      .catch((err) => {
        console.warn("Could not load shipping settings from API:", err);
      });

    // Fetch latest content from database API in background
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setHomepageContent((prev) => ({ ...prev, ...data.data }));
          try {
            localStorage.setItem("esa_cam_homepage_content", JSON.stringify(data.data));
          } catch {
            // ignore
          }
        }
      })
      .catch((err) => {
        console.warn("Could not load homepage content from API:", err);
      });
  }, []);


  useEffect(() => {
    try {
      localStorage.setItem("esa_cam_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("esa_cam_wishlist", JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem("esa_cam_brands", JSON.stringify(brands));
    } catch {
      // ignore
    }
  }, [brands]);

  const setCurrencyHandler = (c: Currency) => {
    setCurrency(c);
    try {
      localStorage.setItem("esa_cam_curr", c);
    } catch {
      // ignore
    }
  };

  const addToCart = (product: Product, quantity = 1, mount?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedMount: mount || product.mount,
        },
      ];
    });

    toast.success(`${product.name} added to cart`, {
      description: `${quantity} unit(s) • Total in cart: ${cartItemCount + quantity}`,
      action: {
        label: "Open Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    toast.info("Item removed from cart");
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Cart cleared");
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        toast.info("Removed from saved gear wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        toast.success("Saved to pro gear wishlist");
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const formatPrice = (amountInUSD: number): string => {
    const rateObj = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = amountInUSD * rateObj.rate;
    const formattedNum = converted.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return rateObj.prefix ? `${rateObj.symbol}${formattedNum}` : `${formattedNum} ${rateObj.symbol}`;
  };

  const cartTotalUSD = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const setRigItem = (
    type: keyof StoreContextType["rigItems"],
    product: Product | null
  ) => {
    setRigItemsState((prev) => ({
      ...prev,
      [type]: product,
    }));
    if (product) {
      toast.success(`${product.name} attached to rig slot [${type.toUpperCase()}]`);
    } else {
      toast.info(`Rig slot [${type.toUpperCase()}] cleared`);
    }
  };

  const addRigToCart = () => {
    const selected = Object.values(rigItems).filter(
      (p): p is Product => p !== null
    );
    if (selected.length === 0) {
      toast.error("Please select at least 1 piece of equipment for your rig");
      return;
    }

    setCart((prev) => {
      const updated = [...prev];
      for (const prod of selected) {
        const idx = updated.findIndex((i) => i.product.id === prod.id);
        if (idx > -1) {
          updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        } else {
          updated.push({ product: prod, quantity: 1, selectedMount: prod.mount });
        }
      }
      return updated;
    });

    toast.success(`Full Rig Pack (${selected.length} items) added to cart!`, {
      description: "Includes 10% Bundle Discount applied at checkout.",
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
    setIsCartOpen(true);
  };

  // Brand Management Handlers
  const addBrand = (brandData: Omit<BrandItem, "id">) => {
    const newBrand: BrandItem = {
      ...brandData,
      id: `brand-${Date.now()}`,
    };
    setBrands((prev) => [newBrand, ...prev]);
    toast.success(`Brand "${newBrand.name}" added to Brand Bar!`);
  };

  const updateBrand = (id: string, updatedFields: Partial<BrandItem>) => {
    setBrands((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updatedFields } : b))
    );
    toast.success("Brand updated");
  };

  const deleteBrand = (id: string) => {
    setBrands((prev) => prev.filter((b) => b.id !== id));
    toast.info("Brand removed from marquee");
  };

  const toggleBrandActive = (id: string) => {
    setBrands((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isActive: !b.isActive } : b))
    );
  };

  const resetBrands = () => {
    setBrands(DEFAULT_BRANDS);
    toast.success("Brand bar restored to factory default list");
  };

  // Homepage CMS Section Update Function
  const updateHomepageSection = async <K extends keyof HomepageContentState>(
    section: K,
    content: Partial<HomepageContentState[K]>
  ) => {
    const updatedSection = {
      ...homepageContent[section],
      ...content,
    };

    const newContentState: HomepageContentState = {
      ...homepageContent,
      [section]: updatedSection,
    };

    setHomepageContent(newContentState);

    try {
      localStorage.setItem(
        "esa_cam_homepage_content",
        JSON.stringify(newContentState)
      );
    } catch {
      // ignore
    }

    // Persist to database
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sectionKey: section,
          content: updatedSection,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Section [${String(section)}] updated & published to database!`);
      } else {
        toast.info(`Section [${String(section)}] saved locally.`);
      }
    } catch (err) {
      console.warn("API save error:", err);
      toast.info(`Section [${String(section)}] saved locally.`);
    }
  };

  const resetHomepageSection = async (section: keyof HomepageContentState) => {
    const defaultSec = DEFAULT_HOMEPAGE_CONTENT[section];
    await updateHomepageSection(section, defaultSec as Partial<HomepageContentState[typeof section]>);
    toast.success(`Section [${String(section)}] restored to default`);
  };


  const resetAllHomepageContent = async () => {
    setHomepageContent(DEFAULT_HOMEPAGE_CONTENT);
    try {
      localStorage.setItem(
        "esa_cam_homepage_content",
        JSON.stringify(DEFAULT_HOMEPAGE_CONTENT)
      );
      await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ allSections: DEFAULT_HOMEPAGE_CONTENT }),
      });
      toast.success("All homepage sections restored to factory defaults & database!");
    } catch {
      toast.info("Restored to default content.");
    }
  };

  const addProduct = async (product: Product) => {
    setProducts((prev) => {
      const updated = [product, ...prev.filter((p) => p.id !== product.id)];
      try {
        localStorage.setItem("esa_cam_products", JSON.stringify(updated));
      } catch {}
      return updated;
    });

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price,
          originalPrice: product.originalPrice,
          category: product.category,
          imageUrl: product.image,
          badge: product.badge,
          stockStatus: product.stockStatus || "in-stock",
          shortDescription: product.shortDescription,
          specsJson: product.specs,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Product "${product.name}" published live to storefront!`);
      }
    } catch {
      toast.info(`Product "${product.name}" saved locally.`);
    }
  };

  const updateProduct = async (id: string, updatedFields: Partial<Product>) => {
    let targetProduct: Product | undefined;
    setProducts((prev) => {
      const updated = prev.map((p) => {
        if (p.id === id) {
          targetProduct = { ...p, ...updatedFields };
          return targetProduct;
        }
        return p;
      });
      try {
        localStorage.setItem("esa_cam_products", JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (targetProduct) {
      const target: Product = targetProduct;
      try {
        const res = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: target.id,
            name: target.name,
            brand: target.brand,
            price: target.price,
            originalPrice: target.originalPrice,
            category: target.category,
            imageUrl: target.image,
            badge: target.badge,
            stockStatus: target.stockStatus || "in-stock",
            shortDescription: target.shortDescription,
            specsJson: target.specs,
          }),
        });
        const data = await res.json();
        if (data.success) {
          toast.success(`Product "${target.name}" updated in database!`);
        }
      } catch {
        toast.info(`Product "${target.name}" updated locally.`);
      }
    }
  };

  const deleteProduct = async (id: string) => {
    let deletedName = id;
    setProducts((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) deletedName = target.name;
      const updated = prev.filter((p) => p.id !== id);
      try {
        localStorage.setItem("esa_cam_products", JSON.stringify(updated));
      } catch {}
      return updated;
    });

    try {
      const res = await fetch(`/api/products?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`🗑️ "${deletedName}" deleted permanently!`);
      } else {
        toast.info("Product removed from storefront.");
      }
    } catch {
      toast.info(`Product "${deletedName}" removed.`);
    }
  };

  const resetProducts = async () => {
    setProducts(PRODUCTS);
    try {
      localStorage.setItem("esa_cam_products", JSON.stringify(PRODUCTS));
    } catch {
      // ignore
    }
    toast.success("Products catalog restored to factory defaults");
  };

  const calculateShippingFee = (
    totalUSD: number,
    cityKey?: string,
    isExpress = false,
    paymentMethod = "cod"
  ) => {
    if (totalUSD <= 0) return 0;

    // Check free shipping threshold
    if (shippingSettings.enableFreeShipping && totalUSD >= shippingSettings.freeShippingThresholdUSD) {
      const expressCost = (isExpress && shippingSettings.enableExpressShipping) ? shippingSettings.expressSurchargeUSD : 0;
      const codCost = (paymentMethod === "cod" && shippingSettings.codHandlingFeeUSD > 0) ? shippingSettings.codHandlingFeeUSD : 0;
      return expressCost + codCost;
    }

    let baseCost = shippingSettings.flatRateUSD;
    if (shippingSettings.calculationMode === "city" && cityKey) {
      const cleanKey = cityKey.toLowerCase().trim();
      const matchedCity = shippingSettings.cityRates.find(
        (c) =>
          c.id.toLowerCase() === cleanKey ||
          c.cityNameEn.toLowerCase().includes(cleanKey) ||
          cleanKey.includes(c.id.toLowerCase()) ||
          cleanKey.includes(c.cityNameEn.toLowerCase())
      );
      if (matchedCity && matchedCity.isActive) {
        baseCost = matchedCity.rateUSD;
      }
    }

    const expressCost = (isExpress && shippingSettings.enableExpressShipping) ? shippingSettings.expressSurchargeUSD : 0;
    const codCost = (paymentMethod === "cod" && shippingSettings.codHandlingFeeUSD > 0) ? shippingSettings.codHandlingFeeUSD : 0;

    return baseCost + expressCost + codCost;
  };

  const updateShippingSettings = async (newSettings: Partial<ShippingSettings>) => {
    const merged: ShippingSettings = {
      ...shippingSettings,
      ...newSettings,
    };
    setShippingSettings(merged);
    try {
      localStorage.setItem("esa_cam_shipping_settings", JSON.stringify(merged));
    } catch {
      // ignore
    }

    try {
      const res = await fetch("/api/shipping-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(merged),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Shipping policies & fees saved to database!");
      }
    } catch {
      toast.info("Shipping settings saved locally.");
    }
  };

  const resetShippingSettings = async () => {
    setShippingSettings(DEFAULT_SHIPPING_SETTINGS);
    try {
      localStorage.setItem("esa_cam_shipping_settings", JSON.stringify(DEFAULT_SHIPPING_SETTINGS));
      await fetch("/api/shipping-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(DEFAULT_SHIPPING_SETTINGS),
      });
    } catch {
      // ignore
    }
    toast.success("Shipping settings restored to factory defaults");
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
        refreshProducts: fetchProducts,
        cart,
        wishlist,
        currency,
        isCartOpen,
        quickViewProduct,
        searchQuery,
        selectedCategory,
        brands,
        rigItems,
        setCurrency: setCurrencyHandler,
        setIsCartOpen,
        setQuickViewProduct,
        setSearchQuery,
        setSelectedCategory,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        formatPrice,
        cartTotalUSD,
        cartItemCount,
        setRigItem,
        addRigToCart,
        addBrand,
        updateBrand,
        deleteBrand,
        toggleBrandActive,
        resetBrands,
        homepageContent,
        updateHomepageSection,
        resetHomepageSection,
        resetAllHomepageContent,
        shippingSettings,
        updateShippingSettings,
        calculateShippingFee,
        resetShippingSettings,
      }}
    >
      {children}
    </StoreContext.Provider>
  );


}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
