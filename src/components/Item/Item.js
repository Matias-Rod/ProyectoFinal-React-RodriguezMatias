import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>
    <div className='container'>
        <div className='card border-0 m-auto'>
          <div>
            <img src={item.img} className='image-top w-75 m-3' alt={item.title}/>
          </div>
            <div className='card-body tect-center'>
                <p className='card-text fs-5 '>{item.title} - ${item.price}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Item