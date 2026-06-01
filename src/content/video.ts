export const videoTypes = [
  "Reels",
  "Comerciais",
  "Vídeos institucionais",
  "Eventos",
  "Conteúdo para redes sociais",
] as const;

export type VideoItem = {
  title: string;
  embedUrl: string;
  description: string;
};

export const featuredVideos: VideoItem[] = [
  {
    title: "Reels — Campanha (placeholder)",
    embedUrl: "",
    description:
      "Cole aqui o link de embed do YouTube/Vimeo (ex.: https://www.youtube.com/embed/ID). Enquanto vazio, aparece um placeholder.",
  },
  {
    title: "Institucional — Marca (placeholder)",
    embedUrl: "",
    description:
      "Use este card para apresentar vídeos institucionais, bastidores ou cases de edição.",
  },
  {
    title: "Evento — Highlights (placeholder)",
    embedUrl: "",
    description:
      "Perfeito para reels de evento, highlights e recortes para social.",
  },
];

export const workProcess = [
  { step: "01", title: "Briefing", text: "Objetivo, referências, público e tom de voz." },
  { step: "02", title: "Planejamento", text: "Roteiro, cronograma, captação e necessidades técnicas." },
  { step: "03", title: "Captação", text: "Gravação com direção e estética alinhadas ao conceito." },
  { step: "04", title: "Edição", text: "Ritmo, cor, áudio, legendas e refinamento." },
  { step: "05", title: "Entrega", text: "Arquivos finais, variações e orientações de publicação." },
] as const;
