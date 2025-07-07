import React from "react";

const BannerComing = () => {
  return (
    <div>
      <section className=" relative z-0">
        <div className=" relative flex flex-col min-h-[100vw] md:min-h-[75vw] lg:min-h-[360px] sm:py-16 justify-center pb-8 pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative h-full w-full">
              <figure className="relative h-full w-full">
                <img
                  src="images/banner_section.webp"
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)]"></div>
              </figure>
            </div>
          </div>
          <div className="relative z-30 px-4 md:px-0 lg:px-8 xl:px-24">
            <div className="c-container px-4 md:px-16 2xl:px-20 text-white">
              <div className=" grid grid-cols-2 gap-x-8 md:grid-cols-12 lg:gap-x-12">
                <div className="text-center lg:col-start-3 3xl:col-start-4 sm:px-10 text-shadow 3xl:col-span-6 col-span-2 md:col-span-12 lg:col-span-8 lg:px-0">
                  <h1 className="break-words text-[11vw] font-bold leading-none sm:text-[50px] lg:text-[75px] 3xl:text-[90px] font-alt text-white">
                    Coming to Canada
                  </h1>
                  <div className="text-base-banner">
                    <p className="mb-3 last:mb-0 empty:hidden">
                      How far is a km? What are the regulations pertaining to
                      customs and duty? And why is the iced tea so sweet? Get
                      all the info you need to prepare for Canada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerComing;
