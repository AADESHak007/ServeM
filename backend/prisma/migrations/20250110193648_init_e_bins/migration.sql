-- CreateTable
CREATE TABLE "Ebins" (
    "id" TEXT NOT NULL,
    "binLat" DECIMAL(65,30) NOT NULL,
    "binLong" DECIMAL(65,30) NOT NULL,
    "binStatus" INTEGER NOT NULL DEFAULT 0,
    "binLastCleaned" TIMESTAMP(3),
    "binInstalled" TIMESTAMP(3),

    CONSTRAINT "Ebins_pkey" PRIMARY KEY ("id")
);
