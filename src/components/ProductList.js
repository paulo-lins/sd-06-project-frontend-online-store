import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products
          .map((product) => <ProductItem key={ product.id } product={ product } />)}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ProductList;
