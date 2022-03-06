import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { transactionsData } from "./transactionsData";

async function main() {
  for (const transactionData of transactionsData) {
    // TODO add data validation
    const parseTransactionDate = new Date(transactionData.transactionDate);
    const parseCreatedAt = new Date(transactionData.createdAt);
    const parseUpdatedAt = new Date(transactionData.updatedAt);
    await prisma.transactions.create({
      data: {
        ...transactionData,
        transactionDate: parseTransactionDate,
        createdAt: parseCreatedAt,
        updatedAt: parseUpdatedAt,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
