import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function BannerHeroSlide({ slides }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="c-herobanner relative z-0">
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={false}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="heroSwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col min-h-[100vw] md:min-h-[90vw] lg:min-h-[640px] sm:py-16 justify-end py-12 md:py-16 pt-40 md:pt-52">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="relative h-full w-full">
                    <figure className="relative h-full w-full">
                      <img
                        src={slide.image.url || "/placeholder.svg"}
                        alt={slide.image.alt || slide.title}
                        className="object-cover w-full h-full"
                      />
                    </figure>
                  </div>
                </div>
                <div className="relative z-30 px-4 md:px-0 lg:px-8 xl:px-24">
                  <div className="c-container px-4 md:px-16 2xl:px-20 text-white">
                    <div className="c-grid grid grid-cols-2 gap-x-8 md:grid-cols-12 lg:gap-x-12">
                      <div className="text-left sm:px-10 3xl:col-span-6 col-span-2 md:col-span-12 lg:col-span-8 lg:px-0">
                        <h1 className="uppercase break-words text-[11vw] font-bold leading-none sm:text-[50px] lg:text-[75px] 3xl:text-[90px] font-alt text-white">
                          {slide.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-5 top-1/2 -translate-y-1/2 xl:left-20 z-40 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-5 top-1/2 -translate-y-1/2 xl:right-20 z-40 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
