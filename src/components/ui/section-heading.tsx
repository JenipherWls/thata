import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs tracking-[0.24em] uppercase text-foreground/70">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-foreground/70">{description}</p> : null}
    </div>
  );
}
