// Product.js
import React from 'react';

const Product = ({ id, name, description, price, addToCart }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
