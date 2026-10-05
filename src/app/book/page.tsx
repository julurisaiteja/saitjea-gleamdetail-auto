"use client";
import { useState } from "react";
export default function BookPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="mx-auto max-w-xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold">Book</h1>
      <p className="mt-2 text-[var(--muted)]">Pick a window — demo confirmation only.</p>
      {sent ? <p className="mt-8 rounded-xl border border-[var(--border)] p-6">Request received. Check your inbox for a demo confirmation.</p> : (
        <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input required className="w-full rounded-lg border border-[var(--border)] bg-transparent p-3" placeholder="Full name" />
          <input required type="email" className="w-full rounded-lg border border-[var(--border)] bg-transparent p-3" placeholder="Email" />
          <input type="tel" className="w-full rounded-lg border border-[var(--border)] bg-transparent p-3" placeholder="Phone (optional)" />
          <input type="date" className="w-full rounded-lg border border-[var(--border)] bg-transparent p-3" />
          <textarea className="w-full rounded-lg border border-[var(--border)] bg-transparent p-3" placeholder="Notes" rows={4} />
          <button type="submit" className="w-full rounded-lg bg-[var(--accent)] py-3 font-semibold text-white">Submit request</button>
        </form>
      )}
    </main>
  );
}
