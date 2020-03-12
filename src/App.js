import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

import Products from './components/Products';
import Preview from './components/PreviewProducts';
import EditProduct from './components/EditProducts';
import LayoutHeader from './Layout/Header';
import FieldNames from './Layout/FieldNames';
import BackButton from './Layout/Back';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'warehouseApp.products'

function App() {

  //state set up
  const [products, setProduct] = useState([])

  const productName = useRef()
  const productEAN= useRef()
  const productType = useRef()
  const productWeight = useRef()
  const productColor = useRef()
  const productQuantity = useRef()
  const productPrice = useRef()
  
  //Loads state form local storage
  useEffect(() => {
    const storedproducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedproducts) {setProduct(storedproducts)}
  }, [])

  //Saves state to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
  }, [products])

  function toggleProduct(id) {
    const newProducts = [...products]
    const product = newProducts.find(product => product.ID === id)
    console.log("product asds " + product)
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

 function editProduct(id, editStrate){
    const newProducts = [...products]
    const editProduct = newProducts.find(product => product.ID === id)

    if(editStrate.Name){
      editProduct.Name = editStrate.Name
    }
    if(editStrate.EAN){
      editProduct.EAN = editStrate.EAN
    }
    if(editStrate.Type){
      editProduct.Type = editStrate.Type
    }
    if(editStrate.Weight){
      editProduct.Weight = editStrate.Weight
    }
    if(editStrate.Color){
      editProduct.Color = editStrate.Color
    }
    if(editStrate.Quantity){
      editProduct.Quantity =[ editStrate.Quantity, ...editProduct.Quantity  ] 

      if(editProduct.Quantity.length >4){
        editProduct.Quantity.splice(5, 1 )
      }

    }
    if(editStrate.Price){
      editProduct.Price =[ editStrate.Price, ...editProduct.Price  ] 

      if(editProduct.Price.length >4){
        editProduct.Price.splice(5, 1 )
      }
    }
      setProduct(newProducts)
  }

 // ToDo: bug with Routs
  return (
    <Router path="/products" >
      <div className="App">
        <LayoutHeader />
        <Route exact path="/products/create" render={props => (
          <React.Fragment>
            <div className='displayGrid '>
              <h5>Name</h5>
              <input ref={productName} className="createFiels" type="text" name="Name" placeholder="Name of the product" ></input>
              <h5>EAN</h5>
              <input ref={productEAN} className="createFiels" type="number" name="EAN" placeholder="EAN" ></input>
              <h5>Type</h5>
              <input ref={productType} className="createFiels" type="text" name="Type" placeholder="Type" ></input>
              <h5>Weight</h5>
              <input ref={productWeight} className="createFiels" type="number" name="Weight" placeholder="Weight" ></input>
              <h5>Color</h5>
              <input ref={productColor} className="createFiels" type="text" name="Color" placeholder="Color" ></input>
              <h5>Quantity</h5>
              <input ref={productQuantity} className="createFiels" type="number" name="Quantity" placeholder="Quantity" ></input>
              <h5>Price</h5>
              <input ref={productPrice} className="createFiels" type="number" name="Price" placeholder="Price" ></input>
              <Link to='/products' > <Button variant="success"  onClick={addProduct}> Save </Button> </Link>
            </div>
          </React.Fragment>
        )} />
        
        <Route exact path="/products" render={props => (
          <React.Fragment>
            <FieldNames/>
            <Products products = {products} toggleProduct = {toggleProduct} deleteProduct= {deleteProduct} />
          </React.Fragment>
        )} />
        
        <Route exact path={"/products/edit/:id"} render={props => (
          <React.Fragment>
           <EditProduct products={products} editProduct ={editProduct}/>
           <BackButton/>
          </React.Fragment>
        )} />
        
        <Route exact path={"/products/:id"} render={props => (
          <React.Fragment>
            <FieldNames/>
            <Preview products={products} />
            <BackButton/>
          </React.Fragment>
        )} />
        
      </div>
    </Router>
  );
}

export default App;

