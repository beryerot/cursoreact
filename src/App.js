import React from "react";
import NavBar from './components/navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home';
import CartContainer from './components/cartContainer';
import Pagos from './views/formas-de-pago';
import Error from './views/error';
import ItemDetail from './views/itemDetail';
import ItemCategory from "./views/itemCategory";
import { CartProvider } from './context/cartContext';

function App() {

  return (
          <>
          <CartProvider>
            <Router>
            <NavBar />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<CartContainer />}/>
                <Route path="/pagos" element={<Pagos />}/>
                <Route path="*" element={<Error />}/>
                <Route path="/detail/:id" element={<ItemDetail />}/>
                <Route path="/category/:category_id" element={<ItemCategory />}/>
              </Routes>
            </Router>
            </CartProvider>
          </>
  )
}

export default App;
