import React from "react";

const HoverTooltip = ({ hoveredPlace, position }) => {
  if (!hoveredPlace || !position) return null;

  return (
    <div
      className="absolute z-40 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-gray-200"
      style={{
        left: position.x + 10, // lệch phải 10px
        top: position.y - 20, // căn giữa point
        transform: "translate(0, 0)",
        pointerEvents: "none",
      }}
    >
      {hoveredPlace.name}
    </div>
  );
};

export default HoverTooltip;
