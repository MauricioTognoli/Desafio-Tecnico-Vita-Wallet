interface IBalanceState {
  balance: number;
}

interface IBalanceContextProps {
  balance: number;
  updateBalance: () => Promise<void>;
}

export type { IBalanceState, IBalanceContextProps };
