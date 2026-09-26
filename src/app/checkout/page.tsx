"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useStore, CURRENCIES } from "@/context/store-context";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Lock,
  Tag,
  PackageCheck,
  Printer,
  Copy,
  Check,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CouponItem {
  code: string;
  discount_percent: number;
  description: string;
  start_date: string;
  end_date: string;
  is_single_use: boolean;
  usage_count: number;
  is_active: boolean;
}

interface PlacedOrderInfo {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  shipping_address: string;
  city: string;
  total_amount: number;
  payment_method?: string;
}

interface PaymentIssueState {
  kind: "failed" | "pending";
  orderNumber?: string;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const {
    cart,
    cartTotalUSD,
    cartItemCount,
    formatPrice,
    clearCart,
    shippingSettings,
    calculateShippingFee,
    currency,
  } = useStore();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod" | "installments" | "wire">("cod");
  const [isExpressDelivery, setIsExpressDelivery] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVerifyingStripe, setIsVerifyingStripe] = useState(false);
  const [placedOrderData, setPlacedOrderData] = useState<PlacedOrderInfo | null>(null);
  const [paymentIssue, setPaymentIssue] = useState<PaymentIssueState | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "Cairo",
    notes: "",
  });

  const verifiedSessionRef = useRef<string | null>(null);

  // Check for EasyKash, Kashier or Stripe Checkout return params
  useEffect(() => {
    const gateway = searchParams.get("gateway");
    const easykashOrderId = searchParams.get("order_id");
    const easykashSuccess = searchParams.get("success");

    // EasyKash return flow
    if ((gateway === "easykash" || easykashSuccess !== null) && easykashOrderId) {
      if (verifiedSessionRef.current === `easykash-${easykashOrderId}`) return;
      verifiedSessionRef.current = `easykash-${easykashOrderId}`;

      const rawStatus = (searchParams.get("status") || searchParams.get("success") || "").toLowerCase();
      const failedReturnStatuses = ["fail", "failed", "declined", "rejected", "cancelled", "canceled", "error", "expired"];
      const returnedAsFailed = failedReturnStatuses.includes(rawStatus);

      setIsVerifyingStripe(true);
      void (async () => {
        try {
          let result: { success?: boolean; paid?: boolean; failed?: boolean; order?: PlacedOrderInfo; orderNumber?: string; message?: string } | null = null;
          const maxAttempts = returnedAsFailed ? 1 : 8;

          for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
            const response = await fetch(
              `/api/checkout/easykash/verify?order_id=${encodeURIComponent(easykashOrderId)}`,
              { cache: "no-store" },
            );
            result = await response.json();

            if (result?.success && result.paid && result.order) {
              setPlacedOrderData(result.order);
              setIsSubmitted(true);
              clearCart();
              window.history.replaceState({}, "", window.location.pathname);
              toast.success("Payment Received & Confirmed!", {
                id: `easykash-success-${result.order.order_number}`,
                description: `Order #${result.order.order_number} has been verified and confirmed via EasyKash.`,
              });
              return;
            }

            if (result?.failed || returnedAsFailed || attempt === maxAttempts - 1) break;
            await new Promise((resolve) => window.setTimeout(resolve, 1500));
          }

          window.history.replaceState({}, "", window.location.pathname);
          setPaymentIssue({
            kind: result?.failed || returnedAsFailed ? "failed" : "pending",
            orderNumber: result?.orderNumber,
          });
        } catch (err) {
          console.error("EasyKash verification error:", err);
          window.history.replaceState({}, "", window.location.pathname);
          setPaymentIssue({ kind: "pending" });
        } finally {
          setIsVerifyingStripe(false);
        }
      })();
      return;
    }

    const kashierOrderId = searchParams.get("kashier_order_id") || searchParams.get("merchantOrderId");
    const kashierStatus = searchParams.get("paymentStatus") || searchParams.get("status");

    // Kashier return flow
    if ((gateway === "kashier" || kashierStatus) && kashierOrderId) {
      if (verifiedSessionRef.current === `kashier-${kashierOrderId}`) return;
      verifiedSessionRef.current = `kashier-${kashierOrderId}`;

      if (kashierStatus?.toUpperCase() === "SUCCESS") {
        setIsVerifyingStripe(true);
        fetch(
          `/api/checkout/kashier/verify?order_id=${encodeURIComponent(kashierOrderId)}&paymentStatus=SUCCESS`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success && data.paid) {
              setPlacedOrderData(data.order);
              setIsSubmitted(true);
              clearCart();
              if (typeof window !== "undefined") {
                window.history.replaceState({}, "", window.location.pathname);
              }
              toast.success("Payment Received & Confirmed!", {
                id: `kashier-success-${data.order?.order_number || kashierOrderId}`,
                description: `Order #${data.order.order_number} has been verified and confirmed via Kashier.`,
              });
            } else {
              toast.error(data.message || "Kashier payment verification failed.");
            }
          })
          .catch((err) => {
            console.error("Kashier verification error:", err);
            toast.error("An error occurred while verifying your payment.");
          })
          .finally(() => {
            setIsVerifyingStripe(false);
          });
      } else {
        if (typeof window !== "undefined") {
          window.history.replaceState({}, "", window.location.pathname);
        }
        toast.info("Kashier payment was not completed. Your cart is preserved, feel free to try again.");
      }
      return;
    }

    // Stripe return flow
    const sessionId = searchParams.get("session_id");
    const orderId = searchParams.get("order_id");
    const paymentStatus = searchParams.get("payment");

    if (sessionId && paymentStatus === "success") {
      if (verifiedSessionRef.current === sessionId) {
        return;
      }
      verifiedSessionRef.current = sessionId;

      setIsVerifyingStripe(true);
      fetch(
        `/api/checkout/stripe/verify?session_id=${encodeURIComponent(sessionId)}&order_id=${encodeURIComponent(orderId || "")}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.paid) {
            setPlacedOrderData(data.order);
            setIsSubmitted(true);
            clearCart();
            if (typeof window !== "undefined") {
              window.history.replaceState({}, "", window.location.pathname);
            }
            toast.success("Payment Received & Confirmed!", {
              id: `stripe-success-${data.order?.order_number || sessionId}`,
              description: `Order #${data.order.order_number} has been verified and confirmed via Stripe.`,
            });
          } else {
            toast.error(data.message || "Payment verification failed.", {
              id: `stripe-fail-${sessionId}`,
            });
          }
        })
        .catch((err) => {
          console.error("Payment verification error:", err);
          toast.error("An error occurred while verifying your payment.");
        })
        .finally(() => {
          setIsVerifyingStripe(false);
        });
    } else if (paymentStatus === "canceled") {
      if (verifiedSessionRef.current === "canceled") {
        return;
      }
      verifiedSessionRef.current = "canceled";
      if (typeof window !== "undefined") {
        window.history.replaceState({}, "", window.location.pathname);
      }
      toast.info("Payment was canceled. Your cart is preserved, feel free to try again.");
    }
  }, [searchParams, clearCart]);

  // Promo Code Engine
  const [promoInput, setPromoInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount_percent: number;
    description?: string;
  } | null>(null);
  const [isCheckingPromo, setIsCheckingPromo] = useState(false);

  const shippingCostUSD = calculateShippingFee(
    cartTotalUSD,
    formData.city,
    isExpressDelivery,
    paymentMethod
  );
  const discountAmountUSD = appliedCoupon ? (cartTotalUSD * appliedCoupon.discount_percent) / 100 : 0;
  const finalTotalUSD = Math.max(0, cartTotalUSD - discountAmountUSD + shippingCostUSD);


  const handleApplyPromoCode = async () => {
    if (!promoInput.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }
    setIsCheckingPromo(true);
    try {
      const res = await fetch("/api/coupons");
      const data = await res.json();
      if (data.success && Array.isArray(data.coupons)) {
        const cleanInput = promoInput.trim().toUpperCase();
        const match = data.coupons.find((c: CouponItem) => c.code.toUpperCase() === cleanInput);

        if (!match) {
          toast.error(`Invalid promo code "${cleanInput}".`);
          return;
        }

        if (!match.is_active) {
          toast.error(`Promo code "${match.code}" is currently paused or inactive.`);
          return;
        }

        const today = new Date();
        const startDate = new Date(match.start_date);
        const endDate = new Date(match.end_date);
        endDate.setHours(23, 59, 59, 999);

        if (today < startDate) {
          toast.error(`This coupon is scheduled and will be valid starting ${match.start_date}.`);
          return;
        }

        if (today > endDate) {
          toast.error(`This coupon expired on ${match.end_date}.`);
          return;
        }

        if (match.is_single_use && match.usage_count >= 1) {
          toast.error(`This single-use coupon "${match.code}" has already been redeemed.`);
          return;
        }

        setAppliedCoupon({
          code: match.code,
          discount_percent: match.discount_percent,
          description: match.description,
        });
        toast.success(`Coupon "${match.code}" Applied! ${match.discount_percent}% OFF!`);
      } else {
        toast.error("Could not verify promo code with server.");
      }
    } catch {
      toast.error("Error validating promo code");
    } finally {
      setIsCheckingPromo(false);
    }
  };

  const handleRemovePromoCode = () => {
    setAppliedCoupon(null);
    setPromoInput("");
    toast.info("Promo code removed.");
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone || !formData.email || !formData.address) {
      toast.error("Please complete all required fields (Name, Phone, Email, Address).");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);

    // Flow 1: EasyKash Online Payment (Cards, Meeza, Wallets, ValU)
    if (paymentMethod === "card") {
      try {
        const rate = CURRENCIES[currency]?.rate || 1;
        const activeCurrency = (currency || "EGP").toLowerCase();

        const easykashPayload = {
          customerName: `${formData.firstName} ${formData.lastName}`.trim(),
          customerPhone: formData.phone,
          customerEmail: formData.email,
          city: formData.city,
          shippingAddress: `${formData.address}${formData.company ? ` (${formData.company})` : ""}`,
          notes: `${formData.notes || ""}${appliedCoupon ? ` [Promo Code: ${appliedCoupon.code} (-${appliedCoupon.discount_percent}%)]` : ""}`,
          currency: activeCurrency,
          items: cart.map((item) => ({
            id: item.product.id,
            name: item.product.name,
            brand: item.product.brand,
            price: Math.round(item.product.price * rate),
            quantity: item.quantity,
            image: item.product.image,
          })),
          appliedCoupon,
          shippingCost: 0,
          finalTotalUSD,
          finalTotalEGP: Math.round(finalTotalUSD * rate),
        };

        const res = await fetch("/api/checkout/easykash", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(easykashPayload),
        });

        const data = await res.json();

        if (data.success && data.url) {
          if (appliedCoupon) {
            try {
              await fetch("/api/coupons", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: appliedCoupon.code, increment_usage: true }),
              });
            } catch {}
          }
          toast.loading("Redirecting to EasyKash secure checkout...");
          window.location.href = data.url;
          return;
        } else {
          toast.error(data.message || "Failed to initialize EasyKash payment session.");
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        console.error("EasyKash checkout error:", err);
        toast.error("Failed to connect to EasyKash payment gateway.");
        setIsSubmitting(false);
        return;
      }
    }

    // Flow 2: Cash on Delivery (COD)
    try {
      const orderPayload = {
        customerName: `${formData.firstName} ${formData.lastName}`.trim(),
        customerPhone: formData.phone,
        customerEmail: formData.email,
        city: formData.city,
        shippingAddress: `${formData.address}${formData.company ? ` (${formData.company})` : ""}`,
        notes: `${formData.notes || ""}${appliedCoupon ? ` [Promo Code: ${appliedCoupon.code} (-${appliedCoupon.discount_percent}%)]` : ""}`,
        paymentMethod,
        totalAmount: finalTotalUSD,
        items: cart.map((item) => ({
          id: item.product.id,
          name: item.product.name,
          brand: item.product.brand,
          price: item.product.price,
          quantity: item.quantity,
          image: item.product.image,
        })),
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();

      if (data.success) {
        // Increment coupon usage
        if (appliedCoupon) {
          try {
            await fetch("/api/coupons", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ code: appliedCoupon.code, increment_usage: true }),
            });
          } catch {}
        }

        setPlacedOrderData(data.data);
        setIsSubmitted(true);
        clearCart();
        toast.success("Order Placed Successfully!", {
          description: `Order #${data.orderNumber} has been received and saved.`,
        });
      } else {
        toast.error(data.message || "Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      toast.error("An error occurred while connecting to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isVerifyingStripe) {
    return (
      <div className="min-h-screen bg-[#09090b] text-neutral-100 py-12 px-4 flex flex-col items-center justify-center space-y-4">
        <div className="w-14 h-14 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin" />
        <h2 className="text-xl font-bold text-white">Verifying Secure Payment...</h2>
        <p className="text-xs text-neutral-400">Please wait while we confirm your transaction and register your order.</p>
      </div>
    );
  }

  if (paymentIssue) {
    const isPaymentFailed = paymentIssue.kind === "failed";

    return (
      <div className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6">
        <div className="mx-auto flex min-h-[70vh] max-w-xl items-center">
          <div className="w-full space-y-6 rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
              <AlertTriangle aria-hidden="true" className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-rose-600">EasyKash Payment</p>
              <h1 className="text-2xl font-black sm:text-3xl">
                {isPaymentFailed ? "Payment not completed" : "Payment confirmation pending"}
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {isPaymentFailed
                  ? "EasyKash did not confirm the payment. No paid invoice was created, and your cart is still saved."
                  : "We have not received EasyKash's signed payment confirmation yet. Your order is not marked as paid, and your cart is still saved."}
              </p>
            </div>

            {paymentIssue.orderNumber && (
              <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm">
                <span className="text-muted-foreground">Order reference: </span>
                <span className="font-mono font-bold">{paymentIssue.orderNumber}</span>
              </div>
            )}

            {!isPaymentFailed && (
              <p className="text-xs leading-relaxed text-muted-foreground">
                If your bank shows a charge, please contact us with the order reference before retrying.
              </p>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                onClick={() => {
                  setPaymentMethod("card");
                  setPaymentIssue(null);
                }}
                className="h-11 gap-2 bg-[#FFE600] font-bold text-black hover:bg-[#FFD000]"
              >
                <CreditCard aria-hidden="true" className="h-4 w-4" />
                Try EasyKash again
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setPaymentMethod("cod");
                  setPaymentIssue(null);
                }}
                className="h-11 gap-2"
              >
                <Truck aria-hidden="true" className="h-4 w-4" />
                Continue with cash on delivery
              </Button>
            </div>

            <Link href="/cart" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to cart
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted && placedOrderData) {
    const copyOrderRef = () => {
      if (typeof navigator !== "undefined") {
        navigator.clipboard.writeText(placedOrderData.order_number);
        setCopiedRef(true);
        toast.success("Order reference copied to clipboard!");
        setTimeout(() => setCopiedRef(false), 2500);
      }
    };

    return (
      <div className="min-h-screen bg-[#09090b] text-neutral-100 py-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-xl bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Subtle Top Accent Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#FFE600] to-emerald-500" />

          {/* Success Check Icon Badge */}
          <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-500/15 animate-ping opacity-75" />
            <div className="relative w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
          </div>

          {/* Titles */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <PackageCheck className="w-3.5 h-3.5" />
              <span>
                {placedOrderData.payment_method === "easykash"
                  ? "Paid & Verified via EasyKash (تم الدفع والتأكيد إلكترونياً)"
                  : placedOrderData.payment_method === "kashier"
                  ? "Paid & Verified via Kashier (تم الدفع والتأكيد عبر كاشير)"
                  : placedOrderData.payment_method === "card" || placedOrderData.payment_method === "card_stripe" || placedOrderData.payment_method === "stripe"
                  ? "Paid & Verified Online (تم الدفع والتأكيد إلكترونياً)"
                  : "Order Confirmed & Logged"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Thank You for Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
              Your equipment order has been successfully placed. Our logistics team in Cairo is preparing your shipment for safe insured dispatch.
            </p>
          </div>

          {/* Order Reference Box */}
          <div className="bg-[#18181b] border border-neutral-800 rounded-2xl p-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                Official Order Reference
              </p>
              <p className="font-mono text-base sm:text-lg font-black text-[#FFE600] mt-0.5">
                #{placedOrderData.order_number}
              </p>
            </div>
            <button
              onClick={copyOrderRef}
              className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold transition border border-neutral-700 cursor-pointer"
            >
              {copiedRef ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Delivery & Assurance Highlights */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#18181b] border border-neutral-800/80 p-3.5 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/20 flex items-center justify-center shrink-0 text-[#FFE600]">
                <Truck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight">24-48h Delivery</p>
                <p className="text-[10px] text-neutral-400">Insured express courier</p>
              </div>
            </div>

            <div className="bg-[#18181b] border border-neutral-800/80 p-3.5 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight">Official Warranty</p>
                <p className="text-[10px] text-neutral-400">Authorized center guarantee</p>
              </div>
            </div>
          </div>

          {/* Order Details Breakdown */}
          <div className="bg-[#18181b] border border-neutral-800 rounded-2xl p-5 text-xs space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="text-neutral-400">Recipient Name</span>
              <span className="font-bold text-white">{placedOrderData.customer_name}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="text-neutral-400">Contact Number</span>
              <span className="font-mono font-bold text-white">{placedOrderData.customer_phone}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="text-neutral-400">Destination</span>
              <span className="font-medium text-neutral-200 text-right max-w-[240px] truncate">
                {placedOrderData.shipping_address}, {placedOrderData.city}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="text-neutral-400">Payment Method</span>
              <span className="font-bold text-emerald-400 text-right">
                {placedOrderData.payment_method === "easykash"
                  ? "EasyKash Online Payment (مدفوع إلكترونياً عبر باي موب)"
                  : placedOrderData.payment_method === "kashier"
                  ? "Kashier Online Payment (مدفوع إلكترونياً عبر كاشير)"
                  : placedOrderData.payment_method === "card_stripe" || placedOrderData.payment_method === "card" || placedOrderData.payment_method === "stripe"
                  ? "Online Card Payment (مدفوع إلكترونياً بالبطاقة)"
                  : "Cash on Delivery (الدفع عند الاستلام)"}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="text-neutral-400">Payment Status</span>
              <span className="font-bold text-emerald-400">
                {placedOrderData.payment_method === "easykash" ||
                placedOrderData.payment_method === "kashier" ||
                placedOrderData.payment_method === "card" ||
                placedOrderData.payment_method === "card_stripe" ||
                placedOrderData.payment_method === "stripe"
                  ? "Paid in Full ✓ (تم استلام الدفعة بنجاح)"
                  : "Pending on Delivery (مستحق عند الاستلام)"}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-sm font-bold text-white">
                {placedOrderData.payment_method === "easykash" ||
                placedOrderData.payment_method === "kashier" ||
                placedOrderData.payment_method === "card" ||
                placedOrderData.payment_method === "card_stripe" ||
                placedOrderData.payment_method === "stripe"
                  ? "Total Amount Paid (المبلغ المدفوع)"
                  : "Total Amount Due (المبلغ المستحق)"}
              </span>
              <span className="font-mono text-xl font-black text-[#FFE600]">
                {formatPrice(placedOrderData.total_amount)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <Button
              asChild
              className="w-full h-12 rounded-2xl bg-[#FFE600] hover:bg-[#ffe600]/90 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FFE600]/10 transition cursor-pointer"
            >
              <Link href="/store">
                <ShoppingBag className="w-4 h-4" />
                <span>Continue Shopping (العودة للمتجر)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <button
              onClick={() => window.print()}
              className="w-full h-11 rounded-xl bg-[#18181b] hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Official Invoice Receipt (طباعة الفاتورة)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-6">
          <Link href="/cart" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cart</span>
          </Link>

          <Link href="/" className="flex items-center group">
            <div className="bg-[#FFE600] text-black px-2.5 py-1 font-black text-base tracking-tighter uppercase font-sans mr-2 shadow-xs group-hover:scale-105 transition-transform">
              ESA
            </div>
            <span className="font-black text-base tracking-widest text-foreground uppercase font-sans">
              CAM
            </span>
          </Link>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Instant Secure Checkout</span>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-3xl border border-border p-8 space-y-4">
            <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto" />
            <h2 className="text-xl font-bold">Your checkout cart is empty</h2>
            <p className="text-xs text-muted-foreground">Select cinema gear, prime lenses or lighting kits from the catalog first.</p>
            <Button asChild className="rounded-xl text-xs font-bold px-6">
              <Link href="/store">Explore Gear Catalog</Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Customer Info & Shipping Address */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Customer Contact & Shipping */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h2 className="font-bold text-base text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono font-bold">1</span>
                    Customer &amp; Shipping Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">First Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ahmed"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">Last Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Mahmoud"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="010 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">Email Address (For Official Invoice) *</label>
                    <input
                      required
                      type="email"
                      placeholder="ahmed@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="font-semibold text-muted-foreground block mb-1">Detailed Delivery Address (Street, Building, Floor, Flat) *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 14 El Gezira St., 4th Floor, Flat 12, Zamalek"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">City / Governorate *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary text-foreground"
                    >
                      {shippingSettings.cityRates && shippingSettings.cityRates.length > 0 ? (
                        shippingSettings.cityRates
                          .filter((c) => c.isActive)
                          .map((c) => (
                            <option key={c.id} value={c.cityNameEn}>
                              {c.cityNameEn} ({c.cityNameAr}) • {c.estimatedDelivery}
                            </option>
                          ))
                      ) : (
                        <>
                          <option value="Cairo">Greater Cairo (Same-Day / 24h)</option>
                          <option value="Giza">Giza &amp; 6th of October</option>
                          <option value="Alexandria">Alexandria</option>
                          <option value="Mansoura">Mansoura &amp; Delta</option>
                          <option value="Tanta">Tanta &amp; Gharbia</option>
                          <option value="Hurghada">Hurghada &amp; Red Sea</option>
                          <option value="Sharm">Sharm El-Sheikh &amp; Sinai</option>
                          <option value="UpperEgypt">Assiut &amp; Upper Egypt</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-muted-foreground block mb-1">Delivery Notes (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Call before delivery"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-hidden focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Express Priority Delivery Option */}
                {shippingSettings.enableExpressShipping && (
                  <div
                    onClick={() => setIsExpressDelivery(!isExpressDelivery)}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      isExpressDelivery
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border bg-secondary/20 hover:bg-secondary/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isExpressDelivery}
                        onChange={(e) => setIsExpressDelivery(e.target.checked)}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <div>
                        <p className="font-bold text-xs text-foreground flex items-center gap-1.5">
                          ⚡ Priority Rush Express Courier (تسليم مستعجل)
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Direct dedicated cine-courier dispatch within 12-24 hours
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary">
                      +{formatPrice(shippingSettings.expressSurchargeUSD)}
                    </span>
                  </div>
                )}
              </div>


              {/* Step 2: Payment Method */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h2 className="font-bold text-base text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono font-bold">2</span>
                    Payment Method
                  </h2>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>256-Bit SSL Encrypted</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Option 1: Cash on Delivery */}
                  <label
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border bg-secondary/20 hover:bg-secondary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-0.5"
                    />
                    <div>
                      <p className="font-bold text-foreground flex items-center gap-1.5">
                        <Truck className="w-4 h-4 text-primary" /> Cash on Delivery (الدفع عند الاستلام)
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-1">Pay upon inspection when the courier arrives</p>
                    </div>
                  </label>

                  {/* Option 2: EasyKash Online Payment */}
                  <label
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all relative overflow-hidden ${
                      paymentMethod === "card"
                        ? "border-[#0070BA] bg-[#0070BA]/5 ring-1 ring-[#0070BA]"
                        : "border-border bg-secondary/20 hover:bg-secondary/40"
                    }`}
                  >
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#0070BA]/15 border border-[#0070BA]/30 text-[#0070BA] text-[10px] font-mono font-black uppercase">
                      EasyKash • إيزي كاش
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="mt-0.5 text-[#0070BA] focus:ring-[#0070BA]"
                    />
                    <div className="pr-12">
                      <p className="font-bold text-foreground flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-[#0070BA]" /> Electronic Payment (إيزي كاش - الدفع الإلكتروني)
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Visa, Mastercard, كروت ميزة، محافظ الموبايل (فودافون كاش)، وتقسيط
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-secondary border border-border font-semibold text-foreground">
                          Visa / Mastercard
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-secondary border border-border font-semibold text-foreground">
                          Meeza ميزة
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-secondary border border-border font-semibold text-foreground">
                          Vodafone Cash & Wallets
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-secondary border border-border font-semibold text-foreground">
                          Installments تقسيط
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                        <Lock className="w-3 h-3" />
                        <span>بوابة دفع إلكترونية معتمدة من البنك المركزي 100%</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Order Summary & Place Order */}
            <div className="lg:col-span-5 sticky top-10 space-y-6">
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h3 className="font-bold text-base text-foreground">Order Gear Review</h3>
                  <span className="text-xs text-muted-foreground font-mono">{cartItemCount} items</span>
                </div>

                {/* Items preview */}
                <div className="max-h-60 overflow-y-auto divide-y divide-border/60 pr-1 space-y-3">
                  {cart.map((item) => (
                    <div key={item.product.id} className="pt-3 first:pt-0 flex gap-3 text-xs">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary shrink-0 border border-border">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate">{item.product.name}</p>
                        <p className="text-[11px] text-muted-foreground font-mono">
                          Qty: {item.quantity} • {item.product.brand}
                        </p>
                      </div>
                      <span className="font-mono font-bold text-foreground shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Promo / Voucher Code Section */}
                <div className="border-t border-border pt-3">
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-emerald-600" />
                        <div>
                          <span className="font-mono font-black">{appliedCoupon.code}</span>
                          <span className="text-[11px] block font-medium">
                            {appliedCoupon.discount_percent}% Creator Discount Applied
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemovePromoCode}
                        className="text-xs text-rose-500 hover:underline font-semibold cursor-pointer p-1"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground block">
                        Have a Promo / Creator Code? (كوبون خصم)
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. CINE10 or ESA20"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                          className="flex-1 px-3 py-2 rounded-xl border border-border bg-secondary/30 text-xs text-foreground font-mono font-bold uppercase focus:outline-hidden focus:ring-1 focus:ring-primary"
                        />
                        <Button
                          type="button"
                          onClick={handleApplyPromoCode}
                          disabled={isCheckingPromo}
                          variant="outline"
                          className="rounded-xl text-xs font-bold px-3.5 cursor-pointer shrink-0"
                        >
                          {isCheckingPromo ? "Checking..." : "Apply"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-border pt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Gear Subtotal</span>
                    <span className="font-mono">{formatPrice(cartTotalUSD)}</span>
                  </div>

                  {appliedCoupon && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span>Promo Discount ({appliedCoupon.discount_percent}%)</span>
                      <span className="font-mono">-{formatPrice(discountAmountUSD)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-muted-foreground">
                    <span>Fragile-Cine Insured Shipping</span>
                    <span>
                      {shippingCostUSD === 0 ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">FREE</span>
                      ) : (
                        <span className="font-mono">{formatPrice(shippingCostUSD)}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>2-Year Official ESA Warranty</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Included</span>
                  </div>

                  <div className="border-t border-border pt-3 flex justify-between items-baseline font-black text-lg text-foreground">
                    <span>Grand Total</span>
                    <span className="font-mono text-2xl text-primary">{formatPrice(finalTotalUSD)}</span>
                  </div>
                </div>

                <div className="p-3 bg-secondary/30 rounded-xl text-[11px] text-muted-foreground flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% Guaranteed Official Stock. Fast Delivery Across Egypt.</span>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full h-12 rounded-xl font-bold text-xs shadow-lg cursor-pointer transition-all"
                >
                  {isSubmitting ? (
                    paymentMethod === "card" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Connecting to EasyKash...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Processing Order...
                      </span>
                    )
                  ) : paymentMethod === "card" ? (
                    `Proceed to EasyKash Payment (${formatPrice(finalTotalUSD)}) 💳`
                  ) : (
                    `Confirm & Place Order (${formatPrice(finalTotalUSD)})`
                  )}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-xs text-muted-foreground font-mono">Loading Secure Checkout...</p>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
