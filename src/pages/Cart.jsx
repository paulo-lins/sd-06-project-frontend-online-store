import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

class Cart extends Component {
  render() {
    const { handleCartItems, removeItem, cart: { products} } = this.props;
    console.log(products);
    return (
      <div className="cart-product">
        {(products && products.length > 0)
          ? products.map((product) => <Product
            removeItem={removeItem}
            handleCartItems={handleCartItems}
            bt="cart"
            key={ product.id }
            data={ product }
          />)
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <Link to="/">Voltar para a Home</Link>
      </div>
    );
  }
}

export default Cart;
