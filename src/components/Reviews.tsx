const reviews = [
  { name: "Morgan R.", text: "Booking flow felt premium — clear tiers and instant confirmation.", stars: 5, role: "Member" },
  { name: "Casey L.", text: "Shop filters made it easy to compare specs side by side.", stars: 5, role: "Buyer" },
  { name: "Riley T.", text: "The assistant answered niche questions without generic fluff.", stars: 4, role: "Guest" },
  { name: "Jordan P.", text: "Checkout with the demo coupon worked exactly as labeled.", stars: 5, role: "Subscriber" },
];
export function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">Client reviews</h2>
        <p className="text-sm text-[var(--muted)]">Verified demo testimonials — not affiliated with real customers.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r) => (
          <article key={r.name} className="glass-panel overflow-hidden p-5 animate-rise">
            <p className="text-[var(--accent)]">{"★".repeat(r.stars)}</p>
            <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
            <p className="mt-4 text-xs text-[var(--muted)]">{r.name} · {r.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
