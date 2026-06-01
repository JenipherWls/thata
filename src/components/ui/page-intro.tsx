import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  subtitle,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs tracking-[0.24em] uppercase text-foreground/70">{eyebrow}</p>
          ) : null}
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            {title}
          </h1>
          {subtitle ? <p className="mt-4 text-base text-foreground/70 sm:text-lg">{subtitle}</p> : null}
          {description ? <p className={cn("mt-6 text-base leading-7 text-foreground/80 sm:text-lg")}>{description}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
