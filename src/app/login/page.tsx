"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function LoginPage() {
  const { login } = useAuth();

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginIdentifier.trim()) {
      toast.error("Please enter your email or username");
      return;
    }
    if (!loginPassword) {
      toast.error("Please enter your password");
      return;
    }

    setIsSubmitting(true);
    try {
      await login(loginIdentifier, loginPassword);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-[#FFE600] selection:text-black">
      {/* Top Bar Navigation */}
      <header className="border-b border-border/80 px-6 py-4 flex items-center justify-between bg-card/60 backdrop-blur-md">
        <Link href="/" className="flex items-center group">
          <div className="bg-[#FFE600] text-black px-2.5 py-1 font-black text-lg tracking-tighter uppercase font-sans mr-2 shadow-xs group-hover:scale-105 transition-transform">
            ESA
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-widest text-foreground uppercase font-sans">
              CAM
            </span>
            <p className="text-[9px] text-muted-foreground font-mono tracking-wider uppercase mt-0.5">
              OPTICS LAB
            </p>
          </div>
        </Link>

        <Button asChild variant="ghost" size="sm" className="rounded-xl text-xs gap-1.5">
          <Link href="/">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Storefront</span>
          </Link>
        </Button>
      </header>

      {/* Main Form Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-6">
        <div className="w-full max-w-md space-y-6">
          {/* Card Box */}
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FFE600]/10 blur-3xl pointer-events-none" />

            {/* Header Title */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary border border-border mx-auto flex items-center justify-center text-foreground ring-1 ring-[#FFE600]/30">
                <LogIn className="w-6 h-6 text-[#FFE600]" />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-foreground font-sans">
                Admin Sign In
              </h1>
              <p className="text-xs text-muted-foreground">
                Enter your administrator credentials to access the dashboard.
              </p>
            </div>

            {/* --- LOGIN FORM --- */}
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-semibold text-foreground block">
                    Email or Username
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      type="text"
                      placeholder="admin@esacam.com"
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-border bg-secondary/30 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-[#FFE600]/50 text-foreground transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-foreground block">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      type={showLoginPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 rounded-2xl border border-border bg-secondary/30 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-[#FFE600]/50 text-foreground transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute right-3.5 top-3 text-muted-foreground hover:text-foreground cursor-pointer"
                      title={showLoginPassword ? "Hide password" : "Show password"}
                    >
                      {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-2xl text-xs font-bold gap-2 cursor-pointer shadow-md bg-[#FFE600] text-black hover:bg-[#FFD000] transition-colors mt-2 uppercase tracking-wider font-sans"
                >
                  <span>{isSubmitting ? "Signing in..." : "Sign In"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

            </form>

           
          </div>

          {/* Security Notice */}
          <div className="flex items-center justify-center gap-2 text-center text-[11px] text-muted-foreground font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFE600]" />
            <span>256-Bit SSL Encrypted Access Management • RBAC Gateway</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/80 py-4 px-6 text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} ESA CAM Store • Flagship Merchant &amp; Studio Operations
      </footer>

    </div>
  );
}

