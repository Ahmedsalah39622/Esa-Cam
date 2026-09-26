"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const CONSENT_KEY = "esa-cam-cookie-consent";
const DISMISSED_KEY = "esa-cam-cookie-dismissed";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = window.localStorage.getItem(CONSENT_KEY) === "accepted";
    const dismissedThisSession = window.sessionStorage.getItem(DISMISSED_KEY) === "true";
    setIsVisible(!hasAccepted && !dismissedThisSession);
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const dismissNotice = () => {
    window.sessionStorage.setItem(DISMISSED_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 right-4 z-[100] w-[min(400px,calc(100vw-2rem))] border-t-4 border-[#FFE600] bg-white p-5 text-[#171713] shadow-[0_8px_32px_rgba(0,0,0,0.22)] sm:bottom-6 sm:right-6 sm:p-6"
    >
      <div className="flex items-center gap-2.5 pr-8">
        <Cookie aria-hidden="true" className="h-8 w-8 shrink-0 text-[#8A7800]" />
        <h2 className="text-lg font-bold">Cookie preferences</h2>
      </div>

      <button
        type="button"
        onClick={dismissNotice}
        aria-label="Close cookie notice"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-[#77776F] transition-colors hover:bg-[#F4F4F1] hover:text-black"
      >
        <X aria-hidden="true" className="h-5 w-5" />
      </button>

      <p className="mt-3 text-sm leading-5 text-[#393933]">
        We use cookies to keep the store working, remember your preferences, and understand how the site is used. Read our{" "}
        <Link href="/privacy-policy" className="font-semibold text-[#665900] underline underline-offset-2 hover:text-black">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="button"
        onClick={acceptCookies}
        className="mt-4 min-h-11 w-full bg-[#FFE600] px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#F0D800]"
      >
        Accept
      </button>
    </aside>
  );
}