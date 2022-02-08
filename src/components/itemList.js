import React, { useState, useEffect } from 'react';
import Item from './item';
import "./itemList.css";
import Spinner from  './spinner';
import {Link} from 'react-router-dom';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setItems(json));
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
    }, []);

    return (
        <div className='bloque'>
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        {isLoading ? <Spinner /> : 
                        <Link to ={`/detail/${item.id}`}>
                        <Item data={item} />
                        </Link>}
                    </div>
                )
                
            })}
            
        </div>
    );
    
};

export default ItemList;