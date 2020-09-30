import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = this.props.product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <Link data-testid="product-detail-link" to={{pathname: `/${id}`, state: { product }}}>
          <img data-testid="product-detail-link" src={thumbnail} alt="fotografia do produto" />
        </Link>
        <span>{price}</span>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired
};

export default Card;
