const FALLBACK_IMAGES: Record<string, string> = {
  cameras: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
  lenses: "https://images.unsplash.com/photo-1606986628253-7e3d2a4f9f9a?auto=format&fit=crop&w=1000&q=80",
  accessories: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1000&q=80",
  audio: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
  lighting: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
};

const DEFAULT_IMAGE = FALLBACK_IMAGES.cameras;

export function getProductImage(image: string | undefined, category?: string): string {
  const normalizedImage = image?.trim();

  if (!normalizedImage || normalizedImage.includes("icamstore.net")) {
    return FALLBACK_IMAGES[category || ""] || DEFAULT_IMAGE;
  }

  return normalizedImage;
}
