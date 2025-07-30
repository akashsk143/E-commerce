import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function ProductCard({ product, onProductClick }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={() => onProductClick(product)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          {product.originalPrice && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              Save ₹{product.originalPrice - product.price}
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          )}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-blue-600 font-medium">{product.category}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`p-3 rounded-lg transition-colors duration-200 ${
              product.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}