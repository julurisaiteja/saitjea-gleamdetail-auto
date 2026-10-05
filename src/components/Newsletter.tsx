"use client";
import { useState } from "react";
export function Newsletter() {
  const [ok, setOk] = useState(false);
  return (
    <div className="mx-auto max-w-xl text-center animate-rise">
      <h2 className="text-xl font-bold">Stay in the loop</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">Demo newsletter — no real emails sent.</p>
      {ok ? <p className="mt-4 text-sm text-[var(--accent)]">Thanks — you are on the demo list.</p> : (
        <form className="mt-4 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
          <input required type="email" placeholder="you@email.com" className="flex-1 rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-sm" />
          <button type="submit" className="rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white">Subscribe</button>
        </form>
      )}
    </div>
  );
}
