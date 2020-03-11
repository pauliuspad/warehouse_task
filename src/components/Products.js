import React from 'react';
import ProductsItems from './ProductItem';
import PropTypes from 'prop-types';

function Product(props ) {

  return props.products.map((product) => (
  <ProductsItems key={product.ID} toggleProduct={props.toggleProduct} deleteProduct={props.deleteProduct} product={product} />
  ))
}

// PropTypes
Product.propTypes = {
  products: PropTypes.array.isRequired
}

export default Product;

