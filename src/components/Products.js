import React from 'react';
import ProductsItems from './ProductItem';
import PropTypes from 'prop-types';

function Product(props) {
    console.log(props.DatabaseData)
  return props.DatabaseData.map((singleProduct) => (
  <ProductsItems key={singleProduct.ID} singleProduct={singleProduct}/>
  ))
}

// PropTypes
Product.propTypes = {
  DatabaseData: PropTypes.array.isRequired
}

export default Product;

