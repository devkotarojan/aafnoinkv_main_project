export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductColor {
  name: string;
  class: string;
  selectedClass: string;
}

export interface ProductSize {
  name: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  href: string;
  price: string;
  color: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isPopular?: boolean;
  imageSrc: string;
  imageAlt: string;
  images: ProductImage[];
  colors: ProductColor[];
  sizes: ProductSize[];
  description: string;
  fabricCare: string[];
}

const clothingColors: ProductColor[] = [
  { name: "Midnight", class: "bg-zinc-900", selectedClass: "ring-zinc-900" },
  { name: "Stone", class: "bg-zinc-400", selectedClass: "ring-zinc-400" },
  { name: "Sand", class: "bg-amber-200", selectedClass: "ring-amber-300" },
];

const clothingSizes: ProductSize[] = [
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "XXL", inStock: true },
];

const HOODIE_IMG =
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=90";
const TEE_IMG =
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=90";
const TOTE_IMG =
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=90";
const SWEATER_IMG =
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=90";

function gallery(src: string, name: string): ProductImage[] {
  return [
    { src, alt: `Front view of ${name}` },
    { src, alt: `Side view of ${name}` },
    { src, alt: `Back view of ${name}` },
  ];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Urban Explorer Hoodie",
    href: "/shop/1",
    price: "$55",
    color: "Midnight",
    rating: 4.2,
    reviewCount: 512,
    isPopular: true,
    imageSrc: HOODIE_IMG,
    imageAlt: "Urban Explorer Hoodie",
    images: gallery(HOODIE_IMG, "Urban Explorer Hoodie"),
    colors: clothingColors,
    sizes: clothingSizes,
    description:
      "The Urban Explorer Hoodie is built for city adventures. Featuring durable ripstop fabric and a water-resistant finish, it keeps you comfortable in changing conditions. Designed for mobility and style.",
    fabricCare: [
      "Durable ripstop nylon",
      "Water-resistant coating",
      "Adjustable hood drawcords",
      "Machine wash cold, hang dry",
    ],
  },
  {
    id: "2",
    name: "Classic Cotton Tee",
    href: "/shop/2",
    price: "$25",
    color: "Stone",
    rating: 4.6,
    reviewCount: 184,
    isNew: true,
    imageSrc: TEE_IMG,
    imageAlt: "Classic Cotton Tee",
    images: gallery(TEE_IMG, "Classic Cotton Tee"),
    colors: clothingColors,
    sizes: clothingSizes,
    description:
      "The everyday tee done right. Made from soft, breathable cotton with a relaxed fit that drapes naturally. A dependable canvas for any design you want to wear.",
    fabricCare: [
      "100% ring-spun cotton",
      "Pre-shrunk fabric",
      "Reinforced collar",
      "Machine wash cold, tumble dry low",
    ],
  },
  {
    id: "3",
    name: "Everyday Tote Bag",
    href: "/shop/3",
    price: "$20",
    color: "Sand",
    rating: 4.8,
    reviewCount: 96,
    isPopular: true,
    imageSrc: TOTE_IMG,
    imageAlt: "Everyday Tote Bag",
    images: gallery(TOTE_IMG, "Everyday Tote Bag"),
    colors: clothingColors,
    sizes: clothingSizes,
    description:
      "Carry your ideas wherever you go. Sturdy canvas construction with reinforced handles and a roomy interior that holds everything you need for the day.",
    fabricCare: [
      "Heavyweight canvas",
      "Reinforced stitched handles",
      "Interior pocket",
      "Spot clean, air dry",
    ],
  },
  {
    id: "4",
    name: "Studio Sweatshirt",
    href: "/shop/4",
    price: "$48",
    color: "Stone",
    rating: 4.5,
    reviewCount: 142,
    imageSrc: SWEATER_IMG,
    imageAlt: "Studio Sweatshirt",
    images: gallery(SWEATER_IMG, "Studio Sweatshirt"),
    colors: clothingColors,
    sizes: clothingSizes,
    description:
      "A cozy layer that moves with you. Brushed-fleece interior for warmth with a clean, minimal exterior that takes your designs cleanly.",
    fabricCare: [
      "Brushed cotton-blend fleece",
      "Ribbed cuffs and hem",
      "Soft against the skin",
      "Machine wash cold, hang dry",
    ],
  },
  {
    id: "5",
    name: "Relaxed Fit Tee",
    href: "/shop/5",
    price: "$28",
    color: "Sand",
    rating: 4.4,
    reviewCount: 73,
    imageSrc: TEE_IMG,
    imageAlt: "Relaxed Fit Tee",
    images: gallery(TEE_IMG, "Relaxed Fit Tee"),
    colors: clothingColors,
    sizes: clothingSizes,
    description:
      "A looser take on the classic tee with a dropped shoulder and a softer, lived-in feel from day one. Made to layer or stand on its own.",
    fabricCare: [
      "Midweight cotton jersey",
      "Dropped-shoulder fit",
      "Garment dyed",
      "Machine wash cold, tumble dry low",
    ],
  },
  {
    id: "6",
    name: "Weekender Tote",
    href: "/shop/6",
    price: "$24",
    color: "Midnight",
    rating: 4.7,
    reviewCount: 58,
    isNew: true,
    imageSrc: TOTE_IMG,
    imageAlt: "Weekender Tote",
    images: gallery(TOTE_IMG, "Weekender Tote"),
    colors: clothingColors,
    sizes: clothingSizes,
    description:
      "A roomier tote for longer days out. Wider base, deeper interior, and a magnetic closure to keep your things in place while you move.",
    fabricCare: [
      "Waxed canvas shell",
      "Leather-trim handles",
      "Magnetic top closure",
      "Spot clean, air dry",
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/** Related products excluding the current one, capped at `limit`. */
export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products.filter((product) => product.id !== currentId).slice(0, limit);
}
