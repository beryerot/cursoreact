import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import Item from '../components/item';
import "../components/itemList.css";
import {Link} from 'react-router-dom';
import './itemDetail.css'
import Typography from '@mui/material/Typography';

const ItemCategory = () => {

  const [items, setItem] = useState([]);

  let category = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category.category_id}`)
        .then((response) => response.json())
        .then((json) => setItem(json));
}, [category.category_id]);

return (
    <>
    <Typography align="center" variant="overline" display="block" gutterBottom style={{margin: 25}}> 
    {category.category_id}
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
