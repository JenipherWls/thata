import Link from "next/link";
import {
  Aperture,
  Camera,
  Clapperboard,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { cn } from "@/lib/utils";

const areas = [
  {
    title: "Publicidade e Marketing",
    href: "/publicidade-marketing",
    description: "Social media, planejamento, branding e direção criativa com foco em resultado.",
    icon: Megaphone,
  },
  {
    title: "Fotografia",
    href: "/fotografia",
    description: "Ensaios com estética editorial, luz e direção para contar histórias com elegância.",
    icon: Camera,
  },
  {
    title: "Videomaker",
    href: "/videomaker",
    description: "Captação + edição para Reels, campanhas e produções audiovisuais com ritmo e narrativa.",
    icon: Clapperboard,
  },
  {
    title: "Influencer e Parcerias",
    href: "/influencer-parcerias",
    description: "Publis, UGC, ativações e formatos criativos para marcas que querem presença real.",
    icon: Sparkles,
  },
  {
    title: "Atriz e Modelo Publicitária",
    href: "/atriz-modelo",
    description: "Perfil artístico, materiais e disponibilidade para campanhas e produções.",
    icon: Aperture,
  },
] as const;

export function HomeAreas() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Versatilidade criativa com padrão premium"
          description="Da estratégia ao set: um ecossistema completo para marcas e projetos que valorizam estética, clareza e consistência."
        />

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <StaggerItem key={area.href}>
              <Link href={area.href} className="block h-full">
                <Card className="group h-full p-6 transition hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-surface">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-xl tracking-tight text-foreground">{area.title}</p>
                      <p className="mt-3 text-sm leading-6 text-foreground/70">{area.description}</p>
                    </div>
                    <div
                      className={cn(
                        "grid h-11 w-11 place-items-center rounded-2xl border border-foreground/10 bg-surface-2/70 text-burgundy transition group-hover:bg-[linear-gradient(135deg,var(--burgundy),var(--forest))] group-hover:text-surface",
                      )}
                      aria-hidden="true"
                    >
                      <area.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6 h-px w-full bg-foreground/10" aria-hidden="true" />
                  <p className="mt-4 text-xs tracking-[0.24em] uppercase text-foreground/60">Explorar</p>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
