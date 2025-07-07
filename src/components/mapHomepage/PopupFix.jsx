import React from "react";
import { Button } from "../ui/Button";

const PopupFix = () => {
  return (
    <div>
      <div className="w-full visible relative top-[10%] z-20 p-[20px] lg:absolute lg:right-[20px] lg:w-[450px] lg:bg-white lg:pt-[20px] 2xl:w-[480px]">
        <span>Canada, naturally.</span>
        <h2 className="break-words text-[36px] font-bold leading-tight lg:text-[48px] 2xl:text-[52px] text-primary">
          Once-in-a-lifetime happens all the time.
        </h2>
        <div className="text-base leading-[26px] xl:text-lg xl:leading-[28px] mb-4 last:mb-0">
          <p className="mb-3 last:mb-0 empty:hidden">
            <span>
              Whether it’s postcard-worthy views at every pitstop or
              warm-hearted folks always eager to offer a helping hand, the
              exceptional is just a part of everyday life in Canada. Wandering
              through cities can sometimes mean pausing your commute for a
              four-legged passerby. Sitting down to dinner often comes with an
              epic backdrop. And if the northern lights start stirring overhead?
              In the North, that's just a regular Tuesday. Extraordinary
              experiences come naturally here.
            </span>
          </p>
        </div>
        <div className="mb-6 flex flex-col flex-wrap items-start gap-4 last:mb-0">
          <Button variant="main" href="#">
            Learn more
          </Button>
          {/* <a
            className="inline-block cursor-pointer rounded-sm px-5 py-3 transition-colors bg-primary hover:bg-link font-medium text-white text-left"
            href="https://travel.destinationcanada.com/en-us/places-to-go"
          >
            <span className="flex items-center gap-3">Learn more</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default PopupFix;
