-- CreateTable
CREATE TABLE "Complaints" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "complaintImage" TEXT NOT NULL,
    "complaint" TEXT NOT NULL,

    CONSTRAINT "Complaints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Complaints" ADD CONSTRAINT "Complaints_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
