import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
