export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">dundun ☀️</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          SEO-first tools + mini SaaS
        </h1>
        <p className="text-zinc-600">
          This repo is the bootstrap. Next step: pick a keyword cluster, ship a
          useful tool, then scale landing pages.
        </p>
      </header>

      <section className="rounded-2xl border border-zinc-200 p-6">
        <h2 className="text-lg font-medium">Today’s next action</h2>
        <ol className="mt-3 list-inside list-decimal space-y-2 text-zinc-700">
          <li>Decide target market: EN/US vs EN/Global (ads RPM vs volume).</li>
          <li>Pick 1 keyword cluster (new term / low competition).</li>
          <li>Ship a minimal tool page (free) + newsletter signup.</li>
        </ol>
      </section>

      <footer className="text-sm text-zinc-500">
        PR-first workflow. No direct deploys.
      </footer>
    </div>
  );
}
