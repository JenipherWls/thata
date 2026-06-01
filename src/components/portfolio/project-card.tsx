import { Card } from "@/components/ui/card";
import type { PortfolioProject } from "@/content/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Card className="h-full p-6">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-foreground/10 bg-surface px-3 py-1 text-xs text-foreground/70">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-5 font-serif text-2xl tracking-tight text-foreground">{project.title}</h3>
      <div className="mt-5 grid gap-4 text-sm">
        <div>
          <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Objetivo</p>
          <p className="mt-1 leading-6 text-foreground/75">{project.objective}</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Processo</p>
          <p className="mt-1 leading-6 text-foreground/75">{project.process}</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">Resultado</p>
          <p className="mt-1 leading-6 text-foreground/75">{project.result}</p>
        </div>
      </div>
    </Card>
  );
}
