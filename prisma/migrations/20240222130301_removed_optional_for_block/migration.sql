/*
  Warnings:

  - Made the column `key` on table `Block` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Block" ALTER COLUMN "key" SET NOT NULL;
