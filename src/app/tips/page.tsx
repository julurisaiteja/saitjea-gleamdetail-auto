export default function TipsPage() {
  const tips = [{"t":"Two-bucket wash","b":"Keep wheels and lower panels for last to avoid redepositing grit."},{"t":"Decon before coat","b":"Iron and tar removal is non-negotiable before ceramic layers."},{"t":"Cure window","b":"Hold off on rain and sprinklers 24h after coating."}];
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold">Care tips</h1>
      <div className="mt-10 space-y-6">
        {tips.map((x) => (
          <article key={x.t} className="rounded-2xl border border-[var(--border)] p-6 animate-rise">
            <h2 className="font-semibold">{x.t}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{x.b}</p>
          </article>
        ))}
      </div>
    </main>
  );
}