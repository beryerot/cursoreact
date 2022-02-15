import React from "react";
import NavBar from './components/navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home';
import Cart from './components/cart';
import Pagos from './views/formas-de-pago';
import Error from './views/error';
import ItemDetail from './views/itemDetail';
import ItemCategory from "./views/itemCategory";


function App() {

  return (
          <>
            <Router>
            <NavBar />

              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/pagos" element={<Pagos />}/>
                <Route path="*" element={<Error />}/>
                <Route path="/detail/:id" element={<ItemDetail />}/>
                <Route path="/category/:category_id" element={<ItemCategory />}/>
              </Routes>
            </Router>
          </>
  )
}

export default App;
