import Joi from "joi";
import { injectable } from "tsyringe";
import { prisma } from "../../../configs/database";
import { parseDateToDefault } from "../../../utils/parseDateToDefault";

@injectable()
class GetTransactionsByDate {
  async execute(startMonth: string, endMonth: string) {
    try {
      const schema = Joi.object({
        startMonth: Joi.string().empty("").min(10).max(24),
        endMonth: Joi.string().empty("").min(10).max(24),
      });
      await schema.validateAsync({ startMonth, endMonth });

      let transactions = [];
      if (!startMonth || !endMonth) {
        transactions = await prisma.transactions.findMany({ where: {} });
      } else {
        const startMonthDateInstance = new Date(startMonth);
        const endMonthDateInstance = new Date(endMonth);
        transactions = await prisma.transactions.findMany({
          where: {
            transactionDate: {
              gte: startMonthDateInstance,
              lte: endMonthDateInstance,
            },
          },
        });
      }

      return transactions.map((transaction) => ({
        ...transaction,
        transactionDate: parseDateToDefault(transaction.transactionDate),
        createdAt: parseDateToDefault(transaction.createdAt),
        updatedAt: parseDateToDefault(transaction.updatedAt),
      }));
    } catch (err) {
      if (err) throw new Error(err.message);
    }
  }
}

export { GetTransactionsByDate };
