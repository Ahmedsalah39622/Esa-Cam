"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/context/store-context";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Lock,
  MessageCircle,
  Tag,
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
}

export default function CheckoutPage() {
  const {


    cart,
    cartTotalUSD,
    cartItemCount,
    formatPrice,
    clearCart,
    shippingSettings,
    calculateShippingFee,
  } = useStore();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod" | "installments" | "wire">("cod");
  const [isExpressDelivery, setIsExpressDelivery] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placedOrderData, setPlacedOrderData] = useState<PlacedOrderInfo | null>(null);

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

  if (isSubmitted && placedOrderData) {
    const whatsappMsg = encodeURIComponent(
      `Hello ESA CAM! I just placed Order #${placedOrderData.order_number} for total ${formatPrice(placedOrderData.total_amount)}. My Name: ${placedOrderData.customer_name}, Phone: ${placedOrderData.customer_phone}. Please confirm my delivery!`
    );

    return (
      <div className="min-h-screen bg-background text-foreground py-16 px-6">
        <div className="max-w-xl mx-auto bg-card border border-border rounded-3xl p-8 sm:p-10 text-center shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Order Confirmed &amp; Logged in Admin HQ
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              Thank You for Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-mono">
              Order Reference: <strong className="text-foreground text-base">{placedOrderData.order_number}</strong>
            </p>
          </div>

          <div className="bg-secondary/40 rounded-2xl p-5 text-left text-xs space-y-2.5">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Recipient Name:</span>
              <span className="font-semibold text-foreground">{placedOrderData.customer_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mobile Contact:</span>
              <span className="font-semibold text-foreground font-mono">{placedOrderData.customer_phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Destination:</span>
              <span className="font-semibold text-foreground">{placedOrderData.shipping_address}, {placedOrderData.city}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2">
              <span className="text-muted-foreground">Total Order Amount:</span>
              <span className="font-mono font-black text-sm text-foreground">{formatPrice(placedOrderData.total_amount)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`https://wa.me/201022736456?text=${whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
            </a>

            <Button asChild variant="outline" className="flex-1 h-12 rounded-xl font-bold text-xs">
              <Link href="/">
                <span>Back to Store</span>
              </Link>
            </Button>
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
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

                  <label
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border bg-secondary/20 hover:bg-secondary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="mt-0.5"
                    />
                    <div>
                      <p className="font-bold text-foreground flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-primary" /> Credit / Debit Card / Instapay
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-1">Visa, Mastercard, Meeza &amp; Instapay Transfer</p>
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
                  className="w-full h-12 rounded-xl font-bold text-xs shadow-lg cursor-pointer"
                >
                  {isSubmitting ? "Processing Order..." : `Confirm & Place Order (${formatPrice(finalTotalUSD)})`}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
