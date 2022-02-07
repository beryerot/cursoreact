import React, {useState} from 'react';
import "./itemCount.css"

const ItemCount = () => {

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
    function comprar() {
        alert("Todavía no se puede comprar")
    }
      
  return <div className="contador">
      <p>Cantidad: {counter}</p>
      <div className="botonera">
      <button onClick={handlerCounterUp} className='botonContador'>+</button>
      <button onClick={handlerCounterDown} className='botonContador'>-</button>
      </div>
      <button onClick={comprar} className='botonComprar'>Comprar</button>
    </div>
};

export default ItemCount;