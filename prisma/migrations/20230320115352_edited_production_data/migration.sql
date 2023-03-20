/*
  Warnings:

  - You are about to drop the column `block_id` on the `production_data` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `production_data` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "production_data" DROP CONSTRAINT "production_data_block_id_fkey";

-- AlterTable
ALTER TABLE "production_data" DROP COLUMN "block_id",
DROP COLUMN "data",
ADD COLUMN     "actual_production" INTEGER,
ADD COLUMN     "blockId" BIGINT,
ADD COLUMN     "target_production" INTEGER,
ADD COLUMN     "total_down_time" INTEGER,
ADD COLUMN     "total_run_time" INTEGER;

-- AddForeignKey
ALTER TABLE "production_data" ADD CONSTRAINT "production_data_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "Block"("id") ON DELETE SET NULL ON UPDATE CASCADE;
