import React from 'react';

export function Category({ categories = [], onCategoryClick }) {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onCategoryClick(category.name)}
            className="bg-white rounded-lg shadow hover:shadow-md cursor-pointer transition transform hover:-translate-y-1 text-center p-4"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
