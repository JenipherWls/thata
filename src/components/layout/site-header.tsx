"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

type NavGroup = {
  label: string;
  href?: string;
  items?: Array<{ label: string; href: string; description?: string }>;
};

const easing = [0.16, 1, 0.3, 1] as const;

const nav: NavGroup[] = [
  { label: "Quem Sou", href: "/quem-sou" },
  {
    label: "Portfólio",
    items: [
      {
        label: "Publicidade e Marketing",
        href: "/publicidade-marketing",
        description: "Estratégia, social media, branding e direção criativa.",
      },
      {
        label: "Fotografia",
        href: "/fotografia",
        description: "Ensaios editoriais, corporativos e eventos.",
      },
      {
        label: "Videomaker",
        href: "/videomaker",
        description: "Reels, comerciais e conteúdo para redes sociais.",
      },
      {
        label: "Influencer e Parcerias",
        href: "/influencer-parcerias",
        description: "UGC, publis, ativações e embaixadoria.",
      },
      {
        label: "Atriz e Modelo Publicitária",
        href: "/atriz-modelo",
        description: "Perfil artístico, book e materiais.",
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Trabalhe Comigo", href: "/trabalhe-comigo" },
  { label: "Contato", href: "/contato" },
];

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3 py-2 text-sm transition-colors hover:bg-foreground/5",
        active ? "text-burgundy" : "text-foreground/80 hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setPortfolioOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!portfolioOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setPortfolioOpen(false);
    }

    function onPointerDown(event: MouseEvent | PointerEvent) {
      const target = event.target as Node | null;
      if (!target) return;
      if (!portfolioRef.current) return;
      if (!portfolioRef.current.contains(target)) setPortfolioOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [portfolioOpen]);

  const isActive = useMemo(() => {
    return (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-surface/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[linear-gradient(135deg,var(--burgundy),var(--forest))] shadow-sm ring-1 ring-foreground/10">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_6px_color-mix(in_oklab,var(--gold)_14%,transparent)]" />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-sm tracking-[0.14em] text-foreground">{siteConfig.name.toUpperCase()}</p>
              <p className="hidden text-xs text-foreground/60 sm:block">{siteConfig.tagline}</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            if (item.items?.length) {
              const anyActive = item.items.some((child) => isActive(child.href));
              return (
                <div key={item.label} className="relative" ref={portfolioRef}>
                  <button
                    type="button"
                    onClick={() => setPortfolioOpen((v) => !v)}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm transition-colors hover:bg-foreground/5",
                      anyActive ? "text-burgundy" : "text-foreground/80 hover:text-foreground",
                    )}
                    aria-expanded={portfolioOpen}
                    aria-haspopup="menu"
                  >
                    {item.label}
                  </button>
                  <AnimatePresence>
                    {portfolioOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25, ease: easing }}
                        className="absolute right-0 mt-2 w-[420px] overflow-hidden rounded-2xl border border-foreground/10 bg-surface/90 p-2 shadow-xl backdrop-blur-xl"
                        role="menu"
                      >
                        <div className="grid gap-1">
                          {item.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "rounded-xl px-4 py-3 transition hover:bg-foreground/5",
                                isActive(child.href) ? "bg-foreground/5" : "",
                              )}
                              role="menuitem"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-sm font-medium text-foreground">{child.label}</p>
                                  {child.description ? (
                                    <p className="mt-1 text-xs leading-5 text-foreground/60">{child.description}</p>
                                  ) : null}
                                </div>
                                <ArrowUpRight className="mt-0.5 h-4 w-4 text-foreground/40" aria-hidden="true" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink key={item.href} href={item.href!} active={isActive(item.href!)}>
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contato" variant="outline" size="sm">
            Solicitar orçamento
          </ButtonLink>
          <ButtonLink href="/publicidade-marketing" variant="primary" size="sm">
            Ver portfólio
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-surface/70 text-foreground/80 backdrop-blur transition hover:bg-surface lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: easing }}
            className="border-t border-foreground/10 bg-surface/80 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                <Link className="rounded-xl px-4 py-3 text-sm hover:bg-foreground/5" href="/">
                  Home
                </Link>
                {nav.map((item) =>
                  item.items?.length ? (
                    <div key={item.label} className="rounded-xl border border-foreground/10 bg-surface/70">
                      <div className="px-4 py-3 text-xs tracking-[0.24em] uppercase text-foreground/60">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-1 px-2 pb-2">
                        {item.items.map((child) => (
                          <Link
                            key={child.href}
                            className={cn(
                              "rounded-xl px-3 py-3 text-sm hover:bg-foreground/5",
                              isActive(child.href) ? "text-burgundy" : "",
                            )}
                            href={child.href}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm hover:bg-foreground/5",
                        item.href && isActive(item.href) ? "text-burgundy" : "",
                      )}
                      href={item.href!}
                    >
                      {item.label}
                    </Link>
                  ),
                )}

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <ButtonLink href="/contato" variant="outline">
                    Solicitar orçamento
                  </ButtonLink>
                  <ButtonLink href="/trabalhe-comigo" variant="primary">
                    Trabalhar comigo
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
