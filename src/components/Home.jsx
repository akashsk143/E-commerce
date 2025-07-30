import React from 'react';
import { Hero } from './Hero';
import { ProductGrid } from './ProductGrid';
import { products } from '../data/products';

export function Home({ onProductClick, searchQuery }) {
  return (
    <>
      <Hero />
      <ProductGrid
        products={products}
        onProductClick={onProductClick}
        searchQuery={searchQuery}
      />
    </>
  );
}
