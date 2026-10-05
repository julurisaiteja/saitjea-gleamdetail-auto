"use client";
import Link from "next/link";
import { PromoStrip } from "@/components/PromoStrip";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover kenburns" autoPlay muted loop playsInline src="https://videos.pexels.com/video-files/4489546/4489546-uhd_2560_1440_25fps.mp4" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-center px-4 md:px-6">
          <h1 className="font-display text-5xl leading-tight text-white md:text-7xl">GleamDetail Auto</h1>
          <p className="mt-6 text-xl text-white/90">Film-grade gloss, bay or mobile.</p>
          <p className="mt-3 max-w-lg text-sm text-white/70">Stack wash, decon, and coating in the builder — book a bay when the rollup feels right.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/builder" className="glass-panel animate-rise px-8 py-4 text-center font-semibold text-white">Build your detail package</Link>
            <Link href="/shop" className="animate-rise px-8 py-4 text-center text-sm text-white/80 underline">Shop rituals</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-display text-3xl">Ritual layers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Prep", "Correct", "Protect"].map((step, i) => (
            <div key={step} className="glass-panel animate-drift p-8" style={{ animationDelay: `${i * 0.15}s` }}>
              <p className="text-4xl font-bold text-[var(--accent)]">0{i + 1}</p>
              <p className="mt-4 text-lg font-semibold">{step}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{step === "Prep" ? "Foam, iron, clay — contamination out." : step === "Correct" ? "Polish and clarity for paint and lights." : "Ceramic and interior sealants."}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
        <div className="glass-panel flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Bay calendar</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Climate-controlled bays with glass lounge viewing.</p>
          </div>
          <Link href="/book" className="rounded-full bg-[var(--accent)] px-8 py-3 font-semibold text-[#041018]">Hold a bay</Link>
        </div>
      </section>
      <PromoStrip />
      <Reviews />
    </main>
  );
}