import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductsItems(props) {
    // does not work 39:00 
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
    <div style={this.toggleProduct()}> {paddingBottom: '20px'}

textDecoration: props.singleProduct.Active ? 'line-through' : 'none'

      function toggleProduct1(e){

    }
style = {{toggleProduct1}}

    */
  // console.log(props.singleProduct)

  
   function productState() {
    props.toggleProduct(props.product.ID)
    console.log(props.product.ID)
}

return (
    <div >
    <div >
        <p>New</p>
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
        <Button variant="outline-danger" >DELETE</Button>
    </div>
    </div>

)
}



// PropTypes
ProductsItems.propTypes = {
    product: PropTypes.object.isRequired
  }

export default ProductsItems;
