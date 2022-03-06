-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "account" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "category" VARCHAR(255),
    "reference" VARCHAR(255),
    "currency" DOUBLE PRECISION NOT NULL,
    "amount" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);
