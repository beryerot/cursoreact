import React from "react";
import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';

function App() {
  // 2. Use at the root of your app
  return (
          <>
            <NavBar />
            <ItemListContainer 
            text="Soy un texto de prueba del Item List Container"
            />
          </>
  )
}

export default App;
