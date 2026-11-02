export interface Design {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  /** Where the "Use design" action sends the user (the design tool). */
  href: string;
}

const TEE_IMG =
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=90";
const HOODIE_IMG =
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=90";
const TOTE_IMG =
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=90";
const FASHION_IMG =
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=90";

export const designs: Design[] = [
  { id: "1", name: "Wanderer", imageSrc: FASHION_IMG, imageAlt: "Wanderer design", href: "/design-lab" },
  { id: "2", name: "Stay Wild", imageSrc: TEE_IMG, imageAlt: "Stay Wild design", href: "/design-lab" },
  { id: "3", name: "Good Days", imageSrc: TOTE_IMG, imageAlt: "Good Days design", href: "/design-lab" },
  { id: "4", name: "Mountain Heart", imageSrc: HOODIE_IMG, imageAlt: "Mountain Heart design", href: "/design-lab" },
  { id: "5", name: "Retro Type", imageSrc: FASHION_IMG, imageAlt: "Retro Type design", href: "/design-lab" },
  { id: "6", name: "Coastal", imageSrc: TEE_IMG, imageAlt: "Coastal design", href: "/design-lab" },
  { id: "7", name: "Midnight Bloom", imageSrc: TOTE_IMG, imageAlt: "Midnight Bloom design", href: "/design-lab" },
  { id: "8", name: "Slow Down", imageSrc: HOODIE_IMG, imageAlt: "Slow Down design", href: "/design-lab" },
];

export function getDesign(id: string): Design | undefined {
  return designs.find((design) => design.id === id);
}
