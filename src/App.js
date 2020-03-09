import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Products from './components/Products';
// import AddProduct from './components/AddProduct'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'warehouseApp.products'

function App() {


  const [products, setProduct] = useState([{ "ID": 1, "Name": "Broccoli", "EAN": "4111111111111", "Type": "vegetable", "Weight": "1", "Color": "Green", "Active": false, "Quantity": [3,5,6], "Price": [3, 4, 6]}])

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
    console.log("Works12")
    const newProducts = [...products]
    const product = newProducts.find(product => product.ID === id)
    product.Active = !product.Active
    setProduct(newProducts)
  }

  // var state = {
  //      ID: '',
  //      Name: '',
  //      EAN: '',
  //      Type: '',
  //      Weight: '',
  //      Color: '',
  //      Quantity: '',
  //      Price: '',
  //      Active: ''
  //  }

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
      return [...prevProducts, {ID: uuidv4(), Name: Name, EAN, Type, Weight, Color, Quantity, Price, Active: false}]
    })

    console.log(productName.current.value)
    console.log(productEAN.current.value)
    console.log(productType.current.value)
  }
 



  return (
    <div className="App">

<form>
     <input ref={productName} type="text" name="Name" placeholder="Name of the product" ></input>
     <input ref={productEAN} type="number" name="EAN" placeholder="EAN" ></input>
     <input ref={productType} type="text" name="Type" placeholder="Type" ></input>
     <input ref={productWeight} type="number" name="Weight" placeholder="Weight" ></input>
     <input ref={productColor} type="text" name="Color" placeholder="Color" ></input>
     <input ref={productQuantity} type="number" name="Quantity" placeholder="Quantity" ></input>
     <input ref={productPrice} type="number" name="Price" placeholder="Price" ></input>
     <Button variant="success"  onClick={addProduct}> Save </Button>
 </form>
      



     <h3>Warehouse app</h3>
     <div>
      <Products products = {products} toggleProduct = {toggleProduct} />
    </div>
    
    </div>
  );
}

export default App;

