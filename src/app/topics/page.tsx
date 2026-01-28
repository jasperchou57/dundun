import Link from "next/link";
import { topics } from "@/lib/topics";

export const metadata = {
  title: "Topics",
  description: "Topic clusters for programmatic SEO pages.",
};

export default function TopicsIndex() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">dundun ☀️</p>
        <h1 className="text-3xl font-semibold tracking-tight">Topics</h1>
        <p className="text-zinc-600">
          Topic clusters let us ship many long-tail pages safely (white-hat) and
          keep internal linking clean.
        </p>
      </header>

      <section className="grid gap-4">
        {topics.map((t) => (
          <Link
            key={t.key}
            href={`/topics/${t.key}`}
            className="rounded-2xl border border-zinc-200 p-6 hover:bg-zinc-50"
          >
            <div className="text-lg font-medium">{t.title}</div>
            <div className="mt-2 text-sm text-zinc-600">{t.description}</div>
            <div className="mt-2 text-xs text-zinc-500">
              {t.pages.length} pages
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
