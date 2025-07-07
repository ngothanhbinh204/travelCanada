import React from "react";
import { motion } from "framer-motion";
import { VideoSlider } from "../components/sliderVideo/VideoSlider";
import Breadcrumbs from "../components/breadcrumb/Breadcrumd";
import SectionText from "../components/text/SectionText";
import SectionSlide from "../components/slider/SectionSlider";
import SectionSlide4_2 from "../components/slider/SectionSlider_4_2";
import FollowUsShare from "../components/shared/FollowUsShare";
import FullImageContentBlock from "../components/banner/FullImageContentBlock";
import { generateSliderId } from "../utils/slug";
import { sliderItems, sliderItems2 } from "../data/sliderItems";

import BannerHeroNoSlide from "../components/banner/BannerHeroNoSlide";
const breadcrumbItems = [
  { label: "Home", href: "https://travel.destinationcanada.com/en-us" },
  { label: "Places to go" },
];
const slides = {
  title: "Things To Do",
  image: {
    url: "images/banner_section.webp",
    alt: "Alt Things To Do",
  },
};
const PlacesToGo = () => {
  return (
    <div>
      <BannerHeroNoSlide slides={slides} />
      <Breadcrumbs items={breadcrumbItems} />
      <SectionText />
      <SectionSlide
        title="Arts and culture"
        subtitle={false}
        buttonLabel={false}
        buttonHref="#"
        slides={sliderItems}
        sliderId={generateSliderId("Arts and culture")}
      ></SectionSlide>
      <SectionSlide
        title="Outdoors and wellbeing"
        subtitle="More to see"
        buttonLabel={false}
        buttonHref="#"
        slides={sliderItems}
        sliderId={generateSliderId("Outdoors and wellbeing")}
      ></SectionSlide>

      <SectionSlide4_2
        title="Indigenous experiences"
        subtitle="Things to do"
        buttonLabel={false}
        buttonHref="#"
        slides={sliderItems2}
        sliderId={generateSliderId("Indigenous experiences")}
      ></SectionSlide4_2>

      <FullImageContentBlock
        title="Pack your bags"
        description="Places to go, things to see and what to do—all neatly laid out. Begin your adventure with a travel package tailored to fit your needs. So the only surprises on your trip will be the good kind."
        buttonLabel="Explore packages"
        buttonHref="#"
        backgroundImage="images/banner_section.webp"
      />

      <SectionSlide4_2
        title="Incredible travel stories & guides"
        subtitle="Inspiring adventures"
        buttonLabel="Get inspired"
        buttonHref="#"
        slides={sliderItems2}
        sliderId={generateSliderId("Incredible travel stories & guides")}
      ></SectionSlide4_2>

      <FollowUsShare></FollowUsShare>
    </div>
  );
};

export default PlacesToGo;
