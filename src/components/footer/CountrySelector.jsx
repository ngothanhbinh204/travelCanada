import React, { useState } from "react";

const countries = [
  { name: "Australia", highlight: true },
  { name: "Canada (English)" },
  { name: "Canada (Français)" },
  { name: "中国" },
  { name: "France" },
  { name: "Deutschland" },
  { name: "日本" },
  { name: "México" },
  { name: "United Kingdom" },
  { name: "한국" },
];

const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select...");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (country) => {
    setSelected(country.name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text_juane inline-flex items-center font-medium uppercase"
      >
        <span>{selected}</span>
        <span className="text-white ml-2">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-48 rounded border border-gray-200 bg-white shadow-lg z-50">
          <ul className="max-h-60 overflow-y-auto">
            {countries.map((country, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(country)}
                className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 ${
                  country.highlight
                    ? "bg-red-600 text-white font-semibold hover:bg-red-700"
                    : "text-gray-800"
                }`}
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
