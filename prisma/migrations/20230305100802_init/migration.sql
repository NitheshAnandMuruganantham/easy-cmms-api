-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MANAGER', 'SUPERVISOR', 'ENGINEER', 'GUEST', 'FITTER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ticket_status" AS ENUM ('OPEN', 'CLOSED', 'PENDING');

-- CreateTable
CREATE TABLE "Block" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catagory" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "catagory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "catagory_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machines" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "section_id" BIGINT NOT NULL,
    "block_id" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "profile" JSONB NOT NULL DEFAULT '{}',
    "priority" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maintenance" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "description" TEXT NOT NULL,
    "from" TIMESTAMP(0) NOT NULL,
    "to" TIMESTAMP(0) NOT NULL,
    "resolved" BOOLEAN NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "un_planned" BOOLEAN NOT NULL,
    "elapsed" TIMESTAMP(0),
    "assignee_id" BIGINT NOT NULL,
    "machine_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Replacements" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "item_id" BIGINT NOT NULL,
    "maintanance_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Replacements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reports" (
    "id" BIGSERIAL NOT NULL,
    "report" TEXT NOT NULL,
    "sign" TEXT NOT NULL,
    "tag" JSONB NOT NULL,
    "validated" BIGINT NOT NULL,
    "validated_sign" BIGINT NOT NULL,
    "maintance_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sections" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" BIGSERIAL NOT NULL,
    "profile" JSONB NOT NULL DEFAULT '{}',
    "phone" TEXT NOT NULL,
    "user_auth_id" TEXT,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photos" TEXT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "maintenance_id" BIGINT,
    "machine_id" BIGINT NOT NULL,
    "status" "ticket_status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routine_maintanances" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cron" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "assignee_id" BIGINT NOT NULL,
    "meachine_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routine_maintanances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_auth_id_key" ON "Users"("user_auth_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_maintenance_id_key" ON "Ticket"("maintenance_id");

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_catagory_id_fkey" FOREIGN KEY ("catagory_id") REFERENCES "catagory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Replacements" ADD CONSTRAINT "Replacements_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Replacements" ADD CONSTRAINT "Replacements_maintanance_id_fkey" FOREIGN KEY ("maintanance_id") REFERENCES "Maintenance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "report_maintance_id_foreign" FOREIGN KEY ("maintance_id") REFERENCES "Maintenance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_maintenance_id_fkey" FOREIGN KEY ("maintenance_id") REFERENCES "Maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_maintanances" ADD CONSTRAINT "routine_maintanances_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_maintanances" ADD CONSTRAINT "routine_maintanances_meachine_id_fkey" FOREIGN KEY ("meachine_id") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;