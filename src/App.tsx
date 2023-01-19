import React from 'react';
import ProductItem from './components/ProductItem';
import { options } from './data/data';

function App() {

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Ты сегодня покормил кота?</h1>
      </header>
      <div className="products">
        {options.map(item => <ProductItem
          options={item}
          key={item.id}
        />)}
      </div>
    </div>
  );
}

export default App;
