import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Quem Sou",
  description:
    "Conheça Thamyres Queiroz: publicitária, fotógrafa, videomaker e criadora de conteúdo — estratégia, estética e storytelling para projetos com autenticidade.",
};

const values = [
  {
    title: "Estratégia com intenção",
    text: "Planejamento claro, objetivos definidos e decisões criativas orientadas por propósito.",
  },
  {
    title: "Estética editorial",
    text: "Um olhar sofisticado que fortalece posicionamento e aumenta percepção de valor.",
  },
  {
    title: "Storytelling que conecta",
    text: "Narrativas que traduzem essência e criam proximidade real com o público.",
  },
  {
    title: "Entrega consistente",
    text: "Processo organizado para garantir qualidade, prazos e evolução contínua.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Quem sou"
        title="Comunicação, imagem e narrativa — com sensibilidade e performance."
        subtitle="Publicitária • Fotógrafa • Videomaker • Criadora de Conteúdo • Atriz"
        description="Sou Thamyres Queiroz, estudante de Publicidade e Propaganda, apaixonada por comunicação, marketing, fotografia, vídeo e criação de conteúdo. Meu trabalho une estratégia, criatividade e storytelling para ajudar marcas e pessoas a se conectarem com seu público através de imagens, vídeos e campanhas autênticas."
      />

      <Section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/photo-placeholder.svg"
                    alt="Foto de Thamyres Queiroz (placeholder para substituir)"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Resumo</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/75">
                    Estratégia + direção criativa + produção audiovisual para construir presença, imagem e conexão.
                  </p>
                </div>
              </Card>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Visão"
                  title="Profissional, acolhedora e pronta para executar."
                  description="A proposta é simples: traduzir o que você é em comunicação consistente — com qualidade premium e linguagem atual para redes, campanhas e projetos autorais."
                />
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <Reveal key={value.title}>
                    <Card className="h-full p-6">
                      <p className="font-serif text-xl tracking-tight text-foreground">{value.title}</p>
                      <p className="mt-3 text-sm leading-6 text-foreground/70">{value.text}</p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Como trabalho"
            title="Processo leve, organizado e transparente"
            description="Um fluxo que mantém a criatividade em alta sem perder foco, prazos e consistência."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "Briefing", d: "Entender objetivos, público e linguagem." },
              { n: "02", t: "Direção", d: "Conceito, referência e estética editorial." },
              { n: "03", t: "Produção", d: "Captação, criação e execução com qualidade." },
              { n: "04", t: "Entrega", d: "Organização, refinamento e próximos passos." },
            ].map((step) => (
              <Reveal key={step.n}>
                <Card className="h-full p-6">
                  <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">{step.n}</p>
                  <p className="mt-3 font-serif text-xl tracking-tight">{step.t}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">{step.d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
