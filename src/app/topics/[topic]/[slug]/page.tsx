import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getTopicPage, topics } from "@/lib/topics";

export function generateStaticParams() {
  return topics.flatMap((t) => t.pages.map((p) => ({ topic: t.key, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const p = getTopicPage(topic, slug);
  if (!p) return {};

  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/topics/${topic}/${slug}` },
  };
}

export default async function TopicSlugPage({
  params,
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const p = getTopicPage(topic, slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: p.title,
    description: p.description,
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
      <Script
        id="ld-json-topic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-3">
        <p className="text-sm text-zinc-500">dundun ☀️</p>
        <h1 className="text-3xl font-semibold tracking-tight">{p.title}</h1>
        <p className="text-zinc-600">{p.description}</p>
      </header>

      <section className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-700">
        <p>
          This is a programmatic SEO page template. Next step: fill with a short,
          helpful explanation + examples + FAQs.
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Answer the query intent clearly.</li>
          <li>Add examples.</li>
          <li>Add 3–5 FAQs.</li>
          <li>Link to the relevant tool page.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-zinc-200 p-6">
        <div className="text-sm font-medium">Useful links</div>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link
            className="rounded-full border border-zinc-200 px-4 py-2 hover:bg-zinc-50"
            href="/tools/text-case-converter"
          >
            Text Case Converter tool
          </Link>
          <Link
            className="rounded-full border border-zinc-200 px-4 py-2 hover:bg-zinc-50"
            href={`/topics/${topic}`}
          >
            Back to topic
          </Link>
        </div>
      </section>
    </div>
  );
}
