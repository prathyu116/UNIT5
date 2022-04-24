import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //this children is App component
  const [cart, SetCart] = useState(1);
  const handleChange = (inc) => {
    SetCart(cart + inc);
  };
  return <CartContext.Provider value={{ cart, handleChange }}>{children}</CartContext.Provider>;
};

//this is provider
//component is s consumer
 