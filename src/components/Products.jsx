import React from 'react';
import Product from './Product';

class Products extends React.Component {
  render() {
    const { data, addCartItems, cart } = this.props;
    return (
      <main className="products-list">
        <h4 className="section-title">Produtos:</h4>
        <div className="product-items">
          {(!data)
            ? 'Loading...'
            : (data.results.length === 0)
              ? 'Nenhum produto encontrado.'
              : data.results.map((product) => <Product addCartItems={addCartItems} bt="home" key={product.id} data={product} />)}
        </div>
      </main>
    );
  }
}

export default Products;
