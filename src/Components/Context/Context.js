import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
};

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return (
    <Context.Provider value={{ cart, addToCart,removeFromCart }}>
    {children}
    </Context.Provider>
  );
};

export const useCart = () => {
  return useContext(Context);
};

export default CartContext;
