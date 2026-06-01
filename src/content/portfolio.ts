export type PortfolioProject = {
  title: string;
  objective: string;
  process: string;
  result: string;
  tags: string[];
};

export const marketingServices = [
  "Social Media",
  "Gestão de Redes Sociais",
  "Planejamento de Conteúdo",
  "Branding",
  "Identidade Visual",
  "Produção de Conteúdo",
  "Consultoria de Marketing",
  "Direção Criativa",
] as const;

export const marketingProjects: PortfolioProject[] = [
  {
    title: "JR Advocacia",
    tags: ["Posicionamento", "Conteúdo", "Autoridade"],
    objective:
      "Fortalecer a presença digital do escritório e comunicar confiança, clareza e especialidades com consistência.",
    process:
      "Diagnóstico de marca + calendário editorial + guidelines visuais + produção de peças (feed/stories) e otimização de linguagem.",
    result:
      "Identidade mais coesa, comunicação mais objetiva e aumento de percepção de autoridade (substitua por métricas reais).",
  },
  {
    title: "Publicitando With Me",
    tags: ["Comunidade", "Educação", "Conteúdo"],
    objective:
      "Criar uma narrativa contínua para um projeto de conteúdo que conecta publicidade, rotina criativa e bastidores da faculdade.",
    process:
      "Definição de pilares + roteiros curtos + pacotes de conteúdo para Reels + templates e identidade editorial.",
    result:
      "Publicações mais consistentes e formato escalável para crescimento orgânico (substitua por dados reais).",
  },
  {
    title: "Identidades visuais",
    tags: ["Branding", "Design", "Sistemas"],
    objective:
      "Desenvolver identidades elegantes e funcionais para marcas que precisam de presença premium e memorável.",
    process:
      "Pesquisa + direção de arte + definição de paleta + tipografia + aplicações e kit de marca.",
    result:
      "Marcas com assinatura visual mais forte, com kit pronto para redes e materiais institucionais.",
  },
  {
    title: "Artes e peças para redes",
    tags: ["Design", "Performance", "Conteúdo"],
    objective:
      "Criar artes alinhadas à estratégia e ao tom de voz, com foco em clareza, estética e conversão.",
    process:
      "Briefing + variações de layout + testes de copy + otimização por performance semanal.",
    result:
      "Feed mais organizado e conteúdos com leitura rápida (substitua por exemplos e números).",
  },
  {
    title: "Planejamentos",
    tags: ["Estratégia", "Pilares", "Calendário"],
    objective:
      "Estruturar planejamento de conteúdo com visão de marca, consistência e eficiência de produção.",
    process:
      "Mapeamento de público + objetivos + pauta mensal + definição de formatos, frequência e roteiro base.",
    result:
      "Fluxo de criação mais leve e previsível, com maior consistência de mensagens.",
  },
  {
    title: "Campanhas",
    tags: ["Criativo", "Direção", "Lançamento"],
    objective:
      "Planejar e executar campanhas com storytelling, estética e CTA claros para fortalecer a percepção de valor.",
    process:
      "Conceito + key visual + roteiro + cronograma + peças e acompanhamento de execução.",
    result:
      "Campanhas mais alinhadas ao posicionamento e à conversão (substitua por resultado real).",
  },
];
