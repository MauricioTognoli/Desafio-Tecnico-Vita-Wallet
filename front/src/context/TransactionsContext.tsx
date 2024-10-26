import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ITransaction,
  ITransactionsContextProps,
} from "../interfaces/TransactionsInterfaces";
import axios from "axios";

const TransactionsContext = createContext<
  ITransactionsContextProps | undefined
>(undefined);

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "https://api.qa.vitawallet.io/api/transactions",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error al obtener transacciones:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = (): ITransactionsContextProps => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      "useTransactions debe ser usado dentro de un TransactionsProvider"
    );
  }
  return context;
};
