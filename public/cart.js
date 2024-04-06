// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    // Add more products
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products} addToCart={addToCart} />
      <h1>Cart Summary</h1>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
