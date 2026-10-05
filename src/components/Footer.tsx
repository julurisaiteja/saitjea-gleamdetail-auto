"use client";
import { Newsletter } from "@/components/Newsletter";
export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] px-4 py-12 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Newsletter />
        <p className="mt-10 text-center text-xs text-[var(--muted)] md:text-sm">
          © 2026 Demo storefront. Payments are simulated — use test card 4242 4242 4242 4242 only; no real charges.
        </p>
      </div>
    </footer>
  );
}
