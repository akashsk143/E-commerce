import React, { useState } from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";


const premiumProducts = [
  {
    _id: "1",
    name: "Premium Headphones",
    category: "Electronics",
    price: 2999,
    rating: 4.8,
    images: ["https://images.unsplash.com/photo-1585386959984-a4155220c9c4"],
    description: "Sleek, smart, and made for modern lifestyles.",
    tags: ["gaming", "rgb", "performance"],
    reviews: [
      "Reliable, stylish, and powerful.",
      "Absolutely love it! Worth every penny.",
      "Works like a charm. Highly recommended!"
    ]
  },
  {
    _id: "2",
    name: "Luxury Watch",
    category: "Fashion",
    price: 6999,
    rating: 4.9,
    images: ["https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"],
    description: "Perfect blend of style, comfort, and technology.",
    tags: ["home", "smart-device", "eco-friendly"],
    reviews: [
      "Exceeded my expectations in every way.",
      "Reliable, stylish, and powerful.",
      "Works like a charm. Highly recommended!"
    ]
  },
  {
    _id: "3",
    name: "Smartphone Pro X",
    category: "Electronics",
    price: 59999,
    rating: 4.6,
    images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"],
    description: "Designed for users who demand quality and reliability.",
    tags: ["style", "comfort", "durable"],
    reviews: [
      "Exceeded my expectations in every way.",
      "Solid build and performs excellently.",
      "Absolutely love it! Worth every penny."
    ]
  },
  {
    _id: "4",
    name: "Bluetooth Speaker",
    price: 3999,
    rating: 4.5,
    images: ["https://images.unsplash.com/photo-1580910051070-cfded5e1ef4c"],
    description: "Sleek, smart, and made for modern lifestyles.",
    tags: ["audio", "wireless", "portable"],
    reviews: [
      "Exceeded my expectations in every way.",
      "Reliable, stylish, and powerful.",
      "Works like a charm. Highly recommended!"
    ]
  },
  {
    _id: "5",
    name: "Noise Cancelling Earbuds",
    price: 4999,
    rating: 4.4,
    images: ["https://images.unsplash.com/photo-1600180758890-b90f3b6f2d13"],
    description: "Crafted with elegance and innovation combined.",
    tags: ["home", "smart-device", "eco-friendly"],
    reviews: [
      "A must-have in this category.",
      "Not bad, but could be improved a little.",
      "Absolutely love it! Worth every penny."
    ]
  },
  {
    _id: "6",
    name: "4K Smart TV",
    price: 44999,
    rating: 4.8,
    images: ["https://images.unsplash.com/photo-1583394838336-acd977736f90"],
    description: "Engineered with precision for exceptional performance.",
    tags: ["style", "comfort", "durable"],
    reviews: [
      "Reliable, stylish, and powerful.",
      "Exceeded my expectations in every way.",
      "Works like a charm. Highly recommended!"
    ]
  },
  {
    _id: "7",
    name: "DSLR Camera",
    price: 55999,
    rating: 4.7,
    images: ["https://images.unsplash.com/photo-1491975474562-1f4e30bc9468"],
    description: "Crafted with elegance and innovation combined.",
    tags: ["gaming", "rgb", "performance"],
    reviews: [
      "A must-have in this category.",
      "Reliable, stylish, and powerful.",
      "Solid build and performs excellently."
    ]
  },
  {
    _id: "8",
    name: "Premium Backpack",
    price: 1999,
    rating: 4.3,
    images: ["https://images.unsplash.com/photo-1579191927331-d6c6d2e6b3f2"],
    description: "Perfect blend of style, comfort, and technology.",
    tags: ["style", "comfort", "durable"],
    reviews: [
      "Absolutely love it! Worth every penny.",
      "Not bad, but could be improved a little.",
      "Works like a charm. Highly recommended!"
    ]
  },
  {
    _id: "9",
    name: "Wireless Charger",
    price: 1499,
    rating: 4.2,
    images: ["https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"],
    description: "Designed for users who demand quality and reliability.",
    tags: ["fashion", "luxury", "trending"],
    reviews: [
      "Exceeded my expectations in every way.",
      "Impressive design and functionality.",
      "Solid build and performs excellently."
    ]
  },
  {
    _id: "10",
    name: "Luxury Sunglasses",
    price: 2999,
    rating: 4.4,
    images: ["https://images.unsplash.com/photo-1558002038-0e25c15f43c6"],
    description: "Crafted with elegance and innovation combined.",
    tags: ["home", "smart-device", "eco-friendly"],
    reviews: [
      "A must-have in this category.",
      "Solid build and performs excellently.",
      "Absolutely love it! Worth every penny."
    ]
  },
  {
    _id: "11",
    name: "Smart Air Purifier",
    price: 9999,
    rating: 4.5,
    images: ["https://images.unsplash.com/photo-1603129482408-ff3a7cfc1b0e"],
    description: "Premium quality with cutting-edge features.",
    tags: ["tech", "premium", "bestseller"],
    reviews: [
      "Works like a charm. Highly recommended!",
      "Exceeded my expectations in every way.",
      "Absolutely love it! Worth every penny."
    ]
  },
  {
    _id: "12",
    name: "Gaming Keyboard",
    price: 3999,
    rating: 4.6,
    images: ["https://images.unsplash.com/photo-1570215171373-4a4e28b3cd5f"],
    description: "Sleek, smart, and made for modern lifestyles.",
    tags: ["gadgets", "innovation", "smart"],
    reviews: [
      "Impressive design and functionality.",
      "Works like a charm. Highly recommended!",
      "A must-have in this category."
    ]
  },
  {
    _id: "13",
    name: "Luxury Perfume",
    price: 2599,
    rating: 4.7,
    images: ["https://images.unsplash.com/photo-1600185365125-e1b1afc90c50"],
    description: "Ideal for both work and leisure activities.",
    tags: ["tech", "premium", "bestseller"],
    reviews: [
      "Reliable, stylish, and powerful.",
      "Absolutely love it! Worth every penny.",
      "Exceeded my expectations in every way."
    ]
  },
  {
    _id: "14",
    name: "Fitness Smartwatch",
    price: 4999,
    rating: 4.5,
    images: ["https://images.unsplash.com/photo-1516222338250-863487c99f56"],
    description: "Experience luxury and power in one device.",
    tags: ["gadgets", "innovation", "smart"],
    reviews: [
      "A must-have in this category.",
      "Exceeded my expectations in every way.",
      "Solid build and performs excellently."
    ]
  },
  {
    _id: "15",
    name: "Noise Blocking Headset",
    price: 6499,
    rating: 4.6,
    images: ["https://images.unsplash.com/photo-1616627985723-087fa1df4088"],
    description: "Engineered with precision for exceptional performance.",
    tags: ["audio", "wireless", "portable"],
    reviews: [
      "Reliable, stylish, and powerful.",
      "Absolutely love it! Worth every penny.",
      "A must-have in this category."
    ]
  },
  {
    _id: "16",
    name: "Luxury Leather Wallet",
    price: 1999,
    rating: 4.4,
    images: ["https://images.unsplash.com/photo-1608256414208-81b77d26b119"],
    description: "Crafted with elegance and innovation combined.",
    tags: ["fashion", "luxury", "trending"],
    reviews: [
      "Solid build and performs excellently.",
      "Reliable, stylish, and powerful.",
      "Impressive design and functionality."
    ]
  },
  {
    _id: "17",
    name: "Smart Home Hub",
    price: 7499,
    rating: 4.3,
    images: ["https://images.unsplash.com/photo-1616348436513-f7c004b3a39d"],
    description: "Crafted with elegance and innovation combined.",
    tags: ["home", "smart-device", "eco-friendly"],
    reviews: [
      "Works like a charm. Highly recommended!",
      "Absolutely love it! Worth every penny.",
      "Exceeded my expectations in every way."
    ]
  },
  {
    _id: "18",
    name: "Premium Coffee Machine",
    price: 8999,
    rating: 4.8,
    images: ["https://images.unsplash.com/photo-1601987077222-25db6c04c9b7"],
    description: "Designed for users who demand quality and reliability.",
    tags: ["tech", "premium", "bestseller"],
    reviews: [
      "Not bad, but could be improved a little.",
      "Works like a charm. Highly recommended!",
      "Solid build and performs excellently."
    ]
  },
  {
    _id: "19",
    name: "Electric Toothbrush Pro",
    price: 3499,
    rating: 4.6,
    images: ["https://images.unsplash.com/photo-1612197209706-816fbfcefe35"],
    description: "Engineered with precision for exceptional performance.",
    tags: ["home", "smart-device", "eco-friendly"],
    reviews: [
      "Reliable, stylish, and powerful.",
      "A must-have in this category.",
      "Exceeded my expectations in every way."
    ]
  }
];


