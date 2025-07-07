import React from "react";
import { Button } from "../ui/Button";

const CenteredTextSection = ({ section = {} }) => {
  const {
    title = "",
    content = "",
    button = null, // { title: "", url: "" }
  } = section;

  return (
    <section className="relative z-0 text-center my-16 lg:my-24">
      <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-xl xl:mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {title && (
            <h2 className="text-[32px] font-bold leading-tight text-center text-primary mb-6">
              {title}
            </h2>
          )}

          {content && (
            <div
              className="text-base leading-[26px] xl:text-lg xl:leading-[28px] mb-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {button && button.url && button.title && (
            <div className="mb-6 flex flex-wrap justify-center gap-4">
              <a href={button.url} className="button_primary">
                <span className="flex items-center gap-3">{button.title}</span>
              </a>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-2 lg:items-start xl:grid-cols-3">
          <div className="self-center lg:col-span-2 xl:col-span-3">
            {title && (
              <h2 className="break-words text-[32px] font-bold leading-tight lg:text-[38px] 3xl:text-[42px] mb-6 last:mb-0 text-center text-primary">
                {title}
              </h2>
            )}

            {content && (
              <div
                className="text-base space-y-3 leading-[26px] xl:text-lg xl:leading-[28px] mb-6"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}

            {button && button.url && button.title && (
              <div className="mb-6 flex flex-wrap justify-center gap-4">
                <Button variant="main" href={button.url}>
                  {button.title}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenteredTextSection;
