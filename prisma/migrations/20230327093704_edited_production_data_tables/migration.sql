/*
  Warnings:

  - You are about to drop the column `actual_production` on the `production_data` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `production_data` table. All the data in the column will be lost.
  - You are about to drop the column `target_production` on the `production_data` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `production_data` table. All the data in the column will be lost.
  - You are about to drop the column `total_down_time` on the `production_data` table. All the data in the column will be lost.
  - You are about to drop the column `total_run_time` on the `production_data` table. All the data in the column will be lost.
  - Added the required column `date` to the `production_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shift` to the `production_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "production_data" DROP COLUMN "actual_production",
DROP COLUMN "from",
DROP COLUMN "target_production",
DROP COLUMN "to",
DROP COLUMN "total_down_time",
DROP COLUMN "total_run_time",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "production" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "shift" TEXT NOT NULL;
