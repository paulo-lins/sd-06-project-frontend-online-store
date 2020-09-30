import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

class CardList extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      products: [],
      categoryId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCard = this.fetchCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.fetchCard();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async fetchCard() {
    const { categoryId, value } = this.state;
    const card = await getProductsFromCategoryAndQuery(categoryId, value);
    const { results } = card;
    this.setState({
      products: results,
    })
  }

  // async fetchCard() {
  //   const { value } = this.state;
  //   const cards = await getProductsFromQuery(value);
  //   console.log(cards)
  //   const { results } = cards;
  //   this.setState({
  //     products: results,
  //   });
  // }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div>
          <input data-testid="query-input" value={this.state.value} onChange={this.handleChange}></input>
          <button data-testid="query-button" onClick={this.handleClick}>Pesquisar</button>
        </div>
        <div>
          {products.map((product) => <Card product={ product } key={product.id}/> )}
        </div>
      </div>
    )
  }
}

export default CardList;