"use client";
import Link from "next/link";
export function StickyMobileCta({ primaryHref, primaryLabel }: { primaryHref: string; primaryLabel: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[var(--border)] bg-[var(--bg)]/95 p-3 backdrop-blur md:hidden">
      <Link href="/shop" className="flex-1 rounded-lg border border-[var(--border)] py-3 text-center text-sm font-semibold">Shop</Link>
      <Link href={primaryHref} className="flex-[2] rounded-lg bg-[var(--accent)] py-3 text-center text-sm font-semibold text-white">{primaryLabel}</Link>
    </div>
  );
}
