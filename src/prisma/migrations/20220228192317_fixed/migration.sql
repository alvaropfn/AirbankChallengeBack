/*
  Warnings:

  - You are about to alter the column `currency` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `VarChar(255)`.
  - Changed the type of `amount` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "currency" SET DATA TYPE VARCHAR(255),
DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;
