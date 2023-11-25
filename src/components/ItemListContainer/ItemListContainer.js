import React from 'react';
import { useState, useEffect } from 'react';
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from '../IemList/ItemList';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();


  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    if(id){
      const queryFilter = query(queryCollection, where('categoryId', '==', id));
      getDocs(queryFilter).then((res)=>setItem(res.docs.map((products)=>({id: products.id, ...products.data()})))
      );
    }else{
      getDocs(queryCollection).then((res)=> setItem(res.docs.map((products)=>({id: products.id, ...products.data()})))
      );
    }
  }, [id])

  return (
    <div className='container'>
      <div className="d-flex justify-content-center mt-5">
        <ItemList item={item}/>
      </div>
    </div>
  )
}

export default ItemListContainer