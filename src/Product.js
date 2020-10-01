import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { title, price, image, id, product } = this.props;
    return (
      <div data-testid="product" className="div-product">
        <img src={ image } alt="Product" />
        <h5>{ title }</h5>
        <p>{ `R$: ${price}` }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/productdetails/${id}/`, state: product } }
        >
          Ver detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.objectOf(String).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Product;
