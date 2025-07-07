import React from "react";
import { useState, useEffect, useMemo } from "react";

import BannerHero from "../components/banner/BannerHero";
import SectionSlide from "../components/slider/SectionSlider";
import SectionVideoSlider from "../components/sliderVideo/SectionVideoSlider";
import FollowUsShare from "../components/shared/FollowUsShare";
import SectionSlide4_2 from "../components/slider/SectionSlider_4_2";
import MapBoxMain from "../components/mapHomepage/MapBoxMain";
import { generateSliderId } from "../utils/slug";

import { sliderItems, sliderItems2 } from "../data/sliderItems";

const Home = () => {
  // const [slider, setSlider] = useState([]);
  // useEffect(() => {
  //   fetch("/api/slider")
  //     .then((res) => res.json())
  //     .then((data) => setSlider(data));
  // }, []);

  return (
    <div>
      <BannerHero></BannerHero>
      <MapBoxMain />
      <SectionSlide
        title="Explore Canada"
        subtitle="See"
        buttonLabel="Get inspired"
        buttonHref="#"
        slides={sliderItems}
        sliderId={generateSliderId("Explore Canada")}
      ></SectionSlide>
      <SectionSlide4_2
        title="Discover Canada"
        subtitle="Travel"
        buttonLabel="Explore Now"
        buttonHref="#"
        slides={sliderItems2}
        sliderId={generateSliderId("Discover Canada")}
      ></SectionSlide4_2>

      <SectionVideoSlider></SectionVideoSlider>

      <FollowUsShare></FollowUsShare>
    </div>
  );
};

export default Home;
