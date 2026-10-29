import { Prisma } from "../src/generated/prisma/client";
import { prisma } from "../src/lib/prisma"
import { AllOrderData } from "./data/order";
import { AllProductData } from "./data/products";
import { AllUserData } from "./data/user";
import { AllCartData } from "./data/cart";
import "dotenv/config";

async function seedData() { 
  interface variantMetaDataType {
      variantId: string;
      title: string;
      description: string;
      price: Prisma.Decimal;
      size: string;
      color: string;
      sku: string;
  }
  await prisma.payment.deleteMany();
  await prisma.shippingAddress.deleteMany(); 
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.address.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  
  console.log("Database wiped successfully!");
  
  const userMap = new Map<string, string>();
  for (const user of AllUserData) {
    const createdUser = await prisma.user.create({data: user});
    userMap.set(createdUser.email, createdUser.id);
  }
  
  console.log(`seeded ${userMap.size} users`);
  
  const variantMap = new Map<string, variantMetaDataType>();
  for (const product of AllProductData) {
    const { variants, ...productData } = product; 
    const createdProduct = await prisma.product.create({
      data: {
        ...productData,
        variants: {
          create: variants
        }
      },
      include: { variants: true }
    });
    for (const v of createdProduct.variants) {
    variantMap.set(v.sku, {
      variantId: v.id,
      title: createdProduct.title,
      description: createdProduct.description ?? "",
      price: createdProduct.basePrice,
      size: v.size,
      color: v.color,
      sku: v.sku,
    });
  }
  }
}