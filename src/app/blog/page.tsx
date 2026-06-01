import type { Metadata } from "next";
import { blogCategories, blogPosts } from "@/content/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos e bastidores sobre publicidade, fotografia, marketing, faculdade e produção audiovisual — com estética editorial e visão profissional.",
};

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Bastidores, ideias e referências — com estética e propósito."
        subtitle="Publicidade • Fotografia • Marketing • Produção audiovisual"
        description="Posts fictícios (placeholder) para você substituir por conteúdo real. Edite em `src/content/blog.ts`."
      />

      <Section className="pt-10 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Categorias"
            title="Organize seu conteúdo por temas"
            description="Estrutura pronta para SEO e navegação."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur"
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Posts"
            title="Últimas publicações"
            description="Clique em um post para ver a página interna."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Reveal key={post.slug}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>

          <Card className="mt-10 p-7">
            <p className="text-sm leading-6 text-foreground/75">
              Para publicar de verdade: substitua placeholders por artigos, adicione imagens e considere implementar MDX
              (opcional) para escrever posts com mais liberdade.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}

