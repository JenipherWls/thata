import type { Metadata } from "next";
import { BarChart3, Handshake, Sparkles } from "lucide-react";
import { mediaKit, partnerBrands, partnershipFormats } from "@/content/influencer";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Influencer e Parcerias",
  description:
    "Área profissional para marcas: media kit, nichos, público, alcance, engajamento, demografia, formatos disponíveis e espaço para parcerias.",
};

export default function InfluencerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Influencer e parcerias"
        title="Conteúdo com estética premium e entrega profissional para marcas."
        subtitle="Publis • UGC • Ativações • Eventos • Embaixadoria"
        description="Uma página pronta para negociar com marcas. Preencha os números reais no media kit e substitua os placeholders conforme seus trabalhos."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato?servico=Influencer%20e%20Parcerias" variant="primary">
            Pedir media kit
          </ButtonLink>
          <ButtonLink href="/trabalhe-comigo" variant="outline">
            Trabalhe comigo
          </ButtonLink>
        </div>
      </PageIntro>

      <Section className="pt-10 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Media kit"
            title="Dados rápidos para tomada de decisão"
            description="Campos com placeholders — edite em `src/content/influencer.ts`."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <Card className="h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Nichos</p>
                    <p className="mt-3 font-serif text-2xl tracking-tight">Onde eu crio e conecto</p>
                  </div>
                  <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {mediaKit.nichos.map((nicho) => (
                    <span
                      key={nicho}
                      className="rounded-full border border-foreground/10 bg-surface px-3 py-1 text-xs text-foreground/70"
                    >
                      {nicho}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Público</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/75">{mediaKit.publico}</p>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Demografia</p>
                    <p className="mt-3 font-serif text-2xl tracking-tight">Snapshot</p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>

                <div className="mt-6 grid gap-3">
                  {mediaKit.demografia.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4">
                      <p className="text-sm text-foreground/70">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {mediaKit.redes.map((network) => (
              <Reveal key={network.name}>
                <Card className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">{network.name}</p>
                      <p className="mt-2 font-serif text-2xl tracking-tight">{network.handle}</p>
                    </div>
                    <Handshake className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>

                  <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
                    <div>
                      <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Seguidores</p>
                      <p className="mt-1 font-medium text-foreground">{network.followers}</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Alcance</p>
                      <p className="mt-1 font-medium text-foreground">{network.reach}</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Engajamento</p>
                      <p className="mt-1 font-medium text-foreground">{network.engagement}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-2)_75%,transparent),transparent_65%)]">
        <Container>
          <SectionHeading
            eyebrow="Formatos disponíveis"
            title="Opções para campanhas e ativações"
            description="Selecione formatos, defina entregáveis e ajuste valores/condições no orçamento."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnershipFormats.map((format) => (
              <Reveal key={format}>
                <Card className="p-7">
                  <p className="font-serif text-2xl tracking-tight">{format}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    Texto placeholder: descreva o que está incluso, quantidade de entregas e como fica a aprovação.
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Marcas e parcerias"
            title="Espaço para social proof"
            description="Mesmo com poucos trabalhos, mantenha a vitrine elegante e em crescimento."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {partnerBrands.map((brand) => (
              <Reveal key={brand.name}>
                <Card className="h-full p-7">
                  <p className="font-serif text-2xl tracking-tight">{brand.name}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">{brand.note}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Card className="mt-10 p-7">
            <p className="text-sm leading-6 text-foreground/75">
              Para personalizar: edite <span className="font-mono">src/content/influencer.ts</span> e troque os links de
              redes em <span className="font-mono">src/lib/site.ts</span>.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}

