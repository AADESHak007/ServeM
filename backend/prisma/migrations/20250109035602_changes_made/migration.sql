/*
  Warnings:

  - You are about to drop the column `addressType` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "addressType";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age";

-- DropEnum
DROP TYPE "AddressType";
