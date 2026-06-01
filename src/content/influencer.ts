export const mediaKit = {
  nichos: ["Lifestyle", "Beleza", "Moda", "Rotina criativa", "Bastidores de produção"] as string[],
  publico: "Público majoritariamente feminino, interessado em estética, criatividade e comunicação (placeholder).",
  redes: [
    { name: "Instagram", handle: "@seuuser", followers: "XXk", reach: "XXk", engagement: "X,X%" },
    { name: "TikTok", handle: "@seuuser", followers: "XXk", reach: "XXk", engagement: "X,X%" },
  ] as Array<{ name: string; handle: string; followers: string; reach: string; engagement: string }>,
  demografia: [
    { label: "Brasil", value: "85%" },
    { label: "18–24", value: "45%" },
    { label: "25–34", value: "38%" },
    { label: "Outros", value: "17%" },
  ] as Array<{ label: string; value: string }>,
};

export const partnershipFormats = [
  "Reels",
  "Stories",
  "UGC",
  "Unboxing",
  "Reviews",
  "Eventos",
  "Embaixadora de marca",
] as const;

export const partnerBrands = [
  { name: "Marca Placeholder 01", note: "Ativação/publipost (placeholder)." },
  { name: "Marca Placeholder 02", note: "UGC + stories (placeholder)." },
  { name: "Marca Placeholder 03", note: "Evento/experiência (placeholder)." },
] as const;
