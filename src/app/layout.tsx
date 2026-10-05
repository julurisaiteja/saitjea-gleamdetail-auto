import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
const heading = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400","600","700","800"] });
const body = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["300","400","600"] });
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = { title: "GleamDetail Auto", description: "Demo storefront" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="glossy-glassmorphism">
      <body className={`${heading.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
            <Footer />
            <AiAssistant />
            <StickyMobileCta primaryHref="/builder" primaryLabel="Build your detail package" />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
