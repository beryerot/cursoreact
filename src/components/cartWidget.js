import React from "react";
import "./cartWidget.css";

const CartWidget = ({totalUnits}) => {
    
      
  return (
    <section>
              {(totalUnits() === 0) ? null : <span className="cartWidget">{totalUnits()}</span>}
    </section>
        )
    
  }
  
  export default CartWidget;