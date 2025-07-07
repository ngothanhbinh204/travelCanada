import React from "react";
import { motion } from "framer-motion";
import SectionSliderBanner from "../components/banner/BannerSingle/SectionSliderBanner";
import Breadcrumbs from "../components/breadcrumb/Breadcrumd";
import SectionHeadingContent from "../components/shared/SectionHeadingContent/SectionHeadingContent";
import SectionImageText from "../components/section/sectionContainer/SectionImageText";
import MapBoxMain from "../components/mapv2/MapBoxMain";
import ItinerariesSection from "../components/section/ItinerariesSection";
import TravelPackagesSection from "../components/section/TravelPackagesSection";
import SectionSlide from "../components/slider/SectionSlider";
import FollowUsShare from "../components/shared/FollowUsShare";
import { generateSliderId } from "../utils/slug";
import { sliderItems, sliderItems2 } from "../data/sliderItems";

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
const PlacesToGo = () => {
  return (
    <div>
      <SectionSliderBanner slides={slides} />
      <Breadcrumbs items={breadcrumbItems} />
      <SectionHeadingContent />
      <SectionImageText layout="image-text" />
      <SectionImageText layout="text-image" />
      {/* <MapMain /> */}
      <MapBoxMain />
      <SectionSlide
        title="Incredible travel stories & guides"
        subtitle="More to see"
        buttonLabel="Get inspired"
        buttonHref="#"
        slides={sliderItems}
        sliderId={generateSliderId("Incredible travel stories & guides")}
      ></SectionSlide>

      <ItinerariesSection />

      <TravelPackagesSection />

      <SectionSlide
        title="Discover incredible destinations"
        subtitle="Places to go"
        buttonLabel="Start Exploring"
        buttonHref="#"
        slides={sliderItems2}
        sliderId={generateSliderId("Discover incredible destinations")}
      ></SectionSlide>

      <FollowUsShare></FollowUsShare>
    </div>
  );
};

export default PlacesToGo;
