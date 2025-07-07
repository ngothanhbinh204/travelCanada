"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function HeroBannerNoSlide({ slides }) {
  //   const [showLocation, setShowLocation] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const locationName = slides.locationName || "Unknown Location";

  return (
    <section className="c-herobanner relative z-0">
      <div className="c-herobanner__slide relative flex flex-col min-h-[100vw] md:min-h-[90vw] lg:min-h-[640px] sm:py-16 justify-end py-12 md:py-16 pt-40 md:pt-52">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative h-full w-full">
            <figure className="relative h-full w-full">
              <img
                src={slides.image.url || "/placeholder.svg"}
                alt={slides.image.alt || slides.title}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="absolute right-4 top-20 z-20 group inline-flex flex-row items-center">
              {/* Label với Framer Motion */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-2 px-3 text-md font-semibold text-white pointer-events-none hover:scale-75"
              >
                {locationName}
              </motion.div>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="cursor-pointer p-1 transition group"
              >
                <MapPin size={24} className="text-white " />
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-30 px-4 md:px-0 lg:px-8 xl:px-24">
          <div className="c-container px-4 md:px-16 2xl:px-20 text-white">
            <div className="c-grid grid grid-cols-2 gap-x-8 md:grid-cols-12 lg:gap-x-12">
              <div className="text-left sm:px-10 3xl:col-span-6 col-span-2 md:col-span-12 lg:col-span-8 lg:px-0">
                <h1 className="uppercase break-words text-[11vw] font-bold leading-none sm:text-[50px] lg:text-[75px] 2xl:text-[90px] font-alt text-white">
                  {slides.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
