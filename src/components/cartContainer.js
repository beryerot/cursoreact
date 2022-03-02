import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import Cart from './cart';

const CartContainer = () => {

  const { products, deleteProducts, deleteAllProducts, totalUnits, totalPrice } = useContext(CartContext);

  return (
    <section>
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
      {(totalUnits() === 0) ? <div><p style={{ textAlign: "center"}}>No hay productos en el carrito</p><Link to="/"><p style={{textAlign: "center"}}>Seguí buscando productos</p></Link></div> : <div style={{textAlign: "center"}}><p>Precio total: ${totalPrice().toFixed(2)}</p><p>Total de productos: {totalUnits()}</p>
      <button onClick={() => deleteAllProducts()}>VACIAR CARRITO</button><Link to="/shop"><button>TERMINAR COMPRA</button></Link>
      </div>
      }
    </section>
          
    )
    }
export default CartContainer;
