"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStore, CURRENCIES } from "@/context/store-context";
import { useAuth } from "@/context/auth-context";
import { PRODUCTS, Product, ProductCategory } from "@/data/products";
import {
  Camera,
  ShoppingBag,
  TrendingUp,
  Package,
  DollarSign,
  RefreshCw,
  Search,
  Plus,
  ArrowUpRight,
  AlertCircle,
  Eye,
  Tag,
  Wrench,
  ArrowLeft,
  ArrowRight,
  X,
  ShieldCheck,
  Sparkles,
  Printer,
  Award,
  RotateCcw,
  Trash2,
  Lock,
  LogOut,
  BarChart3,
  Users,
  Truck,
  FileText,
  Download,
  QrCode,
  Send,
  Phone,
  Building2,
  Menu,
  Upload,
  ImageIcon,
  History,
  CreditCard,
  MapPin,
  Layout,
  ExternalLink,
  Globe,
  SlidersHorizontal,
  Check,
  UserPlus,
  Crown,
  KeyRound,
  Pencil,
  Copy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { AdminRecord } from "@/app/api/admins/route";
import type { UserRecord } from "@/app/api/users/route";





import { toast } from "sonner";

// Initial Mock Orders
interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  company?: string;
  items: { name: string; brand: string; qty: number; price: number }[];
  totalUSD: number;
  paymentMethod: "Card" | "COD" | "ValU (0%)" | "Studio Wire";
  paymentStatus: "Paid" | "Pending" | "Authorized";
  status: "Processing" | "Out for Delivery" | "Delivered" | "Cancelled";
  city: string;
  date: string;
  trackingNumber: string;
  courier?: string;
}

// Import Studios & Customers CRM Data
import {
  PRODUCTION_STUDIOS,
  StudioClient,
} from "@/data/studios";

// Import Homepage CMS Defaults & Types
import {
  DEFAULT_HOMEPAGE_CONTENT,
} from "@/data/homepage-content";




// Initial Trade-in requests
interface TradeIn {
  id: string;
  client: string;
  gearItem: string;
  shutterCount?: string;
  condition: "Grade A+ (Mint)" | "Grade A" | "Grade B (Minor Wear)";
  valuationUSD: number;
  status: "Pending Inspection" | "Approved • Credit Issued" | "Rejected";
  date: string;
}

const INITIAL_TRADE_INS: TradeIn[] = [
  {
    id: "TRD-401",
    client: "Ahmed Zaki (Freelance DP)",
    gearItem: "Canon EOS 5D Mark IV + EF 24-70mm f/2.8L II",
    shutterCount: "14,200 clicks",
    condition: "Grade A+ (Mint)",
    valuationUSD: 1650,
    status: "Approved • Credit Issued",
    date: "2026-08-20",
  },
  {
    id: "TRD-402",
    client: "Sherif Mansour (Studio DP)",
    gearItem: "Sony A7 III Body + 2x NP-FZ100 Batteries",
    shutterCount: "28,500 clicks",
    condition: "Grade A",
    valuationUSD: 920,
    status: "Pending Inspection",
    date: "2026-08-20",
  },
  {
    id: "TRD-403",
    client: "Mohamed Rashed",
    gearItem: "DJI Ronin-S Gimbal Kit",
    condition: "Grade B (Minor Wear)",
    valuationUSD: 180,
    status: "Pending Inspection",
    date: "2026-08-19",
  },
];

