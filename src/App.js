import React from 'react';
import './App.css';
import Products from './components/Products';
import ProductsDatabase from './Data.json';

function App() {
  return (
    <div className="App">
     <h3>Warehouse app</h3>
     
     <ul>
      <Products DatabaseData = {ProductsDatabase.Products} />
    </ul>
    
    </div>
  );
}

export default App;

