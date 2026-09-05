import type { Metadata } from "next";
import { Toaster } from "sonner";
import { StoreProvider } from "@/context/store-context";
import { AuthProvider } from "@/context/auth-context";
import { QuickViewModal } from "@/components/common/quick-view-modal";
import { CartDrawer } from "@/components/common/cart-drawer";
import { SmoothScrollProvider } from "@/components/common/smooth-scroll-provider";
import { SitePreloader } from "@/components/common/site-preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESA CAM — Pro Cameras, Optics & Filmmaking Equipment",
  description: "Official authorized distributor for cinema cameras, master prime lenses, studio lighting, and broadcast audio in Egypt and the Middle East.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#0A0A0A]">
        <AuthProvider>
          <StoreProvider>
            <SmoothScrollProvider>
              <SitePreloader />
              {children}
              <CartDrawer />
              <QuickViewModal />
              <Toaster position="top-right" richColors />
            </SmoothScrollProvider>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
