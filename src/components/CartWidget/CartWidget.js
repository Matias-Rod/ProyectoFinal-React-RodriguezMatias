import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();
  return (
    <div>
      <button type='button' className='btn position-relative text-decoration-none'>
        <BsFillCartFill />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() || cart.length}</span>
        </button>
    </div>
  )
}

export default CartWidget