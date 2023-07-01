"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, LazyMotion, m, domAnimation } from "framer-motion";

export default function Motion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          className="flex flex-col justify-center items-center z-10 h-fit w-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={pathname}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
