import React, { useState } from 'react';
import '../ItemDetail/ItemDetail.css';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  }
  return (
    <div className='row py-5 w-100'>
      <div className='d-flex jalign-items-between'>
        <div className='m-auto'>
          <img src={item.img} className='image card-fluid w-75 rounded rounder-3 ms-4' alt={item.title} />
        </div>
        <div className='d-flex flex-column justify-content-center w-100'>
          <h2>{item.title}</h2>
          <h5>{item.description}</h5>
          <p className='fs-3 fw-semibold'>$ {item.price}</p>
          <p className='fs-4'>Cantidad: {item.stock}</p>
          {goToCart ? <Link to='/cart'><button className='btn btn-secondary'>Terminar Compra</button></Link> : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default ItemDetail