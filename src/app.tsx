import Main from "./components/main/main";
import PrideProvider from "./context/prideContext";

export const App = () => {
  return (
    <PrideProvider>
      <Main />
    </PrideProvider>
  );
};
