import React from "react";
import ItemCount from "./itemCount"
import "./itemListContainer.css"

const itemListContainer = ({text}) => {

    return(
        <div className="itemList">
        <p>{text}</p>
        <ItemCount />
        </div>
        )
}

export default itemListContainer;