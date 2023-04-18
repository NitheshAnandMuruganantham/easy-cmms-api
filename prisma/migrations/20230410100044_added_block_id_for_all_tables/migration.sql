/*
  Warnings:

  - Made the column `blockId` on table `production_data` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "production_data" DROP CONSTRAINT "production_data_blockId_fkey";

-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Machines" ALTER COLUMN "block_id" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Maintenance" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Replacements" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Reports" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Sections" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "blockId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "block_settings" ALTER COLUMN "block_id" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "catagory" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "machine_catagory" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "machines_items" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "production_data" ALTER COLUMN "blockId" SET NOT NULL,
ALTER COLUMN "blockId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "routine_maintanances" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "catagory" ADD CONSTRAINT "catagory_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machine_catagory" ADD CONSTRAINT "machine_catagory_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Replacements" ADD CONSTRAINT "Replacements_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sections" ADD CONSTRAINT "Sections_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_maintanances" ADD CONSTRAINT "routine_maintanances_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "production_data" ADD CONSTRAINT "production_data_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machines_items" ADD CONSTRAINT "machines_items_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
