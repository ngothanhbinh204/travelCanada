import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SliderCardVideo } from "./SlideCardVideo";
import { VideoModal } from "../ui/VideoModal";
import SlideNavigation from "../slider/SlideNavigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const VideoSlider = ({ data, className = "" }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (item) => {
    setSelectedVideo(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };
  const sliderId = "video-slider";
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={24}
          initialSlide={1}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/50 !opacity-100",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
          }}
          navigation={{
            nextEl: `.${sliderId}-next`,
            prevEl: `.${sliderId}-prev`,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 2.5,
              spaceBetween: 32,
            },
          }}
          className="!pb-12"
        >
          {data.items.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderCardVideo item={item} onVideoClick={handleVideoClick} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <SlideNavigation sliderId={sliderId} variant="center" />
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </div>
  );
};
