import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IBalanceContextProps } from "../interfaces/BalanceInterfaces";
import axios from "axios";

const BalanceContext = createContext<IBalanceContextProps | undefined>(
  undefined
);

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState<number>(0);

  const updateBalance = async () => {
    try {
      const response = await axios.get(
        "https://api.qa.vitawallet.io/api/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error al obtener el balance:", error);
    }
  };

  useEffect(() => {
    updateBalance();
  }, []);

  return (
    <BalanceContext.Provider value={{ balance, updateBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = (): IBalanceContextProps => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalance debe ser usado dentro de un BalanceProvider");
  }
  return context;
};
