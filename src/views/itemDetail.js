import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "../components/itemCount";
import './itemDetail.css'
import {Link} from 'react-router-dom';


const ItemDetail = () => {

  const [item, setItem] = useState([]);

  let id = useParams();
  let itemID = id.id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemID}`)
        .then((response) => response.json())
        .then((json) => setItem(json));
}, [itemID]);

  return (
  <div className='ficha'>
  <Card style={{ margin: 40, width: 800 }} sx={{ height: 1000}}>
  <CardContent>
  <Link to ={`/category/${item.category}`}>
  <Typography gutterBottom variant='p' component='p' style={{color: 'white', backgroundColor: 'grey'}}>
          {item.category}
      </Typography>
      </Link>
      <Typography gutterBottom variant='h4' component='div'>
          {item.title}
      </Typography>
<CardMedia
component='img'
height='380'
image={item.image}
alt={item.title}
/>
<Typography gutterBottom variant='h6' component='div' align='justify' style={{ margin: 20}}>
          Precio: ${item.price}
      </Typography>
<Typography gutterBottom variant='p' component='div' align='justify' style={{ margin: 20}}>
          {item.description}
      </Typography>
  </CardContent>
  <ItemCount data={item}/>
  </Card>
  </div>
)
};

export default ItemDetail;
