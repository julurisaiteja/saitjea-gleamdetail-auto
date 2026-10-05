"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";
type CartItem = Product & { qty: number; variantId?: string; unitPrice: number };
type CartCtx = { items: CartItem[]; add: (p: Product, qty?: number, variantId?: string, unitPrice?: number) => void; remove: (id: string) => void; clear: () => void; count: number; subtotal: number };
const Ctx = createContext<CartCtx | null>(null);
const KEY = "cart-v2-gleamdetail-auto";
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { try { const r = localStorage.getItem(KEY); if (r) setItems(JSON.parse(r)); } catch {} }, []);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(items)); }, [items]);
  const value = useMemo<CartCtx>(() => ({
    items,
    add: (p, qty = 1, variantId, unitPrice) => setItems((prev) => {
      const price = unitPrice ?? p.price;
      const i = prev.findIndex((x) => x.id === p.id && x.variantId === variantId);
      if (i >= 0) { const n = [...prev]; n[i] = { ...n[i], qty: n[i].qty + qty }; return n; }
      return [...prev, { ...p, qty, variantId, unitPrice: price }];
    }),
    remove: (id) => setItems((prev) => prev.filter((x) => x.id !== id)),
    clear: () => setItems([]),
    count: items.reduce((a, b) => a + b.qty, 0),
    subtotal: items.reduce((a, b) => a + b.unitPrice * b.qty, 0),
  }), [items]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useCart() { const v = useContext(Ctx); if (!v) throw new Error("useCart"); return v; }
