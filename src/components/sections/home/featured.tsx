import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { marketingProjects } from "@/content/portfolio";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function HomeFeatured() {
  const featured = marketingProjects.slice(0, 3);

  return (
    <Section className="bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-2)_75%,transparent),transparent_65%)]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Destaques"
            title="Trabalhos com estratégia e estética"
            description="Cards com conteúdo fictício (placeholder) — pronto para trocar por cases reais."
          />
          <Link
            href="/publicidade-marketing"
            className="inline-flex items-center gap-2 self-start rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition hover:bg-surface"
          >
            Ver todos os projetos <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="h-full p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground/10 bg-surface px-3 py-1 text-xs text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 font-serif text-2xl tracking-tight text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">{project.objective}</p>
                <div className="mt-6 grid gap-3 text-sm">
                  <div>
                    <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Processo</p>
                    <p className="mt-1 text-foreground/75">{project.process}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Resultado</p>
                    <p className="mt-1 text-foreground/75">{project.result}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
