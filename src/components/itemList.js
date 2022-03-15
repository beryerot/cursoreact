import React from 'react';
import Item from './item';
import "./itemList.css";
import {Link} from 'react-router-dom';

const ItemList = ({items}) => {

    return (
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
    );
    
};

export default ItemList;