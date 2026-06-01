import type { Metadata } from "next";
import Image from "next/image";
import { Film, IdCard, MapPin, Plane, Sparkles } from "lucide-react";
import { actingMaterials, artisticProfile, availableFor } from "@/content/acting";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Atriz e Modelo Publicitária",
  description:
    "Perfil artístico profissional: altura, cidade, idiomas, habilidades e disponibilidade para viagens. Materiais, book, vídeo e lista de disponibilidade para trabalhos.",
};

const profileFields = [
  { icon: IdCard, label: "Altura", value: artisticProfile.altura },
  { icon: MapPin, label: "Cidade", value: artisticProfile.cidade },
  { icon: Sparkles, label: "Idiomas", value: artisticProfile.idiomas },
  { icon: Film, label: "Habilidades", value: artisticProfile.habilidades },
  { icon: Plane, label: "Viagens", value: artisticProfile.viagens },
] as const;

export default function ActingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Atriz e modelo publicitária"
        title="Perfil artístico com estética premium e presença de câmera."
        subtitle="Campanhas • Comerciais • Catálogos • Conteúdos"
        description="Uma página preparada para produtoras e marcas, com campos claros, materiais e disponibilidade. Tudo com placeholders fáceis de editar."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato?servico=Atriz%20e%20Modelo%20Publicitária" variant="primary">
            Solicitar contato
          </ButtonLink>
          <ButtonLink href="/trabalhe-comigo" variant="outline">
            Trabalhe comigo
          </ButtonLink>
        </div>
      </PageIntro>

      <Section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/photo-placeholder.svg"
                    alt="Foto profissional (placeholder) — substitua pelo book real"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Observação</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/75">
                    Troque esta imagem por uma foto do seu book em <span className="font-mono">public/atriz/</span>.
                  </p>
                </div>
              </Card>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Perfil"
                  title="Informações objetivas para casting"
                  description="Preencha com dados reais para facilitar seleção e produção."
                />
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {profileFields.map((field) => (
                  <Reveal key={field.label}>
                    <Card className="h-full p-6">
                      <div className="flex items-start gap-3">
                        <field.icon className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
                        <div>
                          <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">{field.label}</p>
                          <p className="mt-2 text-sm leading-6 text-foreground/80">{field.value}</p>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>

              {/*
                Futuro (deixar preparado para ativar quando houver):

                <Card className="mt-4 p-6">
                  <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">DRT</p>
                  <p className="mt-2 font-medium text-foreground">DRT nº XXXXX</p>
                </Card>
              */}

              <Card className="mt-4 p-6">
                <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">DRT</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Se quiser exibir o DRT no futuro, ative o bloco comentado neste arquivo.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-2)_75%,transparent),transparent_65%)]">
        <Container>
          <SectionHeading
            eyebrow="Materiais"
            title="Book, fotos e vídeos (placeholder)"
            description="Mantenha tudo organizado para produtoras avaliarem rapidamente."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {actingMaterials.map((item) => (
              <Reveal key={item.title}>
                <Card className="h-full p-7">
                  <p className="font-serif text-2xl tracking-tight">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">{item.note}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Disponível para"
            title="Formatos e produções"
            description="Lista pronta para casting e propostas."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {availableFor.map((item) => (
              <span
                key={item}
                className="rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

