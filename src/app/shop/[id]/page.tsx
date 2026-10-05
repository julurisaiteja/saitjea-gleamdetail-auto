import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { ProductDetail } from "./ProductDetail";
export function generateStaticParams() { return products.map((p) => ({ id: p.id })); }
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  return <ProductDetail product={product} related={related} />;
}
