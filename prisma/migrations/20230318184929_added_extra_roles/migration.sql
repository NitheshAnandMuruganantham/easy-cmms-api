-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "extra_roles" "Role"[] DEFAULT ARRAY[]::"Role"[];
