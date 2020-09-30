import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryFilter extends Component{
  
  constructor() {
    super();
    this.test = this.test.bind(this);

    this.state = {
      categories: []
    }
  }
  
  async test() {
    const test = await api.getCategories();
    this.setState({
      categories: test
    });
  }

  componentDidMount() {
    this.test();
  }

  render() {
    const { categories } = this.state
    return (
      <div>
        {categories.map(category => <li data-testid="category" key={category.id}>{category.name}</li>)}
      </div>
    )
  }
}

export default CategoryFilter;
