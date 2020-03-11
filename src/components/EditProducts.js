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
      <form >
      <input type="text" name="Name" onChange={updateState} placeholder={product.Name} ></input>
      <input type="number" name="EAN" onChange={updateState} placeholder={product.EAN} ></input>
      <input type="text" name="Type" onChange={updateState}  placeholder={product.Type} ></input>
      <input type="number" name="Weight" onChange={updateState}  placeholder={product.Weight} ></input>
      <input type="text" name="Color" onChange={updateState}  placeholder={product.Color} ></input>
      <input type="number" name="Quantity" onChange={updateState}  placeholder={product.Quantity} ></input>
      <input type="number" name="Price" onChange={updateState}  placeholder={product.Price} ></input>
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