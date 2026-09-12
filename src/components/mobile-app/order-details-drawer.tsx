"use client";

import React, { useState } from "react";
import {
  X,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle2,
  Truck,
  CheckCheck,
  XCircle,
  MapPin,
  Calendar,
  Printer,
  Trash2,
  AlertCircle,
  Package,
  Copy,
  Check,
} from "lucide-react";
import { toast } from "sonner";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  qty?: number;
  quantity?: number;
  image?: string;
  brand?: string;
}

export interface AdminOrder {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  city: string;
  shipping_address: string;
  notes?: string;
  payment_method: string;
  total_amount: number;
  items: OrderItem[];
  status: "new" | "confirmed" | "shipped" | "delivered" | "cancelled" | string;
  created_at: string;
}

interface OrderDetailsDrawerProps {
  order: AdminOrder | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (orderId: string, newStatus: string) => Promise<void>;
  onDeleteOrder: (orderId: string) => Promise<void>;
}

export function OrderDetailsDrawer({
  order,
  isOpen,
  onClose,
  onStatusChange,
  onDeleteOrder,
}: OrderDetailsDrawerProps) {
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen || !order) return null;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success("تم النسخ إلى الحافظة!");
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleStatusUpdate = async (status: string) => {
    try {
      setIsUpdatingStatus(true);
      await onStatusChange(order.id, status);
      toast.success(`تم تحديث حالة الطلب إلى "${getStatusLabel(status)}"`);
    } catch {
      toast.error("فشل تحديث حالة الطلب");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("هل أنت متأكد من حذف هذا الطلب نهائياً؟")) {
      try {
        setIsDeleting(true);
        await onDeleteOrder(order.id);
        toast.success("تم حذف الطلب بنجاح");
        onClose();
      } catch {
        toast.error("فشل حذف الطلب");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const cleanPhone = order.customer_phone.replace(/[^0-9]/g, "");
  const waNumber = cleanPhone.startsWith("0") ? "2" + cleanPhone : cleanPhone;
  const waMsg = encodeURIComponent(
    `مرحباً يا ${order.customer_name} 👋\nمعاك إيسا كام (ESA CAM) بخصوص طلبك رقم #${order.order_number}\nإجمالي المبلغ: E£ ${Number(order.total_amount * 50.5).toLocaleString()}\nنود تأكيد عنوان الشحن والتوصيل معك.`
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMsg}`;

  const formatEGP = (amountUSD: number) => {
    const egp = Math.round(Number(amountUSD) * 50.5);
    return `E£ ${egp.toLocaleString()}`;
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "new":
        return "طلب جديد";
      case "confirmed":
        return "تم التأكيد";
      case "shipped":
        return "قيد الشحن";
      case "delivered":
        return "تم التسليم";
      case "cancelled":
        return "ملغي";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "confirmed":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "shipped":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "delivered":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "cancelled":
        return "bg-red-500/10 text-red-400 border-red-500/30";
      default:
        return "bg-neutral-800 text-neutral-300 border-neutral-700";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full sm:max-w-lg max-h-[92vh] flex flex-col bg-[#121214] text-white border border-neutral-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
        dir="rtl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-[#18181b] border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-black text-[#FFE600]">
                #{order.order_number}
              </span>
              <span
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${getStatusColor(
                  order.status
                )}`}
              >
                {getStatusLabel(order.status)}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(order.created_at).toLocaleString("ar-EG", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm">
          {/* Action Hub - Direct Call & WhatsApp */}
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={`tel:${order.customer_phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-600/20 active:scale-[0.98] transition"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال هاتفي</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب فوري</span>
            </a>
          </div>

          {/* Quick Status Bar */}
          <div className="bg-[#18181b] p-3.5 rounded-2xl border border-neutral-800/80">
            <p className="text-xs font-semibold text-neutral-400 mb-2.5">
              تغيير حالة الطلب:
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                disabled={isUpdatingStatus}
                onClick={() => handleStatusUpdate("new")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                  order.status === "new"
                    ? "bg-amber-500 text-black border-amber-500"
                    : "bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                جديد
              </button>
              <button
                disabled={isUpdatingStatus}
                onClick={() => handleStatusUpdate("confirmed")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                  order.status === "confirmed"
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                تأكيد
              </button>
              <button
                disabled={isUpdatingStatus}
                onClick={() => handleStatusUpdate("shipped")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                  order.status === "shipped"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                شحن
              </button>
              <button
                disabled={isUpdatingStatus}
                onClick={() => handleStatusUpdate("delivered")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                  order.status === "delivered"
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                <CheckCheck className="w-3.5 h-3.5" />
                تم التوصيل
              </button>
              <button
                disabled={isUpdatingStatus}
                onClick={() => handleStatusUpdate("cancelled")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                  order.status === "cancelled"
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                <XCircle className="w-3.5 h-3.5" />
                إلغاء
              </button>
              <button
                disabled={isDeleting}
                onClick={handleDelete}
                className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold border border-red-900/50 bg-red-950/20 text-red-400 hover:bg-red-900/40 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                حذف
              </button>
            </div>
          </div>

          {/* Customer Details Card */}
          <div className="bg-[#18181b] p-4 rounded-2xl border border-neutral-800/80 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-800 pb-2">
              بيانات العميل والشحن
            </h4>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-neutral-400 text-xs">اسم العميل:</p>
                <p className="text-base font-bold text-white mt-0.5">
                  {order.customer_name}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(order.customer_name, "name")}
                className="text-neutral-500 hover:text-neutral-300 p-1"
                title="نسخ"
              >
                {copiedField === "name" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <p className="text-neutral-400 text-xs">رقم الهاتف:</p>
                <p className="font-mono text-sm font-semibold text-[#FFE600] mt-0.5" dir="ltr">
                  {order.customer_phone}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(order.customer_phone, "phone")}
                className="text-neutral-500 hover:text-neutral-300 p-1"
                title="نسخ"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {order.customer_email && (
              <div>
                <p className="text-neutral-400 text-xs">البريد الإلكتروني:</p>
                <p className="font-mono text-xs text-neutral-300 mt-0.5" dir="ltr">
                  {order.customer_email}
                </p>
              </div>
            )}

            <div className="flex items-start justify-between">
              <div>
                <p className="text-neutral-400 text-xs">عنوان التوصيل:</p>
                <p className="text-xs font-medium text-neutral-200 mt-0.5 flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    {order.city} - {order.shipping_address}
                  </span>
                </p>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`${order.city}, ${order.shipping_address}`, "addr")
                }
                className="text-neutral-500 hover:text-neutral-300 p-1"
                title="نسخ"
              >
                {copiedField === "addr" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {order.notes && (
              <div className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <p className="text-xs font-semibold text-neutral-400 flex items-center gap-1 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  ملاحظات العميل:
                </p>
                <p className="text-xs text-neutral-300">{order.notes}</p>
              </div>
            )}
          </div>

          {/* Ordered Products Card */}
          <div className="bg-[#18181b] p-4 rounded-2xl border border-neutral-800/80 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#FFE600]" />
                المنتجات المطلوبة ({order.items?.length || 0})
              </h4>
              <span className="text-xs text-neutral-400">
                طريقة الدفع: {order.payment_method === "cod" ? "الدفع عند الاستلام (COD)" : order.payment_method === "paymob" ? "مدفوع إلكترونياً (باي موب - Paymob)" : order.payment_method}
              </span>
            </div>

            <div className="divide-y divide-neutral-800/60 space-y-2">
              {order.items && order.items.length > 0 ? (
                order.items.map((item, idx) => {
                  const qty = item.qty || item.quantity || 1;
                  const itemImg = item.image || "/esa-logo.png";
                  const itemPriceEGP = formatEGP(item.price);
                  const totalLineEGP = formatEGP(item.price * qty);

                  return (
                    <div key={idx} className="pt-2 flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 shrink-0 overflow-hidden flex items-center justify-center p-1">
                        {item.image ? (
                          <img
                            src={itemImg}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <Package className="w-6 h-6 text-neutral-600" />
                        )}
                        <span className="absolute bottom-0 right-0 bg-[#FFE600] text-black text-[10px] font-black px-1.5 rounded-tl-md">
                          ×{qty}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        {item.brand && (
                          <p className="text-[10px] uppercase font-bold text-neutral-400 truncate">
                            {item.brand}
                          </p>
                        )}
                        <p className="text-xs font-semibold text-white truncate">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">
                          {itemPriceEGP} للقطعة
                        </p>
                      </div>
                      <div className="text-left font-mono font-bold text-xs text-white">
                        {totalLineEGP}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-xs text-neutral-500 py-3 text-center">
                  لا توجد تفاصيل للمنتجات في هذا الطلب
                </p>
              )}
            </div>

            {/* Total Price Banner */}
            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-sm font-bold text-white">الإجمالي الكلي:</span>
              <div className="text-left">
                <span className="font-mono text-lg font-black text-[#FFE600]">
                  {formatEGP(order.total_amount)}
                </span>
                <p className="font-mono text-[10px] text-neutral-400">
                  ≈ ${Number(order.total_amount).toFixed(2)} USD
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#18181b] border-t border-neutral-800 flex items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold transition"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة الفاتورة</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs font-bold hover:bg-neutral-800 transition text-center"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
