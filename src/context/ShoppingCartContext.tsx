import { createContext, useContext, useState } from "react";

type ShoppingCartContextProps = {
  getItemsQuantity: (id: number) => number;
  addItemToCart: (id: number) => void;
  removeItems: (id: number) => void;
  cartItems: CartItemsProps[];
};

export type CartItemsProps = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);

  function getItemsQuantity(id) {
    return (
      cartItems.find((currentItem) => currentItem.id === id)?.quantity || 0
    );
  }

  function addItemToCart(id) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) === null) {
        return [...currentItem, { id, quantity: 1 }];
      }
    });
  }

  function removeItems(id) {
    setCartItems((currentItem) => currentItem.filter((item) => item.id !== id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, getItemsQuantity, removeItems, addItemToCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
