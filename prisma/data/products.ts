import { Prisma } from "../../src/generated/prisma/client";

export interface ProductVariantType {
  size: string;
  sku: string;
  stock: number;
}

export interface ProductColorType {
  name: string;
  hexCode: string;
  images: string[];
  variants: ProductVariantType[];
}

export interface ProductSeedType {
  title: string;
  slug: string;
  description: string;
  basePrice: Prisma.Decimal;
  isPublished: boolean;
  colors: ProductColorType[];
}


export const AllProductData: ProductSeedType[] = [
  {
    title: "Custom Oversized T-Shirt",
    slug: "custom-oversized-black-tshirt",
    description:
      "Heavyweight 100% cotton custom print t-shirt designed for comfort and durability.",
    basePrice: new Prisma.Decimal("1250.00"),
    isPublished: true,

    colors: [
      {
        name: "WHITE",
        hexCode: "#FFFFFF",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "TS-WHT-S-001", stock: 15 },
          { size: "M", sku: "TS-WHT-M-002", stock: 25 },
          { size: "L", sku: "TS-WHT-L-003", stock: 30 },
          { size: "XL", sku: "TS-WHT-XL-004", stock: 20 },
        ],
      },
      {
        name: "BLACK",
        hexCode: "#000000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "TS-BLK-S-001", stock: 20 },
          { size: "M", sku: "TS-BLK-M-002", stock: 35 },
          { size: "L", sku: "TS-BLK-L-003", stock: 40 },
          { size: "XL", sku: "TS-BLK-XL-004", stock: 15 },
        ],
      },
      {
        name: "RED",
        hexCode: "#FF0000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "TS-RED-S-001", stock: 10 },
          { size: "M", sku: "TS-RED-M-002", stock: 20 },
          { size: "L", sku: "TS-RED-L-003", stock: 25 },
          { size: "XL", sku: "TS-RED-XL-004", stock: 10 },
        ],
      },
    ],
  },

  {
    title: "Minimalist Fleece Hoodie",
    slug: "minimalist-fleece-hoodie",
    description:
      "Warm fleece-lined winter hoodie with clean styling and custom printing support.",
    basePrice: new Prisma.Decimal("2800.00"),
    isPublished: true,

    colors: [
      {
        name: "WHITE",
        hexCode: "#FFFFFF",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "HD-WHT-S-001", stock: 12 },
          { size: "M", sku: "HD-WHT-M-002", stock: 25 },
          { size: "L", sku: "HD-WHT-L-003", stock: 30 },
          { size: "XL", sku: "HD-WHT-XL-004", stock: 15 },
        ],
      },
      {
        name: "BLACK",
        hexCode: "#000000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "HD-BLK-S-001", stock: 20 },
          { size: "M", sku: "HD-BLK-M-002", stock: 35 },
          { size: "L", sku: "HD-BLK-L-003", stock: 40 },
          { size: "XL", sku: "HD-BLK-XL-004", stock: 18 },
        ],
      },
      {
        name: "RED",
        hexCode: "#FF0000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "HD-RED-S-001", stock: 8 },
          { size: "M", sku: "HD-RED-M-002", stock: 15 },
          { size: "L", sku: "HD-RED-L-003", stock: 20 },
          { size: "XL", sku: "HD-RED-XL-004", stock: 10 },
        ],
      },
    ],
  },

  {
    title: "Classic White Crewneck Tee",
    slug: "classic-white-crewneck-tee",
    description:
      "Breathable everyday cotton tee optimized for vibrant custom art transfers.",
    basePrice: new Prisma.Decimal("1100.00"),
    isPublished: true,

    colors: [
      {
        name: "WHITE",
        hexCode: "#FFFFFF",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "CTS-WHT-S-001", stock: 15 },
          { size: "M", sku: "CTS-WHT-M-002", stock: 25 },
          { size: "L", sku: "CTS-WHT-L-003", stock: 30 },
          { size: "XL", sku: "CTS-WHT-XL-004", stock: 20 },
        ],
      },
      {
        name: "BLACK",
        hexCode: "#000000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "CTS-BLK-S-001", stock: 10 },
          { size: "M", sku: "CTS-BLK-M-002", stock: 20 },
          { size: "L", sku: "CTS-BLK-L-003", stock: 25 },
          { size: "XL", sku: "CTS-BLK-XL-004", stock: 15 },
        ],
      },
      {
        name: "RED",
        hexCode: "#FF0000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "CTS-RED-S-001", stock: 8 },
          { size: "M", sku: "CTS-RED-M-002", stock: 15 },
          { size: "L", sku: "CTS-RED-L-003", stock: 20 },
          { size: "XL", sku: "CTS-RED-XL-004", stock: 10 },
        ],
      },
    ],
  },

  {
    title: "Urban Streetwear Zip-Up Jacket",
    slug: "urban-streetwear-zip-up-jacket",
    description:
      "Durable water-resistant zip-up jacket tailored for modern urban utility.",
    basePrice: new Prisma.Decimal("3500.00"),
    isPublished: false,

    colors: [
      {
        name: "WHITE",
        hexCode: "#FFFFFF",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "JK-WHT-S-001", stock: 10 },
          { size: "M", sku: "JK-WHT-M-002", stock: 25 },
          { size: "L", sku: "JK-WHT-L-003", stock: 30 },
          { size: "XL", sku: "JK-WHT-XL-004", stock: 15 },
        ],
      },
      {
        name: "BLACK",
        hexCode: "#000000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "JK-BLK-S-001", stock: 15 },
          { size: "M", sku: "JK-BLK-M-002", stock: 30 },
          { size: "L", sku: "JK-BLK-L-003", stock: 40 },
          { size: "XL", sku: "JK-BLK-XL-004", stock: 20 },
        ],
      },
      {
        name: "RED",
        hexCode: "#FF0000",
        images: [
          "https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg",
        ],
        variants: [
          { size: "S", sku: "JK-RED-S-001", stock: 5 },
          { size: "M", sku: "JK-RED-M-002", stock: 12 },
          { size: "L", sku: "JK-RED-L-003", stock: 18 },
          { size: "XL", sku: "JK-RED-XL-004", stock: 8 },
        ],
      },
    ],
  },
];
