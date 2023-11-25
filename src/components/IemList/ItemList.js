import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ item }) => {
  return (
    <div className='row'>
      {
        item.map(item =>
          <div className='d-flex justify-content-center card col-md-3 m-4'
            key={item.id}>
            <Item item={item} />
          </div>
        )
      }
    </div>
  )
}

export default ItemList