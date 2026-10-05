"use client";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
export function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <button type="button" className="mt-8 rounded-lg bg-[var(--accent)] px-8 py-3 text-white" onClick={() => add(product)}>
      Add to cart
    </button>
  );
}
