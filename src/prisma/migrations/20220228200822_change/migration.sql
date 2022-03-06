/*
  Warnings:

  - Changed the type of `transaction_date` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `created_at` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updated_at` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "transaction_date",
ADD COLUMN     "transaction_date" VARCHAR(19) NOT NULL,
DROP COLUMN "created_at",
ADD COLUMN     "created_at" VARCHAR(19) NOT NULL,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" VARCHAR(19) NOT NULL;
