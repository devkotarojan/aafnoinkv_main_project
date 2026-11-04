import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";

export type ProductWithVariants = Omit<
  Prisma.ProductGetPayload<{
    include: {
      colors: {
        include: {
          variants: true,
        }
      };
    };
  }>,
  "basePrice"
> & {
  basePrice: number;
};

export async function getProducts() {
  const products = await prisma.product.findMany({
    where: {
      isPublished: true,
    },
    include: {
      colors: {
        include: {
          variants: true,
        }
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  
  
  return products.map((product) => {
    return {
      ...product,
      basePrice: product.basePrice.toNumber(),
    };
  })
}

export async function getProduct(slug: string) {
  const productInfo = await prisma.product.findUnique({
    where: {
      slug: slug,
    }, 
    include: {
      colors: true,
    }
  });
  
  if (!productInfo) {
    return null;
  }
   
  return {
    ...productInfo,
    basePrice: productInfo.basePrice.toNumber(),
  };
}

export async function getRelatedProducts(currentSlug: string, limit=4) {
  const relatedProducts = await prisma.product.findMany({
    where: {
      slug: {
        not: currentSlug,
      },
    }, 
    include: {
      colors: {
        include: {
          variants: true,
        }
      },
    },
    take: limit,
  });
  
  return relatedProducts.map((product) => {
    return (
      {
        ...product,
        basePrice: product.basePrice.toNumber(),
      });
  });
}
