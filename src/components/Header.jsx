import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WishlistModal } from './WishlistModal';
import { AuthModal } from './AuthModal';

export function Header({ onCartClick, onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); // ✅ Wishlist modal state
  const { getCartItemsCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleProductClick = (product) => {
    // For now just log. You can navigate to product page later.
    console.log("Product clicked:", product);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">MyStore</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
              <a href="/categories" className="text-gray-700 hover:text-gray-900">Categories</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </form>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsWishlistOpen(true)} className="p-2 text-gray-700 hover:text-gray-900">
                <Heart className="w-6 h-6" />
              </button>

              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="p-2 text-gray-700 hover:text-gray-900"
              >
                <User className="w-6 h-6" />
              </button>

              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-700 hover:text-gray-900"
              >
                <ShoppingCart className="w-6 h-6" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>

              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="mb-4">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </form>
              </div>
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
                <a href="/categories" className="text-gray-700 hover:text-gray-900">Categories</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        onProductClick={handleProductClick}
      />
    </>
  );
}
