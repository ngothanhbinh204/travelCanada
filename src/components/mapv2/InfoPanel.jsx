import React from "react";
import {
  Building,
  Trees,
  Mountain,
  Plane,
  Landmark,
  Leaf,
  MapPin,
} from "lucide-react";

const InfoPanel = ({ selectedPlace, categories, onClose }) => {
  if (!selectedPlace) return null;

  const category = categories.find((c) => c.id === selectedPlace.category);
  if (!category) return null;
  return (
    <div className="absolute top-32 left-4 z-40 bg-white p-6 rounded-lg shadow-xl max-w-sm border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2">
          {/* <IconComponent size={24} style={{ color: category?.color }} /> */}
          <h2 className="text-xl font-bold text-gray-900">
            {selectedPlace.name}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
        >
          ×
        </button>
      </div>
      <div className="mb-3">
        <span
          className="inline-block px-3 py-1 text-sm font-semibold rounded-full"
          style={{
            backgroundColor: category?.color + "20",
            color: category?.color,
          }}
        >
          {category?.label}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {selectedPlace.description}
      </p>
    </div>
  );
};

export default InfoPanel;
