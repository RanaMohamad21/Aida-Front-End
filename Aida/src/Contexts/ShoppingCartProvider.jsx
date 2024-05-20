import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ShoppingCartContext = createContext({});

function ShoppingCartProvider({ children }) {
  // Array of objects, each containing a product ID and its quantity
  const [cartItems, setCartItems] = useState([]);

  //?  For testing purposes:
  useEffect(() => {
    console.log(
      "⚠️⚠️ Displaying the cart content in the cart context for testing purposes. ⚠️⚠️"
    );
    console.log("Cart Items: ", cartItems);
  }, [cartItems]);

  // Returns the quantity selected by the customer for the given product ID
  function getItemsQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(id, quantity =1) {
    setCartItems((currentItems) => {
      // Check if the item is already in the cart
      const itemIndex = currentItems.findIndex(item => item.id === id);
  
      if (itemIndex === -1) {
        // Item is not in the cart, add it
        return [...currentItems, { id, quantity }];
      } else {
        // Item is already in the cart, update the quantity
        const updatedItems = currentItems.map((item, index) =>
          index === itemIndex ? { ...item,  quantity } : item
        );
        return updatedItems;
      }
    });
  }
  // Function to add a new item to the cart or increase the quantity of an existing one
  function increaseItemQuantity(id) {
    setCartItems((currentItems) => {
      // Checks if the item is not already in the cart it adds it
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      }
      //  If the item already exists in the cart, increase its quantity.
      else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // A Function to decrease the quanitity of an existing item in the cart.
  function decreaseItemQuantity(id) {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === id);

      // If the item is not found in the cart, return current items
      if (itemIndex === -1) {
        return currentItems;
      }

      // If the item exists in the cart
      const updatedItems = [...currentItems];
      const currentItem = updatedItems[itemIndex];

      // If the quantity is more than 1, decrease it
      if (currentItem.quantity > 1) {
        currentItem.quantity -= 1;
      } else {
        // If the quantity is 1, remove the item from the cart
        updatedItems.splice(itemIndex, 1);
      }

      return updatedItems;
    });
  }

  function removeItemFromCart(id) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
        getItemsQuantity,
        addToCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.any,
};

export default ShoppingCartProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
