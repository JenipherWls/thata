"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-burgundy text-surface shadow-[0_14px_40px_-18px_color-mix(in_oklab,var(--burgundy)_60%,transparent)] hover:translate-y-[-1px] hover:bg-[color-mix(in_oklab,var(--burgundy)_92%,black)]",
  secondary:
    "bg-forest text-surface shadow-[0_14px_40px_-18px_color-mix(in_oklab,var(--forest)_60%,transparent)] hover:translate-y-[-1px] hover:bg-[color-mix(in_oklab,var(--forest)_92%,black)]",
  outline:
    "border border-foreground/15 bg-surface/70 text-foreground backdrop-blur hover:border-foreground/25 hover:bg-surface",
  ghost: "text-foreground hover:bg-foreground/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  size = "md",
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return <button className={cn(base, variantStyles[variant], sizeStyles[size], className)} {...props} />;
}

export function ButtonLink({
  href,
  className,
  size = "md",
  variant = "primary",
  children,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}) {
  return (
    <Link href={href} className={cn(base, variantStyles[variant], sizeStyles[size], className)}>
      {children}
    </Link>
  );
}
