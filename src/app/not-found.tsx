import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-10 sm:pt-14">
      <Container>
        <Card className="p-10">
          <p className="text-xs tracking-[0.24em] uppercase text-foreground/60">404</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight">Página não encontrada</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/70">
            O link pode estar incorreto ou a página foi movida. Use o menu ou volte para a Home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" variant="primary">
              Voltar para Home <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <Link href="/contato" className="inline-flex items-center rounded-full px-5 py-3 text-sm text-foreground/70 hover:text-foreground">
              Ir para Contato
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}

