import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';  
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "./itemCount";
import '../views/itemDetail.css'
import { CartContext } from '../context/cartContext';


const ItemDetail = ({ item }) => {
  const { addProduct, products } = useContext(CartContext);

  return (
<Box sx={{ flexGrow: 1 }} height= "100%">
      <Grid container spacing={2} sx={{ justifyContent: 'center'}}>
        <Grid item lg={6} sx={{ justifyContent: 'center'}}>
      <CardMedia
    component='img'
image={item.image}
alt={item.title}
    height= '600px'
/>
    </Grid>
    <Grid item lg={6} sx={{ alignItems: 'center' }}>
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
          {item.title}
      </Typography>
<Typography gutterBottom variant='h6' component='div' align='justify'>
          Precio: ${item.price}
      </Typography>
<Typography gutterBottom variant='p' component='div' align='justify'>
          {item.description}
      </Typography>
  </CardContent>
    {(item.stock === 0) ? 
    <Typography gutterBottom variant='h6' component='div' align='center' style={{ margin: 20}}>
    El producto no está disponible
    </Typography>
    : <ItemCount data={item} addProduct={addProduct} cantidad={products} sx={{ alignSelf: 'flex-end' }}/>}
        </Grid>
      </Grid>
    </Box>
)
};

export default ItemDetail;
