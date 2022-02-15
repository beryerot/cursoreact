import React, {useState} from 'react';
import "./itemCount.css"
import { Link } from 'react-router-dom'

const ItemCount = ({data}) => {

    const [counter, setCounter] = useState(1);
    const [compra, setCompra] = useState(0);
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
    function comprar() {
        setCompra(`item: ${data.title}, cantidad: ${counter}`)

    }
      
    return (
        <div>
        {(compra === 0) 
        ? ( <div className="contador">
      <p>Cantidad: {counter}</p>
      <div className="botonera">
      <button onClick={handlerCounterUp} className='botonContador'>+</button>
      <button onClick={handlerCounterDown} className='botonContador'>-</button>
      </div>
      <button onClick={comprar} className='botonComprar'>Comprar</button>
      </div>) 
        : (<div className='carrito'><div>Añadiste al carrito:</div><div> {compra} </div><Link to='/cart'><button className='botonComprar'>Terminar mi compra</button></Link></div>)}

      </div>
    )
};



export default ItemCount;