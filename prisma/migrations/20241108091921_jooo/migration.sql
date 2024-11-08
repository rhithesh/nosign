/*
  Warnings:

  - You are about to drop the column `hashedPassword` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `PrivateLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PrivateLink" DROP CONSTRAINT "PrivateLink_userId_fkey";

-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_user_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "hashedPassword";

-- DropTable
DROP TABLE "PrivateLink";

-- DropTable
DROP TABLE "accounts";

-- DropTable
DROP TABLE "sessions";

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "routeId" TEXT,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "routes_path_key" ON "routes"("path");

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
