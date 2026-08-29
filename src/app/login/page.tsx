"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  UserPlus,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function LoginPage() {
  const { login, register, isAuthenticated, user, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register form state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

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

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!registerEmail.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    if (!registerPassword) {
      toast.error("Please enter a password");
      return;
    }
    if (registerPassword !== registerConfirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsSubmitting(true);
    try {
      await register(registerName, registerEmail, registerPassword);
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
                {activeTab === "login" ? (
                  <LogIn className="w-6 h-6 text-[#FFE600]" />
                ) : (
                  <UserPlus className="w-6 h-6 text-[#FFE600]" />
                )}
              </div>
              <h1 className="text-2xl font-black tracking-tight text-foreground font-sans">
                {activeTab === "login" ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-xs text-muted-foreground">
                {activeTab === "login"
                  ? "Enter your credentials to access your account & dashboard."
                  : "Sign up to manage gear catalog, orders, and store logistics."}
              </p>
            </div>

            {/* Clean Tab Switcher (Login / Register) */}
            <div className="grid grid-cols-2 gap-1.5 bg-secondary/50 p-1.5 rounded-2xl border border-border text-xs font-bold font-sans">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activeTab === "login"
                    ? "bg-foreground text-background shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activeTab === "register"
                    ? "bg-foreground text-background shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </button>
            </div>

            {/* --- LOGIN FORM --- */}
            {activeTab === "login" && (
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

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("register")}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Don&apos;t have an account? <span className="font-bold underline text-foreground">Register here</span>
                  </button>
                </div>
              </form>
            )}

            {/* --- REGISTER FORM --- */}
            {activeTab === "register" && (
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-semibold text-foreground block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Abdo Hussen"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-border bg-secondary/30 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-[#FFE600]/50 text-foreground transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-foreground block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      type="email"
                      placeholder="user@esacam.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
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
                      type={showRegisterPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 rounded-2xl border border-border bg-secondary/30 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-[#FFE600]/50 text-foreground transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                      className="absolute right-3.5 top-3 text-muted-foreground hover:text-foreground cursor-pointer"
                      title={showRegisterPassword ? "Hide password" : "Show password"}
                    >
                      {showRegisterPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-foreground block">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      type={showRegisterPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-border bg-secondary/30 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-[#FFE600]/50 text-foreground transition-all"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-2xl text-xs font-bold gap-2 cursor-pointer shadow-md bg-[#FFE600] text-black hover:bg-[#FFD000] transition-colors mt-2 uppercase tracking-wider font-sans"
                >
                  <span>{isSubmitting ? "Creating Account..." : "Create Account"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Already have an account? <span className="font-bold underline text-foreground">Sign In</span>
                  </button>
                </div>
              </form>
            )}

            {/* Already Authenticated Info Banner */}
            {isAuthenticated && (
              <div className="p-4 rounded-2xl bg-secondary border border-border space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Signed in as <strong className="text-foreground">{user?.name}</strong></span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    user?.role !== "customer"
                      ? "bg-[#FFE600]/20 text-[#FFE600] border-[#FFE600]/30"
                      : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                  }`}>
                    {user?.role !== "customer" ? "⚡ Admin Staff" : "👥 VIP Client"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild size="sm" className="flex-1 rounded-xl text-xs font-bold bg-[#FFE600] text-black hover:bg-[#FFD000]">
                    <Link href={user?.role !== "customer" ? "/dashboard" : "/track-orders"}>
                      {user?.role !== "customer" ? "Open Admin Dashboard →" : "Open Orders Tracking Hub →"}
                    </Link>
                  </Button>
                  <Button
                    onClick={logout}
                    variant="outline"
                    size="sm"
                    className="rounded-xl text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 cursor-pointer"
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            )}

           
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

