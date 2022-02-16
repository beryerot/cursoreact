import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
const [products, setProducts] = useState([
    {}
]);

        const addProduct = (productID, cant) => {
          products.push({ id: productID, cantidad: cant });
          setProducts([...products]) 
          console.log(products)
        }


return <CartContext.Provider value={{ products, addProduct }}>
    {children}
</CartContext.Provider>
}
