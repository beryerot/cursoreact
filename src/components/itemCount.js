import React, { useState } from 'react';
import "./itemCount.css"
/* import { Link } from 'react-router-dom' */


const ItemCount = ({ data, addProduct, cantidad }) => {
    
    console.log("La cantidad es:", cantidad)
    console.log("La data es:", data)
    const newArray = cantidad.filter(function (el) {
        return el.id === data.id

      });
    const checkStock = newArray[0];
    const [counter, setCounter] = useState(1);
    function handlerCounterUp() {
        if (counter < data.stock){
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
        
        if (checkStock){
            {(checkStock.cantidad + counter > data.stock) ? alert("no hay suficiente stock"): addProduct(data.id, counter, data.price, data.title, data.image, data.stock)}
            } else 
            addProduct(data.id, counter, data.price, data.title, data.image, data.stock)
    }
      
    return (
    <div className="contador">
      {checkStock && <p className="unidadesCarrito">Unidades en el carrito: {checkStock.cantidad}</p>}
      <p>Stock: {data.stock} unidades</p>
      <p>Cantidad: {counter}</p>
      <div className="botonera">
      <button onClick={handlerCounterUp} className='botonContador'>+</button>
      <button onClick={handlerCounterDown} className='botonContador'>-</button>
      </div>
      <button onClick={setearTitulo} className='botonComprar'>Comprar</button>
      </div>
    )
};

export default ItemCount;