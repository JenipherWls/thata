import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-xs text-foreground/70 backdrop-blur">
                <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
                <span>Comunicação premium com estética editorial</span>
              </div>
            </Reveal>

            <Reveal className="mt-6">
              <h1 className="font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
                {siteConfig.name.toUpperCase()}
              </h1>
              <p className="mt-4 text-base text-foreground/70 sm:text-lg">{siteConfig.tagline}</p>
              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/80 sm:text-lg">
                “{siteConfig.description}”
              </p>
            </Reveal>

            <Reveal className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/contato" variant="primary" size="lg">
                  Solicitar orçamento <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/publicidade-marketing" variant="outline" size="lg">
                  Ver portfólio
                </ButtonLink>
                <ButtonLink href="/trabalhe-comigo" variant="secondary" size="lg" className="sm:ml-auto">
                  Trabalhar comigo
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-foreground/10 bg-surface shadow-[0_60px_120px_-90px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/hero-placeholder.svg"
                  alt="Foto profissional de Thamyres Queiroz (substitua este placeholder pela imagem real)"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_20%_20%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%),linear-gradient(to_top,color-mix(in_oklab,var(--forest)_55%,transparent),transparent_55%)]"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-foreground/60">
                <p>
                  <span className="text-foreground/80">Dica:</span> troque a imagem em{" "}
                  <span className="font-mono">public/images/hero-placeholder.svg</span>
                </p>
                <p className="hidden sm:block">Premium • Feminino • Forte</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--burgundy)_30%,transparent),transparent_60%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--forest)_20%,transparent),transparent_60%)] blur-2xl"
        aria-hidden="true"
      />
    </section>
  );
}
