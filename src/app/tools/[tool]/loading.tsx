export default function Loading() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-6 py-16">
      <div className="h-4 w-24 rounded bg-zinc-200" />
      <div className="h-8 w-2/3 rounded bg-zinc-200" />
      <div className="h-4 w-full rounded bg-zinc-100" />
      <div className="h-4 w-5/6 rounded bg-zinc-100" />
    </div>
  );
}
