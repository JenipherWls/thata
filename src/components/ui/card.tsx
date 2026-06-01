import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-foreground/10 bg-surface/75 backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
