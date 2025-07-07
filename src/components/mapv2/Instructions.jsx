import React from "react";

const Instructions = ({ show }) => {
  if (!show) return null;

  return (
    <div className="absolute bottom-6 left-6 z-40 bg-blue-50 border border-blue-200 p-4 rounded-xl max-w-sm">
      <p className="text-sm text-blue-800">
        <strong>Get started:</strong> Click on category tabs above to explore
        different types of places in British Columbia. Use Ctrl+scroll to zoom.
      </p>
    </div>
  );
};

export default Instructions;
