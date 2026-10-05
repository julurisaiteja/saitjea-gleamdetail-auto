"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
export function ProductCard({ product, layout = "grid" }: { product: Product; layout?: "grid" | "rail" }) {
  const { add } = useCart();
  const shell = layout === "rail" ? "glass-panel overflow-hidden min-w-[260px]" : "glass-panel overflow-hidden";
  return (
    <article className={shell}>
      <Link href={`/shop/${product.id}`} className="relative block aspect-[4/3]">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width:768px) 80vw, 25vw" />
      </Link>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between text-xs text-[var(--muted)]">
          <span>{product.category}</span>
          <span>★ {product.rating} ({product.reviewCount})</span>
        </div>
        <h3 className="font-semibold leading-snug"><Link href={`/shop/${product.id}`}>{product.name}</Link></h3>
        <p className="text-lg">{formatPrice(product.price)}</p>
        <button type="button" className="w-full rounded-lg bg-[var(--accent)] py-2.5 text-sm font-semibold text-white" onClick={() => add(product)}>Quick add</button>
      </div>
    </article>
  );
}
