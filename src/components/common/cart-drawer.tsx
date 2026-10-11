"use client";

import React from "react";
import { useStore } from "@/context/store-context";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    formatPrice,
    cartTotalUSD,
    cartItemCount,
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-card text-card-foreground shadow-2xl border-l border-border flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-semibold text-lg leading-tight">Your Gear Cart</h2>
                <p className="text-xs text-muted-foreground">
                  {cartItemCount} {cartItemCount === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-border/60">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-base">Your cart is empty</p>
                  <p className="text-xs text-muted-foreground mt-1 max-w-[240px]">
                    Explore cinema cameras, master prime lenses, and pro lighting kits.
                  </p>
                </div>
                <Button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-full text-xs font-semibold px-6"
                >
                  Explore Gear Catalog
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                  <Link
                    href={`/store/${item.product.id}`}
                    onClick={() => setIsCartOpen(false)}
                    className="relative w-20 h-20 rounded-xl overflow-hidden bg-secondary shrink-0 border border-border block cursor-pointer hover:opacity-85 transition-opacity"
                    aria-label={`View ${item.product.name}`}
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-medium line-clamp-2 leading-snug text-foreground">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors shrink-0 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">
                        {item.product.brand} {item.selectedMount ? `• ${item.selectedMount}` : ""}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1">
                      <div className="flex items-center border border-border rounded-lg bg-secondary/30">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                          title="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold px-2 min-w-[24px] text-center font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                          title="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-xs font-bold font-mono text-foreground">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-[10px] text-muted-foreground font-mono">
                            {formatPrice(item.product.price)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-border p-6 bg-card space-y-4">
              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-mono">{formatPrice(cartTotalUSD)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-muted-foreground font-mono text-[11px] italic">
                    Calculated at checkout
                  </span>
                </div>

                <div className="border-t border-border pt-2 flex justify-between items-baseline font-bold text-base text-foreground">
                  <span>Subtotal</span>
                  <span className="font-mono text-lg">{formatPrice(cartTotalUSD)}</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground bg-secondary/40 py-2 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>100% Authorized Genuine Dealer • 14-Day Return Policy</span>
              </div>

              {/* Checkout Button */}
              <Button
                asChild
                className="w-full font-semibold text-sm py-6 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                <Link href="/checkout">
                  <span>Proceed to Pro Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
