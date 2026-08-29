"use client";

import React, { useEffect, useState } from "react";

export function SitePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Hold clean screen for smooth brand entrance then exit smoothly
    const timerExit = setTimeout(() => {
      setIsLoading(false);
    }, 650);

    const timerUnmount = setTimeout(() => {
      setIsRendered(false);
    }, 1100);

    return () => {
      clearTimeout(timerExit);
      clearTimeout(timerUnmount);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-all duration-500 ease-in-out select-none ${
        isLoading
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      {/* Centered Minimal Brand with Smooth Animations */}
      <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
        <div className="flex items-center gap-4">
          {/* Yellow Box with ESA */}
          <div className="bg-[#FFE600] text-black font-black text-4xl sm:text-5xl md:text-6xl px-4 py-1 tracking-tighter leading-none shadow-xs">
            ESA
          </div>

          {/* Clean Black CAM & OPTICS LAB */}
          <div className="flex flex-col">
            <span className="text-black font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.18em] leading-none uppercase">
              CAM
            </span>
            <span className="text-[#000000] font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.45em] uppercase font-bold mt-1">
              OPTICS LAB
            </span>
          </div>
        </div>

        {/* Minimal Animated Black Loading Line */}
        <div className="relative w-32 sm:w-44 h-[3px] bg-[#F4F4F5] overflow-hidden rounded-full mt-2">
          <div className="absolute top-0 bottom-0 left-0 bg-black rounded-full animate-[loading-bar_1s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            left: 0%;
            width: 0%;
          }
          50% {
            left: 20%;
            width: 60%;
          }
          100% {
            left: 100%;
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
