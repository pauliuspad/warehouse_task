import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Products from './components/Products';
//import AddProduct from './components/AddProduct'
import LayoutHeader from './Layout/Header';
import Preview from './Layout/PreviewProducts';
import FieldNames from './Layout/FieldNames';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'warehouseApp.products'

function App() {

  const [products, setProduct] = useState([])

  const productName = useRef()
  const productEAN= useRef()
  const productType = useRef()
  const productWeight = useRef()
  const productColor = useRef()
  const productQuantity = useRef()
  const productPrice = useRef()
  
  useEffect(() => {
    const storedproducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedproducts) {setProduct(storedproducts)}
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
  }, [products])

  function toggleProduct(id) {
    const newProducts = [...products]
    const product = newProducts.find(product => product.ID === id)
    product.Active = !product.Active
    setProduct(newProducts)
  }

  function deleteProduct(id){
    const newProducts = products.filter(product => product.ID !== id)
    setProduct(newProducts)
  }

   // adds Products to Products list. 
   // ToDo add checking to check if required inputs are not empty. Afther check clear inputs (productName.current.value = null ...)
  function addProduct(e) {
    const Name = productName.current.value
    const EAN = productEAN.current.value
    const Type = productType.current.value
    const Weight = productWeight.current.value
    const Color = productColor.current.value
    const Quantity = productQuantity.current.value
    const Price = productPrice.current.value

    setProduct(prevProducts => {
      return [...prevProducts, {ID: uuidv4(), Name , EAN, Type, Weight, Color, Quantity, Price, Active: false}]
    })
  }

    function setViewProp(id){
     var selectedProduct = products.filter(product => product.ID === id)
      console.log(selectedProduct[0].ID)
    }
 
  return (
    <Router path="/products" >
      <div className="App">
        <LayoutHeader />
        <Route exact path="/products/create" render={props => (
          <React.Fragment>
            <FieldNames/>
            <form>
              <input ref={productName} type="text" name="Name" placeholder="Name of the product" ></input>
              <input ref={productEAN} type="number" name="EAN" placeholder="EAN" ></input>
              <input ref={productType} type="text" name="Type" placeholder="Type" ></input>
              <input ref={productWeight} type="number" name="Weight" placeholder="Weight" ></input>
              <input ref={productColor} type="text" name="Color" placeholder="Color" ></input>
              <input ref={productQuantity} type="number" name="Quantity" placeholder="Quantity" ></input>
              <input ref={productPrice} type="number" name="Price" placeholder="Price" ></input>
              <Link to='/products' > <Button variant="success"  onClick={addProduct}> Save </Button> </Link>
            </form>
          </React.Fragment>
        )} />
        
        <Route exact path="/products" render={props => (
          <React.Fragment>
            <h3>Warehouse app</h3>
            <FieldNames/>
            
            <Products products = {products} toggleProduct = {toggleProduct} deleteProduct= {deleteProduct} setViewProp={setViewProp} />
            
          </React.Fragment>
        )} />

        <Route exact path="/products/view" render={props => (
          <React.Fragment>
            <Preview setViewProp={setViewProp} />
          </React.Fragment>
        )} />
        
        <Route exact path="/products/{id}/edit" render={props => (
          <React.Fragment>
            
          </React.Fragment>
        )} />
        
        
      </div>
    </Router>
  );
}

export default App;

