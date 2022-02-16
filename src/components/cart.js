import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext'

const Cart = () => {

  const { products, addProduct } = useContext(CartContext);

  console.log(products);
  return (
  <div>
  <h3>Carrito</h3>
  <button onClick={() => addProduct()}>Sumar cantidad</button>
  </div>
  )};

export default Cart;
