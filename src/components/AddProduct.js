import React, { useState } from 'react';
import ProductsItems from './ProductItem';
import PropTypes from 'prop-types';

function addProduct(props) {
    
    const [products, addProduct] = useState([])

   var state = {
        Name: '',
        EAN: '',
        Type: '',
        Weight: '',
        Color: '',
        Quantity: '',
        Price: '',
    }

    function onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

  return (
  <form>
      <input type="text" name="Name" placeholder="Name of the product" value={this.state.Name} onchange={onChange}></input>
      <input type="number" name="EAN" placeholder="EAN" value={this.state.EAN} onchange={onChange}></input>
      <input type="text" name="Type" placeholder="Type" value={this.state.Type} onchange={onChange}></input>
      <input type="number" name="Weight" placeholder="Weight" value={this.state.Weight} onchange={onChange}></input>
      <input type="text" name="Color" placeholder="Color" value={this.state.Color} onchange={onChange}></input>
      <input number="text" name="Quantity" placeholder="Quantity" value={this.state.Quantity} onchange={onChange}></input>
      <input number="text" name="Price" placeholder="Price" value={this.state.Price} onchange={onChange}></input>
      <input type="submit" value="Save" className="btn" />
  </form>
  )
}

// PropTypes
//Product.propTypes = {
//  DatabaseData: PropTypes.array.isRequired
//}

export default addProduct;
