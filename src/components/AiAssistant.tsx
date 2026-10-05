"use client";
import { useState } from "react";
const faqs = [{"q":"How does the detail builder price rollup work?","a":"Stack wash, decon, and coating tiers — totals update live before bay booking."},{"q":"When does GLEAM20 apply?","a":"First shop or builder checkout this month."},{"q":"Mobile vs in-bay?","a":"Builder ends with bay slot or mobile radius selection."},{"q":"Ceramic cure time?","a":"Keep dry 24 hours — noted on your booking confirmation."}] as { q: string; a: string }[];
export function AiAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="glass-panel overflow-hidden mb-3 max-h-[60vh] max-w-sm overflow-y-auto p-4 animate-rise">
          <p className="font-semibold">AI Assistant</p>
          <ul className="mt-3 space-y-4 text-sm">
            {faqs.map((f) => (
              <li key={f.q}><p className="font-medium">{f.q}</p><p className="mt-1 text-[var(--muted)]">{f.a}</p></li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" onClick={() => setOpen((o) => !o)} className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg">Ask AI</button>
    </div>
  );
}
