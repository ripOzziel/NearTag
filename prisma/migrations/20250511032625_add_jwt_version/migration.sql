/*
  Warnings:

  - You are about to drop the column `device_id` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "device_id",
ADD COLUMN     "jwt_version" INTEGER NOT NULL DEFAULT 0;
