"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const easing = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: easing }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
