import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
