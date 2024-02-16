/*
  Warnings:

  - You are about to drop the column `user_auth_id` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[blockId,phone]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[blockId,email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_phone_key";

-- DropIndex
DROP INDEX "Users_user_auth_id_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "user_auth_id",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_blockId_phone_key" ON "Users"("blockId", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "Users_blockId_email_key" ON "Users"("blockId", "email");
