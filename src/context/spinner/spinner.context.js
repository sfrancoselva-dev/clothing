import { createContext, useState } from "react";

export const SpinnerContext = createContext({
  spinner: false,
});

export const SpinnerProvider = ({ children }) => {
  const [spinner, setSpinner] = useState(false);

  const value = { spinner, setSpinner };

  return (
    <SpinnerContext.Provider value={value}>{children}</SpinnerContext.Provider>
  );
};
