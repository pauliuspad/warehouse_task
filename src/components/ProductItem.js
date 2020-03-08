import React from 'react';
import PropTypes from 'prop-types';


function ProductsItems(props) {
    // does not work 39:10 
    /*
     toggleProduct = () => {
        if (props.Active){
            return{
                textDecoration: 'line-through'
            }
        }
        else{
            return{
                textDecoration: 'none'
            }
        }

        //return {
        //    textDecoration: props.singleProduct.Active ? 'line-through' : 'none'
       // }
    } 
    <div style={this.toggleProduct()}>
    */

return (
    <div style = {{paddingBottom: '20px'}}>
        <div>{ props.singleProduct.Name}</div>
        <div>{ props.singleProduct.EAN}</div>
        <div>{ props.singleProduct.Type}</div>
        <div>{ props.singleProduct.Weight}</div>
        <div>{ props.singleProduct.Color}</div>
        <div>{ props.singleProduct.Color}</div>
        <div>{ props.singleProduct.Quantity[0]}</div>
        <div>{ props.singleProduct.Price[0]}</div>
        <input type="checkbox" />
    </div>

)
}

// PropTypes
ProductsItems.propTypes = {
    singleProduct: PropTypes.object.isRequired
  }

export default ProductsItems;
