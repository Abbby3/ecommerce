import { createContext, useContext, useState } from "react";

// global boolean used for triggering rerenders (probs not good practice??? :3)
const LazyContext = createContext();
export const useLazyContext = () => useContext(LazyContext);
export const LazyProvider = ({ children }) => {
  const [isLazy, setIsLazy] = useState(false);

  const lazy = () => {
    setIsLazy(!isLazy);
  };

  return <LazyContext.Provider value={{ isLazy, lazy }}>{children}</LazyContext.Provider>;
};
