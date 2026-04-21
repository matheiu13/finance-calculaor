-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "expenses" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);
