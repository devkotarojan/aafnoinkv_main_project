/*
  Warnings:

  - You are about to drop the column `product_id` on the `product_colors` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "product_colors_product_id_name_key";

-- AlterTable
ALTER TABLE "product_colors" DROP COLUMN "product_id";
