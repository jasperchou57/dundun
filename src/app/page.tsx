import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">dundun ☀️</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          SEO-first tools + mini SaaS
        </h1>
        <p className="text-zinc-600">
          We ship quickly, rank quickly, and keep UX clean.
        </p>
      </header>

      <section className="rounded-2xl border border-zinc-200 p-6">
        <h2 className="text-lg font-medium">Start here</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/tools"
            className="rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-zinc-800"
          >
            Browse tools
          </Link>
          <a
            href="/sitemap.xml"
            className="rounded-full border border-zinc-200 px-5 py-2 text-sm hover:bg-zinc-50"
          >
            Sitemap
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600">
        <div className="font-medium text-zinc-900">Default strategy</div>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Market: EN/US first (higher ad RPM), then expand.</li>
          <li>Monetization: ads-first, keep email/pro hooks.</li>
          <li>Link building: white-hat only.</li>
          <li>Workflow: PR-first, no direct deploys.</li>
        </ul>
      </section>
    </div>
  );
}
