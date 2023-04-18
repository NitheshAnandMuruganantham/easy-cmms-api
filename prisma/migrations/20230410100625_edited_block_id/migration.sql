-- AlterTable
ALTER TABLE "Items" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Machines" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Maintenance" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Replacements" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Reports" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Sections" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "blockId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "block_settings" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "catagory" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "machine_catagory" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "machines_items" ALTER COLUMN "block_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "production_data" ALTER COLUMN "blockId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "routine_maintanances" ALTER COLUMN "block_id" DROP DEFAULT;
