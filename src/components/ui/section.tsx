import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  as = "section",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  const Comp = as;
  return <Comp className={cn("py-16 sm:py-20 lg:py-24", className)}>{children}</Comp>;
}
