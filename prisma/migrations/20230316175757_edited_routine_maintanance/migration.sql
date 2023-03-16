/*
  Warnings:

  - You are about to drop the column `from` on the `routine_maintanances` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `routine_maintanances` table. All the data in the column will be lost.
  - Added the required column `duration` to the `routine_maintanances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routine_maintanances" DROP COLUMN "from",
DROP COLUMN "to",
ADD COLUMN     "duration" INTEGER NOT NULL;
