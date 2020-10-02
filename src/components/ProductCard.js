import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, addToCart, cartList } = this.props;
    const { title, price, id, thumbnail} = product;

    return (
      <div className="productCard" data-testid="product">
        <div className="product-card-item">{title}</div>
        <div className="product-card-item">{price}</div>
        <img src={ thumbnail } className="product-img"  alt="product" />
        <Link to={ { pathname: `productDetails/${id}`, state: { product, cartList } } }>
          <div data-testid="product-detail-link">View Details</div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          add to card
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default ProductCard;
