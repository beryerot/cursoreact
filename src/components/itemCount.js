import React, {useState} from 'react';
import "./itemCount.css"

const ItemCount = () => {

    const [counter, setCounter] = useState(0);
    const stock = 4
    function handlerCounterUp() {
        if (counter < stock){
        setCounter(counter + 1)
        } else {
            alert("No hay más stock disponible")
        } ;
    };
      function handlerCounterDown() {
        if (counter > 0){
        setCounter(counter - 1);
        } else{
            alert("La cantidad no puede ser menor a 0")
        }
    }
      
  return <div className="contador">
      <p>Cantidad de unidades: {counter}</p>
      <div className="botonera">
      <button onClick={handlerCounterUp}>+</button>
      <button onClick={handlerCounterDown}>-</button>
      </div>
    </div>;
};

export default ItemCount;