import type { Product } from "./types";
export type { Product } from "./types";
export const COUPON = "GLEAM20";
export const COUPON_OFF = 20;
export const BRAND = "GleamDetail Auto";
export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}
export const products: Product[] = [
  {
    "id": "gd-1",
    "name": "Mirror Gloss Wash",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1619642751034-765df0367ffc?w=800",
    "tag": "Wash",
    "category": "Exterior",
    "specs": [
      "Two-bucket method",
      "SiO2 rinse"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Undercarriage",
        "priceDelta": 40
      }
    ],
    "faq": [
      {
        "q": "Safe for PPF?",
        "a": "Yes — neutral pH."
      }
    ],
    "rating": 4.9,
    "reviewCount": 412
  },
  {
    "id": "gd-2",
    "name": "Ceramic Shield Kit",
    "price": 349,
    "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    "tag": "Coating",
    "category": "Coating",
    "specs": [
      "3-year warranty",
      "Hydrophobic test"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "5-year tier",
        "priceDelta": 220
      }
    ],
    "faq": [
      {
        "q": "Cure time?",
        "a": "Keep dry 24h."
      }
    ],
    "rating": 4.8,
    "reviewCount": 188
  },
  {
    "id": "gd-3",
    "name": "Interior Ritual Set",
    "price": 129,
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    "tag": "Interior",
    "category": "Interior",
    "specs": [
      "Leather feed",
      "UV protect"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Ozone treatment",
        "priceDelta": 75
      }
    ],
    "faq": [
      {
        "q": "Pet hair?",
        "a": "Included in ritual."
      }
    ],
    "rating": 4.7,
    "reviewCount": 256
  },
  {
    "id": "gd-4",
    "name": "Wheel Forge Polish",
    "price": 79,
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    "tag": "Wheels",
    "category": "Exterior",
    "specs": [
      "Iron decon",
      "Ceramic seal"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Calipers",
        "priceDelta": 35
      }
    ],
    "faq": [
      {
        "q": "Track use?",
        "a": "Add track prep package."
      }
    ],
    "rating": 4.9,
    "reviewCount": 143
  },
  {
    "id": "gd-5",
    "name": "Paint Decon Foam",
    "price": 59,
    "image": "https://images.unsplash.com/photo-1542362567-b07e54368853?w=800",
    "tag": "Decon",
    "category": "Prep",
    "specs": [
      "Clay follow-up",
      "Tar remover"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Double pass",
        "priceDelta": 45
      }
    ],
    "faq": [
      {
        "q": "New paint?",
        "a": "Wait 60 days post-repair."
      }
    ],
    "rating": 4.6,
    "reviewCount": 98
  },
  {
    "id": "gd-6",
    "name": "Headlight Clarity",
    "price": 99,
    "image": "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800",
    "tag": "Lights",
    "category": "Restore",
    "specs": [
      "UV seal",
      "2-year clarity"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Both pairs",
        "priceDelta": 60
      }
    ],
    "faq": [
      {
        "q": "Yellowing return?",
        "a": "Free touch-up year one."
      }
    ],
    "rating": 4.8,
    "reviewCount": 67
  },
  {
    "id": "gd-7",
    "name": "Mobile Detail Cart",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
    "tag": "Mobile",
    "category": "Mobile",
    "specs": [
      "25mi radius",
      "Waterless option"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Fleet (3+)",
        "priceDelta": -50
      }
    ],
    "faq": [
      {
        "q": "Power hookup?",
        "a": "Self-contained unit."
      }
    ],
    "rating": 4.7,
    "reviewCount": 201
  },
  {
    "id": "gd-8",
    "name": "Scent Cabin Mist",
    "price": 34,
    "image": "https://images.unsplash.com/photo-1550355191-aa8a576b4e3c?w=800",
    "tag": "Scent",
    "category": "Interior",
    "specs": [
      "OEM-safe",
      "3 notes"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Refill sub",
        "priceDelta": 12
      }
    ],
    "faq": [
      {
        "q": "Allergies?",
        "a": "Unscented base available."
      }
    ],
    "rating": 4.5,
    "reviewCount": 320
  },
  {
    "id": "gd-9",
    "name": "Track Day Prep",
    "price": 279,
    "image": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
    "tag": "Track",
    "category": "Performance",
    "specs": [
      "Wheel torques",
      "Fluid check"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Instructor ride",
        "priceDelta": 150
      }
    ],
    "faq": [
      {
        "q": "Timing?",
        "a": "Book 48h before event."
      }
    ],
    "rating": 4.9,
    "reviewCount": 54
  },
  {
    "id": "gd-10",
    "name": "Showroom Bay Hour",
    "price": 149,
    "image": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
    "tag": "Bay",
    "category": "Bay",
    "specs": [
      "Climate bay",
      "LED inspection"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Extra hour",
        "priceDelta": 99
      }
    ],
    "faq": [
      {
        "q": "Wait lounge?",
        "a": "Glass viewing lounge."
      }
    ],
    "rating": 4.8,
    "reviewCount": 112
  }
];
export const categories = Array.from(new Set(products.map((p) => p.category)));
