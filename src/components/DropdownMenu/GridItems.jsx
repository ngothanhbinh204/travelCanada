import React from "react";

const GridItems = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <a href="#" key={index} className="text-left">
          <span className="aspect-4/3 relative block">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover shadow"
            />
          </span>

          <div className="mt-4 text-xl font-normal">{item.label}</div>
        </a>
      ))}
    </div>
  );
};

export default GridItems;
