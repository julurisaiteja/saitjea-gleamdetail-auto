"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/ProductCard";
import { useMemo, useState } from "react";
export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const { add } = useCart();
  const { toggle, has } = useWishlist();
  const [variantId, setVariantId] = useState(product.variants[0]?.id);
  const unitPrice = useMemo(() => {
    const v = product.variants.find((x) => x.id === variantId);
    return product.price + (v?.priceDelta ?? 0);
  }, [product, variantId]);
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)]">
          <Image src={product.image} alt={product.name} fill className="object-cover kenburns" sizes="(max-width:1024px) 100vw, 50vw" priority />
        </div>
        <div>
          <p className="text-sm text-[var(--muted)]">{product.category} · ★ {product.rating} ({product.reviewCount} reviews)</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">{product.name}</h1>
          <p className="mt-4 text-2xl">{formatPrice(unitPrice)}</p>
          {product.variants.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-semibold">Options</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button key={v.id} type="button" onClick={() => setVariantId(v.id)} className={`rounded-lg border px-4 py-2 text-sm ${variantId === v.id ? "border-[var(--accent)] bg-[var(--card)]" : "border-[var(--border)]"}`}>
                    {v.label}{v.priceDelta ? ` (${v.priceDelta > 0 ? "+" : ""}${formatPrice(v.priceDelta)})` : ""}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white" onClick={() => add(product, 1, variantId, unitPrice)}>Add to cart</button>
            <button type="button" className="rounded-lg border border-[var(--border)] px-6 py-3 font-semibold" onClick={() => toggle(product.id)}>{has(product.id) ? "Saved" : "Wishlist"}</button>
          </div>
          <ul className="mt-8 space-y-2 text-sm">{product.specs.map((s) => <li key={s}>• {s}</li>)}</ul>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-xl font-bold">FAQ</h2>
        <dl className="mt-4 space-y-4">{product.faq.map((f) => (
          <div key={f.q} className="rounded-xl border border-[var(--border)] p-4"><dt className="font-semibold">{f.q}</dt><dd className="mt-1 text-sm text-[var(--muted)]">{f.a}</dd></div>
        ))}</dl>
      </section>
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold">Related</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </section>
      )}
    </main>
  );
}
