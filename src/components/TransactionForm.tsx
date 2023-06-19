import { FC, useState } from "react";
import { useGlobalState } from "../context/GlobalState";

interface TransactionFormProps {}

/**
 * Function to create transactions through the form
 * @param param0
 * @returns a form to create transactions
 */
const TransactionForm: FC<TransactionFormProps> = ({}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useGlobalState();

  const OnSubmit = (e: any) => {
    e.preventDefault();

    addTransaction({
      id: 1,
      description,
      amount,
    });

    console.log(description, amount);
  };

  return (
    <div>
      <form onSubmit={OnSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
