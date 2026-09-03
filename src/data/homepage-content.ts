export interface HeroSlideContent {
  id: string;
  productId?: string;
  badge: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  specs: { label: string; value: string }[];
}


export interface HeroSectionContent {
  slides: HeroSlideContent[];
}

export interface HeaderAnnouncementContent {
  announcementText: string;
  courierText: string;
  courierLink: string;
}

export interface BestSellersContent {
  badge: string;
  title: string;
  subtitle: string;
}

export interface StudioStageContent {
  badge: string;
  title: string;
  projectTitle: string;
  clientName: string;
  directorName: string;
  formatBadge: string;
  image: string;
  resolution: string;
  frameRate: string;
  iso: string;
  shutterAngle: string;
  colorProfile: string;
  featuredProductId?: string;
  gearRole: string;
  gearName: string;
  gearSetting: string;
  gearPrice: number;
}


export interface StylesCollageContent {
  badge: string;
  title: string;
  description: string;
  primaryImage: string;
  secondaryImage: string;
  lensName: string;
  lensRating: string;
  lensReviews: string;
  lensPrice: number;
  lensImage: string;
  ctaText: string;
  ctaLink: string;
}

export interface EditorialBannerContent {
  headerTag: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
}

export interface FooterContent {
  tagline: string;
  hotline: string;
  email: string;
  address: string;
  copyright: string;
  instagramUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  whatsappNumber: string;
}

export interface HomepageContentState {
  announcement: HeaderAnnouncementContent;
  hero: HeroSectionContent;
  bestSellers: BestSellersContent;
  studioStage: StudioStageContent;
  stylesCollage: StylesCollageContent;
  editorial: EditorialBannerContent;
  footer: FooterContent;
}

