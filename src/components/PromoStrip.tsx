"use client";
import { COUPON, COUPON_OFF } from "@/lib/products";
export function PromoStrip() {
  return (
    <section aria-label="Offers" className="mx-auto my-14 max-w-6xl overflow-hidden border-y border-[var(--border)] py-3">
      <p className="marquee-track whitespace-nowrap text-xs uppercase tracking-[0.25em] md:text-sm">
        <span className="mx-8">Limited demo offer — code <strong className="text-[var(--accent)]">{COUPON}</strong> for {COUPON_OFF}% off qualifying checkout</span>
        <span className="mx-8">Limited demo offer — code <strong className="text-[var(--accent)]">{COUPON}</strong> for {COUPON_OFF}% off qualifying checkout</span>
      </p>
    </section>
  );
}
