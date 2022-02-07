import React from "react";
import NavBar from './components/navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home';
import Envios from './views/costo-de-envio';
import Pagos from './views/formas-de-pago';
import Error from './views/error';
import ItemDetail from './views/itemDetail';


function App() {

  return (
          <>
            <Router>
            <NavBar />

              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/envios" element={<Envios />}/>
                <Route path="/pagos" element={<Pagos />}/>
                <Route path="*" element={<Error />}/>
                <Route path="/detail/:id" element={<ItemDetail />}/>
              </Routes>
            </Router>
          </>
  )
}

export default App;
