import React, {useState, useEffect} from "react";
import ItemList from './itemList';
import Typography from '@mui/material/Typography';
import "./itemListContainer.css"

import { db } from '../firebase/firebaseconfig';
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemListContainer = ({text}) => {
    const [items, setItems] = useState([]);

  
    useEffect(() => {
  
      const getItems = async () => {
      const q = query(collection(db, "items"), where("stock", ">=", 1));
      const docs = [];
      const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) =>{
        docs.push({...doc.data(), id: doc.id});
      });
      setItems(docs)
      };
      getItems();
    }, [])

    return(
        <>
        <Typography align="center" variant="overline" display="block" gutterBottom style={{margin: 25}}> 
        Todos los productos
        </Typography>
        <div className="itemList">
        <p>{text}</p>
        <ItemList items={items}/>
        </div>
        </>
        )
}

export default ItemListContainer;