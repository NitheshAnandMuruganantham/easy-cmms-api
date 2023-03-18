-- CreateTable
CREATE TABLE "block_settings" (
    "id" BIGSERIAL NOT NULL,
    "block_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "block_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "production_data" (
    "id" BIGSERIAL NOT NULL,
    "data" JSONB NOT NULL DEFAULT '{}',
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by" BIGINT NOT NULL,

    CONSTRAINT "production_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "block_settings_block_id_key" ON "block_settings"("block_id");

-- CreateIndex
CREATE UNIQUE INDEX "block_settings_block_id_name_key" ON "block_settings"("block_id", "name");

-- AddForeignKey
ALTER TABLE "block_settings" ADD CONSTRAINT "block_settings_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "production_data" ADD CONSTRAINT "production_data_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
