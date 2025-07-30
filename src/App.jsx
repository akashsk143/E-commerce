import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishListContext';
import { Header } from './components/Header';
import { ProductModal } from './components/ProductModal';
import { CartSidebar } from './components/CartSidebar';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { ProductsPage } from './components/ProductsPage';
import { Home } from './components/Home';
import { Category } from './components/Category';
import About  from './components/About';
import Contact  from './components/Contact';
import  {Premium}  from './components/Premium';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header
              onCartClick={handleCartClick}
              onSearch={handleSearch}
            />

            {/* Routes */}
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      onProductClick={handleProductClick}
                      searchQuery={searchQuery}
                    />
                  }
                />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='premium' element={<Premium/>}/>
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Modals */}
            <ProductModal
              product={selectedProduct}
              isOpen={isProductModalOpen}
              onClose={() => setIsProductModalOpen(false)}
            />

            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={handleCheckout}
            />

            <CheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />

            <AuthModal
              isOpen={isAuthOpen}
              onClose={() => setIsAuthOpen(false)}
              mode="login"
            />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
