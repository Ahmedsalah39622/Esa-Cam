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
      { label: "Sensor", value: "12.1MP Full-Frame BSI" },
      { label: "Dynamic Range", value: "15+ Stops S-Log3" },
      { label: "Frame Rate", value: "4K 120p / FHD 240p" },
      { label: "Cooling", value: "Active Fan System" },
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
      { label: "Sensor", value: "45MP Full-Frame Dual Pixel" },
      { label: "Recording", value: "8K 60p RAW Light" },
      { label: "Mount", value: "Canon RF Cinema" },
      { label: "Interface", value: "Timecode & Waveform" },
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
      { label: "Sensor", value: "35.4MP VistaVision" },
      { label: "Dynamic Range", value: "17+ Stops RAW" },
      { label: "High-Speed", value: "8K 120fps / 4K 240fps" },
      { label: "Media", value: "CFexpress Type B" },
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
    "id": "esa-5745",
    "name": "Viltrox AF 16mm f/1.8 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 544.55,
    "originalPrice": 574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4716.png",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.8 to f/22 Ultrawide Angle of View Fast STM Autofocus Motor Silent Stepless Aperture Ring HD Nano Multilayer Coating Easy-to-Read LCD Screen USB-C Interface for Firmware Upgrades All-Metal Body, Weather-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-5740",
    "name": "Kodak PIXPRO FZ55 Digital Camera",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 168.32,
    "originalPrice": 237.62,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4712.jpeg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "28mm Wide-Angle Lens 16MP 1/2.3″ CMOS Sensor 5x Optical Zoom Lens 2.7″ LCD Screen Full HD 1080p Video Recording at 30 fps Digital Image Stabilization Built-In Flash Rechargeable Lithium-Ion Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-5735",
    "name": "Canon PowerShot G7 X Mark III Digital Camera (Black) – Professional Vlogging Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 1326.73,
    "originalPrice": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4697.png",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "20.2MP 1″ Stacked CMOS Sensor DIGIC 8 Image Processor 4.2x Optical Zoom f/1.8-2.8 Lens 24-100mm (35mm Equivalent) 3.0″ 1.04m-Dot Tilting Touchscreen LCD UHD 4K30p and Full HD 120p Video 20-fps Shooting, 30-fps Raw Burst Mode Built-In Bluetooth and Wi-Fi Live Streaming & Vertical Video Support &nbsp;",
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
    ]
  },
  {
    "id": "esa-5729",
    "name": "Sony a7 V Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 2633.66,
    "originalPrice": 2732.67,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4708.jpeg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "33MP Partially-Stacked Exmor RS Sensor BIONZ XR2 Processor, Built-In AI Unit 759-Point PDAF with Real-time Tracking AI Subject Recognition & Auto Framing 4K 60p 10-Bit Video, S-Log3 & S-Cinetone 7.5-Stop, 5-Axis Image Stabilization 3.68m-Dot EVF with 120 fps Refresh Rate 3.2″ 4-Axis Multi-Angle Touchscreen LCD Pre-Capture, Speed Boost, 30fps Shooting CFexpress A & SD Slots, Dual USB-C Ports",
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
    ]
  },
  {
    "id": "esa-5724",
    "name": "PowerShot SX740 HS Point And Shoot Camera 20.3MP 40x Zoom With Tilt LCD Screen, Built-In Wi-Fi And Bluetooth",
    "brand": "Zoom",
    "category": "cameras",
    "price": 891.09,
    "originalPrice": 1168.32,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4701.jpeg",
    "badge": "SAVE 24%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "PowerShot is great for capturing stunning detail in distant subjects with its 40x optical zoom Story Highlight allows users to seamlessly create a movie from still images Ensures quality captures with reduced noise even when shooting in low light conditions The advanced zoom framing assist auto zoom feature for a perfect frame Image Processor &#8211; DIGIC 8, ISO Sensitivity &#8211; ISO 100-3200, Connectivity &#8211; Bluetooth, Wi-Fi",
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
    ]
  },
  {
    "id": "esa-5711",
    "name": "Insta360 Luna Ultra Standard Combo (Cosmic Black)",
    "brand": "ESA CAM",
    "category": "audio",
    "price": 821.78,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4684.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Capture up to 8K30 Action Footage Dual Lenses, 1″ & 1/1.3″ CMOS Sensors Detachable 2″ OLED Screen Triple AI Chip, 47GB Internal Storage 3-Axis Stabilization, AI Tracking Battery Handle, Wide-Angle Lens Mic Pro Wireless Transmitter Built-In Leica Color Profiles",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-5705",
    "name": "Sony 240GB CFexpress 4.0 Type A TOUGH Memory Card",
    "brand": "Sony",
    "category": "accessories",
    "price": 306.93,
    "originalPrice": 336.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4681.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "240GB Storage Capacity PCIe Gen 4.0 Bus Max Read Speed: 1800 MB/s Max Write Speed: 1700 MB/s Sustained Write Speed: 400 MB/s VPG400 Certification Shock / UV Light / X-Ray Proof Rigidity Tested to 150 N IP57 Rating File Rescue Recover & Media Scan Utility",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-5496",
    "name": "Canon EOS R6 Mark III Mirrorless Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 2554.46,
    "originalPrice": 2970.3,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4041.png",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "32.5MP Full-Frame CMOS Sensor 7K 60p 12-Bit Internal RAW Light Video Open Gate 7K 30p, High-Speed 4K 120p Dual Pixel CMOS AF II & Movie Servo AF Up to 40 fps & Pre-Continuous Shoot Mode 8.5-Stop 5-Axis Image Stabilization 3.69m-Dot OLED EVF with OVF View Assist 3&#8243; 1.62m-Dot Vari-Angle Touchscreen LCD CFexpress & SD UHS-II Memory Card Slots Multi-Function Shoe, Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-5489",
    "name": "DJI Osmo Pocket 4P Standard Combo &#8211; Black",
    "brand": "DJI",
    "category": "accessories",
    "price": 1089.11,
    "originalPrice": 1168.32,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_4035.jpeg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-5485",
    "name": "Canon R50V",
    "brand": "Canon",
    "category": "cameras",
    "price": 871.29,
    "originalPrice": 910.89,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2026/07/img_3955-1.png",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For Content Creators and Vloggers 24.2MP APS-C CMOS Sensor DIGIC X Image Processor UHD 4K60p Cropped, 4K30 6K Oversampled Dual Pixel CMOS AF II 3.0&#8243; 1.04m-Dot Vari-Angle Touchscreen Close-Up Demo, Smooth Skin Modes Vertical Mount, Front Record Button Multi-Function Shoe, Wi-Fi & Bluetooth RF-S 14-30mm f/4.5-6.3 IS STM PZ Lens",
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
    ]
  },
  {
    "id": "esa-4485",
    "name": "BLAZAR LENS 50mm T1.8 APEX 1.33x Anamorphic AF Lens (E-Mount)",
    "brand": "ESA CAM",
    "category": "lenses",
    "price": 1029.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4100.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Covers S35 Sensors 1.33x Anamorphic Squeeze with Autofocus Works with 16:9 Sensors & No Open Gate Neutral Silver Lens Flare Integrated USB-C Port for Firmware",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4478",
    "name": "BLAZAR LENS 35mm T1.8 APEX 1.33x Anamorphic AF Lens (E-Mount)",
    "brand": "ESA CAM",
    "category": "lenses",
    "price": 1029.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4094.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Covers S35 Sensors 1.33x Anamorphic Squeeze with Autofocus Works with 16:9 Sensors & No Open Gate Neutral Silver Lens Flare Integrated USB-C Port for Firmware",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4473",
    "name": "Samyang Cine V-AF 75mm T1.9 FE Lens (Sony E-Mount)",
    "brand": "Sony",
    "category": "lenses",
    "price": 643.56,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4089.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "75mm T1.9 Cinema Lens with Autofocus Supports Sensors up to 8K Compact & Lightweight for Gimbals/Drones LED Tally lamp on Front Custom Function Switch for Focus Save 32.9° AOV, Full-Frame Coverage Multilayer Coating to Reduce Flare 58mm Filter Thread Accessory Options for Front of Lens 2.3′ Minimum Focus Distance",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4468",
    "name": "Samyang Cine V-AF 35mm T1.9 FE Lens (Sony E-Mount)",
    "brand": "Sony",
    "category": "lenses",
    "price": 643.56,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4083.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "35mm T1.9 Cinema Lens with Autofocus Supports Sensors up to 8K Compact & Lightweight for Gimbals/Drones LED Tally lamp on Front Custom Function Switch for Focus Save 63.6° AOV, Full-Frame Coverage Multilayer Coating to Reduce Flare 58mm Filter Thread Accessory Options for Front of Lens 7.48″ Minimum Focus Distance",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4462",
    "name": "Samyang Cine V-AF 20mm T1.9 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4078.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20mm T1.9 Cinema Lens with Autofocus Supports Sensors up to 8K Compact & Lightweight for Gimbals/Drones LED Tally Lamp on Front Custom Function Switch for Focus Save 94.5° AOV, Full-Frame Coverage Multilayer Coating to Reduce Flare Accessory Options for Front of Lens 7.5″ Minimum Focus Distance",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4457",
    "name": "Samyang AF 85mm f/1.4 FE II Lens for Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4073.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Autofocus With Manual Override 2nd Generation Linear STM Motor 9-Blade Diaphragm 4 HR and 1 ED Element Internal Focus Design Customizable Focus Hold Button Weather Sealed",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4450",
    "name": "Samyang AF 35mm f/1.8 FE Lens for Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 371.29,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4069.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 Two Extra-Low Dispersion Elements Two Aspherical Elements Ultra Multi-Coating Linear STM AF Motor, MF Override Customizable Control Switch Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4441",
    "name": "Samyang 35mm f/1.4 P FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 613.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4056.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full Frame | f/1.4 to f/16 Fast Normal-Length Prime Linear Stepping Motor Autofocus System 1 HR, 1 ED & 3 ASPH. Elements 12 Elements in 10 Groups 9-Bladed Diaphragm UMC Lens Coating Weather-Sealed Construction USB-C Port for Firmware Updates",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4436",
    "name": "Samyang AF 75mm f/1.8 FE Lens for Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 381.19,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4041.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 Three Extra-Low Dispersion Elements Two High Refractive Index Elements Ultra Multi-Coating Linear STM AF Motor, MF Override Custom Switch Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4426",
    "name": "Samyang AF 135mm f/1.8 FE Lens for Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 836.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4028.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to 22 Three Extra-Low Dispersion Elements Ultra-Precision Aspherical Element Linear STM AF Motor Customizable Control Switch Minimum Focus Distance: 2.3′ Filter Thread Diameter: 82mm 11-Blade Diaphragm Removable Lens Hood",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4416",
    "name": "Samyang 35-150mm f/2-2.8 AF Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4024.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2-2.8 to f/16-22 Versatile All-in-One Zoom Three Custom Mode Switches Minimum Focusing Distance: 12.1″ 9-Blade Diaphragm 2 ASP, 1 HB, 3 HR, 6 ED Elements Weather-Sealed Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4410",
    "name": "Samyang 24-70mm f/2.8 AF Zoom Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 660.06,
    "originalPrice": 792.08,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4017.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "13.8″ Minimum Focusing Distance 17 Elements in 14 Groups Quiet, Smooth Linear Stepless Motor",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4403",
    "name": "Samyang 12mm F/2 AF Ultra Wide Angle Lens (Canon RF)",
    "brand": "Canon",
    "category": "lenses",
    "price": 455.45,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/4009.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "APS-C | f/2 to f/22 Linear STM Autofocus Motor 2 ASPH and 3 ED Elements UMC Ultra Multicoating Minimum Focus Distance: 7.9″ 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4395",
    "name": "Samyang 35mm f/1.4 AF II Lens for Sony E-Mount Cameras",
    "brand": "Sony",
    "category": "lenses",
    "price": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3972.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full Frame Format Autofocus with Full-Time Manual Override Built-In Customizable Function Switch Aperture Range: f/1.4 to f/16 Linear Stepping Motor Autofocus System Weather-Sealed Construction 2 Aspherical Elements 9-Bladed Diaphragm 11 Elements in 9 Groups UMC and High-Refractive Coatings",
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
    ]
  },
  {
    "id": "esa-4387",
    "name": "Viltrox AF 20mm F/2.8 Z Lens For Nikon Z",
    "brand": "Nikon",
    "category": "lenses",
    "price": 237.62,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3960.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Ultra-Wide-Angle Prime Quiet STM Autofocus Motor USB-C Port for Firmware Upgrades",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4381",
    "name": "Viltrox AF 16mm F/1.8 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 534.65,
    "originalPrice": 574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3959.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.8 to f/22 Ultrawide Angle of View Fast STM Autofocus Motor Silent Stepless Aperture Ring HD Nano Multilayer Coating Easy-to-Read LCD Screen USB-C Interface for Firmware Upgrades All-Metal Body, Weather-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4376",
    "name": "Viltrox AF 13mm F/1.4 XF Lens for Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 475.25,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3949.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/APS-C Format 20mm (35mm Equivalent) Aperture Range: f/1.4 to f/16 Two Aspherical Elements Two High Refractive Elements Four Extra-Low Dispersion Elements STM Stepping AF Motor 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4369",
    "name": "Viltrox AF 75mm F/1.2 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 495.05,
    "originalPrice": 554.46,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3946.jpg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "APS-C Format | f/1.2 to f/16 112.5mm (Full-Frame Equivalent) Excellent Low-Light Performance STM Stepping Motor All-Metal Lens Body Weather-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4363",
    "name": "Viltrox AF 56mm F/1.4 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 306.93,
    "originalPrice": 356.44,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3942.jpg",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/APS-C Format 85mm (35mm Equivalent) Aperture Range: f/1.4 to f/16 One ED Element, One HR Element STM Stepping AF Motor Integrated USB Port for Firmware Updates 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4359",
    "name": "Viltrox AF 33mm F/1.4 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 277.23,
    "originalPrice": 336.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3938.jpg",
    "badge": "SAVE 18%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "APS-C Format | f/1.4 to f/16 50mm (Full-Frame Equivalent) One ED Element, One HR Element HD Nano Multi-Layer Coating STM Stepping AF Motor Integrated USB Port for Firmware Updates 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4349",
    "name": "Viltrox AF 28mm F/1.8 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 376.24,
    "originalPrice": 415.84,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3925.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.8 to f/16 Fast Wide-Angle Prime STM Stepper Motor, Supports Eye AF Lightweight Internal Focus System HD Nano Multi-Layer Coating Minimum Focusing Distance: 14.6″ 9-Blade Diaphragm Firmware Updatable via USB-C Port",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4339",
    "name": "Viltrox AF 24mm F/1.8 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3923.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens / Full-Frame Format Aperture Range: f/1.8 to f/16 2 Aspherical Elements, 3 ED Elements 3 High Refractive Index Elements HD Nano Multicoated Optics Quiet STM+Lead Screw Stepper Motor Minimum Focus Distance: 11.8″ 55mm Front Filter Size 9-Blade Diaphragm USB Type-C Upgrade Port",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4334",
    "name": "Viltrox AF 23mm F/1.4 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 306.93,
    "originalPrice": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3914.jpg",
    "badge": "SAVE 23%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "APS-C | f/1.4 to f/16 35mm (Full-Frame Equivalent) Two ED Elements, Two HR Elements HD Nano Multi-Layer Coating STM Stepping AF Motor Integrated USB Port for Firmware Updates 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4327",
    "name": "Viltrox AF 20mm F/2.8 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 237.62,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3910.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Ultra-Wide-Angle Prime Quiet STM Autofocus Motor USB-C Port for Firmware Upgrades",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4319",
    "name": "Viltrox AF 16mm F/1.8 Z Lens For Nikon Z",
    "brand": "Nikon",
    "category": "lenses",
    "price": 534.65,
    "originalPrice": 574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3903.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.8 to f/22 Ultra-Wide Angle of View Fast STM Autofocus Motor Silent Stepless Aperture Ring HD Nano Multi-Layer Coating Easy-to-Read LCD Screen USB-C Interface for Firmware Upgrades All-Metal Body, Weather-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4317",
    "name": "Viltrox AF 85mm F/1.8 Z Lens for Nikon Z",
    "brand": "Nikon",
    "category": "lenses",
    "price": 386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3899.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 One Extra-Low Dispersion Element Four High-Transparency Elements HD Nano Multi-Layer Coating STM Stepping AF Motor 9-Blade Diaphragm Electronic Contacts & Aperture Selection USB Port for Firmware Updates",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4310",
    "name": "Viltrox AF 85mm F/1.8 FE II Lens for Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3892.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/16 One Extra-Low Dispersion Element One Aspherical Element HD Nano Multi-Layer Coating STM Stepping AF Motor Rounded 9-Blade Diaphragm Electronic Contacts & Aperture Selection USB Port for Firmware Updates",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4306",
    "name": "Viltrox AF 40mm F/2.5 Z Lens (Nikon Z)",
    "brand": "Nikon",
    "category": "lenses",
    "price": 158.42,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3885-1.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.5 to f/16 STM Stepping AF Motor One ED Element, Three HR Elements Ten Lens Elements in Six Groups Supports Exif Data Transmission Minimum Focusing Distance: 1.1′",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4300",
    "name": "Viltrox AF 40mm F/2.5 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 158.42,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3884.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.5 to f/16 STM Stepping AF Motor One ED Element, Three HR Elements Ten Lens Elements in Six Groups Supports Exif Data Transmission Minimum Focusing Distance: 1.1′",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4293",
    "name": "Viltrox AF 28mm F/4.5 FE Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 118.81,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3876.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/4.5 Starburst Effect Ultrathin and Lightweight Autofocus Design Cap Forms Part of the Lens Multilayer Nano Coating",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4278",
    "name": "Viltrox AF 24mm F/1.8 Lens for Nikon Z",
    "brand": "Nikon",
    "category": "lenses",
    "price": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3864.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens / Full-Frame Format Aperture Range: f/1.8 to f/16 2 Aspherical Elements, 3 ED Elements 3 High Refractive Index Elements HD Nano Multicoated Optics Quiet STM+Lead Screw Stepper Motor Minimum Focus Distance: 11.8″ 55mm Front Filter Size 9-Blade Diaphragm USB Type-C Upgrade Port",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4275",
    "name": "Viltrox 27mm F/1.2 Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3852.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "APS-C Format | f/1.2 to f/16 40.5mm (Full-Frame Equivalent) Excellent Low-Light Performance STM Stepping Motor All-Metal Lens Housing 15 Elements in 11 Groups Minimum Focusing Distance: 11″ Weather Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4263",
    "name": "Tamron 70-180mm F/2.8 Di III VXD Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 950.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3817.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Six Low Dispersion Elements Three Aspherical Elements BBAR-G2 and Fluorine Coatings Dual VXD Linear AF Motors Floating Elements System Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4258",
    "name": "Tamron 17-70mm F/2.8 Di III-A VC RXD Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 643.56,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3811.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/APS-C Format 25.5-105mm (35mm Equivalent) Aperture Range: f/2.8 to f/16 Three Aspherical Elements Two Low Dispersion Elements BBAR and Fluorine Coatings RXD Stepping AF Motor VC Image Stabilization Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4249",
    "name": "Tamron 35mm F/2.8 Di III OSD M 1:2 Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 277.23,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3801.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 One Low Dispersion Element One Aspherical Element BBAR Coating OSD Stepping Motor 1:2 Magnification, 5.9″ Min. Focus Water-Resistant Design, Fluorine Coating Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4243",
    "name": "Tamron 28-75mm F/2.8 Di III VXD G2 Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 742.57,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3794.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Maximum Aperture: f/2.8 Updated Optical Design VXD Linear Motor Focus Mechanism Minimum Focusing Distance: 7.1″ Tamron Lens Utility Connector Port",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4236",
    "name": "Tamron 28-75mm F/2.8 Di III VXD G2 Lens For Nikon Z",
    "brand": "Nikon",
    "category": "lenses",
    "price": 792.08,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3790.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Updated Optical Design VXD Linear Motor Focus Mechanism Minimum Focusing Distance: 7.1″ Tamron Lens Utility Connector Port",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4232",
    "name": "Tamron 24mm F/2.8 Di III OSD M 1:2 Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 227.72,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3784.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Three Low Dispersion Elements One Aspherical Element BBAR Coating OSD Stepping Motor 1:2 Magnification, 4.7″ Min. Focus Water-Resistant Design, Fluorine Coating Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4225",
    "name": "Tamron 20mm F/2.8 Di III OSD M 1:2 Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 247.52,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3781.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Three Low Dispersion Elements One Aspherical Element BBAR Coating OSD Stepping Motor 1:2 Magnification, 4.3″ Min. Focus Water-Resistant Design, Fluorine Coating Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4215",
    "name": "Tamron 17-28mm F/2.8 Di III RXD Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 732.67,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3770.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 XLD and LD Elements BBAR and Fluorine Coatings RXD Stepping AF Motor Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4209",
    "name": "Sigma 85mm F/1.4 DG HSM Art Lens For Nikon F",
    "brand": "Nikon",
    "category": "lenses",
    "price": 742.57,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3764.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.4 to 16 Two Low Dispersion Elements One Aspherical Element Super Multi-Layer Coating Hyper Sonic AF Motor, Manual Override Rounded 9-Blade Diaphragm TSC Material, Brass Bayonet Mount Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4208",
    "name": "Sigma 85mm F/1.4 DG HSM Art Lens For Nikon F",
    "brand": "Nikon",
    "category": "lenses",
    "price": 742.57,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3764.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.4 to 16 Two Low Dispersion Elements One Aspherical Element Super Multi-Layer Coating Hyper Sonic AF Motor, Manual Override Rounded 9-Blade Diaphragm TSC Material, Brass Bayonet Mount Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4202",
    "name": "Sigma 85mm F/1.4 DG HSM Art Lens For Canon EF",
    "brand": "Canon",
    "category": "lenses",
    "price": 1029.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3760.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to 16 Two Low Dispersion Elements One Aspherical Element Super Multi-Layer Coating Hyper Sonic AF Motor, Manual Override Rounded 9-Blade Diaphragm TSC Material, Brass Bayonet Mount Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4197",
    "name": "Sigma 85mm F/1.4 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 950.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3755.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 Five SLD Elements One Aspherical Element, Four HR Elements Super Multi-Layer Coating Stepping Motor AF System Customizable AFL Button Physical Aperture Ring; De-Click Switch Rounded 11-Blade Diaphragm Weather-Sealed Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4190",
    "name": "Sigma 56mm F/1.4 DC DN Contemporary Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 277.23,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3747.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "APS-C | f/1.4 to f/16 84mm (Full-Frame Equivalent) Rounded 9-Blade Diaphragm Stepping Motor AF System Super Multilayer Coating One SLD Element, Two Aspherical Elements Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4186",
    "name": "Sigma 56mm F/1.4 DC DN Contemporary Lens For Canon M",
    "brand": "Canon",
    "category": "lenses",
    "price": 237.62,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3745.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "APS-C | f/1.4 to f/16 89.6mm (Full-Frame Equivalent) Rounded 9-Blade Diaphragm Stepping Motor AF System Super Multilayer Coating One SLD Element, Two Aspherical Elements Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4181",
    "name": "Sigma 35mm F/1.4 DG HSM Art Lens For Nikon F",
    "brand": "Nikon",
    "category": "lenses",
    "price": 495.05,
    "originalPrice": 594.06,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3738.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.4 to f/16 One FLD Element, Four SLD Elements Two Aspherical Elements Floating Elements System Super Multi-Layer Coating Hyper Sonic AF Motor, Manual Override Rounded 9-Blade Diaphragm Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4174",
    "name": "Sigma 35mm F/1.4 DG HSM Art Lens For Canon EF",
    "brand": "Canon",
    "category": "lenses",
    "price": 574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3733.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 One FLD Element, Four SLD Elements Two Aspherical Elements Floating Elements System Super Multi-Layer Coating Hyper Sonic AF Motor, Manual Override Rounded 9-Blade Diaphragm Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4169",
    "name": "Sigma 30mm F/1.4 DC DN Contemporary Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3729.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "APS-C | f/1.4 to f/16 45mm (Full-Frame Equivalent) Rounded 9-Blade Diaphragm Stepping Motor AF System Super Multi-Layer Coating Two Aspherical Elements One High-Refractive Index Element Rubber Sealing Protects Against Dust",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4163",
    "name": "Sigma 30mm F/1.4 DC DN Contemporary Lens For Canon M",
    "brand": "Canon",
    "category": "lenses",
    "price": 267.33,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3726.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "APS-C | f/1.4 to f/16 48mm (Full-Frame Equivalent) Rounded 9-Blade Diaphragm Stepping Motor AF System Super Multi-Layer Coating Two Aspherical Elements One High-Refractive Index Element Rubber Sealing Protects Against Dust",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4158",
    "name": "Sigma 28-70mm F/2.8 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 514.85,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3720.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Two FLD Elements, Two SLD Elements Three Aspherical Elements Super Multi-Layer & Nano Porous Coatings Water- and Oil-Repellent Front Coating Stepping Motor AF System Rounded 9-Blade Diaphragm Dust- and Splash-Proof Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4151",
    "name": "Sigma 28-105mm F/2.8 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3717.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full Frame | f/2.8 to f/22 Fast Wide-to-Telephoto Zoom HLA Autofocus 15.8″ Minimum Focus Distance Aperture Ring with Click & Lock Switches FLD, SLD & Aspherical Elements Water- and Oil-Repellant Coating Dust- and Splash-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4148",
    "name": "Sigma 24mm F/2 DG DN Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 475.25,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3715.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2 to f/22 Two SLD Elements Two Aspherical Elements FLD Element Minimum Focus Distance: 9.65″ All-Metal Body Durable, Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4142",
    "name": "Sigma 24mm F/1.4 DG HSM Art Lens For Nikon F",
    "brand": "Nikon",
    "category": "lenses",
    "price": 673.27,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3708.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F Mount Lens/FX Format Aperture Range: f/1.4 to f/16 FLD and Special Low Dispersion Elements Two Aspherical Glass Elements Super Multi-Layer Coating Hyper Sonic AF Motor Full-Time Manual Focus Override Rounded 9-Blade Diaphragm Thermally Stable Composite Material Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4136",
    "name": "Sigma 24mm F/1.4 DG HSM Art Lens For Canon EF",
    "brand": "Canon",
    "category": "lenses",
    "price": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3703.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 FLD and Special Low Dispersion Elements Two Aspherical Glass Elements Super Multi-Layer Coating Hyper Sonic AF Motor Full-Time Manual Focus Override Rounded 9-Blade Diaphragm Thermally Stable Composite Material Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4132",
    "name": "Sigma 24-70mm F/2.8 DG DN II Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 1108.91,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3700.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Fast & Lightweight Wide-to-Tele Zoom HLA Autofocus 6.7″ Minimum Focusing Distance Aperture Ring with Click & Lock Switches FLD, SLD & Aspherical Elements Nano Porous & Super Multilayer Coatings Dust & Splash Resistant",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4129",
    "name": "Sigma 24-70mm F/2.8 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 920.79,
    "originalPrice": 930.69,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3698.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Six FLD Elements, Two SLD Elements Three Aspherical Elements Super Multi-Layer & Nano Porous Coatings Stepping Motor AF System Dust and Splash Resistant Construction Rounded 11-Blade Diaphragm Includes LH878-03 Lens Hood With Padded Lens Case",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4124",
    "name": "Sigma 20mm F/1.4 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3692.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full Frame Format Aperture Range: f/1.4 to f/16 Two SLD Elements Three Aspherical Elements Super Multilayer Coating Stepping AF Motor, MFL Switch Rounded 11-Blade Diaphragm 82mm Front Filter Thread Rear Filter Holder Durable Brass Bayonet Mount",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4118",
    "name": "Sigma 18-50mm F/2.8 DC DN Contemporary Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 594.06,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3689.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/APS-C Format 27-75mm (35mm Equivalent) Aperture Range: f/2.8 to f/22 Minimum Focusing Distance: 4.8″ Three Aspherical Elements Special Low Dispersion Element Rounded 7-Blade Diaphragm Dust- and Splash-Proof Design Includes LH582-02 Lens Hood",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4116",
    "name": "Sigma 18-35mm F/1.8 DC HSM Art Lens For Nikon F",
    "brand": "Nikon",
    "category": "lenses",
    "price": 693.07,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3687.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/DX Format 27-52.5mm (35mm Equivalent) Aperture Range: f/1.8 to f/16 Five SLD Elements Four Aspherical Elements Super Multi-Layer Coating Hyper Sonic Motor AF System Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4109",
    "name": "Sigma 18-35mm F/1.8 DC HSM Art Lens For Canon EF",
    "brand": "Canon",
    "category": "lenses",
    "price": 693.07,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3681.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/APS-C Format 28.8-56mm (35mm Equivalent) Aperture Range: f/1.8 to f/16 Five SLD Elements Four Aspherical Elements Super Multi-Layer Coating Hyper Sonic Motor AF System Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4104",
    "name": "Sigma 16mm F/1.4 DC DN Contemporary Lens For Canon M",
    "brand": "Canon",
    "category": "lenses",
    "price": 316.83,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3679.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "APS-C | f/1.4 to f/16 25.6mm (Full-Frame Equivalent) Rounded 9-Blade Diaphragm Stepping Motor AF System Super Multi-Layer Coating Two Aspherical Elements Two SLD Elements, Three FLD Elements Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4099",
    "name": "Sigma 16-28mm F/2.8 DG DN Contemporary Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3673.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame Format | f/2.8 to f/22 Stepping AF Motor Internal Focus and Zoom Design Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4096",
    "name": "Sigma 14-24mm F/2.8 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 1188.12,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3658.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 One FLD Element, Five SLD Elements Three Aspherical Elements Super Multi-Layer & Nano Porous Coating High-Speed AF with Stepping Motor Customizable AFL Button Rounded 11-Blade Diaphragm Weather-Sealed, Protective Front Coating Built-In Lens Hood",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4089",
    "name": "Sigma 105mm F/2.8 EX DG OS HSM Macro Lens For Nikon F",
    "brand": "Nikon",
    "category": "lenses",
    "price": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3652.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/2.8 to f/22 Two SLD Elements Super Multi-Layer Coating 1:1 Magnification, 1′ Minimum Focus Hyper Sonic Motor AF System Floating Internal Focus Design OS Image Stabilization Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4084",
    "name": "Sigma 105mm F/2.8 EX DG OS HSM Macro Lens For Canon EF",
    "brand": "Canon",
    "category": "lenses",
    "price": 693.07,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3650.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Two SLD Elements Super Multi-Layer Coating 1:1 Magnification, 1′ Minimum Focus Hyper Sonic Motor AF System Floating Internal Focus Design OS Image Stabilization Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4080",
    "name": "Sigma 105mm F/1.4 DG HSM Art Lens For Nikon F",
    "brand": "Nikon",
    "category": "lenses",
    "price": 475.25,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3648.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.4 to f/16 Three FLD Elements, Two SLD Elements One Aspherical Element Super Multi-Layer Coating Hyper Sonic AF Motor, Manual Override Weather-Sealed, Protective Front Coating Rounded 9-Blade Diaphragm Removable Rotating Arca-Type Tripod Foot Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4070",
    "name": "Sigma 105mm F/1.4 DG HSM Art Lens For Canon EF",
    "brand": "Canon",
    "category": "lenses",
    "price": 1108.91,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3635.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 Three FLD Elements, Two SLD Elements One Aspherical Element Super Multi-Layer Coating Hyper Sonic AF Motor, Manual Override Weather-Sealed, Protective Front Coating Rounded 9-Blade Diaphragm Removable Rotating Arca-Type Tripod Foot Compatible with Sigma USB Dock",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4063",
    "name": "Sigma 10-18mm F/2.8 DC DN Contemporary Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 693.07,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3628.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "APS-C Format | f/2.8 to f/22 15-27mm (Full-Frame Equivalent) Ultra Wide-Angle Zoom Fast Internal Focus System Rounded 7-Blade Diaphragm Dust & Splash-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4061",
    "name": "Sigma 50mm F/1.4 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 841.58,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3625.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.4 to f/16 Fast Compact Prime HLA Linear Focusing Motor Aspherical & SLD Glass Elements Rounded 11-Blade Diaphragm Dust & Splash-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4058",
    "name": "Sigma 35mm F/1.4 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 821.78,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3621.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Sony E Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 Super Multi-Layer and Resistance Coating SLD, ELD, FLD , and Aspherical Elements Minimum Focus Distance: 11.8″ Stepping Motor AF System Customizable AFL Button Physical Aperture Ring; De-Click Switch Rounded 11-Blade Diaphragm Weather-Sealed Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4053",
    "name": "Sigma 24mm F/1.4 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 772.28,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3613.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 Two FLD Elements and One SLD Elements Four Aspherical Elements Super Multilayer Coating STM Autofocus Motor Rounded 11-Blade Diaphragm Brass Bayonet Mount 72mm Front Filter Threads Rear Filter Holder",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4046",
    "name": "Sigma 16mm F/1.4 DC DN Contemporary Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 455.45,
    "originalPrice": 594.06,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3604.jpg",
    "badge": "SAVE 23%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.2 to f/16 Fast, Wide-Aperture Lens High-Response Linear Actuator AF System Four Aspherical Lens Elements Rounded 13-Blade Diaphragm De-Clickable Aperture Ring Super Multilayer Coating Dust- and Splash-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4038",
    "name": "Sigma 50mm F/1.2 DG DN Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 1148.51,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3597.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.2 to f/16 Fast, Wide-Aperture Lens High-Response Linear Actuator AF System Four Aspherical Lens Elements Rounded 13-Blade Diaphragm De-Clickable Aperture Ring Super Multilayer Coating Dust- and Splash-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4035",
    "name": "Sigma 105mm F/2.8 DG DN Macro Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 792.08,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3590.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 1:1 Magnification, 11.6″ Min. Focus Hyper-Sonic Motor AF System Custom AFL Button, Focus Limiter Switch Physical Aperture Ring; De-Click Switch Weather-Sealed Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4030",
    "name": "Nikon NIKKOR Z Macro 50mm F/2.8 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3585.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/2.8 to f/22 One ED Element, One Aspherical Element 1:1 Magnification 6.3″ Minimum Focus STM Autofocus System Focus Range Limiter Magnification and Focus Distance Indexes Weather-Sealed Construction Compatible with ES-2 Film Digitizing Set",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4023",
    "name": "Nikon NIKKOR Z Macro 105mm F/2.8 VR S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 584.16,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3571.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/32 Fast Macro Prime Lens 11.4″ Minimum Focus 1:1 Magnification Nano Crystal and ARNEO Coatings Dual-Motor Multi-Focus STM AF System VR Image Stabilization OLED Lens Information Panel Rounded 9-Blade Diaphragm Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4013",
    "name": "Nikon NIKKOR Z 85mm F/1.8 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3567.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 Two Extra-Low Dispersion Elements Nano Crystal & Super Integrated Coatings Multi-Focus Stepping Motor AF System Programmable Control Ring Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4008",
    "name": "Nikon NIKKOR Z 85mm F/1.8 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 653.47,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3555.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 Two Extra-Low Dispersion Elements Nano Crystal & Super Integrated Coatings Multi-Focus Stepping Motor AF System Programmable Control Ring Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-4001",
    "name": "Nikon NIKKOR Z 50mm F/1.8 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3545.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 Two ED and Two Aspherical Elements Nano Crystal & Super Integrated Coatings Stepping Motor AF System Programmable Control Ring Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3991",
    "name": "Nikon NIKKOR Z 35mm F/1.8 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 782.18,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3541.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 Two ED and Three Aspherical Elements Nano Crystal & Super Integrated Coatings Stepping Motor AF System Programmable Control Ring Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3981",
    "name": "Nikon NIKKOR Z 28mm F/2.8 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 257.43,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3522.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/2.8 to f/16 Two Aspherical Elements Super Integrated Coating Dual Stepping Motor AF System Programmable Control Ring Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3977",
    "name": "Nikon NIKKOR Z 28-75mm F/2.8 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 712.87,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3511.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/2.8 to f/22 Super ED and ED Elements Three Aspherical Elements Stepping Motor AF System Programmable Control Ring Weather-Sealed Design Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3967",
    "name": "Nikon NIKKOR Z 24mm F/1.8 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 623.76,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3503.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 One Extra-Low Dispersion Element Four Aspherical Elements Nano Crystal & Super Integrated Coatings Multi-Focus Stepping Motor AF System Programmable Control Ring Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3963",
    "name": "Nikon NIKKOR Z 24-70mm F/4 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 564.36,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3476.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/4 to f/22 Aspherical Extra-Low Dispersion Element Three Aspherical Elements Nano Crystal & Super Integrated Coatings Stepping Motor AF System Programmable Control Ring Weather-Sealed Design, Fluorine Coating Rounded 7-Blade Diaphragm Retractable Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3957",
    "name": "Nikon NIKKOR Z 24-70mm F/2.8 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1950.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3384.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/2.8 to f/22 Two ED and Four Aspherical Elements ARNEO and Nano Crystal Coatings Multi-Focus Stepping Motor AF System Programmable Control Ring Information OLED Panel and L.Fn Button Weather-Sealed Design, Fluorine Coating Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3942",
    "name": "Nikon NIKKOR Z 24-50mm F/4-6.3 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 128.71,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3370-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/4 to f/36 Three Aspherical Elements Two Extra-Low Dispersion Elements Super Integrated Coating Stepping Motor AF System Retractable Design Programmable Control Ring Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3939",
    "name": "Nikon NIKKOR Z 20mm F/1.8 S Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 643.56,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3370.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 Three ED and Three Aspherical Elements Nano Crystal & Super Integrated Coatings Multi-Focus Stepping Motor AF System Programmable Control Ring Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3935",
    "name": "Nikon AF-S NIKKOR 85mm F/1.8G Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 435.64,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3365.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 Super Integrated Lens Coating Silent Wave Motor AF System Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3931",
    "name": "Nikon AF-S NIKKOR 50mm F/1.8G Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 198.02,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3364.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 One Aspherical Element Super Integrated Coating Silent Wave Motor AF System Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3928",
    "name": "Nikon AF-S NIKKOR 35mm F/1.8G ED Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3362.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.8 to f/16 One Extra-Low Dispersion Element One Aspherical Element Super Integrated Lens Coating Silent Wave Motor AF System Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3926",
    "name": "Nikon AF-S DX NIKKOR 35mm F/1.8G Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 188.12,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3357.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/DX Format 52.5mm (35mm Equivalent) Aperture Range: f/1.8 to f/22 One Aspherical Element Super Integrated Coating Silent Wave Motor AF System Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3922",
    "name": "Nikon AF-S DX NIKKOR 18-140mm F/3.5-5.6G ED VR Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 158.42,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3355.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/DX Format 27-210mm (35mm Equivalent) Aperture Range: f/3.5 to f/38 One Aspherical Element, One ED Element Super Integrated Coating Silent Wave Motor AF System VR II Image Stabilization Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3919",
    "name": "Nikon AF-S DX Micro NIKKOR 85mm F3.5G ED VR Lens",
    "brand": "Nikon",
    "category": "audio",
    "price": 514.85,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3353.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/DX Format 127.5mm (35mm Equivalent) Aperture Range: f/3.5 to f/32 One Extra-Low Dispersion Element Super Integrated Coating 1:1 Magnification, 11.3″ Minimum Focus Silent Wave Motor AF System VR II Image Stabilization Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3917",
    "name": "Nikon AF NIKKOR 50mm F/1.8D Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 128.71,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3351.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/FX Format Aperture Range: f/1.8 to f/22 Super Integrated Coating Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3913",
    "name": "Nikon NIKKOR Z 40mm F/2 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 321.78,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3347.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/FX Format Aperture Range: f/2 to f/16 Two Aspherical Elements Super Integrated Coating Stepping Motor AF System Programmable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3903",
    "name": "Nikon NIKKOR Z MC 105mm F/2.8 VR S Mcro Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1099.01,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3340.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/32 Fast Macro Prime Lens 11.4″ Minimum Focus 1:1 Magnification Nano Crystal and ARNEO Coatings Dual-Motor Multi-Focus STM AF System VR Image Stabilization OLED Lens Information Panel Rounded 9-Blade Diaphragm Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3899",
    "name": "Nikon NIKKOR Z 50mm F/1.4 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 584.16,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3336.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.4 to f/16 Fast, Lightweight Walkaround Prime STM Autofocus Stepping Motor Minimum Focusing Distance: 14.5″ Customizable Clickless Control Ring Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3895",
    "name": "Nikon NIKKOR Z 35mm F/1.4 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 742.57,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3333.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.4 to f/16 Fast, Lightweight Walkaround Prime STM Autofocus Stepping Motor Minimum Focusing Distance: 10.6″ Customizable Clickless Control Ring Dust and Water-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3891",
    "name": "Nikon NIKKOR Z 17-28mm F/2.8 Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1306.93,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3328.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Z-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Stepping Motor AF System Internal Focus and Zoom Design Programmable Control Ring Dust- and Drip-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3882",
    "name": "FUJIFILM XF 8mm f/3.5 R WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 792.08,
    "originalPrice": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3320.jpg",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "APS-C | f/3.5 12mm (Full-Frame Equivalent) Lightweight Ultra-Wide Angle Aspherical and Low Dispersion",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3878",
    "name": "FUJIFILM XF 8-16mm f/2.8 R LM WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1485.15,
    "originalPrice": 1544.55,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3309.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 12-24mm (35mm Equivalent) Aperture Range: f/2.8 to f/22 Four Aspherical Elements Three Super ED and Three ED Elements Nano-GI Coating Linear Autofocus Motor Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3868",
    "name": "FUJIFILM XF 56mm f/1.2 R Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3305.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 85mm (35mm Equivalent) Aperture Range: f/1.2 to f/16 One Double-Sided Aspherical Element Two Extra-Low Dispersion Elements Super EBC Coating Internal Focusing Mechanism Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3859",
    "name": "FUJIFILM XF 50mm f/1.0 R WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1485.15,
    "originalPrice": 1524.75,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3297.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 76mm (35mm Equivalent) Aperture Range: f/1.0 to f/16 One Aspherical Element Two Extra-Low Dispersion Elements Super EBC Coating DC Autofocus Motor Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3854",
    "name": "FUJIFILM XF 50-140mm f/2.8 R LM OIS WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1584.16,
    "originalPrice": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3293.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 76-213mm (35mm Equivalent) Aperture Range: f/2.8 to f/22 Five ED Elements & One Super ED Element Nano-GI and HT-EBC Lens Coatings Triple Linear Autofocus Motor Optical Image Stabilization Weather-Sealed Construction Rounded 7-Blade Diaphragm Removable Rotating Tripod Collar",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3850",
    "name": "FUJIFILM XF 33mm f/1.4 R LM WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 792.08,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3285.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 50mm (35mm Equivalent) Aperture Range: f/1.4 to f/16 Minimum Focusing Distance: 11.8″ Two Aspherical Elements Three ED Elements",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3844",
    "name": "FUJIFILM XF 23mm f/1.4 R Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3283.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 35mm (35mm Equivalent) Aperture Range: f/1.4 to f/16 One Aspherical Element Super EBC Coating Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3838",
    "name": "FUJIFILM XF 18mm f/1.4 R WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 990.1,
    "originalPrice": 1029.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3279.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 27mm (35mm Equivalent) Aperture Range: f/1.4 to f/16 3 Aspherical, 1 ED Optical Glass Element 15 Elements in 9 Groups Linear Autofocus Motor Minimum Focus Distance: 7.9″ Locking “A” Position Aperture Ring Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3832",
    "name": "FUJIFILM XF 18-55mm f/2.8-4 R LM OIS Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 693.07,
    "originalPrice": 732.67,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3271.jpg",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 27-84mm (35mm Equivalent) Aperture Range: f/2.8-4 to f/22 Three Aspherical Elements One Extra-Low Dispersion Element Super EBC Coating Linear Autofocus Motor Optical Image Stabilization Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3826",
    "name": "FUJIFILM XF 18-135mm f/3.5-5.6 R LM OIS WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3264.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 27-206mm (35mm Equivalent) Aperture Range: f/3.5 to f/22 Two Extra-Low Dispersion Elements Four Aspherical Elements HT-EBC Coating Linear Autofocus Motor Optical Image Stabilization Weather-Sealed Construction Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3819",
    "name": "FUJIFILM XF 16mm f/2.8 R WR Lens (Black)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3261.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 24mm (35mm Equivalent) Aperture Range: f/2.8 to f/22 Two Aspherical Elements Super EBC Coating Stepping Autofocus Motor Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3815",
    "name": "FUJIFILM XF 16mm f/1.4 R WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 990.1,
    "originalPrice": 1049.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3259.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 24mm (35mm Equivalent) Aperture Range: f/1.4 to f/16 Two Aspherical Elements, Two ED Elements Nano-GI and HT-EBC Coatings Floating Focus System Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3809",
    "name": "FUJIFILM XF 150-600mm f/5.6-8 R LM OIS WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1980.2,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3253.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 229-914mm (35mm Equivalent) Aperture Range: f/5.6 to f/22 Super ED and ED Elements Linear Autofocus Motor Optical Image Stabilization Internal Zoom and Focusing Design Weather-Sealed & Front Fluorine Coating Rounded 9-Blade Diaphragm Rotating, Removable Tripod Mount",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3804",
    "name": "FUJIFILM XF 10-24mm f/4 R OIS WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3251.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 15-36mm (35mm Equivalent) Aperture Range: f/4 to f/22 Four Aspherical Elements Four Extra-Low Dispersion Elements Super EBC Coating Stepping Autofocus Motor Optical Image Stabilization Weather-Sealed Construction Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3794",
    "name": "FUJIFILM GF 63mm f/2.8 R WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3243.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 50mm (35mm Equivalent) Aperture Range: f/2.8 to f/32 One Extra-Low Dispersion Element Fluorine-Coated Front Element Dust- and Weather-Sealed Construction Command Position on Aperture Ring Rounded Nine-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3789",
    "name": "FUJIFILM GF 45mm f/2.8 R WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1683.17,
    "originalPrice": 1782.18,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3237.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 36mm (35mm Equivalent) Aperture Range: f/2.8 to f/32 One Aspherical Element, Two ED Elements Nano GI Coating Internal Focusing System Dust- and Weather-Sealed Construction Command Position on Aperture Ring Rounded Nine-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3786",
    "name": "FUJIFILM GF 45-100mm f/4 R LM OIS WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2277.23,
    "originalPrice": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3235.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 36-79mm (35mm Equivalent) Aperture Range: f/4 to f/32 Three Aspherical Elements One Super ED Element, One ED Element Linear AF Motor, Internal Focusing Optical Image Stabilization Dust- and Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3780",
    "name": "FUJIFILM GF 32-64mm f/4 R LM WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2277.23,
    "originalPrice": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3223.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 25-51mm (35mm Equivalent) Aperture Range: f/4 to f/32 Three Aspherical Elements One Super ED Element, One ED Element Linear AF Motor and Internal Focusing Fluorine-Coated Front Element Dust- and Weather-Sealed Construction Command Position on Aperture Ring Rounded Nine-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3771",
    "name": "FUJIFILM GF 30mm f/3.5 R WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3215.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 24mm (35mm Equivalent) Aperture Range: f/3.5 to f/32 Two Extra-Low Dispersion Elements Two Aspherical Elements Dust- and Weather-Sealed Construction Command Position on Aperture Ring Rounded Nine-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3765",
    "name": "FUJIFILM GF 23mm f/4 R LM WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3209.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 18mm (35mm Equivalent) Aperture Range: f/4 to f/32 One Super ED and Three ED Elements Two Aspherical Elements Nano GI Coating Linear AF Motor, Internal Focusing Dust- and Weather-Sealed Construction Command Position on Aperture Ring Rounded Nine-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3758",
    "name": "FUJIFILM GF 120mm f/4 Macro R LM OIS WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2673.27,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3204.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 95mm (35mm Equivalent) Aperture Range: f/4 to f/32 Three Extra-Low Dispersion Elements Maximum Magnification: 1:2 Minimum Focusing Distance: 1.5′ Linear AF Motor, Floating Focus System Optical Image Stabilization Fluorine-Coated Front Element Dust- and Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3752",
    "name": "FUJIFILM GF 110mm f/2 R LM WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2772.28,
    "originalPrice": 2970.3,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3201.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "FUJIFILM G Mount 87mm (35mm Equivalent) Aperture Range: f/2 to f/22 Four Extra-Low Dispersion Elements Linear AF Motor, Internal Focusing Dust- and Weather-Sealed Construction Command Position on Aperture Ring Rounded Nine-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3747",
    "name": "FUJIFILM GF 1.4X TC WR Teleconverter For Select G-Mount Lenses",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3198.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "G-Mount Teleconverter 1.4x Magnification Factor Communication between Lens & Camera Maintains Metering, Autofocus, and OIS Weather-Sealed Construction For GF 250mm f/4 R LM OIS WR For GF100-200mm f/5.6 R LM OIS WR",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3742",
    "name": "FUJIFILM XF 50mm f/2",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 455.45,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3194.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 76mm (35mm Equivalent) Aperture Range: f/2 to f/16 One Aspherical ED Element Super EBC Coating Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3736",
    "name": "FUJIFILM XF 16-55mm f/2.8 R LM WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1188.12,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3185.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 24-84mm (35mm Equivalent) Aperture Range: f/2.8 to f/22 Three Extra-Low Dispersion Elements Three Aspherical Elements Nano-GI and HT-EBC Lens Coatings Twin Linear Autofocus Motor Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3729",
    "name": "Sony FE 85mm f/1.4 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1326.73,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3183.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 One XA Element and Three ED Elements Nano AR Coating Linear Super Sonic Wave AF Motor AF/MF Switch; Internal Focus Focus Hold Button Physical Aperture Ring; De-Click Switch Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3722",
    "name": "Sony FE 50mm f/1.8 Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 267.33,
    "originalPrice": 297.03,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3178.jpg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 One Aspherical Element Double-Gauss Optical Design DC Autofocus Motor Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3718",
    "name": "Sony FE 35mm f/1.8 OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 712.87,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3175.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/APS-C Format 52.5mm (35mm Equivalent) Aperture Range: f/1.8 to f/22 One ED Element & Two Aspherical Elements Optical SteadyShot Image Stabilization Internal Focus Minimum Focus Distance: 11.8″ Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3712",
    "name": "Sony FE 35mm f/1.4 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1306.93,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3171.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 Two XA Elements, One ED Element Nano AR II and Fluorine Coatings Dual XD Linear AF Motors, Internal Focus Focus Hold Button, AF/MF Switch Physical Aperture Ring; De-Click Switch Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3704",
    "name": "Sony FE 28mm f/2 Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 257.43,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3159-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2 to f/22 One AA Element & Two Aspherical Elements Two Extra-Low Dispersion Elements Linear Autofocus Motor; Internal Focus Dust and Moisture-Resistant Construction Rounded 9-Blade Diaphragm Optional Ultra-Wide & Fisheye Converters",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3694",
    "name": "Sony FE 28-70mm f/3.5-5.6 OSS Lens Kit Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 316.83,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3159.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/3.5-5.6 to f/22-36 One ED & Three Aspherical Elements Linear Autofocus Motor; Internal Focus Optical SteadyShot Image Stabilization Dust and Moisture-Resistant Construction Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3691",
    "name": "Sony FE 24-70mm f/2.8 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1465.35,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3142.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 One XA Element & Two Aspherical Elements One ED Element & One Super ED Element Nano AR Coating Direct Drive Super Sonic Wave AF Motor Focus Hold Button; Internal Focus AF/MF Switch; Zoom Lock Switch Dust and Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3687",
    "name": "Sony FE 24-70mm f/2.8 GM II Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1940.59,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3132-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Fast Standard Zoom 22% Lighter, 18% Smaller than Previous Four XD Linear AF Motors, Floating Focus Aperture De-Click and Lock Switches Zoom Smoothness Switch XA and Super ED Elements Nano AR Coating II and Fluorine Coating Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3678",
    "name": "Sony FE 24-50mm f/2.8 G Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 1128.71,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/3132.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 Fast, Lightweight Mid-Range Zoom Aperture De-Click and Lock Switches Aspherical and ED Elements Fluorine Coating Dust and Moisture-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3668",
    "name": "Sony FE 20mm f/1.8 G Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 831.68,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2967-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 Two Aspherical Elements Three Extra-Low Dispersion Elements Nano AR Coating and Fluorine Coating Dual XD Linear Motor AF System Linear Manual Focus Response Focus Hold Button, Focus Mode Switch Dust and Moisture Resistant Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3664",
    "name": "Sony FE 200-600mm f/5.6-6.3 G OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1881.19,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2964.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/5.6 to f/36 Five ED Elements, One Aspherical Element Nano AR Coating and Fluorine Coating Direct Drive Super Sonic Wave AF Motor Optical SteadyShot Image Stabilization Dust and Moisture-Resistant Construction Removable, Rotating Tripod Collar Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3658",
    "name": "Sony FE 12-24mm f/2.8 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 2574.26,
    "originalPrice": 2673.27,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2956.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Three XA Elements, Two Super ED Elements Nano AR II and Fluorine Coatings XD Linear Motor AF, Internal Focus Floating Focus System Dust and Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3650",
    "name": "Sony E 15mm f/1.4 G Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 693.07,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2953.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/APS-C Format 22.5mm (Full-Frame Equivalent) Aperture Range: f/1.4 to f/16 Super ED, ED, and Aspherical Elements Dual Linear AF Motors; Internal Focus Min. Focusing Distance: 6.7″ Suppressed Focus Breathing Dust- and Moisture-Resistant Design Physical Aperture Ring; De-Click Switch Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3646",
    "name": "Sony 16-35mm F4 Ziess OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2948.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/4 to f/22 One AA Element; Four Aspherical Elements Three Extra-Low Dispersion Elements ZEISS T* Anti-Reflective Coating Linear Autofocus Motor; Internal Focus Optical SteadyShot Image Stabilization Dust and Moisture-Resistant Construction Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3642",
    "name": "Sony FE 135mm F/1.8 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 2079.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2947.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 XA Element, Super ED and ED Elements Nano AR and Fluorine Coatings XD Linear Motor AF System AF/MF Switch, Internal Focus Two Focus Hold Buttons Physical Aperture Ring, De-Click Switch Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3629",
    "name": "Sony FE 90mm f/2.8 Macro G OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2934.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 1:1 Magnification Ratio; Internal Focus Minimum Focus Distance: 11″ Aspherical, ED and Super ED Elements Nano AR Coating Direct Drive Super Sonic Wave AF Motor Optical SteadyShot Image Stabilization Sliding Focus Ring for AF/MF Selection Focus Hold Button; Focus Range Limiter",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3625",
    "name": "Sony FE 85mm f/1.8 Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2929.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 One Extra-Low Dispersion Element Double Linear AF Motor Focus Hold Button; AF/MF Switch Dust- and Moisture-Resistant Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3616",
    "name": "Sony FE 70-200mm f2.8 GM OSS II Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 2336.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2917.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 29% Weight Reduction from Previous Model Four XD Linear AF Motors; 4x Faster AF One XA & One Aspherical Elements Two ED Elements & Two Super ED Elements Nano AR Coating II Optical Steady Shot Image Stabilization Dust and Moisture-Resistant Construction Eleven-Blade Circular Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3608",
    "name": "Sony FE 70-200mm f/2.8 GM OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1841.58,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2916.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 One XA Element & Two Aspherical Elements Four ED Elements & Two Super ED Elements Nano AR Coating Dual Linear & Super Sonic Wave AF Motors Optical SteadyShot Image Stabilization Focus Hold Buttons; Focus Range Limiter Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3604",
    "name": "Sony FE 50mm f/1.4 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1326.73,
    "originalPrice": 1346.53,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2913.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.4 to f/16 G-Master Design with Advanced Optics Two XD Linear AF Motors, Internal Focus Focus Hold Buttons & Iris Lock Switch Physical Aperture Ring & De-Click Switch Rounded 11-Blade Diaphragm Nano AR II & Fluorine Coatings Dust and Moisture-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3597",
    "name": "Sony FE 50mm f/1.2 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1683.17,
    "originalPrice": 1702.97,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2902.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.2 to f/16 Extremely Fast Design, Advanced Optics Four XD Linear AF Motors, Internal Focus Focus Hold Button, AF/MF Switch Physical Aperture Ring; De-Click Switch Nano AR II and Fluorine Coatings Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3592",
    "name": "Sony FE 35mm f/1.8 Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2897.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 One Aspherical Element Linear Autofocus Motor; Internal Focus Customizable Focus Hold Button Dust and Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3584",
    "name": "Sony FE 24mm f/1.4 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1089.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2894.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/16 Two XA Elements, Three ED Elements Nano AR and Fluorine Coatings Direct Drive Super Sonic Wave AF Motor AF/MF Switch, Internal Focus Focus Hold Button Physical Aperture Ring, De-Click Switch Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3579",
    "name": "Sony FE 16-35mm f/2.8 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1623.76,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2887.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Two Extra-Low Dispersion Elements Three Aspherical and Two XA Elements Nano AR Coating and Fluorine Coating Direct Drive Super Sonic Wave AF Motors Focus Hold Button; AF/MF Switch Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3578",
    "name": "Sony FE 16-35mm f/2.8 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1623.76,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2887.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 Two Extra-Low Dispersion Elements Three Aspherical and Two XA Elements Nano AR Coating and Fluorine Coating Direct Drive Super Sonic Wave AF Motors Focus Hold Button; AF/MF Switch Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3569",
    "name": "Sony FE 16-35mm f/2.8 GM II Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 2158.42,
    "originalPrice": 2178.22,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2880.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Fast Wide-Angle Zoom 20% Lighter, 10% Smaller than Previous Four XD Linear AF Motors, Floating Focus Aperture De-Click and Lock Switches Zoom Smoothness Switch XA and Super ED Elements Fluorine Coating Dust and Moisture-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3563",
    "name": "Sony FE 16-25mm f/2.8 G Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 1188.12,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2875.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Fast, Lightweight, Wide-Angle Zoom De-Clickable Aperture Ring Focus Hold Button, AF/MF Switch Three Aspherical Elements One ED Asph. Element, Three ED Elements Fluorine Coating Dust and Moisture-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3560",
    "name": "Sony FE 14mm f/1.8 GM Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1415.84,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2873.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/16 Two XA Elements, One Super ED Element Nano AR II and Fluorine Coatings XD Linear Motor AF, Internal Focus Physical Aperture Ring; De-Click Switch Dust and Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3556",
    "name": "Sony FE 100-400mm f/4.5-5.6 GM OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2869.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/4.5 to f/40 One Super ED Element and Two ED Elements Nano AR Coating and Fluorine Coating Direct Drive Super Sonic Wave AF Motor Optical SteadyShot Image Stabilization Zoom Torque Adjustment Ring Internal Focus, Focus Range Limiter Dust and Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3555",
    "name": "Sony FE 100-400mm f/4.5-5.6 GM OSS Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2869.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full-Frame Format Aperture Range: f/4.5 to f/40 One Super ED Element and Two ED Elements Nano AR Coating and Fluorine Coating Direct Drive Super Sonic Wave AF Motor Optical SteadyShot Image Stabilization Zoom Torque Adjustment Ring Internal Focus, Focus Range Limiter Dust and Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3551",
    "name": "Sony FE 85mm f/1.4 GM II Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1841.58,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2858.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.4 to f/16 Fast Portrait-Length Prime 20% Lighter, 13% Smaller than Previous XD Linear Motor Autofocus Aperture De-Click and Lock Switches Iris Lock Switch XA and ED Elements Rounded 11-Blade Diaphragm Fluorine Coating Dust and Moisture-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3538",
    "name": "Sony FE 28-70mm f/2 GM Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 2871.29,
    "originalPrice": 3168.32,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2856.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2 to f/22 Ultra-Fast Standard Zoom Four XD Linear AF Motors, Floating Focus Min. Focus: 1.2′ Throughout Zoom Range Aperture De-Click and Lock Switches Zoom Smoothness Switch XA and Super ED Elements Nano AR Coating II and Fluorine Coating Dust and Moisture-Resistant Construction Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3536",
    "name": "Sony FE 50-150mm f/2 GM Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 3663.37,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2850.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2 to f/22 Ultra-Fast Portrait-Length Zoom Four XD Linear AF Motors, Floating Focus Aperture De-Click and Lock Switches Internal Zoom and Internal Focus Design XA, Aspherical, and Super ED Elements Nano AR Coating II and Fluorine Coating Dust and Moisture-Resistant Construction Removable Tripod Foot Rounded 11-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3522",
    "name": "Canon RF100-500mm F4.5-7.1 L IS USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 3267.33,
    "originalPrice": 3366.34,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2838.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/4.5-7.1 to f/32-54 One Super UD Element, Six UD Elements Dual Nano USM AF System Optical Image Stabilizer Weather-Sealed Design, Fluorine Coating Customizable Control Ring Rotating Zoom Ring, Torque Adjustment Rounded 9-Blade Diaphragm Compatible with RF Extenders",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3517",
    "name": "Canon RF100-400mm F5.6-8 IS USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 2970.3,
    "originalPrice": 3069.31,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2827.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/5.6 to f/45 One UD Element, One Aspherical Element Super Spectra Coating Nano USM AF Motor Maximum Magnification: 0.41x at 400mm Optical Image Stabilizer Customizable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3509",
    "name": "Canon EF-S 18-55mm f/4-5.6 IS STM",
    "brand": "Canon",
    "category": "lenses",
    "price": 49.5,
    "originalPrice": 59.41,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2822.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-S Mount Lens/APS-C Format 28.8-88mm (35mm Equivalent) Aperture Range: f/4 to f/32 One Aspherical Element Super Spectra Coating STM Stepping AF Motor Optical Image Stabilizer Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3503",
    "name": "Canon EF-S 18-135mm f/3.5-5.6 IS USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2818.jpg",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-S Mount Lens/APS-C Format 28.8-216mm (35mm Equivalent) Aperture Range: f/3.5 to f/38 One UD Element, One Aspherical Element Super Spectra Coating NANO USM Autofocus System Optical Image Stabilizer Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3497",
    "name": "Canon EF-S 10-18mm f/4.5-5.6 IS STM",
    "brand": "Canon",
    "category": "lenses",
    "price": 158.42,
    "originalPrice": 178.22,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2812.jpg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-S-Mount Lens/APS-C Format 16-28.8mm (35mm Equivalent) Aperture Range: f/4.5 to f/29 One UD Element & One Aspherical Element Super Spectra Coating STM Stepping AF Motor Optical Image Stabilizer Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3492",
    "name": "Canon EF 85mm f/1.8 USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 237.62,
    "originalPrice": 257.43,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2810.jpg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 Super Spectra Coating Ring-Type Ultrasonic Motor AF System Rounded 8-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3488",
    "name": "Canon EF 70-200mm f/2.8L IS III USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 1940.59,
    "originalPrice": 1960.4,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2806.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/32 One Fluorite Element & Five UD Elements Air Sphere Coating Ring-Type Ultrasonic Motor AF System Optical Image Stabilizer Internal Focus, Focus Range Limiter Weather-Sealed Design, Fluorine Coating Detachable, Rotatable Tripod Collar Rounded 8-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3481",
    "name": "Canon EF 24-70mm f/2.8L II USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2793-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 One Super UD Element, Two UD Elements Three Aspherical Elements Super Spectra and Fluorine Coatings Ring-Type Ultrasonic Motor AF System Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3471",
    "name": "Canon EF 16-35mm f/2.8L III USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 594.06,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2787.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3465",
    "name": "Canon EF 100mm f/2.8L Macro IS USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 1762.38,
    "originalPrice": 1782.18,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2783.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/32 One Ultra-Low Dispersion Element Super Spectra Coating 1:1 Magnification, 11.8″ Min. Focus Ring-Type Ultrasonic Motor AF System Focus Range Limiter Optical Image Stabilizer Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3458",
    "name": "Canon RF 50mm f/1.8 STM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 198.02,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2778.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.8 to f/22 Compact, Lightweight Prime Lens STM Stepping AF Motor Customizable Control Ring Aspherical Element, SSC Coating Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3451",
    "name": "Canon RF 28-70mm L USM F2",
    "brand": "Canon",
    "category": "lenses",
    "price": 2336.63,
    "originalPrice": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2773.jpg",
    "badge": "SAVE 2%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/2 to f/22 Ultra-Low Dispersion Elements Ring-Type Ultrasonic Motor AF System Customizable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3443",
    "name": "Canon EF 50mm f/1.4 USM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 237.62,
    "originalPrice": 257.43,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2768.jpg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/1.4 to f/22 Two High Refractive Index Elements Super Spectra Coating Micro Ultrasonic Motor AF System Rounded 8-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3438",
    "name": "Canon RF85mm F2 Macro IS STM",
    "brand": "Canon",
    "category": "lenses",
    "price": 584.16,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2764.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Maximum Magnification: 1:2 Minimum Focusing Distance: 1.15′ One UD Element STM Stepping AF Motor Optical Image Stabilization; Hybrid IS Customizable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3431",
    "name": "Canon RF70-200mm F2.8 L IS USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 2316.83,
    "originalPrice": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2756.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/32 One Super UD Element, One UD Element Two Aspherical Elements Air Sphere and Fluorine Coatings Dual Nano USM AF System Optical Image Stabilizer Customizable Control Ring Detachable, Rotatable Tripod Collar Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3420",
    "name": "Canon RF35mm F1.8 Macro IS STM",
    "brand": "Canon",
    "category": "lenses",
    "price": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2748.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 Super Spectra Coating STM Stepping AF Motor 1:2 Max. Magnification, 6.7″ Min. Focus Optical Image Stabilizer Customizable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3414",
    "name": "Canon EF-S 24mm f/2.8 STM",
    "brand": "Canon",
    "category": "lenses",
    "price": 158.42,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2741.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "EF-S-Mount Lens/APS-C Format 38.4mm (35mm Equivalent) Aperture Range: f/2.8 to f/22 One Aspherical Element Super Spectra Coating STM Stepping AF Motor Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3410",
    "name": "Canon RF 85mm F1.2 L USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 2821.78,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2739.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/1.2 to f/16 Blue Spectrum Refractive Optics Element One UD Element, One Aspherical Element Air Sphere Coating Ring-Type Ultrasonic Motor AF System Customizable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3403",
    "name": "Canon RF 50mm F1.2 L USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 2079.21,
    "originalPrice": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2733.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Fixed Focal Length Lens with High Image Quality and Bright f/1.2 Aperture for the EOS R System. Minimum Focusing Distance of 1.31 ft./0.40m. Control Ring for Direct Setting Changes. Three Aspherical Elements and One UD Element0 12 pin Communication System. Dust- and Water-resistant with Fluorine Coating",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3396",
    "name": "Canon RF 28mm f/2.8 STM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 455.45,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2720.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Classic Wide-Angle Prime Gear-Type STM AF Motor Super Spectra Coating Three Aspherical Elements Customizable Control Ring AF/MF Control Switch Full-Time Manual Focus Capability Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3386",
    "name": "Canon RF 24mm f/1.8 Macro IS STM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2718.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 One UD Element, One Aspherical Element Super Spectra Coating STM Stepping AF Motor 1:2 Max. Magnification, 5.5″ Min. Focus Optical Image Stabilizer Customizable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3381",
    "name": "Canon RF 24-70mm f/2.8 L IS USM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 1980.2,
    "originalPrice": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2667.jpg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 One UD Element, One Aspherical Element Super Spectra Coating STM Stepping AF Motor 1:2 Max. Magnification, 5.5″ Min. Focus Optical Image Stabilizer Customizable Control Ring Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3376",
    "name": "Canon RF 16mm f/2.8 STM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 336.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2663.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/22 One Aspherical Element Super Spectra Coating STM Stepping AF Motor Customizable Control Ring Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3372",
    "name": "Canon RF 15-35mm F2.8 L IS USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 2079.21,
    "originalPrice": 2277.23,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2659.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Fast Wide-Angle Zoom Nano USM AF System Optical Image Stabilizer Aspherical and Low Dispersion Elements Air-Sphere and Fluorine Coatings Customizable Control Ring Weather-Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3368",
    "name": "Canon RF 100mm F2.8 L MACRO IS USM",
    "brand": "Canon",
    "category": "lenses",
    "price": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2657.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format 1.4x Magnification with Autofocus Aperture Range: f/2.8 to f/32 Minimum Focusing Distance: 10.2″ Super Spectra Coating Smooth and Quiet Auto Focus Optical Image Stabilization; Hybrid IS Control Ring for Direct Setting Changes 9-Blade Diaphragm Weather-Sealed Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3365",
    "name": "Canon EF 50mm f/1.8 STM",
    "brand": "Canon",
    "category": "lenses",
    "price": 133.66,
    "originalPrice": 158.42,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2648.jpg",
    "badge": "SAVE 16%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "EF-Mount Lens/Full-Frame Format Aperture Range: f/1.8 to f/22 Super Spectra Coating STM Stepping AF Motor Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3357",
    "name": "Canon RF 24-105mm f/2.8 L IS USM Z Lens (Canon RF)",
    "brand": "Canon",
    "category": "lenses",
    "price": 3366.34,
    "originalPrice": 3465.35,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2645.jpg",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 Two Nano USM Motors 11-Blade Diaphragm Optical Image Stabilizer 3 Aspherical Elements, 4 UD Elements SSC, ASC & Fluorine Coating",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-3347",
    "name": "Insta360 GO 3 Action Camera",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2632.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Miniature Action Camera with Action Pod Up to 2.7K Video and Photos Longer-Life Battery over 2 Hours 64GB Flash Memory Updated Dual Built-In Microphones Waterproof to 16′, IPX4 with Action Pod Up to 1080p120 Slow-Motion Video Bluetooth and Wi-Fi, Voice Control 2.0 Time-Lapse, Time Shift, Loop Recording Flow-State Image Stabilization",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-3330",
    "name": "GoPro HERO13 Black",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2618.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "27MP with Improved Performance 5.3K60/4K120/2.7K240 Video, 27MP Photos Auto Adjusts for HB-Series Lenses Upgraded Mounting Ecosystem HyperSmooth 6.0 Image Stabilization Front and Rear LCD Screens Bluetooth Audio Connectivity and Control 33′ Waterproof without Housing 8x Slow-Motion Video 1900mAh Capacity Rechargeable Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-3320",
    "name": "GoPro HERO12 Black",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 346.53,
    "originalPrice": 376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2595.jpg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "27MP with Improved Performance 5.3K60/4K120/2.7K240 Video, 27MP Photos HyperSmooth 6.0 Image Stabilization Front and Rear LCD Screens Bluetooth Audio Connectivity and Control 33′ Waterproof without Housing 8x Slow-Motion Video 1720mAh Capacity Rechargeable Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-3304",
    "name": "GoPro HERO11 Black",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 356.44,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2581.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "27MP with Improved Performance 5.3K60/2.7K240 Video, 27MP Photos HyperSmooth 5.0 Image Stabilization Front & Rear LCD Screens Wi-Fi & Bluetooth Connectivity 33′ Waterproof without Housing 8x Slow-Motion Video 1720mAh Capacity Rechargeable Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-3289",
    "name": "DJI Osmo Action 5 Pro Adventure Combo",
    "brand": "DJI",
    "category": "accessories",
    "price": 514.85,
    "originalPrice": 534.65,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2577.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP 1/1.3″ CMOS Sensor, 155° FOV Front & Back OLED Touchscreen Displays Up to UHD 4K120 Video, 4-Hour Batteries Live Streaming, 47GB Built-In Storage SuperNight Slow-Motion Modes, Timecode 3 Stereo Mics, OsmoAudio, Voice Control 360° HorizonSteady Image Stabilization Subject Centering & Tracking Waterproof to 65.6′, Air Pressure Gauge Up to 13.5-Stop Dynamic Range",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-3281",
    "name": "DJI Osmo Action 4 Camera Adventure Combo",
    "brand": "DJI",
    "category": "cameras",
    "price": 415.84,
    "originalPrice": 435.64,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2553.jpg",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "1/1.3″ CMOS Sensor, Wide 155° FOV Front & Back Color Touchscreen Displays Up to UHD 4K120, 2.7K120, 1080p240 Fast Charge Technology, Voice Control RockSteady 3.0 Image Stabilization HorizonBalance & HorizonSteady Leveling Camera is Waterproof to 59′ Built-In Mics for Stereo Audio Recording",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-3258",
    "name": "DJI Osmo Pocket 3 Creator Combo",
    "brand": "DJI",
    "category": "accessories",
    "price": 742.57,
    "originalPrice": 772.28,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2539.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "3-Axis Gimbal Stabilizer 1″ CMOS Sensor Up to 4K120 Resolution 2″ Rotatable Screen Smart Horizontal/Vertical Shooting D-Log M & 10-Bit Support Active Track 6.0 Up to 166 Minutes of Battery Life USB-C PD Cable Included Wi-Fi & Bluetooth Support",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-3249",
    "name": "DJI Osmo Pocket 3",
    "brand": "DJI",
    "category": "accessories",
    "price": 574.26,
    "originalPrice": 613.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2531.jpg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "3-Axis Gimbal Stabilizer 1″ CMOS Sensor Up to 4K120 Resolution 2″ Rotatable Screen Smart Horizontal/Vertical Shooting D-Log M & 10-Bit Support Active Track 6.0 Up to 166 Minutes of Battery Life USB-C PD Cable Included Wi-Fi & Bluetooth Support",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-3242",
    "name": "DJI Osmo 360 Action Camera Adventure Combo",
    "brand": "DJI",
    "category": "cameras",
    "price": 633.66,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2505.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "8K30 360° Action Camera with 1″ Sensor Selfie Stick, QR Adapter, Battery Case Capture up to 4K120 and 170° Boost Capture up to 120MP 360° Stills Osmo Magnetic Quick Release Ecosystem Capture up to 100 Minutes of 8K Video 10-Bit and D-Log M Color Profile OsmoAudio Direct Microphone Input Image Stabilization, Slow-Motion Capture Waterproof and Cold-Proof Design",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-3214",
    "name": "Nikon Zfc Mirrorless Camera with 16-50mm Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2502-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 2.36m-Dot OLED Electronic Viewfinder 3″ 1.04m-Dot Vari-Angle Touchscreen ISO 100-51200, Up to 11 fps Shooting 209-Point Hybrid AF, Eye Detection AF Time-Lapse Movie Built-In Wi-Fi and Bluetooth USB Type-C Connectivity",
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
    ]
  },
  {
    "id": "esa-3204",
    "name": "Nikon Zfc Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 841.58,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2501.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 2.36m-Dot OLED Electronic Viewfinder 3″ 1.04m-Dot Vari-Angle Touchscreen ISO 100-51200, Up to 11 fps Shooting 209-Point Hybrid AF, Eye Detection AF Time-Lapse Movie Built-In Wi-Fi and Bluetooth USB Type-C Connectivity",
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
    ]
  },
  {
    "id": "esa-3201",
    "name": "Nikon Zf Mirrorless Camera With Scorp C",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1643.56,
    "originalPrice": 2633.66,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2498-1.jpg",
    "badge": "SAVE 38%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 7 Image Processor UHD 4K 30p Video and Full HD 120p Video AF Subject Recognition with 3D Tracking 5-Axis In-Body Vibration Reduction Focus-Point Stabilization 3.2″ Vari-Angle Touchscreen 96MP High-Res Mode",
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
    ]
  },
  {
    "id": "esa-3196",
    "name": "Nikon Zf Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1485.15,
    "originalPrice": 2277.23,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2498.jpg",
    "badge": "SAVE 35%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 7 Image Processor UHD 4K 30p Video and Full HD 120p Video AF Subject Recognition with 3D Tracking 5-Axis In-Body Vibration Reduction Focus-Point Stabilization 3.2″ Vari-Angle Touchscreen 96MP High-Res Mode",
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
    ]
  },
  {
    "id": "esa-3191",
    "name": "Nikon Z9 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2492.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format Stacked CMOS Sensor EXPEED 7 Image Processor 8.3K 60p N-RAW, 4.1K 60p ProRes RAW 8K30p and 4K120p Video, 10-Bit Internal Up to 20 fps Raw, 30 fps JPEG Shooting 493-Point AF, AI-Based Subject Detection Blackout-Free Real Live Viewfinder 3.2″ 4-Axis Tilting Touchscreen LCD Vertical Grip, 2x CFexpress Type B Slots 5 GHz Wi-Fi, Bluetooth, and GNSS",
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
    ]
  },
  {
    "id": "esa-3185",
    "name": "Nikon Z8 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2486.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format Stacked CMOS Sensor Lightweight Design, 30% Smaller than Z9 8.3K 60p N-RAW, 4.1K 60p ProRes RAW 8K30p and 4K120p Video, 10-Bit Internal Up to 20 fps Raw, 30 fps JPEG Shooting 493-Point AF, AI-Based Subject Detection Blackout-Free Real Live Viewfinder 3.2″ 4-Axis Tilting Touchscreen LCD CFx Type B & SD Memory Card Slots 5 GHz Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-3181",
    "name": "Nikon Z7 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2476-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 493-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 9 fps Continuous Shooting; ISO 64-25600 CFexpress Type B/XQD Memory Card Slot 8K Time-Lapse Mode; Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-3175",
    "name": "Nikon Z7 II Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2474.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format BSI CMOS Sensor Dual EXPEED 6 Image Processors UHD 4K60 Video; N-Log & 10-Bit HDMI Out 10 fps Cont. Shooting, ISO 64-25600 493-Point Phase-Detect AF System 3.6m-Dot OLED Electronic Viewfinder 3.2″ 2.1m-Dot Tilting Touchscreen LCD 5-Axis In-Body Vibration Reduction Dual Memory Card Slots",
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
    ]
  },
  {
    "id": "esa-3170",
    "name": "Nikon Z6 Mirrorless Camera With Adapter Ftz",
    "brand": "Nikon",
    "category": "accessories",
    "price": 2099.01,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2470-1.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 273-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 12 fps Shooting; ISO 100-51200 Top-Panel OLED; Wi-Fi and Bluetooth CFexpress Type B/XQD Memory Card Slot",
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
    ]
  },
  {
    "id": "esa-3166",
    "name": "Nikon Z6 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2470.jpg",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 273-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 12 fps Shooting; ISO 100-51200 Top-Panel OLED; Wi-Fi and Bluetooth CFexpress Type B/XQD Memory Card Slot",
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
    ]
  },
  {
    "id": "esa-3162",
    "name": "Nikon Z6 Mark III Mirrorless Camera Body Only with Accessory Rig Kit",
    "brand": "Nikon",
    "category": "accessories",
    "price": 2376.24,
    "originalPrice": 2772.28,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2466.jpg",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP Partially-Stacked CMOS Sensor EXPEED 7 Image Processor 6K 60p N-RAW, 6K 30p ProRes RAW 4K 120p, Full HD 240p Slow Motion Video Up to 20 fps Raw, 60 fps JPEG Shooting Blackout-Free, 5760k-Dot EVF 493-Point AF, AI-Based Subject Detection 3.2″ 4-Axis Tilting Touchscreen LCD CFexpress Type B & SD Memory Card Slots Camera-to-Cloud Direct Connectivity",
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
    ]
  },
  {
    "id": "esa-3146",
    "name": "Nikon Z6 Mark II Mirrorless Camera With Adapter Ftz Mark II",
    "brand": "Nikon",
    "category": "accessories",
    "price": 1750.5,
    "originalPrice": 2336.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2445.jpg",
    "badge": "SAVE 25%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 273-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 12 fps Shooting; ISO 100-51200 Top-Panel OLED; Wi-Fi and Bluetooth CFexpress Type B/XQD Memory Card Slot",
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
    ]
  },
  {
    "id": "esa-3136",
    "name": "Nikon Z6 Mark II Mirrorless Camera Body Only",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1554.46,
    "originalPrice": 2118.81,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2440.jpg",
    "badge": "SAVE 27%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor Dual EXPEED 6 Image Processors UHD 4K30 Video; N-Log & 10-Bit HDMI Out 14 fps Cont. Shooting, ISO 100-51200 273-Point Phase-Detect AF System 3.6m-Dot OLED Electronic Viewfinder 3.2″ 2.1m-Dot Tilting Touchscreen LCD 5-Axis In-Body Vibration Reduction Dual Memory Card Slots",
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
    ]
  },
  {
    "id": "esa-3129",
    "name": "Nikon Z5 Mirrorless Camera Body With 40mm F/2 Z Lens Kit & Scorp C",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1247.52,
    "originalPrice": 2054.46,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2435.jpg",
    "badge": "SAVE 39%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.3MP FX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 3.6m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot Tilting Touchscreen LCD 5-Axis Sensor-Shift Vibration Reduction ISO 100-51200, Up to 4.5 fps Shooting Built-In Wi-Fi and Bluetooth Dual SD UHS-II Card Slots",
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
    ]
  },
  {
    "id": "esa-3112",
    "name": "Nikon Z5 Mirrorless Camera Body Only",
    "brand": "Nikon",
    "category": "cameras",
    "price": 990.1,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2414.jpg",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.3MP FX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 3.6m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot Tilting Touchscreen LCD 5-Axis Sensor-Shift Vibration Reduction ISO 100-51200, Up to 4.5 fps Shooting Built-In Wi-Fi and Bluetooth Dual SD UHS-II Card Slots",
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
    ]
  },
  {
    "id": "esa-3104",
    "name": "Nikon Z6 Mark III Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 2594.06,
    "originalPrice": 2970.3,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2403.jpg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP Partially-Stacked CMOS Sensor EXPEED 7 Image Processor 6K 60p N-RAW, 6K 30p ProRes RAW 4K 120p, Full HD 240p Slow Motion Video Up to 20 fps Raw, 60 fps JPEG Shooting Blackout-Free, 5760k-Dot EVF 493-Point AF, AI-Based Subject Detection 3.2″ 4-Axis Tilting Touchscreen LCD CFexpress Type B & SD Memory Card Slots Camera-to-Cloud Direct Connectivity",
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
    ]
  },
  {
    "id": "esa-3089",
    "name": "Nikon Z5 II Mirrorless Camera Body Only with Accessory Rig Kit",
    "brand": "Nikon",
    "category": "accessories",
    "price": 1881.19,
    "originalPrice": 1900.99,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2386-1.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format CMOS Sensor EXPEED 7 Image Processor ISO 100-64000, Up to 30 fps Shooting UHD 4K and Full HD Video Recording 3.6m-Dot OLED Electronic Viewfinder 3.2″ 2.1m-Dot Vari-Angle Touchscreen LCD 9-Type Subject Detection AF 5-Axis Sensor-Shift Vibration Reduction Built-In Wi-Fi and Bluetooth Dual SD UHS-II Card Slots",
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
    ]
  },
  {
    "id": "esa-3080",
    "name": "Nikon Z5 II Mirrorless Camera Body Only",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1683.17,
    "originalPrice": 1900.99,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2365.jpg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-3048",
    "name": "Sony a7C Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 1485.15,
    "originalPrice": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2337.jpg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame Exmor R BSI Sensor BIONZ X Image Processor UHD 4K30p Video with HLG & S-Log3 Gammas 693-Point Hybrid AF System 2.36m-Dot OLED Electronic Viewfinder 3.0″ 921.6k-Dot Vari-Angle Touchscreen 5-Axis In-Body Image Stabilization Shooting Up to 10 fps, ISO 50-204800 Bluetooth and Wi-Fi Connectivity",
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
    ]
  },
  {
    "id": "esa-3037",
    "name": "Sony FX3A Full-Frame Cinema Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 3722.77,
    "originalPrice": 3742.57,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2321.jpg",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "12.1MP Full-Frame CMOS Exmor R Sensor UHD 4K up to 120 | 1080p up to 240 Compact Form for Cage-Free Operation 10-Bit 4:2:2 XAVC S-I,16-Bit Raw Output S-Cinetone/S-Log3/HLG, 15+ Stops DR Detachable Dual XLR/TRS Adapter Handle Phase Detection AF/Face Tracking/Eye AF 80 to 409,600 Expanded ISO Range Dual CFexpress Type A/SDXC Card Slots",
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
    ]
  },
  {
    "id": "esa-3026",
    "name": "Canon XA60 Professional UHD 4K Camcorder",
    "brand": "Canon",
    "category": "accessories",
    "price": 1144.1,
    "originalPrice": 1188.12,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2304.jpg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "1/2.3″ CMOS Sensor, DIG!C DV 6 Processor Up to UHD 4K30 Video Recording Mini-HDMI Video Output Integrated 20x Optical Zoom Lens USB-C Output with UVC Support Infrared, Optical Image Stabilization 3.5″ Touchscreen LCD, Tiltable OLED EVF Record 4K in XF-AVC and MP4 Formats Dual SD Relay and Simultaneous Recording Dual XLR and Mic/Line Audio Input",
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
    ]
  },
  {
    "id": "esa-3016",
    "name": "Sony a6500",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-3014",
    "name": "Sony a6000",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-3011",
    "name": "Canon M50",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-3009",
    "name": "Canon R",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-3006",
    "name": "Sony a7sii",
    "brand": "Sony",
    "category": "cameras",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-3001",
    "name": "Sony 70-180 tamron F2.8",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2996",
    "name": "Sony 85 Sigma",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2112-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-2993",
    "name": "Sony 24-70mm Samsung F2.8",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2108-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2989",
    "name": "Sony a7iii",
    "brand": "Sony",
    "category": "cameras",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2104-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2985",
    "name": "Nikon 70-200mm Z",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2099-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2981",
    "name": "Canon 50rf F1.4",
    "brand": "Canon",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2093-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2975",
    "name": "Sony 24-70 GM F2.8",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2089-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2966",
    "name": "Sony 50 F1.8",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2086-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2962",
    "name": "Sony 35mm F1.8",
    "brand": "Sony",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2082-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2958",
    "name": "Canon 18-135mm EFS",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2078-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2954",
    "name": "Sony 14-24mm F2.8",
    "brand": "Sony",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2074-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2949",
    "name": "Sony 70mm macro F2.8",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2069-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2944",
    "name": "Nikon 14-24 F2.8G",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2063-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
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
    ]
  },
  {
    "id": "esa-2938",
    "name": "Nikon 38mm F1.8G",
    "brand": "Nikon",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2061-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2935",
    "name": "Sony 85 F1.8",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2055-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-2931",
    "name": "Canon 16Rf F2.8",
    "brand": "Canon",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2052-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2926",
    "name": "Nikon Z6iii",
    "brand": "Nikon",
    "category": "cameras",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2050-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
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
    ]
  },
  {
    "id": "esa-2920",
    "name": "Canon 2000d",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2045-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2916",
    "name": "Canon 850d",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2039-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2911",
    "name": "Canon 70-200 iii F2.8",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2038-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2904",
    "name": "100mm macro ef F2.8",
    "brand": "ESA CAM",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2032-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2899",
    "name": "Sony 50mm Sigma F1.4",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2027-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2895",
    "name": "Sony 85mm Sigma F1.4",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2025-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2891",
    "name": "Nikon 105mm macro F2.8g",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2020-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2887",
    "name": "Sony 50 Sigma F1.4",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2017-1-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-2883",
    "name": "Sony 85 Sigma F1.4",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2017-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-2879",
    "name": "Nikon 50-250mm Z",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2012-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2875",
    "name": "Samsung 14rf F2.8",
    "brand": "ESA CAM",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2009-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-2871",
    "name": "Canon 17-55mm EFS F2.8",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2007-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2867",
    "name": "Nikon 35 Sigma F1.4",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2004-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
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
    ]
  },
  {
    "id": "esa-2863",
    "name": "Nikon 20mm Sigma F1.4",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/2000-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2859",
    "name": "Nikon 18-35mm Sigma F1.8",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1996-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2855",
    "name": "Nikon 135mm Sigma F1.8",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1994-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2851",
    "name": "Sony iv",
    "brand": "Sony",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1988-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
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
    ]
  },
  {
    "id": "esa-2846",
    "name": "Nikon 810",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1985-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
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
    ]
  },
  {
    "id": "esa-2843",
    "name": "Nikon 5600",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1983-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2838",
    "name": "Canon 24-35 Sigma F1.2",
    "brand": "Canon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1979-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2834",
    "name": "canon 85mm F1.4",
    "brand": "Canon",
    "category": "lenses",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1977-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2830",
    "name": "nikon 33mm Z",
    "brand": "Nikon",
    "category": "accessories",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/09/1975-scaled.jpg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2826",
    "name": "Sony a6500",
    "brand": "Sony",
    "category": "accessories",
    "price": 475.25,
    "originalPrice": 574.26,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4332-scaled.jpeg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2822",
    "name": "Sony a6000",
    "brand": "Sony",
    "category": "accessories",
    "price": 316.83,
    "originalPrice": 455.45,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4328-scaled.jpeg",
    "badge": "SAVE 30%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2818",
    "name": "Canon M50+kit lens 15.45",
    "brand": "Canon",
    "category": "lenses",
    "price": 386.14,
    "originalPrice": 475.25,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4325-scaled.jpeg",
    "badge": "SAVE 19%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2814",
    "name": "Canon R",
    "brand": "Canon",
    "category": "accessories",
    "price": 1089.11,
    "originalPrice": 1306.93,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4321-scaled.jpeg",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2809",
    "name": "Canon RP used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 673.27,
    "originalPrice": 752.48,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4272-scaled.jpeg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2804",
    "name": "Canon 5DS used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 653.47,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4271-scaled.jpeg",
    "badge": "SAVE 27%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2799",
    "name": "Canon 5D mark iv used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 1049.5,
    "originalPrice": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4263-scaled.jpeg",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2791",
    "name": "Canon 1DX mark ii",
    "brand": "Canon",
    "category": "accessories",
    "price": 1089.11,
    "originalPrice": 1346.53,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4261-scaled.jpeg",
    "badge": "SAVE 19%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2786",
    "name": "Canon R3 used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 3346.53,
    "originalPrice": 3762.38,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4255-scaled.jpeg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2781",
    "name": "Canon R6 used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 1326.73,
    "originalPrice": 1445.54,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4252-scaled.jpeg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2777",
    "name": "Canon R6 mark ii used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 1485.15,
    "originalPrice": 1643.56,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4248-scaled.jpeg",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2773",
    "name": "Canon R5 used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 2079.21,
    "originalPrice": 2475.25,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4243-scaled.jpeg",
    "badge": "SAVE 16%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2768",
    "name": "Canon R5 mark ii used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 3465.35,
    "originalPrice": 3762.38,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4241-1-scaled.jpeg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2758",
    "name": "Canon 50mm RF used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 163.37,
    "originalPrice": 178.22,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4235-scaled.jpeg",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2754",
    "name": "Canon 35mm RF used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 366.34,
    "originalPrice": 415.84,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4231-scaled.jpeg",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2749",
    "name": "Canon 24mm RF used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 465.35,
    "originalPrice": 534.65,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4227-scaled.jpeg",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2744",
    "name": "Canon 85mm RF used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 465.35,
    "originalPrice": 524.75,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4224-scaled.jpeg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2740",
    "name": "Canon 70.200 RF used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 1683.17,
    "originalPrice": 2079.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4221-scaled.jpeg",
    "badge": "SAVE 19%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2736",
    "name": "Canon 100.400 RF Used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4218-scaled.jpeg",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2732",
    "name": "Canon 85mm RF 1.2",
    "brand": "Canon",
    "category": "lenses",
    "price": 1940.59,
    "originalPrice": 2277.23,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4214-scaled.jpeg",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2727",
    "name": "Canon 100mm macro RF",
    "brand": "Canon",
    "category": "accessories",
    "price": 1138.61,
    "originalPrice": 1188.12,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4213-scaled.jpeg",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2723",
    "name": "Canon 14.35 RF used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 970.3,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4207-scaled.jpeg",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2714",
    "name": "Canon 35mm RF 1.4 used",
    "brand": "Canon",
    "category": "pre-owned",
    "price": 1346.53,
    "originalPrice": 1425.74,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4191-1-scaled.jpeg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": ": عدسة Canon RF 35mm f/1.4 مستعملة بحالة تشبه الجديد فتحة عدسة واسعة f/1.4 لبوكيه ناعم وصور ليلية مذهلة. بُعد بؤري 35mm مثالي للتصوير اليومي، البورتريه البيئي، الفاشون والڤيديو. وضوح عالي وألوان طبيعية بفضل تصميم العدسة المتطور. مناسبة للتصوير الفوتوغرافي والفيديو معًا. وزن خفيف وسهلة الحمل على أي كاميرا Canon R-series. ✨ العدسة بتجمع بين الحِدّة والإبداع، وتعتبر من أكتر العدسات العملية واللي مش هتستغنى عنها محتاويات العدسه _ البوكس + الكاب الأمامي +الكاب الخلفي + الكفر + الهود متاح البدل بمعدات اخري كل منتجاتنا بضمان ع الجديد والمستعمل",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2704",
    "name": "Canon EOS C80 6K Full-Frame Cinema Camera (Canon RF)",
    "brand": "Canon",
    "category": "cameras",
    "price": 5504.95,
    "originalPrice": 5841.58,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/08/img_4067.jpeg",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 6K FF Back-Illuminated CMOS Sensor 6K30, DCI 4K/2K, UHD 4K120 S35 Recording Full Frame and Super35 Modes 12G-SDI and HDMI Simultaneous Output Triple-Base ISO: 800, 3200, 12,800 Cinema Raw Light LT, HEVC, AVC Codecs 16+ Stops of Total Dynamic Range Dual-Pixel CMOS AF II, Built-In NDs 1 x BNC Timecode, 2 x Mini-XLR Audio In 2 x SD Card Slots, LUT/Long GOP Support &nbsp;",
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
    ]
  },
  {
    "id": "esa-2522",
    "name": "Generic Shooting tent 80*80cm",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 14.85,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Generic-Shooting-tent-8080cm-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2520",
    "name": "General Reflector 5in1 120×180 Black, Silver, White, Gold and diffuser",
    "brand": "ESA CAM",
    "category": "lighting",
    "price": 14.85,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/General-Reflector-5in1-120×180-Black-Silver-White-Gold-and-diffuser-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Folds to 1/3 Open Size Translucent Oval Black, Silver, White, Soft-Gold Surfaces Includes Carry/Storage Case",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2518",
    "name": "Emaily Seamless Black Background (#44)",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 34.65,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Emaily-Seamless-Black-Background-44.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Color: Black Material: (Specify material if known, e.g., Muslin, Canvas) Sizes: (Specify available sizes if known, e.g., 5x7ft, 10x10ft) Setup: (Specify how it’s set up, e.g., Rollable, Foldable) Ideal for: Portrait Photography, Product Photography, Fashion Shoots, Still Life, Video Production, and more. Durable and wrinkle-resistant. Creates a seamless and professional backdrop. Enhances subject detail and creates high-contrast images.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2513",
    "name": "Triopo Quick Setup Octagon Softbox K3120cm + Honeycomb Grid with Detachable Bowens Mount, Reflective Silver Interior for Studio Photography",
    "brand": "ESA CAM",
    "category": "lighting",
    "price": 47.52,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Triopo-Quick-Setup-Octagon-Softbox-K3120cm-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Brand: TRIOPO Shape: Octagon Pole Quantity: 8 Mount Type: For Bowens Mount LED Video Light Inner side color: Silver Diameter: 120cm",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2502",
    "name": "Godox X1T-N TTL Wireless Flash Trigger Transmitter for Nikon",
    "brand": "Nikon",
    "category": "audio",
    "price": 34.65,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Godox-X1T-N-TTL-Wireless-Flash-Trigger-Transmitter-for-Nikon-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Works with X Wireless Radio System Compatible with Nikon i-TTL Frequency: 2.4 GHz Range: 328′ 32 Channels; 5 Groups Backlit LCD Screen; Sync Delay Settings Exposure Compensation & Exposure Lock Ratio Flash Mode; High-Speed Sync Hot Shoe and PC Sync Terminal Micro-USB Ports for Firmware Updates",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2478",
    "name": "Aparo HT-20C RGBWW Inflatable LED Tube Light with Built-In Battery (33.5″)",
    "brand": "ESA CAM",
    "category": "lighting",
    "price": 89.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Aparo-HT-20C-RGBWW-Inflatable-LED-Tube-Light-with-Built-In-Battery-33.5″-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For Content Creators and Vloggers Output: 655 Lux at 3.3′ (6500K) 2500-6500K CCT, RGBWW Mode 0-100% Dimming Capabilities CRI 96 55-Minute Runtime at Full Power Magnetic Mount 3 Shooting Modes Includes 20 Special Lighting Effects",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2469",
    "name": "Godox AD600BM Witstro Manual All-In-One Outdoor Flash",
    "brand": "Godox",
    "category": "lighting",
    "price": 272.28,
    "originalPrice": 316.83,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Godox-AD600BM-Witstro-Manual-All-In-One-Outdoor-Flash-1.png",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "600Ws Monolight, Li-Ion Battery Powered Up to 500 Full-Power Flashes per Charge Manual Control of Flash Functions Built-In 2.4 GHz Wireless X System 1/256 to 1/1 Power Control 0.01-2.5 sec Recycling Time Flash Durations: Short as 1/10,000 sec 1/8000 sec High-Speed Sync Optional AD-H1200 Head Gives 1200Ws",
    "specs": [
      {
        "label": "Brand",
        "value": "Godox"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2464",
    "name": "DJI Ronin BG30 Grip for RS 2 & RS 3 Pro Gimbals",
    "brand": "DJI",
    "category": "gimbals",
    "price": 138.61,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Ronin-BG30-Grip-for-RS-2-RS-3-Pro-Gimbals-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Grip with Integrated Battery The Ronin BG30 Grip is compatible with the DJI RS 2 and RS 3 Pro gimbals. It’s the same grip that comes included with these gimbals. The BG30 features an integrated battery that powers the gimbal for up to 12 hours. Via a USB Type-C charging port, the integrated battery can be recharged from 0 to 80% in approximately one hour. When",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
      },
      {
        "label": "Category",
        "value": "gimbals"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2462",
    "name": "Generic Eye Cup EB View Finder for Canon",
    "brand": "Canon",
    "category": "accessories",
    "price": 2.48,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Generic-EyeCup-EB-ViewFinder-For-Canon-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Soft rubber & light blocking for sharper shots Enhances eye placement for precise composition Shields your Canon EOS DSLR viewfinder (check compatibility) Maintains auto LCD off Complements your Canon EOS DSLR camera",
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
    ]
  },
  {
    "id": "esa-2458",
    "name": "Generic Dual Camera Strap (Black)",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 16.83,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Generic-Dual-Camera-Strap-Black-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Genuine Leather Construction High-Quality, Durable, and Comfortable Stainless Steel Hardware Fully Adjustable Strap Padded for Comfort Suitable for Photographers of All Levels",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-2456",
    "name": "Caisi Screen protector for Canon R",
    "brand": "Canon",
    "category": "accessories",
    "price": 2.97,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Caisi-Screen-protector-for-Canon-R-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-2454",
    "name": "Generic Microfiber Camera Lens Cleaner",
    "brand": "ESA CAM",
    "category": "audio",
    "price": 0.99,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Generic-Microfiber-Camera-Lens-Cleaner-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-2452",
    "name": "Car Charger USB-A & USB-C 2 Port",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 29.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Car-Charger-USB-A-USB-C-2-Port-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-2450",
    "name": "Nanlite Waterproof Bag for Pavotube II 6C LED Light",
    "brand": "Nanlite",
    "category": "lighting",
    "price": 12.87,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nanlite-Waterproof-Bag-for-Pavotube-II-6C-LED-Light-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Use the Light in the Bag Holds One LED Light Tube Clear Thermoplastic Polyurethane Waterproof to 66′ (20m)",
    "specs": [
      {
        "label": "Brand",
        "value": "Nanlite"
      },
      {
        "label": "Category",
        "value": "lighting"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2440",
    "name": "K&#038;F Concept Beta Photography Backpack (Black, 20L)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 89.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/KF-Concept-Beta-Photography-Backpack-Black-20L-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Holds Camera and Multiple Lenses Separate Upper and Lower Compartments High-Density, Abrasion-Resistant Fabric Compartment for 15.6″ Laptop Trolley Sleeve, Side Tripod Pocket Adjustable Interior Dividers Backpack Straps with Sternum Strap",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-2438",
    "name": "Boya BY-K171 Articulated Microphone Arm",
    "brand": "Boya",
    "category": "audio",
    "price": 10.89,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Boya-BY-K171-Articulated-Microphone-Arm-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Smooth & Flexible Articulation. Sturdy & Durable Construction. Secure Table Clamp. Universal Compatibility: Includes 5/8″ to 3/8″ . Ample Reach: 385mm horizontal and 340mm vertical extension. Integrated Cable Management.",
    "specs": [
      {
        "label": "Brand",
        "value": "Boya"
      },
      {
        "label": "Category",
        "value": "audio"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2428",
    "name": "Zoom H6essential 6-Track 32-Bit Float Portable Audio Recorder",
    "brand": "Zoom",
    "category": "audio",
    "price": 306.93,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Zoom-H6essential-6-Track-32-Bit-Float-Portable-Audio-Recorder-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Flagship Handheld Audio Recorder Filmmakers, Musicians & Content Creators 32-Bit Float: No Level Adjustment Needed Removable X/Y Mics Handle up to 135 dB 4 XLR-1/4″ TRS Combo Inputs with Preamps Dual A/D Converters Onboard Mixer and Waveform Display Function as a 6×2 USB-C Audio Interface Compatible with Alternative Capsules Compatible with BTA-1 Bluetooth Adapter",
    "specs": [
      {
        "label": "Brand",
        "value": "Zoom"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2422",
    "name": "BOYA BY-K3 Desktop Microphone",
    "brand": "Boya",
    "category": "audio",
    "price": 36.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/BOYA-BY-K3-Desktop-Microphone-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Hi-Fi quality sound, 48 kHz / 24-bit, 20 Hz – 20 kHz – Innovative one-tap noise cancellation filters out ambient noise – 3 polar patterns for the K9: supercardioid, figure-8, and omnidirectional – RGB lighting with 3 vibrant effects for the K9: static, cycle, or gradient – Real-time monitoring via 3.5 mm TRS – Plug and play with no driver needed",
    "specs": [
      {
        "label": "Brand",
        "value": "Boya"
      },
      {
        "label": "Category",
        "value": "audio"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2407",
    "name": "Generic ES-68 Lens Hood for Canon",
    "brand": "Canon",
    "category": "accessories",
    "price": 2.48,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Generic-ES-68-Lens-Hood-for-Canon.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2398",
    "name": "K&#038;F Concept 82mm Black Mist 1/4 + ND8-128 Variable ND 2 in 1 Filter with Double-sided 28-layer Anti-reflection Green Film and Lever Nano-Xcel Series (KF01.2033)",
    "brand": "K&F Concept",
    "category": "accessories",
    "price": 118.81,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/KF-82mm-Black-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "2-in-1 Filter : Combines ND8-128 light reduction and Black Mist 1/4 effect for creative control. Thin Frame Design : 7.4mm aviation-grade aluminum frame with CNC trapezoidal pattern for easy handling and installation. 28-Layer Coating : Anti-reflection coating ensures 84% light transmittance and prevents glare and ghosting. Adjustable Light Reduction : 3-7 f-stop light reduction with smooth and precise control. High-Quality Optical Glass : Ground and polished for clarity and sharpness, perfect for telephoto and wide-angle lenses. Coating Protection : Waterproof , anti-scratch , and anti-oil coating for durability and ease of maintenance.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2396",
    "name": "Generic E-52 II Lens Cap For Canon",
    "brand": "Canon",
    "category": "accessories",
    "price": 1.98,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Generic-E-52-II-Lens-Cap-For-Canon.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "62mm Diameter Protects Lens When Not in Use Center-Pinch Snap-On Style Canon Name on Front",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2382",
    "name": "Canon Mount Adapter EF-EOS R",
    "brand": "Canon",
    "category": "accessories",
    "price": 128.71,
    "originalPrice": 138.61,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Canon-Mount-Adapter-EF-EOS-R-1.png",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Canon EF/EF-S Lens to EOS R Camera Maintains AF and Image Stabilization Dust- and Water-Resistant",
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
    ]
  },
  {
    "id": "esa-2356",
    "name": "TTArtisan 11mm f/2.8 Lens for Canon RF",
    "brand": "Canon",
    "category": "lenses",
    "price": 237.62,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TTArtisan-11mm-f2.8-Lens-for-Canon-RF-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "RF-Mount Lens/Full-Frame Format Aperture Range: f/2.8 to f/16 Fisheye Optical Design Manual Focus Operation Minimum Focusing Distance: 6.7″ 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2340",
    "name": "Samyang 35mm f/1.4 AF II Lens for Sony E-Mount Cameras",
    "brand": "Sony",
    "category": "lenses",
    "price": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Samyang-35mm-f1.4-AF-II-Lens-for-Sony-E-Mount-Cameras-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/Full Frame Format Autofocus with Full-Time Manual Override Built-In Customizable Function Switch Aperture Range: f/1.4 to f/16 Linear Stepping Motor Autofocus System Weather-Sealed Construction 2 Aspherical Elements 9-Bladed Diaphragm 11 Elements in 9 Groups UMC and High-Refractive Coatings",
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
    ]
  },
  {
    "id": "esa-2329",
    "name": "Viltrox 27mm F/1.2 Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 465.35,
    "originalPrice": 495.05,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Viltrox-27mm-F1.2-Lens-Sony-E-1.png",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "APS-C Format | f/1.2 to f/16 40.5mm (Full-Frame Equivalent) Excellent Low-Light Performance STM Stepping Motor All-Metal Lens Housing 15 Elements in 11 Groups Minimum Focusing Distance: 11″ Weather Resistant Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2318",
    "name": "Tamron 17-70mm F/2.8 Di III-A VC RXD Lens for Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 623.76,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Tamron-17-70mm-F2.8-Di-III-A-VC-RXD-Lens-For-Sony-E-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "E-Mount Lens/APS-C Format 25.5-105mm (35mm Equivalent) Aperture Range: f/2.8 to f/16 Three Aspherical Elements Two Low Dispersion Elements BBAR and Fluorine Coatings RXD Stepping AF Motor VC Image Stabilization Moisture-Resistant Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2303",
    "name": "Sigma 105mm F/2.8 DG DN Macro Art Lens For Sony E",
    "brand": "Sony",
    "category": "lenses",
    "price": 772.28,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sigma-105mm-F2.8-DG-DN-Macro-Art-Lens-For-Sony-E-1.png",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/2.8 to f/22 1:1 Magnification, 11.6″ Min. Focus Hyper-Sonic Motor AF System Custom AFL Button, Focus Limiter Switch Physical Aperture Ring: De-Click Switch Weather-Sealed Design",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2281",
    "name": "Nikon AF-P DX NIKKOR 70-300mm F/4.5-6.3G ED Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 59.41,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-AF-P-DX-NIKKOR-70-300mm-F4.5-6.3G-ED-Lens-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "F-Mount Lens/DX Format 105-450mm (35mm Equivalent) Aperture Range: f/4.5-6.3 to f/32 One Extra-Low Dispersion Element Super Integrated Coating Pulse Stepping Motor AF System Access Lens Settings in Camera Menu Rounded 7-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Nikon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2270",
    "name": "FUJIFILM XF 16-55mm f/2.8 R LM WR Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1188.12,
    "originalPrice": 1247.52,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-XF-16-55mm-f2.8-R-LM-WR-Lens-1.png",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "X-Mount Lens/APS-C Format 24-84mm (35mm Equivalent) Aperture Range: f/2.8 to f/22 Three Extra-Low Dispersion Elements Three Aspherical Elements Nano-GI and HT-EBC Lens Coatings Twin Linear Autofocus Motor Weather-Sealed Construction Rounded 9-Blade Diaphragm",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2262",
    "name": "Sony FE 16mm f/1.8 G Lens (Sony E)",
    "brand": "Sony",
    "category": "lenses",
    "price": 950.5,
    "originalPrice": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-FE-16mm-f1.8-G-Lens-Sony-E-1.png",
    "badge": "SAVE 4%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/1.8 to f/22 Ultrawide Prime Lens Dual XD Linear AF Motors, Internal Focus Two Advanced Aspherical Lens Elements Focus Hold Button, AF/MF Switch Physical Aperture Ring Compact & Lightweight Form Factor Dust and Moisture-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "Sony"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-2253",
    "name": "Canon RF 200-800mm f/6.3-9 IS USM Lens (Canon RF)",
    "brand": "Canon",
    "category": "lenses",
    "price": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Canon-RF-200-800mm-f-6.3-9-IS-USM-Lens-Canon-RF-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Full-Frame | f/6.3-9 to f/54 Nano USM Motor Focus/Control Ring & Two L-Fn Buttons Optical Image Stabilizer 3 UD Elements Super Spectra Coating",
    "specs": [
      {
        "label": "Brand",
        "value": "Canon"
      },
      {
        "label": "Category",
        "value": "lenses"
      }
    ],
    "features": [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery"
    ],
    "inTheBox": [
      "Main Unit",
      "Official Warranty Card",
      "Documentation"
    ]
  },
  {
    "id": "esa-1721",
    "name": "Insta360 X3 Sticky Lens Guards",
    "brand": "ESA CAM",
    "category": "lenses",
    "price": 23.76,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-X3-Sticky-Lens-Guards-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Protect X3 Lenses from Scratches Protect Against Scratches and Dust Double-Sided Adhesive Plastic Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1716",
    "name": "Insta360 X3 Lens Cap",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 7.92,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-X3-Lens-Cap-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Fits Insta360 X3 Compatible with Lens Guards Prevents Against Scratches & Dust Silicone Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1712",
    "name": "GoPro Media Mod for HERO9/HERO10/HERO11/HERO12 Black",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 118.81,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/GoPro-Media-Mod-for-HERO9HERO10HERO11HERO12-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Directional Mic with Wind Suppression 3.5mm Mic Port HDMI Output 2 x Cold Shoe Mounts Robust Weather-Resistant Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1709",
    "name": "GoPro Enduro Rechargeable Li-Ion Battery",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 35.64,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/GoPro-Enduro-Rechargeable-Li-Ion-Battery-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "1720mAh Rechargeable Lithium-Ion Battery Increases Recording Time Supports Temperatures down to 14°F Charges 13% Faster than Standard Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1704",
    "name": "GoPro Dual-Battery Charger with Two Enduro Batteries",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 99.01,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/GoPro-Dual-Battery-Charger-with-Two-Enduro-Batteries-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "2 x Enduro Rechargeable Batteries 1720mAh Capacity Lithium-Ion Dual-Battery Charger with LED Indicators USB Input Port",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1700",
    "name": "Generic Bag Accessories 30 in 1 For GoPro",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 19.8,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Generic-Bag-Accessories-30-in-1-For-GoPro-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Compatible with GoPro Mounts Flexi Tripod, Smartphone Holder Remote Control Strap, Wrist Strap Helmet Strap, Suction Cup Mount Helmet Curved Extension, Backpack Mount Anti-Fog Inserts, Wrench Soft Pouch & Carry Case",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1691",
    "name": "Neewer 4 Pack Magnetic ND/CPL Filter Set for DJI OSMO Pocket 3",
    "brand": "DJI",
    "category": "accessories",
    "price": 69.31,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Neewer-4-Pack-Magnetic-NDCPL-Filter-Set-for-DJI-OSMO-Pocket-3-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Model: FL-55 Item Type: Action Camera Filter Set Compatibility: Compatible with Osmo Pocket 3 Application: Photo & Video Main Features: 2 in 1/Quick Setup&Swap Mounting Points: Magnetic Amount of Filters: 4 Filter Types: ND/PL HD Optical Glass: Yes",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1688",
    "name": "TELESIN Anti-fingerprint Screen protection HD tempered film for Insta360 X4 camera S6-FLM-04-TIS",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 5.94,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Anti-fingerprint-Screen-protection-S6-FLM-04-TIS-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Specifically Designed: Precision cut to perfectly fit the Insta360 X4 camera screen. Anti-Fingerprint Coating: Resists fingerprints, smudges, and oil, keeping your screen clean and clear. High Transparency: Maintains the original screen clarity and vibrant colors. HD Tempered Glass: Provides superior protection against scratches, bumps, and impacts. Easy Installation: Bubble-free adhesive makes installation quick and simple. Durable and Reliable: Made from high-quality tempered glass for long-lasting protection. Touch Sensitive: Maintains touchscreen responsiveness and accuracy.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1678",
    "name": "K&F Concept Action Camera Extension Pole MS-07 (KF09.132)",
    "brand": "K&F Concept",
    "category": "cameras",
    "price": 17.82,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/KF-Concept-Action-Camera-Extension-Pole-MS-07-KF09.132-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Extra-Long Extension Pole for Action Cam GoPro Adapter Included Silicone Handle for Secure Grip 1/4″-20 Connector at Bottom of Stick High-Quality Aluminum Alloy",
    "specs": [
      {
        "label": "Brand",
        "value": "K&F Concept"
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
    ]
  },
  {
    "id": "esa-1676",
    "name": "Insta360 X3 Power Accessories",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 43.56,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-X3-Power-Accessories-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Lithium-Ion Rechargeable Battery 1800mAh Capacity 10% More Capacity than Previous Models For Insta360 X3",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1674",
    "name": "Insta360 Microphone Adapter for X3",
    "brand": "ESA CAM",
    "category": "audio",
    "price": 19.8,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-Microphone-Adapter-for-X3-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For Insta360 X3 Camera Invisible in 360° Shots 1 x USB Type-C, 1 x 3.5mm Charge Camera and Record Audio",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1669",
    "name": "Insta360 Extended Edition Selfie Stick",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 114.85,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-Extended-Edition-Selfie-Stick-1.png",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Compatible with All Insta360 Cameras Redesigned 14 to 118″ Telescoping Pole Carbon Fiber Design Weighs Only 12.8 oz 1/4″-20 Mounting Screw Bottom 1/4″-20 Thread Rotation Locking System Rubberized Grip",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1664",
    "name": "Insta360 114cm Invisible Selfie Stick",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 33.66,
    "originalPrice": 35.64,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-114cm-Invisible-Selfie-Stick-1.png",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Compatible with Most Insta360 Cameras 7 to 27.5″ Telescoping Pole Durable Design, Weighs Only 3.8 oz Invisible Effect for 360 Cameras 1/4″-20 Mounting Screw",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1656",
    "name": "Insta360 Utility Frame for X3",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 79.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-Utility-Frame-for-X3-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Protective Frame for X3 Maintains Access to Camera Ports Easy Installation with Hinged Top Panel Two Cold Shoe Mounts Fold-Out 2-Prong Mount Detachable 2-Prong Mounting Bracket Silicone Lens Cover Vertical or Horizontal Mounting",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1648",
    "name": "Insta360 Invisible Dive Case for X4",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 118.81,
    "originalPrice": 128.71,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-Invisible-Dive-Case-for-X4-1.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "For Insta360 X4 Camera Invisible in 360° Video 164′ Waterproof Depth 2-Prong Mount Compensates for Water Refraction",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1638",
    "name": "TELESIN Waterproof Case for DJI OSMO ACTION 4/3 OA-WTP-003",
    "brand": "DJI",
    "category": "accessories",
    "price": 19.8,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Waterproof-Case-for-DJI-OSMO-ACTION-43-OA-WTP-003-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Waterproof Depth Rating: Specifies the maximum depth the case can withstand. Look for a rating that exceeds your intended use (e.g., 10m, 30m, 60m). Camera Compatibility: Crucially, ensure the case is explicitly designed for your Osmo Action model (Action 4 or Action 3). Cases aren’t universally compatible. Material: Durable materials like polycarbonate plastic or high-strength tempered glass are preferred for impact and pressure resistance. Lens Window Clarity: The lens window should be made of a clear material that doesn’t distort or reduce the quality of your underwater footage. Button and Control Access: The case should allow easy access to all essential camera buttons and controls, even underwater. Ease of Use: Look for a case that’s easy to install and remove, with secure latches or seals. Mounting Options: Check if the case includes mounts or threads for attaching accessories like lights, handles, or tripods. Included Accessories: Some cases may come with extras like anti-fog inserts, lanyards, or cleaning cloths. Build Quality and Durability: A well-constructed case will offer better protection and last longer. Read reviews to gauge durability. Price: Waterproof cases range in price. Balance your budget with the features and level of protection you need.",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1615",
    "name": "TELESIN Vest Chest Strap v2 for Action Cameras S2-CGP-01",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 15.84,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Vest-Chest-Strap-v2-for-Action-Cameras-S2-CGP-01-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "TELESIN S2-CGP-01 Overview Go hands-free and capture motion and action scenes from a chest-level perspective with your GoPro, DJI Osmo Action, Polaroid Cube, or other action camera mounted on this dedicated Vest Chest Strap v2 from TELESIN . Use this updated chest strap with your camera when skiing, boating, biking, surfing, cycling, or on a motorcycle. The vest mount can support a small action camera up to 10.6 oz. This strap loops around your chest and over your shoulders and is fully adjustable to comfortably fit most body sizes. It features a chest plate with a quick-release mounting buckle interface, or you can use the standard 3-prong or J-hook 3-prong mount. Compatibility GoPro HERO, DJI Osmo Action, Polaroid Cube, and other small action cameras that mount with a 3-prong action mount",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1609",
    "name": "TELESIN Upgraded Magnetic Universal Backpack Clip for GoPro GP-JFM-009",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 12.87,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Upgraded-Magnetic-Universal-Backpack-Clip-for-GoPro-GP-JFM-009-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Clip Action Camera/Smartphone to Surface 360°Ball Head Swivel, Magnetic Mount Quick Release Mounting Buckle with Screw Soft, Serrated Inner Clip for Solid Grip Maximum Load Capacity 8.8 oz Lightweight Plastic & Metal Construction",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1577",
    "name": "TELESIN Underwater Housing &#038; Lens Filter Kit for GoPro (Purple, Red &#038; Magenta) GP-WTP-904",
    "brand": "RED",
    "category": "accessories",
    "price": 23.76,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Underwater-HousingLensFilterKit-for-GoPro-GP-WTP-904-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For GoPro HERO9/10/11/12 Depth Rating: 148′ 2-Prong Mount with Mounting Buckle Tempered Glass Lens Filters Correct Color Deviation Includes Purple, Red & Magenta Filters Polycarbonate Housing with Rubber Seal Weighs Only 4.7 oz",
    "specs": [
      {
        "label": "Brand",
        "value": "RED"
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
    ]
  },
  {
    "id": "esa-1567",
    "name": "TELESIN Quick Release Universal Clamp Mount S3-HBM-01",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 21.78,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Quick-Release-Universal-Clamp-Mount-S3-HBM-01-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Telesin quick-release system, which can be freely switched among quick-release ecological accessories The assembly sound is crisp, the feedback is obvious, and it can be operated blindly Imitation crab claw design, easy to disassemble and assemble, and wear-resistant soft rubber is added to the inner ring to make the clamping stronger Double ball head, more flexible angle Aluminum alloy pea pods, are strong and durable",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1556",
    "name": "TELESIN Quick Release Neck Mount for Action Cameras (2.0) S2-HNB-004",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 29.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Quick-Release-Neck-Mount-for-Action-Cameras-2.0-S2-HNB-004-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Telesin quick-release system, which can be freely switched among quick-release ecological accessories Add damping parts to adjust horizontal and vertical shooting Effective avoidance, three-claw hook design Sandwich structure, soft yet strong, soft and not easy to break Add a strap to reduce shaking in intense scenes",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1549",
    "name": "TELESIN Quick Release Elastic Small Q Handlebar Mount TLQ-006",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 13.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Quick-Release-Elastic-Small-Q-Handlebar-Mount-TLQ-006-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Telesin quick-release system, which can be freely switched among quick-release ecological accessories High-elastic silicone and double-hole design help to install on surfaces of objects of different sizes and obtain various tricky drilling positions Super lightweight, one-step installation, one click and one pull to install and remove Super multi-angle, 360° horizontal + 180° pitch Environmentally friendly material, skin-friendly feel",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1543",
    "name": "TELESIN Multifunctional Powerful Crab Claw SC-001",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 21.78,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Multifunctional-Powerful-Crab-Claw-SC-001-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Increase the reversible horseshoe block to make it more stable when clamping the plane Larger clamping range: 12mm-65mm More expansion screw holes, which can be connected to more devices at the same time The crab claw clip and the wrist bean clip can be separated and used separately, and the position and angle can be changed flexibly",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1509",
    "name": "TELESIN Motorcycle Helmet Chin Mount for Action Cameras (2nd Gen) GP-HBM-MT2-YH",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 14.85,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Motorcycle-Helmet-ChinMount-for-Action-Cameras2nd-GenGP-HBM-MT2-YH-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For Various Action Cameras, Smartphones Mounts to Chin Area of Helmet Updated Design, Easier to Mount J-Hook Design, Folds 180° Hook-and-Loop Strap 2-Prong Camera Mount, 180° Rotation",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1500",
    "name": "TELESIN Mini Selfie Stick 2.0 S1-MNP-01",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 13.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Mini-Selfie-Stick-2.0-S1-MNP-01-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Compact and Portable: Its mini size makes it incredibly easy to carry around in your pocket or bag. Extendable Length: Reaches a good length for capturing wider selfies and group shots. Wireless Bluetooth Control: Connects seamlessly to your phone for effortless remote shooting. Durable and Sturdy: Built to last with quality materials, ensuring stability for your phone. ‫1. TELESIN WS-22005 27.1-inch Mini Magnetic Selfie Stick Desktop Tripod with Telescoping Rod 5 Sections 360°Rotatable with Magnet Ring & Remote Control Compatible with iPhone 15/14/13/12 Smartphone – Noon Versatile Functionality: Often includes features like a tripod mode for even more shooting options.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1469",
    "name": "TELESIN Magnetic Action Camera Neck Mount with Nano Sticker Kit TE-MMK-001",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 23.76,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Magnetic-Action-Camera-Neck-Mount-with-Nano-Sticker-Kit-TE-MMK-001-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For 3-Prong Mount Action Cameras Magnetic & Nano Adhesive Sticker Mounts Hands-Free POV Shooting Included Lanyard Conceals Under Clothes Requires Separate Mount for Smartphone 180° Tilt on 3-Prong Mount Horizontal or Vertical Camera Mounting Payload Capacity of 10.6 oz",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1462",
    "name": "TELESIN Elastic silicone double-sided lens protection cover for Insta360 X4 camera S6-PTC-05-TIS",
    "brand": "ESA CAM",
    "category": "lenses",
    "price": 9.9,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Elastic-silicone-double-sided-lens-protection-cover-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Dual-Sided Protection: Covers both front and rear lenses of the Insta360 X4 camera. Elastic Silicone Material: Flexible and durable, providing excellent shock absorption and scratch resistance. Snug Fit: Precisely molded to fit the Insta360 X4 lenses securely. Easy to Install and Remove: Quick and convenient to attach and detach. Protects Against Scratches, Dust, and Bumps: Shields your lenses from everyday wear and tear. Lightweight and Compact: Adds minimal bulk to your camera. Available in Multiple Colors (Often): Allows for some personalization.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1437",
    "name": "TELESIN Bike Handlebar Clamp Mount TE-HBM-004",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 13.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Bike-Handlebar-Clamp-Mount-TE-HBM-004-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Adjustable Ball Head Arm Mounts on Surfaces 0.9 to 1.5″ Wide 1/4″-20 Screw & 3-Prong Action Mounts 0.4 to 0.6″ Clamp with Rubber Insert Tilting & 360° Ball Head Rotation Nylon with Stainless Steel Components",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1423",
    "name": "TELESIN Aluminum alloy multifunction expansion frame for DJI pocket3 S7-CFR-01-TDJ",
    "brand": "DJI",
    "category": "accessories",
    "price": 19.8,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-Aluminum-alloy-multifunction-expansion-frame-for-DJI-pocket-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Durable Construction: Made from lightweight yet strong aluminum alloy for enhanced protection and longevity. Multi-Functional Design: Expands the capabilities of the DJI Pocket 3, offering multiple mounting points for accessories. Versatile Mounting Options: Features various mounting points (e.g., cold shoe mounts, 1/4-inch threads) for attaching microphones, lights, monitors, tripods, and other accessories. Enhanced Stability: Provides a more stable platform for shooting, reducing camera shake and improving video quality. Precise Fit: Designed specifically for the DJI Pocket 3, ensuring a snug and secure fit. Easy Installation: Simple and quick to attach and detach without requiring any tools. Open Design: Maintains access to all essential ports and controls on the DJI Pocket 3. Lightweight and Portable: Adds minimal bulk to the Pocket 3, maintaining its portability. Protective Frame: Helps protect the DJI Pocket 3 from bumps, scratches, and accidental damage. Improved Audio: Allows for the use of external microphones for higher-quality audio recording.",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1395",
    "name": "TELESIN 9.8′ Carbon Fiber Selfie Stick GP-MNP-300-3",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 59.41,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/TELESIN-9.8′-Carbon-Fiber-Selfie-Stick-GP-MNP-300-3-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Carbon Fiber Design For GoPro & Other Action Cameras 8-Section, 17 to 118″ Telescoping Pole 1/4″-20 & GoPro-Style 3-Prong Mounts Ultralight Design Weighs under 1 lb 1/4″-20 Tripod Thread Soft, Nonslip Silicone Grip",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1385",
    "name": "Neewer Action Camera Metal Cage for DJI Osmo Pocket 3",
    "brand": "DJI",
    "category": "accessories",
    "price": 59.41,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Neewer-Action-Camera-Metal-Cage-For-DJI-Osmo-Pocket-3-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Perfect Fit & Protection: Rigid aluminum alloy cage with shock-absorbing lining provides secure protection for the DJI Osmo Pocket 3. All-in-One Design & Full Access: No assembly required; easy button locking/unlocking. Form-fitting design maintains access to all controls and ports. Versatile Mounting: Integrated folding fingers and included adapter enable mounting to various supports like selfie sticks, tripods, and action camera mounts. Multiple Accessory Points: Cold shoe, 1/4″ thread (ARRI), and three standard 1/4″ threads for attaching microphones, lights, and other accessories. Lightweight & Compact: Only 3.4oz (95g) for easy portability during vlogging and travel.",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1383",
    "name": "Insta360 Bullet Time Selfie Stick",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 89.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-Bullet-Time-Selfie-Stick-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Designed for Insta360 Cameras Bullet Time Handle with Folding Tripod Use to Swing Camera 360° Reinforced Selfie Stick Extends to 47.2″",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1381",
    "name": "Insta360 ONE R Battery Base",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 29.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-ONE-R-Battery-Base-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1379",
    "name": "DJI Osmo Pocket Waterproof Case FLW-315",
    "brand": "DJI",
    "category": "accessories",
    "price": 19.8,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Osmo-Pocket-Waterproof-Case-FLW-315-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1372",
    "name": "Insta360 X3 360° Camera",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 326.73,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-X3-360°-Camera-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Dual-Mode 360 & Standard Pocket Camera 1/2″ Sensor, 72MP 360° Photos 5.7K Dual-Lens 360 Auto-Stitched Capture 4K Single-Lens Standard Camera Mode 2.29″ LCD Touchscreen 6-Axis Gyroscope FlowState Stabilization 33′ Waterproof without Housing Bluetooth 5.0 Support, iOS/Android App 360° Horizon Lock",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1351",
    "name": "Insta360 GO 3 Action Camera",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-GO-3-Action-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Miniature Action Camera with Action Pod Up to 2.7K Video and Photos Longer-Life Battery over 2 Hours 64GB Flash Memory Updated Dual Built-In Microphones Waterproof to 16′, IPX4 with Action Pod Up to 1080p120 Slow-Motion Video Bluetooth and Wi-Fi, Voice Control 2.0 Time-Lapse, Time Shift, Loop Recording Flow-State Image Stabilization",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1335",
    "name": "GoPro HERO12 Black",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 346.53,
    "originalPrice": 376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/GoPro-HERO12-Black-1.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "27MP with Improved Performance 5.3K60/4K120/2.7K240 Video, 27MP Photos HyperSmooth 6.0 Image Stabilization Front and Rear LCD Screens Bluetooth Audio Connectivity and Control 33′ Waterproof without Housing 8x Slow-Motion Video 1720mAh Capacity Rechargeable Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1320",
    "name": "GoPro HERO11 Black",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 356.44,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/GoPro-HERO11-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "27MP with Improved Performance 5.3K60/2.7K240 Video, 27MP Photos HyperSmooth 5.0 Image Stabilization Front & Rear LCD Screens Wi-Fi & Bluetooth Connectivity 33′ Waterproof without Housing 8x Slow-Motion Video 1720mAh Capacity Rechargeable Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1311",
    "name": "DJI Action 2 Dual-Screen Combo",
    "brand": "DJI",
    "category": "accessories",
    "price": 237.62,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Action-2-Dual-Screen-Combo-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Action 2 Magnetic 4K Camera 1.76″ Front-Facing Touchscreen OLED Up to DCI 4K60, UHD 4K120, 1080p240 4-Mic Matrix Stereo Audio with Zoom 32GB Internal Storage Module Extends Runtime to 160 Minutes Magnetic Adapter Mount & Lanyard 1/1.7″ CMOS Sensor, Wide 155° FOV Camera is Waterproof to 33′ Image Stabilization & Horizon Leveling",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1288",
    "name": "DJI Osmo Action 4 Camera Standard Combo",
    "brand": "DJI",
    "category": "cameras",
    "price": 316.83,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Osmo-Action-4-Camera-Standard-Combo-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "1/1.3″ CMOS Sensor, Wide 155° FOV Front & Back Color Touchscreen Displays Up to UHD 4K120, 2.7K120, 1080p240 Fast Charge Technology, Voice Control RockSteady 3.0 Image Stabilization HorizonBalance & HorizonSteady Leveling Camera is Waterproof to 59′ Built-In Mics for Stereo Audio Recording",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1280",
    "name": "Insta360 X4 360° 8K Camera with Lens Guards",
    "brand": "ESA CAM",
    "category": "lenses",
    "price": 485.15,
    "originalPrice": 524.75,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-X4-360°-8K-Camera-With-Lens-Guards-1.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For Content Creators and Videographers 8K30/5.7K60 360°Cinematic H.265 Video 360° Post Reframing, Longer Runtime Rugged Design, Removable Lens Guards Gesture Control, Dual/Single Lens Modes 5.7K120 Bullet Time, 11K Time-Lapse FlowState Stabilization, Horizon Lock 33′ Waterproof, 72MP Photos App with Edit Suite and Effects Invisible Selfie Stick Feature",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1269",
    "name": "GoPro HERO13 Black",
    "brand": "ESA CAM",
    "category": "accessories",
    "price": 386.14,
    "originalPrice": 396.04,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/GoPro-HERO13-Black-1.png",
    "badge": "SAVE 2%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "27MP with Improved Performance 5.3K60/4K120/2.7K240 Video, 27MP Photos Auto Adjusts for HB-Series Lenses Upgraded Mounting Ecosystem HyperSmooth 6.0 Image Stabilization Front and Rear LCD Screens Bluetooth Audio Connectivity and Control 33′ Waterproof without Housing 8x Slow-Motion Video 1900mAh Capacity Rechargeable Battery",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1254",
    "name": "DJI Osmo Pocket 3 Creator Combo",
    "brand": "DJI",
    "category": "accessories",
    "price": 722.77,
    "originalPrice": 851.49,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Osmo-Pocket-3-Creator-Combo-1.png",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "3-Axis Gimbal Stabilizer 1″ CMOS Sensor Up to 4K120 Resolution 2″ Rotatable Screen Smart Horizontal/Vertical Shooting D-Log M & 10-Bit Support Active Track 6.0 Up to 166 Minutes of Battery Life USB-C PD Cable Included Wi-Fi & Bluetooth Support",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1247",
    "name": "DJI Osmo Pocket 3",
    "brand": "DJI",
    "category": "accessories",
    "price": 564.36,
    "originalPrice": 613.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Osmo-Pocket-3-1.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "3-Axis Gimbal Stabilizer 1″ CMOS Sensor Up to 4K120 Resolution 2″ Rotatable Screen Smart Horizontal/Vertical Shooting D-Log M & 10-Bit Support Active Track 6.0 Up to 166 Minutes of Battery Life USB-C PD Cable Included Wi-Fi & Bluetooth Support",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1237",
    "name": "DJI Osmo Action 5 Pro Adventure Combo",
    "brand": "DJI",
    "category": "accessories",
    "price": 534.65,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Osmo-Action-5-Pro-Adventure-Combo-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP 1/1.3″ CMOS Sensor, 155° FOV Front & Back OLED Touchscreen Displays Up to UHD 4K120 Video, 4-Hour Batteries Live Streaming, 47GB Built-In Storage SuperNight Slow-Motion Modes, Timecode 3 Stereo Mics, OsmoAudio, Voice Control 360° HorizonSteady Image Stabilization Subject Centering & Tracking Waterproof to 65.6′, Air Pressure Gauge Up to 13.5-Stop Dynamic Range",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1210",
    "name": "DJI Osmo Action 4 Camera Adventure Combo",
    "brand": "DJI",
    "category": "cameras",
    "price": 405.94,
    "originalPrice": 435.64,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/DJI-Osmo-Action-4-Camera-Adventure-Combo-1.png",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "1/1.3″ CMOS Sensor, Wide 155° FOV Front & Back Color Touchscreen Displays Up to UHD 4K120, 2.7K120, 1080p240 Fast Charge Technology, Voice Control RockSteady 3.0 Image Stabilization HorizonBalance & HorizonSteady Leveling Camera is Waterproof to 59′ Built-In Mics for Stereo Audio Recording",
    "specs": [
      {
        "label": "Brand",
        "value": "DJI"
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
    ]
  },
  {
    "id": "esa-1198",
    "name": "Insta360 X5 360° 8K Camera",
    "brand": "ESA CAM",
    "category": "cameras",
    "price": 544.55,
    "originalPrice": 613.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Insta360-X5-360°-8K-Camera-1.png",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For Content Creators and Videographers 8K30/5.7K30 360° PureVideo Recording 360° Post Reframing, Even Longer Runtime Rugged Design, Removable Lens Guards Gesture Control, Dual/Single Lens Modes Bullet Time, Time-Lapse, InstaFrame Active HDR, Loop Recording, Me Mode 49′ Waterproof, 72MP Photos App with Edit Suite and Effects Invisible Selfie Stick Feature",
    "specs": [
      {
        "label": "Brand",
        "value": "ESA CAM"
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
    ]
  },
  {
    "id": "esa-1190",
    "name": "Nikon Zfc Mirrorless Camera with 16-50mm Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Zfc-Mirrorless-Camera-with-16-50mm-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 2.36m-Dot OLED Electronic Viewfinder 3″ 1.04m-Dot Vari-Angle Touchscreen ISO 100-51200, Up to 11 fps Shooting 209-Point Hybrid AF, Eye Detection AF Time-Lapse Movie Built-In Wi-Fi and Bluetooth USB Type-C Connectivity",
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
    ]
  },
  {
    "id": "esa-1184",
    "name": "Nikon Zfc Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 841.58,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Zfc-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 2.36m-Dot OLED Electronic Viewfinder 3″ 1.04m-Dot Vari-Angle Touchscreen ISO 100-51200, Up to 11 fps Shooting 209-Point Hybrid AF, Eye Detection AF Time-Lapse Movie Built-In Wi-Fi and Bluetooth USB Type-C Connectivity",
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
    ]
  },
  {
    "id": "esa-1178",
    "name": "Nikon Zf Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1742.57,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Zf-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 7 Image Processor UHD 4K 30p Video and Full HD 120p Video AF Subject Recognition with 3D Tracking 5-Axis In-Body Vibration Reduction Focus-Point Stabilization 3.2″ Vari-Angle Touchscreen 96MP High-Res Mode",
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
    ]
  },
  {
    "id": "esa-1172",
    "name": "Nikon Z9 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 5.74,
    "originalPrice": 6.34,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z9-Mirrorless-Camera-1.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format Stacked CMOS Sensor EXPEED 7 Image Processor 8.3K 60p N-RAW, 4.1K 60p ProRes RAW 8K30p and 4K120p Video, 10-Bit Internal Up to 20 fps Raw, 30 fps JPEG Shooting 493-Point AF, AI-Based Subject Detection Blackout-Free Real Live Viewfinder 3.2″ 4-Axis Tilting Touchscreen LCD Vertical Grip, 2x CFexpress Type B Slots 5 GHz Wi-Fi, Bluetooth, and GNSS",
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
    ]
  },
  {
    "id": "esa-1167",
    "name": "Nikon Z8 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z8-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format Stacked CMOS Sensor Lightweight Design, 30% Smaller than Z9 8.3K 60p N-RAW, 4.1K 60p ProRes RAW 8K30p and 4K120p Video, 10-Bit Internal Up to 20 fps Raw, 30 fps JPEG Shooting 493-Point AF, AI-Based Subject Detection Blackout-Free Real Live Viewfinder 3.2″ 4-Axis Tilting Touchscreen LCD CFx Type B & SD Memory Card Slots 5 GHz Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-1161",
    "name": "Nikon Z7 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z7-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 493-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 9 fps Continuous Shooting; ISO 64-25600 CFexpress Type B/XQD Memory Card Slot 8K Time-Lapse Mode; Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-1155",
    "name": "Nikon Z7 II Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z7-II-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "45.7MP FX-Format BSI CMOS Sensor Dual EXPEED 6 Image Processors UHD 4K60 Video; N-Log & 10-Bit HDMI Out 10 fps Cont. Shooting, ISO 64-25600 493-Point Phase-Detect AF System 3.6m-Dot OLED Electronic Viewfinder 3.2″ 2.1m-Dot Tilting Touchscreen LCD 5-Axis In-Body Vibration Reduction Dual Memory Card Slots",
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
    ]
  },
  {
    "id": "esa-1151",
    "name": "Nikon Z6 Mirrorless Camera with Adapter Ftz Mark II",
    "brand": "Nikon",
    "category": "accessories",
    "price": 2099.01,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z6-Mirrorless-Camera-with-Adapter-Ftz-Mark-II-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 273-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 12 fps Shooting; ISO 100-51200 Top-Panel OLED; Wi-Fi and Bluetooth CFexpress Type B/XQD Memory Card Slot",
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
    ]
  },
  {
    "id": "esa-1147",
    "name": "Nikon Z6 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z6-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 273-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 12 fps Shooting; ISO 100-51200 Top-Panel OLED; Wi-Fi and Bluetooth CFexpress Type B/XQD Memory Card Slot",
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
    ]
  },
  {
    "id": "esa-1139",
    "name": "Nikon Z50 Mirrorless Camera with Adapter",
    "brand": "Nikon",
    "category": "accessories",
    "price": 762.38,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z50-Mirrorless-Camera-with-Adapter-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 2.36m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot 180° Tilting Touchscreen ISO 100-51200, Up to 11 fps Shooting 209-Point Hybrid AF, Eye Detection Built-In Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-1131",
    "name": "Nikon Z50 Mirrorless Camera with 16-50mm Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z50-Mirrorless-Camera-with-16-50mm-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 2.36m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot 180° Tilting Touchscreen ISO 100-51200, Up to 11 fps Shooting 209-Point Hybrid AF, Eye Detection Built-In Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-1124",
    "name": "Nikon Z50 Mirrorless Camera Body Only",
    "brand": "Nikon",
    "category": "cameras",
    "price": 613.86,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z50-Mirrorless-Camera-Body-Only-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 2.36m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot 180° Tilting Touchscreen ISO 100-51200, Up to 11 fps Shooting 209-Point Hybrid AF, Eye Detection Built-In Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-1118",
    "name": "Nikon Z30 Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 594.06,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z30-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor UHD 4K30p and Full HD 120p Video Live Stream at 60p, In-Camera Time-Lapse Vlogging-Optimized Design Hybrid AF with Eye and Face Detection 3″ 1.04m-Dot Free-Angle Touchscreen LCD ISO 100-51200, Up to 11 fps Shooting Built-In Stereo Mic, Ext. Mic Compatible Tally Lamp and Dedicated Selfie Controls",
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
    ]
  },
  {
    "id": "esa-1087",
    "name": "Nikon Z6 Mark III Mirrorless Camera with Adapter Ftz II",
    "brand": "Nikon",
    "category": "accessories",
    "price": 2376.24,
    "originalPrice": 2970.3,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z6-Mark-III-Mirrorless-Camera-with-Adapter-Ftz-II-1.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP Partially-Stacked CMOS Sensor EXPEED 7 Image Processor 6K 60p N-RAW, 6K 30p ProRes RAW 4K 120p, Full HD 240p Slow Motion Video Up to 20 fps Raw, 60 fps JPEG Shooting Blackout-Free, 5760k-Dot EVF 493-Point AF, AI-Based Subject Detection 3.2″ 4-Axis Tilting Touchscreen LCD CFexpress Type B & SD Memory Card Slots Camera-to-Cloud Direct Connectivity",
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
    ]
  },
  {
    "id": "esa-1055",
    "name": "Nikon Z6 Mark III Mirrorless Camera",
    "brand": "Nikon",
    "category": "cameras",
    "price": 2158.42,
    "originalPrice": 2772.28,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z6-Mark-III-Mirrorless-Camera-1.png",
    "badge": "SAVE 22%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP Partially-Stacked CMOS Sensor EXPEED 7 Image Processor 6K 60p N-RAW, 6K 30p ProRes RAW 4K 120p, Full HD 240p Slow Motion Video Up to 20 fps Raw, 60 fps JPEG Shooting Blackout-Free, 5760k-Dot EVF 493-Point AF, AI-Based Subject Detection 3.2″ 4-Axis Tilting Touchscreen LCD CFexpress Type B & SD Memory Card Slots Camera-to-Cloud Direct Connectivity",
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
    ]
  },
  {
    "id": "esa-1046",
    "name": "Nikon Z6 II Mirrorless Camera with Adapter Ftz Mark II",
    "brand": "Nikon",
    "category": "accessories",
    "price": 1881.19,
    "originalPrice": 2336.63,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z6-II-Mirrorless-Camera-with-Adapter-Ftz-Mark-II-1.png",
    "badge": "SAVE 19%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor EXPEED 6 Image Processing Engine UHD 4K30 Video; N-Log & 10-Bit HDMI Out 273-Point Phase-Detect AF System Built-In 5-Axis Vibration Reduction 0.80x 3.6m-Dot EVF with NIKKOR Optics 3.2″ 2.1m-Dot Tilting Touchscreen LCD 12 fps Shooting; ISO 100-51200 Top-Panel OLED; Wi-Fi and Bluetooth CFexpress Type B/XQD Memory Card Slot",
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
    ]
  },
  {
    "id": "esa-1039",
    "name": "Nikon Z6 II Mirrorless Camera Body Only",
    "brand": "Nikon",
    "category": "cameras",
    "price": 1782.18,
    "originalPrice": 2118.81,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z6-II-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 16%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.5MP FX-Format BSI CMOS Sensor Dual EXPEED 6 Image Processors UHD 4K30 Video; N-Log & 10-Bit HDMI Out 14 fps Cont. Shooting, ISO 100-51200 273-Point Phase-Detect AF System 3.6m-Dot OLED Electronic Viewfinder 3.2″ 2.1m-Dot Tilting Touchscreen LCD 5-Axis In-Body Vibration Reduction Dual Memory Card Slots",
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
    ]
  },
  {
    "id": "esa-1030",
    "name": "Nikon Z5 Mirrorless Camera with Adapter Ftz Mark II",
    "brand": "Nikon",
    "category": "accessories",
    "price": 1089.11,
    "originalPrice": 1306.93,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z5-Mirrorless-Camera-with-Adapter-Ftz-Mark-II-1.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.3MP FX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 3.6m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot Tilting Touchscreen LCD 5-Axis Sensor-Shift Vibration Reduction ISO 100-51200, Up to 4.5 fps Shooting Built-In Wi-Fi and Bluetooth Dual SD UHS-II Card Slots",
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
    ]
  },
  {
    "id": "esa-998",
    "name": "Nikon Z5 Mirrorless Camera Body With 40mm F/2 Z Lens Kit",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1099.01,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z5-Mirrorless-Camera-Body-With-40mm-F2-Z-Lens-Kit-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.3MP FX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 3.6m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot Tilting Touchscreen LCD 5-Axis Sensor-Shift Vibration Reduction ISO 100-51200, Up to 4.5 fps Shooting Built-In Wi-Fi and Bluetooth Dual SD UHS-II Card Slots",
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
    ]
  },
  {
    "id": "esa-984",
    "name": "Nikon Z5 Mirrorless Camera Body With 24-70mm Z Lens Kit",
    "brand": "Nikon",
    "category": "lenses",
    "price": 1643.56,
    "originalPrice": 1980.2,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z5-Mirrorless-Camera-Body-With-24-70mm-Z-Lens-Kit-1.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.3MP FX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 3.6m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot Tilting Touchscreen LCD 5-Axis Sensor-Shift Vibration Reduction ISO 100-51200, Up to 4.5 fps Shooting Built-In Wi-Fi and Bluetooth Dual SD UHS-II Card Slots",
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
    ]
  },
  {
    "id": "esa-975",
    "name": "Nikon Z5 Mirrorless Camera Body Only",
    "brand": "Nikon",
    "category": "cameras",
    "price": 940.59,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z5-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.3MP FX-Format CMOS Sensor EXPEED 6 Image Processor UHD 4K and Full HD Video Recording 3.6m-Dot OLED Electronic Viewfinder 3.2″ 1.04m-Dot Tilting Touchscreen LCD 5-Axis Sensor-Shift Vibration Reduction ISO 100-51200, Up to 4.5 fps Shooting Built-In Wi-Fi and Bluetooth Dual SD UHS-II Card Slots",
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
    ]
  },
  {
    "id": "esa-968",
    "name": "Nikon Z30 Mirrorless Camera with 16-50mm Lens",
    "brand": "Nikon",
    "category": "lenses",
    "price": 742.57,
    "originalPrice": 831.68,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Nikon-Z30-Mirrorless-Camera-with-16-50mm-Lens-1.png",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.9MP DX-Format CMOS Sensor UHD 4K30p and Full HD 120p Video Live Stream at 60p, In-Camera Time-Lapse Vlogging-Optimized Design Hybrid AF with Eye and Face Detection 3″ 1.04m-Dot Free-Angle Touchscreen LCD ISO 100-51200, Up to 11 fps Shooting Built-In Stereo Mic, Ext. Mic Compatible Tally Lamp and Dedicated Selfie Controls",
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
    ]
  },
  {
    "id": "esa-956",
    "name": "FUJIFILM GFX100 II Medium Format Mirrorless Camera",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 7920.79,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-GFX100-II-Medium-Format-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "102MP 43.8 x 32.9mm BSI CMOS Sensor X-Processor 5 Image Processor 9.44m-Dot EVF 4K60 Video; 10-Bit Out 5-Axis Sensor-Shift Image Stabilization 3.2″ 2.36m-Dot Tilting Touchscreen LCD ISO 80-12800, Up to 8 fps Shooting Multi Aspect Ratios",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-943",
    "name": "FUJIFILM X100V Digital Camera (Silver)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X100V-Digital-Camera-Silver-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 Image Processor Fujinon 23mm f/2 Lens Hybrid 0.52x OVF with 3.69m-Dot OLED EVF 3.0″ 1.62m-Dot Tilting Touchscreen DCI/UHD 4K Video Recording at 30 fps 425-Point Hybrid AF System ISO 160-12800, up to 11-fps Shooting Bluetooth and Wi-Fi Connectivity Film Simulation Modes",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-933",
    "name": "FUJIFILM X100V Digital Camera",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X100V-Digital-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 Image Processor Fujinon 23mm f/2 Lens Hybrid 0.52x OVF with 3.69m-Dot OLED EVF 3.0″ 1.62m-Dot Tilting Touchscreen DCI/UHD 4K Video Recording at 30 fps 425-Point Hybrid AF System ISO 160-12800, up to 11-fps Shooting Bluetooth and Wi-Fi Connectivity Film Simulation Modes",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-926",
    "name": "FUJIFILM X-T5 with 18-55mm Lens (Silver)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2178.22,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T5-with-18-55mm-Lens-Silver-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans CMOS 5 HR BSI Sensor 4K 60p, 6.2K 30p 4:2:2 10-Bit Video 7-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System 3.69m-Dot OLED Electronic Viewfinder 3″ 1.84m-Dot Tilting Touchscreen LCD 20 fps E. Shutter, 15 fps Mech. Shutter 160MP Pixel Shift Multi-Shot Bluetooth and Wi-Fi Connectivity ProRes & Blackmagic RAW via HDMI",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-919",
    "name": "FUJIFILM X-T5 with 18-55mm Lens (Black)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2178.22,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T5-with-18-55mm-Lens-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans CMOS 5 HR BSI Sensor 4K 60p, 6.2K 30p 4:2:2 10-Bit Video 7-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System 3.69m-Dot OLED Electronic Viewfinder 3″ 1.84m-Dot Tilting Touchscreen LCD 20 fps E. Shutter, 15 fps Mech. Shutter 160MP Pixel Shift Multi-Shot Bluetooth and Wi-Fi Connectivity ProRes & Blackmagic RAW via HDMI",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-912",
    "name": "FUJIFILM X-t5 with 16-80mm Lens (Silver)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2178.22,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-t5-with-16-80mm-Lens-Silver-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans CMOS 5 HR BSI Sensor 4K 60p, 6.2K 30p 4:2:2 10-Bit Video 7-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System 3.69m-Dot OLED Electronic Viewfinder 3″ 1.84m-Dot Tilting Touchscreen LCD 20 fps E. Shutter, 15 fps Mech. Shutter 160MP Pixel Shift Multi-Shot Bluetooth and Wi-Fi Connectivity ProRes & Blackmagic RAW via HDMI",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-905",
    "name": "FUJIFILM X-t5 with 16-80mm Lens (Black)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1980.2,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-t5-with-16-80mm-Lens-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans CMOS 5 HR BSI Sensor 4K 60p, 6.2K 30p 4:2:2 10-Bit Video 7-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System 3.69m-Dot OLED Electronic Viewfinder 3″ 1.84m-Dot Tilting Touchscreen LCD 20 fps E. Shutter, 15 fps Mech. Shutter 160MP Pixel Shift Multi-Shot Bluetooth and Wi-Fi Connectivity ProRes & Blackmagic RAW via HDMI",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-898",
    "name": "FUJIFILM X-T5 Mirrorless Camera (Black)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1584.16,
    "originalPrice": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T5-Mirrorless-Camera-Black-1.png",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans CMOS 5 HR BSI Sensor 4K 60p, 6.2K 30p 4:2:2 10-Bit Video 7-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System 3.69m-Dot OLED Electronic Viewfinder 3″ 1.84m-Dot Tilting Touchscreen LCD 20 fps E. Shutter, 15 fps Mech. Shutter 160MP Pixel Shift Multi-Shot Bluetooth and Wi-Fi Connectivity ProRes & Blackmagic RAW via HDMI",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-891",
    "name": "FUJIFILM X-T30 II With XC 15-45mm OIS PZ Lens (Black)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T30-II-With-XC-15-45mm-OIS-PZ-Lens-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 with Quad CPU DCI and UHD 4K30 Video; F-Log Gamma 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Tilting LCD Touchscreen 425-Point Phase-Detection Autofocus Mechanical and Electronic Shutter Extended ISO 80-51200, 30 fps Shooting Bluetooth and Wi-Fi; Sports Finder Mode Ultra-Sonic Vibration Sensor Cleaning",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-879",
    "name": "FUJIFILM X-T30 II with 18-55mm Lens (Silver)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1287.13,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T30-II-with-18-55mm-Lens-Silver-2.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 with Quad CPU DCI and UHD 4K30 Video; F-Log Gamma 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Tilting LCD Touchscreen 425-Point Phase-Detection Autofocus Mechanical and Electronic Shutter Extended ISO 80-51200, 30 fps Shooting Bluetooth and Wi-Fi; Sports Finder Mode Ultra-Sonic Vibration Sensor Cleaning",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-872",
    "name": "FUJIFILM X-T30 II with 18-55mm Lens (Black)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1287.13,
    "originalPrice": 1940.59,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T30-II-with-18-55mm-Lens-Black-1.png",
    "badge": "SAVE 34%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 with Quad CPU DCI and UHD 4K30 Video; F-Log Gamma 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Tilting LCD Touchscreen 425-Point Phase-Detection Autofocus Mechanical and Electronic Shutter Extended ISO 80-51200, 30 fps Shooting Bluetooth and Wi-Fi; Sports Finder Mode Ultra-Sonic Vibration Sensor Cleaning",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-865",
    "name": "FUJIFILM X-S20 with 15-45mm Lens (Black)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1386.14,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-S20-with-15-45mm-Lens-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 5 Image Processor 5-Axis In-Body Image Stabilization 6.2K at 30 fps, 4K at 60 fps 2.36m-Dot 0.62x OLED EVF 3.0″ 1.84m-Dot Vari-Angle Touchscreen 19 Film Simulation Modes ISO 160-12800, up to 8 fps Shooting Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-858",
    "name": "FUJIFILM X-S20 Mirrorless Camera with 18-55mm Lens (Black)",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1584.16,
    "originalPrice": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-S20-Mirrorless-Camera-with-18-55mm-Lens-Black-1.png",
    "badge": "SAVE 6%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 5 Image Processor 5-Axis In-Body Image Stabilization 6.2K at 30 fps, 4K at 60 fps 2.36m-Dot 0.62x OLED EVF 3.0″ 1.84m-Dot Vari-Angle Touchscreen 19 Film Simulation Modes ISO 160-12800, up to 8 fps Shooting Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-851",
    "name": "FUJIFILM X-S20 Mirrorless Camera (Black)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1940.59,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-S20-Mirrorless-Camera-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 5 Image Processor 5-Axis In-Body Image Stabilization 6.2K at 30 fps, 4K at 60 fps 2.36m-Dot 0.62x OLED EVF 3.0″ 1.84m-Dot Vari-Angle Touchscreen 19 Film Simulation Modes ISO 160-12800, up to 8 fps Shooting Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-843",
    "name": "FUJIFILM X-S10 with 18-55mm Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1287.13,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-S10-with-18-55mm-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 Image Processor 5-Axis In-Body Image Stabilization DCI/UHD 4K at 30 fps, Full HD at 240 fps 425-Point Hybrid AF System 2.36m-Dot 0.62x OLED EVF 3.0″ 1.04m-Dot Vari-Angle Touchscreen ISO 160-12800, up to 8 fps Shooting Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-836",
    "name": "FUJIFILM X-S10 Mirrorless Camera",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-S10-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 Image Processor 5-Axis In-Body Image Stabilization DCI/UHD 4K at 30 fps, Full HD at 240 fps 425-Point Hybrid AF System 2.36m-Dot 0.62x OLED EVF 3.0″ 1.04m-Dot Vari-Angle Touchscreen ISO 160-12800, up to 8 fps Shooting Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-827",
    "name": "FUJIFILM X-H2S Mirrorless Camera",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 2336.63,
    "originalPrice": 3564.36,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-H2S-Mirrorless-Camera-1.png",
    "badge": "SAVE 34%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans Stacked BSI Sensor 4K 120p, 6.2K 30p, FHD 240p 10-Bit Video Internal ProRes 422 HQ and F-Log 2 7-Stop In-Body Image Stabilization 5.76m-Dot OLED Electronic Viewfinder 3″ 1.62m-Dot Vari-Angle Touchscreen LCD 40 fps E. Shutter, 15 fps Mech. Shutter 425-Pt. Hybrid AF, AI Subject Detection ProRes & Blackmagic RAW via HDMI CFexpress Type B & SD UHS-II Card Slots",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-818",
    "name": "FUJIFILM X-H2 Mirrorless Camera with 16-80mm Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-H2-Mirrorless-Camera-with-16-80mm-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans BSI Sensor 7-Stop In-Body Image Stabilization 8K 30p, 4K 60p, FHD 240p 10-Bit Video 5.76m-Dot OLED Electronic Viewfinder 160MP Pixel Shift Multi-Shot 20 fps E-Shutter, 15 fps Mech. Shutter CFexpress Type B & SD UHS-II Card Slots ProRes Raw, Blackmagic Raw via HDMI Intelligent Hybrid Autofocus",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-809",
    "name": "FUJIFILM X-H2 Mirrorless Camera",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1980.2,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-H2-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans BSI Sensor 7-Stop In-Body Image Stabilization 8K 30p, 4K 60p, FHD 240p 10-Bit Video 5.76m-Dot OLED Electronic Viewfinder 160MP Pixel Shift Multi-Shot 20 fps E-Shutter, 15 fps Mech. Shutter CFexpress Type B & SD UHS-II Card Slots ProRes Raw, Blackmagic Raw via HDMI Intelligent Hybrid Autofocus",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-782",
    "name": "FUJIFILM GFX 50S II Medium Format Mirrorless Camera With 35-70mm Lens Kit",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 4455.45,
    "originalPrice": 4950.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-GFX-50S-II-Medium-Format-Mirrorless-Camera-With-35-70mm-Lens-Kit-1.png",
    "badge": "SAVE 10%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "51.4MP 43.8 x 32.9mm CMOS Sensor X-Processor 4 Image Processor 3.69m-Dot OLED EVF 3.2″ 2.36m-Dot Tilting Touchscreen LCD 117-Point Contrast-Detection AF System Extended ISO 50-102400, 3 fps Shooting Full HD 1080p Video Recording at 30 fps Multi Aspect Ratio Shooting Film Simulation Modes GF 35-70mm f/4.5-5.6 WR Lens",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-748",
    "name": "FUJIFILM GFX 50S II Medium Format Mirrorless Camera",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 3960.4,
    "originalPrice": 4554.46,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-GFX-50S-II-Medium-Format-Mirrorless-Camera-1.png",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "51.4MP 43.8 x 32.9mm CMOS Sensor X-Processor 4 Image Processor 3.69m-Dot OLED EVF 3.2″ 2.36m-Dot Tilting Touchscreen LCD 117-Point Contrast-Detection AF System Extended ISO 50-102400, 3 fps Shooting Full HD 1080p Video Recording at 30 fps Multi Aspect Ratio Shooting Film Simulation Modes Weather-Sealed Magnesium Alloy Body",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-732",
    "name": "FUJIFILM X100VI Digital Camera (Silver)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X100VI-Digital-Camera-Silver-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40.2MP APS-C X-Trans CMOS 5 HR Sensor X-Processor 5 Image Processor Fujinon 23mm f/2 Lens 35mm Full-Frame Equivalent 6-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System Hybrid 0.66x OVF with 3.69m-Dot OLED EVF 3.0″ 1.62m-Dot Tilting Touchscreen Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-725",
    "name": "FUJIFILM X-T5 Mirrorless Camera (Silver)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1673.27,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T5-Mirrorless-Camera-Silver-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "40MP APS-C X-Trans CMOS 5 HR BSI Sensor 4K 60p, 6.2K 30p 4:2:2 10-Bit Video 7-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System 3.69m-Dot OLED Electronic Viewfinder 3″ 1.84m-Dot Tilting Touchscreen LCD 20 fps E. Shutter, 15 fps Mech. Shutter 160MP Pixel Shift Multi-Shot Bluetooth and Wi-Fi Connectivity ProRes & Blackmagic RAW via HDMI",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-718",
    "name": "FUJIFILM X-T30 II Mirrorless Camera (Black)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 881.19,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T30-II-Mirrorless-Camera-Black-1.png",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 with Quad CPU DCI and UHD 4K30 Video; F-Log Gamma 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Tilting LCD Touchscreen 425-Point Phase-Detection Autofocus Mechanical and Electronic Shutter Extended ISO 80-51200, 30 fps Shooting Bluetooth and Wi-Fi; Sports Finder Mode Ultra-Sonic Vibration Sensor Cleaning",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-711",
    "name": "FUJIFILM X-T30 II Mirrorless Camera (Silver)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 881.19,
    "originalPrice": 1346.53,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-T30-II-Mirrorless-Camera-Silver-1.png",
    "badge": "SAVE 35%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 with Quad CPU DCI and UHD 4K30 Video; F-Log Gamma 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Tilting LCD Touchscreen 425-Point Phase-Detection Autofocus Mechanical and Electronic Shutter Extended ISO 80-51200, 30 fps Shooting Bluetooth and Wi-Fi; Sports Finder Mode Ultra-Sonic Vibration Sensor Cleaning",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-703",
    "name": "FUJIFILM X-S10 XF16-80mm Lens",
    "brand": "Fujifilm",
    "category": "lenses",
    "price": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X-S10-XF16-80mm-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 Image Processor 5-Axis In-Body Image Stabilization DCI/UHD 4K at 30 fps, Full HD at 240 fps 425-Point Hybrid AF System 2.36m-Dot 0.62x OLED EVF 3.0″ 1.04m-Dot Vari-Angle Touchscreen ISO 160-12800, up to 8 fps Shooting Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-688",
    "name": "FUJIFILM X100VI Digital Camera (Black)",
    "brand": "Fujifilm",
    "category": "cameras",
    "price": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/FUJIFILM-X100VI-Digital-Camera-Black-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "40.2MP APS-C X-Trans CMOS 5 HR Sensor X-Processor 5 Image Processor Fujinon 23mm f/2 Lens 35mm Full-Frame Equivalent 6-Stop In-Body Image Stabilization 425-Point Intelligent Hybrid AF System Hybrid 0.66x OVF with 3.69m-Dot OLED EVF 3.0″ 1.62m-Dot Tilting Touchscreen Bluetooth and Wi-Fi Connectivity",
    "specs": [
      {
        "label": "Brand",
        "value": "Fujifilm"
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
    ]
  },
  {
    "id": "esa-678",
    "name": "Sony ZV-1 II Digital Camera with Built-In Lens + Free Sony Grip",
    "brand": "Sony",
    "category": "lenses",
    "price": 950.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-1-II-Digital-Camera-with-Built-In-Lens-Free-Sony-Grip-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "For Vloggers and Content Creators 20.1MP 1″ Exmor RS BSI CMOS Sensor Wide-Angle 18-50mm-Equiv. f/1.8-4 Lens UHD 4K30p Video w/ HLG & S-Log3/2 Gammas 3″ Side Flip-Out Touchscreen LCD Intuitive Touch Focus & Exposure Control Real-Time Tracking & Eye AF Bokeh Switch & Face Priority AE Cinematic Vlog Setting, S&Q Shoot Mode Product Showcase Setting",
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
    ]
  },
  {
    "id": "esa-669",
    "name": "Sony ZV-1 II Digital Camera with Built-In Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-1-II-Digital-Camera-with-Built-In-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "For Vloggers and Content Creators 20.1MP 1″ Exmor RS BSI CMOS Sensor Wide-Angle 18-50mm-Equiv. f/1.8-4 Lens UHD 4K30p Video w/ HLG & S-Log3/2 Gammas 3″ Side Flip-Out Touchscreen LCD Intuitive Touch Focus & Exposure Control Real-Time Tracking & Eye AF Bokeh Switch & Face Priority AE Cinematic Vlog Setting, S&Q Shoot Mode Product Showcase Setting",
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
    ]
  },
  {
    "id": "esa-660",
    "name": "Sony ZV-1 Digital Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 792.08,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-1-Digital-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "20.1MP 1″ Exmor RS BSI CMOS Sensor ZEISS 24-70mm-Equiv. f/1.8-2.8 Lens UHD 4K30p Video w/ HLG & S-Log3/2 Gammas 3.0″ Side Flip-Out Touchscreen LCD Real-Time Tracking & Eye AF Background Defocus & Face Priority AE BIONZ X Image Processor & Front-End LSI Directional 3-Capsule Mic & Mic Jack Multi-Interface Shoe, Built-In ND Filter Product Showcase Setting",
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
    ]
  },
  {
    "id": "esa-652",
    "name": "Sony FX6 Full-Frame Cinema Camera (Body Only)",
    "brand": "Sony",
    "category": "cameras",
    "price": 5504.95,
    "originalPrice": 5940.59,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-FX6-Full-Frame-Cinema-Camera-Body-Only-1.png",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "4K Full-Frame 10.2MP CMOS Exmor R Sensor DCI 4K60p | UHD 4K120 | 1080p240 15+ Stops of Dynamic Range in S-Log 3 EI 1.3x and 2.0x Anamorphic De-Squeeze Compact Form Weighs Less than 2 lb Phase Detection AF/Face Tracking/Eye AF Base 800-12,800 ISO / 320-409,600 Max S-Cinetone, S-Log3, HLG Modes 10-Bit 4:2:2 XAVC-I/16-Bit Raw Output Dual CFexpress Type A/SDXC Card Slots",
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
    ]
  },
  {
    "id": "esa-637",
    "name": "Sony FX3 Full-Frame Cinema Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 3465.35,
    "originalPrice": 3722.77,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-FX3-Full-Frame-Cinema-Camera-1.png",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "12.1MP Full-Frame CMOS Exmor R Sensor UHD 4K up to 120 | 1080p up to 240 Compact Form for Cage-Free Operation 10-Bit 4:2:2 XAVC S-I,16-Bit Raw Output S-Cinetone/S-Log3/HLG, 15+ Stops DR Detachable 2 x XLR/TRS Adapter Handle Phase Detection AF/Face Tracking/Eye AF 80 to 409,600 Expanded ISO Range Dual CFexpress Type A/SDXC Card Slots",
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
    ]
  },
  {
    "id": "esa-626",
    "name": "Sony a7SIII Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 2673.27,
    "originalPrice": 3029.7,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7SIII-Mirrorless-Camera-1.png",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "12MP Full-Frame Exmor R BSI CMOS Sensor UHD 4K 120p Video, 10-Bit 4:2:2 Internal 16-Bit Raw Output, HLG & S-Cinetone 759-Point Fast Hybrid AF 9.44m-Dot QXGA OLED EVF 3.0″ 1.44m-Dot Vari-Angle Touchscreen 5-Axis SteadyShot Image Stabilization Extended ISO 40-409600, 10 fps Shooting Dual CFexpress Type A/SD Card Slots",
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
    ]
  },
  {
    "id": "esa-612",
    "name": "Sony a7R V Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 3267.33,
    "originalPrice": 3663.37,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7R-V-Mirrorless-Camera-1.png",
    "badge": "SAVE 11%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "61MP Full-Frame Exmor R BSI CMOS Sensor BIONZ XR & AI Processing Unit AI-Based Real-Time Tracking AF System 8K 24p, 4K 60p, FHD 120p 10-Bit Video 4K 16-Bit Raw Output; S-Log3/S-Cinetone 9.44m-Dot EVF with 120 fps Refresh Rate 3.2″ 4-Axis Multi-Angle Touchscreen LCD 10 fps Shooting with AF/AE Tracking 8-Stop 5-Axis Image Stabilization Dual CFexpress Type A/SD Card Slots",
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
    ]
  },
  {
    "id": "esa-601",
    "name": "Sony a7R IVA Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 2376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7R-IVA-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "61MP Full-Frame Exmor R BSI CMOS Sensor BIONZ X Image Processor & Front-End LSI 567-Point Phase-Detection AF System UHD 4K30p Video with HLG & S-Log3 Gammas 5.76m-Dot Tru-Finder OLED EVF 3.0″ 2.36m-Dot Tilting Touchscreen LCD Up to 10 fps Shooting, ISO 100-32000 5-Axis SteadyShot INSIDE Stabilization 240MP Pixel Shift Multi Shooting Bluetooth & Wi-Fi, Dual UHS-II SD Slots",
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
    ]
  },
  {
    "id": "esa-590",
    "name": "Sony a7CR Mirrorless Camera (Silver)",
    "brand": "Sony",
    "category": "cameras",
    "price": 3168.32,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7CR-Mirrorless-Camera-Silver-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "61MP Full-Frame Exmor R BSI Sensor BIONZ XR Image Processor Shooting Up to 8 fps, ISO 50-102400 240.8MP Pixel Shift Multi Shooting 10-Bit Full-Frame 4K60p Video S-Log3, S-Gamut3, S-Cinetone, User LUTs 7 Stops of In-Body Image Stabilization 693-Point Phase Detection, 79% Coverage 2.36m-Dot OLED Electronic Viewfinder 3″ 1.03m-Dot Vari-Angle LCD Touchscreen",
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
    ]
  },
  {
    "id": "esa-581",
    "name": "Sony a7CR Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 3168.32,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7CR-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "61MP Full-Frame Exmor R BSI Sensor BIONZ XR Image Processor Shooting Up to 8 fps, ISO 50-102400 240.8MP Pixel Shift Multi Shooting 10-Bit Full-Frame 4K60p Video S-Log3, S-Gamut3, S-Cinetone, User LUTs 7 Stops of In-Body Image Stabilization 693-Point Phase Detection, 79% Coverage 2.36m-Dot OLED Electronic Viewfinder 3″ 1.03m-Dot Vari-Angle LCD Touchscreen",
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
    ]
  },
  {
    "id": "esa-570",
    "name": "Sony a7C Mirrorless Camera (Silver)",
    "brand": "Sony",
    "category": "cameras",
    "price": 1346.53,
    "originalPrice": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7C-Mirrorless-Camera-Silver-1.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame Exmor R BSI Sensor BIONZ X Image Processor UHD 4K30p Video with HLG & S-Log3 Gammas 693-Point Hybrid AF System 2.36m-Dot OLED Electronic Viewfinder 3.0″ 921.6k-Dot Vari-Angle Touchscreen 5-Axis In-Body Image Stabilization Shooting Up to 10 fps, ISO 50-204800 Bluetooth and Wi-Fi Connectivity",
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
    ]
  },
  {
    "id": "esa-562",
    "name": "Sony a7C Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 1346.53,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7C-Mirrorless-Camera-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame Exmor R BSI Sensor BIONZ X Image Processor UHD 4K30p Video with HLG & S-Log3 Gammas 693-Point Hybrid AF System 2.36m-Dot OLED Electronic Viewfinder 3.0″ 921.6k-Dot Vari-Angle Touchscreen 5-Axis In-Body Image Stabilization Shooting Up to 10 fps, ISO 50-204800 Bluetooth and Wi-Fi Connectivity",
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
    ]
  },
  {
    "id": "esa-553",
    "name": "Sony a7C II Mirrorless Camera (Silver)",
    "brand": "Sony",
    "category": "cameras",
    "price": 1801.98,
    "originalPrice": 2079.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7C-II-Mirrorless-Camera-Silver-1.png",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "33MP Full-Frame Exmor R BSI Sensor BIONZ XR Image Processor Shooting Up to 10 fps, ISO 50-204800 10-Bit Full-Frame 4K30p Video S-Log3, S-Gamut3, S-Cinetone, User LUTs 7 Stops of In-Body Image Stabilization 759-Point Phase Detection, 94% Coverage 2.36m-Dot OLED Electronic Viewfinder 3″ 1.03m-Dot Vari-Angle LCD Touchscreen Internal Mic + Inputs, USB Streaming",
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
    ]
  },
  {
    "id": "esa-544",
    "name": "Sony a7C II Mirrorless Camera (Black)",
    "brand": "Sony",
    "category": "cameras",
    "price": 1801.98,
    "originalPrice": 2079.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7C-II-Mirrorless-Camera-Black-1.png",
    "badge": "SAVE 13%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "33MP Full-Frame Exmor R BSI Sensor BIONZ XR Image Processor Shooting Up to 10 fps, ISO 50-204800 10-Bit Full-Frame 4K30p Video S-Log3, S-Gamut3, S-Cinetone, User LUTs 7 Stops of In-Body Image Stabilization 759-Point Phase Detection, 94% Coverage 2.36m-Dot OLED Electronic Viewfinder 3″ 1.03m-Dot Vari-Angle LCD Touchscreen Internal Mic + Inputs, USB Streaming",
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
    ]
  },
  {
    "id": "esa-534",
    "name": "Sony a7 III Mirrorless Camera Body Only",
    "brand": "Sony",
    "category": "cameras",
    "price": 1287.13,
    "originalPrice": 1465.35,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7-III-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24MP Full-Frame Exmor R BSI CMOS Sensor BIONZ X Image Processor & Front-End LSI 693-Point Hybrid AF System UHD 4K30p Video with HLG & S-Log3 Gammas 2.36m-Dot Tru-Finder OLED EVF 3.0″ 922k-Dot Tilting Touchscreen LCD 5-Axis SteadyShot INSIDE Stabilization ISO 204800 and 10 fps Shooting Built-In Wi-Fi and NFC, Dual SD Slots USB Type-C Port, Weather-Sealed Design",
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
    ]
  },
  {
    "id": "esa-522",
    "name": "Sony a6700 Mirrorless Camera with 16-50mm Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 1584.16,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a6700-Mirrorless-Camera-with-16-50mm-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26MP Exmor R APS-C BSI CMOS Sensor BIONZ XR Image Processor UHD 4K 120p / FHD 240p / 10-Bit 4:2:2 Up to 11-fps Shooting, ISO 100-32000 5-Axis Pixel-Level Image Stabilization Real-Time Tracking AF for Stills & Video 759-Point Phase Detection, 93% Coverage S-Log3, S-Gamut3, S-Cinetone, User LUTs Internal Mic + Inputs, USB Streaming 3″ 1.03m-Dot Vari-Angle LCD Touchscreen",
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
    ]
  },
  {
    "id": "esa-511",
    "name": "Sony a6700 Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 1485.15,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a6700-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "26MP Exmor R APS-C BSI CMOS Sensor BIONZ XR Image Processor UHD 4K 120p / FHD 240p / 10-Bit 4:2:2 Up to 11-fps Shooting, ISO 100-32000 5-Axis Pixel-Level Image Stabilization Real-Time Tracking AF for Stills & Video 759-Point Phase Detection, 93% Coverage S-Log3, S-Gamut3, S-Cinetone, User LUTs Internal Mic + Inputs, USB Streaming 3″ 1.03m-Dot Vari-Angle LCD Touchscreen",
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
    ]
  },
  {
    "id": "esa-497",
    "name": "Sony a6400 Mirrorless Camera with 16-50mm Lens",
    "brand": "Sony",
    "category": "lenses",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a6400-Mirrorless-Camera-with-16-50mm-Lens-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.2MP APS-C Exmor CMOS Sensor BIONZ X Image Processor Real-Time Eye AF & Real-Time Tracking XGA Tru-Finder 2.36m-Dot OLED EVF 3.0″ 921.6k-Dot 180° Tilting Touchscreen Internal UHD 4K Video, S-Log3, and HLG S&Q Motion in Full HD from 1-120 fps Built-In Wi-Fi with NFC 425 Phase- & Contrast-Detect AF Points Up to 11 fps Shooting and ISO 102400",
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
    ]
  },
  {
    "id": "esa-482",
    "name": "Sony a6400 Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 792.08,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a6400-Mirrorless-Camera-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.2MP APS-C Exmor CMOS Sensor BIONZ X Image Processor Real-Time Eye AF & Real-Time Tracking XGA Tru-Finder 2.36m-Dot OLED EVF 3.0″ 921.6k-Dot 180° Tilting Touchscreen Internal UHD 4K Video, S-Log3, and HLG S&Q Motion in Full HD from 1-120 fps Built-In Wi-Fi with NFC 425 Phase- & Contrast-Detect AF Points Up to 11 fps Shooting and ISO 102400",
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
    ]
  },
  {
    "id": "esa-472",
    "name": "Sony ZV-E10 Mirrorless Camera + Kit Lens 16-50mm With Sony Grip",
    "brand": "Sony",
    "category": "lenses",
    "price": 861.39,
    "originalPrice": 930.69,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-E10-Mirrorless-Camera-Kit-Lens-16-50mm-With-Sony-Grip-1.png",
    "badge": "SAVE 7%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP APS-C Exmor CMOS Sensor UHD 4K30p and Full HD 120p Video 3.0″ Side Flip-Out Touchscreen LCD 425-Point Fast Hybrid AF Up to 11-fps Shooting, ISO 100-32000 Real-Time Eye AF and Tracking Background Defocus & Face Priority AE Directional 3-Capsule Mic and Windscreen Headphone and Microphone Ports",
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
    ]
  },
  {
    "id": "esa-462",
    "name": "Sony ZV-E10 Mirrorless Camera + Kit Lens 16-50mm",
    "brand": "Sony",
    "category": "lenses",
    "price": 782.18,
    "originalPrice": 792.08,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-E10-Mirrorless-Camera-Kit-Lens-16-50mm-1.png",
    "badge": "SAVE 1%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP APS-C Exmor CMOS Sensor UHD 4K30p and Full HD 120p Video 3.0″ Side Flip-Out Touchscreen LCD 425-Point Fast Hybrid AF Up to 11-fps Shooting, ISO 100-32000 Real-Time Eye AF and Tracking Background Defocus & Face Priority AE Directional 3-Capsule Mic and Windscreen Headphone and Microphone Ports",
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
    ]
  },
  {
    "id": "esa-425",
    "name": "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens (Black)",
    "brand": "Sony",
    "category": "lenses",
    "price": 1128.71,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-E10-II-Mirrorless-Camera-with-16-50mm-Lens-Black-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26MP APS-C Exmor R CMOS Sensor UHD 4K60p and Full HD 120p Video 3.0″ Touchscreen LCD, Vertical Support 759-Point Fast Hybrid Phase Detection Up to 11-fps Shooting, ISO 100-32000 Real-Time Eye AF and Tracking Background Defocus, Product Showcase Focus Breathing Compensation Directional 3-Capsule Mic and Windscreen Headphone and Microphone Ports",
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
    ]
  },
  {
    "id": "esa-387",
    "name": "Sony ZV-E10 II Mirrorless Camera + Kit Lens 16-50mm With Sony Grip",
    "brand": "Sony",
    "category": "lenses",
    "price": 1168.32,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-E10-II-Mirrorless-Camera-Kit-Lens-16-50mm-With-Sony-Grip-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26MP APS-C Exmor R CMOS Sensor UHD 4K60p and Full HD 120p Video 3.0″ Touchscreen LCD, Vertical Support 759-Point Fast Hybrid Phase Detection Up to 11-fps Shooting, ISO 100-32000 Real-Time Eye AF and Tracking Background Defocus, Product Showcase Focus Breathing Compensation Directional 3-Capsule Mic and Windscreen Headphone and Microphone Ports",
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
    ]
  },
  {
    "id": "esa-380",
    "name": "Sony ZV-E1 Mirrorless Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 1762.38,
    "originalPrice": 1920.79,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-ZV-E1-Mirrorless-Camera-1.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Designed for Content Creators 12MP Full-Frame Exmor R CMOS Sensor UHD 4K 120p / FHD 240p / 10-Bit 4:2:2 5-Axis SteadyShot Image Stabilization 15+ Stops Dynamic Range, AI Auto-Framing Multi-Face Recognition, Time-Lapse Product Showcase Setting S-Log3, S-Gamut3, S-Cinetone, User LUTs Extended ISO 80-409,600 Internal Mic + Inputs, USB Streaming",
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
    ]
  },
  {
    "id": "esa-371",
    "name": "Sony FX30 Digital Cinema Camera",
    "brand": "Sony",
    "category": "cameras",
    "price": 1742.57,
    "originalPrice": 2079.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-FX30-Digital-Cinema-Camera-1.png",
    "badge": "SAVE 16%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26.1MP APS-C BSI CMOS Sensor UHD 4K up to 120p Compact Form Designed for Cage-Free Use 10-Bit 4:2:2 XAVC S-I,16-Bit Raw Output S-Cinetone/S-Log3/HLG, 14+ Stops DR Phase Detection AF/Face Tracking/Eye AF Standard ISO 100-32000 | Dual Base ISO Dual CFexpress Type A/SDXC Card Slots User LUTs & Timecode Sync Support",
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
    ]
  },
  {
    "id": "esa-363",
    "name": "Sony a7 IV Mirrorless Camera with Gift (Sony A7 IV Tilta Cage TA-T30-A-B)",
    "brand": "Sony",
    "category": "accessories",
    "price": 2099.01,
    "originalPrice": 2217.82,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7-IV-Mirrorless-Camera-With-Gift-Sony-A7-IV-Tilta-Cage-TA-T30-A-B-1.png",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 33MP Full-Frame Exmor R CMOS BSI Sensor Up to 10 fps Shooting, ISO 100-51200 4K 60p Video in 10-Bit, S-Cinetone 3.68m-Dot EVF with 120 fps Refresh Rate 3″ 1.03m-Dot Vari-Angle Touchscreen LCD 759-Pt. Fast Hybrid AF, Real-time Eye AF Focus Breathing Compensation 5-Axis Steady Shot Image Stabilization Creative Looks and Soft Skin Effect 4K 15p UVC/UAC Streaming via USB Type-C",
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
    ]
  },
  {
    "id": "esa-356",
    "name": "Sony a7 IV Mirrorless Camera With Gift (Black Cover – K&#038;F Concept FZ100 Battery &#038; Charger)",
    "brand": "Sony",
    "category": "accessories",
    "price": 2079.21,
    "originalPrice": 2138.61,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7-IV-Mirrorless-Camera-With-Gift-Black-Cover-–-KF-Concept-FZ100-Battery-Charger-1.png",
    "badge": "SAVE 3%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 33MP Full-Frame Exmor R CMOS BSI Sensor Up to 10 fps Shooting, ISO 100-51200 4K 60p Video in 10-Bit, S-Cinetone 3.68m-Dot EVF with 120 fps Refresh Rate 3″ 1.03m-Dot Vari-Angle Touchscreen LCD 759-Pt. Fast Hybrid AF, Real-time Eye AF Focus Breathing Compensation 5-Axis SteadyShot Image Stabilization Creative Looks and Soft Skin Effect 4K 15p UVC/UAC Streaming via USB Type-C",
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
    ]
  },
  {
    "id": "esa-349",
    "name": "Sony a7 IV Mirrorless Camera Body Only",
    "brand": "Sony",
    "category": "cameras",
    "price": 1980.2,
    "originalPrice": 2079.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/06/Sony-a7-IV-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Key Features 33MP Full-Frame Exmor R CMOS BSI Sensor Up to 10 fps Shooting, ISO 100-51200 4K 60p Video in 10-Bit, S-Cinetone 3.68m-Dot EVF with 120 fps Refresh Rate 3″ 1.03m-Dot Vari-Angle Touchscreen LCD 759-Pt. Fast Hybrid AF, Real-time Eye AF Focus Breathing Compensation 5-Axis SteadyShot Image Stabilization Creative Looks and Soft Skin Effect 4K 15p UVC/UAC Streaming via USB Type-C",
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
    ]
  },
  {
    "id": "esa-345",
    "name": "Canon EOS 2000D DSLR Camera with 18-55mm Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 435.64,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-2000D-DSLR-Camera-with-18-55mm-Lens-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.1MP APS-C CMOS Sensor DIGIC 4+ Image Processor 3.0″ 920k-Dot LCD Monitor Full HD 1080/30p Video Recording 9-Point AF with Center Cross-Type Point ISO 100-6400, Up to 3 fps Shooting Built-In Wi-Fi with NFC Scene Intelligent Auto Mode Creative Filters and Creative Auto Modes EF-S 18-55mm f/3.5-5.6 IS II Lens",
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
    ]
  },
  {
    "id": "esa-338",
    "name": "Canon EOS 250D DSLR Camera with 18-55mm III Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 633.66,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-250D-DSLR-Camera-with-18-55mm-III-Lens-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.1MP APS-C CMOS Sensor DIGIC 8 Image Processor 3.0″ 1.04m-Dot Vari-Angle Touchscreen UHD 4K24p Video and 4K Time-Lapse Movie 9-Point AF System; Dual Pixel CMOS AF ISO 100-25600, Up to 5 fps Shooting Built-In Wi-Fi and Bluetooth EF-S 18-55mm f/3.5-5.6 III Lens",
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
    ]
  },
  {
    "id": "esa-333",
    "name": "Canon EOS 250D with EF-S 18-55mm IS STM Kit",
    "brand": "Canon",
    "category": "accessories",
    "price": 554.46,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-250D-with-EF-S-18-55mm-IS-STM-Kit-1.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.1MP APS-C CMOS Sensor DIGIC 8 Image Processor 3.0″ 1.04m-Dot Vari-Angle Touchscreen UHD 4K24p Video and 4K Time-Lapse Movie 9-Point AF System; Dual Pixel CMOS AF ISO 100-25600, Up to 5 fps Shooting Built-In Wi-Fi and Bluetooth EF-S 18-55mm f/4-5.6 IS STM Lens",
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
    ]
  },
  {
    "id": "esa-330",
    "name": "Canon EOS 850D with EF-S 18-135mm IS STM Kit",
    "brand": "Canon",
    "category": "accessories",
    "price": 950.5,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-850D-with-EF-S-18-135mm-IS-STM-Kit-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.1MP APS-C CMOS Sensor DIGIC 8 Image Processor 3.0″ 1.04m-Dot Vari-Angle Touchscreen UHD 4K24p Video and 4K Time-Lapse Movie 9-Point AF System; Dual Pixel CMOS AF ISO 100-25600, Up to 5 fps Shooting Built-In Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-326",
    "name": "Canon EOS 850D with EF-S 18-55mm IS STM Kit",
    "brand": "Canon",
    "category": "accessories",
    "price": 742.57,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-850D-with-EF-S-18-55mm-IS-STM-Kit-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.1MP APS-C CMOS Sensor DIGIC 8 Image Processor 3.0″ 1.04m-Dot Vari-Angle Touchscreen UHD 4K24p Video and 4K Time-Lapse Movie 9-Point AF System; Dual Pixel CMOS AF ISO 100-25600, Up to 5 fps Shooting Built-In Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-308",
    "name": "Canon EOS R Mirrorless Camera With Adapter",
    "brand": "Canon",
    "category": "accessories",
    "price": 1623.76,
    "originalPrice": 1782.18,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R-Mirrorless-Camera-With-Adapter-1.png",
    "badge": "SAVE 9%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "30.3MP Full-Frame CMOS Sensor DIGIC 8 Image Processor UHD 4K30 Video; C-Log & 10-Bit HDMI Out Dual Pixel CMOS AF, 5655 AF Points 3.69m-Dot OLED Electronic Viewfinder 3.15″ 2.1m-Dot Swivel Touchscreen LCD Expanded ISO 50-102400, 8 fps Shooting Wi-Fi and Bluetooth, SD UHS-II Card Slot Multi-Function Bar, Dual Pixel RAW",
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
    ]
  },
  {
    "id": "esa-289",
    "name": "Canon EOS R Mirrorless Camera Body Only",
    "brand": "Canon",
    "category": "cameras",
    "price": 1485.15,
    "originalPrice": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "30.3MP Full-Frame CMOS Sensor DIGIC 8 Image Processor UHD 4K30 Video; C-Log & 10-Bit HDMI Out Dual Pixel CMOS AF, 5655 AF Points 3.69m-Dot OLED Electronic Viewfinder 3.15″ 2.1m-Dot Swivel Touchscreen LCD Expanded ISO 50-102400, 8 fps Shooting Wi-Fi and Bluetooth, SD UHS-II Card Slot Multi-Function Bar, Dual Pixel RAW",
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
    ]
  },
  {
    "id": "esa-281",
    "name": "Canon EOS R7 Mirrorless Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R7-Mirrorless-Camera-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "32.5MP APS-C CMOS Sensor Dual Pixel CMOS AF II 4K60 10-Bit Video, HDR-PQ & C-Log 3 30 fps E. Shutter, 15 fps Mech. Shutter 2.36m-Dot OLED EVF 1.6m-Dot Vari-Angle Touchscreen LCD Sensor-Shift 5-Axis Image Stabilization Dual UHS-II Memory Card Slots Multi-Function Shoe, Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-274",
    "name": "Canon EOS R8 Mirrorless Camera with RF 24-50mm f/4.5-6.3 IS STM Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 1544.55,
    "originalPrice": 1683.17,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R8-Mirrorless-Camera-with-RF-24-50mm-f4.5-6.3-IS-STM-Lens-2.png",
    "badge": "SAVE 8%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame CMOS Sensor 4K60p 10-Bit Internal Video, Canon Log 3 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Vari-Angle Touchscreen Dual Pixel CMOS AF II 40 fps Electronic Shutter Movie Digital IS Vertical Movie Mode Microphone Input, Headphone Output Multi-Function Shoe, Wi-Fi & Bluetooth",
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
    ]
  },
  {
    "id": "esa-253",
    "name": "Canon EOS R5 Mirrorless Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 2514.85,
    "originalPrice": 2970.3,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R5-Mirrorless-Camera-1.png",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "45MP Full-Frame CMOS Sensor DIGIC X Image Processor 8K30 Raw and 4K120 10-Bit Internal Video 400MP In-Camera Files with No Software Sensor-Shift 5-Axis Image Stabilization 12 fps Mech. Shutter, 20 fps E. Shutter Dual Pixel CMOS AF II with 1053 Points 3.2″ Vari-Angle Touchscreen LCD Subject Tracking with Deep Learning CFexpress & SD UHS-II Memory Card Slots",
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
    ]
  },
  {
    "id": "esa-242",
    "name": "Canon EOS R5 C Mirrorless Cinema Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 2970.3,
    "originalPrice": 3366.34,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R5-C-Mirrorless-Cinema-Camera-1.png",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "Two Cameras in One Body: Photo + Cinema 45MP Stills, Full-Frame 8K CMOS Sensor Photo/Video Switch Changes Settings Menu JPEG/C-RAW, 12-Bit Cinema RAW Light Dual Pixel CMOS AF with Eye Detection CFexpress Type-B and SD UHS-II Slots Dual-Slot Record, Unlimited Record Time Timecode DIN Port, Multi-Function Shoe 4-Channel Audio Record with XLR Adapter 13 Reassignable Buttons",
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
    ]
  },
  {
    "id": "esa-236",
    "name": "Canon EOS R6 Mirrorless Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 1653.47,
    "originalPrice": 2475.25,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R6-Mirrorless-Camera-1.png",
    "badge": "SAVE 33%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "20MP Full-Frame CMOS Sensor DIGIC X Image Processor 4K60p and FHD 120p 10-Bit Internal Video Sensor-Shift 5-Axis Image Stabilization 12 fps Mech. Shutter, 20 fps E. Shutter Dual Pixel CMOS AF II with 1053 Points 0.5″ 3.69m-Dot OLED EVF 3″ 1.62m-Dot Vari-Angle Touchscreen LCD Subject Tracking with Deep Learning Dual SD UHS-II Memory Card Slots",
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
    ]
  },
  {
    "id": "esa-225",
    "name": "Canon EOS R6 Mark II Mirrorless Camera with 24-105mm f/4-7.1 Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 2178.22,
    "originalPrice": 2475.25,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R6-Mark-II-Mirrorless-Camera-with-24-105mm-f4-7.1-Lens-2.png",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame CMOS Sensor 4K60 10-Bit Internal Video, C-Log 3 External 6K ProRes RAW Recording Dual Pixel CMOS AF II 12 fps Mech. Shutter, 40 fps E. Shutter Sensor-Shift 5-Axis Image Stabilization 3.69m-Dot OLED EVF 3″ 1.62m-Dot Vari-Angle Touchscreen LCD Dual UHS-II Memory Card Slots Multi-Function Shoe, Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-218",
    "name": "Canon PowerShot V10 Vlog Camera (Silver)",
    "brand": "Canon",
    "category": "cameras",
    "price": 376.24,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-PowerShot-V10-Vlog-Camera-Silver-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "For Vlogging and Live Streaming 20.9MP 1″ CMOS Sensor UHD 4K up to 29.97 fps Full HD up to 59.94 fps 19mm Equivalent Wide-Angle Lens Web Camera Compatible with UVC Support 460,000-Dot 2″ Touchscreen LCD Wi-Fi & Bluetooth Connectivity Vertical Capture Capable Built-In 30° Stand",
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
    ]
  },
  {
    "id": "esa-211",
    "name": "Canon EOS M50 Mark II Mirrorless Camera with 15-45mm Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 693.07,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-M50-Mark-II-Mirrorless-Camera-with-15-45mm-Lens-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.1MP APS-C CMOS Sensor DIGIC 8 Image Processor UHD 4K and HD 720p120 Video Recording Dual Pixel CMOS AF with Eye Detect AF 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.04m-Dot Vari-Angle Touchscreen Wi-Fi and Bluetooth; Webcam Capability Extended ISO 51200, 10 fps Shooting Combination 5-Axis Image Stabilization EF-M 15-45mm f/3.5-6.3 IS STM Lens",
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
    ]
  },
  {
    "id": "esa-186",
    "name": "Canon EOS R100 Mirrorless Camera with 18-45mm Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 594.06,
    "originalPrice": 693.07,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R100-Mirrorless-Camera-with-18-45mm-Lens-1.png",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP APS-C CMOS Sensor DIGIC 8 Image Processor 4K 24p Video with Crop, Full HD 60p Dual Pixel CMOS AF with 143 AF Zones 6.5 fps Electronic Shutter 2.36m-Dot OLED EVF 3″ 1.04m-Dot LCD Screen Wi-Fi and Bluetooth with SD Card Slot RF-S 18-45mm f/4.5-6.3 IS STM Lens",
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
    ]
  },
  {
    "id": "esa-175",
    "name": "Canon EOS R50 Mirrorless Camera with 18-45mm Lens (Black)",
    "brand": "Canon",
    "category": "lenses",
    "price": 742.57,
    "originalPrice": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R50-Mirrorless-Camera-with-18-45mm-Lens-Black-1.png",
    "badge": "SAVE 17%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "24.2MP APS-C CMOS Sensor DIGIC X Image Processor UHD 4K 30p Video Recording Dual Pixel CMOS AF II with 651 Points 2.36m-Dot Electronic Viewfinder 3.0″ 1.62m-Dot Vari-Angle Touchscreen 15 fps Electronic Shutter Movie for Close-Up Demos Mode Vertical Movie Mode RF-S 18-45mm f/4.5-6.3 IS STM Lens",
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
    ]
  },
  {
    "id": "esa-159",
    "name": "Canon EOS R10 Mirrorless Camera with 18-45mm Lens",
    "brand": "Canon",
    "category": "lenses",
    "price": 990.1,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R10-Mirrorless-Camera-with-18-45mm-Lens-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP APS-C CMOS Sensor Dual Pixel CMOS AF II 4K30 Video, 4K60 with Crop; HDR-PQ 23 fps E. Shutter, 15 fps Mech. Shutter 2.36m-Dot OLED EVF 1.04m-Dot Vari-Angle Touchscreen LCD Multi-Function Shoe, Wi-Fi and Bluetooth RF-S 18-150mm f/3.5-6.3 IS STM Lens",
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
    ]
  },
  {
    "id": "esa-135",
    "name": "Canon EOS RP Mirrorless Camera With Adapter",
    "brand": "Canon",
    "category": "accessories",
    "price": 891.09,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-RP-Mirrorless-Camera-With-Adapter-1.png",
    "badge": "In Stock",
    "isBestSeller": false,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26.2MP Full-Frame CMOS Sensor DIGIC 8 Image Processor UHD 4K and Full HD 1080 Video 2.36m-Dot OLED Electronic Viewfinder 3″ 1.04m-Dot Vari-Angle Touchscreen LCD Dual Pixel CMOS AF, 4779 AF Points ISO 100-40000, Up to 5 fps Shooting Wi-Fi and Bluetooth Connectivity",
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
    ]
  },
  {
    "id": "esa-127",
    "name": "Canon EOS R8 Mirrorless Camera with Adapter",
    "brand": "Canon",
    "category": "accessories",
    "price": 1247.52,
    "originalPrice": 1316.83,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R8-Mirrorless-Camera-With-Adapter-1.png",
    "badge": "SAVE 5%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame CMOS Sensor 4K60p 10-Bit Internal Video, Canon Log 3 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Vari-Angle Touchscreen Dual Pixel CMOS AF II 40 fps Electronic Shutter Movie Digital IS Vertical Movie Mode Microphone Input, Headphone Output Multi-Function Shoe, Wi-Fi & Bluetooth",
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
    ]
  },
  {
    "id": "esa-119",
    "name": "Canon EOS R8 Mirrorless Camera Body Only",
    "brand": "Canon",
    "category": "cameras",
    "price": 1128.71,
    "originalPrice": 1287.13,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R8-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 12%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame CMOS Sensor 4K60p 10-Bit Internal Video, Canon Log 3 2.36m-Dot OLED Electronic Viewfinder 3.0″ 1.62m-Dot Vari-Angle Touchscreen Dual Pixel CMOS AF II 40 fps Electronic Shutter Movie Digital IS Vertical Movie Mode Microphone Input, Headphone Output Multi-Function Shoe, Wi-Fi & Bluetooth",
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
    ]
  },
  {
    "id": "esa-108",
    "name": "Canon EOS R6 Mark II Mirrorless Camera With Adapter",
    "brand": "Canon",
    "category": "accessories",
    "price": 1881.17,
    "originalPrice": 2178.22,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R6-Mark-II-Mirrorless-Camera-With-Adapter-1.png",
    "badge": "SAVE 14%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame CMOS Sensor 4K60 10-Bit Internal Video, C-Log 3 External 6K ProRes RAW Recording Dual Pixel CMOS AF II 12 fps Mech. Shutter, 40 fps E. Shutter Sensor-Shift 5-Axis Image Stabilization 3.69m-Dot OLED EVF 3″ 1.62m-Dot Vari-Angle Touchscreen LCD Dual UHS-II Memory Card Slots Multi-Function Shoe, Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-77",
    "name": "Canon EOS R6 Mark II Mirrorless Camera Body Only",
    "brand": "Canon",
    "category": "cameras",
    "price": 1760.16,
    "originalPrice": 2079.21,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R6-Mark-II-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 15%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "24.2MP Full-Frame CMOS Sensor 4K60 10-Bit Internal Video, C-Log 3 External 6K ProRes RAW Recording Dual Pixel CMOS AF II 12 fps Mech. Shutter, 40 fps E. Shutter Sensor-Shift 5-Axis Image Stabilization 3.69m-Dot OLED EVF 3″ 1.62m-Dot Vari-Angle Touchscreen LCD Dual UHS-II Memory Card Slots Multi-Function Shoe, Wi-Fi and Bluetooth",
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
    ]
  },
  {
    "id": "esa-72",
    "name": "Canon EOS RP Mirrorless Camera Body Only",
    "brand": "Canon",
    "category": "cameras",
    "price": 772.28,
    "originalPrice": 1089.11,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-RP-Mirrorless-Camera-Body-Only-1.png",
    "badge": "SAVE 29%",
    "isBestSeller": true,
    "stockStatus": "in-stock",
    "stockCount": 5,
    "shortDescription": "26.2MP Full-Frame CMOS Sensor DIGIC 8 Image Processor UHD 4K and Full HD 1080 Video 2.36m-Dot OLED Electronic Viewfinder 3″ 1.04m-Dot Vari-Angle Touchscreen LCD Dual Pixel CMOS AF, 4779 AF Points ISO 100-40000, Up to 5 fps Shooting Wi-Fi and Bluetooth Connectivity",
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
    ]
  },
  {
    "id": "esa-69",
    "name": "Canon Zoemini-S 8MP Matt Black Instant Camera Colour Photo Printer",
    "brand": "Canon",
    "category": "cameras",
    "price": 59.41,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/1-Canon-Zoemini-S-8MP-Matt-Black-Instant-Camera-Colour-Photo-Printer.png",
    "badge": "Pre-Order",
    "isBestSeller": false,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "High-end professional cinema and photography gear.",
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
    ]
  },
  {
    "id": "esa-46",
    "name": "Canon EOS R5 Mark II Mirrorless Camera",
    "brand": "Canon",
    "category": "cameras",
    "price": 3663.37,
    "originalPrice": 4554.46,
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://esacamstore.com/wp-content/uploads/2025/05/Canon-EOS-R5-Mark-II-Mirrorless-Camera-1.png",
    "badge": "SAVE 20%",
    "isBestSeller": true,
    "stockStatus": "pre-order",
    "stockCount": 5,
    "shortDescription": "Canon R5 Mark II Overview The Do-It-All Camera for Multimedia Professionals Boasting enough horsepower to allow Canon‘s highest resolution mirrorless sensor to shoot a speedy 30 fps and capture 8K60p raw video, the EOS R5 Mark II Mirrorless Camera is the multimedia professional’s solution for versatility, image quality, and intelligence. An all-new 45MP sensor’s stacked, back-illuminated design joins a brand new processor to provide upgrades in nearly every category, creating a do-it-all camera that gets the job done. Key Features 45MP Full-Frame Stacked BSI CMOS Sensor DIGIC Accelerator Processing Dual Pixel Intelligent AF, Eye Control 8K 60 Raw/4K 60 SRAW/4K 120 10-Bit Video Up to 30 fps, Pre-Continuous Shoot Mode 5.76m-Dot EVF with OVF Sim. View Assist 3.2″ Vari-Angle Touchscreen LCD In-Camera Upscaling to 179MP CFexpress & SD UHS-II Memory Card Slots Wi-Fi 6E / Wi-Fi 6 Support",
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
    ]
  }
];
