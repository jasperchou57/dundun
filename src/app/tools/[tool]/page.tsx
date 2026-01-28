import { notFound } from "next/navigation";
import Script from "next/script";
import { getTool, tools } from "@/lib/tools";
import TextCaseConverter from "@/components/tools/TextCaseConverter";

export function generateStaticParams() {
  return tools.map((t) => ({ tool: t.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  const def = getTool(tool);
  if (!def) return {};

  const title = def.title;
  const description = def.description;

  return {
    title,
    description,
    alternates: { canonical: `/tools/${def.key}` },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  const def = getTool(tool);
  if (!def) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: def.title,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    description: def.description,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
    },
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-3">
        <p className="text-sm text-zinc-500">dundun ☀️</p>
        <h1 className="text-3xl font-semibold tracking-tight">{def.title}</h1>
        <p className="text-zinc-600">{def.description}</p>
      </header>

      {def.key === "text-case-converter" ? <TextCaseConverter /> : null}

      <section className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600">
        <div className="font-medium text-zinc-900">Privacy</div>
        <p className="mt-2">
          This tool runs in your browser. We don’t store your text.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600">
        <div className="font-medium text-zinc-900">Monetization (placeholder)</div>
        <p className="mt-2">
          Ads/Pro features will be added after we validate traffic and intent.
        </p>
      </section>
    </div>
  );
}
