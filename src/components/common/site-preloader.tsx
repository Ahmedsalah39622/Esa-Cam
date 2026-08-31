"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SitePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Quick, snappy loading time (650ms) for high performance feel
    const timerExit = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    const timerUnmount = setTimeout(() => {
      setIsRendered(false);
    }, 1150);

    return () => {
      clearTimeout(timerExit);
      clearTimeout(timerUnmount);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#09090b] select-none overflow-hidden"
        >
          {/* Centered Brand Content with Sleek Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-5">
            {/* Animated Brand Logo Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 sm:gap-4"
            >
              {/* Yellow Box with ESA + Animated Light Sheen */}
              <motion.div
                initial={{ scale: 0.85, rotate: -2 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative bg-[#FFE600] text-black font-black text-4xl sm:text-5xl md:text-6xl px-4 py-1.5 sm:px-5 sm:py-2 tracking-tighter leading-none shadow-md overflow-hidden"
              >
                <span className="relative z-10 font-sans">ESA</span>
                {/* Light Sheen Reflection Swipe */}
                <motion.div
                  initial={{ x: "-150%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-25deg] pointer-events-none"
                />
              </motion.div>

              {/* Clean Crisp CAM & OPTICS LAB */}
              <div className="flex flex-col">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-black dark:text-white font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.18em] leading-none uppercase font-sans"
                >
                  CAM
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, letterSpacing: "0.2em" }}
                  animate={{ opacity: 1, letterSpacing: "0.45em" }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="text-[#52525B] dark:text-[#A1A1AA] font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase font-bold mt-1.5"
                >
                  OPTICS LAB
                </motion.span>
              </div>
            </motion.div>

            {/* Minimal Animated Loading Line */}
            <div className="relative w-36 sm:w-48 h-[2.5px] bg-[#E4E4E7] dark:bg-[#27272A] overflow-hidden rounded-full mt-2">
              <motion.div
                initial={{ left: "-40%", width: "40%" }}
                animate={{ left: ["-40%", "100%"] }}
                transition={{
                  duration: 0.85,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute top-0 bottom-0 bg-[#000000] dark:bg-[#FFE600] rounded-full shadow-xs"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
