import { useState, createContext, useContext } from 'react';

const CartContext = createContext(useContext);

export const useCartContext = () => useContext(CartContext);

function CartProvider ({ children })  {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((products) => {
          return products.id === item.id
            ? { ...products, quantity: products.quantity + quantity }
            : products;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const increment = (id) =>{
    const newCart = [...cart];
    const index = cart.findIndex(e=> e.id===id)
    newCart[index].quantity++
    setCart(newCart)
  }
  
  const decrement = (id) =>{
    const newCart = [...cart];
    const index = cart.findIndex(e=> e.id===id)
    newCart[index].quantity--
    setCart(newCart)
  }

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((item) => item.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        increment,
        decrement,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;