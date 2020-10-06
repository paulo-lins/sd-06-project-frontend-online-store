import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { product, handleClick } = this.props;
    const cartInfo = product;
    handleClick(cartInfo);
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div className="product" data-testid="product">
        <p>{title}</p>
        <img alt="Product" src={ thumbnail } />
        <p>
          R$:
          {' '}
          {price}
        </p>
        <Link to={ `productdetails/${id}` } data-testid="product-detail-link">
          Ver Detalhes
        </Link>
        <br />
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.onClick }
        >
          Add to cart
        </button>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductItem;
