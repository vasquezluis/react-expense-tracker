import { FC } from "react";
import { useGlobalState } from "../context/GlobalState";

interface BalanceProps {}

/**
 * The component that render the balance graphic
 * @param param0
 * @returns
 */
const Balance: FC<BalanceProps> = ({}) => {
  const data = useGlobalState();

  return (
    <div>
      <h1>Balancde</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Balance;
