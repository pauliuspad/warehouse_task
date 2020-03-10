import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';
import '../App.css';



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
        <div className='ProductItemsStyle ProductsGrid'>
            <div >{ props.product.Name}</div>
            <div className="alignTextR">{ props.product.EAN}</div>
            <div className="alignTextR">{ props.product.Type}</div>
            <div className="alignTextR">{ props.product.Weight}</div>
            <div className="alignTextR">{ props.product.Color}</div>
            <div className="alignTextR" style={{color:  props.product.Quantity == 0? '#da3b3b' : 'none'}} >{ props.product.Quantity[0]}</div>
            <div className="alignTextR">{ props.product.Price[0]}</div>
            <div style={{textAlign: 'center'}}>
            <input type="checkbox" checked={props.product.Active} onChange={productState} />
            </div>
            <div style={{gridColumn: '9 / 12'}}>
            <Link to="/products/view"> <Button variant="outline-secondary" onClick={ showProduct }>VIEW</Button></Link>
            <Link to="/products"> <Button variant="outline-info" onClick={ changeProduct }>EDIT</Button> </Link>
            <Button variant="outline-danger" onClick={ removeProduct } >DELETE</Button>
            </div>
        </div>
    )
}


// PropTypes
ProductsItems.propTypes = {
    product: PropTypes.object.isRequired
  }

export default ProductsItems;
