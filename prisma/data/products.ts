import { Prisma } from "../../src/generated/prisma/client";

export interface ProductVariantSeedType {
  size: string;
  color: string;
  sku: string;
  stock: number;
}

export interface ProductSeedType {
  title: string;
  slug: string;
  description: string;
  basePrice: Prisma.Decimal;
  images: string[];
  isPublished: boolean;
  variants: ProductVariantSeedType[];
}

export const AllProductData: ProductSeedType[] = [
  {
    title: "Custom Oversized Black T-Shirt",
    slug: "custom-oversized-black-tshirt",
    description: "Heavyweight 100% cotton custom print t-shirt designed for comfort and durability.",
    basePrice: new Prisma.Decimal(1250.00),
    images: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518"],
    isPublished: true,
    variants: [
      { size: "M", color: "BLACK", sku: "TS-BLK-M-001", stock: 25 },
      { size: "L", color: "BLACK", sku: "TS-BLK-L-002", stock: 40 },
      { size: "XL", color: "BLACK", sku: "TS-BLK-XL-003", stock: 10 },
    ],
  },
  {
    title: "Minimalist Fleece Hoodie",
    slug: "minimalist-fleece-hoodie",
    description: "Warm fleece-lined winter hoodie with clean styling and custom printing support.",
    basePrice: new Prisma.Decimal(2800.00),
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2"],
    isPublished: true,
    variants: [
      { size: "M", color: "GREY", sku: "HD-GRY-M-001", stock: 15 },
      { size: "L", color: "GREY", sku: "HD-GRY-L-002", stock: 20 },
      { size: "XL", color: "GREY", sku: "HD-GRY-XL-003", stock: 8 },
    ],
  },
  {
    title: "Classic White Crewneck Tee",
    slug: "classic-white-crewneck-tee",
    description: "Breathable everyday cotton tee optimized for vibrant custom art transfers.",
    basePrice: new Prisma.Decimal(1100.00),
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820"],
    isPublished: true,
    variants: [
      { size: "S", color: "WHITE", sku: "TS-WHT-S-004", stock: 30 },
      { size: "M", color: "WHITE", sku: "TS-WHT-M-005", stock: 50 },
      { size: "L", color: "WHITE", sku: "TS-WHT-L-006", stock: 25 },
    ],
  },
  {
    title: "Urban Streetwear Zip-Up Jacket",
    slug: "urban-streetwear-zip-up-jacket",
    description: "Durable water-resistant zip-up jacket tailored for modern urban utility.",
    basePrice: new Prisma.Decimal(3500.00),
    images: ["https://images.unsplash.com/photo-1544441893-675973e31985"],
    isPublished: false, // Draft product test
    variants: [
      { size: "M", color: "NAVY", sku: "JK-NVY-M-001", stock: 10 },
      { size: "L", color: "NAVY", sku: "JK-NVY-L-002", stock: 12 },
    ],
  },
];