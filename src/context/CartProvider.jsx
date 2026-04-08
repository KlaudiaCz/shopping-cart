import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  // Initialize cart state
  // We use a function in useState so this runs ONLY once (on first render)
  const [cart, setCart] = useState(() => {
    // Try to get saved cart data from localStorage
    const stored = localStorage.getItem("cart");

    // If data exists → convert string back to JS object
    // If not → start with empty cart
    return stored ? JSON.parse(stored) : [];
  });

  // This effect runs every time the cart changes
  useEffect(() => {
    // Convert cart array → string and save in localStorage
    // localStorage can only store strings!
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // dependency: runs whenever cart changes

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      // Check if product already exists in cart
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        // If exists → increase quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 } // update qty
            : item
        );
      }

      // If not exists → add new product with qty = 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove product completely from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => setCart([]);


  const decreaseFromCart = (id) => {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === id);

    if (existing.qty === 1) {
      // jeśli ilość = 1 → usuń całkowicie
      return prev.filter((item) => item.id !== id);
    }

    // jeśli więcej niż 1 → zmniejsz ilość
    return prev.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty - 1 }
        : item
    );
  });
};

  return (
    // Provide cart data and functions to all children components
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, decreaseFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
