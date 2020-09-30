import React from 'react';
import CartBtn from '../services/CartBtn';

function Home() {
  return (
    <div className="container">
      <div className="searchField">
        <form>
          <input type="text" name="research" />
        </form>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
      <CartBtn />
    </div>
  );
}

export default Home;
