import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";
import { Card } from "@/components/ui/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="group h-full p-7 transition hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-foreground/10 bg-surface px-3 py-1 text-xs text-foreground/70">
            {post.category}
          </span>
          <span className="text-xs text-foreground/60">{new Date(post.date).toLocaleDateString("pt-BR")}</span>
        </div>

        <h3 className="mt-5 font-serif text-2xl tracking-tight text-foreground">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-foreground/70">{post.excerpt}</p>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Ler</p>
          <ArrowUpRight className="h-4 w-4 text-foreground/40 transition group-hover:text-burgundy" aria-hidden="true" />
        </div>
      </Card>
    </Link>
  );
}
