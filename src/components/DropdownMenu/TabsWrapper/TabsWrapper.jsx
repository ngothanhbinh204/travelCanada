import React from "react";
import Tab from "./Tab";

const TabsWrapper = ({ regions, activeIndex, onChangeTab }) => {
  return (
    <div className="flex justify-center space-x-4 mb-12 overflow-auto ">
      {regions.map((region, idx) => (
        <Tab
          key={idx}
          label={region.label}
          isActive={activeIndex === idx}
          onClick={() => onChangeTab(idx)}
        />
      ))}
    </div>
  );
};

export default TabsWrapper;
