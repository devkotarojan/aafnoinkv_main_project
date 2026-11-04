import "dotenv/config";
import { Prisma } from "../src/generated/prisma/client";
import { prisma } from "../src/lib/prisma"
import { AllOrderData } from "./data/order";
import { AllProductData } from "./data/products";
import { AllUserData } from "./data/user";
import { AllCartData } from "./data/cart";

interface variantMetaData {
  variantId: string;
  title: string;
  description: string | null;
  price: Prisma.Decimal;
  size: string;
}

async function seedData(tx: Prisma.TransactionClient) {
  await tx.payment.deleteMany();
  await tx.shippingAddress.deleteMany();
  await tx.orderItem.deleteMany();
  await tx.order.deleteMany();
  await tx.cartItem.deleteMany();
  await tx.address.deleteMany();
  await tx.cart.deleteMany();
  await tx.productVariant.deleteMany();
  await tx.product.deleteMany();
  await tx.user.deleteMany();

  console.log("Database wiped successfully!");

  const userMap = new Map<string, string>();
  for (const userInfo of AllUserData) {
    const createdUser = await tx.user.create({ data: userInfo });
    userMap.set(createdUser.email, createdUser.id);
  }

  console.log(`seeded ${userMap.size} users`);

  const variantMap = new Map<string, variantMetaData>();
  for (const product of AllProductData) {
    const { colors, ...productData } = product;
    const createdProduct = await tx.product.create({
      data: {
        ...productData,
        colors: {
          create: colors.map((c) => ({
            name: c.name,
            hexCode: c.hexCode,
            images: c.images,
            variants: {
              create: c.variants.map((v) => ({
                size: v.size,
                sku: v.sku,
                stock: v.stock,
                })),
              }
            })),
          },
        },
        include: { colors: {
          include: {
            variants: true,
          },
        }, 
      },
    });
    
    for (const color of createdProduct.colors) {
      for (const variant of color.variants) {
        variantMap.set(variant.sku, {
          variantId: variant.id,
          title: createdProduct.title,
          description: createdProduct.description,
          price: createdProduct.basePrice,
          size: variant.size,
        });
      }
    }
  }

  for (const cartInfo of AllCartData) {
    const userId = userMap.get(cartInfo.userEmail);
    if (!userId) {
      throw new Error(`User not found for the email ${cartInfo.userEmail}`);
    }

    const variants = Array.from(variantMap.values())

    if (variants.length === 0) {
      throw new Error("No products variant available");
    }

    const validCartItems = cartInfo.cartItems.map((item, index) => {
      const targetVarient = variants[index % variants.length];

      if (!targetVarient) {
        throw new Error("Could not find a product variant")
      }

      return {
        variantId: targetVarient.variantId,
        quantity: item.quantity,
        designUrl: item.designUrl,
      };
    });

    await tx.cart.create({
      data: {
        userId: userId,
        cartItems: { create: validCartItems }
      },
    });
  }

  for (const orderInfo of AllOrderData) {
    const userId = userMap.get(orderInfo.userEmail);
    if (!userId) {
      throw new Error(`User not found for the email ${orderInfo.userEmail}`);
    }

    const orderItemsCreate: Prisma.OrderItemUncheckedCreateWithoutOrderInput[] = [];
    for (const item of orderInfo.orderItems) {
      const variantInfo = variantMap.get(item.sku);
      if (!variantInfo) {
        throw new Error(`Variant was not found for the sku ${item.sku}`);
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

    if (orderItemsCreate.length === 0) {
      throw new Error(
        `Order for ${orderInfo.userEmail} has no items`
      );
    }

    await tx.order.create({
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

export async function main() {
  try {
    await prisma.$transaction(
      async (tx) => {
        await seedData(tx);
      },
      {
        maxWait: 10_000,
        timeout: 60_000,
      }
    )

    console.log("Database seeded successfully!");
  } catch (error) {
    console.log("There was an error seeding the data:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();