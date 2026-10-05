import { ShopBrowse } from "@/components/ShopBrowse";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="glass-panel p-8 md:p-10">
        <h1 className="font-display text-4xl md:text-5xl">Bay retail</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Pro-grade compounds, towels, and ceramic kits — search the rack, sort by rating, open any SKU for variants.
        </p>
      </div>
      <ShopBrowse />
    </main>
  );
}
