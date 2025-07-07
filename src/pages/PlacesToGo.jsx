import React from "react";
import { motion } from "framer-motion";
import { VideoSlider } from "../components/sliderVideo/VideoSlider";
import Breadcrumbs from "../components/breadcrumb/Breadcrumd";
import SectionText from "../components/text/SectionText";
import SectionSlide from "../components/slider/SectionSlider";
import SectionSlide4_2 from "../components/slider/SectionSlider_4_2";
import FollowUsShare from "../components/shared/FollowUsShare";
import { generateSliderId } from "../utils/slug";
import { sliderItems, sliderItems2 } from "../data/sliderItems";

import BannerHeroNoSlide from "../components/banner/BannerHeroNoSlide";
const breadcrumbItems = [
  { label: "Home", href: "https://travel.destinationcanada.com/en-us" },
  { label: "Places to go" },
];
const slides = {
  title: "Places To Go",
  image: {
    url: "images/banner_section.webp",
    alt: "Alt Places To Go",
  },
};
const PlacesToGo = () => {
  return (
    <div>
      <BannerHeroNoSlide slides={slides} />
      <Breadcrumbs items={breadcrumbItems} />
      <SectionText />
      <SectionSlide
        title="Discover incredible destinations"
        subtitle="See"
        buttonLabel={false}
        buttonHref="#"
        slides={sliderItems}
        sliderId={generateSliderId("Discover incredible destinations")}
      ></SectionSlide>
      <SectionSlide
        title="Incredible travel stories & guides"
        subtitle="More to see"
        buttonLabel="Get inspired"
        buttonHref="#"
        slides={sliderItems}
        sliderId={generateSliderId("Incredible travel stories & guides")}
      ></SectionSlide>

      <SectionSlide4_2
        title="Undeniably Canadian experiences"
        subtitle="Things to do"
        buttonLabel="Start Exploring"
        buttonHref="#"
        slides={sliderItems2}
        sliderId={generateSliderId("Undeniably Canadian experiences")}
      ></SectionSlide4_2>

      <FollowUsShare></FollowUsShare>
    </div>
  );
};

export default PlacesToGo;
