"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { COUPON, COUPON_OFF, formatPrice } from "@/lib/products";
export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [code, setCode] = useState("");
  const [card, setCard] = useState("");
  const [paid, setPaid] = useState(false);
  const discount = code.toUpperCase() === COUPON ? subtotal * (Number(COUPON_OFF) / 100) : 0;
  const total = Math.max(0, subtotal - discount);
  if (paid) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center md:px-6">
        <h1 className="text-3xl font-bold">Payment successful</h1>
        <p className="mt-4 text-[var(--muted)]">Demo Stripe charge recorded — no real payment processed.</p>
        <Link href="/shop" className="mt-8 inline-block text-[var(--accent)] underline">Continue shopping</Link>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-lg px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <ul className="mt-6 space-y-2 border-b border-[var(--border)] pb-4 text-sm">{items.map((i) => <li key={i.id + (i.variantId || "")} className="flex justify-between"><span>{i.name} × {i.qty}</span><span>{formatPrice(i.unitPrice * i.qty)}</span></li>)}</ul>
      <p className="mt-4 flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></p>
      <input className="mt-4 w-full rounded-lg border border-[var(--border)] bg-transparent p-3" placeholder={`Coupon (${COUPON})`} value={code} onChange={(e) => setCode(e.target.value)} />
      {discount > 0 && <p className="mt-2 text-sm text-[var(--accent)]">Coupon applied −{formatPrice(discount)}</p>}
      <p className="mt-4 flex justify-between text-lg font-bold"><span>Total</span><span>{formatPrice(total)}</span></p>
      <label className="mt-6 block text-sm font-semibold">Card (demo)</label>
      <input className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent p-3" placeholder="4242 4242 4242 4242" value={card} onChange={(e) => setCard(e.target.value)} />
      <button type="button" className="mt-6 w-full rounded-lg bg-[var(--accent)] py-3 font-semibold text-white disabled:opacity-40" disabled={items.length === 0 || card.replace(/\s/g, "").length < 8} onClick={() => { clear(); setPaid(true); }}>
        Pay with Stripe (demo)
      </button>
    </main>
  );
}
