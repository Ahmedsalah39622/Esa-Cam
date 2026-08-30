import productsJson from "./all-combined-products.json";

export type ProductCategory = 
  | "all"
  | "cameras"
  | "lenses"
  | "lighting"
  | "audio"
  | "gimbals"
  | "drones"
  | "accessories"
  | "pre-owned";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
  stockStatus: "in-stock" | "low-stock" | "pre-order";
  stockCount?: number;
  shortDescription: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  inTheBox: string[];
  mount?: string;
  sensor?: string;
  resolution?: string;
}

export const HERO_HIGHLIGHTS = [
  {
    id: "esa-5745",
    name: "Sony FX3 Cinema Line",
    subtitle: "Full-Frame 4K/120p Compact Cine Body",
    price: 3899,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    tag: "Flagship Choice",
    specs: [
      "12.1MP Full-Frame BSI",
      "15+ Stops S-Log3",
      "4K 120p / FHD 240p",
      "Active Cooling Fan",
    ],
  },
  {
    id: "esa-5746",
    name: "Canon EOS R5 C",
    subtitle: "8K60 RAW Internal Cine System",
    price: 4299,
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=80",
    tag: "8K Monster",
    specs: [
      "45MP Full-Frame Dual Pixel",
      "8K 60p RAW Light",
      "Canon RF Cinema",
      "Timecode & Waveform",
    ],
  },
  {
    id: "esa-5747",
    name: "RED V-Raptor 8K",
    subtitle: "Multi-Format VV & 6K S35 Sensor",
    price: 5995,
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1000&q=80",
    tag: "Hollywood Standard",
    specs: [
      "35.4MP VistaVision",
      "17+ Stops RAW",
      "8K 120fps / 4K 240fps",
      "CFexpress Type B",
    ],
  },
];

export const CATEGORIES_LIST = [
  {
    id: "cameras" as ProductCategory,
    name: "Cinema & Mirrorless Bodies",
    tag: "Cinema Tier",
    itemCount: "92+ Systems",
    brands: "Sony • Canon • Nikon • RED • BMPCC",
    title: "Cinema & Mirrorless Bodies",
    description: "Full-frame 8K/4K cinema cameras from Sony, Canon, RED & Blackmagic",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    badge: "Cinema Tier",
  },
  {
    id: "lenses" as ProductCategory,
    name: "Cinema & Master Primes",
    tag: "Optics Hub",
    itemCount: "240+ Primes & Zooms",
    brands: "Sony GM • Canon RF • Viltrox • Sigma • Tamron",
    title: "Cinema & Master Primes",
    description: "Anamorphic, Cine Primes, and fast f/1.2 & f/1.4 zoom lenses",
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80",
    badge: "Optics Hub",
  },
  {
    id: "lighting" as ProductCategory,
    name: "Studio & Location Lighting",
    tag: "Pro Output",
    itemCount: "20+ Lighting Fixtures",
    brands: "Godox • Aputure • Nanlite • Amaran",
    title: "Studio & Location Lighting",
    description: "High-CRI LED monolights, tube lights, and Bowens mount softboxes",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    badge: "Pro Output",
  },
  {
    id: "audio" as ProductCategory,
    name: "Broadcast & Wireless Audio",
    tag: "32-Bit Float",
    itemCount: "15+ Pro Audio Systems",
    brands: "DJI • RØDE • Boya • Hollyland • Zoom",
    title: "Broadcast & Wireless Audio",
    description: "Dual-channel wireless mics, shotgun mics, and 32-bit float field recorders",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    badge: "32-Bit Float",
  },
  {
    id: "gimbals" as ProductCategory,
    name: "Gimbals & Cinema Rigs",
    tag: "4.5kg Payload",
    itemCount: "16+ Stabilizer Kits",
    brands: "DJI Ronin • RS 4 Pro • Zhiyun • Tilta",
    title: "Gimbals & Cinema Rigs",
    description: "3-axis carbon stabilizers, follow focus systems, and shoulder rigs",
    image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=800&q=80",
    badge: "4.5kg Payload",
  },
  {
    id: "accessories" as ProductCategory,
    name: "Power, Media & Monitor Rigs",
    tag: "Mission Critical",
    itemCount: "100+ Production Essentials",
    brands: "SmallRig • SanDisk • Lexar • Feelworld",
    title: "Power, Media & Monitor Rigs",
    description: "V-mount batteries, CFexpress Type A/B cards, and daylight viewable monitors",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80",
    badge: "Mission Critical",
  },
];

export const PRODUCTS: Product[] = productsJson as unknown as Product[];
