"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export type UserRole =
  | "super_admin"
  | "store_manager"
  | "inventory_admin"
  | "support_agent"
  | "admin"
  | "customer"
  | "client";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company?: string;
  phone?: string;
  avatar?: string;
}

interface AuthContextType {
  user: UserSession | null;
  isLoading: boolean;
  login: (email: string, pass: string, redirectTo?: string) => Promise<boolean>;
  register: (name: string, email: string, pass: string, role?: UserRole, redirectTo?: string) => Promise<boolean>;
  logout: () => void;
  promoteToAdmin: (emailOrId: string) => void;
  isAdmin: boolean;
  isAuthenticated: boolean;
}


// Pre-configured demo accounts
export const DEMO_ACCOUNTS = {
  admin: {
    email: "admin@esacam.com",
    password: "admin",
    user: {
      id: "admin_master",
      name: "Ahmed Mahmoud",
      email: "admin@esacam.com",
      role: "super_admin" as const,
      company: "ESACAM Headquarters",
      phone: "+20 100 892 3411",
    },
  },
  customer: {
    email: "client@cinema.eg",
    password: "admin",
    user: {
      id: "usr-client-tariq",
      name: "Tariq Al-Sayed (DP)",
      email: "client@cinema.eg",
      role: "customer" as const,
      company: "Cairo Cinema Production",
      phone: "+20 101 556 7890",
    },
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // The server cookie is the source of truth for admin access.
  useEffect(() => {
    localStorage.removeItem("esa_cam_session");
    fetch("/api/auth/session", { cache: "no-store" })
      .then(async (res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email: string, pass: string, redirectTo?: string): Promise<boolean> => {
    const trimmedIdentifier = email.trim();

    // 1) Try the backend /api/auth/login first
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedIdentifier, password: pass }),
      });
      const data = await res.json();

      if (data.success && data.user) {
        const userRole: UserRole = data.user.role || (data.user.email.includes("admin") ? "super_admin" : "customer");
        const session: UserSession = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: userRole,
          company: data.user.company || (userRole === "customer" ? "Independent DP / Client" : "ESA CAM Staff"),
        };
        setUser(session);
        
        const isUserAdmin = session.role !== "customer" && session.role !== "client";
        toast.success(`Welcome back, ${session.name}!`, {
          description: isUserAdmin ? "Logged in to Admin Command Center." : "Logged in successfully to ESA CAM.",
        });
        
        if (redirectTo) {
          router.push(redirectTo);
        } else {
          router.push(isUserAdmin ? "/dashboard" : "/");
        }
        return true;
      }
    } catch (apiErr) {
      console.error("API auth failed:", apiErr);
    }

    toast.error("Invalid credentials", {
      description: "Please enter your email/username and password.",
    });
    return false;
  };

  const register = async (
    name: string,
    email: string,
    pass: string,
    role?: UserRole,
    redirectTo?: string
  ): Promise<boolean> => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !pass) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    const assignedRole: UserRole = role === "customer" ? "customer" : "client";
    const isUserAdmin = assignedRole !== "customer" && assignedRole !== "client";

    // 1) Try the backend /api/auth/register first
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, password: pass, role: assignedRole }),
      });
      const data = await res.json();

      if (data.success && data.user) {
        const session: UserSession = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: assignedRole,
          company: data.user.company || (isUserAdmin ? "ESA CAM Staff" : "VIP Member"),
        };
        setUser(session);
        toast.success(`Welcome, ${session.name}!`, {
          description: isUserAdmin ? "Account created with Admin privileges." : "Account created successfully. Welcome to ESA CAM!",
        });
        
        if (redirectTo) {
          router.push(redirectTo);
        } else {
          router.push(isUserAdmin ? "/dashboard" : "/");
        }
        return true;
      } else if (data.message) {
        toast.error(data.message);
        return false;
      }
    } catch (apiErr) {
      console.error("Register API failed, fallback to local:", apiErr);
    }

    toast.error("Registration is unavailable. Ask an administrator to create your account.");
    return false;
  };

  const logout = () => {
    setUser(null);
    void fetch("/api/auth/logout", { method: "POST" });
    toast.info("Logged out successfully");
    router.push("/");
  };

  const promoteToAdmin = (emailOrId: string) => {

    if (user && (user.email.toLowerCase() === emailOrId.toLowerCase() || user.id === emailOrId)) {
      const updated: UserSession = { ...user, role: "super_admin" };
      setUser(updated);
      toast.success(`Account "${user.name}" promoted to Admin! Dashboard unlocked.`);
    }
  };

  const isAdmin = !!user && ["admin", "super_admin", "store_manager", "inventory_admin", "support_agent"].includes(user.role);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        promoteToAdmin,
        isAdmin,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

