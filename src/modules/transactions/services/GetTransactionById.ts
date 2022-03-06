import Joi from "joi";
import { injectable } from "tsyringe";
import { prisma } from "../../../configs/database";
import { parseDateToDefault } from "../../../utils/parseDateToDefault";

@injectable()
class GetTransactionById {
  async execute(transactionId: string) {
    try {
      const schema = Joi.object({
        transactionId: Joi.string().min(36).max(36).required(),
      });
      await schema.validateAsync({ transactionId });

      const transaction = await prisma.transactions.findUnique({
        where: {
          id: transactionId,
        },
      });
      return {
        ...transaction,
        transactionDate: parseDateToDefault(transaction.transactionDate),
        createdAt: parseDateToDefault(transaction.createdAt),
        updatedAt: parseDateToDefault(transaction.updatedAt),
      };
    } catch (err) {
      if (err) throw new Error(err.message);
    }
  }
}

export { GetTransactionById };
