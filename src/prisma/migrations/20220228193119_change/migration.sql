/*
  Warnings:

  - You are about to alter the column `currency` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `status` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(20)`.
  - You are about to alter the column `amount` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "currency" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "status" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "amount" SET DATA TYPE VARCHAR(20);
