export type ProductCategory = 
  | "all"
  | "cameras"
  | "lenses"
  | "accessories"
  | "audio"
  | "dental"
  | "deals"
  | "bags"
  | "gimbals"
  | "flashes"
  | "lighting"
  | "memory-cards"
  | "tripods"
  | "drones"
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
  images?: string[];
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

export const PRODUCTS: Product[] = [
  {
    "id": "esa-637",
    "name": "Sony FX3 Full-Frame Cinema Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 3600,
    "originalPrice": 980.2,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1784716598_1989703.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key features 26.2MP Full Frame CMOS Sensor UHD 4K Video Recording Dual Pixel CMOS AF with 4779 AF Points RF 50mm f/1.8 STM Prime Lens Bright f/1.8 Aperture with Beautiful Bokeh",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "cameras"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1784716598_1989703.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1614080143_1624226.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924108_IMG_1492857.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492864.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492860.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492861.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492862.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492863.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492859.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924729_IMG_1894892.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492870.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492867.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492866.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492865.jpg",
      "https://icamstore.net/wp-content/uploads/2023/11/1670924110_IMG_1492873.jpg"
    ]
  },
  {
    "id": "esa-5746",
    "name": "Nikon Z8 8K Full-Frame Mirrorless Flagship",
    "brand": "Nikon",
    "category": "cameras",
    "price": 4150,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2023/11/1683718018_1765615.jpg",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Dedicated Carrying Bag Designed for transporting photography equipment and accessories. Spacious Main Compartment Provides convenient storage for essential camera gear. Zippered Closure Helps keep equipment securely stored during transportation. Durable Carry Handles Designed for comfor",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "cameras"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2023/11/1683718018_1765615.jpg"
    ]
  },
  {
    "id": "esa-5747",
    "name": "Canon EOS R5 Mark II Mirrorless Cinema Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 4350,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2024/07/1721217031_1841315.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Canon LP-E6P Type Battery Designed for Canon cameras and accessories using LP-E6P batteries. Backward Compatible Supports LP-E6, LP-E6N, and LP-E6NH battery systems. USB-C Charging Supports 5V USB-C charging input with a built-in charging port. 7.2V 2200mAh / 16Wh Capacity Provides reli",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "cameras"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2024/07/1721217031_1841315.jpg"
    ]
  },
  {
    "id": "icam-65347",
    "name": "Canon EOS RP Full Frame Mirrorless Camera with RF 50mm f/1.8 STM Lens",
    "brand": "Canon",
    "category": "cameras",
    "price": 910.89,
    "originalPrice": 980.2,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/09/VQMcWAFKce7Q3ZfIWS7cDZQh6SCeD3qWxyPKTu9P4M1qCu4Vn6tOtkj4VAAQq0qKl9knJOQVlQITnMf6994moLfGDGLEAScsXHlSt6nqjptj2S9yxieo1pYDW3c-i-FHL4Uc7G-D-zeunli9oU67wkILcIlSd6i0w0I0VjShCPUF7HGKg3FywR2x7fG4xVKS.jpeg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key features 26.2MP Full Frame CMOS Sensor UHD 4K Video Recording Dual Pixel CMOS AF with 4779 AF Points RF 50mm f/1.8 STM Prime Lens Bright f/1.8 Aperture with Beautiful Bokeh",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/09/VQMcWAFKce7Q3ZfIWS7cDZQh6SCeD3qWxyPKTu9P4M1qCu4Vn6tOtkj4VAAQq0qKl9knJOQVlQITnMf6994moLfGDGLEAScsXHlSt6nqjptj2S9yxieo1pYDW3c-i-FHL4Uc7G-D-zeunli9oU67wkILcIlSd6i0w0I0VjShCPUF7HGKg3FywR2x7fG4xVKS.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/3cUniMamzP-1JHU07r5HtUufOYtEsHQPAsqK3LfhHMW6dVROWTA5n5uSz3cxd-H2PIgW5NDqbSNHU37-KGTV-98zRVCc_w4zdNLTjFdYU0ofXN705hTPAA7W89pPlmaFrpQeVkCZhVaeGt-wiH7ffOIiHODSTh09TJXCPkLM87jCX6sBxPwFXLIyqe-fE2Sp.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/LKIcMPmLxYVgNXlPubsTZjERkkjVXiEqNPLus9yWmQ5UEiD5h1GaBRNx-nrpwuzzfzIdAaHdNddawO8nP6Pgi8B8hnpAaISozsIy62TDe4MJwwKnVjCp9gl6_NLAu7rnXpn34DjCjUWECgEv1paS9y15OjJT4D9UO-vQW6_vugefuRn41ywEMzT_sNQVcMnI.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/aDT4Isn-X10skX97P1B7JjfY6DzjiGWSUWKDZ1vffhuoeOyRoDOZM-pF_ZlNo6JIC1PGXxka6aTWLf1AAsO3XXP3TjvSm2ur6LUy1TYWssbnvEbnu6QDMdHtCzV8ur61V8Rujcpg4ZNUxEaSWiCtm1ybdu1IHr2mn2bhbPUlHFqpD0wggKx_XIPtmsk5ymhW.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/MYLCFF83FHGndNBr9I45xFWqzY95jdCtpOHN242UxcseMg3jux8mb31S_WkmCJl6GuKj-mTWXI98TH9_gwKUHV46W9G8ZMkXBQpSS8Kz3eazl1O3uwUsUfGYau2OUA3tQw8NMnsAZRNprqDxjsNB0CBEQbBFRdNun8zhNnqyiJmedXEMj5l7GXtaaTeN0kj-.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/1604443639_IMG_1439176.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1707323185_IMG_1138466.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1670327188_IMG_1889091-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1763575417_IMG_1138467.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1761824274_IMG_1138469.jpg"
    ]
  },
  {
    "id": "icam-65239",
    "name": "Vagner Pro VB-10 Carrying Bag for Photography Equioment",
    "brand": "VAGNER PRO",
    "category": "accessories",
    "price": 11.88,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/09/Vagner-Pro-VB-10-.jpeg",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Dedicated Carrying Bag Designed for transporting photography equipment and accessories. Spacious Main Compartment Provides convenient storage for essential camera gear. Zippered Closure Helps keep equipment securely stored during transportation. Durable Carry Handles Designed for comfor",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Model",
        "value": "VB-10"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/09/Vagner-Pro-VB-10-.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/Gemini_Generated_Image_skxfdiskxfdiskxf.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/Gemini_Generated_Image_hgc8m3hgc8m3hgc8.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/09/Gemini_Generated_Image_1mf5qw1mf5qw1mf5.jpeg"
    ]
  },
  {
    "id": "icam-65205",
    "name": "SWIT PowerCell LP-E6P USB-C Battery for Select Canon Cameras (2200mAh)",
    "brand": "SWIT",
    "category": "accessories",
    "price": 44.55,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/09/1767631284_1940906.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Canon LP-E6P Type Battery Designed for Canon cameras and accessories using LP-E6P batteries. Backward Compatible Supports LP-E6, LP-E6N, and LP-E6NH battery systems. USB-C Charging Supports 5V USB-C charging input with a built-in charging port. 7.2V 2200mAh / 16Wh Capacity Provides reli",
    "specs": [
      {
        "label": "Brand",
        "value": "SWIT"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Battery Type",
        "value": "1x Canon LP-E6P"
      },
      {
        "label": "Battery Capacity",
        "value": "2200 mAh / 16 Wh"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/09/1767631284_1940906.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648679-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648680-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648681-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648682-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648683-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648684-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648685-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631285_IMG_2648686-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631300_IMG_2648687-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631300_IMG_2648688-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631300_IMG_2648689-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767631300_IMG_2648690-1.jpg"
    ]
  },
  {
    "id": "icam-65189",
    "name": "SWIT PowerCell NP-W235 USB-C Battery for Select FUJIFILM Cameras (2200mAh)",
    "brand": "SWIT",
    "category": "accessories",
    "price": 44.55,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/09/1767632548_1940909.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Fujifilm NP-W235 Type Battery Compatible with cameras and accessories using NP-W235 batteries. USB-C Charging Supports 5V USB-C charging input with built-in charging port. 7.2V 2200mAh / 16Wh Capacity Provides reliable and long-lasting power. 4-Level LED Indicator Touch-activated LEDs d",
    "specs": [
      {
        "label": "Brand",
        "value": "SWIT"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Battery Type",
        "value": "1x Fuji NP-W235"
      },
      {
        "label": "Battery Capacity",
        "value": "2200 mAh / 16 Wh"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/09/1767632548_1940909.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648753.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648754.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648755.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648756.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648757.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648758.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648759.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648760.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648761.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648762.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/1767632545_IMG_2648763.jpg"
    ]
  },
  {
    "id": "icam-64047",
    "name": "Canon RP-108 High-Capacity Color Ink/Paper Set for SELPHY CP910 Printer",
    "brand": "Canon",
    "category": "accessories",
    "price": 34.65,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1401709580_1056714.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features 108 Sheets of 4 x 6&#8243; Paper Two Color Ink Ribbons",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "accessories"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1401709580_1056714.jpg"
    ]
  },
  {
    "id": "icam-64862",
    "name": "KPro LK-030 Mini Flip Screen Toy Camera 720P",
    "brand": "KPro",
    "category": "cameras",
    "price": 29.7,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/09/ChatGPT-Image-Sep-1-2026-06_51_40-PM.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 720P HD Photo & Video 0.96&#8243; Flip Screen Retro CCD-Style Design Multiple Shooting Modes 64GB T-Flash Support",
    "specs": [
      {
        "label": "Brand",
        "value": "KPro"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Random Color"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/09/ChatGPT-Image-Sep-1-2026-06_51_40-PM.png",
      "https://icamstore.net/wp-content/uploads/2026/09/Hfe826ec3c4e64ebcac735b30533f8dccI.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/Hea429f466ac545c5af98d90a69068b3a9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/674af26e-a991-4bb4-97e1-53ce42ed9669-1000x1000-E1rohxn73VabDALWzScbdGFuU5VsbYjI3M2lShIW.webp",
      "https://icamstore.net/wp-content/uploads/2026/09/461340df-8326-4716-98ce-8e683790701b-1000x1000-2dSPsO0URMP9Ht29B1eO9gJsix0LBAWeKV81C54S.webp",
      "https://icamstore.net/wp-content/uploads/2026/09/H3af4510f61ad4cffb28a37cdfb20530fi.avif",
      "https://icamstore.net/wp-content/uploads/2026/09/H523e96cc498a406c9be5de0bea21e0d0p.avif",
      "https://icamstore.net/wp-content/uploads/2026/09/H05734cf7b13b4428b8de3b2d0ea8c3385.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/H474777d203424199a9fe508c69d4a1c7l.avif",
      "https://icamstore.net/wp-content/uploads/2026/09/Hc8bcd36a3aea430388458e1c58272146p.avif",
      "https://icamstore.net/wp-content/uploads/2026/09/Hc8de5d50f7f6442cbab5bcdfbb38e7feV.avif",
      "https://icamstore.net/wp-content/uploads/2026/09/Hdbef4006248147ecbe52a389803eb217c.avif",
      "https://icamstore.net/wp-content/uploads/2026/09/Hf47f45cf6ed243c2a692171b57a299b2A.jpg",
      "https://icamstore.net/wp-content/uploads/2026/09/H404b101e738c40c08bf723211d5588c60.jpg"
    ]
  },
  {
    "id": "icam-64645",
    "name": "Samyang – Schneider AF 14-24mm F2.8",
    "brand": "Samyang",
    "category": "lenses",
    "price": 990.1,
    "originalPrice": 1188.12,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/AF-14-24mm-F2.8-FE-Front_Hood-1747739091-scaled.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 14–24mm Constant f/2.8 Zoom Ultra-Lightweight 445g Design 77mm Front Filter Support 0.18m Minimum Focus Distance Fast & Quiet Linear AF",
    "specs": [
      {
        "label": "Brand",
        "value": "Samyang"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Mount",
        "value": "Sony E"
      },
      {
        "label": "Format",
        "value": "Full-Frame"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/AF-14-24mm-F2.8-FE-Front_Hood-1747739091-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091385.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091387.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091391.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091393.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091395.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091396.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091398.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091400.png",
      "https://icamstore.net/wp-content/uploads/2026/08/thumb_1791091389.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1791091402.png"
    ]
  },
  {
    "id": "icam-64628",
    "name": "Samyang 60-180mm f/2.8 AF Lens (Sony E)",
    "brand": "Samyang",
    "category": "lenses",
    "price": 990.1,
    "originalPrice": 1188.12,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/11-1785772150.webp",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key features Full-Frame Format for Sony FE f/2.8 to f/22 Aperture Range Linear STM Autofocus 0.26x Maximum Magnification Floating Focus System Weather-Sealed Design 9-Blade Rounded Diaphragm 77mm Filter Thread Built-In USB Firmware Port",
    "specs": [
      {
        "label": "Brand",
        "value": "Samyang"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Mount",
        "value": "Sony E"
      },
      {
        "label": "Lens Format",
        "value": "Full-Frame / APS-C"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/11-1785772150.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/22-1785772155.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/33-1785772157.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584035.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584038.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584041.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584044.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584053.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584057.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584060.png",
      "https://icamstore.net/wp-content/uploads/2026/08/1833584064.png"
    ]
  },
  {
    "id": "icam-64050",
    "name": "Samyang AF 35mm F1.8 P FE",
    "brand": "Samyang",
    "category": "lenses",
    "price": 346.53,
    "originalPrice": 435.64,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/Gemini_Generated_Image_ij0zdcij0zdcij0z.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features 35mm F1.8 Full-Frame Lens – versatile for photography and video. Compact & Lightweight Design – ideal for everyday carry, travel, and street photography. 62mm Filter Size – compatible with standard 62mm filters. Bright F1.8 Aperture – excellent for low-light shooting and shallow depth o",
    "specs": [
      {
        "label": "Brand",
        "value": "Samyang"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/Gemini_Generated_Image_ij0zdcij0zdcij0z.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/Gemini_Generated_Image_x4niy2x4niy2x4ni.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/Gemini_Generated_Image_yf9hhfyf9hhfyf9h.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/Gemini_Generated_Image_2so40y2so40y2so4.jpg"
    ]
  },
  {
    "id": "icam-64125",
    "name": "Telesin 4-in-1 Magnetic Selfie Stick with Carabiner ( P1-CSS-03WH)",
    "brand": "TELESIN",
    "category": "accessories",
    "price": 24.75,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/Telesin-4-in-1-Magnetic-Selfie-Stick-with-Carabiner.webp",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 4 in 1 Design Selfie stick, tripod, phone mount & bag clip. 1 Second Magnetic Mount Quick MagSafe attachment. Lightweight & Compact 135g, folds to 4.1&#8243;. 360° Rotation & 225° Tilt Flexible shooting angles. Bluetooth Remote Wireless control up to 10m.",
    "specs": [
      {
        "label": "Brand",
        "value": "TELESIN"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "White"
      },
      {
        "label": "Model",
        "value": "P1-CSS-03WH"
      },
      {
        "label": "Product Type",
        "value": "4-in-1 Magnetic Selfie Stick"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/Telesin-4-in-1-Magnetic-Selfie-Stick-with-Carabiner.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/adbd64503fcd5abaff264259d2f44cad_29f98378-6cbf-4eba-ad31-826ea9a7248d.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/2_980c0c95-a723-4e22-92da-01ab0f15071f.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/1_8acf55b4-f699-47a2-927d-ada994639585.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/2_f8f9cc23-1e54-45c2-9b8a-b6179c6e66a0.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/3_df804260-84c8-4779-9ae1-e988ff615941.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/4_d11fe0c6-455c-46f7-879b-4623be660d55.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/5_3ab4aead-ab42-4204-bfb8-a9328c57a70a.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/6_4a2f0731-1c94-42e2-ac4c-f53829be3355.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/7_b8f7357b-5a5c-4b12-85a1-9541f0876ced.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/8_67950ea9-bb06-47c5-a36b-b911ab989e97.webp"
    ]
  },
  {
    "id": "icam-64100",
    "name": "TELESIN Magnetic RGB Selfie Ring Light(P5-BGD-18)",
    "brand": "TELESIN",
    "category": "lighting",
    "price": 24.75,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/Telesin-CCT-x-RGB.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Attaches Magnetically to Any Phone Built-In Makeup Mirror RGB Mode with 360° of Color CCT Mode for Warm to Cool Light Paint with Light Using Flow Light Mode Flips Open with 206° of Tilt Rotates 360° & Extends up to 1.4&#8243; 10 to 100% Brightness Adjustment Up to 7 Hours of Battery Lif",
    "specs": [
      {
        "label": "Brand",
        "value": "TELESIN"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Model",
        "value": "P5-BGD-18"
      },
      {
        "label": "Battery Chemistry",
        "value": "Lithium-Ion"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/Telesin-CCT-x-RGB.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/Telesin-CCT-x-RGB-Magnetic-Fill-Light-P5-BGD-18ZY.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615251_IMG_2707584.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615251_IMG_2707585.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615251_IMG_2707586.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615251_IMG_2707587.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615251_IMG_2707588.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707589.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707590.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707592.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707594.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707595.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707596.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707597.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707598.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707599.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707600.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1774615278_IMG_2707591.jpg"
    ]
  },
  {
    "id": "icam-62691",
    "name": "amaran Light Dome 90cm",
    "brand": "Amaran",
    "category": "lighting",
    "price": 103.96,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1739879138_1875472.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures Hexadecagon Softbox Quick Release Rod Mechanism For Bowens Fixtures up to 600W High-Output Reflective Interior Includes Front Diffuser Cloth and Grid Includes Carrying Bag",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1739879138_1875472.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433127.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433126.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739888410_IMG_2433124.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739888410_IMG_2433123.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433121.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433120.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887962_IMG_2433116.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887962_IMG_2433117.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887962_IMG_2433119.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887962_IMG_2433118.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887462_IMG_2433114.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887462_IMG_2433113.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887462_IMG_2433115.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433112.jpg"
    ]
  },
  {
    "id": "icam-62742",
    "name": "amaran Verge Bi-Color LED Light Panel (Charcoal)",
    "brand": "Amaran",
    "category": "lighting",
    "price": 75.25,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1747136811_1894482.jpg",
    "badge": "SAVE 24%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Content Creators & Vloggers Output: 822 Lux at 3.3&#8242; (5600K) 2700-6500K CCT 11.5 x 8.7&#8243; Panel; USB-C PD Power CRI 96 | TLCI 97 | TM-30 Rf 93, Rg 101 Onboard & App Control Passive Cooling & Flicker-Free Operation 1/4&#8243;-20 Female Thread Mounting 7 Lighting Effects Inclu",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1747136811_1894482.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747156116_IMG_2492292.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747156116_IMG_2492291.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490879.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490878.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490877.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490876.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490875.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490874.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490873.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490872.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490871.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1747137192_IMG_2490870.jpg"
    ]
  },
  {
    "id": "icam-62726",
    "name": "amaran Pano 60c RGB COB Mobile Light Panel Kit (White)",
    "brand": "Amaran",
    "category": "lighting",
    "price": 163.37,
    "originalPrice": 198.02,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1743508894_1886251.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Content Creators and Vloggers Output: 6290 Lux at 3.3&#8242; (6500K) 2300-10,000K CCT; RGB Mode CRI 96 | TLCI 97 10 x 6.1&#8243; Panel; Battery/AC Power Onboard, App, and Bluetooth Control Fan Cooled; 0-100% Dimming Charges via USB-C Cable Includes Softbox, Grid, and Diffuser Include",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "White"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1743508894_1886251.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458987.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458986.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458985.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458984.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458983.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458982.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458981.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458980.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458979.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458978.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458977.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458976.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2458975.jpg"
    ]
  },
  {
    "id": "icam-62710",
    "name": "amaran Pano 120c RGB COB Mobile Light Panel (White)",
    "brand": "Amaran",
    "category": "lighting",
    "price": 267.33,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1743508894_1886255.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Content Creators and Vloggers Output: 13,490 Lux at 3.3&#8242; (6500K) 2300-10,000K CCT; RGB Mode CRI 96 | TLCI 97 14 x 10&#8243; Panel; Battery/AC Power Fan Cooled; 0-100% Dimming Charges via USB-C Cable Features 12 Special Lighting Effects Includes Softbox, Grid, and Diffuser Inclu",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "White"
      },
      {
        "label": "Power Source",
        "value": "AC Power (Cable Included)"
      },
      {
        "label": "Wireless Remote Control Type",
        "value": "Bluetooth"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1743508894_1886255.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459396.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459395.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459394.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459393.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459392.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459391.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459390.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459389.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459388.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459387.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459386.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459385.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1743509329_IMG_2459384.jpg"
    ]
  },
  {
    "id": "icam-62673",
    "name": "amaran Light Dome 60cm",
    "brand": "Amaran",
    "category": "lighting",
    "price": 84.16,
    "originalPrice": 118.81,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1739879138_1875471.jpg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures Hexadecagon Softbox Quick Release Rod Mechanism For Bowens Fixtures up to 600W High-Output Reflective Interior Includes Front Diffuser Cloth and Grid Includes Carrying Bag",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1739879138_1875471.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433111.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433110.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433108.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739888395_IMG_2433106.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739888395_IMG_2433107.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433105.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433104.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433103.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433102.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433101.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887444_IMG_2433099.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887869_IMG_2433098.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887869_IMG_2433100.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887869_IMG_2433097.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433096.jpg"
    ]
  },
  {
    "id": "icam-62656",
    "name": "amaran Lantern 90cm (36&#8243;)",
    "brand": "Amaran",
    "category": "lighting",
    "price": 103.96,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1739879138_1875480.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures Wide Design Delivers Balanced Lighting Universal Bowens Mount 360º Soft Light Source Quick-Build Press Mount Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1739879138_1875480.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887300_IMG_2435040.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887300_IMG_2435039.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433243.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433242.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433241.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739886901_IMG_2433238.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433239.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739886901_IMG_2433240.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433237.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433236.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433235.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433234.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433233.jpg"
    ]
  },
  {
    "id": "icam-62640",
    "name": "amaran Lantern 65cm (24&#8243;)",
    "brand": "Amaran",
    "category": "lighting",
    "price": 71.29,
    "originalPrice": 89.11,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1-5.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures Wide Design Delivers Balanced Lighting Universal Bowens Mount 360º Soft Light Source Quick-Build Press Mount Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887230_IMG_2435038.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739887230_IMG_2435037.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433230.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433229.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433228.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433227.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739888158_IMG_2433224.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739888158_IMG_2433226.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739888158_IMG_2433225.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433223.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433222.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1739879360_IMG_2433221.jpg"
    ]
  },
  {
    "id": "icam-62579",
    "name": "amaran Halo 60x Bi-Color LED Monolight",
    "brand": "Amaran",
    "category": "lighting",
    "price": 108.91,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1772624732_1954191.jpg",
    "badge": "SAVE 31%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "amaran Halo 60x Bi-Color LED Monolight Overview Bright, ultra-compact, and designed for creators needing consistent bi-color performance, the Halo 60x Bi-Color LED Monolight from amaran provides advanced features in a compact and versatile 63W fixture. This point-source COB fixture delivers a bright",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 1/4\"-20 Female Thread"
      },
      {
        "label": "Power Source",
        "value": "AC to DC Adapter (Included) USB Power (Cable Not Included) Battery (Not Included)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1772624732_1954191.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687382.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687381.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687392.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687391.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687390.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687389.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687388.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687387.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687386.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687385.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687380.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687384.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687383.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687393.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687394.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687395.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687396.jpg"
    ]
  },
  {
    "id": "icam-62623",
    "name": "amaran Ace 25x Bi-Color LED Light Panel (Charcoal)",
    "brand": "Amaran",
    "category": "lighting",
    "price": 59.41,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/amaran-Ace-25x-Bi-Color-LED-Light-Panel-Charcoal.jpg",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Content Creators and Vloggers Output: 1636 Lux at 3.3&#8242; (5600K) 2300 to 6500K CCT 4.6 x 3&#8243; Panel; USB-C Rechargeable CRI 95 | TLCI 95 | SSI (D56) 73 Onboard and Bluetooth App Control Fan Cooled 90% Recharge in Just 40 Minutes 9 Preprogrammed Lighting Effects Ace Lock-to-Co",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Input Power",
        "value": "5 VDC at 2 A"
      },
      {
        "label": "Battery",
        "value": "1x Rechargeable (Built-In)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/amaran-Ace-25x-Bi-Color-LED-Light-Panel-Charcoal.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357477-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357474.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357480.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357475.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357478.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729005643_1847471.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357485.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357487.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357486.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357484.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357482.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357489.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357481.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357479.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729006284_IMG_2357476.jpg"
    ]
  },
  {
    "id": "icam-62599",
    "name": "amaran Ace 25c RGB LED Light Panel All-in-One Creator Kit",
    "brand": "Amaran",
    "category": "lighting",
    "price": 84.16,
    "originalPrice": 118.81,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/amaran-Ace-25x-Bi-Color-LED-Light-Panel-Charcoal.jpg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Content Creators and Vloggers Output: 1171 Lux at 3.3&#8242; (5600K) 2300 to 10,000K CCT; RGB Color Control 4.6 x 3&#8243; Panel; USB-C Rechargeable CRI 95 | TLCI 95 | SSI (D56) 73 Onboard and Bluetooth App Control Fan Cooled 90% Recharge in Just 40 Minutes Lock-to-Cold Shoe Adapter,",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Input Power",
        "value": "5 VDC at 2 A"
      },
      {
        "label": "Battery",
        "value": "1x Rechargeable (Built-In)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/amaran-Ace-25x-Bi-Color-LED-Light-Panel-Charcoal.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357760.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357758.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009211_1847474.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357778.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357779.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357777.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357774.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357772.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357769.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357771.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357770.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357768.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357773.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357767.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357766.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357762.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357761.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357781.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1729009879_IMG_2357784.jpg"
    ]
  },
  {
    "id": "icam-62559",
    "name": "amaran Ray 360c RGB LED Monolight",
    "brand": "Amaran",
    "category": "lighting",
    "price": 405.94,
    "originalPrice": 495.05,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1-4.jpg",
    "badge": "SAVE 18%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfetures For Film, Broadcast & Video Production Output: 17,130 Lux at 3.3&#8242; (Bare) 1800-20,000K CCT+; RGB Color Control AC Power & Optional USB-C DMX Control Onboard & App Control; FlowTurn & NFC CRI & TLCI 95 | SSI 80/87 | TM-30 94/100 OmniColor Engine, G/M Shift & Effects Fan Cooled, Bowens",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 5/8\" Receiver (Via Swivel Mount)"
      },
      {
        "label": "Power Consumption",
        "value": "410 W (Maximum)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603404.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603403.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603402.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603401.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603400.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603399.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603398.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603397.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603396.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603394.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603393.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603391.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466402_1930190.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603392.jpg"
    ]
  },
  {
    "id": "icam-62508",
    "name": "amaran Halo 300x Bi-Color LED Monolight",
    "brand": "Amaran",
    "category": "lighting",
    "price": 269.31,
    "originalPrice": 372.28,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1-1.jpg",
    "badge": "SAVE 28%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeaures For Content Creators & Vloggers Output: 16,200 Lux at 3.3&#8242; (Bare) 2700-6500K CCT AC Power Onboard & App Control; NFC Tap DMX via USB-C with Optional Adapter CRI 96 | TLCI 97 | TM-30 94/102 85º Native Beam Angle & 9 Effects Fan Cooled, Bowens & All-Metal Design Includes 16.4&#8242; L",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 5/8\" Receiver (Via Swivel Mount)"
      },
      {
        "label": "Input Power",
        "value": "100 to 240 VAC, 50 / 60 Hz"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687438.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687437.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687436.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687435.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687434.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687433.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687432.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687431.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687430.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687429.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687439.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687440.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687441.jpg"
    ]
  },
  {
    "id": "icam-62542",
    "name": "amaran Halo 600x Bi-Color LED Monolight",
    "brand": "Amaran",
    "category": "lighting",
    "price": 420.79,
    "originalPrice": 495.05,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1-3.jpg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Content Creators & Vloggers Output: 32,500 Lux at 3.3&#8242; (Bare) 2700-6500K CCT AC Power Onboard & App Control; NFC Tap DMX via USB-C with Optional Adapter CRI 96 | TLCI 97 | TM-30 95/102 85º Native Beam Angle & 9 Effects Fan Cooled, Bowens & All-Metal Design Includes 16.4&#8242; ",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 5/8\" Receiver (Via Swivel Mount)"
      },
      {
        "label": "Input Power",
        "value": "100 to 240 VAC, 50 / 60 Hz"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687456.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687455.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687454.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687453.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687452.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687451.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687450.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687449.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687448.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687447.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687446.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687457.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687458.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1772624786_IMG_2687459.jpg"
    ]
  },
  {
    "id": "icam-62483",
    "name": "amaran Ray 120c RGB LED Monolight",
    "brand": "Amaran",
    "category": "lighting",
    "price": 253.47,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603177.jpg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Content Creators & Vloggers Output: 6850 Lux at 3.3&#8242; (Bare) 1800-20,000K CCT+; RGB Color Control AC or Battery Power; USB-C PD Power Onboard & App Control; Flow Turn & NFC CRI & TLCI 95 | SSI 80/87 | TM-30 94/100 OmniColor Engine, G/M Shift & Effects Fan Cooled, Bowens Mount & ",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 1/4\"-20 Female Thread Proprietary"
      },
      {
        "label": "Power Source",
        "value": "AC to DC Adapter (Included) Battery (Not Included)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603177.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603195.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603194.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603193.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603192.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603191.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603190.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603189.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603188.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603187.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603186.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603185.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603184.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603183.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603182.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603181.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603180.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603179.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603178.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603175.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603176.jpg"
    ]
  },
  {
    "id": "icam-62524",
    "name": "amaran Ray 660c RGB LED Monolight",
    "brand": "Amaran",
    "category": "lighting",
    "price": 712.87,
    "originalPrice": 792.08,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603516.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Keyfeatures For Film, Broadcast & Video Production Output: 38,500 Lux at 3.3&#8242; (Bare) 1800-20,000K CCT+; RGB Color Control AC Power & Optional USB-C DMX Control Onboard & App Control; FlowTurn & NFC CRI & TLCI 95 | SSI 80/87 | TM-30 94/100 OmniColor Engine, G/M Shift & Effects Fan Cooled, Bowen",
    "specs": [
      {
        "label": "Brand",
        "value": "Amaran"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 1-1/8\" Stud with 5/8\" Receiver (Via Yoke Mount)"
      },
      {
        "label": "Input Power",
        "value": "100 to 240 VAC, 50 / 60 Hz"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603516.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603527.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603526.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603525.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603524.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603523.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603522.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603521.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603520.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603519.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603518.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603517.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603515.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603513.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1763466868_IMG_2603514.jpg"
    ]
  },
  {
    "id": "icam-62806",
    "name": "Generic 150W 2-Light Kit Softbox with Remote +Grid (Bi-Color)",
    "brand": "Generic",
    "category": "lighting",
    "price": 49.5,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/ChatGPT-Image-Aug-12-2026-12_25_51-PM.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 150W total output (2 × 75W Bi-Color LED bulbs) Two 50 × 70 cm softboxes for soft, even lighting Supports honeycomb grids for enhanced light control Adjustable brightness with included remote controls Complete kit with stands and carrying bag",
    "specs": [
      {
        "label": "Brand",
        "value": "Generic"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Power",
        "value": "150W (2 × 75W)"
      },
      {
        "label": "kit with grid",
        "value": "yes"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/ChatGPT-Image-Aug-12-2026-12_25_51-PM.png",
      "https://icamstore.net/wp-content/uploads/2025/02/WhatsApp-Image-2026-08-06-at-3.09.14-PM.jpeg",
      "https://icamstore.net/wp-content/uploads/2025/02/1766055493_IMG_2638585.jpg",
      "https://icamstore.net/wp-content/uploads/2025/02/ChatGPT-Image-Aug-6-2026-03_43_53-PM.png",
      "https://icamstore.net/wp-content/uploads/2025/02/WhatsApp-Image-2026-08-06-at-3.06.05-PM.jpeg",
      "https://icamstore.net/wp-content/uploads/2025/02/WhatsApp-Image-2026-08-06-at-3.08.12-PM.jpeg",
      "https://icamstore.net/wp-content/uploads/2025/02/WhatsApp-Image-2026-08-06-at-3.41.31-PM.jpeg"
    ]
  },
  {
    "id": "icam-61956",
    "name": "BOYA CastMic P60 USB & XLR Dynamic Microphone",
    "brand": "Boya",
    "category": "audio",
    "price": 84.16,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/Boya-P60-Castmic-.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features USB & XLR Connectivity – Versatile connection options. 24-bit / 48 kHz Audio – Clear, detailed sound. Cardioid Dynamic Mic – Reduces unwanted background noise. Real-Time Monitoring & Gain Control – Easy audio adjustment. Tap-to-Mute & Noise Cancellation – Quick and convenient noise cont",
    "specs": [
      {
        "label": "Brand",
        "value": "Boya"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Model",
        "value": "BOYA CastMic P60"
      },
      {
        "label": "Sample Rate",
        "value": "48 KHz"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/Boya-P60-Castmic-.png"
    ]
  },
  {
    "id": "icam-61946",
    "name": "BOYA CastMic S60 USB & XLR RGB Dynamic Microphone",
    "brand": "Boya",
    "category": "audio",
    "price": 84.16,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/Boya-S60-Castmic-.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Premium cardioid capsule with 48 kHz / 24-bit audio and 90 dB SNR for studio clarity. Customizable RGB lighting with real-time sound waves creates a personalized atmosphere. 4-in-1 smart knob enables quick control of gain, volume, mix, and noise cancel. USB plug-and-play connects to pho",
    "specs": [
      {
        "label": "Brand",
        "value": "Boya"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Model",
        "value": "BOYA CastMic S60"
      },
      {
        "label": "Bit Depth",
        "value": "24 / 16-bit"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/Boya-S60-Castmic-.png"
    ]
  },
  {
    "id": "icam-62091",
    "name": "Sony FX5 Cinema Camera with XLR Handle Unit",
    "brand": "Sony",
    "category": "cameras",
    "price": 6118.81,
    "originalPrice": 6336.63,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/1784716598_1989703.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 5K 16.6MP Stacked Full-Frame Sensor 5K60 Open Gate (3:2) & 4K120 (16:9) Internal X-OCN Raw Recording Three Base ISO | Dual Gain Mode 3.5&#8243; 16:9 4-Axis Multi-Angle Touchscreen AI-Powered Autofocus & White Balance 5-Axis In-Body Image Stabilization BIG 6 Menu System & Streamlined Con",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Lens Mount",
        "value": "Sony E"
      },
      {
        "label": "Image Sensor",
        "value": "Full-Frame"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/1784716598_1989703.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717200_IMG_2794887.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717200_IMG_2794886.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794850.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794849.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794848.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794847.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794846.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794845.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794844.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794843.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794842.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794841.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794840.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794839.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794838.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794837.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794836.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794835.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794834.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794833.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794832.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794831.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794830.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794829.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794828.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794827.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794826.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794825.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717173_IMG_2794824.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717186_IMG_2794893.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717186_IMG_2794892.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717186_IMG_2794891.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717186_IMG_2794890.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717186_IMG_2794889.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784717186_IMG_2794888.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794823.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794822.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794821.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794820.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794819.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794818.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794817.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794816.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716722_IMG_2794815.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716640_IMG_2794814.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1784716640_IMG_2794813.jpg"
    ]
  },
  {
    "id": "icam-61963",
    "name": "Ulanzi TE88 Camera Shoulder Bag B167",
    "brand": "Ulanzi",
    "category": "accessories",
    "price": 51.49,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/11_3_11zon.webp",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features: 15L Large Capacity for camera gear and daily essentials. Removable Divider for camera or everyday use. Multiple Compartments for organized storage. Durable 900D Polyester with washed nylon lid. Lightweight & Comfortable with adjustable shoulder strap.",
    "specs": [
      {
        "label": "Brand",
        "value": "Ulanzi"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/11_3_11zon.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/2_07128684-82aa-450c-9d10-d5bdfafad88d.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/5_6e24e238-71b9-4268-ac67-d4af044d3025.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/7_0ccd4b63-1b70-42fe-bf53-21fa876b6da9.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/4_1_11zon_3de95640-da8b-4881-8caa-8bba94e5c352.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/6_311b9dfe-7042-4abd-96e2-8ef9f664d8b8.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/8_3fe086ab-61df-4047-b79b-5bef72b1f49a.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/15_6_11zon.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/3_7beadd78-512a-49d1-801e-1e423a3a4d58.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/10_2_11zon_95d8078b-a9ef-4f20-a4b5-c87cea94c0fa.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/12_4_11zon_5ae2a65c-ecee-4aee-b2fe-963655aba9a3.webp"
    ]
  },
  {
    "id": "icam-61811",
    "name": "Neewer Q4 TTL Flash Strobe",
    "brand": "Neewer",
    "category": "lighting",
    "price": 316.83,
    "originalPrice": 356.44,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/Neewer-Q4-TTL-Flash-Strobe.png",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 400Ws, Wireless 2.4 GHz Monolight Canon E-TTL II, Nikon i-TTL & Sony TTL TTL, M & Multi Flash Modes High Speed Sync: 1/8000 Second Recycling: 0.01 to 1.2 Second Flash Duration: 1/209 to 1/10,989 Second Compact for Handheld Operation Bowens S Accessory Mount Includes Battery, Handle & Po",
    "specs": [
      {
        "label": "Brand",
        "value": "Neewer"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "1x Monolight"
      },
      {
        "label": "Includes Flash Tube",
        "value": "Yes"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/Neewer-Q4-TTL-Flash-Strobe.png",
      "https://icamstore.net/wp-content/uploads/2026/08/Q4_e9b2de5b-1f15-4bbb-9eb7-137dbb65b86d.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/10102061_8.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/1692207053_IMG_2064396.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1692207053_IMG_2064397.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1692207053_IMG_2064398.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1692207053_IMG_2064399.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1692207053_IMG_2064400.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/Q4_4.webp",
      "https://icamstore.net/wp-content/uploads/2026/08/1692207053_IMG_2064401.jpg"
    ]
  },
  {
    "id": "icam-61796",
    "name": "Neewer Q6 TTL Flash Strobe",
    "brand": "Neewer",
    "category": "lighting",
    "price": 495.05,
    "originalPrice": 544.55,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/08/Neewer-Q6-1.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 600Ws, Expanded Wireless 2.4 GHz System Canon, Nikon, Sony & FUJIFILM TTL TTL, M, Multi & Burst Flash Modes High Speed Sync: 1/8000 Seconds Recycling: 0.01 to 0.9 Second Flash Duration: 1/209 to 1/10,989 Second Bi-Color LED Modeling Lamp & Dual Screen Handheld Operation & Bowens S Mount",
    "specs": [
      {
        "label": "Brand",
        "value": "Neewer"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "1x Monolight"
      },
      {
        "label": "Includes Flash Tube",
        "value": "Yes (Built-In)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/08/Neewer-Q6-1.png",
      "https://icamstore.net/wp-content/uploads/2026/08/Neewer-Q6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1752168151_IMG_2530021.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1752168151_IMG_2530022.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1752168151_IMG_2530023.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1752168151_IMG_2530024.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1752168151_IMG_2530025.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1752168151_IMG_2530026.jpg",
      "https://icamstore.net/wp-content/uploads/2026/08/1752168151_IMG_2530027.jpg"
    ]
  },
  {
    "id": "icam-61407",
    "name": "DJI Osmo Mobile 8P Smartphone Gimbal (Device Only)",
    "brand": "DJI",
    "category": "gimbals",
    "price": 183.17,
    "originalPrice": 198.02,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/DJI-OSMO-8P.avif",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Advanced Subject Tracking for accurate and smooth subject follow 3-Axis Mechanical Stabilization for steady and cinematic footage Remote Selfie Control with precise framing and easy operation Up to 10-Hour Battery Life with phone charging capability Built-in Extension Rod and Tripod for",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
      },
      {
        "label": "Category",
        "value": "gimbals"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/DJI-OSMO-8P.avif"
    ]
  },
  {
    "id": "icam-61361",
    "name": "Sony FX5 Cinema Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 5544.55,
    "originalPrice": 5940.59,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1784716472_1989701.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 5K 16.6MP Stacked Full-Frame Sensor 5K60 Open Gate (3:2) & 4K120 (16:9) Internal X-OCN Raw Recording Three Base ISO | Dual Gain Mode 3.5&#8243; 16:9 4-Axis Multi-Angle Touchscreen AI-Powered Autofocus & White Balance 5-Axis In-Body Image Stabilization BIG 6 Menu System & Streamlined Con",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Lens Mount",
        "value": "Sony E"
      },
      {
        "label": "Image Sensor",
        "value": "Full-Frame"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1784716472_1989701.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784717046_IMG_2794878.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784717037_IMG_2794877.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794876.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794875.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794874.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794873.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794872.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794871.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794870.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794869.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794868.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794867.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794866.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794865.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794864.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794863.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794862.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794861.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794860.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716907_IMG_2794859.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794858.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794857.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794856.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794855.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794854.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794853.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794852.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716860_IMG_2794851.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794745.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794744.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794743.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794730.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794729.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794728.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794727.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794726.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794725.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794724.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794723.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1784716536_IMG_2794722.jpg"
    ]
  },
  {
    "id": "icam-60621",
    "name": "Insta360 GO Ultra Standard Bundle (Midnight Black)",
    "brand": "Insta360",
    "category": "accessories",
    "price": 514.85,
    "originalPrice": 594.06,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1755765996_1910074.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Miniature Action Camera with Action Pod 1/1.28&#8243; Sensor | 50MP Photos, 4K60 Video 200-Minute Battery Runtime Studio-Grade Audio Modes Waterproof up to 33&#8242; Enhanced 2.7K PureVideo Mode Capture Flow-State Stabilization, 6-Axis Gyro 2.5&#8243; Flip Touchscreen Display Bluetooth ",
    "specs": [
      {
        "label": "Brand",
        "value": "Insta360"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Midnight Black"
      },
      {
        "label": "Image Sensor",
        "value": "1/1.28\"-Type CMOS"
      },
      {
        "label": "Image Stabilization",
        "value": "Digital"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1755765996_1910074.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544706.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544705.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544704.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544703.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544702.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544701.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544700.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544699.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544698.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544697.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544696.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544695.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544694.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544693.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544692.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544691.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544690.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544689.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544688.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544687.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544686.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544685.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544684.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544683.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1755766192_IMG_2544682.jpg"
    ]
  },
  {
    "id": "icam-58857",
    "name": "Beston Battery NP-FZ100 Sony Camera Battery with Type-C Charging Input",
    "brand": "Beston",
    "category": "accessories",
    "price": 29.7,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Beston-Fz100-Camera-Batteries-with-Type-C.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Built-in USB-C charging port for direct charging Fully compatible with Sony NP-FZ100 cameras Multi-layer protection against overcharging, overheating, and short circuits Reliable rechargeable Li-ion battery for extended shooting Ideal as a spare or replacement battery for Sony cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Beston"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Beige"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Beston-Fz100-Camera-Batteries-with-Type-C.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Beston-Fz100-Camera-Batteries-with-Type-C.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/General-Pro-Egypt-Beston-Battery-NP-FZ100-Sony-Camera-Battery-with-Type-C-1.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/General-Pro-Egypt-Beston-Battery-NP-FZ100-Sony-Camera-Battery-with-Type-C-1-1.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/General-Pro-Egypt-Beston-Battery-NP-FZ100-Sony-Camera-Battery-with-Type-C-2.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/General-Pro-Egypt-Beston-Battery-NP-FZ100-Sony-Camera-Battery-with-Type-C-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/General-Pro-Egypt-Beston-Battery-NP-FZ100-Sony-Camera-Battery-with-Type-C-4.jpeg"
    ]
  },
  {
    "id": "icam-58890",
    "name": "Swit WA-A03 – Antenna for Swit FLOW500 CURVE500 wireless system",
    "brand": "SWIT",
    "category": "accessories",
    "price": 29.7,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/swit_s_atcf500_omni_antenna_for_curve500_1749050319_1882702.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features: Easy-to-apply spare or replacement antenna for wireless systems Lightweight design for portability and convenient storage Compatible with Swit FLOW500 and CURVE500 wireless transceivers Enhances stability for reliable signal transmission BNC connector for secure and efficient connectio",
    "specs": [
      {
        "label": "Brand",
        "value": "SWIT"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/swit_s_atcf500_omni_antenna_for_curve500_1749050319_1882702.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1749050316_IMG_2506064.jpg"
    ]
  },
  {
    "id": "icam-58886",
    "name": "Generic Meduim Chroma Clamp",
    "brand": "Generic",
    "category": "accessories",
    "price": 2.97,
    "originalPrice": 4.95,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Meduim-Chroma-.png",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Strong spring mechanism for a secure grip Ideal for holding chroma backdrops and studio fabrics Durable, lightweight construction Compatible with background stands and support systems Suitable for photography, videography, and studio use",
    "specs": [
      {
        "label": "Brand",
        "value": "Generic"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Meduim-Chroma-.png"
    ]
  },
  {
    "id": "icam-59163",
    "name": "PHOTOOLEX Q100C RGB LED Monolight",
    "brand": "PHOTOOLEX",
    "category": "lighting",
    "price": 198.02,
    "originalPrice": 237.62,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/PHOTOOLEX-Q100C-RGB-LED-Monolight.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Video Production & Vlogging Output: 17,410 Lux at 3.3&#8242; w/ Reflector 2700-6500K CCT; Full RGB Color Control 72Wh Energy Bar Pro Battery Handle 35-Minute Runtime Onboard & App Control CRI 96 21 Lighting Effects Includes Reflector & Dome Includes USB-C Charging Cable & Bag",
    "specs": [
      {
        "label": "Brand",
        "value": "PHOTOOLEX"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "1x COB LED Monolight"
      },
      {
        "label": "Included Light Modifier",
        "value": "1x Reflector 1x Dome"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/PHOTOOLEX-Q100C-RGB-LED-Monolight.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837341_IMG_2635333.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837341_IMG_2635334.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837341_IMG_2635335.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837341_IMG_2635336.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635337.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635338.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635339.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635340.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635341.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635342.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635343.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635344.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635345.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635346.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635347.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635348.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635349.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635350.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635351.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635352.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1765837382_IMG_2635353.jpg"
    ]
  },
  {
    "id": "icam-59140",
    "name": "PHOTOOLEX Q40C RGB LED Monolight",
    "brand": "PHOTOOLEX",
    "category": "lighting",
    "price": 99.01,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/PHOTOOLEX-Zoomlight-Q40C.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Video Production & Vlogging Output: 21,000 Lux at 3.3&#8242; w/ Reflector 2700-6500K CCT; Full RGB Color Control Built-In Battery; 50-Minute Runtime Onboard & App Control CRI 96 Compact & Lightweight Aluminum Design 21 Lighting Effects Includes Reflector & Dome Includes USB-C Chargi",
    "specs": [
      {
        "label": "Brand",
        "value": "PHOTOOLEX"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "1 x COB LED Monolight"
      },
      {
        "label": "Included Light Modifier",
        "value": "1x Reflector 1x Dome"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/PHOTOOLEX-Zoomlight-Q40C.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792873_IMG_2691170.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792873_IMG_2691171.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792873_IMG_2691172.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792873_IMG_2691173.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691174.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691175.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691176.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691177.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691178.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691179.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691180.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691181.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691182.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691183.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1772792896_IMG_2691184.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/PHOTOOLEX-Zoomlight-Q40C-1.jpg"
    ]
  },
  {
    "id": "icam-58877",
    "name": "Generic Large Chroma Clamp",
    "brand": "Generic",
    "category": "accessories",
    "price": 0.79,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Large-Chroma-.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Strong spring mechanism for a secure grip Ideal for holding chroma backdrops and studio fabrics Durable, lightweight construction Compatible with background stands and support systems Suitable for photography, videography, and studio use",
    "specs": [
      {
        "label": "Brand",
        "value": "Generic"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Large-Chroma-.png"
    ]
  },
  {
    "id": "icam-57926",
    "name": "Hollyland Lark A1 Magnet (1 Piece)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 4.95,
    "originalPrice": 9.9,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/magnet.png",
    "badge": "SAVE 50%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features: Compatible with Hollyland Lark A1 Strong magnetic attachment Lightweight and compact design Easy to attach and remove Original Hollyland spare part Includes 1 magnet piece",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/magnet.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-A1-Magnet.webp"
    ]
  },
  {
    "id": "icam-58872",
    "name": "EasyCover Silicone Protection Cover for Canon 800D Camouflage",
    "brand": "EasyCover",
    "category": "accessories",
    "price": 11.88,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/62d031a0ef0fe_1504876804_1360670-thumb.webp",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Protection from Bumps and Scratches Custom-Fit Silicone Material Provides Secure Grip Cut-Outs for Buttons, Ports, and Screen Slim Design and Smooth Texture",
    "specs": [
      {
        "label": "Brand",
        "value": "EasyCover"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Camouflage"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/62d031a0ef0fe_1504876804_1360670-thumb.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/62d031a3c8c69_1504876503_IMG_867191.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/62d031a3951a3_1504876503_IMG_867190.webp"
    ]
  },
  {
    "id": "icam-57930",
    "name": "Hollyland LARK MAX 2 Clip-On Wireless Microphone Transmitter (Space Gray, 2.4 GHz)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1748349639_1895906.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK MAX 2 Wireless Mic Systems Ultracompact Clip-On Transmitter Built-In Omnidirectional Microphone 32-Bit Float Recording with Timecode One-Touch Control Button Excimer Nano-Coated Material Up to 11 Hours of Battery Life Includes Furry Windscreen and Magnet",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1748349639_1895906.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497289.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497288.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497287.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497286.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497285.jpg"
    ]
  },
  {
    "id": "icam-57499",
    "name": "DZOFilm Arles 135mm T1.8 FF/VV Prime Cine Lens (ARRI PL)",
    "brand": "DZOFilm",
    "category": "lenses",
    "price": 1811.88,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/DZOFILM-ARLES-135mm-T1.8-Super-Speed-Vista-Vision-cinema-prime-lens.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Covers Full Frame Sensors | T1.8 to T22 Painterly Look with Rich Natural Colors 0.8 MOD Gearing | 270° Focus Rotation 95mm Front Outside Diameter Interchangeable PL Mount 16-Blade Iris, Smooth Circular Bokeh Soft, Low-Contrast Look at Wide Aperture Immersive Look with Minimal Breathing ",
    "specs": [
      {
        "label": "Brand",
        "value": "DZOFilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Focal Length",
        "value": "135mm"
      },
      {
        "label": "Maximum Aperture",
        "value": "T1.8"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/DZOFILM-ARLES-135mm-T1.8-Super-Speed-Vista-Vision-cinema-prime-lens.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1725628586_IMG_2331245.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1725989894_IMG_2331246.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1725989894_IMG_2331247.jpg"
    ]
  },
  {
    "id": "icam-60365",
    "name": "Tilta LP-E17 USB-C Battery (950mAh, Ash Green) TLP-E17-AG",
    "brand": "Tilta",
    "category": "accessories",
    "price": 17.82,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1773920899_1950557.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon EOS 77D, 200D, 200D11, 750D, 760D, 800D, 850D, M3, M5, M6, M6 II, R8, R10, R50, R5OV, R100, RP, and PowerShot V1 cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Ash Green"
      },
      {
        "label": "Battery Type",
        "value": "1x Canon LP-E17"
      },
      {
        "label": "Battery Capacity",
        "value": "950 mAh / 7 Wh"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1773920899_1950557.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673929.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673928.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673927.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673926.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673925.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673924.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673923.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673922.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806453_IMG_2673921.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806421_IMG_2673920.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1773920890_IMG_2701671.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806421_IMG_2673918.jpg"
    ]
  },
  {
    "id": "icam-60189",
    "name": "Tilta Camera Cage Power Kit for Nikon ZR (Black) TA-T98-C-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 237.62,
    "originalPrice": 277.23,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/TA-T98-C-B.jpg",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Expand Mounting Abilities of Nikon ZR Modular L-Bracket Baseplate & Top Plate Multiple 1/4&#8243;-20 & 3/8&#8243;-16 Threads V-Mount Battery Plate & Arca Receiver Micro-HDMI & USB-C Cable Clamp Arca-Type Quick Release Baseplate Aluminum Build | Ergonomic Wood Handle Access to Hot Shoe, ",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Support Type",
        "value": "Cage"
      },
      {
        "label": "Grip Type",
        "value": "Single Handgrip"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/TA-T98-C-B.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900018_IMG_2652398-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900018_IMG_2652399-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900018_IMG_2652400-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900018_IMG_2652401-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652402-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652403-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652404-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652405-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652406-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652407-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652408-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652409-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652410.webp",
      "https://icamstore.net/wp-content/uploads/2026/07/1767900054_IMG_2652411-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/TA-T98-C-B-1.jpg"
    ]
  },
  {
    "id": "icam-60058",
    "name": "Tilta Camera Cage Pro Kit for Nikon ZR (Black) TA-T98-B-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 257.43,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/Tilta-Camera-Cage-Pro-Kit-for-Nikon-ZR-Black.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Expand Mounting Abilities of Nikon ZR Modular L-Bracket Baseplate & Top Plate Xeno Top Handle & Side Handle Adjustable LWS Baseplate & Dual 8&#8243; Rods",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Support Type",
        "value": "Cage"
      },
      {
        "label": "Battery Plate Type",
        "value": "No"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/Tilta-Camera-Cage-Pro-Kit-for-Nikon-ZR-Black.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898831_IMG_2652371.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898831_IMG_2652372.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898831_IMG_2652373.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/Tilta-Camera-Cage-Pro-Kit-for-Nikon-ZR-Black-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898831_IMG_2652374.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898831_IMG_2652375.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898831_IMG_2652376.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652377.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652378.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652379.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652380.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652381.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652382.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652383.webp",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898862_IMG_2652384.jpg"
    ]
  },
  {
    "id": "icam-57293",
    "name": "Vagner Pro RL-18 45cm Bi-Color LED Ring Light 55W",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 39.6,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Ringlight-Main-scaled.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 45cm Ring Design Soft and even lighting 55W Output Power Bright professional illumination 2700K–6500K Bi-Color Adjustable warm and cool tones Wireless Remote Control Convenient brightness and color adjustment Triple Phone Holder Supports multi-device content creation",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Ringlight-Main-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1-14-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/RL-18.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/7.png",
      "https://icamstore.net/wp-content/uploads/2026/06/8-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/Gemini_Generated_Image_v0h6gv0h6gv0h6gv.png",
      "https://icamstore.net/wp-content/uploads/2026/07/RL-18-2.jpg"
    ]
  },
  {
    "id": "icam-57286",
    "name": "NamTu YF-140 Optical Lens Reflector with Bowens Mount (15°–55° Zoom)",
    "brand": "NamTu",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Namtu-YF-140-Optical-Lens-Reflector-with-Bowens-Mount-15°–55°-Zoom.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Adjustable Beam Angle (15°–55°) – Easily control light spread for focused or wide illumination. Bowens Mount Compatibility – Works seamlessly with most Bowens-mount LED and studio lights. Premium Optical Construction – Made from aluminum alloy and high borosilicate glass for durability ",
    "specs": [
      {
        "label": "Brand",
        "value": "NamTu"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Namtu-YF-140-Optical-Lens-Reflector-with-Bowens-Mount-15°–55°-Zoom.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Namtu-YF-140-Optical-Lens-Reflector-with-Bowens-Mount-15°–55°-Zoom-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Namtu-YF-140-Optical-Lens-Reflector-with-Bowens-Mount-15°–55°-Zoom-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Namtu-YF-140-Optical-Lens-Reflector-with-Bowens-Mount-15°–55°-Zoom-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Namtu-YF-140-Optical-Lens-Reflector-with-Bowens-Mount-15°–55°-Zoom-5.jpg"
    ]
  },
  {
    "id": "icam-57275",
    "name": "NamTu CL-80Bi LED Studio Light",
    "brand": "NamTu",
    "category": "accessories",
    "price": 59.41,
    "originalPrice": 69.31,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Namtu-CL-80Bi-RGB-LED-Studio-Light.png",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Bi-Color Control – Adjustable color temperature (3200K–5600K) with 360° RGB color range for creative lighting effects. High CRI 97 – Ensures accurate and natural color reproduction for professional-quality photos and videos. Powerful Brightness – Delivers up to 18,000 lux at 1 meter for",
    "specs": [
      {
        "label": "Brand",
        "value": "NamTu"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Namtu-CL-80Bi-RGB-LED-Studio-Light.png"
    ]
  },
  {
    "id": "icam-57234",
    "name": "NamTu JB-200Bi Flexible LED Video Light 200W Bi-Color (60×60cm)",
    "brand": "NamTu",
    "category": "lighting",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-1-1.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 200W High Power Output for bright and professional lighting. Bi-Color Temperature (3200K–5600K) to match different shooting environments. Flexible & Foldable Design for easy transport and storage. Soft and Even Illumination with a large 60×60cm lighting surface. Ideal for Photography, V",
    "specs": [
      {
        "label": "Brand",
        "value": "NamTu"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-1-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-5.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-6.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-60×60cm-7.avif"
    ]
  },
  {
    "id": "icam-56975",
    "name": "Tilta Hydra Alien Pro with Electronic Suction Cup Kit (V-Mount) HDA-T18-A-V",
    "brand": "Tilta",
    "category": "accessories",
    "price": 3960.4,
    "originalPrice": 4356.44,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Full Camera Car-Mounting System with Arm Shock-Absorbing Arm for Hydra Alien Pro Shock-Absorbing Head, Counterweight Set Power Supply Base, Dual V-Mount Plate Dovetail Plate Set, 19mm Rods Electronic Suction Cup Kit Swappable Shock Absorber Kit DJI Ronin Mount Adapter Real-Time OLED Tou",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-34.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-33.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-32.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-31.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-30.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-29.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-28.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-27.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-26.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-25.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-24.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-23.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-22.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-21.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-20.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-19.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-18.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-17.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-16.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-15.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-14.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-13.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Hydra-Alien-Pro-with-Electronic-Suction-Cup-Kit-V-Mount-HDA-T18-A-V-2.jpg"
    ]
  },
  {
    "id": "icam-56969",
    "name": "Tilta HDMI Cable (11.8&#8243;) TCB-MHD-MHD-30",
    "brand": "Tilta",
    "category": "accessories",
    "price": 11.88,
    "originalPrice": 13.86,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-HDMI-Cable-11.8-TCB-MHD-MHD-30.jpg",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features HDMI 2.0 Specification Supports 4K at 60 Hz Video Flexible 3.6mm Diameter Compatible with Most Tilta Cable Clamps",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-HDMI-Cable-11.8-TCB-MHD-MHD-30.jpg"
    ]
  },
  {
    "id": "icam-56524",
    "name": "Tilta NP-FZ100 Kit with 2 Batteries and 4-Bay USB Charger (Off White) TBC-FZ100-A-OW",
    "brand": "Tilta",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1773921091_1950550.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Sony a1, a1 II, a9, a9 II, a9 III, a7R V, a7R IV, a7R III, a7 II, a7 III, a7S III, a7 IV, a7C, a7C II, a7CR, ZV-E1, ZV-E10 II, a6600, and a6700 Cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Off White"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1773921091_1950550.jpg"
    ]
  },
  {
    "id": "icam-56447",
    "name": "K&F Concept 73&#8243; Aluminum Travel Tripod with Fluid Head (KF09.172)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 69.31,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-73-Aluminum-Travel-Tripod-with-Fluid-Head-KF09.172.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Professional Fluid Head with Smooth 360° Pan & Tilt Motion Lightweight 2.9 lb Design with 6.6 lb Load Capacity Adjustable Height from 19&#8243; to 73&#8243; with Quick Flip Locks Compact Travel-Friendly Design Folds to Water Bottle Size Universal Compatibility for Cameras, Phones & Spot",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-73-Aluminum-Travel-Tripod-with-Fluid-Head-KF09.172.jpg"
    ]
  },
  {
    "id": "icam-56418",
    "name": "K&F Concept Camera Top Handle with Dual Mount (KF31.234)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 35.64,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-Camera-Top-Handle-with-Dual-Mount-KF31.234.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Dual NATO Rail & 3/8&#8243;-16 ARRI Mount Compatibility Ergonomic Anti-Slip Silicone Grip 4 Built-In Cold Shoe Accessory Mounts 4× 1/4&#8243;-20 & 3× 3/8&#8243;-16 Expansion Threads Durable CNC Aluminum Construction with 10kg Load Capacity",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-Camera-Top-Handle-with-Dual-Mount-KF31.234.jpg"
    ]
  },
  {
    "id": "icam-60468",
    "name": "Tilta Portable Charging Station for NP-FZ100 Batteries (Off-White) TBC-FZ100-OW",
    "brand": "Tilta",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 43.56,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1770829299_1950552.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Supports Up to Four NP-FZ100 Batteries Fast, Simultaneous Quad Charging Charge Status Indicator 45W USB-C PD Power Input Lightweight, Portable Design Includes USB-C Charging Cable",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Off White"
      },
      {
        "label": "Compatibility",
        "value": "Sony NP-FZ100"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1770829299_1950552.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675069.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675068.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675067.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675066.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675065.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675064.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675063.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675062.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675061.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675060.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770829321_IMG_2675059.jpg"
    ]
  },
  {
    "id": "icam-60450",
    "name": "Tilta Portable Charging Station for LP-E6 Batteries (Green) TBC-E6-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1746014419_1892572.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Supports Four LP-E6 Batteries Fast, Simultaneous Quad Charging Charge Status Indicator 45W USB-C PD Power Input Lightweight, Portable Design Includes USB-C Charging Cable",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      },
      {
        "label": "Compatibility",
        "value": "Battery: Canon LP-E6/E6N"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_1892572.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014435_IMG_2481953.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014435_IMG_2481952.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014435_IMG_2481951.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014435_IMG_2481950.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481949.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481948.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481947.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481946.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481945.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481944.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481943.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481942.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481941.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746014419_IMG_2481940.jpg"
    ]
  },
  {
    "id": "icam-60431",
    "name": "Tilta Portable Charging Station for EN-EL15C Batteries TBC-EL15-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1746016862_1892573.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Supports up to Four EN-EL15C Batteries Fast, Simultaneous Quad Charging Charge Status Indicator 45W USB-C PD Power Input Lightweight, Portable Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      },
      {
        "label": "Compatibility",
        "value": "Battery: Nikon EN-EL15 / Nikon EN-EL15b / Nikon EN-EL15c"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1746016862_1892573.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482034.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482033.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482032.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482031.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482030.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482029.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482028.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482027.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482026.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482025.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482024.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482023.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016885_IMG_2482022.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746016847_IMG_2482021.jpg"
    ]
  },
  {
    "id": "icam-60410",
    "name": "Tilta EN-EL15C USB-C Battery (2400mAh) TEN-EL15C-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1746022404_1892576.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Nikon Z7 II, Z7, Z6 II, Z6, Z5, Z8, ZF, D850, D810, D810A, D780, D750, D610, D500, D7500, D7200 Cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      },
      {
        "label": "Battery Type",
        "value": "1x Nikon EN-EL15c"
      },
      {
        "label": "Battery Capacity",
        "value": "2400 mAh"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1746022404_1892576.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482150.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482149.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482148.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482147.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482146.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482145.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482144.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482143.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482142.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482141.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482140.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482139.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482138.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482137.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482136.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482135.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482134.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1746022412_IMG_2482133.jpg"
    ]
  },
  {
    "id": "icam-60395",
    "name": "Tilta NP-FZ100 USB-C Battery (2400mAh, Off White) TNP-FZ100-OW",
    "brand": "Tilta",
    "category": "accessories",
    "price": 44.55,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1773920961_1950560.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Sony a1, a1 II, a7 III, a7 IV, a7 V, a7C, a7C II, a7CR, a7R III, a7R IV, a7R V, a7S III, a9, a9 II, a9 III, a6600, a6700, ZV-E1, ZV-E10 II, FX2, FX3, and FX30 cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Off White"
      },
      {
        "label": "Battery Type",
        "value": "1x Sony NP-FZ100"
      },
      {
        "label": "Battery Capacity",
        "value": "2400 mAh / 17.28 Wh"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1773920961_1950560.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674821.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674820.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674819.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674818.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674817.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674816.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674815.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674814.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674813.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674812.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1773920950_IMG_2701674.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770825484_IMG_2674810.jpg"
    ]
  },
  {
    "id": "icam-60380",
    "name": "Tilta LP-E17 USB-C Battery (950mAh, Forest Green) TLP-E17-FG",
    "brand": "Tilta",
    "category": "accessories",
    "price": 17.82,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1773920899_1950557-1.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon EOS 77D, 200D, 200D11, 750D, 760D, 800D, 850D, M3, M5, M6, M6 II, R8, R10, R50, R5OV, R100, RP, and PowerShot V1 cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Forest Green"
      },
      {
        "label": "Battery Type",
        "value": "1x Canon LP-E17"
      },
      {
        "label": "Battery Capacity",
        "value": "950 mAh / 7 Wh"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1773920899_1950557-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673902.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673901.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673900.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673899.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673898.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673897.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673896.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673895.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673894.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806062_IMG_2673893.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1773920911_IMG_2701672.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1770806021_IMG_2673891.jpg"
    ]
  },
  {
    "id": "icam-60172",
    "name": "Tilta Camera Cage Base Kit for Nikon ZR (Black) TA-T98-A-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 138.61,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1767898040_1941741.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Expand Mounting Abilities of Nikon ZR Modular L-Bracket Baseplate & Top Plate Multiple 1/4&#8243;-20 & 3/8&#8243;-16 Threads Xeno Top Handle with 1/4&#8243;-20 Screw Micro-HDMI & USB-C Cable Clamp Arca-Type Quick Release Baseplate Aluminum Build | Ergonomic Wood Handle Access to Hot Sho",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Battery Plate Type",
        "value": "No"
      },
      {
        "label": "Accessory Mounting",
        "value": "Multiple Anti-Twist 1/4\"-20 Female Thread Multiple Anti-Twist 3/8\"-16 Female Thread"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1767898040_1941741.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652356.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652355.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652354.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652353.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652352.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652351.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652350.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652349.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898066_IMG_2652348.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898033_IMG_2652347.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898033_IMG_2652346.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898033_IMG_2652345.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1767898033_IMG_2652344.jpg"
    ]
  },
  {
    "id": "icam-60107",
    "name": "Sigma 17-40mm f/1.8 DC Art Lens (Sony E)",
    "brand": "Sigma",
    "category": "lenses",
    "price": 851.49,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1750121158_1901072.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features APS-C | f/1.8 to f/16 25.5 to 60mm (Full-Frame Equivalent) Superfast Wide-to-Normal Zoom HLA Autofocus 11&#8243; Minimum Focus Distance Aperture Ring with Click & Lock Switches SLD and Aspherical Elements Water- and Oil-Repellent Coating Dust & Splash Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sigma"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Focal Length",
        "value": "17 to 40mm (35mm Equivalent: 25.5 to 60mm)"
      },
      {
        "label": "Aperture",
        "value": "Maximum: f/1.8 Minimum: f/16"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1750121158_1901072.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511347.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511346.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511345.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511344.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511343.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511342.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511341.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511340.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511339.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511338.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1750121341_IMG_2511337.jpg"
    ]
  },
  {
    "id": "icam-60007",
    "name": "DJI Osmo Pocket 4P Vlog Combo",
    "brand": "DJI",
    "category": "cameras",
    "price": 990.1,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/ChatGPT-Image-Jul-12-2026-06_34_00-PM.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 1-Inch CMOS Sensor with 17-Stop Dynamic Range for exceptional image quality in any lighting. Dual-Lens System with 60mm telephoto lens, 3× optical zoom, and up to 12× zoom. 4K Video at 240fps with 3-axis mechanical stabilization for smooth cinematic footage. ActiveTrack 8.0 & Gesture Co",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/ChatGPT-Image-Jul-12-2026-06_34_00-PM.png",
      "https://icamstore.net/wp-content/uploads/2026/07/1782714485_1.webp",
      "https://icamstore.net/wp-content/uploads/2026/07/1782714485_2.webp",
      "https://icamstore.net/wp-content/uploads/2026/07/1782714485_3.webp"
    ]
  },
  {
    "id": "icam-59966",
    "name": "OSEE GoStream Deck HDMI/USB Live Streaming Video Switcher Kit",
    "brand": "Osee",
    "category": "accessories",
    "price": 891.09,
    "originalPrice": 990.1,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1712754328_1821008.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features GoStream Deck, 14&#8243; Monitor, Hard Case Supports up to 1080p60 Video 350 cd/m² Brightness Monitor, Silent Fan 4 x HDMI and 1 x USB-C Input 1 x HDMI and 2 x USB-C Output Stream to Three Platforms Simultaneously 2 x Mic Inputs, Embedded HDMI Audio SD Card Slot, Built-In Cheese Plates ",
    "specs": [
      {
        "label": "Brand",
        "value": "Osee"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1712754328_1821008.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1712754945_IMG_2229447.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1712754945_IMG_2229446.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1712754945_IMG_2229445.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1712754945_IMG_2229444.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1712754945_IMG_2229443.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1712754945_IMG_2229442.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1712754945_IMG_2229441.jpg"
    ]
  },
  {
    "id": "icam-59946",
    "name": "OSEE GoStream Duet SDI/HDMI/NDI Live Streaming Video Switcher/Recorder Kit",
    "brand": "Osee",
    "category": "accessories",
    "price": 990.1,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/1741175009_1881666.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features GoStream Duet, 14&#8243; Monitor, Hard Case Supports up to 1080p60 Video 350 cd/m² Brightness Monitor, Silent Fan 4 x HDMI, 4 x SDI, 1 x UVC/USB-C Input 2 x HDMI and 1 x USB-C Output Built-In NDI|HX, Simultaneous Streaming 2 x Mic Inputs, Embedded HDMI/SDI Audio SD Card Slot, Built-In C",
    "specs": [
      {
        "label": "Brand",
        "value": "Osee"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/1741175009_1881666.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446711.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446710.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446709.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446708.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446707.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446706.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446705.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446704.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446703.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446702.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175057_IMG_2446701.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175002_IMG_2446700.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175002_IMG_2446699.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175002_IMG_2446698.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175002_IMG_2446697.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175002_IMG_2446696.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/1741175002_IMG_2446695.jpg"
    ]
  },
  {
    "id": "icam-59397",
    "name": "2x Nanlite FS-200B Bi-Color LED Monolight + 1x Nanlite LitoLite 5C RGBWW Mini LED Panel – Studio Lighting Bundle",
    "brand": "Nanlite",
    "category": "lighting",
    "price": 237.62,
    "originalPrice": 495.05,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-04-at-10.40.56-AM.jpeg",
    "badge": "SAVE 52%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features: Includes 2x Nanlite FS-200B Bi-Color LED Monolights Includes 1x Nanlite LitoLite 5C RGBWW Mini LED Panel Bi-color and full RGBWW lighting flexibility Suitable for studio and on-the-go creative projects Ideal for photo, video, and content creators",
    "specs": [
      {
        "label": "Brand",
        "value": "Nanlite"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Dark Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-04-at-10.40.56-AM.jpeg"
    ]
  },
  {
    "id": "icam-59130",
    "name": "Vagner Pro SL50 Professional RGB LED Light Stick",
    "brand": "VAGNER PRO",
    "category": "accessories",
    "price": 19.8,
    "originalPrice": 23.76,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/07/Vagner-Pro-SL50-Professional-RGB-LED-Light-Stick.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 30W Powerful Output: Bright, consistent lighting. 5000mAh Built-in Battery: Long-lasting cordless use. Full RGB Control: Millions of customizable colors. Creative FX Modes: Built-in lighting effects. Compact & Portable: Lightweight for any setup.",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Power",
        "value": "10-50W"
      },
      {
        "label": "Power Source",
        "value": "DC 5V 2A"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/07/Vagner-Pro-SL50-Professional-RGB-LED-Light-Stick.png",
      "https://icamstore.net/wp-content/uploads/2026/07/H1c50f473ec12479c8d89fa87e7b81a60s.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/H0d542afd0d714595988a8f60b7793294u.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/H90faa5465f2a4ec2bab1e20cad8b77bcK.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/Hbedf7e753354424a854514badf3b9bf0Q.jpg",
      "https://icamstore.net/wp-content/uploads/2026/07/Hf855d71e31f745e38141848fdb0cd428Y.jpg"
    ]
  },
  {
    "id": "icam-59040",
    "name": "Vagner Pro PL-100A 100W COB LED Bi-Color Video Light with 12 FX Effects",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 39.6,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-PL-100A-100W-COB-LED-Bi-Color-Video-Light-with-12-FX-Effects.png",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 100W High-Power COB LED delivers up to 12,000 Lux of bright and consistent professional lighting. 2700K–6500K Bi-Color Adjustment provides smooth switching between warm and daylight color temperatures. CRI ≥95 ensures accurate natural colors for professional photo and video production. ",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Gray"
      },
      {
        "label": "Power",
        "value": "100W"
      },
      {
        "label": "CRI",
        "value": ">95"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-PL-100A-100W-COB-LED-Bi-Color-Video-Light-with-12-FX-Effects.png",
      "https://icamstore.net/wp-content/uploads/2026/06/ADDwing_PL-100A.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/82fa0ac74ab2f3a231504b7b971add4-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/25751701679913_.pic_hd-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/IMG_7398-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/PL100A-01-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Product_image_on_white_background_202607251353.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/PL100A.jpg"
    ]
  },
  {
    "id": "icam-58730",
    "name": "General 3-Section Double Articulated Extension Arm with 5/8&#8243; Hex Pin",
    "brand": "General",
    "category": "accessories",
    "price": 14.85,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/General-3-Section.webp",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 3-section articulated arm for flexible positioning Quick-lock system for fast and secure adjustments Supports equipment up to 2kg Dual mounting threads: 1/4&#8243;-20 and 3/8&#8243;-16 female Ideal for flashes, LED lights, and other lightweight studio accessories",
    "specs": [
      {
        "label": "Brand",
        "value": "General"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/General-3-Section.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l140.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-2.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-3.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-4.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-5.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-6.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-7.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-8.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-9.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-10.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960-11.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/s-l960.webp"
    ]
  },
  {
    "id": "icam-58738",
    "name": "GenPro 7 In 1 Multi Purpose Cleaning Kit",
    "brand": "General",
    "category": "accessories",
    "price": 4.95,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-27-2026-02_53_36-PM.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 7-in-1 cleaning kit for cameras, lenses, filters, phones, and laptops Powerful air blower removes dust and debris safely without direct contact Soft microfiber cleaning cloth for streak-free, scratch-free cleaning Compact, lightweight, and portable design for convenient storage and trav",
    "specs": [
      {
        "label": "Brand",
        "value": "General"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-27-2026-02_53_36-PM.png"
    ]
  },
  {
    "id": "icam-58722",
    "name": "Nanlite Rectangular Softbox with Bowens Mount 60&#215;90",
    "brand": "Nanlite",
    "category": "accessories",
    "price": 23.76,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-27-2026-02_29_19-PM.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 35 × 24&#8243; rectangular softbox for soft, natural-looking light Bowens mount compatible with Nanlite and other Bowens-mount lights Ideal for use as a key light or fill light in photo and video productions Silver reflective interior enhances light output and efficiency Includes front ",
    "specs": [
      {
        "label": "Brand",
        "value": "Nanlite"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-27-2026-02_29_19-PM.png",
      "https://icamstore.net/wp-content/uploads/2026/06/1633002353_IMG_1612237-1696260870.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1633002353_IMG_1612239-1696260874.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1633002353_IMG_1612240-1696260877.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Nanlite-Rectangular-Softbox.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1633001755_1664022-1696260866.jpg"
    ]
  },
  {
    "id": "icam-58695",
    "name": "NiSi Cinema 6.6&#215;6.6 Pure Clear Filter",
    "brand": "NiSi",
    "category": "accessories",
    "price": 297.03,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/NiSi-Cinema.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Clear Protection Filter Prevents Damage to Lens 1x Filter Factor, +0 Stop No Effect on Image Non-Coated Optical Glass Construction Leatherette Pouch",
    "specs": [
      {
        "label": "Brand",
        "value": "NiSi"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      },
      {
        "label": "Filter Type",
        "value": "Clear"
      },
      {
        "label": "Filter Size",
        "value": "6.6 x 6.6\" / 167.6 x 167.6 mm"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/NiSi-Cinema.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1475068580_IMG_692391.jpg"
    ]
  },
  {
    "id": "icam-58675",
    "name": "Insta360 X5 360° Invisible Dive Bundle Action Camera",
    "brand": "Insta360",
    "category": "cameras",
    "price": 752.48,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Insta360-X5-360-Action-Camera-Diving-Bundle.avif",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 8K 360° video recording with advanced Triple AI imaging system Replaceable, scratch-resistant lenses with improved drop durability FlowState Stabilization and 360° Horizon Lock for ultra-smooth footage Waterproof up to 15m (49ft), or 60m (197ft) with the Invisible Dive Case Invisible Di",
    "specs": [
      {
        "label": "Brand",
        "value": "Insta360"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Sensor Size",
        "value": "1/1.28\""
      },
      {
        "label": "Lens Aperture",
        "value": "F2.0"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-X5-360-Action-Camera-Diving-Bundle.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/i3-842126112676_2.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/i3-842126112676_3.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/i3-842126112676_4.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/i3-842126112676_5.avif"
    ]
  },
  {
    "id": "icam-58599",
    "name": "Generic DV1800 Professional Photography Tripod Stand",
    "brand": "Generic",
    "category": "accessories",
    "price": 64.36,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_ih8kk5ih8kk5ih8k-1.png",
    "badge": "SAVE 19%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features: Heavy-duty aluminum alloy construction with up to 10kg load capacity Adjustable height up to 180cm with 3-section locking legs Hydraulic fluid head with 360° pan and -80° to +90° tilt movement Quick-release plate with 1/4&#8243; and 3/8&#8243; mounting screws Built-in bubble level and ",
    "specs": [
      {
        "label": "Brand",
        "value": "Generic"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Material",
        "value": "Aluminum Alloy"
      },
      {
        "label": "Leg Sections",
        "value": "3"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_ih8kk5ih8kk5ih8k-1.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_prngssprngssprng.png"
    ]
  },
  {
    "id": "icam-58030",
    "name": "Zhiyun CINEPEER CQ5 Smartphone Gimbal",
    "brand": "Zhiyun",
    "category": "gimbals",
    "price": 79.21,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_uhbr0muhbr0muhbr.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 3-Axis Stabilization for smooth and steady video capture Compatible with Android & iOS smartphones Compact Folding Design for easy portability and storage Magnetic Fill Light for enhanced shooting in low-light conditions Voice Control with \"Hey Cami\" for convenient hands-free operation",
    "specs": [
      {
        "label": "Brand",
        "value": "Zhiyun"
      },
      {
        "label": "Category",
        "value": "gimbals"
      },
      {
        "label": "Color",
        "value": "Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_uhbr0muhbr0muhbr.png",
      "https://icamstore.net/wp-content/uploads/2026/06/ZhiyunCinepeerCQ5AIStandardPhoneGimbalStabilizer_1.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ZhiyunCinepeerCQ5AIStandardPhoneGimbalStabilizer_3.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ZhiyunCinepeerCQ5AIStandardPhoneGimbalStabilizer_4.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ZhiyunCinepeerCQ5AIStandardPhoneGimbalStabilizer_7-768x768-1.webp"
    ]
  },
  {
    "id": "icam-58459",
    "name": "Nanlite PavoTube II 60XR RGB LED Pixel Tube Light (8&#8242;, 2-Light Kit)",
    "brand": "Nanlite",
    "category": "lighting",
    "price": 1980.2,
    "originalPrice": 2376.24,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Nanlite-PavoTube-II-60XR-RGB-LED-Pixel-Tube-Light-8-2-Light-Kit.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Photo, Video & Film Production Output: 991 Lux at 3.3&#8242; for Each Light 2700-12,000K CCT; RGB Mode Onboard, Wireless, DMX & App Control LumenRadio CRMX CRI 97 | TLCI 98 15 Special Effects & 10 Pixel Effects Built-In Rechargeable Battery; AC Power Three 1/4&#8243;-20 Receivers fo",
    "specs": [
      {
        "label": "Brand",
        "value": "Nanlite"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "2x LED Light Tube/Wand"
      },
      {
        "label": "Included Storage Case",
        "value": "Yes"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Nanlite-PavoTube-II-60XR-RGB-LED-Pixel-Tube-Light-8-2-Light-Kit.jpg"
    ]
  },
  {
    "id": "icam-58270",
    "name": "Godox VC1 USB Cable with Charging Adapter",
    "brand": "Godox",
    "category": "accessories",
    "price": 13.86,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1563188915_1492614.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Firmware Updates and Charging",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Connector",
        "value": "USB Cable"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1563188915_1492614.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1563188422_IMG_1217312-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1563188422_IMG_1217313.jpg"
    ]
  },
  {
    "id": "icam-58209",
    "name": "Godox FTR-16 Wireless Power Flash Strobe Controller Receiver",
    "brand": "Godox",
    "category": "lighting",
    "price": 4.95,
    "originalPrice": 6.93,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Godox-FTR-16-Wireless-Power-Flash-Strobe-Controller-Receiver.webp",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Wireless flash control with up to 50m operating range 16-channel system for reliable multi-flash operation Remote flash power adjustment and flash triggering Control of modeling light and buzzer remotely Compatible with Godox Witstro, QT, QS, Gemini GT/GS , and selected Godox flash syst",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Godox-FTR-16-Wireless-Power-Flash-Strobe-Controller-Receiver.webp"
    ]
  },
  {
    "id": "icam-58133",
    "name": "Zhiyun TransMount CRANE 2S DualCam Extension Module",
    "brand": "Zhiyun",
    "category": "accessories",
    "price": 7.92,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Zhiyun-TransMount-CRANE-2S-DualCam-Extension-Module.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For CRANE 2S and 2S PRO Mount Second Camera to Gimbal Dual Quick Release Interface Camera Mounting Screw Quick Release Plate Supports Compact Camera/Lens Combos",
    "specs": [
      {
        "label": "Brand",
        "value": "Zhiyun"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Mounting",
        "value": "Camera Mount: Quick Release Plate with Built-In 1/4\"-20 Male Screw"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Zhiyun-TransMount-CRANE-2S-DualCam-Extension-Module.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1685977205_IMG_2011515.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1685977205_IMG_2011516.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1685977205_IMG_2011517.jpg"
    ]
  },
  {
    "id": "icam-58141",
    "name": "Ulanzi OP-9 Z-Axis Axis Stabilizer Bracket Handle Grip for Osmo Pocket",
    "brand": "Ulanzi",
    "category": "accessories",
    "price": 7.92,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Ulanzi-OP-9-Z-Axis-Axis-Stabilizer-Bracket-Handle-Grip-for-Osmo-Pocket.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For DJI Osmo Pocket Gimbal Camera Adds Vertical Axis Stabilization One-Click Operation Adjustable Spring 1/4&#8243;-20 Thread for Separate Tripod",
    "specs": [
      {
        "label": "Brand",
        "value": "Ulanzi"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Material of Construction",
        "value": "ABS Plastic, Metal"
      },
      {
        "label": "Dimensions",
        "value": "5.3 x 2.4 x 2.2\" / 13.5 x 6 x 5.5 cm"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Ulanzi-OP-9-Z-Axis-Axis-Stabilizer-Bracket-Handle-Grip-for-Osmo-Pocket.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266705.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266706.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266707.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266708.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266709.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266710.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266711.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266712.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266713.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266714.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1571936453_IMG_1266715.jpg"
    ]
  },
  {
    "id": "icam-58122",
    "name": "Zhiyun FIVERAY V60 Bi-Color LED Light Wand (1.4&#8242;, Black)",
    "brand": "Zhiyun",
    "category": "accessories",
    "price": 128.71,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1689151534_1775071.webpZhiyun-FIVERAY-V60-Bi-Color-LED-Light-Wand-1.4-Black.webp",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Content Creators & Vloggers Output: 1730 Lux at 3.3&#8242; (5500K) 2700-6500K CCT Onboard Control CRI 96 | TLCI 98 Six Special Effects & Music Mode Built-In USB-Rechargeable Battery 1/4&#8243;-20 Mounting MAX Mode for Higher Output, Fan Cooled Includes USB-C Cable, Power Supply & Ba",
    "specs": [
      {
        "label": "Brand",
        "value": "Zhiyun"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "1x LED Light Tube/Wand"
      },
      {
        "label": "Included Storage Case",
        "value": "Yes"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1689151534_1775071.webpZhiyun-FIVERAY-V60-Bi-Color-LED-Light-Wand-1.4-Black.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/1689151748_IMG_2037548.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1689151748_IMG_2037549.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/1689151748_IMG_2037550.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/1689151748_IMG_2037551.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/1689151748_IMG_2037552.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/1689151748_IMG_2037553.jpg"
    ]
  },
  {
    "id": "icam-58084",
    "name": "Yongnuo YN-622N i-TTL Wireless Flash Transceiver & TX Controller Kit for Nikon",
    "brand": "Yongnuo",
    "category": "lighting",
    "price": 17.8,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Yongnuo-YN-622N-i-TTL-Wireless-Flash-Transceiver-TX-Controller-Kit-for-Nikon.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compatible with Nikon i-TTL Frequency: 2.4 GHz Range: 328&#8242; TTL, Manual, and Multi Flash Modes 7 Channels, 3 Groups Transceiver with Hot Shoe & PC Sync Port LCD Screen, AF Assist Beam High Speed and 1st- and 2nd-Curtain Sync USB Port for Firmware Updates Each Device Runs on 2 AA Ba",
    "specs": [
      {
        "label": "Brand",
        "value": "Yongnuo"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Groups/Channels",
        "value": "3 (A, B, C), 7"
      },
      {
        "label": "Wireless Range",
        "value": "328' / 100 m"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Yongnuo-YN-622N-i-TTL-Wireless-Flash-Transceiver-TX-Controller-Kit-for-Nikon.jpg"
    ]
  },
  {
    "id": "icam-57380",
    "name": "Neewer CA108 Vertical Camera Mount for DJI RS 4, RS 3, RS 3 Pro & RS 2",
    "brand": "Neewer",
    "category": "accessories",
    "price": 56.44,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1755533707_1914345.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Transition between Horizontal/Vertical 180° Rotating Base Safety Locks, Quick Installation Quick Release Receiver Durable Aluminum Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Neewer"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Mounting",
        "value": "Receiver Mount: Proprietary"
      },
      {
        "label": "Load Capacity",
        "value": "Not Specified by Manufacturer"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1755533707_1914345.jpg"
    ]
  },
  {
    "id": "icam-58761",
    "name": "Weifeng WT-806F Wall light stand",
    "brand": "General",
    "category": "accessories",
    "price": 23.74,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/62c5d76107954_1-thumb-1.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Net Weight: 2kg Max. Loading Weight: 6kg Tube Diameter: 36mm/32mm Spigot: 1/4″ and 3/8″ Colour: Silver Material: Aluminum Boom Length: 75-130cm Boom Sections: 2",
    "specs": [
      {
        "label": "Brand",
        "value": "General"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/62c5d76107954_1-thumb-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/62c5d764e6d12_14731293869789-thumb.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/62c5d765ccfc2_UMpFyV-1593791950-thumb.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/62c5d7660a7b6_vhek0B-1593791950-thumb.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/62c5d764455f8_14731293863886-thumb.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Weifeng-WT-806F-Wall-light-stand.jpg"
    ]
  },
  {
    "id": "icam-58758",
    "name": "Generic Light Stand Carrying Bag",
    "brand": "Generic",
    "category": "accessories",
    "price": 1.98,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Generic-Light-Stand-Carrying-Bag.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Durable bag for storing and transporting light stands Lightweight design with convenient carrying handles",
    "specs": [
      {
        "label": "Brand",
        "value": "Generic"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Generic-Light-Stand-Carrying-Bag.png"
    ]
  },
  {
    "id": "icam-58682",
    "name": "Xtar SC1 Fast Charger for Li-ion Batteries",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 24.75,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-XTAR-SC1-Charger.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compatible with multiple Li-ion battery sizes, including 18650, 20700, 21700, and 26650 USB-C powered for convenient charging from adapters, power banks, laptops, and solar chargers Built-in safety protection against overcharging, overheating, and reverse polarity LED charging indicator",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-XTAR-SC1-Charger.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/SC1-Bundle__85207.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/xtar-sc1-fast-charger-for-li-ion-batteries-1__45663.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/xtar-sc1-fast-charger-for-li-ion-batteries-2__13481.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/xtar-sc1-fast-charger-for-li-ion-batteries-3__98882.jpg"
    ]
  },
  {
    "id": "icam-58448",
    "name": "Tilta 3-Stage 4 x 5.65&#8243; Carbon Fiber Clip-On MB-T12 Matte Box (80mm)",
    "brand": "Tilta",
    "category": "lenses",
    "price": 653.47,
    "originalPrice": 693.07,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Fits 80mm Lens Diameter Three Fixed Filter Stages 15mm LWS Rod Clamp Included One Top Flag & Five Hard Mattes Three 4 x 5.65&#8243; Filter Trays Carbon Fiber & Aluminum Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Lens Compatibility",
        "value": "80 mm Clamp"
      },
      {
        "label": "Attachment Method",
        "value": "Rod Ports (15 mm LWS / 60 mm Spacing via Included Slide-On Adapter)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1648489823_IMG_1723003.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1648489823_IMG_1723004.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1648489823_IMG_1723005.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1648489823_IMG_1723006.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1648489823_IMG_1723007.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1648489823_IMG_1723021.jpg"
    ]
  },
  {
    "id": "icam-58442",
    "name": "Eirmai Camera backpack EMB-D3199 High copy",
    "brand": "Eirmai",
    "category": "accessories",
    "price": 15.84,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Eirmai-Camera-backpack-EMB-D3199-High-copy.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features: Spacious design for camera, lenses, and accessories Padded interior dividers for equipment protection Water-resistant material for outdoor use",
    "specs": [
      {
        "label": "Brand",
        "value": "Eirmai"
      },
      {
        "label": "Category",
        "value": "accessories"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Eirmai-Camera-backpack-EMB-D3199-High-copy.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Eirmai-Camera-backpack-EMB-D3199.png"
    ]
  },
  {
    "id": "icam-58077",
    "name": "Yongnuo i-TTL Transceiver YN622N II for Nikon Cameras (2-Pack)",
    "brand": "Yongnuo",
    "category": "lighting",
    "price": 17.8,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Yongnuo-i-TTL-Transceiver-YN622N-II-for-Nikon-Cameras-2-Pack.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Nikon i-TTL Wireless Flash Control High-Speed Sync (HSS) Support 300 ft (100 m) Wireless Range i-TTL, Manual & Multi Flash Modes Advanced Group & Flash Control Functions",
    "specs": [
      {
        "label": "Brand",
        "value": "Yongnuo"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Groups/Channels",
        "value": "3 (A, B, C), 7"
      },
      {
        "label": "Wireless Range",
        "value": "300' / 91 m"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Yongnuo-i-TTL-Transceiver-YN622N-II-for-Nikon-Cameras-2-Pack.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1447326003_IMG_553700.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1447326003_IMG_553701.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1447326003_IMG_553702.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1447326003_IMG_553703.jpg"
    ]
  },
  {
    "id": "icam-58041",
    "name": "Hollyland Lark Max 2 Wireless Monitoring Earphones",
    "brand": "Hollyland",
    "category": "audio",
    "price": 69.31,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Wireless-Monitoring-Earphones.webp",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Ultra-Low Latency: Real-time audio monitoring to sync perfectly with your live recording. Open-Ear Comfort: Lightweight over-ear design that eliminates ear fatigue during long shoots. Dual-Mode Connection: Supports 2. 4GHz wireless, Bluetooth, and a 3. 5mm jack for wide compatibility. H",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Wireless-Monitoring-Earphones.webp"
    ]
  },
  {
    "id": "icam-58031",
    "name": "Hollyland Lark Max 2 Wireless Monitoring Earphones with Charging Case",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 99.01,
    "originalPrice": 118.81,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Wireless-Monitoring-Earphones-with-Charging-Case.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Ultra-Low Latency: Real-time audio monitoring to sync perfectly with your live recording. Open-Ear Comfort: Lightweight over-ear design that eliminates ear fatigue during long shoots. Dual-Mode Connection: Supports 2. 4GHz wireless, Bluetooth, and a 3. 5mm jack for wide compatibility. H",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Wireless-Monitoring-Earphones-with-Charging-Case.jpg"
    ]
  },
  {
    "id": "icam-58025",
    "name": "Hollyland Lark M2 Bag for Charging Case",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 4.95,
    "originalPrice": 6.93,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/M2.png",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Designed specifically for the Hollyland LARK M2 Charging Case",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/M2.png"
    ]
  },
  {
    "id": "icam-58012",
    "name": "Hollyland Lark A1 Bag for Charging Case",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 3.96,
    "originalPrice": 4.95,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-27-2026-01_28_48-PM.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Custom-designed for the Hollyland LARK A1 Charging Case",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-27-2026-01_28_48-PM.png"
    ]
  },
  {
    "id": "icam-57977",
    "name": "Hollyland Lark M2 Magnet (1 Piece)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 2.48,
    "originalPrice": 2.97,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-M2-Magnet-.jpeg",
    "badge": "SAVE 16%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK M2 Transmitter Units Attach Transmitter to Lapel ≥2.5 N Vertical Strain Force",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-M2-Magnet-.jpeg"
    ]
  },
  {
    "id": "icam-58011",
    "name": "Canon PowerShot IXUS 285 HS Digital Camera (Black)",
    "brand": "Canon",
    "category": "cameras",
    "price": 574.26,
    "originalPrice": 693.07,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Canon-PowerShot-IXUS-285-HS-Digital-Camera-Black.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features High-resolution 20.2MP CMOS sensor for detailed images and rich color reproduction. Powerful 12x optical zoom with ZoomPlus technology extending up to 24x. Full HD video recording with Intelligent Image Stabilization for steady footage. Built-in Wi-Fi and NFC for quick and convenient im",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Canon-PowerShot-IXUS-285-HS-Digital-Camera-Black.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Canon-PowerShot-IXUS-285-HS-Digital-Camera-Black-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Canon-PowerShot-IXUS-285-HS-Digital-Camera-Black-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Canon-PowerShot-IXUS-285-HS-Digital-Camera-Black-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Canon-PowerShot-IXUS-285-HS-Digital-Camera-Black-5.jpg"
    ]
  },
  {
    "id": "icam-57970",
    "name": "Hollyland USB-A to USB-C Cable",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 3.96,
    "originalPrice": 4.95,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-USB-A-to-USB-C-Cable.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Charging support: used for charging Hollyland receiver charging cases",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-USB-A-to-USB-C-Cable.png"
    ]
  },
  {
    "id": "icam-58006",
    "name": "Hollyland Furry Windscreen for LARK M2s (1 Piece)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 2.48,
    "originalPrice": 2.97,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_4e3j7s4e3j7s4e3j.png",
    "badge": "SAVE 16%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Designed specifically for Hollyland LARK M2S transmitters Reduces wind noise for cleaner outdoor recordings",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_4e3j7s4e3j7s4e3j.png"
    ]
  },
  {
    "id": "icam-58003",
    "name": "Hollyland Premium USB-C to 3.5mm Audio Adapter Receiver Module for Lark Max 2 Wireless Microphone",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Premium-USB-C-to-3.5mm-Audio-Adapter-Receiver-Module-for-Lark-Max-2-Wireless-Microphone.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Seamless Compatibility: Purpose-built to work perfectly with the Lark Max wireless microphone system and a wide range of Type-C devices. Lossless Audio Transmission: Delivers crystal-clear sound quality with zero latency, ensuring your recordings and monitoring remain perfectly synced. ",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Premium-USB-C-to-3.5mm-Audio-Adapter-Receiver-Module-for-Lark-Max-2-Wireless-Microphone.png"
    ]
  },
  {
    "id": "icam-58000",
    "name": "Hollyland Premium Silicone Protective Case Sleeve for Lark Max 2 Microphone",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 4.95,
    "originalPrice": 5.94,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Premium-Silicone-Protective-Case-Sleeve-for-Lark-Max-2-Microphone.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Perfect Tailored Fit: Precision-molded to seamlessly wrap around the Larm Max 2 microphone, ensuring full coverage and security. Shock-Absorbing Protection: Made from premium, flexible silicone that shields your device from impacts, bumps, and accidental drops. Anti-Scratch & Dustproof:",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Premium-Silicone-Protective-Case-Sleeve-for-Lark-Max-2-Microphone.png"
    ]
  },
  {
    "id": "icam-57995",
    "name": "Hollyland Lark Max 2 Replacement Magnetic Clip Accent (Back Magnet)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 2.97,
    "originalPrice": 3.96,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Replacement-Magnetic-Clip-Accent-Back-Magnet.png",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Powerful Magnetic Hold: High-strength magnet ensures a rock-solid, secure attachment to clothing that won't slip during active movement. Discrete & Low-Profile: Allows for neat, hidden microphone placement under or on garments for a clean, professional look on camera. Fabric-Safe Attach",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Replacement-Magnetic-Clip-Accent-Back-Magnet.png"
    ]
  },
  {
    "id": "icam-57989",
    "name": "Hollyland Lark Max 2 USB-C Wireless Receiver Adapter",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-USB-C-Wireless-Receiver-Adapter.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Direct USB-C Connectivity: Plug-and-play design connects the Hollyland Lark Max 2 system instantly to Android devices, iPhone 15/16 series, and Type-C laptops. Ultra-Compact & Wireless: Lightweight, low-profile build plugs directly into your device, eliminating messy cable clutter on yo",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-USB-C-Wireless-Receiver-Adapter.png"
    ]
  },
  {
    "id": "icam-57981",
    "name": "Hollyland Lark MAX 2 Lightning Cable for iPhone",
    "brand": "Hollyland",
    "category": "audio",
    "price": 19.8,
    "originalPrice": 24.75,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-MAX-2-Lightning-Cable-for-iPhone.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Perfect Compatibility: Engineered specifically for the Hollyland Lark MAX 2 system. Direct Lightning Link: Connects your receiver directly to iPhones without extra adapters. Durable Build: Features robust construction for reliable field use, as pictured in \"Gemini_Generated_Image_cvtvdi",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-MAX-2-Lightning-Cable-for-iPhone.png"
    ]
  },
  {
    "id": "icam-57975",
    "name": "Hollyland Lark Max 2 Genuine Type-C to Type-C Cable",
    "brand": "Hollyland",
    "category": "audio",
    "price": 19.8,
    "originalPrice": 24.75,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Genuine-Type-C-to-Type-C-Cable.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Tailored for Lark Max 2: Precision-fit engineered specifically for the Lark Max 2 system. Stable Transmission: Premium copper cores for flawless, zero-latency audio delivery. Fast Charging Support: Efficiently powers up your microphone system on set. Durable & Shielded: Built with anti-",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Hollyland-Lark-Max-2-Genuine-Type-C-to-Type-C-Cable.png"
    ]
  },
  {
    "id": "icam-57954",
    "name": "Hollyland LARK MAX 2 Charging Case (Space Gray)",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1748349639_1895902.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK MAX 2 Wireless Mic Systems Charges 2 Transmitters & Camera Receiver 2800mAh Internal Battery Holds USB-C Plug-In Receiver LED Status Light",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1748349639_1895902.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497316.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497315.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497314.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497313.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497312.jpg"
    ]
  },
  {
    "id": "icam-57951",
    "name": "Hollyland Furry Windscreen for LARK MAX 2",
    "brand": "Hollyland",
    "category": "audio",
    "price": 3.96,
    "originalPrice": 6.93,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1778604146_1969806.jpg",
    "badge": "SAVE 43%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Effective wind noise reduction for outdoor recording environments. Designed specifically for Hollyland LARK MAX 2 microphones. Soft furry material helps minimize wind interference while maintaining clear sound. Lightweight and easy to install and remove. Ideal for vlogging, interviews, ",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1778604146_1969806.jpg"
    ]
  },
  {
    "id": "icam-57947",
    "name": "Hollyland Hot Shoe Adapter for LARK MAX 2",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 19.8,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1748355250_1898331.jpg",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Adapts LARK MAX 2 Receiver Proprietary Interface Multi Interface Shoe for Sony Cameras Rubber Pin Cover Included",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1748355250_1898331.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748355240_IMG_2502410.jpg"
    ]
  },
  {
    "id": "icam-57939",
    "name": "Hollyland LARK MAX 2 Camera-Mount Wireless Receiver (Space Gray, 2.4 GHz)",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 59.41,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1748349639_1895901.jpg",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK MAX 2 Wireless Mic Systems Camera-Mount 4-Channel Receiver Unit Supports Wireless Audio Monitoring 3.5mm Line Out, 3.5mm Headphones Out USB-C Port for Audio, Power, Charging 32-Bit Float Audio at 48 kHz via USB-C Onboard Controls, Volume Dial 12-Hour Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1748349639_1895901.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497278.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497277.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497276.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497275.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748349635_IMG_2497274.jpg"
    ]
  },
  {
    "id": "icam-57811",
    "name": "Insta360 Luna Ultra Creator Bundle (Cosmic Black)",
    "brand": "Insta360",
    "category": "audio",
    "price": 891.09,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Creator-Bundle-Cosmic-Black.jpg",
    "badge": "SAVE 18%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Capture up to 8K30 Action Footage Dual Lenses, 1&#8243; & 1/1.3&#8243; CMOS Sensors Detachable 2&#8243; OLED Screen Triple AI Chip, 47GB Internal Storage 3-Axis Stabilization, AI Tracking Battery Handle, Wide-Angle Lens Mic Pro Wireless Transmitter Built-In Leica Color Profiles",
    "specs": [
      {
        "label": "Brand",
        "value": "Insta360"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Cosmic Black"
      },
      {
        "label": "Number of Axes",
        "value": "Three: Pitch (Tilt) / Roll / Yaw (Pan)"
      },
      {
        "label": "Rotation Range",
        "value": "Controllable Range Yaw (Pan): 292° (-57 to 235°) Roll: 100° (-50 to 50°) Pitch (Tilt): 177° (-57 to 120°), Mechanical Range Yaw (Pan): 303° (-63 to 240°) Roll: 283° (-63 to 220°) Pitch (Tilt): 278° (-98 to 180°)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Creator-Bundle-Cosmic-Black.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-19.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-18.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-17.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-16.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-15.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-14.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-13.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-10-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-9-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-8-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-7-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-6-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-5-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-4-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-3-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-2-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black.jpg"
    ]
  },
  {
    "id": "icam-57752",
    "name": "K&F Canon LP-E6NH Battery Kit – 2 Batteries and Dual Charger (KF28.0021)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 69.31,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-13.jpg",
    "badge": "SAVE 36%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Dual-slot charger charges two LP-E6NH batteries simultaneously Includes USB to USB Type-C charging cable USB Type-C and Micro USB charging input options Fully compatible with Canon LP-E6, LP-E6N, LP-E6NH, and K&F Concept batteries Charge from power banks, laptops, PCs, car chargers, and",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-13.jpg"
    ]
  },
  {
    "id": "icam-57535",
    "name": "Tilta Full Camera Cage for Canon R8 (TA-T28-FCC-B) Black",
    "brand": "Tilta",
    "category": "accessories",
    "price": 95.05,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-for-Canon-R8-TA-T28-FCC-B-Black.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Protect and Expand Your Camera Rig Arca-Style Quick Release Multiple Anti-Twist 1/4&#8243;-20 Threads 2 Cold Shoe Mounts Built-In Cable Clamp Integrated Lens Adapter Support",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Support Type",
        "value": "Cage"
      },
      {
        "label": "Grip Type",
        "value": "Grip Required (Not Included)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-for-Canon-R8-TA-T28-FCC-B-Black.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516726_1779966.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058566.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058568.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058569.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058570.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058571.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058572.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058573.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058574.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058575.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058576.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058577.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058578.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1691516822_IMG_2058579.jpg"
    ]
  },
  {
    "id": "icam-57689",
    "name": "Hollyland LARK M2S Wireless Receiver with Lightning Connector for Mobile Devices (2.4 GHz, Space Gray)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 29.7,
    "originalPrice": 33.66,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-21-2026-05_00_38-PM.png",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Hollyland LARK M2S Wireless Systems Plug-In Receiver Unit Onboard Button Controls Lightning Connector Record Audio with Mobile Devices 1000&#8242; Transmission Distance",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Wireless Technology",
        "value": "Digital 2.4 GHz"
      },
      {
        "label": "Diversity",
        "value": "Non-Diversity"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Jun-21-2026-05_00_38-PM.png"
    ]
  },
  {
    "id": "icam-57675",
    "name": "Hollyland LARK M2S Wireless Receiver with USB-C Connector for Mobile Devices (2.4 GHz, Space Gray)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 29.7,
    "originalPrice": 33.66,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870574.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Hollyland LARK M2S Wireless Systems Plug-In Receiver Unit Onboard Button Controls USB-C Connector Record Audio with Mobile Devices 1000&#8242; Transmission Distance",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Wireless Technology",
        "value": "Digital 2.4 GHz"
      },
      {
        "label": "Diversity",
        "value": "Non-Diversity"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870574.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2404016.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2404017.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2404018.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2404019.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2404020.jpg"
    ]
  },
  {
    "id": "icam-57665",
    "name": "Hollyland LARK M2S Wireless Camera-Mount Receiver for LARK M2S Systems (2.4 GHz, Space Gray)",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 29.7,
    "originalPrice": 33.66,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870568.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Hollyland LARK M2S Wireless Systems Camera-Mount Dual-Channel Receiver Unit Onboard Controls, Volume Dial 3.5mm TRS Output, USB-C Port 1000&#8242; Transmission Distance 145mAh Battery, 8.5-Hour Runtime",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Wireless Technology",
        "value": "Digital 2.4 GHz"
      },
      {
        "label": "Diversity",
        "value": "Non-Diversity"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870568.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403940.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403941.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403942.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403943.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403944.jpg"
    ]
  },
  {
    "id": "icam-57657",
    "name": "Hollyland LARK M2S Wireless Microphone Transmitter for LARK M2S Systems (2.4 GHz, Space Gray)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 29.7,
    "originalPrice": 33.66,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870573.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Hollyland LARK M2S Wireless Systems Ultracompact Transmitter with Omni Mic Environmental Noise Cancellation 1000&#8242; Transmission Distance 85mAh Battery, 9-Hour Runtime Includes Windscreen, Charging Cable",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Wireless Technology",
        "value": "Digital 2.4 GHz"
      },
      {
        "label": "Diversity",
        "value": "Non-Diversity"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870573.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403930.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403931.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403932.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403933.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403934.jpg"
    ]
  },
  {
    "id": "icam-57650",
    "name": "Hollyland LARK A1 Clip-On Wireless Microphone Transmitter (Space Gray, 2.4 GHz)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 14.85,
    "originalPrice": 17.82,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1748336844_1895899.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK A1 Wireless Mic Systems Ultracompact Clip-On Transmitter Built-In Omnidirectional Microphone One-Touch Control Button Up to 9 Hours of Battery Life Configure with LarkSound APP Includes Furry Windscreen and Magnet Includes Charging Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1748336844_1895899.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497181.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497182.jpg"
    ]
  },
  {
    "id": "icam-57642",
    "name": "Hollyland LARK M2S Combo Version Charging Case (Space Gray)",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 43.56,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870569.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK M2S Combo Wireless System Holds 2 Transmitters & 2 Receivers 1300mAh Internal Battery Charges Components in <1.5 Hours",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Compatibility",
        "value": "Hollyland LARK M2S Wireless Microphone System"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1736408820_1870569.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403948.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403949.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403950.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403951.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1736408818_IMG_2403952.jpg"
    ]
  },
  {
    "id": "icam-57612",
    "name": "Hollyland LARK A1 Wireless Plug-In Receiver with Lightning Connector for iOS Devices (Space Gray, 2.4 GHz)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 14.85,
    "originalPrice": 17.82,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1748336844_1895895.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK A1 Wireless Mic Systems Lightning Connector for iOS Devices 2-Channel Plug-In Receiver Unit Transmitter-Mute Function Noise Cancellation On/Off Status LED USB Port Supports Charging While in Use",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Wireless Technology",
        "value": "Digital 2.4 GHz"
      },
      {
        "label": "Diversity",
        "value": "Non-Diversity"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1748336844_1895895.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497176.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497177.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497178.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497179.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497180.jpg"
    ]
  },
  {
    "id": "icam-56571",
    "name": "FeelWorld FW568 V3 6&#8243; IPS On-Camera Monitor",
    "brand": "FeelWorld",
    "category": "accessories",
    "price": 138.61,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-8.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features Updated 6&#8243; 1920 x 1080 IPS Display Up to 32 Custom 3D LUTs 4K HDMI In and Out Wide 160° Viewing Angle 1000:1 Contrast, 450 cd/m² Brightness 1/4&#8243;-20 Mounting Threads Tilt Arm with Cold Shoe Mount L-Series Battery Plate 8.4 VDC Output for Powering Camera Sunshade and Micro-HDM",
    "specs": [
      {
        "label": "Brand",
        "value": "FeelWorld"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Media/Memory Card Slot",
        "value": "No"
      },
      {
        "label": "HDR Support",
        "value": "No"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454724.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454723.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454722.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454721.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454720.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454719.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454718.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454717.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454716.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454715.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454714.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392418_IMG_2454713.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1742392382_IMG_2454712.jpg"
    ]
  },
  {
    "id": "icam-57622",
    "name": "Hollyland LARK A1 Wireless Plug-In Receiver with USB-C Connector for Mobile Devices (Space Gray, 2.4 GHz)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 14.85,
    "originalPrice": 17.82,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1748336844_1895900.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For LARK A1 Wireless Mic Systems USB-C Connector for iOS/Android Devices 2-Channel Plug-In Receiver Unit Transmitter-Mute Function Noise Cancellation On/Off Status LED USB Port Supports Charging While in Use",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Wireless Technology",
        "value": "Digital 2.4 GHz"
      },
      {
        "label": "Diversity",
        "value": "Non-Diversity"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1748336844_1895900.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497211.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497212.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497214.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497216.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1748336832_IMG_2497217.jpg"
    ]
  },
  {
    "id": "icam-57575",
    "name": "NamTu HeadLight NT1000R RGB Professional Black LED Video Lighting",
    "brand": "NamTu",
    "category": "lighting",
    "price": 99.01,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/NamTu-HeadLight-NT1000R-RGB-Professional-Black-LED-Video-Lighting.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features High-Power 200W Output Delivers up to 26,000 lumens for professional studio and video production lighting. Full RGB & Bi-Color Control Wide CCT range 2700–6500K plus RGB mode for complete creative freedom. High Color Accuracy CRI ≥96 ensures natural skin tones and true-to-life color rep",
    "specs": [
      {
        "label": "Brand",
        "value": "NamTu"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/NamTu-HeadLight-NT1000R-RGB-Professional-Black-LED-Video-Lighting.png"
    ]
  },
  {
    "id": "icam-57525",
    "name": "Tilta Remote Control Receiver Module for DJI Ronin(TGA-RCR)",
    "brand": "Tilta",
    "category": "gimbals",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1677083765_1634145.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Allows Full Wireless Control of Gimbal Quick Pairing with Wireless Controllers Powers from Gimbal Provides Hardwired Connection Option",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "gimbals"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Compatibility",
        "value": "DJI RS 2 / RS 3 Pro / RS 4 Pro / RS 5"
      },
      {
        "label": "Material of Construction",
        "value": "Aluminum Alloy Stainless Steel"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1677083765_1634145.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943189.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943190.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943191.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943192.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943193.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943194.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943195.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1677084497_IMG_1943196.jpg"
    ]
  },
  {
    "id": "icam-57508",
    "name": "Tilta Nucleus Autofocus Adapter & Dual Nano II Motor (WLC-T07-K1)Kit",
    "brand": "Tilta",
    "category": "accessories",
    "price": 693.07,
    "originalPrice": 732.67,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Nucleus-Autofocus-Adapter-Dual-Nano-II-Motor-Kit.jpg",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Utilize Sony Autofocus on PL Cine Lens Compatible with FX3, FX30, FX6 Includes Two Nucleus Nano II Motors Built-In Lens Profile Library Works with up to Two Wireless Motors Add Lenses to Library via Calibration",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "1x Lens Mount Adapter"
      },
      {
        "label": "Camera Compatibility",
        "value": "Sony FX6 Camera with Sony E Mount"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Nucleus-Autofocus-Adapter-Dual-Nano-II-Motor-Kit.jpg"
    ]
  },
  {
    "id": "icam-57496",
    "name": "Godox V1mid C TTL On-Camera Flash for Canon",
    "brand": "Godox",
    "category": "lighting",
    "price": 138.61,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1mid-S-TTL-On-Camera-Flash-for-Sony.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compact Round Head for Even & Soft Light Compatible with Canon E-TTL / E-TTL II 2.4 GHz X Wireless Radio System Manual, Multi, HSS & 2nd Curtain Sync Up to 650 Full-Power Flashes 1.7 sec Recycling Time Stable Continuous Shooting Touchscreen Design & LED Modeling Light Includes Battery, ",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Guide Number",
        "value": "Not Specified by Manufacturer"
      },
      {
        "label": "Auto Zoom Head",
        "value": "Yes"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1mid-S-TTL-On-Camera-Flash-for-Sony.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138651_IMG_2669117.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139314_IMG_2669139.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669118.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669119.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669120.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669121.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669122.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669123.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669124.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669125.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669126.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1-Mid-N-TTL-Flash-for-Nikon.jpg"
    ]
  },
  {
    "id": "icam-57481",
    "name": "Godox V1mid N TTL On-Camera Flash for Nikon",
    "brand": "Godox",
    "category": "lighting",
    "price": 138.61,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1mid-S-TTL-On-Camera-Flash-for-Sony.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compact Round Head for Even & Soft Light Compatible with Nikon i-TTL 2.4 GHz X Wireless Radio System Manual, Multi, HSS & 2nd Curtain Sync Up to 650 Full-Power Flashes 1.7 sec Recycling Time Stable Continuous Shooting Touchscreen Design & LED Modeling Light Includes Battery, Adapter & U",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Guide Number",
        "value": "Not Specified by Manufacturer"
      },
      {
        "label": "Auto Zoom Head",
        "value": "Yes"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1mid-S-TTL-On-Camera-Flash-for-Sony.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138651_IMG_2669116.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138651_IMG_2669117.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669118.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669119.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669120.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669121.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669122.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669123.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669124.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669125.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138697_IMG_2669126.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1-Mid-N-TTL-Flash-for-Nikon.jpg"
    ]
  },
  {
    "id": "icam-57459",
    "name": "Godox V1mid S TTL On-Camera Flash for Sony",
    "brand": "Godox",
    "category": "lighting",
    "price": 138.61,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1mid-S-TTL-On-Camera-Flash-for-Sony.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compact Round Head for Even & Soft Light Compatible with Sony ADI / P-TTL 2.4 GHz X Wireless Radio System Manual, Multi, HSS & 2nd Curtain Sync Up to 650 Full-Power Flashes 1.7 sec Recycling Time Stable Continuous Shooting Touchscreen Design & LED Modeling Light Includes Battery, Adapte",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Guide Number",
        "value": "Not Specified by Manufacturer"
      },
      {
        "label": "Auto Zoom Head",
        "value": "Yes"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Godox-V1mid-S-TTL-On-Camera-Flash-for-Sony.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138943_IMG_2669127.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770138943_IMG_2669128.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669129.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669130.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669131.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669132.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669133.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669134.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669135.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669136.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669137.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770139001_IMG_2669138.jpg"
    ]
  },
  {
    "id": "icam-57422",
    "name": "GoPro HERO13 Black & Accessories Bundle",
    "brand": "GoPro",
    "category": "cameras",
    "price": 465.35,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/GoPro-HERO13-Black-Accessories-Bundle.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features HERO13 Black Action Camera The Handler Floating Handgrip Enduro Batteries, 64GB microSD Card Carrying Case",
    "specs": [
      {
        "label": "Brand",
        "value": "GoPro"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Image Sensor",
        "value": "1/1.9\"-Type CMOS"
      },
      {
        "label": "Image Stabilization",
        "value": "Digital"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/GoPro-HERO13-Black-Accessories-Bundle.png"
    ]
  },
  {
    "id": "icam-57389",
    "name": "Canon PowerShot SX740 HS Digital Camera (Black)",
    "brand": "Canon",
    "category": "cameras",
    "price": 752.48,
    "originalPrice": 930.69,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-12.jpg",
    "badge": "SAVE 19%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 20.3MP CMOS Sensor DIGIC 8 Image Processor 24-960mm (35mm Equivalent) 40x Optical Zoom with OIS 3&#8243; Tilting LCD Display ISO 100-3200 (Extended) 4K Video and 4K Time-Lapse Recording Wi-Fi and Bluetooth Connectivity 10-fps Continuous Shooting",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Effective Sensor Resolution",
        "value": "20.3 Megapixel (5184 x 3888)"
      },
      {
        "label": "Image Sensor",
        "value": "1/2.3\"-Type"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1532996131_IMG_1036859.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1532996131_IMG_1036863.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1532996131_IMG_1036864.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1532996131_IMG_1036865.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536152701_IMG_1061379.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536153807_IMG_1061384.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536157897_IMG_1061532.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536158713_IMG_1061533.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536158713_IMG_1061547.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536158876_IMG_1061574.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536159614_IMG_1061584.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536159790_IMG_1061597.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536160553_IMG_1061614.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536161091_IMG_1061665.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536161448_IMG_1061677.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536161878_IMG_1036877.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536161880_IMG_1036878.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536162308_IMG_1061678.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1536162308_IMG_1061679.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1764869542_IMG_1036860.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1764869542_IMG_1036861.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1764869542_IMG_1036862.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1764869542_IMG_1061380.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1764869542_IMG_1061393.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1764869542_IMG_1061458.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1764869542_IMG_1061485.jpg"
    ]
  },
  {
    "id": "icam-57391",
    "name": "Professional Studio Lighting Bundle – 2x Ulanzi VL-120BI + 2x Photolex B600 RGB Tube Lights",
    "brand": "PHOTOOLEX",
    "category": "lighting",
    "price": 237.62,
    "originalPrice": 594.06,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Professional-Studio-Lighting-Bundle-–-2x-Ulanzi-VL-120BI-2x-Photolex-B600-RGB-Tube-Light-scaled.jpg",
    "badge": "SAVE 60%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Includes 2 Ulanzi VL-120BI COB lights and 2 Photolex B600 RGB tube lights for a complete professional lighting setup. Powerful bi-color COB lighting with adjustable brightness and color temperature for any shooting environment. RGB tube lights with vibrant colors and creative lighting e",
    "specs": [
      {
        "label": "Brand",
        "value": "PHOTOOLEX"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Professional-Studio-Lighting-Bundle-–-2x-Ulanzi-VL-120BI-2x-Photolex-B600-RGB-Tube-Light-scaled.jpg"
    ]
  },
  {
    "id": "icam-57353",
    "name": "Vagner Pro SL-17/PJ 120 RGB COB Flash Light Portable Professional Video Light",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 113.86,
    "originalPrice": 118.81,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-SL-17-RGB-COB-Flash-Light-–-Portable-Professional-Video-Light.png",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Powerful COB LED for bright, professional lighting. Full RGB colors with 2700K–6500K adjustable white balance. Compact and lightweight for easy portability. High CRI for accurate and natural color reproduction. USB-C rechargeable battery for convenient, long-lasting use.",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Gray"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-SL-17-RGB-COB-Flash-Light-–-Portable-Professional-Video-Light.png",
      "https://icamstore.net/wp-content/uploads/2026/06/14-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/1-15-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/2-1-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/3-1-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/4-2-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/5-4-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/8-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/9-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/10-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/11-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/12-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/7-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/6-4-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/13-scaled.png"
    ]
  },
  {
    "id": "icam-57350",
    "name": "Vagner Pro V-40 RGB Pocket Video Light",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 37.62,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-V-40-RGB-Pocket-Video-Light.jpg",
    "badge": "SAVE 24%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 40W RGB LED Light – Powerful SMD LED with CRI >95Ra . Wide CCT Range – Adjustable from 2700K–7500K . RGB & HSL Control – 360° hue and 1–100% brightness adjustment. 13 FX Lighting Effects – Multiple preset effects with 3 sub-modes each. 3200mAh Built-in Battery – Portable design with USB",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Model",
        "value": "V-40 RGB"
      },
      {
        "label": "Power",
        "value": "40w"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-V-40-RGB-Pocket-Video-Light.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2043-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2042-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2045-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2044-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2046-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2047-scaled.jpg"
    ]
  },
  {
    "id": "icam-57346",
    "name": "Vagner Pro M20 RGB 200W COB LED Video Light with Full RGB Color & 14 FX Effects",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 99.01,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-M20-RGB-200W-COB-LED-Video-Light-with-Full-RGB-Color-14-FX-Effects.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 200W COB LED for powerful professional lighting. Full RGB & 2700K–6500K for unlimited lighting creativity. CRI ≥95 for true-to-life color accuracy. 14 FX Modes for cinematic lighting effects. 1–100% Dimming & Bowens Mount for precise control and wide compatibility.",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-M20-RGB-200W-COB-LED-Video-Light-with-Full-RGB-Color-14-FX-Effects.png"
    ]
  },
  {
    "id": "icam-57335",
    "name": "Vagner Pro S-300 Bi 300W COB Video Light with Vagner Pro Led Stick RGB SL-50",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 108.91,
    "originalPrice": 118.81,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-S-300-SL-50-scaled.jpeg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 300W COB Output Powerful professional lighting Bi-Color 2700K–6500K Flexible color temperature CRI 95+ Accuracy True-to-life colors 1%-100% Dimming Smooth brightness control Bowens Mount & FX Creative lighting flexibility",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-S-300-SL-50-scaled.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/S-300W-scaled.png",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.1939-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.1943-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.1944-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.1945-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.1946-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2262-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2263-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/untitled.2264-scaled.jpg"
    ]
  },
  {
    "id": "icam-57325",
    "name": "Vagner Pro T100-S 100W RGB COB LED Video Light",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 74.26,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-T100-S-100W-RGB-COB-LED-Video-Light.png",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 100W COB LED Output High-power illumination Full RGB Control Unlimited creative colors 2700K-6500K CCT Warm to daylight adjustment CRI 95+ Accurate color reproduction 12 FX Effects Creative lighting presets",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Color mood",
        "value": "RGB"
      },
      {
        "label": "Power",
        "value": "100W"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-T100-S-100W-RGB-COB-LED-Video-Light.png",
      "https://icamstore.net/wp-content/uploads/2026/06/90e0c0b8f1f914632ebaec8b4cbc46f.png",
      "https://icamstore.net/wp-content/uploads/2026/06/T100-S-RGB-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H81b10982423f40259038e25cd8ad5aa5t.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/5-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H086889400a624a0ca59cfc962c60eb63r.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H8392b5b7992b4017892ef35440c178b2z.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H7182cd5e7e1a47468f60747a2d62d5e2N-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H9138b43669d34387bfb8c55d322b0564k-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/T100-RGB-RGB-模式.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H1e3ceb9aa48d4b369b2d3c8e1fb155f7A.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/T100-特效.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/T100-RGB2.jpg"
    ]
  },
  {
    "id": "icam-57316",
    "name": "Vagner Pro T100-S 100W Bi-Color COB LED Video Light",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-T100-S-100W-Bi-Color-COB-LED-Video-Light-2700K-7500K-Professional-Photography-Studio-Light.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 100W COB LED Output Powerful professional lighting Bi-Color 2700K-7500K Adjustable warm to daylight tones CRI 95+ Accuracy Natural and true-to-life colors 1-100% Dimming Smooth brightness adjustment 12 FX Modes Built-in creative lighting effects",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-T100-S-100W-Bi-Color-COB-LED-Video-Light-2700K-7500K-Professional-Photography-Studio-Light.png",
      "https://icamstore.net/wp-content/uploads/2026/06/5-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H086889400a624a0ca59cfc962c60eb63r-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H1e3ceb9aa48d4b369b2d3c8e1fb155f7A-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/T1002.jpg"
    ]
  },
  {
    "id": "icam-57312",
    "name": "Vagner Pro LED900 RGB Professional LED Video Panel Light",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 74.26,
    "originalPrice": 89.11,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-LED900-RGB-Professional-LED-Video-Panel-Light.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 45W High Output: Powerful illumination for professional photo and video shoots. Full RGB Color Control: Adjustable RGB colors with HSI color mode. 2700K–6500K CCT: Smooth warm-to-daylight color temperature adjustment. Built-in FX Modes: 42 creative lighting effects for cinematic scenes.",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Power",
        "value": "45W+rgb35w"
      },
      {
        "label": "Power Source",
        "value": "DC/Battery Power"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-LED900-RGB-Professional-LED-Video-Panel-Light.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Vagner-Pro-LED900-RGB-Professional-LED-Video-Panel-Light-2.png",
      "https://icamstore.net/wp-content/uploads/2026/06/H5aba82a183884fa19f30e5a1d420be99F.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/download-3.png",
      "https://icamstore.net/wp-content/uploads/2026/06/H584f4ecfd1254d5bad67096fa9bd2db2n.png",
      "https://icamstore.net/wp-content/uploads/2026/06/角度1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/角度2-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Aug-16-2026-03_06_28-PM.png",
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Aug-16-2026-03_02_46-PM.png",
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Aug-16-2026-03_04_58-PM.png",
      "https://icamstore.net/wp-content/uploads/2026/06/ChatGPT-Image-Aug-16-2026-02_58_11-PM.png",
      "https://icamstore.net/wp-content/uploads/2026/06/角度3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/角度4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/角度4-2.jpg"
    ]
  },
  {
    "id": "icam-57298",
    "name": "Vagner Pro SL-62 RGB LED Video Light 35W Bi-Color & RGB",
    "brand": "VAGNER PRO",
    "category": "lighting",
    "price": 74.26,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_g8c6xlg8c6xlg8c6.png",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 65W High Output Bright and powerful illumination for professional shooting Bi-Color & RGB Control Adjustable 2700K-7500K temperature with full RGB colors 14 FX Lighting Effects Creative built-in effects for cinematic scenes CRI 95+ Accuracy Natural color reproduction and realistic skin ",
    "specs": [
      {
        "label": "Brand",
        "value": "VAGNER PRO"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Ring Light Size",
        "value": "Dia 6 * L 62 cm"
      },
      {
        "label": "Material",
        "value": "ABS+PC"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_g8c6xlg8c6xlg8c6.png"
    ]
  },
  {
    "id": "icam-57278",
    "name": "NamTu HeadLight 60W LED CL-60RGB",
    "brand": "NamTu",
    "category": "accessories",
    "price": 79.21,
    "originalPrice": 89.11,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Namtu-HeadLight-60W-LED-CL-60RGB.png",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 60W RGB & Bi-Color Lighting – Adjustable color temperature (3200K–5600K) with full RGB color control (0°–360°). High CRI 97 – Delivers accurate and natural color reproduction for professional photography and video. Rechargeable & Handheld Design – Portable cordless design for flexible s",
    "specs": [
      {
        "label": "Brand",
        "value": "NamTu"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Namtu-HeadLight-60W-LED-CL-60RGB.png"
    ]
  },
  {
    "id": "icam-57271",
    "name": "NamTu JB-60*90RGB 200W RGB Flexible Roll Led Light with Grid",
    "brand": "NamTu",
    "category": "accessories",
    "price": 178.22,
    "originalPrice": 188.12,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB60X90RGB-200W-RGB-Flexible-Fabric-LED-Light-with-Grid.png",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 200W RGB Flexible Fabric LED Panel – Powerful output with full RGB color control for creative lighting effects. Adjustable Color Temperature (2700K–6500K) – Easily switch between warm and daylight tones for any scene. High CRI ≥96 – Delivers accurate and natural color reproduction for p",
    "specs": [
      {
        "label": "Brand",
        "value": "NamTu"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB60X90RGB-200W-RGB-Flexible-Fabric-LED-Light-with-Grid.png",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB60X90RGB-200W-RGB-Flexible-Fabric-LED-Light-with-Grid-2.png"
    ]
  },
  {
    "id": "icam-57249",
    "name": "NamTu JB-200Bi Flexible LED Video Light 200W Bi-Color (30×120cm)",
    "brand": "NamTu",
    "category": "lighting",
    "price": 158.42,
    "originalPrice": 168.32,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm.webp",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Flexible & Foldable Design – Lightweight fabric light that bends and folds for easy transport and storage. 200W High Power Output – Delivers bright, soft, and consistent illumination for professional productions. Bi-Color Temperature (3200K–5600K) – Easily switch between warm and daylig",
    "specs": [
      {
        "label": "Brand",
        "value": "NamTu"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm-2.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm.avif",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm-5.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm-4.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm-3.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ZSYB-JB-200Bi-Flexible-LED-Video-Light-200W-Bi-Color-30×120cm-2.webp"
    ]
  },
  {
    "id": "icam-56613",
    "name": "TELESIN Vest Chest Strap v2 for Action Cameras",
    "brand": "TELESIN",
    "category": "cameras",
    "price": 19.8,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-10.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features Capture Hands-Free Action Camera Footage Straps Secures Around Chest & Shoulders 3-Prong, J-Type & Mounting Buckle Adjustable for Custom Fit Quick Release Chest Mount",
    "specs": [
      {
        "label": "Brand",
        "value": "TELESIN"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Load Capacity",
        "value": "10.6 oz / 300 g"
      },
      {
        "label": "Operating Temperature",
        "value": "-4 to 158°F / -20 to 70°C"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066311.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066310.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066309.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066307.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066306.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066305.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066304.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066303.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066302.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066301.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066300.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066299.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066298.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066297.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066296.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066295.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066294.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066293.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066292.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1692359230_IMG_2066291.jpg"
    ]
  },
  {
    "id": "icam-56972",
    "name": "Tilta HDMI Cable (23.6&#8243;) TCB-MHD-MHD-60",
    "brand": "Tilta",
    "category": "accessories",
    "price": 13.86,
    "originalPrice": 15.84,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-HDMI-Cable-23.6-TCB-MHD-MHD-60.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features HDMI 2.0 Specification Supports 4K at 60 Hz Video Flexible 3.6mm Diameter Compatible with Most Tilta Cable Clamps",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-HDMI-Cable-23.6-TCB-MHD-MHD-60.jpg"
    ]
  },
  {
    "id": "icam-56929",
    "name": "Tilta Lightweight Camera Cage Kit for Canon R6 Mark III TA-T99-A-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 158.42,
    "originalPrice": 168.32,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Camera Cage Xeno Top Handle with 1/4&#8243;-20 Mount HDMI/USB-C Cable Clamp Multiple Accessory Mounting Options",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-14.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-13.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Lightweight-Camera-Cage-Kit-for-Canon-R6-Mark-III-TA-T99-A-B-2.jpg"
    ]
  },
  {
    "id": "icam-56926",
    "name": "Tilta Adapter Ring for Tilta Mirage Matte Box (95mm) MB-T16-95",
    "brand": "Tilta",
    "category": "accessories",
    "price": 19.8,
    "originalPrice": 23.76,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Adapter-Ring-for-Tilta-Mirage-Matte-Box-95mm-MB-T16-95.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Mounting Tilta Mirage Matte Box For Lenses with 95mm Front Thread Lightweight Aluminum Alloy Design No Front Filter Thread",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Adapter-Ring-for-Tilta-Mirage-Matte-Box-95mm-MB-T16-95.jpg"
    ]
  },
  {
    "id": "icam-56923",
    "name": "Tilta Adapter Ring for Tilta Mirage Matte Box (82mm) MB-T16-82",
    "brand": "Tilta",
    "category": "accessories",
    "price": 19.8,
    "originalPrice": 23.76,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Adapter-Ring-for-Tilta-Mirage-Matte-Box-82mm-MB-T16-82.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Connect Lenses with 82mm Diameter Designed for Tilta Mirage Matte Box Screws to Filter Thread on Front of Lens Lightweight Aluminum Alloy Structure Add 82mm Screw-On Filter in Front",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Adapter-Ring-for-Tilta-Mirage-Matte-Box-82mm-MB-T16-82.jpg"
    ]
  },
  {
    "id": "icam-56910",
    "name": "Tilta Full Camera Cage Lightweight Kit for Select Sony Cameras (Black) TA-T100-B-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 168.32,
    "originalPrice": 178.22,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Sony a7 V, a7 IV & a7R V Cameras Multiple 1/4&#8243;-20 & 3/8&#8243;-16 Threads Xeno Top Handle with 1/4&#8243;-20 Screw Detachable Arca-Type QR Baseplate Integrated Cold Shoe Receiver Access to Hot Shoe, Ports & Buttons Adjustable Sliding Design HDMI Cable Clamp",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Lightweight-Kit-for-Select-Sony-Cameras-Black-TA-T100-B-B-2.jpg"
    ]
  },
  {
    "id": "icam-56899",
    "name": "Tilta Full Camera Cage Pro Kit for Select Sony Cameras (Black) TA-T100-C-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 277.23,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Sony a7 V, a7 IV & a7R V Cameras Multiple 1/4&#8243;-20 & 3/8&#8243;-16 Threads Xeno Top Handle & Side Handle Adjustable LWS Baseplate & Dual 8&#8243; Rods Detachable Arca-Type QR Baseplate Integrated Cold Shoe Receiver Access to Hot Shoe, Ports & Buttons Adjustable Sliding Design H",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Full-Camera-Cage-Pro-Kit-for-Select-Sony-Cameras-Black-TA-T100-C-B-2.jpg"
    ]
  },
  {
    "id": "icam-56880",
    "name": "Tilta Quick Release Selfie Stick Tripod (Black) TT-SS-BH-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 24.75,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Ball Head Load Capacity: 3.3 lb Working Height Range: 6.5 to 14.4&#8243; Folded Length: 8.3&#8243; 360° Pan, 90° Tilt 3-Section Telescoping Rod 1/4&#8243;-20 Ball Head Mount One Anti-Twist 1/4&#8243;-20 Accessory Mount Aluminum Alloy and ABS Plastic",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-15.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-14.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-13.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Quick-Release-Selfie-Stick-Tripod-Black-2.jpg"
    ]
  },
  {
    "id": "icam-56862",
    "name": "Tilta Camera Cage with Street Snap Accessory Kit for DJI Osmo Action 6 (Black) TA-T95-B-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 89.11,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Cage for DJI Osmo Action 6 Street Snap Top Plate and Handgrip 1/4&#8243;-20 Thread & Cold Shoe Receiver Magnetic Quick Release Side Connector Swappable Button Caps Bottom Access for Tilta Mounting Plate Removable Battery Side Cover Charging Port & Card Slot Unobstructed Integrated ",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-14.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-13.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-Camera-Cage-with-Street-Snap-Accessory-Kit-for-DJI-Osmo-Action-6-Black-TA-T95-B-B-2.jpg"
    ]
  },
  {
    "id": "icam-56856",
    "name": "Tilta 65W USB-C Power Adapter (Green) TBC-PA-US-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 17.82,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-65W-USB-C-Power-Adapter-Green-TBC-PA-US-GN.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Up to 65W of Power Output 1 x USB-C Port Fixed 2-Prong US Plug",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-65W-USB-C-Power-Adapter-Green-TBC-PA-US-GN.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-65W-USB-C-Power-Adapter-Green-TBC-PA-US-GN-2.jpg"
    ]
  },
  {
    "id": "icam-56838",
    "name": "Tilta LP-E17 Kit with 2 Batteries and 2-Bay USB Charger (Forest Green) TBC-E17-A-FG",
    "brand": "Tilta",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon EOS 77D, 200D, 200D11, 750D, 760D, 800D, 850D, M3, M5, M6, M6 II, R8, R10, R50, R5OV, R100, RP, and PowerShot V1 cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Forest Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-16.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-15.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-14.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-13.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Forest-Green-TBC-E17-A-FG-2.jpg"
    ]
  },
  {
    "id": "icam-56820",
    "name": "Tilta LP-E17 Kit with 2 Batteries and 2-Bay USB Charger (Ash Green) TBC-E17-A-AG",
    "brand": "Tilta",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon EOS 77D, 200D, 200D11, 750D, 760D, 800D, 850D, M3, M5, M6, M6 II, R8, R10, R50, R5OV, R100, RP, and PowerShot V1 cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Ash Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-16.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-15.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-14.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-13.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Tilta-LP-E17-Kit-with-2-Batteries-and-2-Bay-USB-Charger-Ash-Green-TBC-E17-A-AG-2.jpg"
    ]
  },
  {
    "id": "icam-56542",
    "name": "Godox SK400III-V Studio Flash Monolight",
    "brand": "Godox",
    "category": "lighting",
    "price": 138.61,
    "originalPrice": 148.51,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-7.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features • 400Ws Studio Flash Output • 5700K ±200K Color Temperature • 10W LED Modeling Lamp • Fast Recycling Time: 0.1–1.5 Seconds • Flash Duration: 1/170 to 1/260 Second • Adjustable Power Range: 1/32 to 1/1 • Multiple Triggering Options • Built-In 2.4GHz Wireless Control System • Guide Number",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 5/8\" Receiver (Via Swivel Mount)"
      },
      {
        "label": "Power Source",
        "value": "AC Power (Cable Included)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680109.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680108.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680107.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680106.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680105.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680104.jpg"
    ]
  },
  {
    "id": "icam-56523",
    "name": "Godox SK300III-V Studio Flash Monolight",
    "brand": "Godox",
    "category": "lighting",
    "price": 118.81,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-6.jpg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features 300Ws Studio Flash Output • 5700K ±200K Color Temperature • 10W LED Modeling Lamp • Fast Recycling Time: 0.1–1.5 Seconds • Flash Duration: 1/200 to 1/380 Second • Adjustable Power Range: 1/32 to Full Power (1/1) • Multiple Triggering Options Available • Built-In 2.4GHz Wireless Control ",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Weight",
        "value": "4.63 lb / 2.1 kg, Including Battery"
      },
      {
        "label": "Fixture Mounting",
        "value": "1x 5/8\" Receiver (Via Swivel Mount)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680101.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680100.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680099.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680098.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680097.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1772398083_IMG_2680096.jpg"
    ]
  },
  {
    "id": "icam-56730",
    "name": "Tilta NP-F550 Battery (3500mAh)",
    "brand": "Tilta",
    "category": "accessories",
    "price": 25.74,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1773921254_IMG_2701690.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 3500mAh Capacity | 7.2V Output 4.5-Hour Runtime Advanced Electronic Protections Durable Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Army Green"
      },
      {
        "label": "Battery Type",
        "value": "1x Sony NP-F550"
      },
      {
        "label": "Battery Capacity",
        "value": "3500 mAh"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1773921254_IMG_2701690.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653244_IMG_2615306.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615308.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615309.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615310.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615311.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615312.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615313.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615314.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615315.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1763653266_IMG_2615316.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1773921245_1932071.jpg"
    ]
  },
  {
    "id": "icam-56565",
    "name": "Tilta 2-Channel Battery Charger for LP-E17 Batteries (Forest Green) TBC-E17-FG",
    "brand": "Tilta",
    "category": "accessories",
    "price": 14.85,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1773921091_1950550-2.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon LP-E17 Batteries Fast, Simultaneous Dual Charging USB-C & Micro-USB Input Ports Charge Status Indicator Prevents Overcharging Lightweight and Portable",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Forest Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1773921091_1950550-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806847_IMG_2673938.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673937.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673936.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673935.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673934.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673933.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673932.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673931.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770806835_IMG_2673930.jpg"
    ]
  },
  {
    "id": "icam-56540",
    "name": "Tilta 2-Channel Battery Charger for LP-E17 Batteries (Ash Green) TBC-E17-AG",
    "brand": "Tilta",
    "category": "accessories",
    "price": 14.85,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1773921091_1950550-1.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon LP-E17 Batteries Fast, Simultaneous Dual Charging USB-C & Micro-USB Input Ports Charge Status Indicator Prevents Overcharging Lightweight and Portable",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Ash Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1773921091_1950550-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807418_IMG_2673963.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807418_IMG_2673962.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807418_IMG_2673961.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807418_IMG_2673960.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807418_IMG_2673959.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807397_IMG_2673958.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807397_IMG_2673957.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807397_IMG_2673956.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770807397_IMG_2673955.jpg"
    ]
  },
  {
    "id": "icam-56537",
    "name": "Tilta EN-EL15C Kit with 2 Batteries and Charging Station (Green) TBC-EL15C-A-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 118.81,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1770113197_1940887.jpg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Nikon Z8, Z7 II, Z7, Z6 III, Z6 II, Z6, Z5, D850, D810, D800, D800E. D780, D750, D7500, D7200, D7100, D7000, D610, D600, D500, and V1",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1770113197_1940887.jpg"
    ]
  },
  {
    "id": "icam-56534",
    "name": "Tilta LP-E6P Kit with 2 Batteries and 4-Bay USB Charger (Green) TBC-E6P-A-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1770832281_1947519.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Canon EOS R5 Mark II, R5, R6 Mark II, R6, R7, R, 5D Mark IV, 6D, 7D Mark II, 7D, 90D, 80D, 70D, 60D, and 60Da Cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1770832281_1947519.jpg"
    ]
  },
  {
    "id": "icam-56521",
    "name": "Triopo KD3-30×160cm Stripbox Quick Setup with Honeycomb Grid — Bowens Mount",
    "brand": "Triopo",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 43.56,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/01/Triopo-Stripbox-5-1000x1000h.jpeg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Quick Setup Design — Fast assembly for efficient studio & on-location workflows. 30×120cm Strip Format — Perfect for rim light, edge light, product & fashion setups. Honeycomb Grid Included — Controls direction and reduces unwanted light spill. Silver Reflective Interior + Diffuser — Pr",
    "specs": [
      {
        "label": "Brand",
        "value": "Triopo"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/01/Triopo-Stripbox-5-1000x1000h.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/H7e293e577b9642d6afc04682bf97d5acA.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H25def3808cd740b5b88fd36a2a6bb3e0B.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H40d93ca4d41649109afe3f6d5a6f9f0f5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Ha26996a81355445398d459dbf60ca619a.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Hd35b6d9fa46a4d1c8c185a06d88ccf166.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Hfa4a6e821cfc4639b59ef7cb825b1ba7p.jpg"
    ]
  },
  {
    "id": "icam-56519",
    "name": "Triopo Parabolic 120cm KP3 + Grid KP3-120",
    "brand": "Triopo",
    "category": "accessories",
    "price": 54.46,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/KP3-120-1.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Features 120cm Deep Parabolic Softbox Quick-Release Design 16-Pole Construction Durable Metal Frame Metallic Reflective Interior Includes Two Diffuser Cloths Honeycomb Grid Included Lightweight and Portable Design Optimized for Continuous Lights 200W and Above",
    "specs": [
      {
        "label": "Brand",
        "value": "Triopo"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Model",
        "value": "KP3-120"
      },
      {
        "label": "Product Type",
        "value": "Parabolic Deep Softbox"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-120-1.png",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-120-2.png",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-120-3-.png",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-120-1-1.png",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-120-4.png",
      "https://icamstore.net/wp-content/uploads/2026/06/H6b575cabc42843afaff3ebc3a376e963X.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/6-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-120-.png"
    ]
  },
  {
    "id": "icam-56517",
    "name": "Triopo Parabolic 70cm KP3 + Grid KP3-70",
    "brand": "Triopo",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 43.56,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/KP3-70-1-1.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 70cm Deep Parabolic Softbox Quick-Release Design Bowens Mount Compatibility Reflective Interior for Maximum Light Output Soft, Even, and Directional Light Inner and Outer Diffusers Included Honeycomb Grid Included Quick Setup and Easy Folding Carrying Bag Included Suitable for Photograp",
    "specs": [
      {
        "label": "Brand",
        "value": "Triopo"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-70-1-1.png",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-70-2-2.png",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-70-3.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Hd61d8f3c93284565b8e71e2d498d691d5.png",
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-70-2-3.png",
      "https://icamstore.net/wp-content/uploads/2026/06/H99e51389cf2b4d6b899251ef7cf62f65R.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/نةح3-70-1.png"
    ]
  },
  {
    "id": "icam-56515",
    "name": "Triopo Parabolic 60cm KP3 + Grid KP3-60",
    "brand": "Triopo",
    "category": "accessories",
    "price": 37.62,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1.png",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 60cm Deep Parabolic Softbox Quick-Release Design 16-Pole Construction Durable Metal Frame Metallic Reflective Interior Enhanced Light Diffusion Soft, Even Light Distribution Detachable Standard Bowens Mount Includes Two Diffuser Cloths",
    "specs": [
      {
        "label": "Brand",
        "value": "Triopo"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Model",
        "value": "KP3-60"
      },
      {
        "label": "Product Type",
        "value": "Parabolic Deep Softbox"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1.png",
      "https://icamstore.net/wp-content/uploads/2026/06/3.png",
      "https://icamstore.net/wp-content/uploads/2026/06/kp3-60.png",
      "https://icamstore.net/wp-content/uploads/2026/06/2.png",
      "https://icamstore.net/wp-content/uploads/2026/06/6-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/KP60.png"
    ]
  },
  {
    "id": "icam-56513",
    "name": "Triopo Parabolic 90cm KP3 + Grid KP3-90",
    "brand": "Triopo",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 53.47,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/KP3-90-1.png",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 90cm Deep Parabolic Softbox Quick-Install Design Deep Parabolic Construction for Enhanced Light Diffusion Metallic Reflective Interior Soft, Even Light Distribution Detachable Standard Bowens Mount Includes Two Diffuser Cloths",
    "specs": [
      {
        "label": "Brand",
        "value": "Triopo"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Model",
        "value": "KP3 90"
      },
      {
        "label": "Shape",
        "value": "Parabolic Deep Softbox"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/KP3-90-1.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Hf6033c7f08b6455fa875dc988360fb5fL.png",
      "https://icamstore.net/wp-content/uploads/2026/06/edit-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H9c497dd9cddb45f3987323ff226c7309Y.png",
      "https://icamstore.net/wp-content/uploads/2026/06/H2c16f939ccb34c329f0e8025d40532cdJ.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/H3be37c4e107e43b2bf425fd2c7aebcf7e.png",
      "https://icamstore.net/wp-content/uploads/2026/06/Triopo-Parabolic-90cm-KP3-Grid-KP3-90.png",
      "https://icamstore.net/wp-content/uploads/2026/06/H30b6ee80afb94c258a5ddefcdff5c099i-scaled.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Hb0f098270be54f0590eab1c0e17e104a6.jpg"
    ]
  },
  {
    "id": "icam-56438",
    "name": "K&F Concept Nano-Xcel Matte Box Kit for 4&#215;5.65&#8243; Filters (SKU.2180)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 118.81,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-Nano-Xcel-Matte-Box-Kit-for-4x5.65-Filters-SKU.2180.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Supports Up to Two 4&#215;5.65&#8243; Professional Cinema Filters Lightweight Carbon Fiber Construction with Anti-Glare Design Includes 67/72/77/82/95mm Lens Adapter Rings Multiple Accessory Mounting Points (1/4&#8243;, 3/8&#8243; & Cold Shoe) Ultra-Slim Design Prevents Vignetting on Wi",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-Nano-Xcel-Matte-Box-Kit-for-4x5.65-Filters-SKU.2180.jpg"
    ]
  },
  {
    "id": "icam-56429",
    "name": "K&F Concept Camera Side Handle for Cage (KF31.235)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 37.62,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-Camera-Side-Handle-for-Cage-KF31.235.jpg",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Dual NATO Rail & 3/8&#8243;-16 ARRI Mount Compatibility Adjustable Height Design with 4cm Vertical Adjustment Ergonomic Anti-Slip Silicone Grip for Left or Right Hand Use Built-In Cold Shoe & Multiple Accessory Mounting Points Heavy-Duty Aluminum Alloy Construction with 10kg Load Capaci",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/KF-Concept-Camera-Side-Handle-for-Cage-KF31.235.jpg"
    ]
  },
  {
    "id": "icam-56200",
    "name": "Insta360 Luna Ultra Standard Combo (Cosmic Black)",
    "brand": "Insta360",
    "category": "accessories",
    "price": 792.08,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-1.jpg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Capture up to 8K30 Action Footage Dual Lenses, 1&#8243; & 1/1.3&#8243; CMOS Sensors Detachable 2&#8243; OLED Screen Triple AI Chip, 47GB Internal Storage 3-Axis Stabilization, AI Tracking Battery Handle, Wide-Angle Lens Mic Pro Wireless Transmitter Built-In Leica Color Profiles",
    "specs": [
      {
        "label": "Brand",
        "value": "Insta360"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Cosmic Black"
      },
      {
        "label": "Number of Axes",
        "value": "Three: Pitch (Tilt) / Roll / Yaw (Pan)"
      },
      {
        "label": "Rotation Range",
        "value": "Controllable Range Yaw (Pan): 292° (-57 to 235°) Roll: 100° (-50 to 50°) Pitch (Tilt): 177° (-57 to 120°), Mechanical Range Yaw (Pan): 303° (-63 to 240°) Roll: 283° (-63 to 220°) Pitch (Tilt): 278° (-98 to 180°)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-10.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/Insta360-Luna-Ultra-Standard-Combo-Cosmic-Black-2.jpg"
    ]
  },
  {
    "id": "icam-55929",
    "name": "Ulanzi D200H Stream Controller",
    "brand": "Ulanzi",
    "category": "accessories",
    "price": 74.26,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1756903281_1916953.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 13 Customizable LCD Buttons Versatile Presets and Plug-Ins AI App Integration High-Speed USB 3.0 Gen 1 Port USB-A and USB-C Connectivity MicroSD and SD Card Slots 100W PD Fast Charging Control Studio Lights",
    "specs": [
      {
        "label": "Brand",
        "value": "Ulanzi"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Compatibility",
        "value": "Ulanzi EC65 65W LED Light / 120W V-Mount Video Light / VL-200Bi 200W V-Mount Video Light / AL60 Inflatable LED Tube"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1756903281_1916953.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1756903273_IMG_2566064.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1756903273_IMG_2566065-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1756903273_IMG_2566065.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1756903273_IMG_2566066.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1756903273_IMG_2566067.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1756903282_IMG_2566068.jpg"
    ]
  },
  {
    "id": "icam-55883",
    "name": "Godox V100 Flash for Nikon",
    "brand": "Godox",
    "category": "lighting",
    "price": 297.03,
    "originalPrice": 316.83,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-5.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features Compatible with Nikon i-TTL Output: 100W Auto Zoom Control; Zoom Range: 28-105mm Built-In 2W Modeling Lamp Power Range: 1/1 to 1/256 Tilts -7 to 120°, Rotates 330° Round Head Design Recycling Time: 1.7 sec LED Touch Screen Controls",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Internal Power",
        "value": "1x Rechargeable (Included)"
      },
      {
        "label": "Exposure Control",
        "value": "Nikon i-TTL"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1767012633_IMG_2398779-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1767012633_IMG_2398778-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1734641344_IMG_2398777-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1734641344_IMG_2398776-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1734641344_IMG_2398775-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1767012633_IMG_2398774-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1734641344_IMG_2398773-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1767012633_IMG_2398772-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1767012633_IMG_2398771-1.jpg"
    ]
  },
  {
    "id": "icam-55834",
    "name": "Nanlite FC-720C RGB LED Spotlight",
    "brand": "Nanlite",
    "category": "lighting",
    "price": 693.07,
    "originalPrice": 792.08,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1770104727_1938634.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Film, Broadcast & Video Production Output: 119,000 Lux at 3.3&#8242; w/ Reflector 2400-12,000K CCT; Full RGB Color Control AC or Optional Battery Power Onboard, Wireless, DMX/RDM & App Control CRI 95 | TLCI 94 Fan Cooled Bowens S Accessory Mount 15 Lighting Effects Includes Reflecto",
    "specs": [
      {
        "label": "Brand",
        "value": "Nanlite"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "1x LED Monolight / Spot Light"
      },
      {
        "label": "Included Light Modifier",
        "value": "1x Reflector"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1770104727_1938634.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667673.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667674.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667675.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667676.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667677.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667678.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667679.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667680.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667681.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667682.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667683.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667684.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667685.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667686.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667687.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667688.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667690.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667691.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667692.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667693.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667694.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667695-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667695.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667696.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667697.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667698.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667699.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667700.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667701.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667702.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667703.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667704.jpg"
    ]
  },
  {
    "id": "icam-55884",
    "name": "Nanlite FC-720B Bi-Color LED Spotlight",
    "brand": "Nanlite",
    "category": "lighting",
    "price": 495.05,
    "originalPrice": 594.06,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1770104727_1938633.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Film, Broadcast & Studio Production Output: 133,800 Lux at 3.3&#8242; w/ Reflector 2700-6500K CCT AC Power Onboard, Wireless, DMX & App Control CRI 96 | TLCI 98 Fan Cooled Bowens Accessory Mount 12 Special Effects Includes Reflector, Power Supply & Case",
    "specs": [
      {
        "label": "Brand",
        "value": "Nanlite"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Dark Gray"
      },
      {
        "label": "Item Type",
        "value": "1x LED Monolight / Spot Light"
      },
      {
        "label": "Included Light Modifier",
        "value": "1x Reflector"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1770104727_1938633.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667527.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667528.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667529.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667530.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667531.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667532.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667533.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667534.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667535.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667536.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667537.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667538.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667539.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667540.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667541.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667542.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667543.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667544.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667545.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770104909_IMG_2667546.jpg"
    ]
  },
  {
    "id": "icam-55813",
    "name": "Godox X3Pro S Touchscreen TTL Wireless Flash Trigger for Sony",
    "brand": "Godox",
    "category": "lighting",
    "price": 89.11,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1758529919_1918011.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Works with X Wireless Radio System Compatible with Sony ADI / P-TTL Frequency: 2.4 GHz; Range: 328&#8242; 16 Groups; 32 Channels; 99 IDs Bluetooth App Connectivity Shutter Control & AF Function Larger Touchscreen & Multi-Group Display Runs on Internal Rechargeable Battery Portable Desig",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Groups/Channels",
        "value": "16/32"
      },
      {
        "label": "Wireless Range",
        "value": "0.0 to 328.1' / 0 to 100 m"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1758529919_1918011.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566517.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566518.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566519.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566520.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566521.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566522.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566523.jpg"
    ]
  },
  {
    "id": "icam-55799",
    "name": "Godox X3Pro C Touchscreen TTL Wireless Flash Trigger for Canon",
    "brand": "Godox",
    "category": "lighting",
    "price": 89.11,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1758529919_1918007.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Works with X Wireless Radio System Compatible with Canon E-TTL / E-TTL II Frequency: 2.4 GHz; Range: 328&#8242; 16 Groups; 32 Channels; 99 IDs Bluetooth App Connectivity Shutter Control & AF Function Larger Touchscreen & Multi-Group Display Runs on Internal Rechargeable Battery Portable",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Groups/Channels",
        "value": "16/32"
      },
      {
        "label": "Wireless Range",
        "value": "0.0 to 328.1' / 0 to 100 m"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1758529919_1918007.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566109.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566110.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566111.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566112.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566113.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566114.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566115.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566116.jpg"
    ]
  },
  {
    "id": "icam-55811",
    "name": "Godox X3Pro N Touchscreen TTL Wireless Flash Trigger for Nikon",
    "brand": "Godox",
    "category": "lighting",
    "price": 89.11,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-2.jpg",
    "badge": "SAVE 18%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "key features Works with X Wireless Radio System Compatible with Nikon i-TTL Frequency: 2.4 GHz; Range: 328&#8242; 16 Groups; 32 Channels; 99 IDs Bluetooth App Connectivity Shutter Control & AF Function Larger Touchscreen & Multi-Group Display Runs on Internal Rechargeable Battery Portable Design Inc",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Groups/Channels",
        "value": "16/32"
      },
      {
        "label": "Wireless Range",
        "value": "0.0 to 328.1' / 0 to 100 m"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566573.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566572.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566571.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566570.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566569.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566568.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1758529981_IMG_2566567.jpg"
    ]
  },
  {
    "id": "icam-55958",
    "name": "Hollyland LARK A1 Duo Version Charging Case ( Space Gray)",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 17.82,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-06-at-6.04.47-PM.jpeg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Designed specifically for the Hollyland LARK A1 Duo Version. Charges and stores LARK A1 microphone components securely. Compact and travel-friendly design. Built-in rechargeable battery for convenient charging. Protective case construction for safe transport and storage. USB-C charging ",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Compatibility",
        "value": "Lark A1 DUO"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-06-at-6.04.47-PM.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-06-at-6.04.48-PM-1.jpeg"
    ]
  },
  {
    "id": "icam-55952",
    "name": "Hollyland LARK A1 Combo Version Charging Case ( Space Gray)",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 21.78,
    "originalPrice": 23.76,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1.jpeg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Designed specifically for the Hollyland LARK A1 Combo version. Charges 2 transmitters and 1 receiver simultaneously. Built-in 1400mAh rechargeable battery. Compact and protective design for storage and transport. USB-C charging input for convenient power delivery. Fast charging with approximately 1.",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Compatibility",
        "value": "Lark A1 combo"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/3.jpeg",
      "https://icamstore.net/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-06-at-6.04.48-PM.jpeg"
    ]
  },
  {
    "id": "icam-55939",
    "name": "Hollyland LARK A1 Furry Windshield",
    "brand": "Hollyland",
    "category": "audio",
    "price": 1.98,
    "originalPrice": 5.94,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Furry-Windshield_1（633_630）黑.png",
    "badge": "SAVE 67%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Designed specifically for Hollyland LARK A1 transmitters. Reduces wind noise for cleaner outdoor recordings. Preserves vocal clarity while recording in windy environments. Lightweight, high-density synthetic fur construction. Easy to attach and secure on the microphone transmitter. Incl",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Compatibility",
        "value": "LARK A1"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Furry-Windshield_1（633_630）黑.png"
    ]
  },
  {
    "id": "icam-55942",
    "name": "Hollyland LARK A1 Charging Dock",
    "brand": "Hollyland",
    "category": "audio",
    "price": 9.9,
    "originalPrice": 11.88,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/633x630-1.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Designed specifically for the Hollyland LARK A1 wireless microphone system. Convenient charging solution for LARK A1 transmitters. Compact and lightweight design for easy portability. Helps keep microphones charged and ready for content creation. Ideal as a replacement or additional cha",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "White"
      },
      {
        "label": "Compatibility",
        "value": "Lark A1 mini Duo"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/633x630-1.png"
    ]
  },
  {
    "id": "icam-55727",
    "name": "Hollyland Astra P1 UHD 4K PTZ Camera with 30x Optical Zoom",
    "brand": "Hollyland",
    "category": "cameras",
    "price": 2178.22,
    "originalPrice": 2217.82,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1780562714_1974243.jpg",
    "badge": "SAVE 2%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 1/1.8&#8243; High-Quality 8.42MP CMOS Sensor 30x Optical/16x Digital Zoom HDMI and 3G-SDI Connectivity UHD 4K60 Resolution, AI Auto Tracking Supports NDI HX3 Intelligent Face Detection AE 255 Preset Positions with 0.1° Accuracy",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Image Sensor",
        "value": "1/1.8\"-Type"
      },
      {
        "label": "Sensor Resolution",
        "value": "8.42 Megapixel"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1780562714_1974243.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1780562709_IMG_2744643.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1780562709_IMG_2744642.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1780562709_IMG_2744641.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1780562709_IMG_2744640.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1780562709_IMG_2744639.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1780562709_IMG_2744638.jpg"
    ]
  },
  {
    "id": "icam-55648",
    "name": "Generic 6-in-1 USB-C & OTG Micro SD Card Reader Adapter",
    "brand": "Generic",
    "category": "accessories",
    "price": 5.45,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_nd6qsend6qsend6q.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features: 6-in-1 design with USB-A, Micro USB, and USB-C connectivity Dual card slots supporting SD and Micro SD memory cards OTG-compatible for Android smartphones and tablets Plug-and-play operation with no drivers required Supports memory cards up to 512GB with high-speed data transfer capabi",
    "specs": [
      {
        "label": "Brand",
        "value": "Generic"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_nd6qsend6qsend6q.png"
    ]
  },
  {
    "id": "icam-55419",
    "name": "Sony FE 100mm f/2.8 STF GM OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1445.54,
    "originalPrice": 1485.15,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/Sony-FE-100mm.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to 20 | T5.6 to 22 Apodization Element for Smooth Bokeh One Aspherical Element & One ED Element Nano AR Coating Direct Drive Super Sonic Wave AF Motor Optical SteadyShot Image Stabilization Physical Aperture Ring; De-Click Switch Macr",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Image Stabilization",
        "value": "Yes"
      },
      {
        "label": "Filter Size",
        "value": "72 mm (Front)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/Sony-FE-100mm.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1497969751_IMG_747603.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1497969751_IMG_747604.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1497969751_IMG_747605.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499272248_IMG_826695.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499273150_IMG_826703.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499273240_IMG_826773.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499274049_IMG_826786.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499274096_IMG_826787.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499275133_IMG_826798.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499275885_IMG_826812.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499276035_IMG_826828.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1499276836_IMG_826849.jpg"
    ]
  },
  {
    "id": "icam-55637",
    "name": "Canon NB-CP2L Battery Pack",
    "brand": "Canon",
    "category": "accessories",
    "price": 44.55,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 11,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/CANONNB-CP2L-2.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon CP and SELPHY Compact Printers",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Gray"
      },
      {
        "label": "Battery Chemistry",
        "value": "Lithium-Ion"
      },
      {
        "label": "Output Voltage",
        "value": "22.2v"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/CANONNB-CP2L-2.jpg"
    ]
  },
  {
    "id": "icam-55437",
    "name": "Canon RF 24-105mm f/4-7.1 IS STM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 554.46,
    "originalPrice": 712.87,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1-1.jpg",
    "badge": "SAVE 22%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features RF-Mount Lens/Full-Frame Format STM Stepping AF Motor Center Macro Focus, 1:2 Magnification Optical Image Stabilizer Customizable Control Ring Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Focal Length",
        "value": "24 to 105mm"
      },
      {
        "label": "Lens Mount",
        "value": "Canon RF"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447928.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447929.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447930.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447931.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447932.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447933.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447934.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447935.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447936.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447937.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447938.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447939.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447940.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447941.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1605711667_IMG_1447942.jpg"
    ]
  },
  {
    "id": "icam-55593",
    "name": "FX Studio T180 Camera Tripod",
    "brand": "FX Studios",
    "category": "accessories",
    "price": 16.83,
    "originalPrice": 25.74,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/t180.png",
    "badge": "SAVE 35%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Professional tripod for photography and videography Maximum height: 186 cm Folded height: Approximately 43 cm Durable and lightweight aluminum construction Supports equipment up to 5 kg 4-section adjustable legs Versatile pan-and-tilt head for flexible shooting angles Standard 1/4-inch ",
    "specs": [
      {
        "label": "Brand",
        "value": "FX Studios"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/t180.png",
      "https://icamstore.net/wp-content/uploads/2026/06/download-1.png",
      "https://icamstore.net/wp-content/uploads/2026/06/H75095e2ef647486d941cc0831af06103G.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/H22622807112e49beac91d32a0d06e23bj.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/Gemini_Generated_Image_qqadx6qqadx6qqad.png"
    ]
  },
  {
    "id": "icam-55503",
    "name": "Kodak Charmera Key Chain Digital Camera (Random Style Blind Box)",
    "brand": "Kodak",
    "category": "cameras",
    "price": 59.41,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/1757456180_1920220.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Blind Box with 1 of 7 Vintage Designs Tiny Digital Camera with Retro Charm Mimics Single-Use Film Camera from 1987 1.6MP 1/4&#8243; CMOS Sensor 35mm Equivalent f/2.4 Lens 1440 x 1080 30 fps AVI Video Recording 4 Frames & 7 Filters in Photo Mode Rear Display & Optical Window Viewfinder m",
    "specs": [
      {
        "label": "Brand",
        "value": "Kodak"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Random Color"
      },
      {
        "label": "Sensor Resolution",
        "value": "1.6 Megapixel (1440 x 1080)"
      },
      {
        "label": "Image Sensor",
        "value": "1/4\"-Type"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/1757456180_1920220.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601544_IMG_2572745.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601544_IMG_2572746.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601544_IMG_2572747.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601544_IMG_2572748.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601544_IMG_2572750.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601544_IMG_2572751.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601544_IMG_2572752.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601563_IMG_2572753.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1757601563_IMG_2572754.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572756.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572757.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572758.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572760.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572761.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572762.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572763.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572764.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572765.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572766.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572767.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572768.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572769.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572770.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572771.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572772.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572773.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572774.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572775.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572776.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572777.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572778.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572779.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572780.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572781.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572782.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572783.jpg",
      "https://icamstore.net/wp-content/uploads/2026/06/1770629704_IMG_2572784.jpg"
    ]
  },
  {
    "id": "icam-55583",
    "name": "Neewer Pro Camera Backpack",
    "brand": "Neewer",
    "category": "accessories",
    "price": 95.05,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/z50ii_-_2025-12-22T154837.687.webp",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features: Made of waterproof polyester and durable nylon with tough reinforced stitching for easy carry and protecting your camera and other accessories well. Memory foam on the interior of the backpack lid helps protect your delicate LCD screen. Removable and adjustable fastening taped & Padded",
    "specs": [
      {
        "label": "Brand",
        "value": "Neewer"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/z50ii_-_2025-12-22T154837.687.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/2_654d3bea-a06b-436e-91f3-0ecb48ff297d.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/3_54c69371-7955-4156-a068-21600ceb7788.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/4_9d562923-da4e-48a6-b887-b6deb0031384.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/5_30ea7c18-f7cd-49a1-abb8-ca94cebe39dd.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/6_73a82bef-9028-49ba-a7a4-6b5791f1feb6.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/7_3b9b79a2-5b0a-44a2-980d-2a72159ca8a0.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/8_0b92747e-7c0b-4a8a-aa1a-9ae271798c7a.webp"
    ]
  },
  {
    "id": "icam-55335",
    "name": "Ulanzi BC08 Camera Sling Bag B010",
    "brand": "Ulanzi",
    "category": "accessories",
    "price": 28.71,
    "originalPrice": 33.66,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/8_11zon_7_3d8c0b93-d76e-4e32-8cd9-96d7cfb84f29.webp",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Modular storage design with removable divider for customizable organization Water-resistant exterior and soft velvet interior for enhanced gear protection Velcro front panel for personalization with custom badges Expandable capacity up to 9L for additional storage space Adjustable strap",
    "specs": [
      {
        "label": "Brand",
        "value": "Ulanzi"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/8_11zon_7_3d8c0b93-d76e-4e32-8cd9-96d7cfb84f29.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/2_11zon_12.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/3_11zon_12.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/9_11zon_8_306d3e7c-1d73-46de-978a-b1beefdc4156.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/10_11zon_5_56066928-ea4f-426d-890e-513d5abbc07a.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/12_11zon_1_152fd63b-c1b6-4bbf-8630-cb9bac73f432.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/13_11zon_1_98b9046a-385e-45c0-b335-6d1d67021aaf.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/14_11zon_1_c6c47dc9-5124-4370-afcb-96c25c1ae39d.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/15_11zon_1_bc33e2ce-aeb4-4096-a70a-ef5ab0564651.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/16_11zon_1_9702cc77-4350-4289-8430-92435627061a.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/17_11zon_1_a33a214b-0b7d-4642-9029-3541c55c1b9b.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/18_11zon_1_a02d05f7-77e7-4c4a-9b52-4e9b7988a353.webp"
    ]
  },
  {
    "id": "icam-55577",
    "name": "Ulanzi PB038 Travel Sling Bag V2",
    "brand": "Ulanzi",
    "category": "accessories",
    "price": 32.67,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/ulanzi-PB038-01-1750955966.webp",
    "badge": "SAVE 18%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Lightweight and compact design for easy everyday carry Customizable interior with padded adjustable dividers Durable water-resistant construction for added protection Multiple compartments for organized storage Can be worn as a sling bag, chest bag, or waist bag Quick-access pockets for",
    "specs": [
      {
        "label": "Brand",
        "value": "Ulanzi"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/ulanzi-PB038-01-1750955966.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ulanzi-PB038-02-1750955969.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ulanzi-PB038-03-1750955970.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/ulanzi-PB038-05-1750955973.webp"
    ]
  },
  {
    "id": "icam-55351",
    "name": "Ulanzi BP10 Photography Backpack 35L (B012GBB1)",
    "brand": "Ulanzi",
    "category": "accessories",
    "price": 158.42,
    "originalPrice": 168.32,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/06/cKADeDWV.webp",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 35L Large Capacity – Fits up to 2 cameras, 6 lenses, a 17&#8243; laptop, and essential accessories. Hardshell & Waterproof Protection – Enhanced protection against impacts, water, theft, and accidental loss. Customizable Interior – Adjustable dividers let you organize gear exactly the w",
    "specs": [
      {
        "label": "Brand",
        "value": "Ulanzi"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/06/cKADeDWV.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/FVL7nHtg.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/GRqLJXM5.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/hhVKVxxx.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/nLWAC31T.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/OyALBcYa.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/twyMBLzJ.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/V33mV98v.webp",
      "https://icamstore.net/wp-content/uploads/2026/06/zYblhaHT.webp"
    ]
  },
  {
    "id": "icam-55366",
    "name": "Hollyland Solidcom H1-10S 10-Person Noise-Cancelling Intercom System",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 26237.62,
    "originalPrice": 26732.67,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1-8.jpg",
    "badge": "SAVE 2%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 10 Beltpacks, 10 Single-Ear Headsets Includes 10 Batteries and Charger ANT01 Antenna Unit + Cables & Antennas DC and PoE Power Adapters 1640&#8242; Line-of-Sight Coverage Range Expandable to 20 to 80 Beltpacks Seamless Roaming Across Zones 12 Groups Standard, 100 with Geo Comprehensive ",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Users per System",
        "value": "10"
      },
      {
        "label": "Wireless Technology",
        "value": "Analog/Digital Hybrid"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573062.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573063.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573064.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573065.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573066.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573067.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573068.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573069.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573070.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573071.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573072.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573073.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573074.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573075.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573076.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573077.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1757646109_IMG_2573078.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1758106463_IMG_2576257.jpg"
    ]
  },
  {
    "id": "icam-55323",
    "name": "Hollyland MELO P1 Combo Wireless Handheld Microphone System (Space Gray)",
    "brand": "Hollyland",
    "category": "audio",
    "price": 396.04,
    "originalPrice": 495.05,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1783500361_1977886.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Content Creation, Streaming & Music Interchangeable Condenser Capsule AI Noise Cancellation 2.4 GHz Wireless Tech: 196&#8242; Range 132 dB Max SPL Shock-Absorbing Chamber and Metal Build 32-Bit Floating Point Avoids Distortion Up to 40 Hours of Operation with Case USB-C Output, 3.5m",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Space Gray"
      },
      {
        "label": "Wireless Technology",
        "value": "Digital 2.4 GHz"
      },
      {
        "label": "Diversity",
        "value": "Non-Diversity"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1783500361_1977886.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1783500349_IMG_2764879.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1783500349_IMG_2764878.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1783500349_IMG_2764877.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1783500349_IMG_2764876.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1783500349_IMG_2764875.jpg"
    ]
  },
  {
    "id": "icam-55304",
    "name": "RODE NT-USB Mini USB Microphone",
    "brand": "RODE",
    "category": "audio",
    "price": 148.51,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1581932312_1540109.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Designed for Podcasting and Streaming Works with Computers and Tablets 4 Mics at Once Max via Connect Software Built-In Pop Filter & Isolation Stand 3.5mm Headphone Jack with Volume Control Cardioid Polar Pattern for Room Noise High-Quality 48 kHz / 24-Bit Recording Bus-Powered from Com",
    "specs": [
      {
        "label": "Brand",
        "value": "RODE"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Microphone Type",
        "value": "Large Diaphragm"
      },
      {
        "label": "Polar Pattern",
        "value": "Cardioid"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1581932312_1540109.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316692.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316691.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316690.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316689.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316688.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316687.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316686.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316685.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316684.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581931817_IMG_1318472.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316682.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1581441340_IMG_1316681.jpg"
    ]
  },
  {
    "id": "icam-55298",
    "name": "RODE XLR Male to XLR Female Cable (Black, 3M)",
    "brand": "RODE",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1685532376_1767227.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Part of Color-Coordinated Cable Set Easily Identify Microphone and Equipment 9.8&#8242; Length",
    "specs": [
      {
        "label": "Brand",
        "value": "RODE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Connector 1",
        "value": "1x XLR 3-Pin Male"
      },
      {
        "label": "Connector 2",
        "value": "1x XLR 3-Pin Female"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1685532376_1767227.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1685532907_IMG_2008351.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1685532907_IMG_2008350.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1685532907_IMG_2008349.jpg"
    ]
  },
  {
    "id": "icam-55281",
    "name": "RODE RODECaster Video S All-in-One Audio/Video Console",
    "brand": "RODE",
    "category": "accessories",
    "price": 990.1,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1762796826_1927651.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features All-in-One Audio and Video Console Switching, Streaming, Recording, Mixing One USB-C and Three HDMI Video Inputs Input, Stream, and Record up to 1080p Wi-Fi and Gigabit Ethernet Streaming Internal Graphic Storage, USB Recording Receivers for Two RODE Series IV Mics Combo Analog and USB ",
    "specs": [
      {
        "label": "Brand",
        "value": "RODE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1762796826_1927651.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595308.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595307.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595306.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595305.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595304.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595303.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595302.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595301.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595300.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595299.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595298.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595297.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1762794053_IMG_2595296.jpg"
    ]
  },
  {
    "id": "icam-55170",
    "name": "DJI Osmo Mobile 8P Creator Combo Smartphone Gimbal",
    "brand": "DJI",
    "category": "gimbals",
    "price": 297.03,
    "originalPrice": 356.44,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/DJI-Osmo-8P.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Three-axis stabilization, professional-quality video even when moving. All functions can be operated with one hand and gesture control Built-in additional legs for tabletop use Detachable display as a remote control for quick checking of settings and battery status On the side of the st",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
      },
      {
        "label": "Category",
        "value": "gimbals"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/DJI-Osmo-8P.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/DJI-Osmo-8P-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/DJI-Osmo-8P.webp"
    ]
  },
  {
    "id": "icam-54903",
    "name": "NiceFoto FB-2000A Bi-Color Foldable Light (200W)",
    "brand": "NiceFoto",
    "category": "accessories",
    "price": 138.61,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1-5.webp",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Powerful 200W LED output for professional-grade illumination Adjustable bi-color temperature range: 2700K–6500K High CRI/TLCI ≥96 for accurate and natural color reproduction Foldable lightweight mat design for portability and quick setup Stepless brightness adjustment for precise lighti",
    "specs": [
      {
        "label": "Brand",
        "value": "NiceFoto"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1-5.webp"
    ]
  },
  {
    "id": "icam-55125",
    "name": "Canon PowerShot G7 X Mark III Digital Camera (Silver)",
    "brand": "Canon",
    "category": "cameras",
    "price": 1346.53,
    "originalPrice": 1386.14,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1562622339_1490986.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 20.1MP 1&#8243; Stacked CMOS Sensor DIGIC 8 Image Processor 4.2x Optical Zoom f/1.8-2.8 Lens 24-100mm (35mm Equivalent) 3.0&#8243; 1.04m-Dot Tilting Touchscreen LCD UHD 4K30p and Full HD 120p Video 20-fps Shooting, 30-fps Raw Burst Mode Built-In Bluetooth and Wi-Fi Live Streaming & Vert",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Image Sensor",
        "value": "1\"-Type"
      },
      {
        "label": "Image Stabilization",
        "value": "Optical in Integrated Lens"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1562622339_1490986.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570102239_IMG_1262555.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570102239_IMG_1262547.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1764866500_IMG_1262540.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570100974_IMG_1262529.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570099786_IMG_1262515.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570099539_IMG_1262508.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1764866500_IMG_1262470.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570037418_IMG_1262360.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570037054_IMG_1262347.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570035947_IMG_1262344.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570035102_IMG_1262340.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570034905_IMG_1262303.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570034295_IMG_1262212.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1764866500_IMG_1262202.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570030477_IMG_1262170.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1764866500_IMG_1262158.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1570029567_IMG_1262138.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1562629669_IMG_1210993.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1562629669_IMG_1210992.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1562629669_IMG_1210991.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1562629669_IMG_1210990.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1562629669_IMG_1210989.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1764866500_IMG_1210988.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1562629669_IMG_1210987.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1764866500_IMG_1210986.jpg"
    ]
  },
  {
    "id": "icam-54809",
    "name": "Nanlite Fabric Grid EC-PR120 for Para 120 Softbox (47&#8243;)",
    "brand": "Nanlite",
    "category": "lighting",
    "price": 19.8,
    "originalPrice": 23.76,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/1568287839_IMG_1251184-1.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 60° Grid Controls Spill Light Narrows Beam Spread Adds Directional Control Fabric Grid Folds Flat for Storage",
    "specs": [
      {
        "label": "Brand",
        "value": "Nanlite"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Item Type",
        "value": "Egg Crate/Louver for Parabolic Softbox (16-Sided Hexadecagon Shape)"
      },
      {
        "label": "Grid",
        "value": "60°"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/1568287839_IMG_1251184-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/1568287319_1476452.jpg"
    ]
  },
  {
    "id": "icam-54200",
    "name": "NiceFoto FB-A Series Bi-Color Collapsible Light with Grid",
    "brand": "NiceFoto",
    "category": "accessories",
    "price": 102.97,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/Nicefoto-FB-1000A-FB2000A-1-1.webp",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Precision CCT Control: Seamlessly blend between warm Tungsten (3200K) True Color Rendering: With a certified CRI/TLCI =>96. The Power You Need: Choose the 100W (FB-1000A) or 200W (FB-2000A)",
    "specs": [
      {
        "label": "Brand",
        "value": "NiceFoto"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/Nicefoto-FB-1000A-FB2000A-1-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/05/Nicefoto-FB-1000A-FB2000A-p1.webp"
    ]
  },
  {
    "id": "icam-54545",
    "name": "DJI Osmo Pocket 4P – 4K Dual-Camera Pocket Gimbal Camera (Black)",
    "brand": "DJI",
    "category": "gimbals",
    "price": 851.49,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/DJI-Osmo-Pocket-4-Pro-–-4K-Dual-Camera-Pocket-Gimbal-Camera-Black.png",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Dual-Camera System Seamlessly switch between wide and portrait perspectives. 1-Inch CMOS Sensor Stunning image quality with up to 17 stops of dynamic range. 4K up to 240fps Capture ultra-smooth cinematic video and slow motion. 3-Axis Intelligent Gimbal Professional stabilization with sm",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
      },
      {
        "label": "Category",
        "value": "gimbals"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/DJI-Osmo-Pocket-4-Pro-–-4K-Dual-Camera-Pocket-Gimbal-Camera-Black.png"
    ]
  },
  {
    "id": "icam-54552",
    "name": "Insta360 Luna Ultra Standard Combo (Stellar White)",
    "brand": "Insta360",
    "category": "accessories",
    "price": 851.49,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-1.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Capture up to 8K30 Action Footage Dual Lenses, 1&#8243; & 1/1.3&#8243; CMOS Sensors Detachable 2&#8243; OLED Screen Triple AI Chip, 47GB Internal Storage 3-Axis Stabilization, AI Tracking Built-In Leica Color Profiles",
    "specs": [
      {
        "label": "Brand",
        "value": "Insta360"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Stellar White"
      },
      {
        "label": "Number of Axes",
        "value": "Three: Pitch (Tilt) / Roll / Yaw (Pan)"
      },
      {
        "label": "Rotation Range",
        "value": "Controllable Range Yaw (Pan): 292° (-57 to 235°) Roll: 100° (-50 to 50°) Pitch (Tilt): 177° (-57 to 120°), Mechanical Range Yaw (Pan): 303° (-63 to 240°) Roll: 283° (-63 to 220°) Pitch (Tilt): 278° (-98 to 180°)"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-12.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-11.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/05/Insta360-Luna-Ultra-Standard-Combo-Stellar-White-2-1.jpg"
    ]
  },
  {
    "id": "icam-53037",
    "name": "Jmary MT-65 SELFIE STICK 3M",
    "brand": "Jmary",
    "category": "accessories",
    "price": 29.7,
    "originalPrice": 51.49,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/05/Jmary-MT-65.png",
    "badge": "SAVE 42%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Universal Compatibility – Works seamlessly with action cameras like GoPro and DJI, as well as smartphones (phone clamp included). Extendable & Adjustable – Telescopic design extends for the perfect shooting angle and folds down for easy storage and portability. Secure Grip & Stability –",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/05/Jmary-MT-65.png",
      "https://icamstore.net/wp-content/uploads/2026/05/Gemini_Generated_Image_eq8hbjeq8hbjeq8h.png",
      "https://icamstore.net/wp-content/uploads/2026/05/Gemini_Generated_Image_oiii47oiii47oiii.png"
    ]
  },
  {
    "id": "icam-52709",
    "name": "Lexar Professional CFexpress Type A / SD USB 3.2 Gen 2 Reader",
    "brand": "Lexar",
    "category": "accessories",
    "price": 79.21,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/lexar_lrw530u_rnbng_cfexpress_type_a_usb_1659702979_1717274.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 1 x CFexpress Type A Card Slot 1 x SD Card Slot USB 3.2 Gen 2 Standard (10 Gb/s) USB Type-C Connection",
    "specs": [
      {
        "label": "Brand",
        "value": "Lexar"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/lexar_lrw530u_rnbng_cfexpress_type_a_usb_1659702979_1717274.jpg",
      "https://icamstore.net/wp-content/uploads/2023/12/1692709671_IMG_1811282.jpg",
      "https://icamstore.net/wp-content/uploads/2023/12/1659702979_1717274.jpg",
      "https://icamstore.net/wp-content/uploads/2023/12/1692709671_IMG_1811282-1.jpg",
      "https://icamstore.net/wp-content/uploads/2023/12/1692710153_IMG_2068111.jpg",
      "https://icamstore.net/wp-content/uploads/2023/12/1692710153_IMG_2068112.jpg",
      "https://icamstore.net/wp-content/uploads/2023/12/1692710153_IMG_2068113.jpg",
      "https://icamstore.net/wp-content/uploads/2023/12/1692710153_IMG_2068114.jpg"
    ]
  },
  {
    "id": "icam-52724",
    "name": "SmallRig Advanced Camera Cage Kit for Nikon ZR 5468",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 198.02,
    "originalPrice": 237.62,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Camera Cage for Nikon ZR Arca-Type Quick Release Plate Ergonomic Silicone-Wrapped Top Handle 360° Stepless Rotating Side Handle Multiple 1/4&#8243;-20 and 3/8&#8243;-16 Threads Integrated Cold Shoes and Strap Slot Includes HDMI and USB-C Cable Clamp Includes Dual-Head Wrench",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Support Type",
        "value": "Cage, Handheld Support"
      },
      {
        "label": "Grip Type",
        "value": "Topside Handgrip"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR-5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR-4.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR-3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SmallRig-Advanced-Camera-Cage-Kit-for-Nikon-ZR-2.jpg"
    ]
  },
  {
    "id": "icam-52699",
    "name": "Tilta Clamp-On Adapter for MB-T12 Matte Box (95mm)",
    "brand": "Tilta",
    "category": "accessories",
    "price": 79.21,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1539618000_1431638.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Tilta 4 x 5.65&#8243; MB-T12 Matte Box Fits Lens with 95mm Outer Lens Barrel Thumbscrew-Tightened Design Keyhole Slots Attach to Matte Box Aluminum & Stainless Steel Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Compatible Lens",
        "value": "95 mm (Attaches via Clamp)"
      },
      {
        "label": "Compatible Matte Box",
        "value": "95 mm Opening / Tilta MB-T12 Matte Box"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1539618000_1431638.jpg"
    ]
  },
  {
    "id": "icam-52695",
    "name": "Tilta Clamp-On Adapter for MB-T12 Matte Box (134mm)",
    "brand": "Tilta",
    "category": "accessories",
    "price": 79.21,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1646692286_IMG_1708935.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Tilta 4 x 5.65&#8243; MB-T12 Matte Box Fits Lens with 134mm Outer Lens Barrel Thumbscrew-Tightened Design Keyhole Slots Attach to Matte Box Aluminum & Stainless Steel Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Compatible Lens",
        "value": "134 mm (Attaches via Clamp)"
      },
      {
        "label": "Compatible Matte Box",
        "value": "134 mm Opening / Tilta MB-T12 Matte Box"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1646692286_IMG_1708935.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1646311686_1431634.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1646692286_IMG_1708936.jpg"
    ]
  },
  {
    "id": "icam-52545",
    "name": "Mavrix RGB MX-100 – Ultimate Pro Lighting for Stunning Photo & Video",
    "brand": "Mavrix",
    "category": "accessories",
    "price": 118.81,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-1735584110-scaled.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Full RGB Control (0°–360°) – Unlimited color options for creative lighting 2800K–9800K Color Temperature – Smooth transition from warm to cool tones 9800 Lumens Output – Powerful and consistent brightness CRI 95 / TLCI 96 – Accurate, true-to-life color reproduction 17 FX Modes – Built-i",
    "specs": [
      {
        "label": "Brand",
        "value": "Mavrix"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-1735584110-scaled.jpg"
    ]
  },
  {
    "id": "icam-52378",
    "name": "Jmary mobile holder BH-05",
    "brand": "Jmary",
    "category": "accessories",
    "price": 4.95,
    "originalPrice": 6.93,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/IMG_8884.jpg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features can be used with most smartphones Adjustable clamping range: accommodates phones of different sizes 1/4 UNC screw: for mounting on a tripod or other accessories Lightweight and portable: easy to carry and use",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/IMG_8884.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/IMG_8880.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/IMG_8889-768x768-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/IMG_8890-768x768-1.jpg"
    ]
  },
  {
    "id": "icam-51996",
    "name": "NiceFoto FB-2000C RGB Foldable Light (200W)",
    "brand": "NiceFoto",
    "category": "accessories",
    "price": 198.02,
    "originalPrice": 237.62,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/81263_nicefoto-fb-1000c-fb-2000c-4.webp",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Bi-Color CCT Control: Adjustable from warm (3200K) to daylight (5600K) for versatile lighting setups High Color Accuracy : CRI/TLCI ≥96 ensures natural and consistent color rendering Flexible & Portable Design : Lightweight, bendable LED mat ideal for tight spaces and travel shoots Comp",
    "specs": [
      {
        "label": "Brand",
        "value": "NiceFoto"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/81263_nicefoto-fb-1000c-fb-2000c-4.webp"
    ]
  },
  {
    "id": "icam-51458",
    "name": "K&F Concept Magnetic Phone Lens Adapter 58mm Variable ND2–32 Filter (KF15.0020)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 69.31,
    "rating": 5,
    "reviewsCount": 15,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/KF15.0020-1-1200x1200-1.jpg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Precise Compatibility with iPhone 17 Pro Max Custom-designed lens module cutouts ensure perfect alignment with the camera, flash, and body, without affecting signal or shooting performance. Strong Double-Sided Magnetic Mount Equipped with 25 N52 neodymium magnets (17 front + 8 back), of",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/KF15.0020-1-1200x1200-1.jpg"
    ]
  },
  {
    "id": "icam-51593",
    "name": "K&F Concept 25.6&#8243; Magnetic Quick Release Tripod 2-in-1 Extendable 360° Ball Head (KF09.181)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 24.75,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-33.jpg",
    "badge": "SAVE 50%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Custom Fit for DJI Osmo Devices Specially designed for Osmo Nano and Osmo Action 6 with a secure magnetic + clip quick-release system. (Note: Not compatible with Action 3/4/5 Pro or Osmo 360.) Adjustable Height for Versatile Shooting Extends from 21 cm to 62 cm (selfie stick mode) and 2",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-33.jpg"
    ]
  },
  {
    "id": "icam-51586",
    "name": "K&F Concept 71&#8243; Face Tracking Tripod 360° Auto Tracking Gesture Remote (KF15.0013)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 45.54,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-32.jpg",
    "badge": "SAVE 23%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 360° AI Face & Body Tracking Automatically tracks your movement in all directions up to 10 meters—no app required. Gesture Control System Easily control tracking with simple hand gestures like OK, Palm, or Victory. Auto-Extend & Quick-Fold Design Smart drop-to-open mechanism with multip",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-32.jpg"
    ]
  },
  {
    "id": "icam-51558",
    "name": "K&F Concept Popod 72&#8243; 3-in-1 Magnetic Phone Tripod Selfie Stick Remote (KF15.0015)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 31.68,
    "originalPrice": 47.52,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-31.jpg",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 3-in-1 Versatile Design Combines magnetic mount, phone clip, and 1/4&#8243; screw compatibility to support smartphones and various accessories. Quick Fold & Portable Build Pop-open setup for fast use, extends up to 180cm and folds down to 29cm. Lightweight (400g) for easy travel and sto",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-31.jpg"
    ]
  },
  {
    "id": "icam-51526",
    "name": "K&F Concept 2-in-1 Magnetic & Clip-on Neck Phone Holder Hands-Free POV (KF15.0016)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 29.7,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-30.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Hands-Free & Immersive POV Shooting Neck-mounted design provides stable, eye-level footage for natural and engaging videos during any activity. Built-in 90° Rotation Mechanism Easily switch between portrait and landscape modes with four adjustable angles—no need to reattach your device.",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-30.jpg"
    ]
  },
  {
    "id": "icam-51492",
    "name": "K&F Concept Neck Mount Air Cushion Hands-Free POV Vlogging 1/4&#8243; Adapter (KF12.0015)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 23.76,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-29.jpg",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Hands-Free POV Design Neck-mounted support system provides stable and immersive first-person perspective shooting for action and vlogging content. Wide Compatibility Compatible with GoPro Hero 13/12/11/10/9/8/7/6/5/4/MAX, Insta360 X5/X4/Ace Pro 2, DJI Osmo Action series, AKASO, and othe",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-29.jpg"
    ]
  },
  {
    "id": "icam-51477",
    "name": "K&F Concept LP-E6NH 2-Pack Batteries + 18W Charger Canon EOS (KF28.0088)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 99.01,
    "originalPrice": 116.83,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-28.jpg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Wide Canon Compatibility Works with Canon EOS R5, R6, R7, 5D series, 6D series, 7D series, 90D, 80D, 70D, 60D, and more, including BG-E series battery grips. PD 18W Fast Charging USB-C PD fast charging technology delivers up to 40–50% faster charging compared to standard chargers, with ",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-28.jpg"
    ]
  },
  {
    "id": "icam-51448",
    "name": "K&F Concept 22&#8243; Magic Arm Clamp Kit Overhead Desk Mount (KF31.201)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 49.5,
    "originalPrice": 69.31,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-27.jpg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Wide Device Compatibility Supports smartphones, action cameras, LED lights, microphones, and other accessories—perfect for content creators and professionals. Multi-Angle 360° Shooting Three ball heads provide full 360° rotation for precise angle adjustment, ideal for overhead, tabletop",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-27.jpg"
    ]
  },
  {
    "id": "icam-51435",
    "name": "K&F Concept 3-in-1 Car Suction Cup Camera Mount Action Cam/Phone (KF31.197)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 113.86,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-26.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Triple Suction Power Stability Three 3-inch suction cups form a triangular structure, delivering strong adhesion with up to 44 lbs horizontal and 26 lbs vertical holding force. Recommended load capacity: 2.2 lbs. Secure Fit on Curved Surfaces Dual ball head design allows ±15° micro-adju",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-26.jpg"
    ]
  },
  {
    "id": "icam-51416",
    "name": "K&F Concept Dual Super Clamp 360° Ball Head Handlebar Mount (KF31.204S2)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 24.75,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-24.jpg",
    "badge": "SAVE 38%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Versatile Usage Scenarios Ideal for cycling, motorcycling, and travel vlogging. Easily clamps onto handlebars, frames, seat posts, forks, railings, and other tubular objects. 360° Flexible Angle Adjustment Dual ball head design allows full rotation for precise positioning. Tool-free ins",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-24.jpg"
    ]
  },
  {
    "id": "icam-51403",
    "name": "K&F Concept Black Mist 1/4 4&#215;5.65&#8243; Square Cinema Filter Slim HD Multi-Coated (KF01.2451)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 108.91,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-23.jpg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Standard 4×5.65″ size compatible with most matte box systems (Tilta, SmallRig, etc.) Black Mist 1/4 effect for soft highlights, reduced glare, and cinematic skin tones Ultra-low reflectivity (0.2%) for sharp, clean 4K/8K image quality Premium Japanese AGC glass with 28-layer nano coatin",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-23.jpg"
    ]
  },
  {
    "id": "icam-51384",
    "name": "K&F Concept Super Clamp 360° Dual Ball Head Camera Mount Handlebar (KF31.204)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 21.78,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-20.jpg",
    "badge": "SAVE 45%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features 360° Dual Ball Head Adjustment: Flexible positioning and easy angle locking for perfect shots Strong Clamp Design: Heavy-duty grip for secure mounting on bikes, bicycles, or motorcycles Durable Build: Premium aluminum alloy for long-lasting use Stable On-the-Go Footage: Reduces vibratio",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-20.jpg"
    ]
  },
  {
    "id": "icam-51363",
    "name": "K&F Concept LP-E6NH Triple Slot Battery Charger LCD Canon EOS (KF28.0062)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 15.84,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-18.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Triple Battery Charging Charge up to 3 LP-E6 series batteries simultaneously or independently for maximum convenience. Wide Compatibility Fully compatible with LP-E6, LP-E6N, and LP-E6NH batteries used in Canon cameras such as EOS R5, R6, R7, 5D, 6D, and 7D Mark II. Dual Input Options F",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-18.jpg"
    ]
  },
  {
    "id": "icam-51265",
    "name": "K&F Concept USB 3.1 UHS-II High-Speed Card Reader & Storage Case (KF31.190)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 31.68,
    "originalPrice": 47.52,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-17.jpg",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 2-in-1 design: memory card reader + storage case Supports UHS-II SD, SD 4.0, SDHC, SDXC, Micro SD, and UHS-I cards 4 SD card slots, 6 TF (Micro SD) slots, and 2 Nano SIM slots Dual-slot reader supports simultaneous SD and TF card reading USB 3.1 with UHS-II protocol for fast data transf",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-17.jpg"
    ]
  },
  {
    "id": "icam-51157",
    "name": "K&F Concept 36mm Metal Ball Head 360° Panoramic Quick Release 16kg Load (KF31.044V1)",
    "brand": "K&F Concept",
    "category": "audio",
    "price": 29.7,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-14.jpg",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Durable aluminum alloy construction for strength and longevity 36mm ball diameter for enhanced stability and smooth movement 360° panoramic rotation for flexible shooting angles Three twist locks for precise and secure positioning 1/4&#8243; quick-release plate compatible with DSLR came",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-14.jpg"
    ]
  },
  {
    "id": "icam-51128",
    "name": "K&F Concept Magnetic Metal Phone Mount Cold Shoe Rotatable (KF31.196)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 14.85,
    "originalPrice": 17.82,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-12.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compatible with MagSafe-enabled iPhones (iPhone 12–16 series) and MagSafe cases Includes metal ring for non-MagSafe phone compatibility 23 strong N55 magnets for secure and stable attachment One-hand snap-on design for quick and easy use 180° Z-axis rotation with dual-hinge folding for ",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-12.jpg"
    ]
  },
  {
    "id": "icam-51111",
    "name": "K&F Concept 3.2m Heavy Duty Light Stand with Wheels Stainless Steel (KF34.054)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 108.91,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-7.avif",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Maximum height of 3.2m for versatile lighting setups Heavy-duty stainless steel construction for durability Three universal wheels for smooth mobility and repositioning Includes sandbag for added stability and safety Three-section adjustable design for flexible height control Bottom bra",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-7.avif"
    ]
  },
  {
    "id": "icam-50953",
    "name": "K&F Concept CPL Circular Polarizer 82mm Ultra-Slim Multi-Coated Waterproof (KF01.1161)",
    "brand": "K&F Concept",
    "category": "lenses",
    "price": 39.6,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/0199ecf2-e32d-79f7-b2f3-7edf4ea56cf4_1000-2.avif",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Reduce Glare & Reflections Eliminates unwanted reflections from water, glass, and shiny surfaces for clearer images Vivid Colors & Better Contrast Enhances color saturation and deepens blue skies for stunning outdoor photography Ultra-Slim Design (5.45mm) Prevents vignetting, ideal for ",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/0199ecf2-e32d-79f7-b2f3-7edf4ea56cf4_1000-2.avif"
    ]
  },
  {
    "id": "icam-50943",
    "name": "K&F Concept CPL Circular Polarizer 77mm Ultra-Slim Multi-Coated Waterproof (KF01.1160)",
    "brand": "K&F Concept",
    "category": "lenses",
    "price": 34.65,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-6.avif",
    "badge": "SAVE 30%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Feature Reduces glare and reflections for clearer photos Enhances color saturation and contrast Deepens blue skies and enriches landscape shots Multi-coated optical glass for high clarity Ultra-slim 5.45mm frame prevents vignetting Perfect for outdoor and travel photography Available in multiple",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-6.avif"
    ]
  },
  {
    "id": "icam-50865",
    "name": "K&F Concept CPL Circular Polarizer 49mm Ultra-Slim Multi-Coated Waterproof (KF01.1153)",
    "brand": "K&F Concept",
    "category": "lenses",
    "price": 17.82,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1.avif",
    "badge": "SAVE 40%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Enhanced Image Quality: Reduces reflections and glare for clearer, more vibrant photos 24 Multi-Layer Coating: Improves light transmission while minimizing ghosting and flare Rich Color & Contrast: Enhances sky, water, and foliage for more dynamic shots Ultra-Slim Frame: Prevents vignet",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1.avif"
    ]
  },
  {
    "id": "icam-50893",
    "name": "K&F Concept CPL Circular Polarizer 58mm Ultra-Slim Multi-Coated Waterproof (KF01.1156)",
    "brand": "K&F Concept",
    "category": "lenses",
    "price": 19.8,
    "originalPrice": 37.62,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-1.avif",
    "badge": "SAVE 47%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Feature Glare Reduction Eliminates reflections from water, glass, and shiny surfaces for clearer images. Enhanced Colors & Contrast Deepens blue skies and boosts color saturation for rich, vibrant photos. Ultra-Slim Frame Design 5.45mm magnalium frame prevents vignetting, ideal for wide-angle le",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-1.avif"
    ]
  },
  {
    "id": "icam-50915",
    "name": "K&F Concept CPL Circular Polarizer 67mm Ultra-Slim Multi-Coated Waterproof (KF01.1158)",
    "brand": "K&F Concept",
    "category": "lenses",
    "price": 23.76,
    "originalPrice": 35.64,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-3.avif",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Reduces glare and unwanted reflections Enhances color saturation and contrast Deepens blue skies for dramatic outdoor shots Multi-coated optical glass for improved clarity Ultra-slim 5.45mm frame prevents vignetting Ideal for landscape and outdoor photography Available in sizes: 37mm – ",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-3.avif"
    ]
  },
  {
    "id": "icam-50925",
    "name": "K&F Concept CPL Circular Polarizer 72mm Ultra-Slim Multi-Coated Waterproof (KF01.1159)",
    "brand": "K&F Concept",
    "category": "lenses",
    "price": 27.72,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-5.avif",
    "badge": "SAVE 30%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Eliminates glare and reflections for clearer images Enhances colors and contrast for vivid photography Deepens blue skies and improves landscape shots Multi-coated glass for better light transmission Ultra-slim 5.45mm frame reduces vignetting Ideal for outdoor and nature photography Wid",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "lenses"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-5.avif"
    ]
  },
  {
    "id": "icam-50987",
    "name": "K&F Concept Nano-X Black Diffusion Filter 82mm 1/2 Grade (KF01.1656)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 59.41,
    "originalPrice": 89.11,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-9.jpg",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 1/2 diffusion strength for a soft, cinematic glow Reduces contrast and controls highlight intensity Smooths skin imperfections for more flattering portraits 79% light transmittance for balanced exposure Compatible with both photography and video applications Creates a dreamy, film-like ",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-9.jpg"
    ]
  },
  {
    "id": "icam-50998",
    "name": "K&F Concept Nano-C Variable Star Filter 4–8 Point 58mm (KF01.2329)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 23.76,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-10.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Variable star effect: rotate between 4-point and 8-point patterns Enhances light sources with dramatic starburst effects Smooth rotation mechanism for easy adjustment Made from multicoated optical glass for improved clarity Reduces reflections and glare Durable metal filter frame for lo",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-10.jpg"
    ]
  },
  {
    "id": "icam-51057",
    "name": "K&F Concept Variable ND2–ND400 40.5mm 1–9 Stop Multi-Coated Filter (KF01.1395)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 21.78,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-8.webp",
    "badge": "SAVE 27%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Variable ND range from ND2 to ND400 (1–9 f-stops) Ideal for long exposure and motion blur effects Perfect for shooting water, landscapes, and bright outdoor scenes Enables wider apertures for shallow depth of field in daylight Made from high-quality Japanese AGC optical glass Double-sid",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-8.webp"
    ]
  },
  {
    "id": "icam-51045",
    "name": "K&F Concept Variable ND2–ND400 43mm 1–9 Stop Multi-Coated Filter (KF01.1396)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 23.76,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-7.webp",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Variable ND range from ND2 to ND400 (1–9 f-stops) Ideal for long exposure and motion blur effects Perfect for shooting water, landscapes, and bright outdoor scenes Enables wider apertures for shallow depth of field in daylight Made from high-quality Japanese AGC optical glass Double-sid",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-7.webp"
    ]
  },
  {
    "id": "icam-51085",
    "name": "K&F Concept Variable ND2–ND400 49mm 1–9 Stop Multi-Coated Filter (KF01.1398)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 23.76,
    "originalPrice": 27.72,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-9.webp",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Variable ND range from ND2 to ND400 (1–9 f-stops) Ideal for long exposure and motion blur effects Perfect for shooting water, landscapes, and bright outdoor scenes Enables wider apertures for shallow depth of field in daylight Made from high-quality Japanese AGC optical glass Double-sid",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-9.webp"
    ]
  },
  {
    "id": "icam-51098",
    "name": "K&F Concept Variable ND2–ND400 58mm 1–9 Stop Multi-Coated Filter (KF01.1401)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 27.72,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-10.webp",
    "badge": "SAVE 30%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Ideal for long exposure and motion blur effects Perfect for shooting water, landscapes, and bright ou Variable ND range from ND2 to ND400 (1–9 f-stops) tdoor scenes Enables wider apertures for shallow depth of field in daylight Made from high-quality Japanese AGC optical glass Double-si",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-10.webp"
    ]
  },
  {
    "id": "icam-51118",
    "name": "K&F Concept RGB Video Light 5000mAh Portable 360° LED Panel 2700-7500K CRI95+ (KF34.052)",
    "brand": "K&F Concept",
    "category": "lighting",
    "price": 29.7,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-11.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Full RGB color range (0–360°) with adjustable saturation Variable color temperature: 2700K–7500K 1–100% dimmable brightness for precise lighting control 13 built-in creative lighting effects with adjustable intensity and frequency 135 LED beads delivering up to 12W output and 2812 lux @",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-11.jpg"
    ]
  },
  {
    "id": "icam-51142",
    "name": "K&F Concept MS28 Folding 10-in-1 Hex Key Set Multi Tool (KF31.099)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 21.78,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-13.jpg",
    "badge": "SAVE 56%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 10-in-1 multifunctional design for versatile use Includes 6 hex wrenches and 4 screwdrivers Compact, palm-sized design for easy portability Ideal for assembling and adjusting camera rigs and accessories Built-in threaded holes for storing spare screws Foldable structure with protective ",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-13.jpg"
    ]
  },
  {
    "id": "icam-51190",
    "name": "K&F Concept 72&#8243; Heavy Duty Video Tripod Fluid Head Aluminum (KF09.121)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-15.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Heavy-duty tripod with max load capacity of 8kg (17.6 lbs) Smooth fluid head with 360° pan and -70° to 90° tilt range Built-in balance system and damping control for stable motion Detachable handle for left- or right-hand operation Side-press quick-release system for fast and secure mou",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-15.jpg"
    ]
  },
  {
    "id": "icam-51227",
    "name": "K&F Concept Lightweight Video Tripod O234AO+BV01 Smartphone Clamp (KF09.115V1)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 54.46,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-16.jpg",
    "badge": "SAVE 31%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Supports up to 6.6 lbs (3 kg) for cameras and accessories Suitable for both video and photography applications Includes smartphone clamp (fits 2&#8243; to 3.5&#8243; wide devices) Quick-release plate for fast camera mounting and removal Reversible 2-section center column for low-angle s",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-16.jpg"
    ]
  },
  {
    "id": "icam-51371",
    "name": "K&F Concept Matte Box Kit 4&#215;5.65&#8243; Filter 67-95mm Adapters (2322V1)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 148.51,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-19.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Adjustable Carbon Fiber Flags Top flag opens up to 180°, while side wings extend up to 40° to effectively block unwanted light and reduce glare. (Note: Top flag cannot fully close when more than 2 filter trays are installed.) Modular Quick-Release Design Easy to install and remove with ",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-19.jpg"
    ]
  },
  {
    "id": "icam-51425",
    "name": "K&F Concept Super Crab Clamp Camera Mount Rotatable 1/4&#8243; 3/8&#8243; (KF31.218)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 10.89,
    "originalPrice": 15.84,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-25.jpg",
    "badge": "SAVE 31%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Adjustable Dual Clamp Design Features two rotatable clamping blocks that securely grip flat surfaces up to 50mm and cylindrical objects from 20mm to 60mm. Clamp Anywhere Maximum opening of 60mm allows attachment to railings, tabletops, light stands, round tubes, branches, and more. Wide",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-25.jpg"
    ]
  },
  {
    "id": "icam-51394",
    "name": "K&F Concept Quick Release Clamp Mount Handlebar Holder (KF31.204S1)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 24.75,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-21.jpg",
    "badge": "SAVE 38%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Strong Aluminum Build Made from high-quality aluminum alloy and nylon fiber for enhanced durability and stable shooting performance during movement. Wide Compatibility Directly compatible with action cameras, including DJI Action 3, Action 4, Action 5 Pro, and Osmo 360. Highly Adaptable",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-21.jpg"
    ]
  },
  {
    "id": "icam-51601",
    "name": "Jmary MT-75 Tripod Stand Light for Digital Cameras",
    "brand": "Jmary",
    "category": "cameras",
    "price": 7.43,
    "originalPrice": 8.91,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_x9lm1xx9lm1xx9lm-1.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Adjustable Height Easily customize the height to suit various shooting angles and lighting needs. Stable & Secure Support Provides a solid base for cameras, LED lights, and other equipment. Lightweight & Portable Easy to transport for outdoor shoots, travel, and on-the-go setups. Durabl",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_x9lm1xx9lm1xx9lm-1.png",
      "https://icamstore.net/wp-content/uploads/2026/04/31IpdimShhL._AC_-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_xod7ucxod7ucxod7.png"
    ]
  },
  {
    "id": "icam-50695",
    "name": "Jmary KT-259 Selfie Stick Tripod",
    "brand": "Jmary",
    "category": "accessories",
    "price": 16.83,
    "originalPrice": 21.78,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-1.webp",
    "badge": "SAVE 23%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Extendable 160 cm Design: 8-section aluminum pole offers perfect height for selfies, group shots, and tripod use 360° Adjustable Phone Holder: Capture photos and videos from any angle with ease Wireless Remote Control: Detachable remote with up to 10 m range for hands-free shooting Ligh",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/103_51a3e9e8-0528-4098-ba13-5239d1e7ad94-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/96_10ae97d0-68ee-4c66-bf75-5604a8d95c90-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/101_3a50b4ee-58ae-4c36-be4b-fa29297c9b24-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/104_15f49289-c34c-4e1e-9bb1-3321ede7bb21-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/102_970f9559-32ae-416f-a630-73d505efe8cb.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/95_0d65a242-29b5-44a4-a2d3-aab94d67e409.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/100_082dba20-9311-4442-a5cd-ea5ff8dbe220-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/99_9adb0d5b-94c6-498d-90c4-912add20b422-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/97_ea019d2f-ba16-4add-abb9-d30c560e5a4e-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/94_f1a7fd6e-2ce9-4185-a199-ed26aa1f7b73-768x768-1.webp"
    ]
  },
  {
    "id": "icam-51611",
    "name": "Jmary KT-299 Rotation Smart Tripods Al Face Sensor Selfie Stick Tripod Upto 1.8 Meter long 360° Horizontal – Black",
    "brand": "Jmary",
    "category": "accessories",
    "price": 25.74,
    "originalPrice": 45.54,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_mg4o3gmg4o3gmg4o.png",
    "badge": "SAVE 43%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features AI Auto Tracking Technology Automatically follows your movement to keep you centered in the frame—perfect for solo shooting. Extendable Up to 1.8M Achieve a wide range of shooting angles for professional-quality photos and videos. Rechargeable Bluetooth Remote Capture photos and control",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_mg4o3gmg4o3gmg4o.png",
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_hzfejjhzfejjhzfe.png"
    ]
  },
  {
    "id": "icam-51617",
    "name": "Jmary Professional KS355+HG60 DSLR ILDC Camera 2-in-1 Monopod Tripod 360 Degree Panoramic Ball Head Stand – Black",
    "brand": "Jmary",
    "category": "accessories",
    "price": 69.31,
    "originalPrice": 89.11,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_dt91dsdt91dsdt91.png",
    "badge": "SAVE 22%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 360° Horizontal Rotation Center column rotates fully and can be positioned horizontally for panoramic and macro shots. Adjustable Height & Portable Design Extends from 63 cm to 185 cm and folds down to 63.5 cm for easy transport. Lightweight Yet Strong Weighs only 1.83 kg, making it con",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_dt91dsdt91dsdt91.png",
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_xl8u62xl8u62xl8u.png",
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_tcpw6atcpw6atcpw.png",
      "https://icamstore.net/wp-content/uploads/2026/04/Gemini_Generated_Image_43es1b43es1b43es.png"
    ]
  },
  {
    "id": "icam-50713",
    "name": "Jmary FM-180RGB For Photography DSLR Camera RGB LED Video Light 20W Fill Light",
    "brand": "Jmary",
    "category": "cameras",
    "price": 39.6,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-6.jpg",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Feayures Powerful 20W RGB Lighting with 168 LED beads for bright, stable illumination and full color control Wide Color Temperature Range (1800K–9000K) for seamless switching between warm and cool lighting 20 Built-in Lighting Effects for creative shooting in photography, video, and live streami",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "cameras"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0032841_9.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0032841_6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0032841_5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0032841_3.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0032841_2.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0032841_1.jpg"
    ]
  },
  {
    "id": "icam-50725",
    "name": "Jmary FM-168R Dual Color Temperature 160 LED Beads Portable Magnetic Phone Fill Light (Black)",
    "brand": "Jmary",
    "category": "lighting",
    "price": 20.2,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-7.jpg",
    "badge": "SAVE 49%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Dual Color Temperature (2500K–9000K): Easily switch between warm and cool lighting for versatile shooting moods 160 High-Intensity LED Beads: Delivers bright, efficient, and professional-quality illumination Multiple Mounting Options: Includes cold shoe mount and clip adapter for flexib",
    "specs": [
      {
        "label": "Brand",
        "value": "Jmary"
      },
      {
        "label": "Category",
        "value": "lighting"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-7.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0030305_B6.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0030305_B5.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/SYA0030305_B3.jpg"
    ]
  },
  {
    "id": "icam-50841",
    "name": "ZGCINE DT-DC D-Tap to DC Power Cable 5.5/2.5 (Braided Wire)",
    "brand": "ZGCINE",
    "category": "accessories",
    "price": 16.24,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-6.webp",
    "badge": "SAVE 18%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Wide Voltage Compatibility: Supports input and output voltage range of 12V – 17V for stable power delivery High Current Capacity: Provides up to 10A output for powering demanding professional devices Direct Power Transmission: Maintains consistent voltage from input to output for reliab",
    "specs": [
      {
        "label": "Brand",
        "value": "ZGCINE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Orange"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-6.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/4_c1223a05-1755-4fa3-a389-a68e4eef4626-768x768-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/2_f4d64863-d8de-40ac-91d0-5d0057f73b31.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/1_b65094f3-dfb2-4267-bd33-e868e9d1be07.webp"
    ]
  },
  {
    "id": "icam-50816",
    "name": "ZGCINE DT-PD 20&#8243; D-Tap to USB-C PD Cable",
    "brand": "ZGCINE",
    "category": "accessories",
    "price": 38.61,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-1.png",
    "badge": "SAVE 22%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features PD Fast Charging (Up to 65W): Supports high-speed power delivery for efficient device charging Bidirectional Power Cable: Works as both input and output for versatile power use 180° Rotating D-Tap Connector: Flexible design with anti-reverse indicator for safe operation Ultra-Durable Bu",
    "specs": [
      {
        "label": "Brand",
        "value": "ZGCINE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Orange"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-1.png",
      "https://icamstore.net/wp-content/uploads/2026/04/DT-PD-1.png",
      "https://icamstore.net/wp-content/uploads/2026/04/DT-PD-3.png",
      "https://icamstore.net/wp-content/uploads/2026/04/DT-PD-2.png"
    ]
  },
  {
    "id": "icam-50793",
    "name": "ZGCINE DT-LM D-Tap to 2-Pin LEMO Coiled Power Cable (23.6&#8243;)",
    "brand": "ZGCINE",
    "category": "accessories",
    "price": 36.63,
    "originalPrice": 51.49,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-8.jpg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compatible with RED & Sony Cameras: Designed for reliable power delivery to select professional camera systems Male D-Tap Connector (180° Tilt): Flexible connector design for improved cable positioning and ease of use Right-Angle 2-Pin LEMO Connector: Ensures a secure and stable connect",
    "specs": [
      {
        "label": "Brand",
        "value": "ZGCINE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Lemo Straight"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-8.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359305.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359304.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359303.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359302.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359301.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359300.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359299.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359298.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1730118653_IMG_2359297.jpg"
    ]
  },
  {
    "id": "icam-50823",
    "name": "ZGCINE DT-LMS D-Tap to Lemo 2Pin Male Power Cable for Select RED ARRI and SONY Camera (Lemo Straight)",
    "brand": "ZGCINE",
    "category": "accessories",
    "price": 34.65,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-5.webp",
    "badge": "SAVE 30%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Compatible with RED, ARRI & Sony Cameras: Designed for select professional cinema camera systems D-Tap to 2-Pin LEMO Connection: Provides stable and efficient power delivery Straight LEMO Connector: Ensures a secure and reliable connection during use Professional-Grade Design: Ideal for",
    "specs": [
      {
        "label": "Brand",
        "value": "ZGCINE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Lemo Straight"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-5.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/b_97c3380a-2d9e-48a7-a979-d733888c353a-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/A_135d1b51-f43b-4aa6-9e57-bc6f78580939-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/5_af7d6014-cd79-46a5-bc36-a62ae1240110-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/C_637198b1-68b8-4812-a9c2-7d89a3dcd7e7-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/1_5dd37a2f-d825-4c84-a237-9ca1bcd943a4-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/2_aa1c336c-0f83-4bc5-8af9-4206194d7032-1.webp"
    ]
  },
  {
    "id": "icam-50779",
    "name": "ZGCINE Rotatable L-Shaped Quick Release V-Mount Battery QR Plate Foldable (VM-VP4)",
    "brand": "ZGCINE",
    "category": "accessories",
    "price": 148.51,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-3.webp",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Arca-Swiss 38mm Quick Release Plate: Allows fast and seamless switching between handheld and tripod modes with easy attachment and detachment 90° Rotatable Design: Provides flexible screen access for comfortable viewing and operation from multiple angles One-Key Power Control: Simple si",
    "specs": [
      {
        "label": "Brand",
        "value": "ZGCINE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-3.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/s-l1600-6.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/s-l1600-5.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/s-l1600-4.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/s-l1600-3.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/s-l1600-2.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/s-l1600-1.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/s-l1600.webp"
    ]
  },
  {
    "id": "icam-50747",
    "name": "ZGCINE Quick Release V-Mount Plate for V Mount Battery DSLR Camera (VR-Kit4)",
    "brand": "ZGCINE",
    "category": "accessories",
    "price": 100.99,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1-2.webp",
    "badge": "SAVE 22%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Arca-Swiss 38mm Quick Release Plate: Enables fast switching between handheld and tripod setups 180° Rotatable Design: Provides easy access to flip screens for vlogging and filming Folding & Telescopic Structure: Compact and space-saving design for easy storage and portability Quick Setu",
    "specs": [
      {
        "label": "Brand",
        "value": "ZGCINE"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1-2.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/b_2730085e-e29a-42e5-b204-a49a251f482c.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/c_e070d198-cdb3-4972-834e-9fc5259d08cd.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/a2_87b817da-cfd5-4396-a5eb-28a5fc58d9de.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/6_0eb7a262-3fbc-4cc8-9c0f-d1ec89fb8b73.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/3_3aad087e-2bc6-4ff0-9e84-267db10914eb.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/5_deae638d-ef7c-4bbb-b056-0385353ffc36.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/4_f7967678-82b7-47a2-a35c-f5f5266678a3.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/7_d165967a-b268-4e98-b220-4ddff44f2ca4.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/2_b2bb90f8-94c4-491b-8540-60e7bc99d6a3.webp"
    ]
  },
  {
    "id": "icam-51940",
    "name": "Hollyland HL Interview Adapter for Wireless Microphones",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 29.7,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1766648712_1937597.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Turns Wireless Mic into Handheld/Desktop Microphone Handle with Retractable Feet Foam Windscreen",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1766648712_1937597.jpg"
    ]
  },
  {
    "id": "icam-51934",
    "name": "Hollyland Monitor Hood for Pyro 7",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 39.6,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1721897155_1838306.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Pyro 7 Transceiver/Monitor Unit Reduces Glare and Reflections Outdoors Snaps onto Front of Display Folds Down for Storage Keeps Controls and Antennas Clear",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1721897155_1838306.jpg"
    ]
  },
  {
    "id": "icam-51792",
    "name": "SmallRig MagSafe Phone Mount for Gym 5460",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 23.76,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1754503576_1911107.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features MagSafe-Type Magnetic Mount Magnetic Mount for Metal Surfaces 360° Adjustable Ball Head",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1754503576_1911107.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547698.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547697.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547696.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547695.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547694.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547693.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547692.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1754503575_IMG_2547691.jpg"
    ]
  },
  {
    "id": "icam-51804",
    "name": "SmallRig Bottom Mount Plate with Dual 15mm Rod Clamp 5609",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 44.55,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1756820377_1916819.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Dual 15mm Rod Clamp 1/4&#8243;-20 and 3/8&#8243;-16 Mounting Screws Multiple 1/4&#8243;-20 and 3/8&#8243;16 Threads Two 7.9&#8243; 15mm Carbon Fiber Rods",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1756820377_1916819.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1756820372_IMG_2564750.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1756820372_IMG_2564749.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1756820372_IMG_2564748.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1756820372_IMG_2564747.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1756820372_IMG_2564746.jpg"
    ]
  },
  {
    "id": "icam-51812",
    "name": "SmallRig Desktop Magic Arm with Crab-Shaped Clamp Kit (21.7&#8243;) 5624",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 35.64,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1757589001_1920549.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Mounts Webcam, Smartphone, Action Camera Crab-Style Clamp with 2&#8243; Jaw Opening Clamps on Surfaces up to 1.8&#8243; Thick Clamps on 0.7 to 2&#8243; Diameter Pole/Tube Holder Fits 2.6 to 3.9&#8243; Wide Smartphones Adjustable Magic Arm with 1/4&#8243;-20 Screw Supports Devices up to ",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1757589001_1920549.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1757588993_IMG_2572496.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1757588993_IMG_2572495.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1757588993_IMG_2572494.webp"
    ]
  },
  {
    "id": "icam-51818",
    "name": "SmallRig Advanced Camera Cage Kit for Canon EOS R6 Mark III/R6 II (Hawklock) 5958",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 188.12,
    "originalPrice": 198.02,
    "rating": 5,
    "reviewsCount": 10,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1764776940_1936017.jpg",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Cage for R6 Mark III/R6 II Arca-Type Quick Release Plate Top Handle, Adjustable Side Handle Hawklock NATO Rails on Top and Side Multiple 1/4&#8243;-20 and 3/8&#8243;-16 Threads Integrated Cold Shoes and Strap Slot Includes HDMI/USB-C Cable Clamp",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1764776940_1936017.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776959_IMG_2626602.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776959_IMG_2626601.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776959_IMG_2626600.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776959_IMG_2626599.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776959_IMG_2626598.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626597.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626596.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626595.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626594.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626593.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626592.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626591.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626590.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626589.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764776941_IMG_2626588.jpg"
    ]
  },
  {
    "id": "icam-51903",
    "name": "SmallRig All-in-One Thermal Live Streaming & Filming Handheld Phone Cage Kit 5276",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 178.22,
    "originalPrice": 188.12,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1752569824_1906121.jpg",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Extended Recording & Live Streaming Holds Smartphones 2.5 to 3.1&#8243; Wide Cooling Cage with 3 Power Levels Rotating Handles with Wireless Control Power Bank Holder & USB-C Power Hub",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1752569824_1906121.jpg"
    ]
  },
  {
    "id": "icam-51836",
    "name": "SmallRig Basic Shoulder Rig Kit 2896C",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 118.81,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1701252313_1798091.jpg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Shoulder Mount for DSLR & Small Cameras Shoulder Pad with 15mm Rod Clamp Baseplate with 15mm Rods & Rod Clamp Dual Rubber Handgrip Kit",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1701252313_1798091.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1701252968_IMG_2134829.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1701252968_IMG_2134828.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1701252968_IMG_2134827.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1701252968_IMG_2134826.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1701252968_IMG_2134825.jpg"
    ]
  },
  {
    "id": "icam-51853",
    "name": "SmallRig Cage Kit for Sony A7 V / A7 IV / A7S III / A7R V 3668C",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 168.32,
    "originalPrice": 178.22,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1767089543_IMG_2644811.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Effortless Ground-Level Shooting – Ergonomic top handle ensures smooth, stable low-angle shots Unlimited Expansion Options – Multiple mounting points + HawkLock NATO rail for fast accessory attachment Secure Dual-Lock Design – Two-point locking system keeps your camera firmly in place A",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1767089543_IMG_2644811.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/2geg1cheaxf-1769484061019_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/aatol4d3u74-1772015639413_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/bl8b5l7i9ps-1772015639430_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/jcguwdmjszr-1772015639428_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/ll4mzqa24v-1772015639444_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/mv3old1pdsc-1772015639429_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/o25daygdxyi-1772015639421_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/rv2lgg4m43o-1769484061040_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/t5kibgjjbnb-1769484061037_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/u5u8hz44zug-1769484061043_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/vejj6zq1ds-1772015639420_.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/woxfo0n8rqe-1772015639416_.jpg"
    ]
  },
  {
    "id": "icam-51869",
    "name": "SmallRig CFexpress Type B 9-in-1 Docking Station 4662",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 99.01,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1739447461_1879882.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For CFexpress Type B Cards SD and microSD Card Slots USB-C, USB-A, and HDMI Ports RJ45 Ethernet Port 20GB USB-C Cable (19.7&#8243;) LED Status Indicator",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1739447461_1879882.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447473_IMG_2431481.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447473_IMG_2431480.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447473_IMG_2431479.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447473_IMG_2431478.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447473_IMG_2431477.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447456_IMG_2431476.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447456_IMG_2431475.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447456_IMG_2431474.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447456_IMG_2431473.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447456_IMG_2431472.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447456_IMG_2431471.jpg"
    ]
  },
  {
    "id": "icam-50733",
    "name": "Tilta Camera Cage Base Kit for Canon C50 (Black) TA-T93-A-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 217.82,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1765459925_1937949.jpg",
    "badge": "SAVE 27%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Camera Cage, Detachable Top Plate Xeno Handle for Right- or Left-Side Use Extension Bracket for XLR Top Handle HDMI and USB Cable Clamps NATO Rail, 1/4&#8243;-20 and 3/8&#8243;-16 Threads Three Cold Shoes Arca-Type Bottom Plate Durable Aluminum and Steel Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1765459925_1937949.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632859.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632860.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632861.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632862.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632864.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632865.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632866.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632867.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459928_IMG_2632868.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459941_IMG_2632869.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459941_IMG_2632870.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459941_IMG_2632871.jpg"
    ]
  },
  {
    "id": "icam-50794",
    "name": "Tilta XLR Extension Bracket for Canon C50 (Black) TA-T93-XLR-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 31.68,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1765460041_1937954.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Extends Canon C50 XLR Top Handle Unit Attaches via Two Included Screws Two Anti-Twist 1/4&#8243;-20 & 3/8&#8243;-16 Threads Cold Shoe Mount, NATO Rail",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1765460041_1937954.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765460029_IMG_2632872.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765460029_IMG_2632873.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765460029_IMG_2632874.jpg"
    ]
  },
  {
    "id": "icam-50864",
    "name": "Tilta Camera Cage for DJI Osmo Action 6 Base Kit Black TA-T95-A-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 71.29,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1764845332_IMG_2627123.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Cage for DJI Osmo Action 6 Magnetic Quick Release Baseplate 1/4&#8243;-20 Thread & Cold Shoe Receiver Magnetic Quick Release Side Connector Removable Battery Side Cover Charging Port & Card Slot Unobstructed Quick Battery Swap | Easy Assembly Aluminum Alloy Construction Integrated ",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Support Type",
        "value": "Cage"
      },
      {
        "label": "Grip Type",
        "value": "No"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1764845332_IMG_2627123.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845332_IMG_2627124.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845332_IMG_2627125.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845332_IMG_2627126.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845340_1936314.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627127.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627128.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627129.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627130.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627131.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627132.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627133.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627134.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764845362_IMG_2627135.jpg"
    ]
  },
  {
    "id": "icam-50892",
    "name": "Tilta Filter Kit for DJI Osmo Action 6 Black TA-T95-FK-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 71.29,
    "originalPrice": 79.21,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1764848065_1936318.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For DJI Osmo Action 6 Camera ND8, ND16, and ND32 Filters Circular Polarizer (CPL) Filter Reduce Light Intake by 3, 4, or 5 Stops Minimize Reflections and Glare with CPL Control Shutter Speed | Enhance Contrast",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Transparent"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1764848065_1936318.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764848048_IMG_2627227.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764848067_IMG_2627228.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764848067_IMG_2627229.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764848067_IMG_2627230.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764848067_IMG_2627231.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1764848067_IMG_2627232.jpg"
    ]
  },
  {
    "id": "icam-50955",
    "name": "Tilta Hydra Adjustable Support Post (39.4&#8243;) HDA-T16-100",
    "brand": "Tilta",
    "category": "accessories",
    "price": 253.47,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1763993787_1932336.jpg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Durable Support Post for Mobile Rigs Mount Camera and Accessories onto Pole Pole Measures 39.4&#8243; Long 100W USB-C Power Passthrough Upper and Lower Support Feet 3-Prong Action Camera Mount Many Optional Mounting Accessories Aluminum and Carbon Fiber Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1763993787_1932336.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993782_IMG_2617323.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993782_IMG_2617324.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993782_IMG_2617325.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993782_IMG_2617326.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993782_IMG_2617327.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993782_IMG_2617328.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993825_IMG_2617329.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993825_IMG_2617330.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993825_IMG_2617331.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993825_IMG_2617332.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993825_IMG_2617333.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993825_IMG_2617334.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763993825_IMG_2617335.jpg"
    ]
  },
  {
    "id": "icam-51038",
    "name": "Tilta Arca-Type Ball Head for Hydra Adjustable Support Post HDA-T16-ABH",
    "brand": "Tilta",
    "category": "accessories",
    "price": 100.99,
    "originalPrice": 118.81,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1763984275_IMG_2616762.jpg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Hydra Adjustable Support Post Arca-Type Ball Head for Camera Mounting Heavy-Duty Clamp Integrated 1/4&#8243;-20 Accessory Thread Durable Aluminum Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1763984275_IMG_2616762.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763984275_IMG_2616760.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763984275_IMG_2616761.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763984282_1932339.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763984291_IMG_2616763.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763984291_IMG_2616764.jpg"
    ]
  },
  {
    "id": "icam-51068",
    "name": "Tilta Extendable Vlog Tripod (Snow White) TT-VT01-BH-SW",
    "brand": "Tilta",
    "category": "accessories",
    "price": 23.76,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1739971366_1879441.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 1/4&#8243;-20 Ball Head Mount Load Capacity: 2.2 lb Tripod Height Range: 5.5 to 12.9&#8243; Stick Length Range: 7.4 to 14.6&#8243; 90° Tilt 360° Pan 4-Section Telescoping Rod One Anti-Twist 1/4&#8243;-20 Accessory Mount Folded Length: 7.4&#8243; Aluminum Alloy and ABS Plastic",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "White"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1739971366_1879441.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971360_IMG_2435799.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971360_IMG_2435800.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971360_IMG_2435801.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971360_IMG_2435802.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971360_IMG_2435803.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435804.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435805.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435806.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435807.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435808.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435809.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435810.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739971381_IMG_2435811.jpg"
    ]
  },
  {
    "id": "icam-51143",
    "name": "Tilta Full Camera Cage Kit for Canon EOS R50 V (Black) TA-T83-A-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1753369213_1909016.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Maintains Access to Buttons and Ports NATO Top Handle Multiple 1/4&#8243;-20 Threads Cold Shoe & NATO Attachments Arca-Type Baseplate",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1753369213_1909016.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540008.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540009.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540010.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540011.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540012-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540012.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540013.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540014.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369223_IMG_2540015.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540016.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540017.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540018.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540019.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540020.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540021.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540022.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540023.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540024.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540025.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540026.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540027.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540028.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1753369270_IMG_2540029.jpg"
    ]
  },
  {
    "id": "icam-51243",
    "name": "Tilta Mini PD V-Mount Battery Plate (Black) TA-BTP4-V-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1727369413_1855697.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Mini Universal V-Mount Battery Plate 15mm LWS Rod Clamp 14.8V D-Tap & 2-Pin LEMO-Type Outputs 60W USB-C PD Output Aluminum & Stainless Steel Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1727369413_1855697.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346250.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346251.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346252.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346253.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346254.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346255.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346256.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346257.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346258.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346259.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346260.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346261.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346262.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1727370117_IMG_2346263.webp"
    ]
  },
  {
    "id": "icam-50760",
    "name": "Tilta Extendable Shoulder Pad Baseplate for Camcorders (Black) TA-ESB-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 223.76,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/tilta_ta_esb_b_extendable_shoulder_pad_baseplate_1765457768_1937948.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Designed for Camcorders Manfrotto-Type Quick Release Plate Articulated Design for Chest Support Pad Slides 4.7&#8243; for Optimal Balancing Quick Release Plate Slides 3.9&#8243; 1/4&#8243;-20 & 3/8&#8243;-16 Front & Bottom Threads Push-Button Quick Release Top & Bottom Lever Locks Use w",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/tilta_ta_esb_b_extendable_shoulder_pad_baseplate_1765457768_1937948.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632796.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632797.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632798.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632799.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632800.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632801.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632802.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632803.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632804.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457769_IMG_2632805.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457788_IMG_2632806.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457788_IMG_2632807.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457788_IMG_2632808.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457788_IMG_2632809.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765457788_IMG_2632810.webp"
    ]
  },
  {
    "id": "icam-50814",
    "name": "Tilta Camera Cage for Canon C50 Power Kit Black TA-T93-C-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 346.53,
    "originalPrice": 396.04,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1765459543_1937951.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Full Camera Cage, Detachable Top Plate Arca-Type Receiver Plate Mini PD V-Mount Battery Plate HDMI and USB Cable Clamps NATO Rail, 1/4&#8243;-20 and 3/8&#8243;-16 Threads Three Cold Shoes Arca-Type Bottom Plate Durable Aluminum and Steel Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Support Type",
        "value": "Cage"
      },
      {
        "label": "Grip Type",
        "value": "No"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1765459543_1937951.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459538_IMG_2632828.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459538_IMG_2632829.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459538_IMG_2632830.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459538_IMG_2632831.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632832-1.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632832.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632833.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632834.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632835.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632836.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632837.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632838.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1765459563_IMG_2632839.jpg"
    ]
  },
  {
    "id": "icam-51189",
    "name": "Tilta Mini PD V-Mount Battery Plate with Adjustable Arca Receiver Kit TA-BTP4K-V-B",
    "brand": "Tilta",
    "category": "accessories",
    "price": 188.12,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1763655978_1932064.jpg",
    "badge": "SAVE 37%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Mini Universal V-Mount Battery Plate 1.5&#8243; Adjustable Arca Receiver 15mm LWS Rod Clamp Extended Quick Release Plate 14.8V D-Tap & 2-Pin LEMO-Type Outputs 60W USB-C PD Output Aluminum & Stainless Steel Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Plate Front / Battery Mount",
        "value": "V-Mount"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1763655978_1932064.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656522_IMG_2615552.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656522_IMG_2615553.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656522_IMG_2615554.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656522_IMG_2615555.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656522_IMG_2615556.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656533_IMG_2615565.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656533_IMG_2615566.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656533_IMG_2615567.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656533_IMG_2615568.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656533_IMG_2615569.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615570.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615571.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615572.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615573.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615574.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615575.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615576.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615577.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615578.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763656556_IMG_2615579.jpg"
    ]
  },
  {
    "id": "icam-51223",
    "name": "Tilta 10&#8243; Lightweight Standard Dovetail Plate (Black) TT-C16-BLK",
    "brand": "Tilta",
    "category": "accessories",
    "price": 79.21,
    "originalPrice": 99.01,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1529942474_IMG_1013941.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Compatible Tilta Baseplates Only 10&#8243; Length, Lightweight Design Not Compatible with ARRI Baseplates 1/4&#8243;-20 and 3/8&#8243;-16 Mounting Threads Aluminum and Stainless Steel",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1529942474_IMG_1013941.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1529942886_1414466.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1670424460_IMG_1891171.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1670424460_IMG_1891172.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1670424460_IMG_1891173.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1670424460_IMG_1891174.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1670424460_IMG_1891175.jpg"
    ]
  },
  {
    "id": "icam-51491",
    "name": "Tilta Armor Man 3.0 Gimbal Support System ARM-T03",
    "brand": "Tilta",
    "category": "accessories",
    "price": 3960.4,
    "originalPrice": 4554.46,
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1580744620_1539660.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Vest & Spring-Loaded Arms for Gimbals Supports Top-Bar and Ring-Based Gimbals Use Optional Cups for Handlebar Gimbals Tension Adjustment Weatherproof Rolling Hard Case Two Waist Supports Included, One a Spare",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Material of Construction",
        "value": "Aluminum, Stainless Steel, Cloth"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1580744620_1539660.jpg"
    ]
  },
  {
    "id": "icam-51495",
    "name": "Tilta NP-FZ100 Kit with 2 Batteries and 4-Bay USB Charger (Green) TBC-FZ100-A-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1772016693_1950903.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features For Sony a1, a1 II, a9, a9 II, a9 III, a7R V, a7R IV, a7R III, a7 II, a7 III, a7S III, a7 IV, a7C, a7C II, a7CR, ZV-E1, ZV-E10 II, a6600, and a6700 Cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1772016693_1950903.jpg"
    ]
  },
  {
    "id": "icam-51498",
    "name": "Tilta LP-E6P USB-C Battery (2400mAh, Green) TLP-E6P-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 44.55,
    "originalPrice": 49.5,
    "rating": 5,
    "reviewsCount": 6,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1746017456_1892577.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For Canon EOS R5 Mark II, R5, R6 Mark II, R6, R7, R, 5D Mark IV, 6D, 7D Mark II, 7D, 90D, 80D, 70D, 60D, 60Da cameras",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1746017456_1892577.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017486_IMG_2482071.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017486_IMG_2482070.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017486_IMG_2482069.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017486_IMG_2482068.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017486_IMG_2482067.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482066.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482065.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482064.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482063.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482062.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482061.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482060.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482059.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482058.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482057.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482056.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1746017471_IMG_2482055.jpg"
    ]
  },
  {
    "id": "icam-51556",
    "name": "Tilta 2-Bay NP-F/L-Series Battery Charger TBC-LS-GN",
    "brand": "Tilta",
    "category": "accessories",
    "price": 19.8,
    "originalPrice": 29.7,
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1763650890_1932068.jpg",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Simultaneously Charge 2 NP-F Batteries Micro-USB and USB-C Ports LCD Screen Smart Power Cutoff Technology",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Green"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_1932068.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615191.webp",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615190.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615189.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615188.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615187.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615186.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615185.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615184.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1763650890_IMG_2615183.jpg"
    ]
  },
  {
    "id": "icam-51697",
    "name": "Tilta 7-Pin to 7-Pin Connection Cable for Nucleus-M II (19.6&#8243;) WLC-T06-7P-50",
    "brand": "Tilta",
    "category": "accessories",
    "price": 50.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1761142708_1925174.jpg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Daisy-Chain Two Nucleus-M/Nucleus Motors 7-Pin Male Connectors Measures 19.6&#8243; In Length Can Work with Handgrips for Power",
    "specs": [
      {
        "label": "Brand",
        "value": "Tilta"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1761142708_1925174.jpg"
    ]
  },
  {
    "id": "icam-52157",
    "name": "DJI Osmo Mobile 8P Smartphone Gimbal",
    "brand": "DJI",
    "category": "gimbals",
    "price": 237.62,
    "originalPrice": 257.43,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/DJI-Osmo-Mobile-8P-iCam-Store.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Advanced Subject Tracking for accurate and smooth subject follow 3-Axis Mechanical Stabilization for steady and cinematic footage Remote Selfie Control with precise framing and easy operation Up to 10-Hour Battery Life with phone charging capability Built-in Extension Rod and Tripod for",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
      },
      {
        "label": "Category",
        "value": "gimbals"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/DJI-Osmo-Mobile-8P-iCam-Store.png"
    ]
  },
  {
    "id": "icam-51925",
    "name": "SmallRig Screw and Allen Wrench Storage Plate Kit MD3184",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 34.65,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 7,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1615288817_1626660.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Store Spare Screws and Wrenches Aluminum Cheese-Style Storage Plate 1/4&#8243;-20, 3/8&#8243;-16, M2.5/M3/M4/M5 Screws 4 x Allen Wrenches Included Screw Size Markings Storage Bag Included",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Material of Construction",
        "value": "Plate: Aluminum Screws/Wrenches: Stainless Steel"
      },
      {
        "label": "Mounting Threads",
        "value": "2 x 1/4\"-20 Flat Head 8 x 1/4\"-20 Allen 2 x 3/8\"-16 Flat Head 2 x M2.5 Allen 2 x M3 Trim Head 2 x M4 Allen 2 x M5 Allen"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1615288817_1626660.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1615288516_IMG_1499718.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1615288516_IMG_1499717.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1615288516_IMG_1499716.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1615288516_IMG_1499715.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1615288516_IMG_1499714.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1615288516_IMG_1499713.jpg"
    ]
  },
  {
    "id": "icam-51751",
    "name": "SmallRig Micro-HDMI to HDMI Cable (3.3&#8242;) 4795",
    "brand": "SmallRig",
    "category": "audio",
    "price": 15.84,
    "originalPrice": 19.8,
    "rating": 5,
    "reviewsCount": 5,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1724676032_1848076.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 0,
    "shortDescription": "Key Features Ideal for Camera-to-Monitor Connections Up to 4K Resolution at 60 Hz HDMI 2.0 Support Ultrathin 0.14&#8243; Diameter Design Low-Profile Connectors Cable Tie Included to Keep Things Neat",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "audio"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Interface",
        "value": "HDMI 2.0"
      },
      {
        "label": "Connector 1",
        "value": "1x HDMI Male"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1724676032_1848076.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1724676402_IMG_2321775.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1724676402_IMG_2321774.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1724676402_IMG_2321773.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1724676402_IMG_2321772.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1724676402_IMG_2321771.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1724676402_IMG_2321770.jpg"
    ]
  },
  {
    "id": "icam-51742",
    "name": "SmallRig Advanced Cage Kit for Sony a7 V/a7R V/a7 IV/a7S III 3669D",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 237.62,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 13,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1767089547_1940538.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Camera Cage for a7 IV, a7R V & a7S III Top Handle, Side Handle HDMI Cable Clamp 1/4&#8243;-20 & 3/8&#8243;-16 Threads, QD Socket NATO Rail, Shoe Mount Durable Aluminum Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Support Type",
        "value": "Cage"
      },
      {
        "label": "Grip Type",
        "value": "No"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1767089547_1940538.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1767089552_IMG_2644817.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1767089543_IMG_2644816.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1768557654_IMG_2657385.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1767089543_IMG_2644814.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1768557654_IMG_2657384.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1767089543_IMG_2644812.jpg"
    ]
  },
  {
    "id": "icam-51897",
    "name": "SmallRig Cage Kit for Canon EOS R6 Mark II 5197",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 178.22,
    "rating": 5,
    "reviewsCount": 17,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1739199327_1875860.jpg",
    "badge": "SAVE 28%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Comprehensive Handheld Cage Kit Top Handle for Convenient Carrying Secure HDMI and USB-C Cable Clamp Integrated Arca-Type Base, NATO Rail Shoe Mount, Strap Slots, QD Socket 1/4&#8243;-20 and 3/8&#8243;-16 Accessory Threads Maintains Access to Camera Controls Durable Aluminum Constructio",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1739199327_1875860.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739199327_IMG_2428589.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739199327_IMG_2428588.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739199317_IMG_2428587.jpg"
    ]
  },
  {
    "id": "icam-51912",
    "name": "SmallRig Screw Set for Camera Accessories AAK2326",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 17.82,
    "originalPrice": 25.74,
    "rating": 5,
    "reviewsCount": 8,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1669212319_1737058.jpg",
    "badge": "SAVE 31%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Set of 26 Screws Attach Accessories to Your Camera Rig 1/4&#8243;-20 and 3/8&#8243;-16 Screws M2, M2.5, M3, M4 Screws Socket Cap, Slotted, and Phillips Plastic Storage Box",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Mounting",
        "value": "10x 1/4\"-20 Screws 2x 3/8\"-16 Screws 4x M2 Screws 2x M2.5 Screws 4x M3 Screws 4x M4 Screws"
      },
      {
        "label": "Material of Construction",
        "value": "Stainless Steel, Plastic"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1669212319_1737058.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880269.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880268.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880267.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880266.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880265.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880264.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880263.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880262.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880261.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1669212932_IMG_1880260.jpg"
    ]
  },
  {
    "id": "icam-51937",
    "name": "Hollyland Monitor Hood for Pyro 5",
    "brand": "Hollyland",
    "category": "accessories",
    "price": 29.7,
    "originalPrice": 39.6,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/Screenshot-2026-04-18-230952.png",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Designed for Pyro 5 Transceiver/Monitor Unit Reduces Glare and Reflections Outdoors Easy Front-Mount Installation Foldable for Convenient Storage Full Access to Controls and Antennas",
    "specs": [
      {
        "label": "Brand",
        "value": "Hollyland"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/Screenshot-2026-04-18-230952.png"
    ]
  },
  {
    "id": "icam-51883",
    "name": "SmallRig CFexpress Type A 9-in-1 Docking Station 4663",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 99.01,
    "originalPrice": 108.91,
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1739447577_1879883.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features For CFexpress Type A Cards SD and microSD Card Slots USB-C, USB-A, and HDMI Ports RJ45 Ethernet Port 20GB USB-C Cable (19.7&#8243;) LED Status Indicator",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Silver"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1739447577_1879883.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447661_IMG_2431492.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447661_IMG_2431491.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447661_IMG_2431490.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447661_IMG_2431489.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447573_IMG_2431488.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447573_IMG_2431487.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447573_IMG_2431486.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447573_IMG_2431485.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447573_IMG_2431484.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447573_IMG_2431483.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1739447573_IMG_2431482.jpg"
    ]
  },
  {
    "id": "icam-51844",
    "name": "SmallRig Mini-HDMI to HDMI Cable (13.8&#8243;) 3040",
    "brand": "SmallRig",
    "category": "accessories",
    "price": 13.86,
    "originalPrice": 17.82,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://icamstore.net/wp-content/uploads/2026/04/1606141238_1606763.jpg",
    "badge": "SAVE 22%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features Supports 4K UHD @ 60 Hz PVC Jacket Suitable for Use in Camera Rigs Ultra-Slim 0.14&#8243; Diameter Includes Cable Tie for Neat Installation",
    "specs": [
      {
        "label": "Brand",
        "value": "SmallRig"
      },
      {
        "label": "Category",
        "value": "accessories"
      },
      {
        "label": "Color",
        "value": "Black"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ],
    "images": [
      "https://icamstore.net/wp-content/uploads/2026/04/1606141238_1606763.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1606141997_IMG_1450059.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1606141997_IMG_1450058.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1606141997_IMG_1450057.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1606141997_IMG_1450056.jpg",
      "https://icamstore.net/wp-content/uploads/2026/04/1606141997_IMG_1450055.jpg"
    ]
  }
];
