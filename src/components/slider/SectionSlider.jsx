import React from "react";
import SlideWrapper from "./SlideWrapper";
import SectionHeader from "./SectionHeader";
import { sliderPreset_3_3 } from "../../config/sliderPresets";

const SectionSlider = (props) => {
  const {
    title,
    sliderId,
    subtitle,
    buttonLabel,
    buttonHref = "#",
    slides = [],
  } = props;

  console.log("SectionSlider props:", props);

  return (
    <div>
      <section className="relative z-0 bg-light-grey my-16 lg:my-24">
        <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-2xl 2xl:mx-auto">
          <SectionHeader
            subtitle={subtitle}
            title={title}
            buttonLabel={buttonLabel ? buttonLabel : undefined}
            buttonHref={buttonLabel ? buttonHref : undefined}
          />
        </div>
        <SlideWrapper
          sliderId={sliderId}
          slides={slides}
          sliderConfig={sliderPreset_3_3}
          variant="3_3"
        />
      </section>
    </div>
  );
};

export default SectionSlider;
