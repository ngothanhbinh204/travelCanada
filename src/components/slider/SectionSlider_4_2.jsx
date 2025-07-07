import React from "react";
import SlideWrapper from "./SlideWrapper";
import { sliderPreset_4_2 } from "../../config/sliderPresets";

import SectionHeader from "./SectionHeader";

const SectionSlider = ({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  slides,
  sliderId,
}) => {
  return (
    <div>
      <section className="relative z-0 my-16 lg:my-24">
        <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-2xl 2xl:mx-auto">
          <SectionHeader
            subtitle={subtitle}
            title={title}
            buttonLabel={buttonLabel}
            buttonHref={buttonHref}
          />
        </div>
        <SlideWrapper
          sliderId={sliderId}
          slides={slides}
          sliderConfig={sliderPreset_4_2}
          variant="4_2"
        />
      </section>
    </div>
  );
};

export default SectionSlider;
