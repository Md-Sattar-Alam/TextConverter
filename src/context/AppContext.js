import { createContext } from "react";
export const AppContext = createContext();
const ContextProvider = (props) => {
  const name = "Md Sattar";
  const phone = "+1 8145895472";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
