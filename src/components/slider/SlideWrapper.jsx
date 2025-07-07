import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SlideNavigation from "./SlideNavigation";
import "swiper/css";
import "swiper/css/navigation";
import SlideItem from "./SlideItem";

const SlideWrapper = ({ variant, sliderId, slides, sliderConfig = {} }) => {
  const defaultConfig = {
    spaceBetween: 16,
    slidesPerView: 1,
    navigation: {
      nextEl: `.${sliderId}-next`,
      prevEl: `.${sliderId}-prev`,
    },
    breakpoints: {
      640: { slidesPerView: 2.3 },
      // 768: { slidesPerView: 2.3 },
      1280: { slidesPerView: 3.3 },
    },
    modules: [Navigation],
  };

  const config = {
    ...defaultConfig,
    ...sliderConfig,
    breakpoints: {
      ...defaultConfig.breakpoints,
      ...sliderConfig.breakpoints,
    },
  };

  return (
    <div className="relative wrapper_slide mt-4 md:mt-6 lg:mt-7 xl:mt-12">
      <div className="relative">
        <Swiper {...config}>
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <SlideItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SlideNavigation variant={variant} sliderId={sliderId} />
    </div>
  );
};

export default SlideWrapper;
