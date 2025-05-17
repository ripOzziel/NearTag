/*
  Warnings:

  - You are about to drop the column `jwt_hash` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "jwt_hash",
ADD COLUMN     "last_login" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "JwtToken" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenType" TEXT NOT NULL DEFAULT 'access',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastUsedAt" TIMESTAMP(3),
    "useCount" INTEGER NOT NULL DEFAULT 0,
    "maxUses" INTEGER NOT NULL DEFAULT 20,
    "isRevoked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "JwtToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JwtActivity" (
    "id" SERIAL NOT NULL,
    "tokenId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "performedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JwtActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JwtToken_tokenHash_key" ON "JwtToken"("tokenHash");

-- AddForeignKey
ALTER TABLE "JwtToken" ADD CONSTRAINT "JwtToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JwtActivity" ADD CONSTRAINT "JwtActivity_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "JwtToken"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
