-- AlterTable
ALTER TABLE "production_data" ADD COLUMN     "block_id" BIGINT NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "production_data" ADD CONSTRAINT "production_data_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
