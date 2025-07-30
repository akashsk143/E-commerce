import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">MyStore</h3>
            <p className="text-gray-300 leading-relaxed">
              Your premium destination for quality products with exceptional service and unmatched value.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="products" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="categories" className="text-gray-300 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">123 Business Ave, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">support@mystore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}