/*
  Warnings:

  - You are about to drop the column `machines_id` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `itemsId` on the `Machines` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Machines" DROP CONSTRAINT "Machines_itemsId_fkey";

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "machines_id";

-- AlterTable
ALTER TABLE "Machines" DROP COLUMN "itemsId";

-- CreateTable
CREATE TABLE "machines_items" (
    "id" BIGSERIAL NOT NULL,
    "machine_id" BIGINT NOT NULL,
    "item_id" BIGINT NOT NULL,

    CONSTRAINT "machines_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "machines_items_machine_id_item_id_key" ON "machines_items"("machine_id", "item_id");

-- AddForeignKey
ALTER TABLE "machines_items" ADD CONSTRAINT "machines_items_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machines_items" ADD CONSTRAINT "machines_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
