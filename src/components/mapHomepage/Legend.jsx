import React from "react";

const Legend = ({ categories }) => (
  <div className="absolute bottom-6 right-6 z-40 bg-white p-4 rounded-xl shadow-xl border border-gray-200">
    <h3 className="font-bold text-gray-900 mb-3 text-sm">Legend</h3>
    <div className="space-y-2">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center space-x-3">
          <div
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-sm text-gray-700">{category.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Legend;
