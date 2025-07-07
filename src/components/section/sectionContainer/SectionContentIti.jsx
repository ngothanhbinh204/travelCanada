import React from "react";
import { Button } from "../../ui/Button";
import { IconExternalLink } from "../../ui/icon/IconExternalLink";

const SectionContentIti = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-x-8 md:grid-cols-12 lg:gap-x-12 z-10">
        <div className="col-span-2 md:col-span-12 lg:col-span-8 text-center lg:col-start-3">
          <h2 className="break-words text-[11vw] font-bold leading-none sm:text-[50px] lg:text-[75px] 2xl:text-[90px] font-main text-white">
            Itineraries
          </h2>
          <div className="mt-6">
            <div className="break-words text-[20px] font-bold leading-tight lg:text-[22px] text-white">
              <p className="mb-3 last:mb-0 empty:hidden text_base_white">
                Don’t miss the iconic spots and hidden gems. No matter where you
                go in British Columbia, there are amazing itinerary ideas for
                you to explore.
              </p>
            </div>
          </div>
          <div className="mt-9 lg:mt-8">
            <Button variant="main" target="_blank" href="#" className="partner">
              <span className="flex items-center gap-3">
                Visit Hello BC
                <IconExternalLink />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContentIti;
