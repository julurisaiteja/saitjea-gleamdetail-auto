"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { BRAND } from "@/lib/products";
export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="text-lg font-bold tracking-tight md:text-xl">GleamDetail Auto</Link>
        <nav className="flex max-w-[70vw] flex-wrap justify-end gap-3 text-xs md:max-w-none md:gap-5 md:text-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/book">Book</Link>
          <Link href="/builder">Builder</Link>
          <Link href="/tips">Tips</Link>
          <Link href="/checkout" className="font-semibold">Cart ({count})</Link>
        </nav>
      </div>
    </header>
  );
}
