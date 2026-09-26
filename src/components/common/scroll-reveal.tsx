"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mobile-first-reveal w-full"
    >
      {children}
    </motion.div>
  );
}