"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, Send } from "lucide-react";
import { siteConfig, serviceTypes, type ServiceType } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FormState = {
  nome: string;
  email: string;
  whatsapp: string;
  servico: ServiceType;
  mensagem: string;
};

const defaultState: FormState = {
  nome: "",
  email: "",
  whatsapp: "",
  servico: "Publicidade e Marketing",
  mensagem: "",
};

function safeService(value: string | null): ServiceType {
  if (!value) return defaultState.servico;
  const decoded = decodeURIComponent(value);
  return (serviceTypes as readonly string[]).includes(decoded) ? (decoded as ServiceType) : defaultState.servico;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = useMemo(() => safeService(searchParams.get("servico")), [searchParams]);

  const [state, setState] = useState<FormState>({ ...defaultState, servico: preselected });
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [error, setError] = useState<string>("");

  const mailtoHref = useMemo(() => {
    const subject = `Contato via site — ${state.servico}`;
    const body = [
      `Nome: ${state.nome}`,
      `E-mail: ${state.email}`,
      `WhatsApp: ${state.whatsapp}`,
      `Serviço: ${state.servico}`,
      "",
      state.mensagem,
    ].join("\n");
    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [state]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    if (!state.nome.trim()) return "Informe seu nome.";
    if (!state.email.trim()) return "Informe seu e-mail.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) return "Informe um e-mail válido.";
    if (!state.whatsapp.trim()) return "Informe seu WhatsApp.";
    if (!state.mensagem.trim()) return "Conte um pouco sobre o que você precisa.";
    return "";
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = validate();
    if (message) {
      setStatus("error");
      setError(message);
      return;
    }

    setStatus("success");
    setError("");
    window.location.href = mailtoHref;
  }

  return (
    <Card className="p-7">
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-foreground/80" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              value={state.nome}
              onChange={(e) => update("nome", e.target.value)}
              className="h-11 w-full rounded-xl border border-foreground/10 bg-surface/70 px-4 text-sm outline-none backdrop-blur focus:border-gold/60"
              placeholder="Seu nome"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-foreground/80" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={state.email}
              onChange={(e) => update("email", e.target.value)}
              className="h-11 w-full rounded-xl border border-foreground/10 bg-surface/70 px-4 text-sm outline-none backdrop-blur focus:border-gold/60"
              placeholder="voce@exemplo.com"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-foreground/80" htmlFor="whatsapp">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              value={state.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
              className="h-11 w-full rounded-xl border border-foreground/10 bg-surface/70 px-4 text-sm outline-none backdrop-blur focus:border-gold/60"
              placeholder="+55 (00) 00000-0000"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-foreground/80" htmlFor="servico">
              Tipo de serviço desejado
            </label>
            <select
              id="servico"
              value={state.servico}
              onChange={(e) => update("servico", e.target.value as ServiceType)}
              className="h-11 w-full rounded-xl border border-foreground/10 bg-surface/70 px-4 text-sm outline-none backdrop-blur focus:border-gold/60"
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-foreground/80" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            value={state.mensagem}
            onChange={(e) => update("mensagem", e.target.value)}
            className="min-h-28 w-full rounded-xl border border-foreground/10 bg-surface/70 px-4 py-3 text-sm outline-none backdrop-blur focus:border-gold/60"
            placeholder="Conte o objetivo, prazo, referências e o que você espera do projeto..."
          />
        </div>

        {status === "error" ? (
          <p className="rounded-xl border border-burgundy/20 bg-burgundy/5 px-4 py-3 text-sm text-burgundy">{error}</p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground" href={siteConfig.contact.whatsappUrl}>
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              WhatsApp
            </a>
            <a className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground" href={`mailto:${siteConfig.contact.email}`}>
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              E-mail
            </a>
          </div>

          <Button type="submit" variant="primary">
            Enviar <Send className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        {status === "success" ? (
          <p className={cn("text-sm text-foreground/70")}>
            Abrindo seu e-mail para enviar a mensagem. Se preferir, copie os dados e mande via WhatsApp.
          </p>
        ) : null}
      </form>
    </Card>
  );
}
