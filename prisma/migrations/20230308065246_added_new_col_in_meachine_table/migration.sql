-- AlterTable
ALTER TABLE "Machines" ADD COLUMN     "machine_catagory_id" BIGINT;

-- CreateTable
CREATE TABLE "machine_catagory" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "machine_catagory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_machine_catagory_id_fkey" FOREIGN KEY ("machine_catagory_id") REFERENCES "machine_catagory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
