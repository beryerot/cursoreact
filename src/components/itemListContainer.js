import React from "react";
import "./itemListContainer.css"

const itemListContainer = ({text}) => {

    return(
        <div className="itemList">
        <p>{text}</p>
        </div>
        )
}

export default itemListContainer;