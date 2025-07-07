import React from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block cursor-pointer rounded-xs px-5 transition-colors  text-prima text-left mx-2 py-3 font-semibold ${
        isActive
          ? "text-white border-primary bg-primary hover:bg-link"
          : "text-primary border-transparent hover:bg-primary hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
