import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './cart.css';

const Cart = ( { product, deleteProducts } ) => {
  const itemBorrado = () => toast.error('Eliminaste un producto');
  return (
        <>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={product.imagen} sx={{ width: 100, height: 100, marginRight: 2 }}/>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Link to= {`/detail/${product.id}`} style={{textDecoration: 'none'}}>
            <Typography>
            {product.titulo}
            </Typography>
            </Link>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="overline"
                color="text.primary"
              >
                Cantidad: {product.cantidad}
              </Typography>
              Precio: ${product.precio}
            </React.Fragment>
          }
        />
      <Button endIcon={<DeleteIcon />} onClick={() => deleteProducts(product.id, itemBorrado())}>BORRAR ITEM</Button>
      </ListItem>
      <Divider variant="inset" component="li" />
        
        <Divider />
        </List>
        <Toaster 
          position="top-center"
          reverseOrder={false}/>
        </>
  )};

export default Cart;
