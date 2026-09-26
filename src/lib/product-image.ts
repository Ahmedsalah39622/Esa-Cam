const FALLBACK_IMAGES: Record<string, string> = {
  cameras: "/categories/cameras.png",
  lenses: "/categories/lenses.png",
  accessories: "/categories/accessories.png",
  audio: "/categories/audio-video.png",
  lighting: "/categories/lighting.png",
  gimbals: "/categories/gimbals.png",
  flashes: "/categories/flashes.png",
  "memory-cards": "/categories/memory-cards.png",
  tripods: "/categories/tripods.png",
  bags: "/categories/accessories.png",
  deals: "/categories/deals.png",
  "pre-owned": "/categories/cameras.png",
  drones: "/categories/cameras.png",
};

const DEFAULT_IMAGE = FALLBACK_IMAGES.cameras;

export function getProductImage(image: string | undefined, category?: string): string {
  const normalizedImage = image?.trim();

  if (!normalizedImage) {
    return FALLBACK_IMAGES[category || ""] || DEFAULT_IMAGE;
  }

  return normalizedImage;
}
