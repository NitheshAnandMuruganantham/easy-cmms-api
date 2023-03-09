/*
  Warnings:

  - Made the column `machine_catagory_id` on table `Machines` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Machines" DROP CONSTRAINT "Machines_machine_catagory_id_fkey";

-- AlterTable
ALTER TABLE "Machines" ALTER COLUMN "machine_catagory_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_machine_catagory_id_fkey" FOREIGN KEY ("machine_catagory_id") REFERENCES "machine_catagory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
