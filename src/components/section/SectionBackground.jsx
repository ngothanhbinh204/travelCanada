import React from "react";

const SectionBackground = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 scale-125">
          <div
            className="absolute inset-0 will-change-transform"
            style={{ transform: "translateY(-21.0453px) translateZ(0px)" }}
          >
            <div className="absolute inset-0 z-20 bg-black opacity-25"></div>
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="h-full w-full object-cover"
              src="images/banner_section.webp "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBackground;
