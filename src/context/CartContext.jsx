import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Proveedor del contexto (envolverá a toda la app)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Recuperar carrito desde localStorage si existe
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Guardar en localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
  const addItem = (item, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(prod => prod.id === item.id);
      if (existing) {
        // Si ya existe, sumamos cantidad
        return prevCart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  // Eliminar un producto por ID
  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Total de items en el carrito
  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Total en dinero
  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
