import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata = {
  title: "Tools",
  description: "Free, SEO-first tools and mini SaaS built for speed and privacy.",
};

export default function ToolsIndex() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">dundun ☀️</p>
        <h1 className="text-3xl font-semibold tracking-tight">Tools</h1>
        <p className="text-zinc-600">
          Minimal, fast tools. We ship quickly, rank quickly, and keep the UX
          clean.
        </p>
      </header>

      <section className="grid gap-4">
        {tools.map((t) => (
          <Link
            key={t.key}
            href={`/tools/${t.key}`}
            className="rounded-2xl border border-zinc-200 p-6 hover:bg-zinc-50"
          >
            <div className="text-lg font-medium">{t.title}</div>
            <div className="mt-2 text-sm text-zinc-600">{t.description}</div>
          </Link>
        ))}
      </section>

      <footer className="text-sm text-zinc-500">
        PR-first workflow. No direct deploys.
      </footer>
    </div>
  );
}
