import React, { useState, useContext } from 'react';
import "./itemCount.css"
/* import { Link } from 'react-router-dom' */
import { CartContext } from '../context/cartContext'

const ItemCount = ({ productID }) => {
    const { addProduct } = useContext(CartContext);
    const [counter, setCounter] = useState(1);
    const stock = 4
    function handlerCounterUp() {
        if (counter < stock){
        setCounter(counter + 1)
        } else {
            alert("No hay más stock disponible")
        } ;
    };
    function handlerCounterDown() {
        if (counter > 1){
        setCounter(counter - 1);
        } else{
            alert("La cantidad no puede ser 0")
        }
    }
    function setearTitulo(){
        addProduct(productID, counter)

    }
      
    return (
    <div className="contador">
      <p>Cantidad: {counter}</p>
      <div className="botonera">
      <button onClick={handlerCounterUp} className='botonContador'>+</button>
      <button onClick={handlerCounterDown} className='botonContador'>-</button>
      </div>
      <button onClick={setearTitulo()} className='botonComprar'>Comprar</button>
      </div>
    )
};

export default ItemCount;