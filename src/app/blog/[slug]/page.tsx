import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/content/blog";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <div className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para o blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-foreground/10 bg-surface px-3 py-1 text-xs text-foreground/70">
              {post.category}
            </span>
            <span className="text-xs text-foreground/60">{new Date(post.date).toLocaleDateString("pt-BR")}</span>
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-foreground/80 sm:text-lg">{post.excerpt}</p>

          <Card className="mt-10 p-8">
            <article className="space-y-5">
              {post.content.map((p, index) => (
                <p key={index} className="text-base leading-7 text-foreground/80">
                  {p}
                </p>
              ))}
            </article>
          </Card>

          <Card className="mt-8 p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-2xl tracking-tight">Quer levar isso para o seu projeto?</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Conte seu objetivo e eu retorno com ideias e orçamento (placeholder).
                </p>
              </div>
              <div className="flex gap-3">
                <ButtonLink href="/contato" variant="primary">
                  Falar comigo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/trabalhe-comigo" variant="outline">
                  Trabalhe comigo
                </ButtonLink>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

