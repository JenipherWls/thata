import type { Metadata } from "next";
import { Camera, Clapperboard, Sparkles } from "lucide-react";
import { behindTheScenes, photographyGallery, photographyTypes } from "@/content/photography";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fotografia",
  description:
    "Ensaios com estética editorial: feminino, infantil, casais, corporativo e eventos. Galeria organizada, autoridade visual e bastidores.",
};

export default function PhotographyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Fotografia"
        title="Imagens com direção, luz e narrativa."
        subtitle="Editorial • Retrato • Lifestyle • Eventos"
        description="Uma galeria elegante para apresentar seus ensaios. Aqui tudo está com placeholders — basta substituir por suas fotos reais em public/."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato?servico=Fotografia" variant="primary">
            Agendar ensaio
          </ButtonLink>
          <ButtonLink href="/trabalhe-comigo" variant="outline">
            Trabalhe comigo
          </ButtonLink>
        </div>
      </PageIntro>

      <Section className="pt-10 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Tipos de ensaio"
            title="Formatos para diferentes momentos"
            description="Escolha um formato e personalize o texto conforme seus pacotes."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {photographyTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur"
              >
                <Camera className="h-4 w-4 text-gold" aria-hidden="true" />
                {type}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Direção e estética",
                text: "Referências, poses e storytelling para um resultado sofisticado.",
              },
              {
                icon: Camera,
                title: "Qualidade técnica",
                text: "Luz, composição e edição cuidadosa para elevar percepção de valor.",
              },
              {
                icon: Clapperboard,
                title: "Conteúdo para redes",
                text: "Opção de bastidores e recortes para Reels e Stories (placeholder).",
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
            eyebrow="Galeria"
            title="Seleção de imagens (placeholders)"
            description="Substitua os arquivos em `public/images/` e ajuste os itens em `src/content/photography.ts`."
          />
          <div className="mt-10">
            <GalleryGrid items={photographyGallery} className="lg:grid-cols-4" />
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-2)_75%,transparent),transparent_65%)]">
        <Container>
          <SectionHeading
            eyebrow="Bastidores"
            title="Confiança e autoridade visual"
            description="Mostre você fotografando: set, direção, luz, equipamentos e detalhes do processo."
          />

          <div className="mt-10">
            <GalleryGrid items={behindTheScenes} className="lg:grid-cols-3" />
          </div>

          <Card className="mt-10 p-7">
            <p className="text-sm leading-6 text-foreground/75">
              Dica: crie uma pasta <span className="font-mono">public/fotografia/</span> e substitua os placeholders por
              arquivos reais (JPG/PNG/WebP). Depois atualize os caminhos em{" "}
              <span className="font-mono">src/content/photography.ts</span>.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}

