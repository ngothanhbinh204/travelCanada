import React from "react";
import BannerImage from "../../assets/images/banner_section.webp";

const BannerHero = () => {
  return (
    <div>
      <section className="section_hero c-herobanner__slide mb-[96px] relative flex flex-col min-h-[100vw] md:min-h-[90vw] lg:min-h-[640px] px-8 md:px-[104px] lg:px-[176px] sm:py-16 justify-center py-12 md:py-16 pt-40 md:pt-52">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative h-full w-full">
            <figure className="relative h-full w-full">
              <img
                src={BannerImage}
                alt="Travel Destination Canada Banner"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 md:grid-cols-12 lg:gap-x-12 z-10">
          <div className="text-left sm:px-10 3xl:col-span-6 col-span-2 md:col-span-12 lg:col-span-8 lg:px-0">
            <h1 className="break-words text-[11vw] leading-none sm:text-[50px] lg:text-[75px] 2xl:text-[90px] font-main font-bold text-white">
              Canada, naturally.
            </h1>
            <p className="text-white leading-[26px] xl:text-2xl xl:leading-[28px] mt-4">
              We don't plan incredible around here. It just kind of happens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerHero;
