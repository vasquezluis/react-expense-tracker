import { FC } from "react";
import { GlobalProvider } from "./context/GlobalState";

// -> Components
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>Hello World</h1>
    </GlobalProvider>
  );
};

export default App;
