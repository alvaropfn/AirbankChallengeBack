/*
  Warnings:

  - You are about to drop the `Transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Transactions";

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "account" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "category" VARCHAR(255),
    "reference" VARCHAR(255),
    "currency" DOUBLE PRECISION NOT NULL,
    "amount" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
