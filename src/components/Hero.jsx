import React from 'react';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Premium
                <span className="text-blue-600 block">Products</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Shop the latest collection of premium products with unmatched quality and style. 
                Experience luxury at its finest.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button  onClick={() => navigate('/premium')} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 from 1000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">On orders over ₹500</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Headphones className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}