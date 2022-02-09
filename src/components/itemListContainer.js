import React from "react";
import ItemList from './itemList';
import Typography from '@mui/material/Typography';
import "./itemListContainer.css"

const itemListContainer = ({text}) => {

    return(
        <>
        <Typography align="center" variant="overline" display="block" gutterBottom style={{margin: 25}}> 
        Todos los productos
        </Typography>
        <div className="itemList">
        <p>{text}</p>
        <ItemList />
        </div>
        </>
        )
}

export default itemListContainer;