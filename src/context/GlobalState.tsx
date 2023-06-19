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

  return (
    <Context.Provider value={{ transaction: state.transactions }}>
      {children}
    </Context.Provider>
  );
};
