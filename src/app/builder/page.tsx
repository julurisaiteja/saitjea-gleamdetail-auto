"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { formatPrice } from "@/lib/products";

const STORAGE_KEY = "gleam-detail-builder";

const vehicleTypes = [
  { id: "compact", label: "Compact / sedan", multiplier: 1, baseMins: 45 },
  { id: "suv", label: "SUV / crossover", multiplier: 1.15, baseMins: 60 },
  { id: "truck", label: "Truck / van", multiplier: 1.25, baseMins: 75 },
  { id: "exotic", label: "Exotic / low clearance", multiplier: 1.4, baseMins: 90 },
];

const tiers = [
  { id: "wash", label: "Mirror wash", price: 89, mins: 25 },
  { id: "decon", label: "Paint decon", price: 59, mins: 35 },
  { id: "coat", label: "Ceramic coating", price: 349, mins: 120 },
  { id: "int", label: "Interior ritual", price: 129, mins: 50 },
  { id: "wheel", label: "Wheel polish", price: 79, mins: 30 },
];

type BuilderState = { vehicle: string; sel: Record<string, boolean> };

function loadState(): BuilderState {
  if (typeof window === "undefined") return { vehicle: "compact", sel: { wash: true } };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as BuilderState;
  } catch {
    /* ignore */
  }
  return { vehicle: "compact", sel: { wash: true } };
}

export default function BuilderPage() {
  const [vehicle, setVehicle] = useState("compact");
  const [sel, setSel] = useState<Record<string, boolean>>({ wash: true });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const s = loadState();
    setVehicle(s.vehicle);
    setSel(s.sel);
    setHydrated(true);
  }, []);

  const persist = useCallback((v: string, nextSel: Record<string, boolean>) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ vehicle: v, sel: nextSel }));
    } catch {
      /* ignore */
    }
  }, []);

  const vehicleMeta = vehicleTypes.find((v) => v.id === vehicle) ?? vehicleTypes[0];
  const selectedTiers = tiers.filter((t) => sel[t.id]);

  const subtotal = useMemo(
    () => selectedTiers.reduce((a, t) => a + Math.round(t.price * vehicleMeta.multiplier), 0),
    [selectedTiers, vehicleMeta.multiplier],
  );

  const durationMins = useMemo(() => {
    const addOn = selectedTiers.reduce((a, t) => a + t.mins, 0);
    return Math.round(vehicleMeta.baseMins + addOn * 0.85);
  }, [selectedTiers, vehicleMeta.baseMins]);

  const durationLabel =
    durationMins >= 120 ? `${Math.floor(durationMins / 60)}h ${durationMins % 60}m bay time` : `~${durationMins} min bay time`;

  const bookHref = useMemo(() => {
    const params = new URLSearchParams();
    params.set("vehicle", vehicle);
    params.set("total", String(subtotal));
    params.set("mins", String(durationMins));
    selectedTiers.forEach((t) => params.append("tier", t.id));
    return `/book?${params.toString()}`;
  }, [vehicle, subtotal, durationMins, selectedTiers]);

  if (!hydrated) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="glass-panel h-40 animate-pulse" />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <div className="glass-panel overflow-hidden p-1">
        <div className="rounded-[1.15rem] bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5 p-8 md:p-10">
          <h1 className="font-display text-4xl md:text-5xl">Detail builder</h1>
          <p className="mt-2 max-w-xl text-[var(--muted)]">
            Stack glass-clear layers for your bay — vehicle size adjusts price and time; your package restores on this tab.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Vehicle profile</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {vehicleTypes.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => {
                setVehicle(v.id);
                persist(v.id, sel);
              }}
              className={`glass-panel p-5 text-left transition-all ${vehicle === v.id ? "ring-2 ring-[var(--accent)] shadow-[0_0_24px_rgba(56,189,248,0.25)]" : "opacity-80 hover:opacity-100"}`}
            >
              <span className="font-semibold">{v.label}</span>
              <span className="mt-1 block text-xs text-[var(--muted)]">
                {v.multiplier === 1 ? "Base pricing" : `×${v.multiplier} surface factor`}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Service layers</p>
        <div className="mt-4 grid gap-4">
          {tiers.map((t) => {
            const linePrice = Math.round(t.price * vehicleMeta.multiplier);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  const next = { ...sel, [t.id]: !sel[t.id] };
                  setSel(next);
                  persist(vehicle, next);
                }}
                className={`glass-panel flex items-center justify-between gap-4 p-6 text-left ${sel[t.id] ? "ring-2 ring-[var(--accent)]" : ""}`}
              >
                <div>
                  <span className="font-semibold">{t.label}</span>
                  <span className="mt-1 block text-xs text-[var(--muted)]">+{t.mins} min</span>
                </div>
                <span className="font-display text-lg">{formatPrice(linePrice)}</span>
              </button>
            );
          })}
        </div>
      </section>

      <aside className="glass-panel mt-10 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Add-ons summary</p>
        {selectedTiers.length === 0 ? (
          <p className="mt-4 text-sm text-[var(--muted)]">Select at least one layer to book.</p>
        ) : (
          <ul className="mt-4 space-y-2 text-sm">
            {selectedTiers.map((t) => (
              <li key={t.id} className="flex justify-between border-b border-[var(--border)]/50 pb-2">
                <span>{t.label}</span>
                <span className="text-[var(--muted)]">{formatPrice(Math.round(t.price * vehicleMeta.multiplier))}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6 text-sm text-[var(--muted)]">Estimated duration</p>
        <p className="font-display text-2xl text-[var(--accent)]">{durationLabel}</p>
      </aside>

      <div className="glass-panel mt-10 flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-[var(--muted)]">Package total · {vehicleMeta.label}</p>
          <p className="text-3xl font-bold">{formatPrice(subtotal)}</p>
        </div>
        <Link
          href={selectedTiers.length ? bookHref : "#"}
          aria-disabled={!selectedTiers.length}
          className={`rounded-full px-8 py-4 text-center font-semibold text-[#041018] ${selectedTiers.length ? "bg-[var(--accent)]" : "pointer-events-none bg-[var(--muted)]/40"}`}
        >
          Book bay with this package
        </Link>
      </div>
    </main>
  );
}
