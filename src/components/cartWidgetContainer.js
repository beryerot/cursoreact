import React, { useContext } from "react";
import { CartContext } from '../context/cartContext'
import CartWidget from './cartWidget'

const CartWidgetContainer = () => {
    
  const { totalUnits } = useContext(CartContext);

        return (
            <CartWidget totalUnits={totalUnits}/>
        )
    
  }
  
  export default CartWidgetContainer;