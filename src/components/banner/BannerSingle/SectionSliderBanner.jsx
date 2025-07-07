import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import BannerSlide from "./BannerSlide";
import BannerNavigation from "./BannerNavigation";
import { useEffect, useRef, useState } from "react";
// import { p } from "framer-motion/client";

const SectionSliderBanner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState({
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  });

  // set navigation elements after the component mounts
  // This is necessary because Swiper needs to access the DOM elements
  useEffect(() => {
    setNavigation({
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    });
  }, []);
  const slides = [
    {
      id: 1,
      image: "images/banner_section.webp",
      title: "Brish Columbia",
    },
    {
      id: 2,
      image: "images/banner_section.webp",
      title: "Alberta",
    },
    {
      id: 3,
      image: "images/banner_section.webp",
      title: "Ontario",
    },
  ];

  return (
    <section className="section_sliderbanner">
      <div className="swiper bannerPlaceToGo relative">
        <BannerNavigation prevRef={prevRef} nextRef={nextRef} />

        <Swiper modules={[Navigation]} loop navigation={navigation}>
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <BannerSlide imageUrl={slide.image} title={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionSliderBanner;
