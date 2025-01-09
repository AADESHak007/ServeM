/*
  Warnings:

  - You are about to drop the column `address` on the `Address` table. All the data in the column will be lost.
  - Added the required column `Area` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Country` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Dist` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `House` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Landmark` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `State` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "address",
ADD COLUMN     "Area" TEXT NOT NULL,
ADD COLUMN     "Country" TEXT NOT NULL,
ADD COLUMN     "Dist" TEXT NOT NULL,
ADD COLUMN     "House" TEXT NOT NULL,
ADD COLUMN     "Landmark" TEXT NOT NULL,
ADD COLUMN     "State" TEXT NOT NULL;
