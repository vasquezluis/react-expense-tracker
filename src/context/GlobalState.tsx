import React, { useReducer, useContext, createContext, ReactNode } from "react";
import AppReducer from "./AppReducer";

// -> state
const initialState = {
  transactions: [],
};

export const Context = createContext<any>(null);

// -> customHook
export const useGlobalState = () => {
  const context = useContext(Context);

  return context;
};

type Transaction = {
  id?: number;
  description: string;
  amount: number;
};

interface GlobalProviderProps {
  children: ReactNode;
}

/**
 * Function to share the state
 * @param children Every child component that can use the value provided
 * @returns the value of the state
 */
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  /**
   * Function to add a transaction
   * @param transaction the transaction to add -> {id?, description, amount}
   */
  const addTransaction = (transaction: Transaction): void => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <Context.Provider
      value={{ transactions: state.transactions, addTransaction }}
    >
      {children}
    </Context.Provider>
  );
};
