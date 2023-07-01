"use client";

import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </LazyMotion>
  );
}
