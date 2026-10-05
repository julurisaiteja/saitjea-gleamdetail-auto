export type ProductVariant = { id: string; label: string; priceDelta: number };
export type Product = {
  id: string; name: string; price: number; image: string; category: string; tag: string;
  rating: number; reviewCount: number; specs: string[]; variants: ProductVariant[];
  faq: { q: string; a: string }[];
};
