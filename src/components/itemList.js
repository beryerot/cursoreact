import React, { useState, useEffect } from 'react';
import Item from './item';
import "./itemList.css";
import Spinner from  './spinner';
import {Link} from 'react-router-dom';

const ItemList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setUsers(json));
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
    }, []);

    return (
        <div className='bloque'>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {isLoading ? <Spinner /> : 
                        <Link to ={`/detail/${user.id}`}>
                        <Item data={user} />
                        </Link>}
                    </div>
                )
                
            })}
            
        </div>
    );
    
};

export default ItemList;