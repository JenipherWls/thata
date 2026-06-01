export const blogCategories = [
  "Bastidores da publicidade",
  "Fotografia",
  "Marketing",
  "Faculdade",
  "Produção audiovisual",
  "Vida criativa",
  "Publicitando With Me",
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  category: (typeof blogCategories)[number];
  date: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-criar-um-calendario-editorial-premium",
    title: "Como criar um calendário editorial premium (sem perder autenticidade)",
    category: "Marketing",
    date: "2026-03-10",
    excerpt:
      "Um guia prático (placeholder) para organizar pauta, formatos e consistência sem engessar a criatividade.",
    content: [
      "Este post é um placeholder. Substitua por um artigo real com sua voz e seus exemplos.",
      "Estruture em: objetivo, pilares, frequência, formatos e rotina de produção.",
      "Dica: finalize com um checklist e um CTA para orçamento/consultoria.",
    ],
  },
  {
    slug: "bastidores-de-um-ensaio-editorial",
    title: "Bastidores de um ensaio editorial: direção, luz e narrativa",
    category: "Fotografia",
    date: "2026-02-18",
    excerpt:
      "Do briefing à entrega: como conduzir um ensaio com estética editorial e resultado consistente (placeholder).",
    content: [
      "Este post é um placeholder. Adicione fotos, set-ups de luz e referências visuais.",
      "Explique seu processo: moodboard, direção, captura e edição.",
      "Inclua um bloco com 'erros comuns' e como evitá-los.",
    ],
  },
  {
    slug: "roteiro-curto-para-reels-que-performam",
    title: "Roteiro curto para Reels que performam (com storytelling)",
    category: "Produção audiovisual",
    date: "2026-01-28",
    excerpt:
      "Uma estrutura simples para vídeos curtos com gancho, clareza e estética (placeholder).",
    content: [
      "Este post é um placeholder. Substitua por exemplos reais e prints de métricas.",
      "Sugestão de estrutura: Hook (0–2s), Prova (3–7s), Valor (8–20s), CTA (final).",
      "Inclua versões do roteiro para diferentes nichos e marcas.",
    ],
  },
  {
    slug: "vida-criativa-consistencia-sem-burnout",
    title: "Vida criativa: consistência sem burnout (rotina realista)",
    category: "Vida criativa",
    date: "2025-12-05",
    excerpt:
      "Como equilibrar estudo, trabalho e criação com um sistema leve e possível (placeholder).",
    content: [
      "Este post é um placeholder. Conte sua experiência com honestidade e autoridade.",
      "Sugestão: rotinas, blocos de tempo, prioridades e descanso.",
      "Finalize com um lembrete: qualidade + consistência > perfeccionismo.",
    ],
  },
  {
    slug: "publicitando-with-me-e-a-rotina-de-faculdade",
    title: "Publicitando With Me: rotina de faculdade e bastidores de criação",
    category: "Publicitando With Me",
    date: "2025-11-14",
    excerpt:
      "Ideias de conteúdo para compartilhar a jornada na publicidade com estética e narrativa (placeholder).",
    content: [
      "Este post é um placeholder. Adicione sua história e os formatos que você usa no dia a dia.",
      "Sugestão: quadros fixos, bastidores, desafios e aprendizados.",
      "Inclua CTAs para parcerias, convites e colaborações.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
