import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Edit(props) {
//const currentUrl = window.location.pathname.split("/").pop() ;
// temporary for testing
const currentUrl = "76c37d45-28f4-4244-a34f-4530dcfd42c5"
console.log(currentUrl)

const [state, setState] = useState({})

function updateState(event) {
  const fieldValue = event.target.value;
  setState({
    ...state,
    [event.target.name]: fieldValue
  });
}

function confirmEdit(event){
console.log(state)
}

// ToDo: add Product to state and show state value. Insted of placeholder make value (value={state.Name}) 
const EditProduct = props.products.map((product) => {
  if (product.ID === currentUrl){

    console.log(state)
    return(
      <form  className='displayGrid '>
      <h5>Name</h5>
      <input className="createFiels" type="text" name="Name" onChange={updateState} placeholder={product.Name} ></input>
      <h5>EAN</h5>
      <input className="createFiels" type="number" name="EAN" onChange={updateState} placeholder={product.EAN} ></input>
      <h5>Type</h5>
      <input className="createFiels" type="text" name="Type" onChange={updateState}  placeholder={product.Type} ></input>
      <h5>Weight</h5>
      <input className="createFiels" type="number" name="Weight" onChange={updateState}  placeholder={product.Weight} ></input>
      <h5>Color</h5>
      <input className="createFiels" type="text" name="Color" onChange={updateState}  placeholder={product.Color} ></input>
      <h5>Quantity</h5>
      <input className="createFiels" type="number" name="Quantity" onChange={updateState}  placeholder={product.Quantity} ></input>
      <h5>Price</h5>
      <input className="createFiels" type="number" name="Price" onChange={updateState}  placeholder={product.Price} ></input>
      <Link to='/products/edit' > <Button variant="success" onClick={confirmEdit} type="submit" > Save </Button> </Link>
      </form>
    )
   }
})

  return (
    <div >
      {EditProduct}
    </div>
  )
}

export default Edit;