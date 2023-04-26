/*
  Warnings:

  - You are about to drop the `machines_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "machines_items" DROP CONSTRAINT "machines_items_block_id_fkey";

-- DropForeignKey
ALTER TABLE "machines_items" DROP CONSTRAINT "machines_items_item_id_fkey";

-- DropForeignKey
ALTER TABLE "machines_items" DROP CONSTRAINT "machines_items_machine_id_fkey";

-- DropTable
DROP TABLE "machines_items";