export const DEFAULT_HOMEPAGE_CONTENT: HomepageContentState = {
  announcement: {
    announcementText: "OFFICIAL AUTHORIZED CINEMA & OPTICS DISTRIBUTOR",
    courierText: "VIP White-Glove Courier across Egypt",
    courierLink: "/store",
  },
  hero: {
    slides: [
      {
        id: "slide-1",
        productId: "sony-fx3",
        badge: "FLAGSHIP CINEMA SYSTEM",
        tagline: "AT THE HEART OF THE IMAGE",
        headline: "READY. ACTION.",
        subheadline: "8K 60P INTERNAL RAW",
        description:
          "Engineered for relentless creators. Uncompressed 12-bit N-RAW in-camera recording with full-frame stacked CMOS imaging power.",
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=85",
        primaryCtaText: "Explore Cinema Store",
        primaryCtaLink: "/store",
        secondaryCtaText: "Build Master Rig",
        secondaryCtaLink: "/store",
        specs: [
          { label: "Resolution", value: "8.3K / 60p RAW" },
          { label: "Sensor", value: "45.7MP Stacked" },
          { label: "Stabilization", value: "6.0-Stop VR" },
          { label: "Autofocus", value: "Deep Learning AF" },
        ],
      },
      {
        id: "slide-2",
        productId: "nikon-z9",
        badge: "PRO CINEMA LINE",
        tagline: "PRECISION MASTER GLASS",
        headline: "PURE SENSOR",
        subheadline: "DUAL BASE ISO 800 / 12800",
        description:
          "Uncompromised dynamic range with active fan-cooled endurance for endless high-frame-rate commercial and narrative productions.",
        image:
          "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1920&q=85",
        primaryCtaText: "Shop Cinema Bodies",
        primaryCtaLink: "/store",
        secondaryCtaText: "View Prime Optics",
        secondaryCtaLink: "/store",
        specs: [
          { label: "Frame Rate", value: "4K 120fps All-I" },
          { label: "Color", value: "16-Bit S-Cinetone" },
          { label: "Mount", value: "Universal Cinema" },
          { label: "Warranty", value: "2 Years Official" },
        ],
      },
      {
        id: "slide-3",
        productId: "sony-24-70-gm2",
        badge: "OPTICAL BENCHMARK",
        tagline: "LEGENDARY RESOLVING POWER",
        headline: "LIGHT MASTERED.",
        subheadline: "ULTRA-FAST F/1.2 OPTICS",
        description:
          "Defying diffraction with groundbreaking large-diameter mount geometry. Edge-to-edge sharpness with organic cinema bokeh.",
        image:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=85",
        primaryCtaText: "Browse Master Lenses",
        primaryCtaLink: "/store",
        secondaryCtaText: "Request Studio Quote",
        secondaryCtaLink: "/dashboard",
        specs: [
          { label: "Aperture", value: "Ultra-Fast f/1.2" },
          { label: "Coating", value: "Nano AR II & Meso" },
          { label: "Motors", value: "Dual Linear Drive" },
          { label: "Build", value: "Magnesium Sealed" },
        ],
      },
    ],
  },

  bestSellers: {
    badge: "ESA CINEMA EDITIONS",
    title: "FLAGSHIP CINEMA RIGS & MASTER OPTICS",
    subtitle: "Authorized flagship bodies, master prime sets, and high-power studio lighting in Egypt.",
  },
  studioStage: {
    badge: "ON-SET CINEMATOGRAPHY",
    title: "REDEFINE YOUR VISION.",
    projectTitle: "Night Drift • Midnight Neon Campaign",
    clientName: "Porsche & Speedhouse Media",
    directorName: "Tariq Al-Sayed (Head DP)",
    formatBadge: "8K 60P N-RAW",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    resolution: "8.3K Full-Frame",
    frameRate: "60 fps RAW",
    iso: "ISO 800 / Dual Base",
    shutterAngle: "180.0° (1/120s)",
    colorProfile: "12-Bit N-Log • Rec.2020",
    featuredProductId: "sony-fx3",
    gearRole: "Cinema Camera Core",
    gearName: "Sony FX3 Cinema Line Full-Frame",
    gearSetting: "4K 120p • Active Fan Cooling",
    gearPrice: 3899,
  },

  stylesCollage: {
    badge: "AUTHENTIC VISUAL CRAFT",
    title: "THE STYLES YOU WANT. THE GLASS YOU TRUST.",
    description:
      "From high-octane automotive commercials to intimate narrative dramas, explore the lenses and lighting setups trusted by Egypt's top cinematographers and production houses.",
    primaryImage:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85",
    lensName: "Sony FE 24-70mm f/2.8 GM II",
    lensRating: "5.0",
    lensReviews: "215 Reviews",
    lensPrice: 2298,
    lensImage:
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=400&q=80",
    ctaText: "Explore Full Optics Range",
    ctaLink: "/store",
  },
  editorial: {
    headerTag: "Nikon & Cinema Engineering Masterclass • 6 Min Read",
    title: "THE REVOLUTION OF LARGE-DIAMETER MOUNT OPTICS",
    description:
      "Discover how short 16mm flange geometry and giant 55mm inner diameter enable unprecedented corner-to-corner brightness, virtually zero distortion, and new frontiers in optical brilliance.",
    image:
      "https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?auto=format&fit=crop&w=1200&q=85",
    tags: ["8K Cinema", "Z-Mount Optics", "Color Science", "Anamorphic", "LiDAR AF"],
    ctaText: "Read Complete Case Study",
    ctaLink: "/store",
  },
  footer: {
    tagline: "Official Authorized Cinema & Optics Distributor in Egypt and the Middle East.",
    hotline: "+20 (02) 2736-CAM",
    email: "pro@esacam.com",
    address: "24 Hassan Assem St, Zamalek, Cairo, Egypt",
    copyright: "ESA CAM Optics Lab • All rights reserved.",
    instagramUrl: "https://instagram.com/esacam.store",
    youtubeUrl: "https://youtube.com/@esacam",
    tiktokUrl: "https://tiktok.com/@esacam.store",
    facebookUrl: "https://facebook.com/esacam.store",
    twitterUrl: "https://x.com/esacam_store",
    whatsappNumber: "+201023456789",
  },
};
