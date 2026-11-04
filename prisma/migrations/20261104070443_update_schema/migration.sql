/*
  Warnings:

  - You are about to drop the column `color` on the `product_variants` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_id,color_id,size]` on the table `product_variants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `color_id` to the `product_variants` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "product_variants_product_id_size_color_key";

-- AlterTable
ALTER TABLE "order_items" ALTER COLUMN "size" SET DEFAULT 'M';

-- AlterTable
ALTER TABLE "product_variants" DROP COLUMN "color",
ADD COLUMN     "color_id" TEXT NOT NULL,
ADD COLUMN     "productColorId" TEXT;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "images";

-- CreateTable
CREATE TABLE "product_colors" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hex_code" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "product_colors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_colors_product_id_name_key" ON "product_colors"("product_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_product_id_color_id_size_key" ON "product_variants"("product_id", "color_id", "size");

-- AddForeignKey
ALTER TABLE "product_colors" ADD CONSTRAINT "product_colors_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "product_colors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
