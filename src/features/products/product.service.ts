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