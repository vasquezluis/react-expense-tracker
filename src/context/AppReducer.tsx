import { Reducer } from "react";

type Transaction = {};

interface State {
  transactions: Transaction[];
}

interface Action {
  type: string;
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
      return state;
    default:
      return state;
  }
};

export default reducer;
