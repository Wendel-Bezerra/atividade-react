import { createContext, useContext, useState } from 'react';

// Estado global do carrinho: Produtos adiciona, Header mostra a quantidade e Carrinho lista os itens
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => setItems((list) => [...list, product]);
  const removeFromCart = (index) => setItems((list) => list.filter((_, i) => i !== index));

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
