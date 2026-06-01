import type { Metadata } from "next";
import { Clapperboard, Film, Sparkles } from "lucide-react";
import { featuredVideos, videoTypes, workProcess } from "@/content/video";
import { VideoEmbed } from "@/components/video/video-embed";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Videomaker",
  description:
    "Produções audiovisuais: Reels, comerciais, vídeos institucionais, eventos e conteúdo para redes. Processo de trabalho em 5 etapas e embeds de vídeo.",
};

export default function VideomakerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Videomaker"
        title="Produção audiovisual com ritmo, estética e intenção."
        subtitle="Reels • Comerciais • Institucional • Eventos • Redes sociais"
        description="Aqui você pode incorporar vídeos diretamente (YouTube/Vimeo). Os cards estão prontos — basta colar o embed URL em `src/content/video.ts`."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato?servico=Videomaker" variant="primary">
            Solicitar orçamento
          </ButtonLink>
          <ButtonLink href="/publicidade-marketing" variant="outline">
            Ver projetos de marketing
          </ButtonLink>
        </div>
      </PageIntro>

      <Section className="pt-10 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Tipos de produção"
            title="Formatos que performam e posicionam"
            description="Personalize conforme seu portfólio e seus pacotes."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {videoTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur"
              >
                <Film className="h-4 w-4 text-gold" aria-hidden="true" />
                {type}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Clapperboard,
                title: "Direção + captação",
                text: "Narrativa, estética e consistência para transformar ideia em cena.",
              },
              {
                icon: Sparkles,
                title: "Edição premium",
                text: "Ritmo, cor, áudio, legendas e finalização com padrão profissional.",
              },
              {
                icon: Film,
                title: "Versões para redes",
                text: "Cortes e formatos otimizados para cada canal (placeholder).",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <Card className="h-full p-7">
                  <item.icon className="h-5 w-5 text-burgundy" aria-hidden="true" />
                  <p className="mt-4 font-serif text-2xl tracking-tight">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Vídeos"
            title="Incorpore seus conteúdos aqui"
            description="Quando `embedUrl` estiver vazio, o card mostra um placeholder."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <Reveal key={video.title}>
                <div className="space-y-4">
                  <VideoEmbed title={video.title} embedUrl={video.embedUrl} />
                  <Card className="p-6">
                    <p className="font-serif text-xl tracking-tight">{video.title}</p>
                    <p className="mt-3 text-sm leading-6 text-foreground/70">{video.description}</p>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-2)_75%,transparent),transparent_65%)]">
        <Container>
          <SectionHeading
            eyebrow="Processo de trabalho"
            title="5 etapas para manter qualidade e prazos"
            description="Transparência para você saber exatamente como vamos construir o resultado."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {workProcess.map((step) => (
              <Reveal key={step.step}>
                <Card className="h-full p-6">
                  <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">{step.step}</p>
                  <p className="mt-3 font-serif text-xl tracking-tight">{step.title}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">{step.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

