import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext } from "react";

type ShoppingCartContextProps = {
  getItemsQuantity: (id: number) => number;
  addItemToCart: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems: CartItemsProps[];
  cartItemsQuantity: number;
};

export type CartItemsProps = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemsProps[]>(
    "shopping-cart",
    []
  );

  function getItemsQuantity(id) {
    return (
      cartItems?.find((currentItem) => currentItem.id === id)?.quantity || 0
    );
  }

  function addItemToCart(id) {
    setCartItems((currentItem) => {
      if (currentItem?.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem?.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id) {
    setCartItems((currentItem) => currentItem.filter((item) => item.id !== id));
  }

  const cartItemsQuantity = cartItems?.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        removeItem,
        addItemToCart,
        cartItemsQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