export function Premium() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [sortOrder, setSortOrder] = useState("none");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Get unique categories dynamically
  const categories = Array.from(
    new Set(premiumProducts.map(p => p.category).filter(Boolean))
  );

  // Filtering logic
  const filtered = premiumProducts
    .filter((item) => {
      if (ratingFilter !== "all") return Math.floor(item.rating) >= ratingFilter;
      return true;
    })
    .filter((item) => {
      if (categoryFilter !== "all") return item.category === categoryFilter;
      return true;
    });

  // Sorting logic
  const sortedProducts = filtered.sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold">Premium Products</h2>
        <div className="flex gap-3">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="none">Sort</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="all">All Ratings</option>
            <option value="5">5★</option>
            <option value="4">4★ & Up</option>
            <option value="3">3★ & Up</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg hover:shadow-md transition-shadow flex flex-col"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="mt-2 font-semibold text-gray-900">{product.name}</h3>
            <div className="flex items-center mt-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.rating)
                    ? "fill-yellow-400"
                    : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
            </div>
            <p className="text-blue-600 font-bold mt-1 mb-2">₹{product.price}</p>

            <p className="text-sm text-gray-700">{product.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap mt-2 gap-1">
              {product.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Reviews */}
            <ul className="mt-2 text-xs text-gray-600 space-y-1">
              {product.reviews?.slice(0, 2).map((review, i) => (
                <li key={i} className="italic">“{review}”</li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => addToCart(product)}
                className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm flex items-center gap-1"
              >
                <ShoppingCart size={16} /> Cart
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className="text-gray-700 hover:text-pink-600"
              >
                <Heart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-md ${currentPage === i + 1
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
