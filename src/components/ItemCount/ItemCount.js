import { useEffect,useState } from 'react';
import { useCartContext } from '../Context/CartContext';

const ItemCount = ({item,stock, onAdd}) => {
  const [count, setCount] = useState(1);
  const { addProduct } = useCartContext();

  const increment = () => {
      setCount(count+1)
  }
  const decrement = () => {
      setCount((count) => count - 1);
    }
  
  useEffect(() => {
    setCount(1)
  }, []);

  const handleAddToCart = () => {
    onAdd(count);
    if (item && item.id){
      addProduct(item,count);
    }
  }


  return ( 
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <div className='d-flex'>
        <button  disabled= {count <= 1} className='btn btn-secondary m-2 mx-2' onClick={decrement}>-</button>
        <span className='d-flex align-items-center btn-secondary m-2 fs-5 fw-bold'>{count}</span>
        <button disabled={count >= stock} className='btn btn-secondary m-2 mx-2' onClick={increment}>+</button>
      </div>
      <div>
        <button className='btn btn-secondary' onClick={() => handleAddToCart(count)} > Agregar al Carrito </button>
      </div>
    </div>
  );
}

export default ItemCount