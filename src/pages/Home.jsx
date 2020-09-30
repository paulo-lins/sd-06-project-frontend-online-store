import React, { Component } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories'
import Products from '../components/Products';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.onChecked = this.onChecked.bind(this);
    this.handleEventChecked = this.handleEventChecked.bind(this);

    this.state = {
      textInput: "", 
      data: null,
      checkedId: null,
    };
  }

  handleEvent({ target }) {
    const query = target.value;
    this.setState({ textInput: query });
  }

  handleEventChecked({ target }) {
    const categoryId = target.value;
    this.setState({ checkedId: categoryId });
    this.onChecked(categoryId)
  }

  onClick() {
    const query = this.state.textInput;
    this.fetchProducts({ query });
  }

  onChecked(categoryId) {
    // const categoryId = this.state.checkedId;
    this.fetchProducts({ categoryId });
  }

  async fetchProducts({ categoryId, query }) {
    const fetchData = await api.getProductsFromCategoryAndQuery({ categoryId, query });
    this.setState({ data: fetchData });
  }

  render() {
    const { data, textInput } = this.state;
    // const { checkedId } = this.state;
    return (
      <div>
        <Header
          inputValue={textInput}
          handleEvent={this.handleEvent} 
          onClick={this.onClick}
        />
        {/* {(data) ? console.log(data) : null} */}
        <div className="content">
          <Categories 
            // onChecked={this.onChecked} 
            handleEventChecked={this.handleEventChecked} 
          />
          <Products data={data}/>
          {console.log(data)}
        </div>
      </div>
    );
  }
}

export default Home;