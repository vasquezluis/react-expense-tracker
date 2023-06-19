import { Reducer } from "react";

type Transaction = {
  id?: number;
  description: string;
  amount: number;
};

interface State {
  transactions: Transaction[];
}

interface Action {
  type: string;
  payload: Transaction;
}

/**
 * Component to manipulate an get the value of state
 * @param state the value of state
 * @param action the action for the state manipulation
 * @returns the new state
 */
const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
