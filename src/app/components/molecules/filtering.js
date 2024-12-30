"use client";

import React, { useState } from 'react';

const Filtering = ({ categories, activeCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Trigger a page reload or modify the URL with the selected category
    window.location.search = `category=${categoryId}`;
  };

  return (
    <div className="flex flex-wrap justify-between items-center mb-8">
      {/* Filtering Options */}
      <div className="flex space-x-4">
        <button
          onClick={() => handleCategoryClick('Show All')}
          className={`px-4 py-2 rounded ${
            selectedCategory === 'Show All' ? 'bg-gray-800 text-white' : 'bg-gray-200'
          }`}
        >
          Show All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category.id ? 'bg-gray-800 text-white' : 'bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filtering;
