"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const easing = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } },
};

export function Stagger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div className={cn(className)} variants={item}>
      {children}
    </motion.div>
  );
}
