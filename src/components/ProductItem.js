import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductsItems(props) {
  
    function productState() {
        props.toggleProduct(props.product.ID)
    }

    function removeProduct(){
        if (window.confirm("Do you really want to Delete this Product?")){
            props.deleteProduct(props.product.ID)
        }  
    }

    return (
        <div >
            <div>{ props.product.Name}</div>
            <div>{ props.product.EAN}</div>
            <div>{ props.product.Type}</div>
            <div>{ props.product.Weight}</div>
            <div>{ props.product.Color}</div>
            <div>{ props.product.Quantity[0]}</div>
            <div>{ props.product.Price[0]}</div>
            <input type="checkbox" checked={props.product.Active} onChange={productState} />
            <Button variant="outline-secondary" >VIEW</Button>
            <Button variant="outline-info" >EDIT</Button>
            <Button variant="outline-danger" onClick={ removeProduct } >DELETE</Button>
        </div>
    )
}



// PropTypes
ProductsItems.propTypes = {
    product: PropTypes.object.isRequired
  }

export default ProductsItems;
