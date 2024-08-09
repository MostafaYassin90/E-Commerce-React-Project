import { createContext, useState } from "react";

export let CartContext = createContext();

function CartContextProvider(props) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;