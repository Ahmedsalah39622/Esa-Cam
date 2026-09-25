"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Search,
  RefreshCw,
  Phone,
  MessageSquare,
  ChevronRight,
  Package,
  Download,
  Home,
  ShoppingBag,
} from "lucide-react";
import { toast } from "sonner";
import {
  playNewOrderChime,
  triggerHaptic,
  requestNotificationPermission,
  showPushNotification,
} from "@/components/mobile-app/audio-alerts";
import {
  OrderDetailsDrawer,
  AdminOrder,
} from "@/components/mobile-app/order-details-drawer";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function AdminMobileAppPage() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsGranted, setNotificationsGranted] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  const prevOrderCountRef = useRef<number | null>(null);
  const knownOrderIdsRef = useRef<Set<string>>(new Set());

  // Check Notification permission on mount
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setNotificationsGranted(Notification.permission === "granted");
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowInstallPrompt(false);
      }
      setDeferredPrompt(null);
    } else {
      toast.info(
        "على أجهزة iPhone: اضغط زر المشاركة (Share) في Safari ثم اختر (Add to Home Screen - إضافة إلى الشاشة الرئيسية)."
      );
    }
  };

  const handleToggleNotifications = async () => {
    const granted = await requestNotificationPermission();
    setNotificationsGranted(granted);
    if (granted) {
      toast.success("تم تفعيل إشعارات الهاتف بنجاح!");
      playNewOrderChime();
    } else {
      toast.error("لم يتم منح إذن الإشعارات من إعدادات المتصفح.");
    }
  };

  // Fetch orders
  const fetchOrders = useCallback(async (isManual = false) => {
    try {
      if (isManual) setIsRefreshing(true);
      const res = await fetch("/api/orders", { cache: "no-store" });
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const fetchedOrders: AdminOrder[] = data.data;

        // Check for new incoming orders
        if (prevOrderCountRef.current !== null) {
          const freshNewOrders = fetchedOrders.filter(
            (o) => !knownOrderIdsRef.current.has(o.id) && o.status === "new"
          );

          if (freshNewOrders.length > 0) {
            const newest = freshNewOrders[0];

            if (soundEnabled) {
              playNewOrderChime();
            }
            triggerHaptic([300, 150, 300, 150, 500]);

            const egpTotal = Math.round(Number(newest.total_amount) * 50.5).toLocaleString();
            showPushNotification(`طلب جديد وارد! #${newest.order_number}`, {
              body: `العميل: ${newest.customer_name} | بمبلغ: E£ ${egpTotal}`,
              icon: "/esa-logo.png",
              tag: newest.id,
            });

            toast.success(
              `🚨 طلب جديد وارد من ${newest.customer_name}! (#${newest.order_number})`,
              {
                duration: 8000,
                action: {
                  label: "عرض الطلب",
                  onClick: () => {
                    setSelectedOrder(newest);
                    setIsDrawerOpen(true);
                  },
                },
              }
            );
          }
        }

        knownOrderIdsRef.current = new Set(fetchedOrders.map((o) => o.id));
        prevOrderCountRef.current = fetchedOrders.length;
        setOrders(fetchedOrders);
      }
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    } finally {
      setIsLoading(false);
      if (isManual) setIsRefreshing(false);
    }
  }, [soundEnabled]);

  // Polling loop every 4 seconds
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(() => {
      fetchOrders();
    }, 4000);
    return () => clearInterval(interval);
  }, [fetchOrders]);

  // Update Status Handler
  const handleStatusChange = async (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    const res = await fetch(`/api/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    if (!res.ok) {
      fetchOrders();
      throw new Error("Failed to update status");
    }
  };

  // Delete Order Handler
  const handleDeleteOrder = async (orderId: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== orderId));
    const res = await fetch(`/api/orders/${orderId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      fetchOrders();
      throw new Error("Failed to delete");
    }
  };

  // Filtered orders
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesStatus =
        statusFilter === "all" ? true : order.status === statusFilter;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesStatus;

      const matchesSearch =
        order.order_number?.toLowerCase().includes(q) ||
        order.customer_name?.toLowerCase().includes(q) ||
        order.customer_phone?.toLowerCase().includes(q) ||
        order.city?.toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [orders, statusFilter, searchQuery]);

  // Status counts
  const counts = useMemo(() => {
    const c = { all: orders.length, new: 0, confirmed: 0, shipped: 0, delivered: 0, cancelled: 0, failed: 0 };
    orders.forEach((o) => {
      if (o.status in c) {
        c[o.status as keyof typeof c]++;
      }
    });
    return c;
  }, [orders]);

  // Revenue stats
  const totalRevenueEGP = useMemo(() => {
    const validOrders = orders.filter((o) => o.status !== "cancelled" && o.status !== "failed");
    const totalUSD = validOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);
    return Math.round(totalUSD * 50.5);
  }, [orders]);

  const formatEGP = (amountUSD: number) => {
    const egp = Math.round(Number(amountUSD) * 50.5);
    return `E£ ${egp.toLocaleString()}`;
  };

  return (
    <div
      className="min-h-screen bg-[#09090b] text-neutral-100 flex flex-col font-sans select-none pb-20 sm:pb-6"
      dir="rtl"
    >
      {/* Top App Header */}
      <header className="sticky top-0 z-30 bg-[#121214]/95 backdrop-blur-md border-b border-neutral-800 px-4 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center p-1 overflow-hidden">
              <img
                src="/esa-logo.png"
                alt="ESA CAM"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-black tracking-tight text-white">
                  ESA CAM Orders
                </h1>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400">مباشر</span>
              </div>
              <p className="text-[10px] text-neutral-400">
                إدارة ومتابعة طلبات المتجر لحظياً
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                const nextState = !soundEnabled;
                setSoundEnabled(nextState);
                if (nextState) {
                  playNewOrderChime();
                  toast.success("تم تفعيل صوت التنبيه 🔔");
                } else {
                  toast.info("تم كتم صوت التنبيه 🔕");
                }
              }}
              title={soundEnabled ? "كتم الصوت" : "تشغيل الصوت"}
              className={`p-2.5 rounded-xl border transition ${
                soundEnabled
                  ? "bg-[#FFE600]/10 border-[#FFE600]/40 text-[#FFE600]"
                  : "bg-neutral-800/80 border-neutral-700 text-neutral-400"
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Notification Permission Toggle */}
            <button
              onClick={handleToggleNotifications}
              title={notificationsGranted ? "الإشعارات مفعلة" : "تفعيل الإشعارات"}
              className={`p-2.5 rounded-xl border transition ${
                notificationsGranted
                  ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                  : "bg-neutral-800/80 border-neutral-700 text-neutral-400"
              }`}
            >
              {notificationsGranted ? (
                <Bell className="w-4 h-4" />
              ) : (
                <BellOff className="w-4 h-4" />
              )}
            </button>

            {/* Manual Refresh */}
            <button
              onClick={() => fetchOrders(true)}
              disabled={isRefreshing}
              className="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-neutral-300 hover:text-white transition disabled:opacity-50"
            >
              <RefreshCw
                className={`w-4 h-4 ${isRefreshing ? "animate-spin text-[#FFE600]" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-2xl w-full mx-auto p-4 space-y-4">
        {/* PWA Install Banner */}
        {showInstallPrompt && (
          <div className="bg-gradient-to-r from-amber-500/20 via-[#FFE600]/10 to-transparent border border-[#FFE600]/30 rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#FFE600] flex items-center justify-center shrink-0 text-black font-black">
                <Download className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">
                  ثبّت التطبيق على شاشة هاتفك
                </p>
                <p className="text-[11px] text-neutral-300 truncate">
                  ليعمل كتطبيق أصلي سريع مع إشعارات فورية
                </p>
              </div>
            </div>
            <button
              onClick={handleInstallClick}
              className="py-1.5 px-3 rounded-xl bg-[#FFE600] text-black font-bold text-xs shrink-0 hover:bg-[#ffe600]/90 transition shadow"
            >
              تثبيت الآن
            </button>
          </div>
        )}

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#141416] border border-neutral-800/80 p-3 rounded-2xl">
            <p className="text-[10px] text-neutral-400 font-semibold">إجمالي الطلبات</p>
            <p className="text-xl font-black text-white mt-1">{orders.length}</p>
          </div>
          <div className="bg-[#141416] border border-neutral-800/80 p-3 rounded-2xl">
            <p className="text-[10px] text-amber-400 font-semibold">طلبات جديدة</p>
            <p className="text-xl font-black text-amber-400 mt-1">{counts.new}</p>
          </div>
          <div className="bg-[#141416] border border-neutral-800/80 p-3 rounded-2xl">
            <p className="text-[10px] text-emerald-400 font-semibold">إجمالي المبيعات</p>
            <p className="text-base font-black text-emerald-400 mt-1 truncate">
              E£ {totalRevenueEGP.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث برقم الطلب، اسم العميل، أو الهاتف..."
            className="w-full bg-[#141416] border border-neutral-800 rounded-2xl py-3 pr-10 pl-4 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFE600] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs font-bold"
            >
              مسح
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {[
            { id: "all", label: "الكل", count: counts.all },
            { id: "new", label: "جديد", count: counts.new, alert: counts.new > 0 },
            { id: "confirmed", label: "مؤكد", count: counts.confirmed },
            { id: "shipped", label: "قيد الشحن", count: counts.shipped },
            { id: "delivered", label: "تم التوصيل", count: counts.delivered },
            { id: "failed", label: "فشل", count: counts.failed },
            { id: "cancelled", label: "ملغي", count: counts.cancelled },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`flex items-center gap-1.5 py-2 px-3.5 rounded-xl font-semibold whitespace-nowrap transition ${
                statusFilter === tab.id
                  ? "bg-[#FFE600] text-black shadow-md shadow-[#FFE600]/10"
                  : "bg-[#141416] text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  statusFilter === tab.id
                    ? "bg-black/20 text-black"
                    : tab.alert
                    ? "bg-amber-500 text-black font-black"
                    : "bg-neutral-800 text-neutral-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-3">
          {isLoading ? (
            <div className="py-20 text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-[#FFE600] animate-spin mx-auto" />
              <p className="text-xs text-neutral-400">جاري تحميل الطلبات...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="bg-[#141416] border border-neutral-800/80 rounded-2xl p-10 text-center space-y-2">
              <Package className="w-10 h-10 text-neutral-600 mx-auto" />
              <p className="text-sm font-bold text-neutral-300">لا توجد طلبات هنا</p>
              <p className="text-xs text-neutral-500">
                لم يتم العثور على أي طلبات مطابقة للفلتر أو البحث الحالي.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const isNewAlert = order.status === "new";
              const cleanPhone = order.customer_phone.replace(/[^0-9]/g, "");
              const waNumber = cleanPhone.startsWith("0") ? "2" + cleanPhone : cleanPhone;
              const waMsg = encodeURIComponent(
                `مرحباً يا ${order.customer_name} 👋\nمعاك إيسا كام بخصوص طلبك رقم #${order.order_number}\nالمبلغ: ${formatEGP(order.total_amount)}`
              );

              return (
                <div
                  key={order.id}
                  className={`bg-[#141416] rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isNewAlert
                      ? "border-amber-500/60 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/30"
                      : "border-neutral-800/80 hover:border-neutral-700"
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => {
                      setSelectedOrder(order);
                      setIsDrawerOpen(true);
                    }}
                    className="p-4 cursor-pointer active:bg-neutral-800/40 transition"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-black text-[#FFE600]">
                            #{order.order_number}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                              order.status === "new"
                                ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                : order.status === "confirmed"
                                ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                                : order.status === "shipped"
                                ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                                : order.status === "delivered"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                : "bg-neutral-800 text-neutral-400 border-neutral-700"
                            }`}
                          >
                            {order.status === "new"
                              ? "طلب جديد ⚡"
                              : order.status === "confirmed"
                              ? "تم التأكيد"
                              : order.status === "shipped"
                              ? "قيد الشحن"
                              : order.status === "delivered"
                              ? "تم التسليم"
                              : "ملغي"}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-white mt-1">
                          {order.customer_name}
                        </h3>
                        <p className="text-[11px] text-neutral-400 mt-0.5">
                          {order.city} - {order.shipping_address}
                        </p>
                      </div>

                      <div className="text-left">
                        <p className="font-mono text-sm font-black text-[#FFE600]">
                          {formatEGP(order.total_amount)}
                        </p>
                        <p className="text-[10px] text-neutral-500 mt-0.5">
                          {new Date(order.created_at).toLocaleTimeString("ar-EG", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Products Thumbnail Strip */}
                    {order.items && order.items.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-neutral-800/60 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 overflow-hidden">
                          {order.items.slice(0, 3).map((it, i) => (
                            <div
                              key={i}
                              className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 p-0.5 overflow-hidden flex items-center justify-center shrink-0"
                            >
                              {it.image ? (
                                <img
                                  src={it.image}
                                  alt={it.name}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <Package className="w-3.5 h-3.5 text-neutral-600" />
                              )}
                            </div>
                          ))}
                          {order.items.length > 3 && (
                            <span className="text-[10px] text-neutral-400 font-bold px-1">
                              +{order.items.length - 3}
                            </span>
                          )}
                          <span className="text-[11px] text-neutral-300 mr-1 truncate max-w-[200px]">
                            {order.items[0]?.name}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-500" />
                      </div>
                    )}
                  </div>

                  {/* Card Quick Action Bar */}
                  <div className="px-4 py-2.5 bg-[#18181b]/80 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${order.customer_phone}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-xs font-bold border border-blue-500/20 transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>اتصال</span>
                    </a>
                    <a
                      href={`https://wa.me/${waNumber}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 text-xs font-bold border border-emerald-500/20 transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                    <button
                      onClick={() => {
                        setSelectedOrder(order);
                        setIsDrawerOpen(true);
                      }}
                      className="flex-1 py-1.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold border border-neutral-700 transition"
                    >
                      تفاصيل
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#121214]/95 backdrop-blur-lg border-t border-neutral-800 px-6 py-2.5 sm:hidden shadow-2xl">
        <div className="flex items-center justify-around">
          <button
            onClick={() => {
              setStatusFilter("all");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1 text-xs font-bold text-[#FFE600]"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>الطلبات</span>
          </button>
          <button
            onClick={() => {
              setStatusFilter("new");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1 text-xs font-bold text-neutral-400 hover:text-white relative"
          >
            <Bell className="w-5 h-5" />
            <span>جديد</span>
            {counts.new > 0 && (
              <span className="absolute -top-1 -right-2 bg-amber-500 text-black text-[9px] font-black px-1.5 rounded-full">
                {counts.new}
              </span>
            )}
          </button>
          <Link
            href="/store"
            className="flex flex-col items-center gap-1 text-xs font-bold text-neutral-400 hover:text-white"
          >
            <Home className="w-5 h-5" />
            <span>المتجر</span>
          </Link>
        </div>
      </div>

      {/* Order Details Drawer */}
      <OrderDetailsDrawer
        order={selectedOrder}
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedOrder(null);
        }}
        onStatusChange={handleStatusChange}
        onDeleteOrder={handleDeleteOrder}
      />
    </div>
  );
}
