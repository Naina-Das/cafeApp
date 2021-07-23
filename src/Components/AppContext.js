import React, { createContext, useState } from "react";
import { product } from "./product";
export const BillContext = createContext();
// This context provider is passed to any component requiring the context
export const BillProvider = ({ children }) => {
  const [quantityIndex, setQuantity] = useState(-1);
  const [selectedTab, setTab] = useState('Drinks')
  const [selectedCategory,setCategory] = useState(product[0]);
  const initialData = product[0].menus.filter(menu => menu.category === "Wine");
  // const [filterData, setData] = useState(initialData);
  const [selectedMenu, setMenu] = useState("Wine");
  const [cartData, setCartdata] = useState({});
  
  return (
    <BillContext.Provider
      value={{
        data : product, 
        selectedCategory,setCategory,  
        selectedMenu, setMenu,
        cartData, setCartdata,
        originalData : product,
        setQuantity 
      }}
    >
      {children}
    </BillContext.Provider>
  );
};