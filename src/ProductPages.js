// ProductPages.js
import React from 'react';
import Product from './Product';

const ProductPages = ({ products, addToCart }) => {
  return (
    <div>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductPages;
