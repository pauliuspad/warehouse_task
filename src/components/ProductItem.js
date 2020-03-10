import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';



function ProductsItems(props) {
  
     function productState() {
        props.toggleProduct(props.product.ID)
    }

    function removeProduct(){
        if (window.confirm("Do you really want to Delete this Product?")){
            props.deleteProduct(props.product.ID)
        }  
    }

    function showProduct() {
        props.setViewProp(props.product.ID)
    }

    function changeProduct() {
        
    }

    return (
        <div >
            <div>{ props.product.Name}</div>
            <div>{ props.product.EAN}</div>
            <div>{ props.product.Type}</div>
            <div>{ props.product.Weight}</div>
            <div>{ props.product.Color}</div>
            <div style={{backgroundColor:  props.product.Quantity == 0? '#DDCFCC' : 'none'}} >{ props.product.Quantity[0]}</div>
            <div>{ props.product.Price[0]}</div>
            <input type="checkbox" checked={props.product.Active} onChange={productState} />
            <Link to="/products/view"> <Button variant="outline-secondary" onClick={ showProduct }>VIEW</Button></Link>
            <Link to="/products"> <Button variant="outline-info" onClick={ changeProduct }>EDIT</Button> </Link>
            <Button variant="outline-danger" onClick={ removeProduct } >DELETE</Button>
        </div>
    )
}



// PropTypes
ProductsItems.propTypes = {
    product: PropTypes.object.isRequired
  }

export default ProductsItems;
