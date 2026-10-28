import { Prisma } from "../src/generated/prisma/client";
import { prisma } from "../src/lib/prisma";
import "dotenv/config";

const seedData = async () => {
  await prisma.payment.deleteMany();
  await prisma.shippingAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.address.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  //Create users
  

  // 4. Create Products and Variants
  const tShirtProduct = await prisma.product.create({
    data: {
      title: "Custom Oversized Black T-Shirt",
      slug: "custom-oversized-black-tshirt",
      description: "Heavyweight 100% cotton custom print t-shirt.",
      basePrice: new Prisma.Decimal(1250.00),
      images: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518"],
      isPublished: true,
      variants: {
        create: [
          { size: "M", color: "BLACK", sku: "TS-BLK-M-001", stock: 25 },
          { size: "L", color: "BLACK", sku: "TS-BLK-L-002", stock: 40 },
          { size: "XL", color: "BLACK", sku: "TS-BLK-XL-003", stock: 10 },
        ],
      },
    },
    include: { variants: true },
  });

  console.log("🌱 Database seeding completed successfully!");
};

export async function main() {
  try {
    await seedData();
  } catch (error) {
    console.error("Error during database seeding:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();