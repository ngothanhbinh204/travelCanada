import React from "react";

const MapHeader = ({ categories, activeCategories, onCategoryToggle }) => (
  <div className="absolute top-0 left-0 right-0 z-10 bg-white">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryToggle(category.id)}
            className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-200 border-2 ${
              activeCategories.includes(category.id)
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black hover:bg-gray-300"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default MapHeader;
