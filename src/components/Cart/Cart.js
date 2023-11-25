import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = (product) => {
  const { cart, totalPrice, increment, decrement, removeProduct, clearCart } = useCartContext()

  const onIncrement = (id) => {
    increment(id);
  }

  const onDecrement = (id) => {
    decrement(id);
  }

  if (cart.length === 0) {
    return (
      <>
        <p className='my-4 fs-1'>No hay elementos en el carrito </p>
        <Link to="/" className='text-decoration-none m-3'><button className='btn btn-secondary fs-5'>Hacer compras</button></Link>
      </>
    );
  }

  return (
    <>
      <div className='d-flex flex-column justify-content-center'>
        <div className='mx-4'>
          {cart.map((product) => (
            <ItemCart key={product.id} handleIncrement={onIncrement} handleDecrement={onDecrement} handleDelete={removeProduct} product={product} />
          ))}
        </div>
      </div>
      <p className='d-flex justify-content-center fs-3'>Total: ${totalPrice()}</p>

      {' '}
      <div>
        <Link to="/checkout"><button className="btn btn-danger w-50 mb-5">Finalizar Compra</button></Link>
        <button className='btn btn-danger mx-2 mb-5' onClick={() => clearCart()}>Vaciar Carrito</button>
      </div>

    </>
  );
};

export default Cart;