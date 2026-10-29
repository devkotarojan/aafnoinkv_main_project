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
      description: string | null;
      price: Prisma.Decimal;
      size: string;
      color: string;
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
        description: createdProduct.description,
        price: createdProduct.basePrice,
        size: v.size,
        color: v.color,
      });
    }
  }
  
  for (const cart of AllCartData) {
    const userId = userMap.get(cart.userEmail);
    if (!userId) continue;
    
    const validCartItems = cart.cartItems.map((item, index) => {
      const targetVarient = Array.from(variantMap.values())[index % variantMap.size];
      
      return {
        variantId: targetVarient.variantId,
        quantity: item.quantity,
        designUrl: item.designUrl,
      };
    });
    
    await prisma.cart.create({
      data: {
        userId: userId,
        cartItems: { create: validCartItems }
      },
    });
  }
  
  for (const orderInfo of AllOrderData) {
    const userId = userMap.get(orderInfo.userEmail);
    if (!userId) continue;

    const orderItemsCreate = [];
    for (const item of orderInfo.orderItems) {
      const variantInfo = variantMap.get(item.sku);
      if (!variantInfo) {
        continue;
      }

      orderItemsCreate.push({
        variantId: variantInfo.variantId,
        quantity: item.quantity,
        designUrl: item.designUrl,
        title: item.title,
        description: item.description,
        price: item.price,
        size: item.size,
        color: item.color,
        sku: item.sku,
      });
    }

    if (orderItemsCreate.length === 0) continue;

    await prisma.order.create({
      data: {
        userId,
        orderStatus: orderInfo.orderStatus,
        totalAmount: orderInfo.totalAmount,
        orderItems: {
          create: orderItemsCreate,
        },
        shippingAddress: {
          create: orderInfo.shippingAddress,
        },
        payments: {
          create: orderInfo.payments,
        },
      },
    });
  }
}