import Link from "next/link";
import { getTopic, topics } from "@/lib/topics";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const t = getTopic(topic);
  if (!t) return {};
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `/topics/${t.key}` },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const t = getTopic(topic);
  if (!t) notFound();

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">dundun ☀️</p>
        <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
        <p className="text-zinc-600">{t.description}</p>
      </header>

      <section className="grid gap-3">
        {t.pages.map((p) => (
          <Link
            key={p.slug}
            href={`/topics/${t.key}/${p.slug}`}
            className="rounded-2xl border border-zinc-200 p-5 hover:bg-zinc-50"
          >
            <div className="font-medium">{p.title}</div>
            <div className="mt-1 text-sm text-zinc-600">{p.description}</div>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600">
        <div className="font-medium text-zinc-900">Tip</div>
        <p className="mt-2">
          Each page should answer a specific query. Keep it helpful and add
          internal links back to the tool page.
        </p>
      </section>
    </div>
  );
}
