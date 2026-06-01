import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { marketingProjects, marketingServices } from "@/content/portfolio";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Publicidade e Marketing",
  description:
    "Serviços de social media, gestão de redes, planejamento de conteúdo, branding e direção criativa com posicionamento premium e estratégia.",
};

const credibility = [
  {
    title: "Diagnóstico e posicionamento",
    text: "Entendimento profundo do público, tom de voz, diferenciais e objetivos — antes de produzir.",
  },
  {
    title: "Direção criativa e estética editorial",
    text: "Coerência visual, consistência e alto valor percebido em cada peça.",
  },
  {
    title: "Conteúdo com função",
    text: "Cada postagem tem intenção: alcance, autoridade, conversão ou relacionamento.",
  },
  {
    title: "Organização e entrega",
    text: "Cronograma, alinhamentos e materiais prontos para execução sem ruídos.",
  },
] as const;

export default function MarketingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Publicidade e marketing"
        title="Estratégia + criação para marcas que querem presença forte e consistente."
        subtitle="Social media, branding, direção criativa e produção de conteúdo."
        description="Uma abordagem completa: do planejamento ao criativo. Aqui você encontra serviços, formatos e um portfólio com cases fictícios (placeholder) prontos para serem substituídos pelos reais."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato" variant="primary">
            Solicitar proposta
          </ButtonLink>
          <ButtonLink href="/trabalhe-comigo" variant="outline">
            Trabalhar comigo
          </ButtonLink>
        </div>
      </PageIntro>

      <Section className="pt-10 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Serviços"
            title="O que eu posso entregar para sua marca"
            description="Uma lista clara para facilitar orçamento e escopo. Ajuste nomes/descrições conforme sua oferta."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {marketingServices.map((service) => (
              <Reveal key={service}>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
                    <div>
                      <p className="font-serif text-xl tracking-tight text-foreground">{service}</p>
                      <p className="mt-2 text-sm leading-6 text-foreground/70">
                        Texto placeholder profissional: descreva em 1–2 frases como este serviço funciona, o que inclui e
                        qual impacto ele traz.
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Credibilidade"
            title="Uma metodologia que evita improviso"
            description="Uma base profissional para construir comunicação com clareza, estética e consistência."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {credibility.map((item) => (
              <Reveal key={item.title}>
                <Card className="h-full p-7">
                  <p className="font-serif text-2xl tracking-tight">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-2)_75%,transparent),transparent_65%)]">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Portfólio publicitário"
              title="Projetos e entregas (placeholder)"
              description="Cards prontos para editar: objetivo, processo e resultado de cada case."
            />
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 self-start rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition hover:bg-surface"
            >
              Solicitar orçamento <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {marketingProjects.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Card className="mt-10 p-7">
            <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Observação</p>
            <p className="mt-3 text-sm leading-6 text-foreground/75">
              Para personalizar: edite os textos em <span className="font-mono">src/content/portfolio.ts</span> e troque
              imagens/prints de projetos na seção que você preferir (por exemplo, criando uma pasta em{" "}
              <span className="font-mono">public/portfolio/</span>).
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}

