import { prisma } from "@/lib/prisma";

export async function getProducts() {
  const products = await prisma.product.findMany({
    where: {
      isPublished: true,
    },
    include: {
      variants: true,
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
      variants: true,
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
      variants: true,
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
