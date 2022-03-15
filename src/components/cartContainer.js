import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cart from './cart';

const CartContainer = () => {

  const { products, deleteProducts, deleteAllProducts, totalUnits, totalPrice } = useContext(CartContext);

  return (
   <>
    <h2 style={{ textAlign: "center" }}>Carrito</h2>
    {products.map((product, index) => {
      return (
        <Cart
          key={index}
          product={product}
          deleteProducts={deleteProducts}
          deleteAllProducts={deleteAllProducts}
          />
          
        );
      })}
      {(totalUnits() === 0) ?       
            <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              textAlign: 'center',
              flexDirection: 'column',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
        >
          <Typography variant="overline" style={{ textAlign: "center", width:"100%"}}>No hay productos en el carrito</Typography>
          <Link to="/" style={{textDecoration: 'none', margin: '0 auto', display: "flex"}}><Button >Seguí buscando productos</Button></Link> 
          </Box>
          : 
          <div style={{textAlign: "center"}}><p>Precio total: ${totalPrice().toFixed(2)}</p><p>Total de productos: {totalUnits()}</p>
      <Box         sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
      <Stack direction="row" spacing={4} alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
      <Button startIcon={<RemoveShoppingCartIcon/>} color="error" onClick={() => deleteAllProducts()}>VACIAR CARRITO</Button><Link to="/shop" style={{textDecoration: 'none'}}><Button endIcon={<ArrowForwardIosIcon/>} color="success">IR AL CHECKOUT</Button></Link>
      </Stack>
      </Box>
      </div>
      }
    </>
          
    )
    }
export default CartContainer;
