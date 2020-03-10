import React from 'react';
import ProductsItems from './ProductItem';
import PropTypes from 'prop-types';

function Product(props ) {
    console.log(props.products)
  return props.products.map((product) => (
  <ProductsItems key={product.ID} toggleProduct={props.toggleProduct} deleteProduct={props.deleteProduct} product={product} setViewProp={props.setViewProp} />
  ))
}

// PropTypes
Product.propTypes = {
  products: PropTypes.array.isRequired
}

export default Product;

