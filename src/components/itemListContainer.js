import React from "react";

import ItemList from './itemList';
import "./itemListContainer.css"

const itemListContainer = ({text}) => {

    return(
        <div className="itemList">
        <p>{text}</p>
        <ItemList />
        </div>
        )
}

export default itemListContainer;