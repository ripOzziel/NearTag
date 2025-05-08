/*
  Warnings:

  - The `device_id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "User_device_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "device_id",
ADD COLUMN     "device_id" TEXT[];
