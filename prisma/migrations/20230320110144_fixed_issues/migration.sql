-- AlterTable
ALTER TABLE "Block" ADD COLUMN     "Mailings" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "blockId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "production_data" ALTER COLUMN "block_id" DROP DEFAULT;
