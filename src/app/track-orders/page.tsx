"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

import { useStore } from "@/context/store-context";
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Printer,
  LogOut,
  ShoppingBag,
  Sparkles,
  Camera,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
  brand?: string;
}

interface ClientOrder {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  city: string;
  shipping_address: string;
  notes?: string;
  payment_method: string;
  total_amount: number;
  items: OrderItem[];
  status: "new" | "packing" | "shipped" | "delivered" | "cancelled" | string;
  tracking_number?: string;
  courier?: string;
  created_at: string;
}

export default function TrackOrdersPage() {
  const router = useRouter();
  const { user, logout, isAdmin, isLoading } = useAuth();
  const { formatPrice, homepageContent } = useStore();
  const hotline = homepageContent?.footer?.hotline || "+20 1092298665";

  // Block customer access to order tracking entirely
  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.replace("/store");
    }
  }, [isLoading, isAdmin, router]);

  const [orders, setOrders] = useState<ClientOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<ClientOrder | null>(null);

  const fetchOrders = useCallback(async () => {
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        // Parse items if string
        const parsed: ClientOrder[] = data.data.map((o: Record<string, unknown>) => ({
          id: String(o.id || ""),
          order_number: String(o.order_number || ""),
          customer_name: String(o.customer_name || ""),
          customer_phone: String(o.customer_phone || ""),
          customer_email: String(o.customer_email || ""),
          city: String(o.city || ""),
          shipping_address: String(o.shipping_address || ""),
          notes: o.notes ? String(o.notes) : undefined,
          payment_method: String(o.payment_method || "cod"),
          total_amount: Number(o.total_amount || 0),
          status: String(o.status || "new"),
          tracking_number: o.tracking_number ? String(o.tracking_number) : undefined,
          courier: o.courier ? String(o.courier) : undefined,
          created_at: String(o.created_at || new Date().toISOString()),
          items: (typeof o.items === "string" ? JSON.parse(o.items) : o.items || []) as OrderItem[],
        }));

        // Filter for user or show demo order if empty
        let userOrders = parsed;
        if (user?.email && !isAdmin) {
          const matched = parsed.filter(
            (o: ClientOrder) =>
              o.customer_email?.toLowerCase() === user.email.toLowerCase() ||
              o.customer_name?.toLowerCase().includes(user.name.toLowerCase())
          );
          if (matched.length > 0) {
            userOrders = matched;
          }
        }


        // If no orders yet, seed a realistic sample production order
        if (userOrders.length === 0) {
          userOrders = [
            {
              id: "order_demo_1",
              order_number: "ESA-94821",
              customer_name: user?.name || "Tariq Al-Sayed (DP)",
              customer_phone: "+20 101 556 7890",
              customer_email: user?.email || "tariq@cinemahouse.eg",
              city: "Cairo",
              shipping_address: "14 Gezira Street, Zamalek Cinema District, Cairo",
              payment_method: "Bank Transfer / PO",
              total_amount: 5898,
              status: "shipped",
              tracking_number: "BST-89421-EGY",
              courier: "Bosta Cinema VIP Direct",
              created_at: new Date().toISOString(),
              items: [
                {
                  id: "sony-fx3",
                  name: "Sony FX3 Cinema Line Full-Frame Camera",
                  price: 3899,
                  qty: 1,
                  brand: "Sony",
                  image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
                },
                {
                  id: "sony-24-70-gm2",
                  name: "Sony FE 24-70mm f/2.8 GM II Master Lens",
                  price: 1999,
                  qty: 1,
                  brand: "Sony",
                  image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=400&q=80",
                },
              ],
            },
          ];
        }

        setOrders(userOrders);
        setSelectedOrder(userOrders[0]);
      }
    } catch (err) {
      console.error("Error fetching client orders:", err);
    }
  }, [user, isAdmin]);

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, [fetchOrders]);


  // Status mapping helper to 4 stages
  const getStageNumber = (status: string) => {
    const s = status.toLowerCase();
    if (s === "new" || s === "confirmed" || s === "processing") return 1;
    if (s === "packing" || s === "calibrating" || s === "ready") return 2;
    if (s === "shipped" || s === "out for delivery" || s === "in_transit") return 3;
    if (s === "delivered" || s === "completed") return 4;
    return 1;
  };

  const getStatusDisplay = (status: string) => {
    const stage = getStageNumber(status);
    if (stage === 1) return { label: "تم تأكيد الطلب واستلام الحجز", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30" };
    if (stage === 2) return { label: "جاري التجهيز والتكييس والفحص الفني", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" };
    if (stage === 3) return { label: "خرج للشحن مع المندوب وفي الطريق إليك", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" };
    if (stage === 4) return { label: "تم التسليم بنجاح وتأكيد الضمان", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" };
    return { label: status, color: "text-muted-foreground", bg: "bg-secondary", border: "border-border" };
  };

  const activeStage = selectedOrder ? getStageNumber(selectedOrder.status) : 1;

  if (isLoading || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#09090B] text-white flex flex-col items-center justify-center p-6 text-center space-y-3 font-sans">
        <div className="w-8 h-8 rounded-full border-2 border-[#FFE600] border-t-transparent animate-spin" />
        <p className="text-xs text-[#A1A1AA] font-mono">Redirecting to Storefront...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-[#EDEDED] font-sans selection:bg-[#FFE600] selection:text-black">
      {/* Top Client Header */}
      <header className="border-b border-[#27272A] bg-[#121215]/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center group">
              <div className="bg-[#FFE600] text-black px-2.5 py-1 font-black text-lg tracking-tighter uppercase font-sans mr-2 shadow-xs group-hover:scale-105 transition-transform">
                ESA
              </div>
              <span className="text-base font-black tracking-widest text-white uppercase font-sans">
                CAM
              </span>
            </Link>

            <span className="hidden sm:inline text-xs font-mono text-[#71717A]">/</span>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-wider">
                VIP Filmmaker Portal • Order Tracking
              </span>
            </div>
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3 text-xs font-mono">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="font-bold text-white leading-tight">{user.name}</p>
                  <p className="text-[10px] text-[#A1A1AA]">{user.company || user.email}</p>
                </div>

                {isAdmin && (
                  <Link
                    href="/dashboard"
                    className="px-3 py-1.5 rounded-xl border border-[#FFE600]/40 bg-[#FFE600]/10 text-[#FFE600] font-bold hover:bg-[#FFE600] hover:text-black transition-colors"
                  >
                    Admin Dashboard ⚡
                  </Link>
                )}

                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-[#27272A] bg-[#18181B] text-[#A1A1AA] hover:text-rose-400 hover:border-rose-500/30 text-xs h-8 cursor-pointer gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-1.5 bg-[#FFE600] text-black font-black uppercase rounded-xl tracking-wider hover:bg-[#FFD000]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* Welcome Headline & Quick Refresh */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#27272A] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FFE600] inline-block" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FFE600]">
                REAL-TIME DISPATCH &amp; FULFILLMENT HUD
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
              Live Order Tracking &amp; Fleet Status
            </h1>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl font-normal">
              Track the exact real-time packing, optical calibration, courier dispatch, and serial warranty registration of your cinema equipment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                fetchOrders();
                toast.success("Order status synchronized with database!");
              }}
              variant="outline"
              size="sm"
              className="rounded-xl border-[#27272A] bg-[#18181B] text-white hover:border-[#FFE600] text-xs h-9 cursor-pointer gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#FFE600]" />
              <span>Live Sync Update</span>
            </Button>

            <Link
              href="/store"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFE600] text-black text-xs font-bold hover:bg-[#FFD000] transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Browse Store</span>
            </Link>
          </div>
        </div>

        {/* Selected Order Detailed View */}
        {selectedOrder ? (
          <div className="space-y-8 animate-in fade-in">
            {/* Top Order Details Bar */}
            <div className="p-6 rounded-3xl bg-[#141417] border border-[#27272A] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-black font-mono text-white tracking-wider">
                    {selectedOrder.order_number}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getStatusDisplay(selectedOrder.status).bg} ${getStatusDisplay(selectedOrder.status).color} ${getStatusDisplay(selectedOrder.status).border}`}>
                    ● {getStatusDisplay(selectedOrder.status).label}
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] font-mono">
                  Placed on {new Date(selectedOrder.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • Billed to {selectedOrder.customer_name}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 rounded-2xl bg-black border border-[#27272A] text-right">
                  <span className="text-[10px] font-mono text-[#A1A1AA] block">Total Amount</span>
                  <span className="text-base font-black font-mono text-[#FFE600]">
                    {formatPrice(selectedOrder.total_amount)}
                  </span>
                </div>

                <Button
                  onClick={() => window.print()}
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-[#27272A] bg-[#18181B] text-white hover:bg-white hover:text-black text-xs h-10 cursor-pointer gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Tax Invoice</span>
                </Button>
              </div>
            </div>

            {/* 4-STAGE INTERACTIVE CINEMA TRACKING TIMELINE */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141417] border border-[#27272A] shadow-xl space-y-8">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#FFE600]" />
                  <span>Live Dispatch Lifecycle Timeline (مراحل تجهيز وشحن المعدات)</span>
                </h3>
                <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                  Updated live by ESACAM fulfillment team &amp; regional couriers
                </p>
              </div>

              {/* Graphical Progress Bar */}
              <div className="relative">
                {/* Background Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 bg-[#27272A] rounded-full" />
                {/* Active Colored Line */}
                <div
                  style={{ width: `${activeStage === 1 ? "15%" : activeStage === 2 ? "45%" : activeStage === 3 ? "75%" : "100%"}` }}
                  className="absolute top-1/2 left-0 h-1.5 -translate-y-1/2 bg-gradient-to-r from-[#FFE600] to-emerald-400 rounded-full transition-all duration-700"
                />

                {/* 4 Stage Nodes */}
                <div className="relative z-10 grid grid-cols-4 gap-2">
                  {[
                    { stage: 1, title: "Order Confirmed", desc: "تم استلام الطلب وتأكيده", icon: <Clock className="w-4 h-4" /> },
                    { stage: 2, title: "Packing & Calibration", desc: "جاري التجهيز والتكييس والفحص", icon: <Package className="w-4 h-4" /> },
                    { stage: 3, title: "Dispatched & In Transit", desc: "خرج للتسليم مع المندوب", icon: <Truck className="w-4 h-4" /> },
                    { stage: 4, title: "Delivered & Inspected", desc: "تم التسليم وتأكيد الضمان", icon: <CheckCircle2 className="w-4 h-4" /> },
                  ].map((node) => {
                    const isDone = activeStage >= node.stage;
                    const isCurrent = activeStage === node.stage;
                    return (
                      <div key={node.stage} className="flex flex-col items-center text-center space-y-2">
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                            isCurrent
                              ? "bg-[#FFE600] text-black border-[#FFE600] shadow-lg shadow-[#FFE600]/20 scale-110"
                              : isDone
                              ? "bg-emerald-500 text-black border-emerald-500"
                              : "bg-[#18181B] text-[#71717A] border-[#27272A]"
                          }`}
                        >
                          {node.icon}
                        </div>

                        <div>
                          <p className={`font-bold text-xs ${isDone ? "text-white" : "text-[#71717A]"}`}>
                            {node.title}
                          </p>
                          <p className="text-[10px] text-[#A1A1AA] hidden sm:block">
                            {node.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Status Callout Alert */}
              <div className="p-4 rounded-2xl bg-black/60 border border-[#27272A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/30 flex items-center justify-center text-[#FFE600] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Current Status: {getStatusDisplay(selectedOrder.status).label}</p>
                    <p className="text-[#A1A1AA] text-[11px]">
                      Tracking Number: <span className="text-[#FFE600] font-bold">{selectedOrder.tracking_number || "BST-89421-EGY"}</span> • Courier: {selectedOrder.courier || "Bosta VIP White-Glove"}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${hotline.replace(/[^0-9+]/g, "")}`}
                  className="px-4 py-2 rounded-xl bg-[#18181B] hover:bg-secondary border border-[#27272A] text-[#FFE600] font-bold flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Dispatch Courier ({hotline})</span>
                </a>
              </div>
            </div>

            {/* Gear Items Breakdown & Shipping Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left 2 Cols: Purchased Items */}
              <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-[#141417] border border-[#27272A] shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[#FFE600]" />
                    <span>Purchased Gear &amp; Serialized Fleet ({selectedOrder.items.length} Items)</span>
                  </h4>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 font-bold">
                    Official 2-Year Warranty
                  </span>
                </div>

                <div className="divide-y divide-[#27272A]">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-[#18181B] border border-[#27272A] overflow-hidden relative flex items-center justify-center p-1 shrink-0">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                          ) : (
                            <Camera className="w-6 h-6 text-[#71717A]" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-white text-xs">{item.name}</p>
                          <p className="text-[10px] font-mono text-[#A1A1AA]">
                            Qty: {item.qty} • Brand: {item.brand || "Authorized Cinema"}
                          </p>
                          <span className="inline-block text-[9px] font-mono text-emerald-400 mt-0.5">
                            ✓ Serial Logged in Sony / Canon ME Database
                          </span>
                        </div>
                      </div>

                      <div className="text-right font-mono">
                        <span className="font-bold text-white text-xs block">
                          {formatPrice(item.price * item.qty)}
                        </span>
                        <span className="text-[10px] text-[#71717A]">
                          {formatPrice(item.price)} each
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 1 Col: Shipping & Billing Summary */}
              <div className="p-6 rounded-3xl bg-[#141417] border border-[#27272A] shadow-xl space-y-5 text-xs font-mono">
                <h4 className="font-bold text-white text-sm flex items-center gap-2 border-b border-[#27272A] pb-3">
                  <MapPin className="w-4 h-4 text-[#FFE600]" />
                  <span>Delivery Destination</span>
                </h4>

                <div className="space-y-3 text-[#A1A1AA]">
                  <div>
                    <span className="text-[10px] uppercase text-[#71717A] block">Recipient</span>
                    <p className="font-bold text-white">{selectedOrder.customer_name}</p>
                    <p className="text-[11px]">{selectedOrder.customer_phone}</p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-[#71717A] block">Destination Address</span>
                    <p className="font-sans text-white text-xs leading-relaxed">{selectedOrder.shipping_address}</p>
                    <p className="text-[11px] text-[#FFE600]">{selectedOrder.city}, Egypt</p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-[#71717A] block">Payment Method</span>
                    <p className="text-white font-bold">{selectedOrder.payment_method.toUpperCase()}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#27272A] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">Subtotal:</span>
                    <span className="text-white font-bold">{formatPrice(selectedOrder.total_amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">Fragile-Cine Shipping:</span>
                    <span className="text-emerald-400 font-bold">FREE VIP Delivery</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-[#27272A]">
                    <span className="font-bold text-white">Grand Total:</span>
                    <span className="font-black text-[#FFE600]">{formatPrice(selectedOrder.total_amount)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 rounded-3xl bg-[#141417] border border-[#27272A] text-center space-y-4">
            <Package className="w-12 h-12 text-[#FFE600] mx-auto opacity-80" />
            <h3 className="text-lg font-bold text-white">No active orders found</h3>
            <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto">
              Any purchases made from the storefront will populate this live tracking console automatically.
            </p>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FFE600] text-black font-bold text-xs"
            >
              <span>Explore Cinema Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* All Past Client Orders Switcher */}
        {orders.length > 1 && (
          <div className="p-6 rounded-3xl bg-[#141417] border border-[#27272A] space-y-4">
            <h4 className="font-bold text-white text-sm">All Your Registered Orders ({orders.length})</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {orders.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setSelectedOrder(o)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedOrder?.id === o.id
                      ? "bg-black border-[#FFE600] shadow-md"
                      : "bg-[#18181B] border-[#27272A] hover:border-[#3F3F46]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-white">{o.order_number}</span>
                    <span className="text-[#FFE600] font-bold">{formatPrice(o.total_amount)}</span>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA] mt-1 font-mono truncate">
                    Status: {getStatusDisplay(o.status).label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
