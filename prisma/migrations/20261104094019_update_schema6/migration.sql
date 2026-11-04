/*
  Warnings:

  - You are about to drop the column `product_id` on the `product_variants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_id,name]` on the table `product_colors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[color_id,size]` on the table `product_variants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `product_id` to the `product_colors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product_variants" DROP CONSTRAINT "product_variants_product_id_fkey";

-- DropIndex
DROP INDEX "product_variants_product_id_color_id_size_key";

-- AlterTable
ALTER TABLE "product_colors" ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product_variants" DROP COLUMN "product_id";

-- CreateIndex
CREATE UNIQUE INDEX "product_colors_product_id_name_key" ON "product_colors"("product_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_color_id_size_key" ON "product_variants"("color_id", "size");

-- AddForeignKey
ALTER TABLE "product_colors" ADD CONSTRAINT "product_colors_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
