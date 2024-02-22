/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `Block` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Block" ADD COLUMN     "key" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Block_key_key" ON "Block"("key");
