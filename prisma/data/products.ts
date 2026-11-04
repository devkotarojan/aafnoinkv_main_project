import { Prisma } from "../../src/generated/prisma/client";

export interface ProductVariantSeedType {
  size: string;
  sku: string;
  stock: number;
  productColor: ProductColorType;
}

export interface ProductColorType {
  name: string;
  hexCode: string;
  images: string[];
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
      { size: "M", sku: "TS-BLK-M-001", stock: 25,
        productColor: {
          name: "WHITE",
          hexCode: "#FFFFFF",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg"],
        }
       },
      { size: "L", sku: "TS-BLK-L-002", stock: 40,
        productColor: {
          name: "BLACK",
          hexCode: "#000000",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg"],
        }
      },
      { size: "XL", sku: "TS-BLK-XL-003", stock: 10,
        productColor: {
          name: "RED",
          hexCode: "#020300",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg"],
        }
       },
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
      { size: "M", sku: "HD-WHT-M-001", stock: 25,
        productColor: {
          name: "WHITE",
          hexCode: "#FFFFFF",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg"],
        }
       },
      { size: "L", sku: "HD-BLK-L-002", stock: 40,
        productColor: {
          name: "BLACK",
          hexCode: "#000000",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg"],
        }
      },
      { size: "XL", sku: "HD-RED-XL-003", stock: 10,
        productColor: {
          name: "RED",
          hexCode: "#020300",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg"],
        }
       },
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
      { size: "M", sku: "CTS-WHT-M-001", stock: 25,
        productColor: {
          name: "WHITE",
          hexCode: "#FFFFFF",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg"],
        }
       },
      { size: "L", sku: "CTS-BLK-L-002", stock: 40,
        productColor: {
          name: "BLACK",
          hexCode: "#000000",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg"],
        }
      },
      { size: "XL", sku: "CTS-RED-XL-003", stock: 10,
        productColor: {
          name: "RED",
          hexCode: "#020300",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg"],
        }
       },
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
      { size: "M", sku: "JK-WHT-M-001", stock: 25,
        productColor: {
          name: "WHITE",
          hexCode: "#FFFFFF",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg"],
        }
       },
      { size: "L", sku: "JK-BLK-L-002", stock: 40,
        productColor: {
          name: "BLACK",
          hexCode: "#000000",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg"],
        }
      },
      { size: "XL", sku: "JK-RED-XL-003", stock: 10,
        productColor: {
          name: "RED",
          hexCode: "#020300",
          images: ["https://randomimageurl.com/assets/images/local/20260103_0520_Eclectic%20Dreamscape%20Fusion_simple_compose_01ke208djwfj0t0g3t43g8mmcq_compressed_q80.jpeg"],
        }
       },
      ]
  },
];