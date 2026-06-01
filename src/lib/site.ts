export type NavItem = {
  label: string;
  href: string;
};

function withProtocol(urlOrHost: string) {
  const value = urlOrHost.trim().replace(/\/+$/, "");
  if (!value) return "";
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `https://${value}`;
}

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return withProtocol(explicit);

  const vercelBranch = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;
  if (vercelBranch) return withProtocol(vercelBranch);

  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercelUrl) return withProtocol(vercelUrl);

  const vercelProd = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return withProtocol(vercelProd);

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Thamyres Queiroz",
  title: "Thamyres Queiroz — Publicitária, Fotógrafa, Videomaker e Criadora de Conteúdo",
  tagline: "Publicitária • Fotógrafa • Videomaker • Criadora de Conteúdo • Atriz",
  description:
    "Estratégia, criatividade e storytelling para marcas, pessoas e projetos que querem se comunicar com autenticidade.",
  url: resolveSiteUrl(),
  keywords: [
    "Thamyres Queiroz",
    "Publicitária",
    "Fotógrafa",
    "Videomaker",
    "Criadora de Conteúdo",
    "Social Media",
    "Marketing Digital",
    "Fotografia",
    "Produção de Conteúdo",
    "Atriz e Modelo Publicitária",
  ],
  contact: {
    email: "contato@thamyresqueiroz.com",
    whatsapp: "+55 00 00000-0000",
    whatsappUrl: "https://wa.me/5500000000000",
  },
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://www.linkedin.com/",
    tiktok: "https://www.tiktok.com/@",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Quem Sou", href: "/quem-sou" },
    { label: "Publicidade", href: "/publicidade-marketing" },
    { label: "Fotografia", href: "/fotografia" },
    { label: "Videomaker", href: "/videomaker" },
    { label: "Influencer", href: "/influencer-parcerias" },
    { label: "Atriz/Modelo", href: "/atriz-modelo" },
    { label: "Blog", href: "/blog" },
    { label: "Trabalhe Comigo", href: "/trabalhe-comigo" },
    { label: "Contato", href: "/contato" },
  ] satisfies NavItem[],
} as const;

export const serviceTypes = [
  "Publicidade e Marketing",
  "Fotografia",
  "Videomaker",
  "Influencer e Parcerias",
  "Atriz e Modelo Publicitária",
  "Outro",
] as const;

export type ServiceType = (typeof serviceTypes)[number];
