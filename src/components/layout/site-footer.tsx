import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="text-sm text-surface-2/70 hover:text-surface-2 transition-colors" href={href}>
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest text-surface-2">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-tight">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-surface-2/70">{siteConfig.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full border border-surface-2/15 bg-surface-2/5 px-4 py-2 text-sm text-surface-2/80 hover:bg-surface-2/10 hover:text-surface-2 transition"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
              <a
                className="rounded-full border border-surface-2/15 bg-surface-2/5 px-4 py-2 text-sm text-surface-2/80 hover:bg-surface-2/10 hover:text-surface-2 transition"
                href={siteConfig.contact.whatsappUrl}
              >
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.24em] uppercase text-surface-2/70">Site</p>
              <div className="flex flex-col gap-2">
                <FooterLink href="/quem-sou">Quem Sou</FooterLink>
                <FooterLink href="/trabalhe-comigo">Trabalhe Comigo</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/contato">Contato</FooterLink>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs tracking-[0.24em] uppercase text-surface-2/70">Portfólio</p>
              <div className="flex flex-col gap-2">
                <FooterLink href="/publicidade-marketing">Publicidade e Marketing</FooterLink>
                <FooterLink href="/fotografia">Fotografia</FooterLink>
                <FooterLink href="/videomaker">Videomaker</FooterLink>
                <FooterLink href="/influencer-parcerias">Influencer e Parcerias</FooterLink>
                <FooterLink href="/atriz-modelo">Atriz e Modelo Publicitária</FooterLink>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs tracking-[0.24em] uppercase text-surface-2/70">Redes</p>
              <div className="flex flex-col gap-2">
                <a className="text-sm text-surface-2/70 hover:text-surface-2 transition-colors" href={siteConfig.social.instagram}>
                  Instagram
                </a>
                <a className="text-sm text-surface-2/70 hover:text-surface-2 transition-colors" href={siteConfig.social.linkedin}>
                  LinkedIn
                </a>
                <a className="text-sm text-surface-2/70 hover:text-surface-2 transition-colors" href={siteConfig.social.tiktok}>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-surface-2/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-surface-2/60">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-surface-2/60">Feito com Next.js • Tailwind • Framer Motion</p>
        </div>
      </Container>
    </footer>
  );
}
