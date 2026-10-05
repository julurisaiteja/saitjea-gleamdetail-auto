"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
const KEY = "wishlist-v2-gleamdetail-auto";
type WCtx = { ids: string[]; toggle: (id: string) => void; has: (id: string) => boolean };
const Ctx = createContext<WCtx | null>(null);
export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => { try { setIds(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch {} }, []);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(ids)); }, [ids]);
  const value = useMemo(() => ({
    ids,
    toggle: (id: string) => setIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id])),
    has: (id: string) => ids.includes(id),
  }), [ids]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useWishlist() { const v = useContext(Ctx); if (!v) throw new Error("useWishlist"); return v; }
