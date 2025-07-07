import React from "react";
import { Button } from "../ui/Button";

const FullImageContentBlock = ({
  title,
  description,
  buttonLabel,
  buttonHref,
  backgroundImage,
}) => {
  return (
    <section className="min-h-screen lg:min-h-0 flex flex-col items-center justify-center lg:aspect-2/1 2xl:aspect-8/3 lg:h-auto relative z-0">
      <div className="relative z-20 w-full py-8">
        <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-2xl 2xl:mx-auto">
          <div className="c-grid grid grid-cols-2 gap-x-8 md:grid-cols-12 lg:gap-x-12">
            <div className="col-span-2 md:col-span-12 lg:col-span-8 text-left lg:col-start-1">
              {title && (
                <h2 className="break-words text-[11vw] font-bold leading-none sm:text-[50px] lg:text-[75px] 2xl:text-[90px] font-main text-white">
                  {title}
                </h2>
              )}

              {description && (
                <div className="mt-6">
                  <div className="break-words text-[20px] font-bold leading-tight lg:text-[22px] text-white">
                    <p className="mb-3 last:mb-0 empty:hidden">
                      <span>{description}</span>
                    </p>
                  </div>
                </div>
              )}

              {buttonLabel && buttonHref && (
                <Button variant="main" href={buttonHref}>
                  {buttonLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute inset-0 scale-125">
          <div className="absolute inset-0 will-change-transform">
            <div className="absolute inset-0 z-20 bg-black opacity-50" />
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              src={backgroundImage || "/placeholder.webp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullImageContentBlock;
