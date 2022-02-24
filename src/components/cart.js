import React from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import './cart.css';

const Cart = ( {product, deleteProducts, total} ) => {

  return (
        <>
        
        {(total === 0) ? "No hay productos en el carrito" :
        <ul className='carritoList'>
        <li><div className='imagenList'><Avatar alt="Remy Sharp" src={product.imagen} sx={{ width: 80, height: 80 }}/><strong>{product.titulo}</strong></div><p>Cantidad: {product.cantidad}</p><p>Precio: ${product.precio}</p><p>Subtotal: ${product.subtotal}</p><button style={{marginTop: "16px", marginBottom: "16px"}} onClick={() => deleteProducts(product.id)}>BORRAR ITEM</button></li>
        <Divider />
        </ul>
        }
        </>
  )};

export default Cart;
