-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "machines_id" BIGINT[];

-- AlterTable
ALTER TABLE "Machines" ADD COLUMN     "itemsId" BIGINT;

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "Items"("id") ON DELETE SET NULL ON UPDATE CASCADE;
