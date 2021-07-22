import React, { createContext, useState } from "react";
import { product } from "./product";
export const BillContext = createContext();
// This context provider is passed to any component requiring the context
export const BillProvider = ({ children }) => {
  const [quantityIndex, setQuantity] = useState(-1);
  return (
    <BillContext.Provider
      value={{
        data : product,
        originalData : product,
        setQuantity 
      }}
    >
      {children}
    </BillContext.Provider>
  );
};