import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
const [products, setProducts] = useState(
[]    
);
const [total, setTotal] = useState(0);

        const addProduct = (productID, cant, price, producto, image, stock) => {
          const foundProduct = products.find(
            (product) =>  
            product.id === productID
              );
          if (foundProduct) {
            foundProduct.cantidad += cant;
          } else {
          products.push({ id: productID, cantidad: cant, precio: price, titulo: producto, subtotal: (price*cant), imagen: image, stock: stock });
          setProducts([...products]) }
          const newTotal = (total + cant)
          setTotal(newTotal)
        }
      
        const deleteProducts = (productID) => {
          const updatedProducts = products.filter(
            (product) => product.id !== productID
          );

          setProducts(updatedProducts);

        };

        const deleteAllProducts = () => {
          setProducts([])
        }

        const totalUnits = () => {
          return products.reduce((acc, value) => acc + value.cantidad, 0);
        };

        const totalPrice = () => {
          return products.reduce((acc, value) => acc + value.subtotal, 0);
        };

        

return <CartContext.Provider value={{ products, addProduct, deleteProducts, deleteAllProducts, total, totalUnits, totalPrice }}>
    {children}
</CartContext.Provider>
}
