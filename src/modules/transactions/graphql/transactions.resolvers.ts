import { container } from "tsyringe";
import { GetTransactionsService } from "../services/GetTransactionsService";
import { GetTransactionsByDate } from "../services/GetTransactionsByDate";
import { GetTransactionById } from "../services/GetTransactionById";

const transactionsResolvers = {
  Query: {
    getAllTransactions() {
      const getTransactionsService = container.resolve(GetTransactionsService);
      const transactions = getTransactionsService.execute();
      return transactions;
    },
    getTransactionsByDate(
      _,
      { startMonth, endMonth }: { startMonth: string; endMonth: string }
    ) {
      const getTransactionsByDate = container.resolve(GetTransactionsByDate);
      const transactions = getTransactionsByDate.execute(startMonth, endMonth);
      return transactions;
    },
    getTransactionById(_, { transactionId }: { transactionId: string }) {
      const getTransactionById = container.resolve(GetTransactionById);
      const transaction = getTransactionById.execute(transactionId);
      return transaction;
    },
  },
};

export default transactionsResolvers;
