import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartSidebar({ isOpen, onClose, onCheckout }) {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4 bg-gray-50 p-4 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">₹{item.product.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 transition-colors duration-200"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 py-1 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 transition-colors duration-200"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <button
                  onClick={onCheckout}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}