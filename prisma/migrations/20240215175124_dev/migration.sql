/*
  Warnings:

  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "status" AS ENUM ('ACTIVE', 'INACTIVE', 'INVITED');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "forgot_password_code" TEXT,
ADD COLUMN     "invitation_code" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "status" "status" NOT NULL DEFAULT 'INVITED';
