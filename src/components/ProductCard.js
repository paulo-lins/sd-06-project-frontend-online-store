import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <img src={ product.thumbnail } alt="product" className="product-card-image" />
        <div className="product-card-title">
          <h3>{product.title}</h3>
        </div>
        <div className="product-card-body">
          <p>
            Preço: {product.price}
          </p>
          <div className="product-card-links">
            <Link
              data-testid="product-detail-link"
              to={ { pathname: '/product', state: product } }
            >
              DETALHES
            </Link>
            <Link
              data-testid="product-detail-add-to-cart"
              to={ { pathname: '/shopping-cart', state: product } }
              //addItem(event)
              //
            >
                ADICIONAR AO CARRINHO
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
