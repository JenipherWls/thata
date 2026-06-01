import type { Metadata } from "next";
import { Suspense } from "react";
import { BriefcaseBusiness, Camera, Mail, Phone, Play, Send } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Thamyres Queiroz: formulário, WhatsApp, e-mail e redes sociais. Solicite orçamento para publicidade, fotografia, vídeo, parcerias e trabalhos artísticos.",
};

const socials = [
  { label: "WhatsApp", href: siteConfig.contact.whatsappUrl, icon: Phone },
  { label: "E-mail", href: `mailto:${siteConfig.contact.email}`, icon: Mail },
  { label: "Instagram", href: siteConfig.social.instagram, icon: Camera },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: BriefcaseBusiness },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: Play },
] as const;

function ContactFormFallback() {
  return (
    <Card className="p-7">
      <div className="h-11 w-2/3 rounded-xl bg-foreground/5" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="h-11 rounded-xl bg-foreground/5" />
        <div className="h-11 rounded-xl bg-foreground/5" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="h-11 rounded-xl bg-foreground/5" />
        <div className="h-11 rounded-xl bg-foreground/5" />
      </div>
      <div className="mt-4 h-28 rounded-xl bg-foreground/5" />
      <div className="mt-4 h-11 w-40 rounded-full bg-burgundy/20" />
    </Card>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contato"
        title="Vamos criar algo com estética e intenção."
        subtitle="Orçamentos, parcerias e propostas"
        description="Preencha o formulário e eu retorno o mais rápido possível. Você também pode entrar direto pelo WhatsApp, e-mail ou redes sociais."
      />

      <Section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Formulário"
                  title="Conte o que você precisa"
                  description="Campos essenciais para eu entender o objetivo e responder com clareza."
                />
              </Reveal>
              <div className="mt-8">
                <Suspense fallback={<ContactFormFallback />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Links rápidos"
                  title="Outras formas de falar comigo"
                  description="Botões bem visíveis para contato imediato."
                />
              </Reveal>

              <div className="mt-8 grid gap-3">
                {socials.map((item) => (
                  <Reveal key={item.label}>
                    <a href={item.href}>
                      <Card className="group flex items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-surface">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-foreground/10 bg-surface-2/70 text-burgundy transition group-hover:bg-[linear-gradient(135deg,var(--burgundy),var(--forest))] group-hover:text-surface">
                            <item.icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="font-medium text-foreground">{item.label}</p>
                            <p className="text-sm text-foreground/60">Abrir</p>
                          </div>
                        </div>
                        <Send className="h-4 w-4 text-foreground/40 group-hover:text-burgundy" aria-hidden="true" />
                      </Card>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Card className="mt-8 p-7">
                <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Personalização</p>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  Atualize e-mail, WhatsApp e links sociais em <span className="font-mono">src/lib/site.ts</span>.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
