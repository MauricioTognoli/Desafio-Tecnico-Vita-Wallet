interface ITransaction {
  id: string;
  type: string;
  attributes: [];
}

interface ITransactionsContextProps {
  transactions: ITransaction[];
  fetchTransactions: () => Promise<void>;
}

export type { ITransaction, ITransactionsContextProps };
