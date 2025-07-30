import React from 'react';
import { useWishlist } from '../context/WishListContext';
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';

export function WishlistModal({ isOpen, onClose, onProductClick }) {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <HeartIcon className="h-6 w-6 text-red-500 mr-2" />
          Your Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {wishlist.map((product) => (
              <li key={product._id} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => {
                  onProductClick(product);
                  onClose();
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-gray-500 text-sm">₹{product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