export default function DashboardPage() {
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    formatPrice,
    currency,
    brands,
    addBrand,
    deleteBrand,
    toggleBrandActive,
    resetBrands,
    homepageContent,
    updateHomepageSection,

    resetHomepageSection,
    resetAllHomepageContent,
  } = useStore();



  const { user, isAdmin, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<
    | "overview"
    | "orders"
    | "inventory"
    | "brands"
    | "analytics"
    | "studios"
    | "roles_manager"
    | "homepage_cms"
    | "logistics"
    | "tradeins"
    | "coupons"
    | "service"
  >("overview");

  // Admin Roles & Client Accounts State
  const [adminStaffList, setAdminStaffList] = useState<AdminRecord[]>([]);
  const [rolesSubTab, setRolesSubTab] = useState<"admins" | "clients">("admins");
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const [newAdminForm, setNewAdminForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "store_manager" as AdminRecord["role"],
    phone: "",
  });

  // Registered Users list from database users table
  const [registeredUsersList, setRegisteredUsersList] = useState<UserRecord[]>([]);

  // Fetch Admins list
  const fetchAdmins = async () => {
    try {
      const res = await fetch("/api/admins");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setAdminStaffList(data.data);
      }
    } catch {
      // ignore
    }
  };

  // Fetch Users list from users table
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setRegisteredUsersList(data.data);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchAdmins();
    fetchUsers();
  }, []);



  // CMS Section & Draft States
  const [cmsSection, setCmsSection] = useState<
    "hero" | "stage" | "collage" | "editorial" | "best_sellers" | "announcement" | "footer"
  >("hero");
  const [activeHeroSlideIdx, setActiveHeroSlideIdx] = useState(0);
  const [heroSlidesDraft, setHeroSlidesDraft] = useState(homepageContent.hero.slides);
  const [stageDraft, setStageDraft] = useState(homepageContent.studioStage);
  const [collageDraft, setCollageDraft] = useState(homepageContent.stylesCollage);
  const [editorialDraft, setEditorialDraft] = useState(homepageContent.editorial);
  const [bestSellersDraft, setBestSellersDraft] = useState(homepageContent.bestSellers);
  const [announcementDraft, setAnnouncementDraft] = useState(homepageContent.announcement);
  const [footerDraft, setFooterDraft] = useState(homepageContent.footer);

  // Sync draft states when homepageContent updates
  useEffect(() => {
    if (homepageContent) {
      setHeroSlidesDraft(homepageContent.hero?.slides || DEFAULT_HOMEPAGE_CONTENT.hero.slides);
      setStageDraft(homepageContent.studioStage || DEFAULT_HOMEPAGE_CONTENT.studioStage);
      setCollageDraft(homepageContent.stylesCollage || DEFAULT_HOMEPAGE_CONTENT.stylesCollage);
      setEditorialDraft(homepageContent.editorial || DEFAULT_HOMEPAGE_CONTENT.editorial);
      setBestSellersDraft(homepageContent.bestSellers || DEFAULT_HOMEPAGE_CONTENT.bestSellers);
      setAnnouncementDraft(homepageContent.announcement || DEFAULT_HOMEPAGE_CONTENT.announcement);
      setFooterDraft(homepageContent.footer || DEFAULT_HOMEPAGE_CONTENT.footer);
    }
  }, [homepageContent]);


  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [tradeIns, setTradeIns] = useState<TradeIn[]>(INITIAL_TRADE_INS);
  const [inventory, setInventory] = useState<Product[]>(products);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (products && products.length > 0) {
      setInventory(products);
    }
  }, [products]);

  const [selectedBarcodeProduct, setSelectedBarcodeProduct] = useState<Product | null>(null);
  const [selectedQuoteStudio, setSelectedQuoteStudio] = useState<StudioClient | null>(null);



  // Studios CRM State & Customer History
  const [studios, setStudios] = useState<StudioClient[]>(PRODUCTION_STUDIOS);
  const [studioSearch, setStudioSearch] = useState("");
  const [studioTierFilter, setStudioTierFilter] = useState("all");
  const [selectedStudioForHistory, setSelectedStudioForHistory] = useState<StudioClient | null>(null);
  const [historyTab, setHistoryTab] = useState<"orders" | "fleet" | "service" | "notes">("orders");
  const [isAddStudioOpen, setIsAddStudioOpen] = useState(false);
  const [newStudio, setNewStudio] = useState({
    name: "",
    contactPerson: "",
    phone: "",
    email: "",
    taxNumber: "",
    tier: "Gold Production House" as StudioClient["tier"],
    creditLimitUSD: 10000,
    city: "Cairo",
    address: "",
    notes: "",
  });

  // Search & Filter state
  const [orderSearch, setOrderSearch] = useState("");
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");


  // New Product Modal state
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [productImageType, setProductImageType] = useState<"upload" | "url">("upload");
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "Sony",
    category: "cameras" as ProductCategory,
    price: 25000,
    originalPrice: 27000,
    stockCount: 5,
    shortDescription: "",
    badge: "New Arrival",
    mount: "Sony E",
    image: "",
  });

  const compressImageFile = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const rawData = e.target?.result as string;
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const maxDim = 1000;
          if (width > height && width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve(rawData);
            return;
          }
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL("image/jpeg", 0.85);
          resolve(compressed);
        };
        img.onerror = () => resolve(rawData);
        img.src = rawData;
      };
      reader.onerror = () => resolve("");
      reader.readAsDataURL(file);
    });
  };

  const handleProductImageFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image file size must be under 10MB");
      return;
    }
    toast.loading("Optimizing image...", { id: "img-opt" });
    const compressed = await compressImageFile(file);
    if (compressed) {
      setNewProduct((prev) => ({ ...prev, image: compressed }));
      toast.success("Product image uploaded and optimized!", { id: "img-opt" });
    } else {
      toast.error("Failed to process image file", { id: "img-opt" });
    }
  };

  // Edit Product Modal state
  const [isEditProductOpen, setIsEditProductOpen] = useState(false);
  const [editProductImageType, setEditProductImageType] = useState<"upload" | "url">("url");
  const [editProduct, setEditProduct] = useState<{
    id: string;
    name: string;
    brand: string;
    category: ProductCategory;
    price: number;
    originalPrice: number;
    stockCount: number;
    shortDescription: string;
    badge: string;
    mount: string;
    image: string;
  } | null>(null);

  const handleEditProductImageFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editProduct) return;
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image file size must be under 10MB");
      return;
    }
    toast.loading("Optimizing image...", { id: "edit-img-opt" });
    const compressed = await compressImageFile(file);
    if (compressed) {
      setEditProduct((prev) => (prev ? { ...prev, image: compressed } : prev));
      toast.success("Image updated and optimized!", { id: "edit-img-opt" });
    } else {
      toast.error("Failed to process image file", { id: "edit-img-opt" });
    }
  };

  const openEditProduct = (item: Product) => {
    const rate = CURRENCIES[currency]?.rate || 50.5;
    // Calculate display price in currently active currency (e.g. EGP)
    // If previously saved in raw un-converted EGP (e.g. >= 10000), use as-is; otherwise multiply by exchange rate
    const displayPrice = item.price >= 10000 ? Math.round(item.price) : Math.round(item.price * rate);
    const displayOriginalPrice = item.originalPrice
      ? item.originalPrice >= 10000
        ? Math.round(item.originalPrice)
        : Math.round(item.originalPrice * rate)
      : 0;

    setEditProduct({
      id: item.id,
      name: item.name,
      brand: item.brand,
      category: item.category,
      price: displayPrice,
      originalPrice: displayOriginalPrice,
      stockCount: (item as Product & { stockCount?: number }).stockCount ?? 5,
      shortDescription: item.shortDescription || "",
      badge: item.badge || "",
      mount: (item as Product & { mount?: string }).mount || "",
      image: item.image || "",
    });
    setEditProductImageType(item.image?.startsWith("data:") ? "upload" : "url");
    setIsEditProductOpen(true);
  };

  const handleEditProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProduct) return;

    const rate = CURRENCIES[currency]?.rate || 50.5;
    const basePrice = Number((Number(editProduct.price) / rate).toFixed(2));
    const baseOriginalPrice = editProduct.originalPrice ? Number((Number(editProduct.originalPrice) / rate).toFixed(2)) : undefined;

    const productImage =
      editProduct.image?.trim() ||
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80";

    await updateProduct(editProduct.id, {
      name: editProduct.name,
      brand: editProduct.brand,
      category: editProduct.category,
      price: basePrice,
      originalPrice: baseOriginalPrice,
      image: productImage,
      badge: editProduct.badge || undefined,
      stockStatus: editProduct.stockCount > 0 ? "in-stock" : "pre-order",
      shortDescription: editProduct.shortDescription || "High performance cinema photography equipment.",
      specs: [{ label: "Mount", value: editProduct.mount || "Universal" }],
    });

    // Update inventory stock count locally
    setInventory((prev) =>
      prev.map((p) =>
        p.id === editProduct.id
          ? {
              ...p,
              name: editProduct.name,
              brand: editProduct.brand,
              category: editProduct.category,
              price: basePrice,
              originalPrice: baseOriginalPrice,
              image: productImage,
              badge: editProduct.badge || undefined,
              stockCount: editProduct.stockCount,
              stockStatus: editProduct.stockCount > 0 ? "in-stock" : "pre-order",
              mount: editProduct.mount,
            }
          : p
      )
    );

    toast.success(`✅ "${editProduct.name}" updated successfully!`);
    setIsEditProductOpen(false);
    setEditProduct(null);
  };

  const handleDeleteProduct = async (item: Product) => {
    if (!confirm(`Are you sure you want to delete "${item.name}"? This action cannot be undone.`)) return;
    await deleteProduct(item.id);
    setInventory((prev) => prev.filter((p) => p.id !== item.id));
    toast.success(`🗑️ "${item.name}" has been removed from catalog.`);
  };

  // Brand Manager Modal state
  const [isAddBrandOpen, setIsAddBrandOpen] = useState(false);
  const [brandLogoType, setBrandLogoType] = useState<"image" | "text">("image");
  const [newBrand, setNewBrand] = useState({
    name: "",
    sub: "",
    logoText: "",
    logoImage: "",
    textColor: "#FFFFFF",
    bgColor: "#000000",
    borderColor: "#3F3F46",
    accentColor: "#FF5500",
    isActive: true,
  });

  const handleBrandLogoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Logo image size must be under 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setNewBrand((prev) => ({ ...prev, logoImage: reader.result as string }));
        toast.success("Brand logo image uploaded!");
      }
    };
    reader.readAsDataURL(file);
  };

  // Fetch live orders from database/API
  useEffect(() => {
    async function loadDbOrders() {
      try {
        setIsLoadingOrders(true);
        const res = await fetch("/api/orders");
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          interface ApiOrderItem {
            name: string;
            brand?: string;
            quantity?: number;
            qty?: number;
            price?: number;
          }
          interface ApiOrder {
            id: string;
            order_number?: string;
            customer_name: string;
            customer_email?: string;
            customer_phone: string;
            items?: ApiOrderItem[];
            total_amount?: number;
            payment_method?: string;
            status?: string;
            shipping_address?: string;
            city?: string;
            created_at?: string;
          }
          const dbOrders: Order[] = (json.data as ApiOrder[]).map((o) => ({
            id: o.order_number || o.id,
            customerName: o.customer_name,
            customerEmail: o.customer_email || "customer@esacam.com",
            customerPhone: o.customer_phone,
            items: (o.items || []).map((it) => ({
              name: it.name,
              brand: it.brand || "Cinema Pro",
              qty: it.quantity || it.qty || 1,
              price: it.price || 0,
            })),
            totalUSD: Number(o.total_amount) || 0,
            paymentMethod: o.payment_method === "cod" ? "COD" : "Card",
            paymentStatus: o.status === "delivered" ? "Paid" : "Pending",
            status:
              o.status === "new"
                ? "Processing"
                : o.status === "shipped"
                ? "Out for Delivery"
                : o.status === "delivered"
                ? "Delivered"
                : o.status === "cancelled"
                ? "Cancelled"
                : "Processing",
            city: o.city ? `${o.shipping_address}, ${o.city}` : o.shipping_address || "Cairo",
            date: o.created_at ? new Date(o.created_at).toLocaleString() : "Just now",
            trackingNumber: `EXP-${o.order_number || o.id}`,
            courier: "ESA White-Glove Direct",
          }));
          setOrders(dbOrders);
        }
      } catch (err) {
        console.error("Failed to load orders from API:", err);
      } finally {
        setIsLoadingOrders(false);
      }
    }
    loadDbOrders();
  }, []);

  // Coupons & Promo Engine State
  const [coupons, setCoupons] = useState<
    Array<{
      code: string;
      discount_percent: number;
      description: string;
      start_date: string;
      end_date: string;
      is_single_use: boolean;
      usage_count: number;
      is_active: boolean;
    }>
  >([]);
  const [couponSearch, setCouponSearch] = useState("");
  const [isNewCouponOpen, setIsNewCouponOpen] = useState(false);
  const [couponForm, setCouponForm] = useState({
    code: "",
    discount_percent: 15,
    description: "",
    start_date: new Date().toISOString().split("T")[0],
    end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    is_single_use: false,
    is_active: true,
  });

  const fetchCoupons = async () => {
    try {
      const res = await fetch("/api/coupons");
      const data = await res.json();
      if (data.success && Array.isArray(data.coupons)) {
        setCoupons(data.coupons);
      }
    } catch (e) {
      console.error("Failed to load coupons:", e);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const generateRandomCouponCode = () => {
    const prefixes = ["ESA", "CINE", "CREATOR", "PRO", "DEAL", "VIP", "OPTICS"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setCouponForm((prev) => ({
      ...prev,
      code: `${prefix}-${randomNum}`,
    }));
    toast.success("New Unique Coupon Code Generated!");
  };

  const handleSaveCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponForm.code.trim()) {
      toast.error("Please enter or generate a promo code");
      return;
    }
    try {
      const res = await fetch("/api/coupons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...couponForm,
          code: couponForm.code.trim().toUpperCase(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Promo Code "${couponForm.code.toUpperCase()}" Saved Successfully!`);
        setIsNewCouponOpen(false);
        setCouponForm({
          code: "",
          discount_percent: 15,
          description: "",
          start_date: new Date().toISOString().split("T")[0],
          end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
          is_single_use: false,
          is_active: true,
        });
        fetchCoupons();
      } else {
        toast.error(data.message || "Failed to save coupon");
      }
    } catch {
      toast.error("Network error while saving promo code");
    }
  };

  const handleToggleCoupon = async (code: string, currentActive: boolean) => {
    try {
      await fetch("/api/coupons", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, is_active: !currentActive }),
      });
      setCoupons((prev) =>
        prev.map((c) => (c.code === code ? { ...c, is_active: !currentActive } : c))
      );
      toast.success(`Coupon ${code} is now ${!currentActive ? "Active" : "Paused"}`);
    } catch {
      toast.error("Failed to update coupon status");
    }
  };

  const handleDeleteCoupon = async (code: string) => {
    if (!confirm(`Are you sure you want to permanently delete promo code "${code}"?`)) return;
    try {
      const res = await fetch(`/api/coupons?code=${encodeURIComponent(code)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setCoupons((prev) => prev.filter((c) => c.code !== code));
        toast.success(`Coupon ${code} deleted.`);
      }
    } catch {
      toast.error("Failed to delete coupon");
    }
  };

  // Calculate high-level analytics
  const totalRevenueUSD = orders.filter((o) => o.status !== "Cancelled").reduce((acc, o) => acc + o.totalUSD, 0);
  const pendingOrdersCount = orders.filter((o) => o.status === "Processing").length;
  const inTransitCount = orders.filter((o) => o.status === "Out for Delivery").length;
  const lowStockCount = inventory.filter((p) => ((p as Product & { stockCount?: number }).stockCount || 5) <= 3).length;

  const handleUpdateOrderStatus = async (orderId: string, newStatus: Order["status"]) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    toast.success(`Order ${orderId} updated to "${newStatus}"`);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }

    try {
      const dbStatus =
        newStatus === "Processing"
          ? "new"
          : newStatus === "Out for Delivery"
          ? "shipped"
          : newStatus === "Delivered"
          ? "delivered"
          : "cancelled";
      await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: dbStatus }),
      });
    } catch (err) {
      console.error("Failed to sync order status with API:", err);
    }
  };

  const handlePrintOrderInvoice = (order: Order) => {
    const printWindow = window.open("", "_blank", "width=900,height=900");
    if (!printWindow) {
      toast.error("Please allow popups in your browser to print invoices");
      return;
    }

    const orderDate = order.date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const formattedTotal = formatPrice(order.totalUSD);

    const itemsRows = (order.items || [])
      .map(
        (item) => `
        <tr>
          <td style="padding: 12px 14px; border-bottom: 1px solid #f4f4f5;">
            <div style="font-weight: 700; color: #000000; font-size: 13px;">${item.name}</div>
            <div style="font-size: 11px; color: #71717a; font-family: monospace; margin-top: 2px;">
              ${item.brand ? `${item.brand} • ` : ""}Qty: ${item.qty} • Factory Sealed
            </div>
          </td>
          <td style="padding: 12px 14px; border-bottom: 1px solid #f4f4f5; text-align: center; font-family: monospace; font-weight: 600;">
            ${item.qty}
          </td>
          <td style="padding: 12px 14px; border-bottom: 1px solid #f4f4f5; text-align: right; font-family: monospace;">
            ${formatPrice(item.price)}
          </td>
          <td style="padding: 12px 14px; border-bottom: 1px solid #f4f4f5; text-align: right; font-family: monospace; font-weight: 700;">
            ${formatPrice(item.price * item.qty)}
          </td>
        </tr>`
      )
      .join("");

    const invoiceHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ESA CAM Tax Invoice - ${order.id}</title>
  <style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #18181b;
      margin: 0;
      padding: 24px;
      background: #ffffff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .invoice-card {
      max-width: 820px;
      margin: 0 auto;
      border: 1px solid #e4e4e7;
      border-radius: 12px;
      padding: 36px;
      background: #ffffff;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 3px solid #000000;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .brand-block {
      display: flex;
      flex-direction: column;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .brand-yellow {
      background: #FFE600;
      color: #000000;
      font-weight: 900;
      font-size: 26px;
      padding: 2px 10px;
      letter-spacing: -0.5px;
      display: inline-block;
    }
    .brand-dark {
      color: #000000;
      font-weight: 900;
      font-size: 26px;
      letter-spacing: 3px;
    }
    .brand-tag {
      font-size: 10px;
      font-family: monospace;
      letter-spacing: 3px;
      color: #71717a;
      text-transform: uppercase;
      margin-top: 6px;
    }
    .invoice-right {
      text-align: right;
    }
    .invoice-title {
      font-size: 22px;
      font-weight: 900;
      color: #000000;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0;
    }
    .invoice-number {
      font-size: 14px;
      font-weight: 800;
      font-family: monospace;
      color: #000000;
      margin-top: 4px;
    }
    .invoice-date {
      font-size: 12px;
      color: #71717a;
      margin-top: 2px;
    }
    .details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    .info-box {
      background: #fafafa;
      border: 1px solid #e4e4e7;
      border-radius: 8px;
      padding: 14px 16px;
      font-size: 12px;
      line-height: 1.5;
    }
    .info-box-title {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #71717a;
      margin-bottom: 6px;
      font-family: monospace;
      border-bottom: 1px solid #e4e4e7;
      padding-bottom: 4px;
    }
    .table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .table th {
      background: #000000;
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 10px 14px;
    }
    .summary-section {
      border-top: 2px solid #000000;
      padding-top: 14px;
      margin-bottom: 28px;
    }
    .summary-table {
      width: 100%;
      font-size: 13px;
    }
    .summary-table td {
      padding: 4px 0;
    }
    .grand-total {
      font-size: 22px;
      font-weight: 900;
      color: #000000;
      font-family: monospace;
    }
    .guarantee-bar {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      color: #047857;
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 24px;
    }
    .footer-auth {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 20px;
      border-top: 1px solid #e4e4e7;
      font-size: 11px;
      color: #71717a;
    }
    .stamp-circle {
      border: 2px dashed #059669;
      color: #059669;
      font-weight: 800;
      font-family: monospace;
      padding: 10px 18px;
      border-radius: 8px;
      text-align: center;
      text-transform: uppercase;
      font-size: 10px;
    }
    @media print {
      body { padding: 0; }
      .invoice-card { border: none; padding: 0; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="invoice-card">
    <div class="header">
      <div class="brand-block">
        <div class="brand-logo">
          <span class="brand-yellow">ESA</span>
          <span class="brand-dark">CAM</span>
        </div>
        <div class="brand-tag">OPTICS LAB • CINEMA & BROADCAST</div>
        <div style="font-size: 10px; color: #71717a; margin-top: 4px; font-family: monospace;">
          Tax Reg ID: 684-921-340 • CR: 104928 • Cairo, Egypt
        </div>
      </div>

      <div class="invoice-right">
        <h1 class="invoice-title">Official Tax Invoice</h1>
        <div class="invoice-number">REF: ${order.id}</div>
        <div class="invoice-date">Date: ${orderDate}</div>
        <div style="font-size: 11px; font-family: monospace; color: #059669; font-weight: 700; margin-top: 3px;">
          STATUS: ${order.status.toUpperCase()}
        </div>
      </div>
    </div>

    <div class="details-grid">
      <div class="info-box">
        <div class="info-box-title">CUSTOMER / BILLED TO</div>
        <div style="font-weight: 800; font-size: 13px; color: #000;">${order.customerName}</div>
        ${order.company ? `<div><strong>Studio:</strong> ${order.company}</div>` : ""}
        <div><strong>Phone:</strong> ${order.customerPhone || "N/A"}</div>
        <div><strong>Email:</strong> ${order.customerEmail || "N/A"}</div>
      </div>

      <div class="info-box">
        <div class="info-box-title">SHIPPING & DISPATCH</div>
        <div><strong>Destination:</strong> ${order.city || "Cairo, Egypt"}</div>
        <div><strong>Courier:</strong> ${order.courier || "Fragile-Cine White Glove Express"}</div>
        <div><strong>AWB Tracking:</strong> ${order.trackingNumber || `AWB-${order.id}`}</div>
        <div><strong>Payment:</strong> Cash on Delivery / Bank Transfer (COD)</div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th style="text-align: left;">Equipment / Description</th>
          <th style="text-align: center; width: 60px;">Qty</th>
          <th style="text-align: right; width: 140px;">Unit Price</th>
          <th style="text-align: right; width: 150px;">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${itemsRows}
      </tbody>
    </table>

    <div class="guarantee-bar">
      ✓ All Serial Numbers Registered with 2-Year Official ESA CAM Distributor Warranty & Sensor Calibration Guarantee
    </div>

    <div class="summary-section">
      <table class="summary-table">
        <tr>
          <td style="color: #71717a;">Equipment Subtotal:</td>
          <td style="text-align: right; font-family: monospace; font-weight: 700;">${formattedTotal}</td>
        </tr>
        <tr>
          <td style="color: #71717a;">Insured Fragile White-Glove Shipping:</td>
          <td style="text-align: right; color: #059669; font-weight: 700;">Free Included</td>
        </tr>
        <tr>
          <td style="color: #71717a;">2-Year Center Calibration & Warranty:</td>
          <td style="text-align: right; color: #059669; font-weight: 700;">Free Included</td>
        </tr>
        <tr style="border-top: 2px solid #000000; font-size: 16px;">
          <td style="font-weight: 900; padding-top: 10px;">TOTAL INVOICE AMOUNT:</td>
          <td style="text-align: right; padding-top: 10px;" class="grand-total">${formattedTotal}</td>
        </tr>
      </table>
    </div>

    <div class="footer-auth">
      <div>
        <div style="font-weight: 700; color: #000;">ESA CAM Optics Lab, Inc.</div>
        <div>24 Hassan Assem St, Zamalek, Cairo, Egypt</div>
        <div style="margin-top: 2px;">Support: +20 (02) 2736-CAM • pro@esacam.com</div>
      </div>

      <div class="stamp-circle">
        ✓ ESA CAM DISPATCH<br>
        QA APPROVED & SEALED
      </div>
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(invoiceHtml);
    printWindow.document.close();
  };

  const handleApproveTradeIn = (tradeId: string) => {
    setTradeIns((prev) =>
      prev.map((t) =>
        t.id === tradeId
          ? { ...t, status: "Approved • Credit Issued" as const }
          : t
      )
    );
    toast.success(`Trade-in ${tradeId} approved and store credit issued!`);
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name) {
      toast.error("Please enter a gear name");
      return;
    }

    const rate = CURRENCIES[currency]?.rate || 50.5;
    const basePrice = Number((Number(newProduct.price) / rate).toFixed(2));
    const baseOriginalPrice = newProduct.originalPrice ? Number((Number(newProduct.originalPrice) / rate).toFixed(2)) : undefined;

    const productImage =
      newProduct.image?.trim() ||
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80";

    const created: Product = {
      id: `gear-${Date.now()}`,
      name: newProduct.name,
      brand: newProduct.brand,
      category: newProduct.category,
      price: basePrice,
      originalPrice: baseOriginalPrice,
      rating: 5.0,
      reviewsCount: 0,
      image: productImage,
      badge: newProduct.badge,
      isNew: true,
      stockStatus: newProduct.stockCount > 0 ? "in-stock" : "pre-order",
      stockCount: Number(newProduct.stockCount),
      shortDescription: newProduct.shortDescription || "High performance cinema photography equipment.",
      specs: [{ label: "Mount", value: newProduct.mount || "Universal" }],
      features: ["Factory Sealed", "2-Year Official ESA Warranty"],
      inTheBox: [newProduct.name, "Accessories", "Manual"],
      mount: newProduct.mount,
    };

    await addProduct(created);
    setInventory((prev) => [created, ...prev.filter((p) => p.id !== created.id)]);
    toast.success(`🎉 "${created.name}" added to inventory & storefront!`);
    setIsAddProductOpen(false);
    setNewProduct({
      name: "",
      brand: "Sony",
      category: "cameras" as ProductCategory,
      price: 25000,
      originalPrice: 27000,
      stockCount: 5,
      shortDescription: "",
      badge: "New Arrival",
      mount: "Sony E",
      image: "",
    });
  };


  const handleCreateBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrand.name.trim()) {
      toast.error("Please enter brand name");
      return;
    }

    const brandData = {
      name: newBrand.name.trim(),
      sub: newBrand.sub.trim() || undefined,
      logoText: newBrand.logoText.trim() || newBrand.name.trim(),
      logoImage: newBrand.logoImage?.trim() || undefined,
      textColor: newBrand.textColor,
      bgColor: newBrand.bgColor,
      borderColor: newBrand.borderColor,
      accentColor: newBrand.accentColor,
      isActive: true,
    };

    addBrand(brandData);
    setIsAddBrandOpen(false);

    try {
      await fetch('/api/brands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: brandData.name,
          logoText: brandData.logoText,
          logoImage: brandData.logoImage || null,
          subTitle: brandData.sub,
          isActive: brandData.isActive,
        }),
      });
      toast.success("Brand added to marquee and saved to database!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save brand to database");
    }

    setNewBrand({
      name: "",
      sub: "",
      logoText: "",
      logoImage: "",
      textColor: "#FFFFFF",
      bgColor: "#000000",
      borderColor: "#3F3F46",
      accentColor: "#FF5500",
      isActive: true,
    });
  };

  const handleStockUpdate = (productId: string, delta: number) => {
    setInventory((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const current = p.stockCount || 5;
          const updated = Math.max(0, current + delta);
          return {
            ...p,
            stockCount: updated,
            stockStatus: updated === 0 ? "pre-order" : updated <= 2 ? "low-stock" : "in-stock",
          };
        }
        return p;
      })
    );
    toast.info("Stock level updated");
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "ID,Name,Brand,Category,Price USD,Stock Count\n" +
      inventory.map(p => `"${p.id}","${p.name}","${p.brand}","${p.category}",${p.price},${p.stockCount ?? 5}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ESA_CAM_Inventory_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Inventory exported successfully to CSV!");
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      if (orderStatusFilter !== "all" && o.status !== orderStatusFilter) return false;
      if (orderSearch.trim()) {
        const q = orderSearch.toLowerCase();
        const matchId = o.id.toLowerCase().includes(q);
        const matchName = o.customerName.toLowerCase().includes(q);
        const matchCity = o.city.toLowerCase().includes(q);
        if (!matchId && !matchName && !matchCity) return false;
      }
      return true;
    });
  }, [orders, orderStatusFilter, orderSearch]);

  const filteredStudios = useMemo(() => {
    return studios.filter((s) => {
      if (studioTierFilter !== "all" && s.tier !== studioTierFilter) return false;
      if (studioSearch.trim()) {
        const q = studioSearch.toLowerCase();
        const matchName = s.name.toLowerCase().includes(q);
        const matchContact = s.contactPerson.toLowerCase().includes(q);
        const matchCity = s.city.toLowerCase().includes(q);
        const matchPhone = s.phone.toLowerCase().includes(q);
        const matchEmail = s.email.toLowerCase().includes(q);
        if (!matchName && !matchContact && !matchCity && !matchPhone && !matchEmail) return false;
      }
      return true;
    });
  }, [studios, studioTierFilter, studioSearch]);

  const handleCreateStudio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudio.name.trim() || !newStudio.contactPerson.trim()) {
      toast.error("Please provide studio name and contact person");
      return;
    }
    const created: StudioClient = {
      id: `STU-${String(studios.length + 1).padStart(2, "0")}`,
      name: newStudio.name.trim(),
      contactPerson: newStudio.contactPerson.trim(),
      phone: newStudio.phone.trim() || "+20 10 0000 0000",
      email: newStudio.email.trim() || "studio@esacam.com",
      taxNumber: newStudio.taxNumber.trim() || `EG-TAX-${Math.floor(100000 + Math.random() * 900000)}`,
      tier: newStudio.tier,
      totalSpentUSD: 0,
      totalOrders: 0,
      creditLimitUSD: Number(newStudio.creditLimitUSD) || 5000,
      availableCreditUSD: Number(newStudio.creditLimitUSD) || 5000,
      city: newStudio.city.trim() || "Cairo",
      address: newStudio.address.trim() || "Cairo, Egypt",
      accountManager: "Ahmed Mahmoud",
      joinDate: new Date().toISOString().split("T")[0],
      notes: newStudio.notes.trim() || "New VIP Studio Account registered.",
      orderHistory: [],
      fleetEquipment: [],
      serviceHistory: [],
    };
    setStudios([created, ...studios]);
    setIsAddStudioOpen(false);
    toast.success(`"${created.name}" added to VIP Studios CRM!`);
    setNewStudio({
      name: "",
      contactPerson: "",
      phone: "",
      email: "",
      taxNumber: "",
      tier: "Gold Production House",
      creditLimitUSD: 10000,
      city: "Cairo",
      address: "",
      notes: "",
    });
  };

  const presetBrandPalettes = [
    { label: "TAMRON Blue", text: "#2B5BA3", bg: "#2B5BA315", border: "#2B5BA340", dot: "#2B5BA3" },
    { label: "Profoto White", text: "#18181B", bg: "#FFFFFF", border: "#E4E4E7", dot: "#0096D6" },
    { label: "Canon Red", text: "#CC0000", bg: "#CC000015", border: "#CC000035", dot: "#CC0000" },
    { label: "Nikon Yellow", text: "#FFE600", bg: "#000000", border: "#FFE60050", dot: "#FFE600" },
    { label: "Sony Black", text: "#FFFFFF", bg: "#000000", border: "#3F3F46", dot: "#FF5500" },
    { label: "Leica Red", text: "#FFFFFF", bg: "#E2001A", border: "#E2001A", dot: "#E2001A" },
    { label: "Godox Orange", text: "#FF6B00", bg: "#FF6B0015", border: "#FF6B0040", dot: "#FF6B00" },
    { label: "ARRI Blue", text: "#004F9F", bg: "#004F9F15", border: "#004F9F40", dot: "#004F9F" },
  ];

  interface NavItem {
    id: typeof activeTab;
    label: string;
    icon: React.ReactNode;
    count?: number;
    badge?: string;
  }

  interface NavSection {
    title: string;
    items: NavItem[];
  }

  // Nav Groups for the Sidebar
  const navSections: NavSection[] = [
    {
      title: "Core Operations",
      items: [
        { id: "overview", label: "Executive Overview", icon: <TrendingUp className="w-4 h-4" /> },
        { id: "orders", label: "Orders Fulfillment", icon: <ShoppingBag className="w-4 h-4" />, count: orders.length, badge: pendingOrdersCount > 0 ? `${pendingOrdersCount} New` : undefined },
        { id: "inventory", label: "Inventory & SKUs", icon: <Package className="w-4 h-4" />, count: inventory.length, badge: lowStockCount > 0 ? `${lowStockCount} Low` : undefined },
        { id: "brands", label: "Brand Bar Manager", icon: <Award className="w-4 h-4" />, count: brands.length, badge: `${brands.filter(b => b.isActive).length} Live` },
      ],
    },
    {
      title: "Storefront & Experience CMS",
      items: [
        { id: "homepage_cms", label: "Homepage Sections & Content", icon: <Layout className="w-4 h-4" />, badge: "Live Sync" },
      ],
    },
    {
      title: "Intelligence & Clients",
      items: [
        { id: "analytics", label: "Analytics & Finance", icon: <BarChart3 className="w-4 h-4" /> },
        { id: "studios", label: "VIP Studios CRM", icon: <Users className="w-4 h-4" />, count: studios.length },
        { id: "logistics", label: "Logistics & Dispatch", icon: <Truck className="w-4 h-4" /> },
      ],
    },
    {
      title: "Administration & Access",
      items: [
        { id: "roles_manager", label: "Admin Roles & Clients Hub", icon: <ShieldCheck className="w-4 h-4" />, count: adminStaffList.length, badge: "RBAC" },
      ],
    },
    {
      title: "Services & Promos",
      items: [
        { id: "tradeins", label: "Used Trade-In Desk", icon: <RefreshCw className="w-4 h-4" />, count: tradeIns.length },
        { id: "coupons", label: "Promos & Coupons", icon: <Tag className="w-4 h-4" /> },
        { id: "service", label: "Tech & Service Desk", icon: <Wrench className="w-4 h-4" /> },
      ],
    },
  ];

  // Restrict access if not Admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#09090B] text-white flex flex-col justify-between selection:bg-[#FFE600] selection:text-black font-sans">
        <header className="border-b border-[#27272A] px-6 py-4 flex items-center justify-between bg-[#121215]/80 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#FFE600] text-black px-2.5 py-1 font-black text-lg tracking-tighter uppercase font-sans mr-2 shadow-xs">
              ESA
            </div>
            <span className="font-black text-base tracking-widest uppercase">CAM HQ</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="rounded-xl text-xs border-[#27272A] bg-[#18181B] text-white">
              <Link href="/track-orders">Order Tracking Hub 📦</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="rounded-xl text-xs text-[#A1A1AA]">
              <Link href="/">Storefront</Link>
            </Button>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center p-6 my-8">
          <div className="max-w-md w-full text-center bg-[#141417] border border-[#27272A] rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] mx-auto flex items-center justify-center">
              <Lock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">Admin Operations Portal</h2>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                You are logged in as a <strong>VIP Client / Customer</strong> ({user?.name || "Client"}). The Operations Command Center is reserved for authorized ESACAM staff.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <Button asChild className="w-full h-11 rounded-2xl text-xs font-black gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] shadow-md">
                <Link href="/track-orders">
                  <Package className="w-4 h-4" />
                  <span>Go to Live Order Tracking &amp; Fleet Hub (تتبع طلباتك)</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-[#27272A] bg-[#18181B] text-white text-xs rounded-2xl h-10">
                <Link href="/login">
                  <ShieldCheck className="w-4 h-4 text-[#FFE600]" />
                  <span>Switch to Staff / Admin Account</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <footer className="border-t border-[#27272A] p-4 text-center text-xs text-[#71717A] font-mono">
          ESA CAM Security Gateway • Role-Based Access Control Active
        </footer>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-background text-foreground flex font-sans">
      {/* MOBILE SIDEBAR OVERLAY */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR NAVIGATION */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-card border-r border-border flex flex-col justify-between transition-transform duration-300 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar Top Branding */}
        <div className="p-5 border-b border-border space-y-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center font-bold ring-1 ring-amber-400/40">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-extrabold text-base tracking-tight">ESACAM</span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/25">
                    HQ
                  </span>
                </div>
                <p className="text-[9px] text-muted-foreground font-mono uppercase mt-0.5">
                  Merchant Workspace
                </p>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1 rounded-lg text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono bg-secondary/40 px-3 py-1.5 rounded-xl border border-border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="truncate">Store Live: <strong>Cairo Hub</strong></span>
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 no-scrollbar">
          {navSections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <p className="px-3 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </p>
              <div className="space-y-1">
                {section.items.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id as typeof activeTab);
                        setIsMobileSidebarOpen(false);
                      }}
                      className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-all cursor-pointer text-xs font-semibold ${
                        isActive
                          ? "bg-foreground text-background font-bold shadow-xs"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? "text-amber-400" : "text-muted-foreground"}>
                          {tab.icon}
                        </span>
                        <span>{tab.label}</span>
                      </div>

                      {tab.badge ? (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-amber-400 text-black font-bold">
                          {tab.badge}
                        </span>
                      ) : tab.count !== undefined ? (
                        <span className="text-[10px] font-mono opacity-60">
                          {tab.count}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Bottom Profile & Log Out */}
        <div className="p-4 border-t border-border bg-secondary/15 space-y-2">
          <div className="flex items-center justify-between px-2">
            <div className="min-w-0">
              <p className="text-xs font-bold text-foreground truncate">{user?.name || "Ahmed Mahmoud"}</p>
              <p className="text-[10px] text-muted-foreground font-mono">Store Director</p>
            </div>
            <Button
              onClick={logout}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 rounded-xl text-rose-500 hover:bg-rose-500/10 cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>

          <Button asChild variant="outline" size="sm" className="w-full rounded-xl text-xs font-semibold h-9">
            <Link href="/" className="flex items-center justify-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Storefront</span>
            </Link>
          </Button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 bg-background">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-border bg-secondary/50 text-foreground cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
            <div>
              <h2 className="font-extrabold text-base sm:text-lg text-foreground capitalize">
                {activeTab.replace("tradeins", "Trade-In Desk").replace("studios", "VIP Studios CRM").replace("coupons", "Promotions").replace("brands", "Brand Bar Manager").replace("inventory", "Inventory & Warehouse").replace("orders", "Orders Fulfillment").replace("overview", "Executive Overview").replace("analytics", "Analytics & Finance").replace("logistics", "Logistics & Dispatch").replace("service", "Tech Service Desk")}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {activeTab === "inventory" && (
              <Button onClick={() => setIsAddProductOpen(true)} size="sm" className="rounded-xl text-xs font-bold cursor-pointer gap-1.5 h-9">
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add SKU</span>
              </Button>
            )}
            {activeTab === "brands" && (
              <Button onClick={() => setIsAddBrandOpen(true)} size="sm" className="rounded-xl text-xs font-bold cursor-pointer gap-1.5 h-9">
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add Brand</span>
              </Button>
            )}
            <Button onClick={handleExportCSV} variant="outline" size="sm" className="rounded-xl text-xs font-semibold gap-1.5 h-9 cursor-pointer">
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </Button>
          </div>
        </header>

        {/* Dynamic Tab Workspaces */}
        <main className="flex-1 p-4 sm:p-8 space-y-8 max-w-7xl w-full">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-card border border-border rounded-3xl p-6 shadow-xs space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono uppercase text-muted-foreground">Total Revenue</span>
                    <div className="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-black font-mono text-foreground">
                    {formatPrice(totalRevenueUSD)}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>+18.4% vs last month</span>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono uppercase text-muted-foreground">Active Orders</span>
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-black font-mono text-foreground">
                    {orders.length} <span className="text-sm font-normal text-muted-foreground">orders</span>
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">{pendingOrdersCount} Prepping</span>
                    <span>•</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{inTransitCount} In Transit</span>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono uppercase text-muted-foreground">Stock Health</span>
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Package className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-black font-mono text-foreground">
                    {inventory.length} <span className="text-sm font-normal text-muted-foreground">SKUs</span>
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-mono font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{lowStockCount} items require re-order</span>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono uppercase text-muted-foreground">Active Brands</span>
                    <div className="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-black font-mono text-foreground">
                    {brands.filter(b => b.isActive).length} <span className="text-sm font-normal text-muted-foreground">/ {brands.length}</span>
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <span>Scrolling live on storefront</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent Activity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h3 className="font-bold text-base text-foreground">Live Order Fulfillment Queue</h3>
                      <p className="text-xs text-muted-foreground font-mono">Real-time store & studio orders</p>
                    </div>
                    <Button
                      onClick={() => setActiveTab("orders")}
                      variant="ghost"
                      size="sm"
                      className="text-xs font-semibold gap-1 text-primary cursor-pointer"
                    >
                      <span>View All Orders</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>

                  <div className="divide-y divide-border/60">
                    {isLoadingOrders ? (
                      <div className="py-8 text-center text-xs text-muted-foreground font-mono flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        <span>Loading live orders from database...</span>
                      </div>
                    ) : orders.length === 0 ? (
                      <div className="py-10 text-center space-y-2">
                        <ShoppingBag className="w-8 h-8 text-muted-foreground/50 mx-auto" />
                        <p className="text-xs font-semibold text-foreground">No customer orders yet</p>
                        <p className="text-[11px] text-muted-foreground font-mono">
                          New orders placed through the store checkout will appear here in real-time.
                        </p>
                      </div>
                    ) : (
                      orders.slice(0, 4).map((order) => (
                        <div key={order.id} className="py-3.5 first:pt-0 flex items-center justify-between gap-4">
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-foreground">{order.id}</span>
                              <span className="text-[11px] text-muted-foreground font-medium">• {order.customerName}</span>
                              {order.company && (
                                <Badge variant="secondary" className="text-[9px] font-mono">
                                  {order.company}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground truncate">
                              {order.items.map((i) => `${i.qty}x ${i.name}`).join(", ")}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 shrink-0 text-right">
                            <div>
                              <p className="font-mono text-xs font-bold text-foreground">{formatPrice(order.totalUSD)}</p>
                              <p className="text-[10px] font-mono text-muted-foreground">{order.paymentMethod}</p>
                            </div>

                            <span
                              className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                                order.status === "Delivered"
                                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                                  : order.status === "Out for Delivery"
                                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                                  : "bg-amber-400/10 text-amber-600 dark:text-amber-400 border-amber-400/25"
                              }`}
                            >
                              {order.status}
                            </span>

                            <Button
                              onClick={() => setSelectedOrder(order)}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 rounded-xl cursor-pointer"
                            >
                              <Eye className="w-4 h-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-card border border-border rounded-3xl p-6 shadow-xs space-y-4">
                    <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" /> Quick Operations
                    </h4>

                    <div className="grid grid-cols-1 gap-2.5">
                      <Button
                        onClick={() => setActiveTab("brands")}
                        className="w-full justify-start text-xs font-bold rounded-xl h-11 cursor-pointer"
                      >
                        <Award className="w-4 h-4 mr-2 text-amber-400" />
                        <span>Manage Brand Marquee Bar</span>
                      </Button>
                      <Button
                        onClick={() => setIsAddProductOpen(true)}
                        variant="outline"
                        className="w-full justify-start text-xs font-semibold rounded-xl h-11 cursor-pointer"
                      >
                        <Plus className="w-4 h-4 mr-2 text-primary" />
                        <span>Add New Camera SKU</span>
                      </Button>
                      <Button
                        onClick={() => setActiveTab("studios")}
                        variant="outline"
                        className="w-full justify-start text-xs font-semibold rounded-xl h-11 cursor-pointer"
                      >
                        <Building2 className="w-4 h-4 mr-2 text-primary" />
                        <span>VIP Studio Accounts & RFQs</span>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card border border-amber-400/30 rounded-3xl p-6 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-amber-600 dark:text-amber-400 uppercase flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" /> Low Inventory Alerts
                      </span>
                      <Badge variant="secondary" className="text-[10px] font-mono">
                        {lowStockCount} SKUs
                      </Badge>
                    </div>
                    <div className="space-y-2 text-xs">
                      {inventory
                        .filter((p) => (p.stockCount || 5) <= 3)
                        .slice(0, 3)
                        .map((p) => (
                          <div key={p.id} className="flex items-center justify-between py-1 border-b border-border/50 last:border-0">
                            <span className="font-medium truncate max-w-[180px]">{p.name}</span>
                            <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">
                              {p.stockCount} left
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ANALYTICS & FINANCIAL REPORTS */}
          {activeTab === "analytics" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Revenue & Sales Performance Analytics</h3>
                    <p className="text-xs text-muted-foreground font-mono">Category breakdown, gross margins, and regional sales distribution</p>
                  </div>
                  <Button onClick={handleExportCSV} className="rounded-xl text-xs font-bold gap-1.5 cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Sales Report (CSV)</span>
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="p-5 rounded-2xl bg-secondary/30 border border-border space-y-2">
                    <span className="text-[11px] font-mono uppercase text-muted-foreground font-bold">Average Order Value (AOV)</span>
                    <p className="text-2xl font-black font-mono text-foreground">{formatPrice(3840)}</p>
                    <p className="text-[11px] text-emerald-500 font-semibold font-mono">+12.5% Cinema Bundles</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-secondary/30 border border-border space-y-2">
                    <span className="text-[11px] font-mono uppercase text-muted-foreground font-bold">Gross Margin Rate</span>
                    <p className="text-2xl font-black font-mono text-foreground">24.8%</p>
                    <p className="text-[11px] text-muted-foreground font-mono">Industry Leading for Optics</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-secondary/30 border border-border space-y-2">
                    <span className="text-[11px] font-mono uppercase text-muted-foreground font-bold">Customer Return Rate</span>
                    <p className="text-2xl font-black font-mono text-foreground">&lt; 0.2%</p>
                    <p className="text-[11px] text-emerald-500 font-semibold font-mono">100% Authorized Stock</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="font-bold text-sm text-foreground">Revenue by Gear Category</h4>
                  <div className="space-y-3 text-xs font-mono">
                    {[
                      { cat: "Cinema Cameras & Bodies", rev: 84200, pct: "40%", color: "bg-amber-400" },
                      { cat: "Master Cinema & Prime Lenses", rev: 62400, pct: "30%", color: "bg-blue-500" },
                      { cat: "Studio & Location Lighting", rev: 38900, pct: "18%", color: "bg-emerald-500" },
                      { cat: "Broadcast Audio & Wireless Mics", rev: 24100, pct: "12%", color: "bg-purple-500" },
                    ].map((item, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between font-bold">
                          <span className="font-sans font-semibold">{item.cat}</span>
                          <span>{formatPrice(item.rev)} ({item.pct})</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-secondary overflow-hidden">
                          <div style={{ width: item.pct }} className={`h-full ${item.color} rounded-full`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: HOMEPAGE SECTIONS & CONTENT CMS */}
          {activeTab === "homepage_cms" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* CMS Top Header */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFE600]/10 text-amber-600 dark:text-[#FFE600] border border-[#FFE600]/30 flex items-center justify-center font-bold">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Homepage Sections &amp; Content CMS</h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        Direct visual management of headlines, hero slides, photography, and showcase text with live database sync
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <Link
                    href="/"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-secondary/40 hover:bg-secondary text-foreground text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFE600]" />
                    <span>Live Storefront Preview</span>
                  </Link>

                  <Button
                    onClick={resetAllHomepageContent}
                    variant="outline"
                    size="sm"
                    className="rounded-xl text-xs font-bold gap-1.5 cursor-pointer text-muted-foreground hover:text-rose-500 hover:border-rose-500/30"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Sections to Factory Defaults</span>
                  </Button>
                </div>
              </div>

              {/* Section Sub-Navigation Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                {[
                  { id: "hero", label: "Hero Showcase & Slides", icon: <Sparkles className="w-3.5 h-3.5 text-[#FFE600]" />, count: heroSlidesDraft.length },
                  { id: "stage", label: "Studio Stage (Redefine Vision)", icon: <Camera className="w-3.5 h-3.5 text-blue-500" /> },
                  { id: "collage", label: "Organic Styles Collage", icon: <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" /> },
                  { id: "editorial", label: "Editorial Story Banner", icon: <FileText className="w-3.5 h-3.5 text-purple-500" /> },
                  { id: "best_sellers", label: "Flagship Editions Carousel", icon: <Award className="w-3.5 h-3.5 text-emerald-500" /> },
                  { id: "announcement", label: "Top Announcement Strip", icon: <Globe className="w-3.5 h-3.5 text-[#FFE600]" /> },
                  { id: "footer", label: "Footer & Experience Hub", icon: <Building2 className="w-3.5 h-3.5 text-zinc-400" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCmsSection(tab.id as typeof cmsSection)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                      cmsSection === tab.id
                        ? "bg-foreground text-background border-foreground shadow-xs font-black"
                        : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    {tab.count !== undefined && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-secondary/80 text-muted-foreground">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* CMS SECTION 1: HERO SHOWCASE & SLIDER */}
              {cmsSection === "hero" && (
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Hero Slider &amp; Flagship Showcase</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Add, delete, and customize hero slides, background camera visuals, 8K RAW chips, and featured catalog products
                      </p>
                    </div>

                    {/* Slide Selector Pills & Add/Delete Buttons */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-secondary/40 p-1 rounded-2xl border border-border">
                        {heroSlidesDraft.map((s, idx) => (
                          <button
                            key={s.id || idx}
                            onClick={() => setActiveHeroSlideIdx(idx)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              activeHeroSlideIdx === idx
                                ? "bg-card text-foreground shadow-xs font-black"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            Slide {idx + 1}: {s.badge?.slice(0, 14) || `Slide ${idx + 1}`}
                          </button>
                        ))}
                      </div>

                      {/* Add New Slide Button */}
                      <Button
                        type="button"
                        onClick={() => {
                          const newSlideIdx = heroSlidesDraft.length + 1;
                          const newSlide = {
                            id: `slide-${Date.now()}`,
                            productId: "sony-fx3",
                            badge: `FLAGSHIP RIG ${newSlideIdx}`,
                            tagline: "NEXT-GEN CINEMA SYSTEM",
                            headline: "CINEMA UNLEASHED.",
                            subheadline: "8K INTERNAL PRO RECORDING",
                            description: "Engineered for relentless creators with uncompressed dynamic range and active cooling.",
                            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=85",
                            primaryCtaText: "Explore Cinema Store",
                            primaryCtaLink: "/store",
                            secondaryCtaText: "Build Master Rig",
                            secondaryCtaLink: "/store",
                            specs: [
                              { label: "Resolution", value: "8.3K Full-Frame" },
                              { label: "Sensor", value: "Stacked CMOS" },
                              { label: "Dynamic Range", value: "15+ Stops" },
                              { label: "Autofocus", value: "LiDAR AF" },
                            ],
                          };
                          setHeroSlidesDraft([...heroSlidesDraft, newSlide]);
                          setActiveHeroSlideIdx(heroSlidesDraft.length);
                          toast.success(`Slide ${newSlideIdx} added! Customize it and click Save.`);
                        }}
                        size="sm"
                        className="rounded-xl text-xs font-bold gap-1.5 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Slide (إضافة سلايد جديد)</span>
                      </Button>

                      {/* Delete Slide Button */}
                      {heroSlidesDraft.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => {
                            const updated = heroSlidesDraft.filter((_, idx) => idx !== activeHeroSlideIdx);
                            setHeroSlidesDraft(updated);
                            setActiveHeroSlideIdx(Math.max(0, activeHeroSlideIdx - 1));
                            toast.info("Slide removed from slider draft");
                          }}
                          variant="ghost"
                          size="sm"
                          className="rounded-xl text-xs font-bold gap-1 cursor-pointer text-rose-500 hover:text-rose-600 hover:bg-rose-500/10"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete Slide</span>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Active Slide Form */}
                  {heroSlidesDraft[activeHeroSlideIdx] && (
                    <div className="space-y-6 text-xs">
                      {/* Product Selector for Hero Slide */}
                      <div className="p-4 rounded-2xl bg-secondary/25 border border-border space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="font-bold text-foreground font-mono text-[11px] uppercase flex items-center gap-1.5">
                            <Camera className="w-4 h-4 text-[#FFE600]" /> Featured Product for Slide {activeHeroSlideIdx + 1} (المنتج المرتبط بالسلايد)
                          </label>
                          <span className="text-[10px] text-muted-foreground font-mono">
                            Auto-syncs Spotlight card &amp; Quick View
                          </span>
                        </div>

                        <select
                          value={heroSlidesDraft[activeHeroSlideIdx].productId || "sony-fx3"}
                          onChange={(e) => {
                            const selectedId = e.target.value;
                            const found = PRODUCTS.find((p) => p.id === selectedId);
                            if (found) {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = {
                                ...updated[activeHeroSlideIdx],
                                productId: found.id,
                              };
                              setHeroSlidesDraft(updated);
                              toast.success(`Linked "${found.name}" to Slide ${activeHeroSlideIdx + 1}!`);
                            }
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground font-sans font-bold text-xs cursor-pointer focus:outline-hidden"
                        >
                          {PRODUCTS.map((prod) => (
                            <option key={prod.id} value={prod.id}>
                              [{prod.brand.toUpperCase()}] {prod.name} — ${prod.price.toLocaleString()} ({prod.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="space-y-1">
                          <label className="font-semibold text-foreground block">Top Micro Badge</label>
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].badge}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], badge: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="FLAGSHIP CINEMA SYSTEM"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-foreground block">Tagline Slogan</label>
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].tagline}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], tagline: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="AT THE HEART OF THE IMAGE"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-foreground block">Primary Large Headline</label>
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].headline}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], headline: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="READY. ACTION."
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-sans font-black text-sm"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-foreground block">Yellow Subheadline</label>
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].subheadline}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], subheadline: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="8K 60P INTERNAL RAW"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono font-bold"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Paragraph Description</label>
                        <textarea
                          rows={3}
                          value={heroSlidesDraft[activeHeroSlideIdx].description}
                          onChange={(e) => {
                            const updated = [...heroSlidesDraft];
                            updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], description: e.target.value };
                            setHeroSlidesDraft(updated);
                          }}
                          placeholder="Engineered for relentless creators..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                        />
                      </div>

                      {/* 4 Camera Specs Grid */}
                      <div className="space-y-2">
                        <label className="font-bold text-foreground block font-mono text-[11px] uppercase">
                          4 Signature Technical Spec Chips
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {(heroSlidesDraft[activeHeroSlideIdx].specs || []).map((spec, sIdx) => (
                            <div key={sIdx} className="p-3 bg-secondary/20 border border-border rounded-xl space-y-1.5">
                              <input
                                type="text"
                                value={spec.label}
                                onChange={(e) => {
                                  const updated = [...heroSlidesDraft];
                                  const specs = [...(updated[activeHeroSlideIdx].specs || [])];
                                  specs[sIdx] = { ...specs[sIdx], label: e.target.value };
                                  updated[activeHeroSlideIdx].specs = specs;
                                  setHeroSlidesDraft(updated);
                                }}
                                placeholder="Spec Label"
                                className="w-full px-2 py-1 text-[10px] font-mono uppercase bg-transparent border-b border-border text-muted-foreground focus:outline-hidden"
                              />
                              <input
                                type="text"
                                value={spec.value}
                                onChange={(e) => {
                                  const updated = [...heroSlidesDraft];
                                  const specs = [...(updated[activeHeroSlideIdx].specs || [])];
                                  specs[sIdx] = { ...specs[sIdx], value: e.target.value };
                                  updated[activeHeroSlideIdx].specs = specs;
                                  setHeroSlidesDraft(updated);
                                }}
                                placeholder="Spec Value"
                                className="w-full px-2 py-1 text-xs font-mono font-bold bg-transparent text-foreground focus:outline-hidden"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons Config */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 bg-secondary/20 border border-border rounded-2xl space-y-2">
                          <span className="font-bold text-foreground font-mono text-[11px] block">
                            Primary CTA Button (Yellow)
                          </span>
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].primaryCtaText || "Explore Cinema Store"}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], primaryCtaText: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="Button Label"
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground"
                          />
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].primaryCtaLink || "/store"}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], primaryCtaLink: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="Destination Link (/store)"
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>

                        <div className="p-4 bg-secondary/20 border border-border rounded-2xl space-y-2">
                          <span className="font-bold text-foreground font-mono text-[11px] block">
                            Secondary CTA Button (Outline)
                          </span>
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].secondaryCtaText || "Build Master Rig"}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], secondaryCtaText: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="Button Label"
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground"
                          />
                          <input
                            type="text"
                            value={heroSlidesDraft[activeHeroSlideIdx].secondaryCtaLink || "/store"}
                            onChange={(e) => {
                              const updated = [...heroSlidesDraft];
                              updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], secondaryCtaLink: e.target.value };
                              setHeroSlidesDraft(updated);
                            }}
                            placeholder="Destination Link (/store)"
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                      </div>

                      {/* Hero Slide Image File Upload & URL */}
                      <div className="p-5 bg-secondary/20 border border-border rounded-2xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-foreground font-mono text-[11px] uppercase flex items-center gap-1.5">
                            <ImageIcon className="w-4 h-4 text-[#FFE600]" /> Slide Background Photo (High-Res)
                          </span>
                          <span className="text-[10px] text-muted-foreground font-mono">Upload Device File or Paste URL</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="flex flex-col items-center justify-center gap-2 p-5 border-2 border-dashed border-border hover:border-[#FFE600]/50 rounded-2xl bg-card cursor-pointer transition-colors text-center">
                              <Upload className="w-6 h-6 text-[#FFE600]" />
                              <div>
                                <p className="font-bold text-foreground text-xs">Browse Photo from Computer</p>
                                <p className="text-[10px] text-muted-foreground font-mono">JPG, PNG, WebP up to 8MB</p>
                              </div>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  const reader = new FileReader();
                                  reader.onload = () => {
                                    const updated = [...heroSlidesDraft];
                                    updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], image: reader.result as string };
                                    setHeroSlidesDraft(updated);
                                    toast.success("Hero image updated from local file!");
                                  };
                                  reader.readAsDataURL(file);
                                }}
                                className="hidden"
                              />
                            </label>

                            <input
                              type="url"
                              value={heroSlidesDraft[activeHeroSlideIdx].image}
                              onChange={(e) => {
                                const updated = [...heroSlidesDraft];
                                updated[activeHeroSlideIdx] = { ...updated[activeHeroSlideIdx], image: e.target.value };
                                setHeroSlidesDraft(updated);
                              }}
                              placeholder="Or paste https://images.unsplash.com/... direct URL"
                              className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                            />
                          </div>

                          {/* Live Image & Spotlight Card Preview */}
                          <div className="space-y-3">
                            <div className="relative h-44 rounded-2xl overflow-hidden bg-black border border-border group">
                              <img
                                src={heroSlidesDraft[activeHeroSlideIdx].image}
                                alt="Hero slide preview"
                                className="w-full h-full object-cover brightness-50"
                              />
                              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                                <span className="text-[10px] font-mono text-[#FFE600] font-bold">
                                  {heroSlidesDraft[activeHeroSlideIdx].badge}
                                </span>
                                <p className="font-black text-sm uppercase">
                                  {heroSlidesDraft[activeHeroSlideIdx].headline}
                                </p>
                                <p className="text-xs text-[#FFE600] font-bold font-mono">
                                  {heroSlidesDraft[activeHeroSlideIdx].subheadline}
                                </p>
                              </div>
                            </div>

                            {/* Linked Product Spotlight Preview with Direct Dropdown */}
                            {(() => {
                              const heroProd = PRODUCTS.find((p) => p.id === (heroSlidesDraft[activeHeroSlideIdx].productId || "sony-fx3")) || PRODUCTS[0];
                              return (
                                <div className="p-3.5 bg-black/95 border border-[#FFE600]/40 rounded-2xl space-y-2 text-white text-xs shadow-lg">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-[#FFE600] uppercase font-bold flex items-center gap-1">
                                      <Camera className="w-3.5 h-3.5 text-[#FFE600]" /> Linked Hero Spotlight Product (المنتج المعروض على السلايد)
                                    </span>
                                    <span className="text-[10px] font-mono text-emerald-400 font-bold">● IN STOCK</span>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center p-1.5 shrink-0">
                                      <img src={heroProd.image} alt={heroProd.name} className="max-h-full max-w-full object-contain" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="font-black text-white truncate text-xs uppercase">{heroProd.name}</p>
                                      <p className="text-[10px] text-[#A1A1AA] font-mono">{heroProd.brand} • {heroProd.category.toUpperCase()}</p>
                                      <p className="font-mono text-[#FFE600] text-xs font-black mt-0.5">{formatPrice(heroProd.price)}</p>
                                    </div>
                                  </div>

                                  {/* Quick Switch Dropdown directly here */}
                                  <div className="pt-1.5 border-t border-[#27272A]">
                                    <label className="text-[10px] font-mono text-[#A1A1AA] block mb-1">
                                      تغيير المنتج المعروض (Change Product):
                                    </label>
                                    <select
                                      value={heroSlidesDraft[activeHeroSlideIdx].productId || "sony-fx3"}
                                      onChange={(e) => {
                                        const selectedId = e.target.value;
                                        const found = PRODUCTS.find((p) => p.id === selectedId);
                                        if (found) {
                                          const updated = [...heroSlidesDraft];
                                          updated[activeHeroSlideIdx] = {
                                            ...updated[activeHeroSlideIdx],
                                            productId: found.id,
                                          };
                                          setHeroSlidesDraft(updated);
                                          toast.success(`Changed Hero Product to "${found.name}"!`);
                                        }
                                      }}
                                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#3F3F46] bg-[#18181B] text-white font-sans text-xs cursor-pointer focus:border-[#FFE600] focus:outline-hidden"
                                    >
                                      {PRODUCTS.map((prod) => (
                                        <option key={prod.id} value={prod.id}>
                                          [{prod.brand.toUpperCase()}] {prod.name} — ${prod.price.toLocaleString()}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      </div>



                      {/* Save Buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                        <Button
                          onClick={() => resetHomepageSection("hero")}
                          variant="ghost"
                          size="sm"
                          className="rounded-xl text-xs cursor-pointer text-muted-foreground hover:text-foreground"
                        >
                          <RotateCcw className="w-3.5 h-3.5 mr-1" />
                          <span>Reset Hero to Defaults</span>
                        </Button>

                        <Button
                          onClick={() => updateHomepageSection("hero", { slides: heroSlidesDraft })}
                          className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                        >
                          <Check className="w-4 h-4" />
                          <span>Save Hero Slides &amp; Publish Live</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* CMS SECTION 2: STUDIO STAGE ("REDEFINE YOUR VISION") */}
              {cmsSection === "stage" && (
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Studio Stage (&ldquo;Redefine Your Vision&rdquo;)</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Manage the on-set production showcase, camera viewfinder HUD metadata, and featured equipment card
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Section Badge</label>
                        <input
                          type="text"
                          value={stageDraft.badge}
                          onChange={(e) => setStageDraft({ ...stageDraft, badge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Section Headline Title</label>
                        <input
                          type="text"
                          value={stageDraft.title}
                          onChange={(e) => setStageDraft({ ...stageDraft, title: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Project Title</label>
                        <input
                          type="text"
                          value={stageDraft.projectTitle}
                          onChange={(e) => setStageDraft({ ...stageDraft, projectTitle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Production Client</label>
                        <input
                          type="text"
                          value={stageDraft.clientName}
                          onChange={(e) => setStageDraft({ ...stageDraft, clientName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Head DP / Director</label>
                        <input
                          type="text"
                          value={stageDraft.directorName}
                          onChange={(e) => setStageDraft({ ...stageDraft, directorName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                        />
                      </div>
                    </div>

                    {/* HUD Technical Specs */}
                    <div className="p-4 bg-secondary/20 border border-border rounded-2xl space-y-3">
                      <span className="font-bold text-foreground font-mono text-[11px] uppercase block">
                        HUD Viewfinder Camera Metadata
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Format Badge</label>
                          <input
                            type="text"
                            value={stageDraft.formatBadge}
                            onChange={(e) => setStageDraft({ ...stageDraft, formatBadge: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Resolution</label>
                          <input
                            type="text"
                            value={stageDraft.resolution}
                            onChange={(e) => setStageDraft({ ...stageDraft, resolution: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Frame Rate</label>
                          <input
                            type="text"
                            value={stageDraft.frameRate}
                            onChange={(e) => setStageDraft({ ...stageDraft, frameRate: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">ISO Setting</label>
                          <input
                            type="text"
                            value={stageDraft.iso}
                            onChange={(e) => setStageDraft({ ...stageDraft, iso: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Color Profile</label>
                          <input
                            type="text"
                            value={stageDraft.colorProfile}
                            onChange={(e) => setStageDraft({ ...stageDraft, colorProfile: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Featured Gear Card with Catalog Product Picker */}
                    <div className="p-5 bg-secondary/20 border border-border rounded-2xl space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-bold text-foreground font-mono text-[11px] uppercase flex items-center gap-1.5">
                          <Camera className="w-4 h-4 text-[#FFE600]" /> Featured Gear Card (اختر المعدة من الكتالوج)
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          Linked to live store inventory &amp; Quick View
                        </span>
                      </div>

                      {/* Product Selector Dropdown */}
                      <div className="space-y-1.5">
                        <label className="font-semibold text-foreground block text-xs">
                          اختر المنتج المعروض من الكتالوج (Select Catalog Product) *
                        </label>
                        <select
                          value={stageDraft.featuredProductId || "sony-fx3"}
                          onChange={(e) => {
                            const selectedId = e.target.value;
                            const found = PRODUCTS.find((p) => p.id === selectedId);
                            if (found) {
                              setStageDraft({
                                ...stageDraft,
                                featuredProductId: found.id,
                                gearName: found.name,
                                gearPrice: found.price,
                              });
                              toast.success(`Selected "${found.name}" as featured setup!`);
                            }
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground font-sans font-bold text-xs cursor-pointer focus:outline-hidden"
                        >
                          {PRODUCTS.map((prod) => (
                            <option key={prod.id} value={prod.id}>
                              [{prod.brand.toUpperCase()}] {prod.name} — ${prod.price.toLocaleString()} ({prod.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">
                            Gear Role Badge (دور المعدة في المشهد)
                          </label>
                          <input
                            type="text"
                            value={stageDraft.gearRole}
                            onChange={(e) => setStageDraft({ ...stageDraft, gearRole: e.target.value })}
                            placeholder="FEATURED SETUP"
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">
                            Shot Setting / Technical Note (إعدادات التصوير)
                          </label>
                          <input
                            type="text"
                            value={stageDraft.gearSetting}
                            onChange={(e) => setStageDraft({ ...stageDraft, gearSetting: e.target.value })}
                            placeholder="4K 120p • Active Fan Cooling"
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-xs"
                          />
                        </div>
                      </div>

                      {/* Live Card Preview matching the screenshot */}
                      {(() => {
                        const activeProd = PRODUCTS.find((p) => p.id === (stageDraft.featuredProductId || "sony-fx3")) || PRODUCTS[0];
                        return (
                          <div className="p-4 rounded-2xl bg-black border border-[#27272A] max-w-sm space-y-3 shadow-xl relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-[#FFE600] [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                            
                            <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                              <span className="flex items-center gap-1 text-[#FFE600] font-bold">
                                <Camera className="w-3.5 h-3.5" />
                                {stageDraft.gearRole || "FEATURED SETUP"}
                              </span>
                              <span className="text-emerald-400 font-bold text-[10px]">● IN STOCK</span>
                            </div>

                            <div className="h-36 rounded-xl overflow-hidden bg-[#18181B] relative flex items-center justify-center p-2">
                              <img
                                src={activeProd.image}
                                alt={activeProd.name}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>

                            <div>
                              <p className="font-black text-xs uppercase text-white line-clamp-2">
                                {stageDraft.gearName || activeProd.name}
                              </p>
                              <p className="text-[10px] text-[#A1A1AA] font-mono uppercase mt-0.5">
                                {activeProd.brand} • {activeProd.category}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-[#27272A] flex items-center justify-between">
                              <div>
                                <span className="text-[9px] text-[#A1A1AA] block font-mono">Official Price</span>
                                <span className="text-sm font-black font-mono text-[#FFE600]">
                                  {formatPrice(activeProd.price)}
                                </span>
                              </div>
                              <span className="px-3 py-1.5 rounded-sm bg-white text-black font-black text-[10px] uppercase tracking-wider flex items-center gap-1">
                                <Eye className="w-3 h-3" /> QUICK VIEW
                              </span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>


                    {/* Image Manager */}
                    <div className="p-4 bg-secondary/20 border border-border rounded-2xl space-y-3">
                      <span className="font-bold text-foreground font-mono text-[11px] uppercase block">
                        Stage Background Image
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="flex flex-col items-center justify-center gap-2 p-4 border-2 border-dashed border-border hover:border-[#FFE600]/50 rounded-2xl bg-card cursor-pointer transition-colors text-center">
                            <Upload className="w-5 h-5 text-[#FFE600]" />
                            <span className="font-bold text-xs">Upload Image File</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const reader = new FileReader();
                                reader.onload = () => {
                                  setStageDraft({ ...stageDraft, image: reader.result as string });
                                  toast.success("Stage image loaded from file");
                                };
                                reader.readAsDataURL(file);
                              }}
                              className="hidden"
                            />
                          </label>
                          <input
                            type="url"
                            value={stageDraft.image}
                            onChange={(e) => setStageDraft({ ...stageDraft, image: e.target.value })}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                        <div className="relative h-36 rounded-xl overflow-hidden bg-black border border-border">
                          <img src={stageDraft.image} alt="Stage preview" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <Button
                        onClick={() => resetHomepageSection("studioStage")}
                        variant="ghost"
                        size="sm"
                        className="rounded-xl text-xs cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        <RotateCcw className="w-3.5 h-3.5 mr-1" />
                        <span>Reset to Defaults</span>
                      </Button>
                      <Button
                        onClick={() => updateHomepageSection("studioStage", stageDraft)}
                        className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Studio Stage &amp; Publish Live</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* CMS SECTION 3: STYLES COLLAGE */}
              {cmsSection === "collage" && (
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Organic Styles Collage</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Manage the overlapping creator photo collage, floating spotlight lens pin, and optics CTA
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Section Badge</label>
                        <input
                          type="text"
                          value={collageDraft.badge}
                          onChange={(e) => setCollageDraft({ ...collageDraft, badge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Section Title</label>
                        <input
                          type="text"
                          value={collageDraft.title}
                          onChange={(e) => setCollageDraft({ ...collageDraft, title: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-black"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Main Description</label>
                      <textarea
                        rows={3}
                        value={collageDraft.description}
                        onChange={(e) => setCollageDraft({ ...collageDraft, description: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                      />
                    </div>

                    {/* Dual Images Manager */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-secondary/20 border border-border rounded-2xl space-y-3">
                        <span className="font-bold text-foreground font-mono text-[11px] uppercase block">
                          Primary Large Photo (Left)
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          id="collage-p-img"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = () => {
                              setCollageDraft({ ...collageDraft, primaryImage: reader.result as string });
                              toast.success("Primary photo updated!");
                            };
                            reader.readAsDataURL(file);
                          }}
                          className="hidden"
                        />
                        <label
                          htmlFor="collage-p-img"
                          className="p-3 border border-dashed border-border rounded-xl bg-card flex items-center justify-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground"
                        >
                          <Upload className="w-4 h-4 text-[#FFE600]" />
                          <span>Browse Device Photo</span>
                        </label>
                        <input
                          type="url"
                          value={collageDraft.primaryImage}
                          onChange={(e) => setCollageDraft({ ...collageDraft, primaryImage: e.target.value })}
                          placeholder="Or Image URL"
                          className="w-full px-3 py-1.5 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                        />
                        <div className="relative h-28 rounded-xl overflow-hidden bg-black border border-border">
                          <img src={collageDraft.primaryImage} alt="Primary preview" className="w-full h-full object-cover" />
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/20 border border-border rounded-2xl space-y-3">
                        <span className="font-bold text-foreground font-mono text-[11px] uppercase block">
                          Secondary Overlapping Photo (Right)
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          id="collage-s-img"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = () => {
                              setCollageDraft({ ...collageDraft, secondaryImage: reader.result as string });
                              toast.success("Secondary photo updated!");
                            };
                            reader.readAsDataURL(file);
                          }}
                          className="hidden"
                        />
                        <label
                          htmlFor="collage-s-img"
                          className="p-3 border border-dashed border-border rounded-xl bg-card flex items-center justify-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground"
                        >
                          <Upload className="w-4 h-4 text-[#FFE600]" />
                          <span>Browse Device Photo</span>
                        </label>
                        <input
                          type="url"
                          value={collageDraft.secondaryImage}
                          onChange={(e) => setCollageDraft({ ...collageDraft, secondaryImage: e.target.value })}
                          placeholder="Or Image URL"
                          className="w-full px-3 py-1.5 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                        />
                        <div className="relative h-28 rounded-xl overflow-hidden bg-black border border-border">
                          <img src={collageDraft.secondaryImage} alt="Secondary preview" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Lens Badge Card */}
                    <div className="p-5 bg-secondary/20 border border-border rounded-2xl space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground font-mono text-[11px] uppercase block">
                          Floating Lens Spotlight Badge (كارت العدسة العائم)
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          Quick pick from catalog or customize
                        </span>
                      </div>

                      {/* Product Selector Dropdown for Lens Spotlight */}
                      <div className="space-y-1.5">
                        <label className="font-semibold text-foreground block text-xs">
                          اختر العدسة / المنتج من الكتالوج (Select Spotlight Product)
                        </label>
                        <select
                          value={collageDraft.lensName}
                          onChange={(e) => {
                            const found = PRODUCTS.find((p) => p.name === e.target.value);
                            if (found) {
                              setCollageDraft({
                                ...collageDraft,
                                lensName: found.name,
                                lensPrice: found.price,
                                lensRating: `${found.rating || 5.0}`,
                                lensReviews: `${found.reviewsCount || 180} Reviews`,
                              });
                              toast.success(`Selected "${found.name}" as spotlight lens!`);
                            }
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground font-sans font-bold text-xs cursor-pointer focus:outline-hidden"
                        >
                          <option value="">— اختر من منتجات الكتالوج —</option>
                          {PRODUCTS.map((prod) => (
                            <option key={prod.id} value={prod.name}>
                              [{prod.brand.toUpperCase()}] {prod.name} — ${prod.price.toLocaleString()} ({prod.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Lens Name</label>
                          <input
                            type="text"
                            value={collageDraft.lensName}
                            onChange={(e) => setCollageDraft({ ...collageDraft, lensName: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-bold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Rating / Star</label>
                          <input
                            type="text"
                            value={collageDraft.lensRating}
                            onChange={(e) => setCollageDraft({ ...collageDraft, lensRating: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Reviews Count</label>
                          <input
                            type="text"
                            value={collageDraft.lensReviews}
                            onChange={(e) => setCollageDraft({ ...collageDraft, lensReviews: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted-foreground block">Official Price ($)</label>
                          <input
                            type="number"
                            value={collageDraft.lensPrice}
                            onChange={(e) => setCollageDraft({ ...collageDraft, lensPrice: Number(e.target.value) })}
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono font-bold"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <Button
                        onClick={() => resetHomepageSection("stylesCollage")}
                        variant="ghost"
                        size="sm"
                        className="rounded-xl text-xs cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        <RotateCcw className="w-3.5 h-3.5 mr-1" />
                        <span>Reset to Defaults</span>
                      </Button>
                      <Button
                        onClick={() => updateHomepageSection("stylesCollage", collageDraft)}
                        className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Styles Collage &amp; Publish Live</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* CMS SECTION 4: EDITORIAL STORY BANNER */}
              {cmsSection === "editorial" && (
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Editorial Story &amp; Masterclass Banner</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Manage technical articles, optical engineering stories, tags, and masterclass callouts
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Header Tag / Reading Time</label>
                      <input
                        type="text"
                        value={editorialDraft.headerTag}
                        onChange={(e) => setEditorialDraft({ ...editorialDraft, headerTag: e.target.value })}
                        placeholder="Nikon & Cinema Engineering Masterclass • 6 Min Read"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Story Headline Title</label>
                      <input
                        type="text"
                        value={editorialDraft.title}
                        onChange={(e) => setEditorialDraft({ ...editorialDraft, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-black text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Full Story Article Text</label>
                      <textarea
                        rows={4}
                        value={editorialDraft.description}
                        onChange={(e) => setEditorialDraft({ ...editorialDraft, description: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Topic Tags (Comma Separated)</label>
                      <input
                        type="text"
                        value={(editorialDraft.tags || []).join(", ")}
                        onChange={(e) => setEditorialDraft({ ...editorialDraft, tags: e.target.value.split(",").map(t => t.trim()) })}
                        placeholder="8K Cinema, Z-Mount Optics, Color Science, Anamorphic, LiDAR AF"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                      />
                    </div>

                    {/* Image Manager */}
                    <div className="p-4 bg-secondary/20 border border-border rounded-2xl space-y-3">
                      <span className="font-bold text-foreground font-mono text-[11px] uppercase block">
                        Story Banner Photo
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="flex flex-col items-center justify-center gap-2 p-4 border-2 border-dashed border-border hover:border-[#FFE600]/50 rounded-2xl bg-card cursor-pointer transition-colors text-center">
                            <Upload className="w-5 h-5 text-[#FFE600]" />
                            <span className="font-bold text-xs">Upload Story Image</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const reader = new FileReader();
                                reader.onload = () => {
                                  setEditorialDraft({ ...editorialDraft, image: reader.result as string });
                                  toast.success("Story photo updated!");
                                };
                                reader.readAsDataURL(file);
                              }}
                              className="hidden"
                            />
                          </label>
                          <input
                            type="url"
                            value={editorialDraft.image}
                            onChange={(e) => setEditorialDraft({ ...editorialDraft, image: e.target.value })}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                          />
                        </div>
                        <div className="relative h-36 rounded-xl overflow-hidden bg-black border border-border">
                          <img src={editorialDraft.image} alt="Editorial preview" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <Button
                        onClick={() => resetHomepageSection("editorial")}
                        variant="ghost"
                        size="sm"
                        className="rounded-xl text-xs cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        <RotateCcw className="w-3.5 h-3.5 mr-1" />
                        <span>Reset to Defaults</span>
                      </Button>
                      <Button
                        onClick={() => updateHomepageSection("editorial", editorialDraft)}
                        className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Editorial Banner &amp; Publish Live</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* CMS SECTION 5: FLAGSHIP EDITIONS CAROUSEL */}
              {cmsSection === "best_sellers" && (
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Flagship Cinema Editions Carousel</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Header texts for the swipeable horizontal cinema gear showcase
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Section Badge</label>
                        <input
                          type="text"
                          value={bestSellersDraft.badge}
                          onChange={(e) => setBestSellersDraft({ ...bestSellersDraft, badge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Section Title</label>
                        <input
                          type="text"
                          value={bestSellersDraft.title}
                          onChange={(e) => setBestSellersDraft({ ...bestSellersDraft, title: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-black"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Section Subtitle</label>
                      <input
                        type="text"
                        value={bestSellersDraft.subtitle}
                        onChange={(e) => setBestSellersDraft({ ...bestSellersDraft, subtitle: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                      />
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <Button
                        onClick={() => resetHomepageSection("bestSellers")}
                        variant="ghost"
                        size="sm"
                        className="rounded-xl text-xs cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        <RotateCcw className="w-3.5 h-3.5 mr-1" />
                        <span>Reset to Defaults</span>
                      </Button>
                      <Button
                        onClick={() => updateHomepageSection("bestSellers", bestSellersDraft)}
                        className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Flagship Carousel &amp; Publish Live</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* CMS SECTION 6: ANNOUNCEMENT STRIP */}
              {cmsSection === "announcement" && (
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Top Header Announcement Strip</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Nikon-style notification bar at the very top of the website
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Left Announcement Message</label>
                      <input
                        type="text"
                        value={announcementDraft.announcementText}
                        onChange={(e) => setAnnouncementDraft({ ...announcementDraft, announcementText: e.target.value })}
                        placeholder="OFFICIAL AUTHORIZED CINEMA & OPTICS DISTRIBUTOR"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono font-bold"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Right Courier Link Text</label>
                        <input
                          type="text"
                          value={announcementDraft.courierText}
                          onChange={(e) => setAnnouncementDraft({ ...announcementDraft, courierText: e.target.value })}
                          placeholder="VIP White-Glove Courier across Egypt"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Courier Link URL</label>
                        <input
                          type="text"
                          value={announcementDraft.courierLink}
                          onChange={(e) => setAnnouncementDraft({ ...announcementDraft, courierLink: e.target.value })}
                          placeholder="/store"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <Button
                        onClick={() => resetHomepageSection("announcement")}
                        variant="ghost"
                        size="sm"
                        className="rounded-xl text-xs cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        <RotateCcw className="w-3.5 h-3.5 mr-1" />
                        <span>Reset to Defaults</span>
                      </Button>
                      <Button
                        onClick={() => updateHomepageSection("announcement", announcementDraft)}
                        className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Announcement Strip &amp; Publish Live</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* CMS SECTION 7: FOOTER & EXPERIENCE HUB */}
              {cmsSection === "footer" && (
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Footer &amp; Showroom Contacts</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Official hotline, email, showroom locations, and copyright line
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold text-foreground block">Filmmaker Community Tagline</label>
                      <textarea
                        rows={2}
                        value={footerDraft.tagline}
                        onChange={(e) => setFooterDraft({ ...footerDraft, tagline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Hotline Phone Number</label>
                        <input
                          type="text"
                          value={footerDraft.hotline}
                          onChange={(e) => setFooterDraft({ ...footerDraft, hotline: e.target.value })}
                          placeholder="+20 2 2736 3456"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Official Support Email</label>
                        <input
                          type="email"
                          value={footerDraft.email}
                          onChange={(e) => setFooterDraft({ ...footerDraft, email: e.target.value })}
                          placeholder="pro@esacam.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Flagship Showroom Locations</label>
                        <input
                          type="text"
                          value={footerDraft.address}
                          onChange={(e) => setFooterDraft({ ...footerDraft, address: e.target.value })}
                          placeholder="Zamalek Cinema Hub, Cairo"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-foreground block">Copyright Text</label>
                        <input
                          type="text"
                          value={footerDraft.copyright}
                          onChange={(e) => setFooterDraft({ ...footerDraft, copyright: e.target.value })}
                          placeholder="ESA CAM. Authorized Cinema Distributor."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono text-[11px]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <Button
                        onClick={() => resetHomepageSection("footer")}
                        variant="ghost"
                        size="sm"
                        className="rounded-xl text-xs cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        <RotateCcw className="w-3.5 h-3.5 mr-1" />
                        <span>Reset to Defaults</span>
                      </Button>
                      <Button
                        onClick={() => updateHomepageSection("footer", footerDraft)}
                        className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Footer &amp; Publish Live</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: ADMIN ROLES & CLIENTS ACCESS CONTROL (RBAC) */}
          {activeTab === "roles_manager" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Top Roles Analytics Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Total Staff Admins</span>
                    <ShieldCheck className="w-4 h-4 text-[#FFE600]" />
                  </div>
                  <p className="text-2xl font-black font-mono text-foreground">{adminStaffList.length}</p>
                  <p className="text-[11px] text-emerald-500 font-semibold font-mono">
                    {adminStaffList.filter((a) => a.is_active).length} Active with Full Privileges
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Client Accounts</span>
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-2xl font-black font-mono text-foreground">{studios.length + 8}</p>
                  <p className="text-[11px] text-muted-foreground font-mono">Restricted to /track-orders</p>
                </div>

                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Security Model</span>
                    <Lock className="w-4 h-4 text-purple-500" />
                  </div>
                  <p className="text-2xl font-black font-mono text-foreground">RBAC 4-Tier</p>
                  <p className="text-[11px] text-purple-400 font-semibold font-mono">Encrypted &amp; Session Bound</p>
                </div>

                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Master Administrator</span>
                    <Crown className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-lg font-black font-mono text-foreground truncate">Ahmed Mahmoud</p>
                  <p className="text-[11px] text-amber-500 font-semibold font-mono">Super Admin (HQ Master)</p>
                </div>
              </div>

              {/* Main RBAC Control Box */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                {/* Header & Sub-tab Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-bold text-foreground">
                        Admin Roles &amp; Client Access Management (إدارة الصلاحيات والأدمنز والعملاء)
                      </h3>
                      <Badge className="bg-[#FFE600] text-black font-mono text-xs font-bold">
                        RBAC SYSTEM
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      Control who can access this dashboard, assign permissions to store managers, and inspect client live order tracking access
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Sub-tab pills */}
                    <div className="flex items-center gap-1.5 bg-secondary/40 p-1 rounded-2xl border border-border">
                      <button
                        onClick={() => setRolesSubTab("admins")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          rolesSubTab === "admins"
                            ? "bg-card text-foreground shadow-xs font-black"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        🛡️ Staff Admins ({adminStaffList.length})
                      </button>
                      <button
                        onClick={() => setRolesSubTab("clients")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          rolesSubTab === "clients"
                            ? "bg-card text-foreground shadow-xs font-black"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        👥 Client Accounts ({studios.length + 8})
                      </button>
                    </div>

                    <Button
                      onClick={() => setIsAddAdminOpen(true)}
                      className="rounded-xl text-xs font-bold gap-1.5 h-9 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000]"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Add New Admin (إضافة أدمن جديد)</span>
                    </Button>
                  </div>
                </div>

                {/* SUBTAB 1: STAFF & ADMINS */}
                {rolesSubTab === "admins" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {adminStaffList.map((adm) => (
                        <div
                          key={adm.id}
                          className="p-5 rounded-3xl border border-border bg-secondary/20 space-y-4 hover:border-[#FFE600]/50 transition-all shadow-xs"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center font-black text-sm text-foreground">
                                {adm.name.slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                                  <span>{adm.name}</span>
                                  {adm.id === "admin_master" && (
                                    <span className="px-2 py-0.5 rounded-full text-[9px] bg-amber-500/10 text-amber-500 font-mono font-bold border border-amber-500/30">
                                      MASTER
                                    </span>
                                  )}
                                </h4>
                                <p className="text-xs text-muted-foreground font-mono">{adm.email}</p>
                                <p className="text-[11px] text-muted-foreground font-mono">{adm.phone || "No phone listed"}</p>
                              </div>
                            </div>

                            <span
                              className={`px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold border ${
                                adm.is_active
                                  ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                                  : "bg-rose-500/10 text-rose-500 border-rose-500/30"
                              }`}
                            >
                              {adm.is_active ? "● ACTIVE" : "○ SUSPENDED"}
                            </span>
                          </div>

                          {/* Role Dropdown Selector */}
                          <div className="p-3 bg-secondary/30 rounded-2xl border border-border space-y-1.5 text-xs font-mono">
                            <label className="text-[10px] text-muted-foreground uppercase font-bold block">
                              Assigned Staff Role &amp; Permissions:
                            </label>
                            <select
                              value={adm.role}
                              disabled={adm.id === "admin_master"}
                              onChange={async (e) => {
                                const newRole = e.target.value as AdminRecord["role"];
                                try {
                                  await fetch("/api/admins", {
                                    method: "PATCH",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ id: adm.id, role: newRole }),
                                  });
                                  setAdminStaffList(
                                    adminStaffList.map((a) => (a.id === adm.id ? { ...a, role: newRole } : a))
                                  );
                                } catch {
                                  toast.error("Failed to update role");
                                }

                              }}
                              className="w-full px-3 py-1.5 rounded-xl border border-border bg-card text-foreground font-sans font-bold text-xs cursor-pointer focus:outline-hidden"
                            >
                              <option value="super_admin">👑 Super Admin (Full Unrestricted Access)</option>
                              <option value="store_manager">🏬 Store Manager (Products, Orders, CMS)</option>
                              <option value="inventory_admin">📦 Inventory Admin (SKUs, Logistics, Stock)</option>
                              <option value="support_agent">🎧 Support Agent (CRM, Service Desk, Orders)</option>
                            </select>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex items-center justify-between gap-2 pt-2 border-t border-border text-xs">
                            <button
                              onClick={async () => {
                                if (adm.id === "admin_master") return;
                                const newStatus = !adm.is_active;
                                try {
                                  await fetch("/api/admins", {
                                    method: "PATCH",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ id: adm.id, is_active: newStatus }),
                                  });
                                  setAdminStaffList(
                                    adminStaffList.map((a) => (a.id === adm.id ? { ...a, is_active: newStatus ? 1 : 0 } : a))
                                  );
                                  toast.info(`Staff account ${newStatus ? "Activated" : "Suspended"}`);
                                } catch {
                                  toast.error("Failed to update status");
                                }
                              }}
                              disabled={adm.id === "admin_master"}
                              className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-colors ${
                                adm.is_active
                                  ? "bg-secondary text-muted-foreground hover:text-rose-500"
                                  : "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
                              } ${adm.id === "admin_master" ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                              {adm.is_active ? "Suspend Access" : "Activate Access"}
                            </button>

                            {adm.id !== "admin_master" && (
                              <button
                                onClick={async () => {
                                  if (!confirm(`Are you sure you want to remove ${adm.name}?`)) return;
                                  try {
                                    await fetch(`/api/admins?id=${adm.id}`, { method: "DELETE" });
                                    setAdminStaffList(adminStaffList.filter((a) => a.id !== adm.id));
                                    toast.success("Admin removed from staff list");
                                  } catch {
                                    toast.error("Failed to delete admin");
                                  }
                                }}
                                className="px-3 py-1.5 rounded-xl font-bold text-rose-500 hover:bg-rose-500/10 cursor-pointer"
                              >
                                Delete Admin
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* RBAC Permissions Guide Card */}
                    <div className="p-6 rounded-3xl bg-secondary/15 border border-border space-y-3 text-xs">
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <KeyRound className="w-4 h-4 text-[#FFE600]" />
                        <span>ESA CAM Access Permissions Architecture</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-muted-foreground font-mono text-[11px]">
                        <div className="p-3 rounded-2xl bg-card border border-border space-y-1">
                          <p className="font-bold text-foreground">👑 Super Admin</p>
                          <p>Full control over database, staff accounts, financial analytics, CMS, and checkout.</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-card border border-border space-y-1">
                          <p className="font-bold text-foreground">🏬 Store Manager</p>
                          <p>Order processing, coupon codes, homepage CMS visuals, and customer CRM.</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-card border border-border space-y-1">
                          <p className="font-bold text-foreground">📦 Inventory Admin</p>
                          <p>SKU catalog, warehouse stock thresholds, brand bar logos, and logistics dispatch.</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-card border border-border space-y-1">
                          <p className="font-bold text-foreground">👥 Customer / Client</p>
                          <p className="text-amber-500">
                            Strictly blocked from dashboard. Automatically directed to /track-orders.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SUBTAB 2: CLIENT & CUSTOMER ACCOUNTS */}
                {rolesSubTab === "clients" && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>
                          Customer Accounts cannot access the Admin Dashboard. They are redirected to the VIP Order Tracking Portal.
                        </span>
                      </div>
                      <Link
                        href="/track-orders"
                        target="_blank"
                        className="px-3 py-1.5 rounded-xl bg-blue-500 text-black font-bold whitespace-nowrap hover:bg-blue-400 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Preview Tracking Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {(registeredUsersList.length > 0 ? registeredUsersList : studios).map((c: UserRecord | StudioClient) => {
                        const isPromotedAdmin = "role" in c ? (c.role === "admin" || c.role === "super_admin" || c.role === "store_manager") : false;
                        const clientName = "contactPerson" in c ? c.contactPerson : c.name;
                        const clientCompany = "company" in c && c.company ? c.company : c.name;

                        const clientEmail = c.email;
                        const clientCity = c.city || "Cairo";
                        const ordersCount = "total_orders" in c ? c.total_orders : "totalOrders" in c ? (c as StudioClient).totalOrders : 0;
                        const spentAmount = "total_spent" in c ? c.total_spent : "totalSpentUSD" in c ? (c as StudioClient).totalSpentUSD : 0;


                        return (
                          <div
                            key={c.id}
                            className={`p-5 rounded-3xl border transition-all text-xs space-y-3 ${
                              isPromotedAdmin
                                ? "bg-amber-500/5 border-[#FFE600]/40 shadow-sm"
                                : "bg-secondary/20 border-border hover:border-[#FFE600]/30"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="font-bold text-foreground text-sm flex items-center gap-1.5">
                                  <span>{clientCompany}</span>
                                </h4>
                                <p className="text-muted-foreground font-mono">{clientName}</p>
                                <p className="text-[11px] text-muted-foreground font-mono">{clientEmail} • {clientCity}</p>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                                  isPromotedAdmin
                                    ? "bg-amber-500/20 text-[#FFE600] border-[#FFE600]/40"
                                    : "bg-blue-500/10 text-blue-400 border-blue-500/30"
                                }`}
                              >
                                {isPromotedAdmin ? "👑 ADMIN" : "CLIENT"}
                              </span>
                            </div>

                            <div className="p-3 rounded-2xl bg-card border border-border space-y-1 font-mono text-[11px]">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Database Table:</span>
                                <span className="font-bold text-foreground">`users` &amp; `admins`</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Orders Count:</span>
                                <span className="font-bold text-foreground">{ordersCount} Orders</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Spend:</span>
                                <span className="font-bold text-[#FFE600]">{formatPrice(spentAmount)}</span>
                              </div>
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                              {!isPromotedAdmin ? (
                                <Button
                                  onClick={async () => {
                                    try {
                                      await fetch("/api/users", {
                                        method: "PATCH",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({
                                          id: c.id,
                                          action: "promote_to_admin",
                                        }),
                                      });
                                      await fetchUsers();
                                      await fetchAdmins();
                                      toast.success(`Client "${clientName}" promoted to Admin and added to admins table!`);
                                      setRolesSubTab("admins");
                                    } catch {
                                      toast.error("Failed to promote user to admin");
                                    }
                                  }}
                                  className="w-full py-2 rounded-xl bg-[#FFE600] text-black hover:bg-[#FFD000] font-black text-xs cursor-pointer gap-1.5"
                                >
                                  <Crown className="w-3.5 h-3.5" />
                                  <span>Promote to Admin (ترقية لأدمن)</span>
                                </Button>
                              ) : (
                                <Button
                                  onClick={async () => {
                                    try {
                                      await fetch("/api/users", {
                                        method: "PATCH",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({
                                          id: c.id,
                                          action: "demote_from_admin",
                                        }),
                                      });
                                      await fetchUsers();
                                      await fetchAdmins();
                                      toast.info(`Admin privileges removed for "${clientName}".`);
                                    } catch {
                                      toast.error("Failed to demote user");
                                    }
                                  }}
                                  variant="ghost"
                                  className="w-full py-2 rounded-xl text-rose-500 hover:bg-rose-500/10 font-bold text-xs cursor-pointer"
                                >
                                  <span>Demote to Client (إلغاء صفة الأدمن)</span>
                                </Button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                )}
              </div>

              {/* MODAL: ADD NEW ADMIN / STAFF */}
              {isAddAdminOpen && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
                  <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                          <UserPlus className="w-5 h-5 text-[#FFE600]" />
                          <span>Add New Staff Administrator</span>
                        </h3>
                        <p className="text-xs text-muted-foreground font-mono">
                          Assign secure credentials &amp; granular role permissions
                        </p>
                      </div>
                      <button
                        onClick={() => setIsAddAdminOpen(false)}
                        className="w-8 h-8 rounded-full bg-secondary text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        if (!newAdminForm.name || !newAdminForm.email || !newAdminForm.password) {
                          toast.error("Please fill in all required fields");
                          return;
                        }

                        try {
                          const res = await fetch("/api/admins", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(newAdminForm),
                          });
                          const data = await res.json();
                          if (data.success && data.data) {
                            setAdminStaffList([...adminStaffList, data.data]);
                            toast.success(`Admin account for ${newAdminForm.name} created!`);
                            setIsAddAdminOpen(false);
                            setNewAdminForm({
                              name: "",
                              email: "",
                              password: "",
                              role: "store_manager",
                              phone: "",
                            });
                          } else {
                            toast.error(data.message || "Failed to create admin");
                          }
                        } catch {
                          toast.error("Error creating admin account");
                        }
                      }}
                      className="space-y-4 text-xs font-mono"
                    >
                      <div className="space-y-1">
                        <label className="font-bold text-foreground block">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={newAdminForm.name}
                          onChange={(e) => setNewAdminForm({ ...newAdminForm, name: e.target.value })}
                          placeholder="e.g. Sarah Mansour"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-sans font-medium"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-foreground block">Admin Email / Username *</label>
                          <input
                            type="email"
                            required
                            value={newAdminForm.email}
                            onChange={(e) => setNewAdminForm({ ...newAdminForm, email: e.target.value })}
                            placeholder="staff@esacam.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-foreground block">Password *</label>
                          <input
                            type="password"
                            required
                            value={newAdminForm.password}
                            onChange={(e) => setNewAdminForm({ ...newAdminForm, password: e.target.value })}
                            placeholder="••••••••"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-foreground block">Mobile Phone</label>
                          <input
                            type="text"
                            value={newAdminForm.phone}
                            onChange={(e) => setNewAdminForm({ ...newAdminForm, phone: e.target.value })}
                            placeholder="+20 100 000 0000"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-bold text-foreground block">Role &amp; Permissions *</label>
                          <select
                            value={newAdminForm.role}
                            onChange={(e) =>
                              setNewAdminForm({ ...newAdminForm, role: e.target.value as AdminRecord["role"] })
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground font-sans font-bold cursor-pointer"
                          >
                            <option value="super_admin">👑 Super Admin</option>
                            <option value="store_manager">🏬 Store Manager</option>
                            <option value="inventory_admin">📦 Inventory Admin</option>
                            <option value="support_agent">🎧 Support Agent</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setIsAddAdminOpen(false)}
                          className="rounded-xl text-xs cursor-pointer"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="rounded-xl text-xs font-bold gap-2 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000] px-6 h-10"
                        >
                          <Check className="w-4 h-4" />
                          <span>Create Admin Member</span>
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: VIP PRODUCTION STUDIOS CRM */}
          {activeTab === "studios" && (


            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Top CRM Analytics Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Active Studio Accounts</span>
                    <Building2 className="w-4 h-4 text-[#FFE600]" />
                  </div>
                  <p className="text-2xl font-black font-mono text-foreground">{studios.length}</p>
                  <p className="text-[11px] text-emerald-500 font-semibold font-mono">100% Certified Egyptian Houses</p>
                </div>

                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Total CRM Spend Volume</span>
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-2xl font-black font-mono text-foreground">
                    {formatPrice(studios.reduce((acc, s) => acc + s.totalSpentUSD, 0))}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-mono">Across {studios.reduce((acc, s) => acc + s.totalOrders, 0)} completed orders</p>
                </div>

                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Fleet Cameras Tracked</span>
                    <Camera className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-2xl font-black font-mono text-foreground">
                    {studios.reduce((acc, s) => acc + (s.fleetEquipment?.length || 0), 0)} Units
                  </p>
                  <p className="text-[11px] text-muted-foreground font-mono">With Serial &amp; Calibration Logs</p>
                </div>

                <div className="p-5 rounded-3xl bg-card border border-border space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-mono uppercase font-bold">Total Credit Lines</span>
                    <CreditCard className="w-4 h-4 text-purple-500" />
                  </div>
                  <p className="text-2xl font-black font-mono text-foreground">
                    {formatPrice(studios.reduce((acc, s) => acc + s.creditLimitUSD, 0))}
                  </p>
                  <p className="text-[11px] text-emerald-500 font-semibold font-mono">
                    {formatPrice(studios.reduce((acc, s) => acc + s.availableCreditUSD, 0))} available
                  </p>
                </div>
              </div>

              {/* Main Directory Box */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                {/* Header with Title and Add Button */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-bold text-foreground">VIP Production Studios &amp; DP Directory</h3>
                      <Badge variant="secondary" className="font-mono text-xs bg-[#FFE600]/10 text-amber-600 dark:text-[#FFE600] border border-[#FFE600]/30 font-bold">
                        {filteredStudios.length} of {studios.length} Studios
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      Commercial corporate accounts, complete customer purchase history, equipment fleet tracking &amp; official quotations
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() => setIsAddStudioOpen(true)}
                      className="rounded-xl text-xs font-bold gap-1.5 h-10 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000]"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Register New Studio Client</span>
                    </Button>
                  </div>
                </div>

                {/* Search Bar & Tier Filter Pills */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search Studio name, Head DP, City, Phone, or Tax ID..."
                      value={studioSearch}
                      onChange={(e) => setStudioSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-border bg-secondary/30 focus:outline-hidden text-foreground font-sans placeholder:text-muted-foreground"
                    />
                    {studioSearch && (
                      <button
                        onClick={() => setStudioSearch("")}
                        className="absolute right-3 top-2.5 text-xs text-muted-foreground hover:text-foreground"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                    {[
                      { id: "all", label: "All Tiers" },
                      { id: "VIP Platinum DP", label: "Platinum DP" },
                      { id: "Gold Production House", label: "Gold Production" },
                      { id: "Broadcast Partner", label: "Broadcast" },
                      { id: "Silver Production", label: "Silver" },
                      { id: "Creator Studio", label: "Creator Studio" },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => setStudioTierFilter(tier.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
                          studioTierFilter === tier.id
                            ? "bg-foreground text-background border-foreground font-bold"
                            : "bg-secondary/40 border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Studio Cards Grid */}
                {filteredStudios.length === 0 ? (
                  <div className="py-12 text-center space-y-2">
                    <Users className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
                    <p className="font-bold text-foreground">No matching studios found</p>
                    <p className="text-xs text-muted-foreground font-mono">Try adjusting your search query or tier filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {filteredStudios.map((studio) => (
                      <div
                        key={studio.id}
                        className="p-5 sm:p-6 rounded-3xl border border-border bg-secondary/15 space-y-4 hover:border-[#FFE600]/40 transition-all shadow-2xs group"
                      >
                        {/* Top Card Info */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-secondary border border-border flex items-center justify-center font-black text-sm text-foreground shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                              {studio.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                                <span className="truncate">{studio.name}</span>
                              </h4>
                              <p className="text-xs text-muted-foreground font-medium flex items-center gap-1 mt-0.5">
                                <span>{studio.contactPerson}</span>
                                <span>•</span>
                                <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-0.5">
                                  <MapPin className="w-3 h-3 text-[#FFE600]" /> {studio.city}
                                </span>
                              </p>
                            </div>
                          </div>

                          <Badge
                            variant="secondary"
                            className={`text-[10px] font-mono font-bold shrink-0 border ${
                              studio.tier.includes("Platinum")
                                ? "bg-[#FFE600]/15 text-amber-600 dark:text-[#FFE600] border-[#FFE600]/30"
                                : studio.tier.includes("Gold")
                                ? "bg-amber-500/10 text-amber-500 border-amber-500/30"
                                : studio.tier.includes("Broadcast")
                                ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                                : "bg-zinc-500/10 text-zinc-400 border-zinc-500/30"
                            }`}
                          >
                            {studio.tier}
                          </Badge>
                        </div>

                        {/* 3 Metric Mini-Dashboard */}
                        <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-card border border-border text-center text-xs font-mono">
                          <div>
                            <span className="text-[10px] text-muted-foreground block">Lifetime Spend:</span>
                            <span className="font-bold text-foreground">{formatPrice(studio.totalSpentUSD)}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-muted-foreground block">Orders Count:</span>
                            <span className="font-bold text-foreground">{studio.totalOrders} Purchases</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-muted-foreground block">Credit Limit:</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">{formatPrice(studio.creditLimitUSD)}</span>
                          </div>
                        </div>

                        {/* Gear & Fleet Preview snapshot */}
                        {studio.fleetEquipment && studio.fleetEquipment.length > 0 && (
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold flex items-center gap-1">
                              <Camera className="w-3 h-3 text-[#FFE600]" /> Fleet &amp; Gear in Service:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {studio.fleetEquipment.slice(0, 3).map((gear, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-secondary/80 border border-border/80 text-foreground truncate max-w-[200px]"
                                  title={`${gear.model} (${gear.serialNumber})`}
                                >
                                  {gear.model}
                                </span>
                              ))}
                              {studio.fleetEquipment.length > 3 && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[#FFE600]/10 text-amber-600 dark:text-[#FFE600] font-bold">
                                  +{studio.fleetEquipment.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/60 text-xs">
                          <div className="flex items-center gap-2 text-muted-foreground font-mono text-[11px] truncate">
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3 text-primary" /> {studio.phone}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              onClick={() => {
                                setSelectedStudioForHistory(studio);
                                setHistoryTab("orders");
                              }}
                              variant="outline"
                              size="sm"
                              className="rounded-xl text-xs font-bold h-8 cursor-pointer gap-1.5 hover:border-[#FFE600] transition-colors"
                            >
                              <History className="w-3.5 h-3.5 text-[#FFE600]" />
                              <span>Full Profile &amp; History</span>
                            </Button>

                            <Button
                              onClick={() => setSelectedQuoteStudio(studio)}
                              size="sm"
                              className="rounded-xl text-xs font-bold h-8 cursor-pointer gap-1.5 bg-foreground text-background hover:bg-foreground/90"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>Issue Quote</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}


          {/* TAB 4: LOGISTICS & DISPATCH HUB */}
          {activeTab === "logistics" && (
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Regional Courier Dispatch & Waybills</h3>
                  <p className="text-xs text-muted-foreground font-mono">Track fragile-cine courier transit with Bosta, Aramex & ESA Direct</p>
                </div>
                <Badge variant="secondary" className="font-mono text-xs">
                  {orders.filter(o => o.status !== "Cancelled").length} Active Consignments
                </Badge>
              </div>

              <div className="divide-y divide-border/60">
                {orders.map((order) => (
                  <div key={order.id} className="py-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="font-bold text-foreground">{order.id}</span>
                        <span className="text-muted-foreground">• AWB: <strong>{order.trackingNumber}</strong></span>
                      </div>
                      <p className="font-bold text-foreground">{order.customerName} — {order.city}</p>
                      <p className="text-muted-foreground font-mono text-[11px]">
                        Courier: <strong>{order.courier || "Bosta Priority Express"}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                          order.status === "Delivered"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                            : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30"
                        }`}
                      >
                        {order.status}
                      </span>

                      <Button
                        onClick={() => toast.success(`Waybill for ${order.trackingNumber} sent to dispatch driver`)}
                        variant="outline"
                        size="sm"
                        className="rounded-xl text-xs font-semibold h-8 gap-1.5 cursor-pointer"
                      >
                        <Truck className="w-3.5 h-3.5" />
                        <span>Dispatch Driver</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: BRAND BAR MANAGER */}
          {activeTab === "brands" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground">Brand Bar & Marquee Customizer</h3>
                      <Badge variant="secondary" className="font-mono text-xs bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/25">
                        {brands.filter((b) => b.isActive).length} Live Brands
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      Add new camera & optic brands, customize logo colors, and control which logos appear on the homepage marquee.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      onClick={resetBrands}
                      variant="outline"
                      size="sm"
                      className="rounded-xl text-xs font-semibold gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Default 23 Brands</span>
                    </Button>
                    <Button
                      onClick={() => setIsAddBrandOpen(true)}
                      className="rounded-xl text-xs font-bold gap-1.5 h-10 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Brand</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-muted-foreground flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Live Preview on Storefront
                  </span>
                  <div className="p-4 rounded-2xl bg-secondary/30 border border-border overflow-hidden marquee-mask">
                    <div className="flex w-max animate-marquee-slow items-center gap-12 py-3">
                      {[...brands.filter(b => b.isActive), ...brands.filter(b => b.isActive)].map((brand, idx) => (
                        <div
                          key={`${brand.id}-${idx}`}
                          className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                        >
                          {brand.logoImage ? (
                            <div className="h-7 max-w-[100px] flex items-center justify-center">
                              <img
                                src={brand.logoImage}
                                alt={brand.name}
                                className="max-h-full max-w-full object-contain filter grayscale"
                              />
                            </div>
                          ) : (
                            <span className="text-sm font-black uppercase tracking-widest text-foreground">
                              {brand.logoText || brand.name}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground font-mono text-[11px] uppercase">
                        <th className="pb-3 font-bold">Logo Preview</th>
                        <th className="pb-3 font-bold">Brand Name</th>
                        <th className="pb-3 font-bold">Specialty / Subtitle</th>
                        <th className="pb-3 font-bold">Colors & Palette</th>
                        <th className="pb-3 font-bold">Live Status</th>
                        <th className="pb-3 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {brands.map((brand) => (
                        <tr key={brand.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="py-3.5">
                            {brand.logoImage ? (
                              <div className="h-8 max-w-[100px] min-w-[50px] px-2 py-1 rounded-xl bg-white border border-border flex items-center justify-center shadow-2xs">
                                <img
                                  src={brand.logoImage}
                                  alt={brand.name}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>
                            ) : (
                              <div
                                style={{
                                  backgroundColor: brand.bgColor,
                                  borderColor: brand.borderColor,
                                  color: brand.textColor,
                                }}
                                className="px-3 py-1 rounded-xl border text-xs font-black tracking-wider w-max shadow-2xs"
                              >
                                {brand.logoText || brand.name}
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 font-bold text-foreground">
                            {brand.name}
                          </td>
                          <td className="py-3.5 text-muted-foreground font-mono">
                            {brand.sub || "—"}
                          </td>
                          <td className="py-3.5">
                            <div className="flex items-center gap-1.5">
                              <span
                                style={{ backgroundColor: brand.textColor }}
                                className="w-3.5 h-3.5 rounded-full border border-border shrink-0"
                                title={`Text: ${brand.textColor}`}
                              />
                              <span
                                style={{ backgroundColor: brand.bgColor }}
                                className="w-3.5 h-3.5 rounded-full border border-border shrink-0"
                                title={`Background: ${brand.bgColor}`}
                              />
                              <span
                                style={{ backgroundColor: brand.accentColor }}
                                className="w-3.5 h-3.5 rounded-full border border-border shrink-0"
                                title={`Accent: ${brand.accentColor}`}
                              />
                            </div>
                          </td>
                          <td className="py-3.5">
                            <button
                              onClick={() => toggleBrandActive(brand.id)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border transition-colors cursor-pointer ${
                                brand.isActive
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                                : "bg-zinc-500/10 text-zinc-400 border-zinc-500/30"
                              }`}
                            >
                              {brand.isActive ? "✓ Active in Marquee" : "Hidden"}
                            </button>
                          </td>
                          <td className="py-3.5 text-right">
                            <Button
                              onClick={() => deleteBrand(brand.id)}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 rounded-xl text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 cursor-pointer"
                              title="Delete Brand"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: ORDERS MANAGEMENT */}
          {activeTab === "orders" && (
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">All Customer & Studio Orders</h3>
                  <p className="text-xs text-muted-foreground font-mono">Manage tracking numbers, courier dispatches & invoices</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative min-w-[220px]">
                    <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search Order ID, Client, City..."
                      value={orderSearch}
                      onChange={(e) => setOrderSearch(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-border bg-secondary/30 focus:outline-hidden text-foreground font-sans"
                    />
                  </div>

                  <select
                    value={orderStatusFilter}
                    onChange={(e) => setOrderStatusFilter(e.target.value)}
                    className="bg-secondary/40 border border-border px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground cursor-pointer focus:outline-hidden"
                    aria-label="Filter Order Status"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Processing">Processing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground font-mono text-[11px] uppercase">
                      <th className="pb-3 font-bold">Order ID</th>
                      <th className="pb-3 font-bold">Client / Studio</th>
                      <th className="pb-3 font-bold">Gear Purchased</th>
                      <th className="pb-3 font-bold">Amount</th>
                      <th className="pb-3 font-bold">Payment</th>
                      <th className="pb-3 font-bold">Fulfillment</th>
                      <th className="pb-3 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {isLoadingOrders ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-xs text-muted-foreground font-mono">
                          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping mr-2 align-middle" />
                          Loading live orders from database...
                        </td>
                      </tr>
                    ) : filteredOrders.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-xs text-muted-foreground">
                          <ShoppingBag className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
                          <p className="font-semibold text-foreground">No orders found</p>
                          <p className="text-[11px] font-mono text-muted-foreground">Customer checkouts will populate this list automatically.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="py-4 font-mono font-bold text-foreground">
                            {order.id}
                            <span className="block text-[10px] font-normal text-muted-foreground">{order.date}</span>
                          </td>
                          <td className="py-4">
                            <p className="font-semibold text-foreground">{order.customerName}</p>
                            <p className="text-[11px] text-muted-foreground font-mono">{order.city}</p>
                          </td>
                          <td className="py-4 max-w-xs">
                            <p className="truncate text-foreground font-medium">
                              {order.items.map((i) => `${i.qty}x ${i.name}`).join(", ")}
                            </p>
                            <p className="text-[10px] text-muted-foreground font-mono">
                              Tracking: {order.trackingNumber}
                            </p>
                          </td>
                          <td className="py-4 font-mono font-bold text-foreground">
                            {formatPrice(order.totalUSD)}
                          </td>
                          <td className="py-4">
                            <Badge variant="secondary" className="text-[10px] font-mono">
                              {order.paymentMethod} • {order.paymentStatus}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <select
                              value={order.status}
                              onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value as Order["status"])}
                              className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-xl border cursor-pointer focus:outline-hidden ${
                                order.status === "Delivered"
                                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                                  : order.status === "Out for Delivery"
                                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30"
                                  : "bg-amber-400/10 text-amber-600 dark:text-amber-400 border-amber-400/30"
                              }`}
                            >
                              <option value="Processing">Processing</option>
                              <option value="Out for Delivery">Out for Delivery</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="py-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <Button
                                onClick={() => handlePrintOrderInvoice(order)}
                                variant="outline"
                                size="sm"
                                title="Print Official Tax Invoice"
                                className="rounded-xl text-xs font-semibold h-8 w-8 p-0 cursor-pointer text-primary border-primary/30 hover:bg-primary/10"
                              >
                                <Printer className="w-3.5 h-3.5" />
                              </Button>
                              <Button
                                onClick={() => setSelectedOrder(order)}
                                variant="outline"
                                size="sm"
                                className="rounded-xl text-xs font-semibold h-8 cursor-pointer"
                              >
                                Invoice / Details
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 7: INVENTORY & STOCK MANAGEMENT */}
          {activeTab === "inventory" && (
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Catalog & Warehouse Inventory ({inventory.length} SKUs)</h3>
                  <p className="text-xs text-muted-foreground font-mono">Manage pricing, stock counts, and barcode labels</p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={handleExportCSV}
                    variant="outline"
                    className="rounded-xl text-xs font-semibold h-10 cursor-pointer"
                  >
                    <Download className="w-4 h-4 mr-1.5" />
                    <span>Export CSV</span>
                  </Button>
                  <Button
                    onClick={() => setIsAddProductOpen(true)}
                    className="rounded-xl text-xs font-bold h-10 cursor-pointer"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    <span>Add New Camera / Lens SKU</span>
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground font-mono text-[11px] uppercase">
                      <th className="pb-3 pr-4 font-bold">Gear Item</th>
                      <th className="pb-3 pr-4 font-bold">Department</th>
                      <th className="pb-3 pr-4 font-bold">Price</th>
                      <th className="pb-3 pr-4 font-bold">Mount / Spec</th>
                      <th className="pb-3 pr-4 font-bold">In-Stock Count</th>
                      <th className="pb-3 pr-4 font-bold">Status</th>
                      <th className="pb-3 font-bold text-right">Quick Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {inventory.map((item) => (
                      <tr key={item.id} className="hover:bg-secondary/30 transition-colors">
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-secondary shrink-0 border border-border">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div>
                              <p className="font-bold text-foreground line-clamp-1">{item.name}</p>
                              <p className="text-[10px] text-muted-foreground font-mono">{item.brand}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 pr-4 font-mono uppercase text-muted-foreground whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="py-3.5 pr-4 font-mono font-bold text-foreground whitespace-nowrap">
                          {formatPrice(item.price)}
                        </td>
                        <td className="py-3.5 pr-4 font-mono text-muted-foreground whitespace-nowrap">
                          {item.mount || item.resolution || "Universal"}
                        </td>
                        <td className="py-3.5 pr-4 font-mono font-bold text-foreground whitespace-nowrap">
                          {item.stockCount ?? 5} units
                        </td>
                        <td className="py-3.5 pr-4 whitespace-nowrap">
                          <span
                            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                              (item.stockCount ?? 5) > 3
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : (item.stockCount ?? 5) > 0
                                ? "bg-amber-400/10 text-amber-600 dark:text-amber-400"
                                : "bg-rose-500/10 text-rose-500"
                            }`}
                          >
                            {(item.stockCount ?? 5) > 3 ? "Healthy Stock" : (item.stockCount ?? 5) > 0 ? "Low Stock" : "Out of Stock"}
                          </span>
                        </td>
                        <td className="py-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <Button
                              onClick={() => openEditProduct(item)}
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 rounded-lg text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 cursor-pointer"
                              title="Edit Product"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              onClick={() => handleDeleteProduct(item)}
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 rounded-lg text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 cursor-pointer"
                              title="Delete Product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              onClick={() => setSelectedBarcodeProduct(item)}
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"
                              title="Generate Barcode / QR Label"
                            >
                              <QrCode className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              onClick={() => handleStockUpdate(item.id, -1)}
                              variant="outline"
                              size="sm"
                              className="h-7 w-7 p-0 rounded-lg text-xs cursor-pointer"
                            >
                              -
                            </Button>
                            <Button
                              onClick={() => handleStockUpdate(item.id, 1)}
                              variant="outline"
                              size="sm"
                              className="h-7 w-7 p-0 rounded-lg text-xs cursor-pointer"
                            >
                              +
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 8: TRADE-IN DESK */}
          {activeTab === "tradeins" && (
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Used Equipment Trade-In & Buyback Desk</h3>
                  <p className="text-xs text-muted-foreground font-mono">Review client submissions, 90-point sensor inspections, and credit quotes</p>
                </div>
                <Badge variant="secondary" className="font-mono text-xs">
                  {tradeIns.length} Submissions
                </Badge>
              </div>

              <div className="divide-y divide-border/60">
                {tradeIns.map((t) => (
                  <div key={t.id} className="py-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-foreground">{t.id}</span>
                        <span className="text-xs font-semibold text-foreground">• {t.client}</span>
                      </div>
                      <p className="font-bold text-sm text-foreground">{t.gearItem}</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        Condition: <strong>{t.condition}</strong> {t.shutterCount ? `• Shutter: ${t.shutterCount}` : ""}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground font-mono block">Trade Valuation:</span>
                        <span className="font-mono text-base font-black text-foreground">{formatPrice(t.valuationUSD)}</span>
                      </div>

                      <Badge
                        variant="secondary"
                        className={`text-xs font-mono font-semibold ${
                          t.status.includes("Approved")
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                            : "bg-amber-400/10 text-amber-600 dark:text-amber-400 border-amber-400/30"
                        }`}
                      >
                        {t.status}
                      </Badge>

                      {!t.status.includes("Approved") && (
                        <Button
                          onClick={() => handleApproveTradeIn(t.id)}
                          size="sm"
                          className="rounded-xl text-xs font-bold h-8 cursor-pointer"
                        >
                          Approve & Credit
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: COUPONS & PROMOS */}
          {activeTab === "coupons" && (
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <span>Marketing &amp; Creator Promo Codes</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {coupons.length} Codes
                    </Badge>
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Generate coupons, set % discount, schedule date windows (من يوم كام ليوم كام), and configure single/multi-use limits.
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search coupons..."
                      value={couponSearch}
                      onChange={(e) => setCouponSearch(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-xl border border-border bg-secondary/30 text-xs text-foreground focus:outline-hidden focus:ring-1 focus:ring-primary w-40 sm:w-52"
                    />
                  </div>
                  <Button
                    size="sm"
                    className="rounded-xl text-xs font-bold cursor-pointer bg-primary text-primary-foreground shadow-xs hover:opacity-90"
                    onClick={() => {
                      generateRandomCouponCode();
                      setIsNewCouponOpen(true);
                    }}
                  >
                    <Plus className="w-3.5 h-3.5 mr-1" /> New Coupon
                  </Button>
                </div>
              </div>

              {/* Coupons Grid */}
              {coupons.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-border rounded-2xl p-6 space-y-3">
                  <Tag className="w-10 h-10 text-muted-foreground mx-auto opacity-50" />
                  <p className="text-sm font-semibold text-foreground">No promo codes created yet</p>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    Click &ldquo;New Coupon&rdquo; to generate discount codes with custom date ranges, percentages, and usage limits.
                  </p>
                  <Button
                    size="sm"
                    onClick={() => {
                      generateRandomCouponCode();
                      setIsNewCouponOpen(true);
                    }}
                    className="rounded-xl text-xs font-bold cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 mr-1" /> Create First Coupon
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {coupons
                    .filter((c) =>
                      couponSearch.trim()
                        ? c.code.toLowerCase().includes(couponSearch.toLowerCase()) ||
                          (c.description && c.description.toLowerCase().includes(couponSearch.toLowerCase()))
                        : true
                    )
                    .map((coupon) => {
                      const isExpired = new Date(coupon.end_date) < new Date(new Date().setHours(0, 0, 0, 0));
                      const isStarted = new Date(coupon.start_date) <= new Date();

                      return (
                        <div
                          key={coupon.code}
                          className={`p-5 rounded-2xl border transition-all space-y-3.5 bg-card/60 hover:shadow-md relative overflow-hidden ${
                            !coupon.is_active
                              ? "opacity-60 border-border bg-secondary/10"
                              : isExpired
                              ? "border-rose-500/30 bg-rose-500/5"
                              : "border-primary/30 bg-primary/5 hover:border-primary"
                          }`}
                        >
                          {/* Header: Code & Status */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-black text-foreground bg-primary/20 px-2.5 py-1 rounded-lg border border-primary/40 tracking-wider">
                                {coupon.code}
                              </span>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(coupon.code);
                                  toast.success(`Copied "${coupon.code}" to clipboard!`);
                                }}
                                title="Copy Code"
                                className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-secondary cursor-pointer"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className="flex items-center gap-1.5">
                              {isExpired ? (
                                <Badge variant="outline" className="text-[10px] bg-rose-500/10 text-rose-500 border-rose-500/30 font-bold">
                                  Expired
                                </Badge>
                              ) : !coupon.is_active ? (
                                <Badge variant="secondary" className="text-[10px]">
                                  Paused
                                </Badge>
                              ) : !isStarted ? (
                                <Badge variant="outline" className="text-[10px] bg-amber-400/10 text-amber-600 border-amber-400/30 font-bold">
                                  Scheduled
                                </Badge>
                              ) : (
                                <Badge variant="default" className="text-[10px] bg-emerald-600 font-bold">
                                  Active
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Discount & Description */}
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-black font-mono text-primary">
                                {coupon.discount_percent}% OFF
                              </span>
                              <span className="text-[11px] font-mono text-muted-foreground">
                                {coupon.is_single_use ? "⚡ Single-Use (مرة واحدة)" : "🔄 Unlimited Uses"}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {coupon.description || "Applicable across all store cinema equipment and accessories."}
                            </p>
                          </div>

                          {/* Date Window Details (من يوم كام ليوم كام) */}
                          <div className="p-2.5 rounded-xl bg-secondary/40 border border-border/50 text-[11px] font-mono space-y-1">
                            <div className="flex items-center justify-between text-muted-foreground">
                              <span>Valid From (من):</span>
                              <strong className="text-foreground">{coupon.start_date}</strong>
                            </div>
                            <div className="flex items-center justify-between text-muted-foreground">
                              <span>Expires At (إلى):</span>
                              <strong className="text-foreground">{coupon.end_date}</strong>
                            </div>
                          </div>

                          {/* Footer: Usage counter & Actions */}
                          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px]">
                            <span className="font-mono text-muted-foreground">
                              Used: <strong className="text-foreground">{coupon.usage_count} times</strong>
                            </span>

                            <div className="flex items-center gap-1.5">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleToggleCoupon(coupon.code, coupon.is_active)}
                                className="h-7 px-2.5 rounded-lg text-[11px] font-semibold cursor-pointer"
                              >
                                {coupon.is_active ? "Pause" : "Activate"}
                              </Button>

                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDeleteCoupon(coupon.code)}
                                className="h-7 w-7 p-0 rounded-lg text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 cursor-pointer"
                                title="Delete Coupon"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          )}

          {/* TAB 10: SERVICE CENTER & CALIBRATION */}
          {activeTab === "service" && (
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Same-Day Sensor Cleaning & Calibration Queue</h3>
                  <p className="text-xs text-muted-foreground font-mono">Zamalek Flagship & Sheikh Zayed Tech Desk</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-border bg-secondary/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary" /> Free Lifetime Sensor Cleaning Status
                    </h4>
                    <Badge variant="default" className="text-[10px] bg-emerald-600">Bench Active</Badge>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-border/60">
                      <span className="text-muted-foreground">Today Cleaned Bodies:</span>
                      <span className="font-mono font-bold">14 Cameras (Sony FX3, A7 IV, Canon R5 C)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border/60">
                      <span className="text-muted-foreground">Average Turnaround Time:</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">45 Minutes</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-muted-foreground">Next Available Slot:</span>
                      <span className="font-mono font-bold">Today • 17:30 PM (Zamalek Desk)</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-border bg-secondary/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" /> Warranty Serial Verification
                    </h4>
                    <Badge variant="secondary" className="text-[10px]">100% Authorized</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All serial numbers are logged into the regional Sony Middle East, Canon Cinema EOS, and DJI Pro databases upon customer dispatch.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: BARCODE & QR LABEL GENERATOR */}
      {selectedBarcodeProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setSelectedBarcodeProduct(null)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-5 z-10 text-center">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs font-bold">SKU Tag & Barcode</span>
              <button onClick={() => setSelectedBarcodeProduct(null)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 bg-white text-black rounded-2xl space-y-3 font-mono shadow-md">
              <p className="font-black text-sm tracking-tight">{selectedBarcodeProduct.name}</p>
              <p className="text-[11px] text-zinc-600">ID: {selectedBarcodeProduct.id.toUpperCase()}</p>
              
              <div className="py-2 flex justify-center items-center gap-1">
                {[4, 2, 6, 1, 5, 2, 7, 3, 2, 5, 1, 6, 3, 4, 2, 7, 1, 5, 3, 6, 2].map((w, i) => (
                  <div key={i} style={{ width: `${w}px` }} className="h-14 bg-black" />
                ))}
              </div>

              <p className="text-xs font-bold tracking-widest">{selectedBarcodeProduct.id.replace(/-/g, "").toUpperCase()}</p>
              <p className="text-[10px] text-zinc-500">Official ESA CAM Middle East Stock</p>
            </div>

            <Button
              onClick={() => {
                toast.success(`Barcode for ${selectedBarcodeProduct.name} sent to Zebra Thermal Printer`);
                setSelectedBarcodeProduct(null);
              }}
              className="w-full rounded-2xl text-xs font-bold gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Thermal Label</span>
            </Button>
          </div>
        </div>
      )}

      {/* MODAL: OFFICIAL STUDIO QUOTATION BUILDER */}
      {selectedQuoteStudio && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setSelectedQuoteStudio(null)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 z-10 text-xs">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold text-base text-foreground">Official RFQ Quotation</h3>
              </div>
              <button onClick={() => setSelectedQuoteStudio(null)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-secondary/30 rounded-2xl space-y-2 border border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Issued For:</span>
                <span className="font-bold text-foreground">{selectedQuoteStudio.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contact DP:</span>
                <span className="font-mono">{selectedQuoteStudio.contactPerson}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Commercial Discount:</span>
                <span className="font-bold text-emerald-500">15% Studio Tier</span>
              </div>
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed">
              This will generate an official stamped Proforma Quotation PDF and dispatch it directly to <strong>{selectedQuoteStudio.email}</strong>.
            </p>

            <div className="flex justify-end gap-2 pt-2 border-t border-border">
              <Button variant="outline" onClick={() => setSelectedQuoteStudio(null)} className="rounded-xl text-xs cursor-pointer">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  toast.success(`Official Quotation dispatched to ${selectedQuoteStudio.email}!`);
                  setSelectedQuoteStudio(null);
                }}
                className="rounded-xl text-xs font-bold gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Quotation Email</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD NEW BRAND TO MARQUEE */}
      {isAddBrandOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setIsAddBrandOpen(false)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 z-10">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold text-base text-foreground">Add Brand to Marquee Bar</h3>
              </div>
              <button onClick={() => setIsAddBrandOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateBrand} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Brand Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Tamron"
                    value={newBrand.name}
                    onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value, logoText: newBrand.logoText || e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                  />
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Specialty / Subtitle</label>
                  <input
                    type="text"
                    placeholder="e.g. Optical Zoom Master"
                    value={newBrand.sub}
                    onChange={(e) => setNewBrand({ ...newBrand, sub: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                  />
                </div>
              </div>

              {/* Logo Mode Switcher Tabs */}
              <div className="space-y-1.5 pt-1">
                <label className="font-semibold text-muted-foreground block">Logo Display Format</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-secondary/40 rounded-xl border border-border">
                  <button
                    type="button"
                    onClick={() => setBrandLogoType("image")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      brandLogoType === "image"
                        ? "bg-card text-foreground shadow-xs border border-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                    <span>Upload / Image Logo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBrandLogoType("text")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      brandLogoType === "text"
                        ? "bg-card text-foreground shadow-xs border border-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-blue-500" />
                    <span>Stylized Text Badge</span>
                  </button>
                </div>
              </div>

              {/* IMAGE LOGO SECTION */}
              {brandLogoType === "image" ? (
                <div className="space-y-3 p-4 rounded-2xl bg-secondary/20 border border-border">
                  {/* File Upload Box */}
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1.5">
                      Upload Logo Image File (PNG, SVG, WebP, JPG)
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-border rounded-xl bg-card hover:bg-secondary/40 cursor-pointer transition-colors text-muted-foreground hover:text-foreground">
                        <Upload className="w-4 h-4 text-amber-500" />
                        <span className="font-semibold text-xs">Choose Logo File from Computer</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleBrandLogoFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                    <span className="h-px flex-1 bg-border" />
                    <span>OR PASTE IMAGE URL</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  {/* Image URL Input */}
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">Direct Logo Image URL</label>
                    <input
                      type="url"
                      placeholder="https://.../brand-logo.png"
                      value={newBrand.logoImage}
                      onChange={(e) => setNewBrand({ ...newBrand, logoImage: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-[11px]"
                    />
                  </div>

                  {newBrand.logoImage && (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-card border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-8 rounded-lg bg-secondary/60 border border-border flex items-center justify-center p-1 overflow-hidden shrink-0">
                          <img
                            src={newBrand.logoImage}
                            alt="Logo preview"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <span className="text-[11px] text-emerald-600 font-bold">✓ Image Ready</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setNewBrand({ ...newBrand, logoImage: "" })}
                        className="text-xs text-rose-500 hover:underline px-2 cursor-pointer font-semibold"
                      >
                        Clear Image
                      </button>
                    </div>
                  )}

                  {/* Accent Dot Color for image mode */}
                  <div className="pt-1">
                    <label className="font-semibold text-muted-foreground block mb-1">Accent Dot Indicator</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={newBrand.accentColor}
                        onChange={(e) => setNewBrand({ ...newBrand, accentColor: e.target.value })}
                        className="w-8 h-8 rounded-lg cursor-pointer border border-border bg-transparent p-0"
                      />
                      <span className="font-mono text-[10px] text-muted-foreground">{newBrand.accentColor}</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* TEXT BADGE SECTION */
                <div className="space-y-3.5 p-4 rounded-2xl bg-secondary/20 border border-border">
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">Badge Text *</label>
                    <input
                      required={brandLogoType === "text"}
                      type="text"
                      placeholder="e.g. TAMRON"
                      value={newBrand.logoText}
                      onChange={(e) => setNewBrand({ ...newBrand, logoText: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono font-bold"
                    />
                  </div>

                  {/* Color Presets */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-muted-foreground block">Quick Brand Color Presets</label>
                    <div className="flex flex-wrap gap-1.5">
                      {presetBrandPalettes.map((p, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() =>
                            setNewBrand({
                              ...newBrand,
                              textColor: p.text,
                              bgColor: p.bg,
                              borderColor: p.border,
                              accentColor: p.dot,
                            })
                          }
                          className="px-2 py-1 rounded-lg border border-border bg-card hover:bg-secondary text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <span style={{ backgroundColor: p.dot }} className="w-2 h-2 rounded-full" />
                          <span>{p.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Color Pickers */}
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    <div>
                      <label className="font-semibold text-muted-foreground block mb-1">Text Color</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={newBrand.textColor}
                          onChange={(e) => setNewBrand({ ...newBrand, textColor: e.target.value })}
                          className="w-8 h-8 rounded-lg cursor-pointer border border-border bg-transparent p-0"
                        />
                        <span className="font-mono text-[10px] text-muted-foreground">{newBrand.textColor}</span>
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold text-muted-foreground block mb-1">Background</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={newBrand.bgColor.slice(0, 7)}
                          onChange={(e) => setNewBrand({ ...newBrand, bgColor: e.target.value })}
                          className="w-8 h-8 rounded-lg cursor-pointer border border-border bg-transparent p-0"
                        />
                        <span className="font-mono text-[10px] text-muted-foreground">{newBrand.bgColor}</span>
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold text-muted-foreground block mb-1">Accent Dot</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={newBrand.accentColor}
                          onChange={(e) => setNewBrand({ ...newBrand, accentColor: e.target.value })}
                          className="w-8 h-8 rounded-lg cursor-pointer border border-border bg-transparent p-0"
                        />
                        <span className="font-mono text-[10px] text-muted-foreground">{newBrand.accentColor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Live Preview of the Badge / Image */}
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">
                  Marquee Live Preview:
                </span>
                <div className="flex items-center gap-3">
                  {newBrand.logoImage ? (
                    <div className="h-9 max-w-[120px] min-w-[60px] px-2.5 py-1 rounded-xl bg-card border border-border flex items-center justify-center shrink-0 shadow-2xs">
                      <img
                        src={newBrand.logoImage}
                        alt="Logo preview"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: newBrand.bgColor,
                        borderColor: newBrand.borderColor,
                        color: newBrand.textColor,
                      }}
                      className="px-3.5 py-1.5 rounded-xl border text-sm font-black tracking-wider shadow-xs font-sans"
                    >
                      {newBrand.logoText || "BRAND LOGO"}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-foreground text-xs flex items-center gap-1.5">
                      <span style={{ backgroundColor: newBrand.accentColor }} className="w-1.5 h-1.5 rounded-full shrink-0" />
                      {newBrand.name || "Brand Name"}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono">{newBrand.sub || "Category specialty"}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <Button type="button" variant="outline" onClick={() => setIsAddBrandOpen(false)} className="rounded-xl text-xs cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="rounded-xl text-xs font-bold px-6 cursor-pointer">
                  Add Brand to Marquee
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD NEW PRODUCT */}
      {isAddProductOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setIsAddProductOpen(false)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 z-10">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-bold text-base text-foreground">Add New Cinema / Photography SKU</h3>
              <button onClick={() => setIsAddProductOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-muted-foreground block mb-1">Equipment Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sony FE 85mm f/1.4 GM II Lens"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Brand *</label>
                  <select
                    value={newProduct.brand}
                    onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                  >
                    <option value="Sony">Sony</option>
                    <option value="Canon">Canon</option>
                    <option value="Nikon">Nikon</option>
                    <option value="Tamron">Tamron</option>
                    <option value="Profoto">Profoto</option>
                    <option value="RED">RED Digital</option>
                    <option value="Blackmagic Design">Blackmagic</option>
                    <option value="DJI">DJI</option>
                    <option value="Aputure">Aputure</option>
                    <option value="RØDE">RØDE</option>
                    <option value="Fujifilm">Fujifilm</option>
                    <option value="SmallRig">SmallRig</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Department *</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as ProductCategory })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                  >
                    <option value="cameras">Cameras</option>
                    <option value="lenses">Lenses</option>
                    <option value="lighting">Lighting</option>
                    <option value="audio">Audio</option>
                    <option value="gimbals">Gimbals</option>
                    <option value="drones">Drones</option>
                    <option value="accessories">Accessories</option>
                    <option value="pre-owned">Pre-Owned</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">
                    Price ({CURRENCIES[currency]?.symbol.trim() || "E£"} {currency}) *
                  </label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 font-mono text-foreground"
                  />
                  <p className="text-[10px] text-muted-foreground font-mono mt-1">
                    Live: <span className="font-bold text-foreground">{formatPrice(Number(newProduct.price) / (CURRENCIES[currency]?.rate || 50.5))}</span>
                  </p>
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">
                    Original Price ({CURRENCIES[currency]?.symbol.trim() || "E£"})
                  </label>
                  <input
                    type="number"
                    value={newProduct.originalPrice}
                    onChange={(e) => setNewProduct({ ...newProduct, originalPrice: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 font-mono text-foreground"
                  />
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Initial Stock</label>
                  <input
                    type="number"
                    value={newProduct.stockCount}
                    onChange={(e) => setNewProduct({ ...newProduct, stockCount: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 font-mono text-foreground"
                  />
                </div>
              </div>

              {/* Product Image Selection: File Upload or Web URL */}
              <div className="space-y-2">
                <label className="font-semibold text-muted-foreground block">
                  Equipment Photo / Image
                </label>

                <div className="grid grid-cols-2 gap-2 bg-secondary/40 p-1 rounded-xl text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setProductImageType("upload")}
                    className={`py-1.5 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      productImageType === "upload"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProductImageType("url")}
                    className={`py-1.5 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      productImageType === "url"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Image URL Link</span>
                  </button>
                </div>

                {productImageType === "upload" ? (
                  <div className="border-2 border-dashed border-border hover:border-amber-400/50 rounded-2xl p-3.5 text-center bg-secondary/20 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      id="product-image-file"
                      onChange={handleProductImageFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="product-image-file"
                      className="cursor-pointer flex flex-col items-center justify-center gap-1.5"
                    >
                      <Upload className="w-5 h-5 text-amber-500" />
                      <p className="text-xs font-bold text-foreground">
                        {newProduct.image ? "Change selected image file" : "Click to browse device photo"}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        PNG, JPG, WebP up to 5MB
                      </p>
                    </label>
                  </div>
                ) : (
                  <div>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/... or direct image link"
                      value={newProduct.image}
                      onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono text-xs"
                    />
                  </div>
                )}

                {/* Live Image Preview */}
                {newProduct.image && (
                  <div className="relative w-full h-24 rounded-xl overflow-hidden bg-secondary border border-border flex items-center justify-center p-2 group">
                    <img
                      src={newProduct.image}
                      alt="Product preview"
                      className="h-full w-full object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => setNewProduct({ ...newProduct, image: "" })}
                      className="absolute top-1.5 right-1.5 bg-black/70 hover:bg-rose-600 text-white rounded-lg p-1 transition-colors"
                      title="Remove image"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="font-semibold text-muted-foreground block mb-1">Lens Mount / Sensor Spec</label>
                <input
                  type="text"
                  placeholder="e.g. Sony E-Mount • Full-Frame"
                  value={newProduct.mount}
                  onChange={(e) => setNewProduct({ ...newProduct, mount: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              <div>
                <label className="font-semibold text-muted-foreground block mb-1">Short Technical Summary</label>
                <textarea
                  rows={2}
                  placeholder="Fast f/1.4 aperture prime with dual XD linear motors..."
                  value={newProduct.shortDescription}
                  onChange={(e) => setNewProduct({ ...newProduct, shortDescription: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <Button type="button" variant="outline" onClick={() => setIsAddProductOpen(false)} className="rounded-xl text-xs cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="rounded-xl text-xs font-bold px-6 cursor-pointer">
                  Save SKU to Catalog
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT PRODUCT */}
      {isEditProductOpen && editProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setIsEditProductOpen(false)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 z-10">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                <Pencil className="w-4 h-4 text-blue-500" />
                Edit Product
              </h3>
              <button onClick={() => setIsEditProductOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleEditProduct} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-muted-foreground block mb-1">Equipment Name *</label>
                <input
                  required
                  type="text"
                  value={editProduct.name}
                  onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Brand *</label>
                  <select
                    value={editProduct.brand}
                    onChange={(e) => setEditProduct({ ...editProduct, brand: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                  >
                    <option value="Sony">Sony</option>
                    <option value="Canon">Canon</option>
                    <option value="Nikon">Nikon</option>
                    <option value="Tamron">Tamron</option>
                    <option value="Profoto">Profoto</option>
                    <option value="RED">RED Digital</option>
                    <option value="Blackmagic Design">Blackmagic</option>
                    <option value="DJI">DJI</option>
                    <option value="Aputure">Aputure</option>
                    <option value="RØDE">RØDE</option>
                    <option value="Fujifilm">Fujifilm</option>
                    <option value="SmallRig">SmallRig</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Department *</label>
                  <select
                    value={editProduct.category}
                    onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value as ProductCategory })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                  >
                    <option value="cameras">Cameras</option>
                    <option value="lenses">Lenses</option>
                    <option value="lighting">Lighting</option>
                    <option value="audio">Audio</option>
                    <option value="gimbals">Gimbals</option>
                    <option value="drones">Drones</option>
                    <option value="accessories">Accessories</option>
                    <option value="pre-owned">Pre-Owned</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">
                    Price ({CURRENCIES[currency]?.symbol.trim() || "E£"} {currency}) *
                  </label>
                  <input
                    type="number"
                    value={editProduct.price}
                    onChange={(e) => setEditProduct({ ...editProduct, price: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 font-mono text-foreground"
                  />
                  <p className="text-[10px] text-muted-foreground font-mono mt-1">
                    Live: <span className="font-bold text-foreground">{formatPrice(Number(editProduct.price) / (CURRENCIES[currency]?.rate || 50.5))}</span>
                  </p>
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">
                    Original Price ({CURRENCIES[currency]?.symbol.trim() || "E£"})
                  </label>
                  <input
                    type="number"
                    value={editProduct.originalPrice}
                    onChange={(e) => setEditProduct({ ...editProduct, originalPrice: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 font-mono text-foreground"
                  />
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground block mb-1">Stock Count</label>
                  <input
                    type="number"
                    value={editProduct.stockCount}
                    onChange={(e) => setEditProduct({ ...editProduct, stockCount: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/30 font-mono text-foreground"
                  />
                </div>
              </div>

              {/* Product Image Selection: File Upload or Web URL */}
              <div className="space-y-2">
                <label className="font-semibold text-muted-foreground block">
                  Equipment Photo / Image
                </label>

                <div className="grid grid-cols-2 gap-2 bg-secondary/40 p-1 rounded-xl text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setEditProductImageType("upload")}
                    className={`py-1.5 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      editProductImageType === "upload"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditProductImageType("url")}
                    className={`py-1.5 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      editProductImageType === "url"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Image URL Link</span>
                  </button>
                </div>

                {editProductImageType === "upload" ? (
                  <div className="border-2 border-dashed border-border hover:border-blue-400/50 rounded-2xl p-3.5 text-center bg-secondary/20 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      id="edit-product-image-file"
                      onChange={handleEditProductImageFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="edit-product-image-file"
                      className="cursor-pointer flex flex-col items-center justify-center gap-1.5"
                    >
                      <Upload className="w-5 h-5 text-blue-500" />
                      <p className="text-xs font-bold text-foreground">
                        {editProduct.image ? "Change selected image file" : "Click to browse device photo"}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        PNG, JPG, WebP up to 5MB
                      </p>
                    </label>
                  </div>
                ) : (
                  <div>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/... or direct image link"
                      value={editProduct.image}
                      onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono text-xs"
                    />
                  </div>
                )}

                {/* Live Image Preview */}
                {editProduct.image && (
                  <div className="relative w-full h-24 rounded-xl overflow-hidden bg-secondary border border-border flex items-center justify-center p-2 group">
                    <img
                      src={editProduct.image}
                      alt="Product preview"
                      className="h-full w-full object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => setEditProduct({ ...editProduct, image: "" })}
                      className="absolute top-1.5 right-1.5 bg-black/70 hover:bg-rose-600 text-white rounded-lg p-1 transition-colors"
                      title="Remove image"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="font-semibold text-muted-foreground block mb-1">Lens Mount / Sensor Spec</label>
                <input
                  type="text"
                  placeholder="e.g. Sony E-Mount • Full-Frame"
                  value={editProduct.mount}
                  onChange={(e) => setEditProduct({ ...editProduct, mount: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              <div>
                <label className="font-semibold text-muted-foreground block mb-1">Badge / Label</label>
                <input
                  type="text"
                  placeholder="e.g. New Arrival, Best Seller, Sale"
                  value={editProduct.badge}
                  onChange={(e) => setEditProduct({ ...editProduct, badge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              <div>
                <label className="font-semibold text-muted-foreground block mb-1">Short Technical Summary</label>
                <textarea
                  rows={2}
                  placeholder="Fast f/1.4 aperture prime with dual XD linear motors..."
                  value={editProduct.shortDescription}
                  onChange={(e) => setEditProduct({ ...editProduct, shortDescription: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <Button type="button" variant="outline" onClick={() => setIsEditProductOpen(false)} className="rounded-xl text-xs cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="rounded-xl text-xs font-bold px-6 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white">
                  💾 Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ORDER INVOICE & DETAILS */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setSelectedOrder(null)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 z-10">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">Commercial Tax Invoice</span>
                <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                  Order {selectedOrder.id}
                </h3>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <p className="text-muted-foreground font-mono text-[10px] uppercase">Billed To:</p>
                <p className="font-bold text-foreground">{selectedOrder.customerName}</p>
                {selectedOrder.company && <p className="text-muted-foreground font-medium">{selectedOrder.company}</p>}
                <p className="text-muted-foreground font-mono">{selectedOrder.customerPhone}</p>
                <p className="text-muted-foreground font-mono">{selectedOrder.customerEmail}</p>
              </div>
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <p className="text-muted-foreground font-mono text-[10px] uppercase">Shipping Address:</p>
                <p className="font-bold text-foreground">{selectedOrder.city}</p>
                <p className="text-muted-foreground">{selectedOrder.courier || "Fragile-Cine Insured Courier"}</p>
                <p className="text-muted-foreground font-mono text-[10px]">AWB Track: {selectedOrder.trackingNumber}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <p className="font-bold text-muted-foreground font-mono uppercase text-[10px]">Purchased Gear SKUs:</p>
              <div className="divide-y divide-border/60 border border-border rounded-xl p-3 bg-secondary/20 space-y-2">
                {selectedOrder.items.map((item, i) => (
                  <div key={i} className="pt-2 first:pt-0 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-[10px] font-mono text-muted-foreground">Qty: {item.qty} • {item.brand}</p>
                    </div>
                    <span className="font-mono font-bold">{formatPrice(item.price * item.qty)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-3 flex justify-between items-baseline font-black text-lg text-foreground">
              <span>Total Gross Amount</span>
              <span className="font-mono text-xl">{formatPrice(selectedOrder.totalUSD)}</span>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handlePrintOrderInvoice(selectedOrder)}
                  variant="outline"
                  size="sm"
                  className="rounded-xl text-xs font-semibold gap-1.5 cursor-pointer bg-primary/10 hover:bg-primary/20 text-foreground border-primary/30"
                >
                  <Printer className="w-3.5 h-3.5 text-primary" />
                  <span>Print Official Tax Invoice</span>
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => {
                    handleUpdateOrderStatus(selectedOrder.id, "Delivered");
                    setSelectedOrder(null);
                  }}
                  className="rounded-xl text-xs font-bold cursor-pointer"
                >
                  Mark as Delivered
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: VIP CUSTOMER FULL PROFILE & COMPLETE HISTORY */}
      {selectedStudioForHistory && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setSelectedStudioForHistory(null)}
          />
          <div className="relative bg-card border border-border rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border pb-4 shrink-0">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center font-black text-base text-foreground shrink-0 shadow-xs">
                  {selectedStudioForHistory.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-black text-lg text-foreground">
                      {selectedStudioForHistory.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-mono font-bold bg-[#FFE600]/15 text-amber-600 dark:text-[#FFE600] border border-[#FFE600]/30"
                    >
                      {selectedStudioForHistory.tier}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium flex items-center gap-1.5 mt-0.5">
                    <span>{selectedStudioForHistory.contactPerson}</span>
                    <span>•</span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {selectedStudioForHistory.city}
                    </span>
                    <span>•</span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      Tax ID: {selectedStudioForHistory.taxNumber}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudioForHistory(null)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-xl hover:bg-secondary cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Studio Key Financial Stats Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border text-center space-y-0.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                  Lifetime Spend Volume
                </span>
                <p className="text-base font-black font-mono text-foreground">
                  {formatPrice(selectedStudioForHistory.totalSpentUSD)}
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border text-center space-y-0.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                  Completed Purchases
                </span>
                <p className="text-base font-black font-mono text-foreground">
                  {selectedStudioForHistory.totalOrders} Orders
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border text-center space-y-0.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                  Assigned Credit Line
                </span>
                <p className="text-base font-black font-mono text-emerald-600 dark:text-emerald-400">
                  {formatPrice(selectedStudioForHistory.creditLimitUSD)}
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border text-center space-y-0.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                  Available Credit
                </span>
                <p className="text-base font-black font-mono text-foreground">
                  {formatPrice(selectedStudioForHistory.availableCreditUSD || selectedStudioForHistory.creditLimitUSD)}
                </p>
              </div>
            </div>

            {/* History Tabs Navigation */}
            <div className="flex items-center gap-2 border-b border-border pb-2 shrink-0 overflow-x-auto no-scrollbar">
              {[
                {
                  id: "orders",
                  label: `Order History (${selectedStudioForHistory.orderHistory?.length || 0})`,
                  icon: <ShoppingBag className="w-3.5 h-3.5" />,
                },
                {
                  id: "fleet",
                  label: `Fleet Equipment (${selectedStudioForHistory.fleetEquipment?.length || 0})`,
                  icon: <Camera className="w-3.5 h-3.5" />,
                },
                {
                  id: "service",
                  label: `Service & Calibration (${selectedStudioForHistory.serviceHistory?.length || 0})`,
                  icon: <Wrench className="w-3.5 h-3.5" />,
                },
                {
                  id: "notes",
                  label: "CRM & Terms",
                  icon: <FileText className="w-3.5 h-3.5" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setHistoryTab(tab.id as typeof historyTab)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    historyTab === tab.id
                      ? "bg-foreground text-background shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* History Content Area (Scrollable) */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-4 text-xs">
              {/* TAB 1: ORDER & PURCHASE HISTORY */}
              {historyTab === "orders" && (
                <div className="space-y-3">
                  {!selectedStudioForHistory.orderHistory || selectedStudioForHistory.orderHistory.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-40" />
                      <p className="font-semibold">No order history recorded yet</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-border/60 border border-border rounded-2xl bg-secondary/20 overflow-hidden">
                      {selectedStudioForHistory.orderHistory.map((ord) => (
                        <div key={ord.id} className="p-4 space-y-2 hover:bg-secondary/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 font-mono">
                              <span className="font-bold text-foreground">{ord.id}</span>
                              <span className="text-muted-foreground text-[11px]">• {ord.date}</span>
                              <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                                {ord.invoiceNumber}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-mono font-bold text-sm text-foreground">
                                {formatPrice(ord.amountUSD)}
                              </span>
                              <Badge
                                variant="secondary"
                                className="text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                              >
                                {ord.status}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-foreground font-semibold text-xs leading-relaxed">
                            {ord.items}
                          </p>
                          <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-1 border-t border-border/40">
                            <span>Payment Terms: <strong>{ord.paymentMethod}</strong></span>
                            <button
                              onClick={() => toast.success(`Proforma Invoice ${ord.invoiceNumber} generated`)}
                              className="text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <Printer className="w-3 h-3" />
                              <span>Print Invoice</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: FLEET EQUIPMENT & SERIAL NUMBERS */}
              {historyTab === "fleet" && (
                <div className="space-y-3">
                  {!selectedStudioForHistory.fleetEquipment || selectedStudioForHistory.fleetEquipment.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <Camera className="w-8 h-8 mx-auto mb-2 opacity-40" />
                      <p className="font-semibold">No equipment registered in fleet</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedStudioForHistory.fleetEquipment.map((gear, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl border border-border bg-secondary/30 space-y-2 hover:border-[#FFE600]/40 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-bold text-foreground text-xs">{gear.model}</p>
                              <span className="text-[10px] font-mono text-muted-foreground uppercase">
                                {gear.category}
                              </span>
                            </div>
                            <Badge
                              variant="secondary"
                              className={`text-[9px] font-mono font-bold border ${
                                gear.warrantyStatus === "Under Warranty"
                                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                                  : gear.warrantyStatus.includes("Pro Care")
                                  ? "bg-[#FFE600]/15 text-amber-600 dark:text-[#FFE600] border-[#FFE600]/30"
                                  : "bg-zinc-500/10 text-zinc-400 border-zinc-500/30"
                              }`}
                            >
                              {gear.warrantyStatus}
                            </Badge>
                          </div>
                          <div className="pt-1 border-t border-border/50 flex justify-between text-[11px] font-mono text-muted-foreground">
                            <span>SN: <strong className="text-foreground">{gear.serialNumber}</strong></span>
                            <span>Acquired: {gear.purchasedDate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: SERVICE & CALIBRATION LOGS */}
              {historyTab === "service" && (
                <div className="space-y-3">
                  {!selectedStudioForHistory.serviceHistory || selectedStudioForHistory.serviceHistory.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <Wrench className="w-8 h-8 mx-auto mb-2 opacity-40" />
                      <p className="font-semibold">No maintenance tickets logged yet</p>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {selectedStudioForHistory.serviceHistory.map((srv) => (
                        <div
                          key={srv.id}
                          className="p-4 rounded-2xl border border-border bg-secondary/30 space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 font-mono">
                              <span className="font-bold text-foreground text-xs">{srv.id}</span>
                              <span className="text-muted-foreground text-[11px]">• {srv.date}</span>
                            </div>
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold"
                            >
                              ✓ {srv.status}
                            </Badge>
                          </div>
                          <p className="font-bold text-foreground text-xs">{srv.serviceType}</p>
                          <p className="text-xs text-muted-foreground bg-secondary/60 p-2.5 rounded-xl font-mono">
                            Diagnostic: &ldquo;{srv.notes}&rdquo;
                          </p>
                          <div className="text-[10px] font-mono text-muted-foreground pt-1 flex justify-between">
                            <span>Lead Cine Technician: <strong>{srv.technician}</strong></span>
                            <span>Bench Desk: <strong>Zamalek Lab #01</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: CRM NOTES & TERMS */}
              {historyTab === "notes" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-secondary/30 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold">
                        Corporate Headquarters
                      </span>
                      <p className="font-bold text-foreground">{selectedStudioForHistory.address}</p>
                      <p className="text-muted-foreground font-mono text-[11px]">{selectedStudioForHistory.city}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-secondary/30 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold">
                        Direct Studio Contact
                      </span>
                      <p className="font-bold text-foreground">{selectedStudioForHistory.phone}</p>
                      <p className="text-muted-foreground font-mono text-[11px]">{selectedStudioForHistory.email}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary/30 border border-border space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-muted-foreground font-bold uppercase">Account Manager:</span>
                      <span className="font-bold text-foreground">{selectedStudioForHistory.accountManager || "Ahmed Mahmoud"}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono border-t border-border/40 pt-2">
                      <span className="text-muted-foreground font-bold uppercase">Customer Onboarding Date:</span>
                      <span className="font-bold text-foreground">{selectedStudioForHistory.joinDate || "2024-01-01"}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono border-t border-border/40 pt-2">
                      <span className="text-muted-foreground font-bold uppercase">VIP Commercial Terms:</span>
                      <span className="font-bold text-[#FFE600]">Tier Commercial Discount Applied (10-15%)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary/20 border border-border space-y-1.5">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold">
                      Account Notes &amp; Production Profile:
                    </span>
                    <p className="text-xs text-foreground leading-relaxed">
                      {selectedStudioForHistory.notes || "No extra notes logged for this customer account."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-between border-t border-border pt-4 shrink-0">
              <Button
                onClick={() => {
                  toast.success(`Complete history statement for ${selectedStudioForHistory.name} exported`);
                }}
                variant="outline"
                size="sm"
                className="rounded-xl text-xs font-semibold gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Client Statement</span>
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => {
                    const stu = selectedStudioForHistory;
                    setSelectedStudioForHistory(null);
                    setSelectedQuoteStudio(stu);
                  }}
                  className="rounded-xl text-xs font-bold gap-1.5 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Issue RFQ Quote</span>
                </Button>
                <Button
                  onClick={() => setSelectedStudioForHistory(null)}
                  variant="ghost"
                  className="rounded-xl text-xs cursor-pointer"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: REGISTER NEW STUDIO CLIENT */}
      {isAddStudioOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xs" onClick={() => setIsAddStudioOpen(false)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 z-10">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 className="font-bold text-base text-foreground">Register New Production Studio</h3>
                <p className="text-xs text-muted-foreground font-mono">Create an official corporate VIP account</p>
              </div>
              <button
                onClick={() => setIsAddStudioOpen(false)}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateStudio} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block">Studio / Company Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Lotus Film Studios"
                    value={newStudio.name}
                    onChange={(e) => setNewStudio({ ...newStudio, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block">Head DP / Contact Person *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Youssef El-Sherif"
                    value={newStudio.contactPerson}
                    onChange={(e) => setNewStudio({ ...newStudio, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block">Phone Number *</label>
                  <input
                    required
                    type="text"
                    placeholder="+20 10 1234 5678"
                    value={newStudio.phone}
                    onChange={(e) => setNewStudio({ ...newStudio, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="contact@lotusfilms.com"
                    value={newStudio.email}
                    onChange={(e) => setNewStudio({ ...newStudio, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block">VIP Tier</label>
                  <select
                    value={newStudio.tier}
                    onChange={(e) => setNewStudio({ ...newStudio, tier: e.target.value as StudioClient["tier"] })}
                    className="w-full px-2.5 py-2 rounded-xl border border-border bg-secondary/30 text-foreground font-mono text-[11px]"
                  >
                    <option value="VIP Platinum DP">VIP Platinum DP</option>
                    <option value="Gold Production House">Gold Production</option>
                    <option value="Broadcast Partner">Broadcast Partner</option>
                    <option value="Silver Production">Silver Production</option>
                    <option value="Creator Studio">Creator Studio</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block">Credit Limit ($)</label>
                  <input
                    type="number"
                    value={newStudio.creditLimitUSD}
                    onChange={(e) => setNewStudio({ ...newStudio, creditLimitUSD: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block">City / Area</label>
                  <input
                    type="text"
                    placeholder="e.g. New Cairo"
                    value={newStudio.city}
                    onChange={(e) => setNewStudio({ ...newStudio, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground block">Address &amp; Location</label>
                <input
                  type="text"
                  placeholder="Street name, District, Cairo..."
                  value={newStudio.address}
                  onChange={(e) => setNewStudio({ ...newStudio, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground block">Commercial Notes</label>
                <textarea
                  rows={2}
                  placeholder="Client production specialties, camera preferences, discount terms..."
                  value={newStudio.notes}
                  onChange={(e) => setNewStudio({ ...newStudio, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddStudioOpen(false)}
                  className="rounded-xl text-xs cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-xl text-xs font-bold px-6 cursor-pointer bg-[#FFE600] text-black hover:bg-[#FFD000]"
                >
                  Register Studio Client
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: CREATE / GENERATE NEW PROMO CODE */}
      {isNewCouponOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setIsNewCouponOpen(false)} />
          <div className="relative bg-card border border-border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 z-10 text-xs animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-primary">Marketing Engine</span>
                <h3 className="font-bold text-base text-foreground">Create &amp; Schedule Promo Code</h3>
              </div>
              <button
                onClick={() => setIsNewCouponOpen(false)}
                className="text-muted-foreground hover:text-foreground cursor-pointer p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveCoupon} className="space-y-4">
              {/* Promo Code & Auto-Generate Button */}
              <div className="space-y-1.5">
                <label className="font-semibold text-foreground flex items-center justify-between">
                  <span>Coupon Promo Code * (كود الخصم)</span>
                  <button
                    type="button"
                    onClick={generateRandomCouponCode}
                    className="text-primary hover:underline text-[11px] font-mono font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>🎲 Generate Random</span>
                  </button>
                </label>
                <div className="flex gap-2">
                  <input
                    required
                    type="text"
                    placeholder="e.g. CINE20 or ESA-8841"
                    value={couponForm.code}
                    onChange={(e) => setCouponForm({ ...couponForm, code: e.target.value.toUpperCase() })}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 text-foreground font-mono font-black text-sm tracking-wider uppercase"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={generateRandomCouponCode}
                    className="rounded-xl text-xs font-semibold px-3 cursor-pointer shrink-0"
                  >
                    Randomize
                  </Button>
                </div>
              </div>

              {/* Discount Percentage % */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-secondary/30 border border-border">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-foreground">
                    Discount Percentage (قيمة الخصم في المية)
                  </label>
                  <span className="font-mono text-base font-black text-primary">
                    {couponForm.discount_percent}% OFF
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="90"
                  step="1"
                  value={couponForm.discount_percent}
                  onChange={(e) => setCouponForm({ ...couponForm, discount_percent: Number(e.target.value) })}
                  className="w-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                  <span>5%</span>
                  <span>15% (Recommended)</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Campaign Description */}
              <div className="space-y-1">
                <label className="font-semibold text-foreground block">
                  Campaign Description (وصف الحملة أو الخصم)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramadan Special Discount on Master Prime Lenses"
                  value={couponForm.description}
                  onChange={(e) => setCouponForm({ ...couponForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-border bg-secondary/30 text-foreground"
                />
              </div>

              {/* Date Schedule: من يوم كام ليوم كام */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-secondary/20 border border-border">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block text-[11px]">
                    Valid From Date (من يوم كام) *
                  </label>
                  <input
                    required
                    type="date"
                    value={couponForm.start_date}
                    onChange={(e) => setCouponForm({ ...couponForm, start_date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground block text-[11px]">
                    Expires At Date (ليوم كام) *
                  </label>
                  <input
                    required
                    type="date"
                    value={couponForm.end_date}
                    onChange={(e) => setCouponForm({ ...couponForm, end_date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-xs"
                  />
                </div>
              </div>

              {/* Single Use vs Multi-Use Options */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-secondary/30 border border-border">
                <label className="font-semibold text-foreground block">
                  Usage Limit (شروط الاستخدام)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label
                    className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                      !couponForm.is_single_use
                        ? "border-primary bg-primary/10 text-foreground font-bold"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="single_use"
                      checked={!couponForm.is_single_use}
                      onChange={() => setCouponForm({ ...couponForm, is_single_use: false })}
                      className="accent-primary"
                    />
                    <span>🔄 Multi-Use (متعدد)</span>
                  </label>

                  <label
                    className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                      couponForm.is_single_use
                        ? "border-primary bg-primary/10 text-foreground font-bold"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="single_use"
                      checked={couponForm.is_single_use}
                      onChange={() => setCouponForm({ ...couponForm, is_single_use: true })}
                      className="accent-primary"
                    />
                    <span>⚡ Single-Use (مرة واحدة)</span>
                  </label>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsNewCouponOpen(false)}
                  className="rounded-xl text-xs cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-xl text-xs font-bold px-6 cursor-pointer bg-primary text-primary-foreground hover:opacity-90"
                >
                  Save &amp; Activate Coupon
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

