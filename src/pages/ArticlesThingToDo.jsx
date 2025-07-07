import React from "react";
import { motion } from "framer-motion";
import SectionSliderBanner from "../components/banner/BannerSingle/SectionSliderBanner";
import Breadcrumbs from "../components/breadcrumb/Breadcrumd";
import SectionSlide from "../components/slider/SectionSlider";
import { generateSliderId } from "../utils/slug";
import { sliderItems } from "../data/sliderItems";
import SectionFilterMulti from "../components/filter/SectionFilterMulti";
const breadcrumbItems = [
  { label: "Home", href: "https://travel.destinationcanada.com/en-us" },
  { label: "Places to go", href: "#" },
  { label: "Single Places To Go" },
];
const slides = {
  title: "Places To Go",
  image: {
    url: "images/banner_section.webp",
    alt: "Alt Places To Go",
  },
};
const ArticlesThingToDo = () => {
  return (
    <div>
      <SectionSliderBanner slides={slides} />
      <Breadcrumbs items={breadcrumbItems} />
      <SectionFilterMulti />
      <SectionSlide
        title="Incredible travel stories & guides"
        subtitle="More to see"
        buttonLabel="Get inspired"
        buttonHref="#"
        slides={sliderItems}
        sliderId={generateSliderId("Incredible travel stories & guides")}
      ></SectionSlide>
    </div>
  );
};

export default ArticlesThingToDo;
