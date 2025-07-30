import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

export function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">All Products</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
