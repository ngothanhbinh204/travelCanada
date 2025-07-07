import React from "react";
import { Button } from "../ui/Button";
import { IconExternalLink } from "../ui/icon/IconExternalLink";

const Coming_Content_Top = () => {
  return (
    <div>
      <section className="relative z-0 text-left my-16 lg:my-24">
        <div className="px-4 md:px-16 2xl:px-20 min_1600_px0 max-w-screen-xl xl:mx-auto">
          <div className="hidden gap-8 lg:grid lg:grid-cols-2 lg:items-start xl:grid-cols-3">
            <div className="self-center lg:col-span-2 xl:col-span-3">
              <div>
                <h2 className="break-words text-[32px] font-bold leading-tight lg:text-[38px] 2xl:text-[42px] after:content-[''] after:block after:w-[50px] after:mt-[0.3em] after:mb-[0.5em] after:h-[3px] after:bg-base mb-6 last:mb-0 text-left text-primary">
                  New Canada Strong Pass!
                </h2>
                <div className="text-base leading-[26px] xl:text-lg xl:leading-[28px] mb-6 last:mb-0">
                  <h6 className="break-words text-[20px] font-bold leading-tight lg:text-[22px] mb-3">
                    <strong>
                      Enjoy free or discounted admissions as you make Canada
                      your travel destination.
                    </strong>
                  </h6>
                  <p className="mb-3 last:mb-0 empty:hidden">
                    This summer, plan a vacation in Canada! From June 20 to
                    September 2, 2025, enjoy free or discounted admission to
                    some of the country's most iconic places. The Canada Strong
                    Pass lets you explore the richness of the country - from
                    museums to nature to railroads.
                  </p>
                </div>
                <div className="mb-6 flex flex-wrap items-start gap-4 last:mb-0 justify-start">
                  <Button
                    className="!mt-0"
                    variant="has_icon"
                    icon={<IconExternalLink />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coming_Content_Top;
