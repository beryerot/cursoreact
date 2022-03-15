import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import Item from '../components/item';
import "../components/itemList.css";
import {Link} from 'react-router-dom';
import './itemDetail.css'
import Typography from '@mui/material/Typography';

import { db } from '../firebase/firebaseconfig';
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemCategory = () => {

  const [items, setItems] = useState([]);

  let category = useParams();
  let cat = category.category_id;
  

  useEffect(() => {
  
    const getItems = async () => {
    const q = query(collection(db, "items") , where("category", "==", cat), where("stock", ">=", 1));
    const docs = [];
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
      docs.push({...doc.data(), id: doc.id});
    });
    setItems(docs)
    };
    getItems();
  }, [cat])

return (
  
    <>
    <Typography align="center" variant="overline" display="block" gutterBottom style={{margin: 25}}> 
    {cat}
    </Typography>
<div className='bloque'>
        {items.map((item) => {
            return (
                <div key={item.id}>
                    
                    <Link to ={`/detail/${item.id}`}>
                    <Item data={item} />
                    </Link>
                </div>
            )
            
        })}
        
    </div>
    </>
);
};


export default ItemCategory;
