import React, { useState, useRef } from 'react';
//import ProductsItems from './ProductItem';
import PropTypes from 'prop-types';

function addProduct(props) {

    const productName = useRef()
    const productEAN= useRef()
    const productType = useRef()
    const productWeight = useRef()
    const productColor = useRef()
    const productQuantity = useRef()
    const productPrice = useRef()

    function saveProduct(){ 
        const Name = productName.current.value
        const EAN = productEAN.current.value
        const Type = productType.current.value
        const Weight = productWeight.current.value
        const Color = productColor.current.value
        const Quantity = productQuantity.current.value
        const Price = productPrice.current.value

        props.addNewProduct(Name, EAN, Type, Weight, Color, Quantity, Price)
    }

  return (
    <form>
        <input ref={productName} type="text" name="Name" placeholder="Name of the product" ></input>
        <input ref={productEAN} type="number" name="EAN" placeholder="EAN" ></input>
        <input ref={productType} type="text" name="Type" placeholder="Type" ></input>
        <input ref={productWeight} type="number" name="Weight" placeholder="Weight" ></input>
        <input ref={productColor} type="text" name="Color" placeholder="Color" ></input>
        <input ref={productQuantity} type="number" name="Quantity" placeholder="Quantity" ></input>
        <input ref={productPrice} type="number" name="Price" placeholder="Price" ></input>
        <Button variant="success"  onClick={saveProduct}> Save </Button>
    </form>

  )
}

// PropTypes
//Product.propTypes = {
//  DatabaseData: PropTypes.array.isRequired
//}

export default addProduct;
