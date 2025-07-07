import React from "react";
import SectionContentIti from "./SectionContentIti";
const SectionBannerTextButtonCenter = ({ children }) => (
  <div className="min-h-screen lg:min-h-0 flex flex-col items-center justify-center lg:aspect-2/1 2xl:aspect-8/3 lg:h-auto relative z-0">
    <div className="z-20 w-full py-8">
      <div className="container px-4 md:px-16 2xl:px-0 max-w-1440 2xl:mx-auto">
        {children}
      </div>
    </div>
  </div>
);

export default SectionBannerTextButtonCenter;
