import React, { useState, useEffect } from 'react';
import Item from './item';
import "./itemList.css";

const ItemList = () => {
    const [users, setUsers] = useState([]);

    console.log(users);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    return (
        <div className='bloque'>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <Item data={user} />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;