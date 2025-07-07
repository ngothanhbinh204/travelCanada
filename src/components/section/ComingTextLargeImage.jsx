import React from "react";

const ComingTextLargeImage = ({ section = {} }) => {
  const {
    slug = "",
    title = "",
    sub_title = "",
    image = {},
    content = "",
  } = section;

  return (
    <section
      id={slug}
      className="templates relative z-0 text-left my-16 lg:my-24 target-section"
    >
      <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-2xl 2xl:mx-auto">
        {/* Mobile */}
        <div className="block lg:hidden">
          {title && (
            <h2 className="text-[32px] font-bold leading-tight lg:text-[38px] 2xl:text-[42px] after:block after:w-[50px] after:mt-[0.3em] after:mb-[0.5em] after:h-[3px] after:bg-black mb-6 text-black">
              {title}
            </h2>
          )}

          {sub_title && (
            <div className="text-lg xl:text-xl mb-4">
              <p className="mb-3">{sub_title}</p>
            </div>
          )}

          {image?.url && (
            <div className="relative mb-4">
              <img className="mx-auto" src={image.url} alt={title} />
            </div>
          )}

          {content && (
            <div
              className="text-base leading-[26px] xl:text-lg xl:leading-[28px] mb-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>

        {/* Desktop */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-2 lg:items-start xl:grid-cols-3">
          {image?.url && (
            <div className="relative mb-4 overflow-hidden last:mb-0 xl:col-span-2 order-2">
              <img className="mx-auto" src={image.url} alt={title} />
            </div>
          )}

          <div className="self-center lg:col-span-1 xl:col-span-1">
            {title && (
              <h2 className="text-[32px] font-bold leading-tight lg:text-[38px] 2xl:text-[42px] after:block after:w-[50px] after:mt-[0.3em] after:mb-[0.5em] after:h-[3px] after:bg-black mb-6 text-black">
                {title}
              </h2>
            )}

            {sub_title && (
              <div className="text-lg xl:text-xl mb-4">
                <p className="mb-3">{sub_title}</p>
              </div>
            )}

            {content && (
              <div
                className="text-base leading-[26px] xl:text-lg xl:leading-[28px] mb-6"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingTextLargeImage;
