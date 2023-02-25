import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Products from './components/products/products';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Products/>
    </BrowserRouter>    
    </>
  );
}

export default App;
