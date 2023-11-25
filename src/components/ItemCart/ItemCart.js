import React from 'react';
import { FaTrashAlt } from "react-icons/fa";


const ItemCart = ({ product, handleIncrement, handleDecrement, handleDelete}) => {


    return (
        <div className='d-flex my-5 w-100'>
            <img className='w-25 m-1 rounded me-5' src={product.img} alt={product.title} />
            <div className='d-flex flex-column align-items-center justifiy-content-center w-100'>
                <p className='fs-3 fw-bold'>{product.title}</p>
                <p className='fs-3'>Cantidad: {product.quantity}</p>
                <p className='fs-3'>Precio unitario: $ {product.price}</p>
                <p className='fs-3'>Subtotal: ${product.quantity * product.price}</p>
                <div>
                <button className='btn btn-info me-2' onClick={() => handleIncrement(product.id)}>+</button>
                <button disabled= {product.quantity <= 1}className='btn btn-info me-2' onClick={() => handleDecrement(product.id)}>-</button>
                <button className='btn btn-danger' onClick={() => handleDelete(product.id)}><FaTrashAlt /></button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart