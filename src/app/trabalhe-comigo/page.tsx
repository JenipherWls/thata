import type { Metadata } from "next";
import { BriefcaseBusiness, Camera, Clapperboard, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Trabalhe Comigo",
  description:
    "Página para contratação: empresas (marketing), marcas (parcerias), produtoras (atriz/modelo) e pessoas (ensaio foto/vídeo). CTAs claros e rápidos.",
};

const blocks = [
  {
    icon: BriefcaseBusiness,
    title: "Sou uma empresa",
    subtitle: "Quero contratar serviços de marketing.",
    text: "Gestão de redes, planejamento, branding, direção criativa e produção de conteúdo com estética premium.",
    cta: { label: "Solicitar proposta", href: "/contato?servico=Publicidade%20e%20Marketing" },
  },
  {
    icon: Handshake,
    title: "Sou uma marca",
    subtitle: "Quero uma parceria/publicidade.",
    text: "Publis, UGC, ativações e formatos para campanhas com linguagem atual, elegante e profissional.",
    cta: { label: "Pedir media kit", href: "/contato?servico=Influencer%20e%20Parcerias" },
  },
  {
    icon: Clapperboard,
    title: "Sou uma produtora",
    subtitle: "Quero contratar como atriz/modelo.",
    text: "Perfil artístico, materiais e disponibilidade para comerciais, campanhas e produções audiovisuais.",
    cta: { label: "Falar sobre casting", href: "/contato?servico=Atriz%20e%20Modelo%20Publicitária" },
  },
  {
    icon: Camera,
    title: "Sou uma pessoa",
    subtitle: "Quero ensaio fotográfico ou vídeo.",
    text: "Ensaios com estética editorial, direção e entrega premium para projetos pessoais, corporativos e eventos.",
    cta: { label: "Agendar ensaio", href: "/contato?servico=Fotografia" },
  },
] as const;

export default function WorkWithMePage() {
  return (
    <>
      <PageIntro
        eyebrow="Trabalhe comigo"
        title="Uma página direta para contratar em menos de 30 segundos."
        subtitle="Escolha seu perfil e siga para o contato"
        description="Quatro caminhos claros para empresas, marcas, produtoras e pessoas. Botões já levam para o formulário com o serviço pré-selecionado."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato" variant="primary">
            Ir para contato
          </ButtonLink>
          <ButtonLink href="/publicidade-marketing" variant="outline">
            Ver portfólio
          </ButtonLink>
        </div>
      </PageIntro>

      <Section className="pt-10 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Escolha um caminho"
            title="Qual é o seu objetivo?"
            description="Cards prontos para personalizar texto e CTA."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {blocks.map((block) => (
              <Reveal key={block.title}>
                <Card className="h-full p-8">
                  <block.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <p className="mt-4 font-serif text-3xl tracking-tight">{block.title}</p>
                  <p className="mt-2 text-sm text-foreground/70">{block.subtitle}</p>
                  <p className="mt-5 text-sm leading-6 text-foreground/75">{block.text}</p>
                  <div className="mt-7">
                    <ButtonLink href={block.cta.href} variant="primary">
                      {block.cta.label}
                    </ButtonLink>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

