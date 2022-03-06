import { prisma } from "../../../configs/database";
import { injectable } from "tsyringe";

@injectable()
class GetTransactionsService {
  async execute() {
    const transactions = await prisma.transactions.findMany({ where: {} });
    return transactions;
  }
}

export { GetTransactionsService };
