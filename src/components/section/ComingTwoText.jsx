import React from "react";

const ComingTwoText = ({
  id = "",
  title = "Sample Title",
  subTitle = "Sample subtitle for the section goes here.",
  contentLeft = "<p>This is sample content for the left column. You can add any HTML or text here.</p>",
  contentRight = "<p>This is sample content for the right column. You can add any HTML or text here.</p>",
}) => {
  return (
    <section id={id} className="templates my-16 lg:my-24 target-section">
      <div className="container max-w-screen-2xl px-4 md:px-16 2xl:px-20 3xl:px-0 mx-auto">
        {/* Title */}
        {title && (
          <h2 className="text-[32px] font-bold leading-tight lg:text-[38px] 2xl:text-[42px] after:block after:w-[50px] after:mt-2 after:mb-3 after:h-[3px] after:bg-black mb-6 text-black">
            {title}
          </h2>
        )}

        {/* Subtitle */}
        {subTitle && (
          <div className="text-lg xl:text-xl mb-6">
            <p>{subTitle}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 md:gap-8">
          {contentLeft && (
            <div className="mb-4 md:mb-0">
              <div className="text-base leading-[26px] xl:text-lg xl:leading-[28px]">
                <p className="mb-3 last:mb-0 empty:hidden">
                  <strong className="inline font-bold empty:hidden">
                    What are you bringing into Canada?
                  </strong>
                </p>
                <ul className="ml-[1em] space-y-2 list-disc mb-3 last:mb-0">
                  <li>
                    For information on bringing in alcohol and tobacco to
                    Canada, please visit the
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link underline gtm-inbody-link partner"
                      href="http://www.cbsa-asfc.gc.ca/travel-voyage/bgb-rmf-eng.html"
                    >
                      Canada Border Servces Agency
                      <svg
                        width={32}
                        height={32}
                        fill="inherit"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative bottom-[-1px] ml-1 mr-1 inline h-3 w-3 fill-current"
                      >
                        <title id="ExternalLinkIconId">
                          External Link Title
                        </title>
                        <g clipPath="url(#clip0_3048_45488)">
                          <path d="M13.6837 11.4373H15.992V16.0004H0V0.00305176H4.53895V2.3193C3.97994 2.3193 3.4343 2.338 2.88867 2.31395H2.29756C2.31093 5.7389 2.31093 9.73289 2.29756 13.1578C2.29756 13.5719 2.29756 13.6921 2.29756 13.6921C5.72651 13.6815 10.2628 13.6815 13.6917 13.6921L13.6864 13.1525C13.6623 12.6022 13.681 12.0518 13.681 11.4373H13.6837Z" />
                          <path d="M15.9999 7.99599H13.7051V4.25046C11.782 6.17399 9.92305 8.03339 8.06413 9.88746L6.42188 8.10286C8.25404 6.2755 10.2199 4.31191 12.1832 2.35365H8.01599V0H15.9999V7.99599Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3048_45488">
                            <rect width={32} height={32} />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          )}

          {contentRight && (
            <div className="mb-4 md:mb-0">
              <div className="text-base leading-[26px] xl:text-lg xl:leading-[28px]">
                <p className="mb-3 last:mb-0 empty:hidden">
                  <strong className="inline font-bold empty:hidden">
                    What are you bringing into Canada?
                  </strong>
                </p>
                <ul className="ml-[1em] space-y-2 list-disc mb-3 last:mb-0">
                  <li>
                    For information on bringing in alcohol and tobacco to
                    Canada, please visit the
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link underline gtm-inbody-link partner"
                      href="http://www.cbsa-asfc.gc.ca/travel-voyage/bgb-rmf-eng.html"
                    >
                      Canada Border Servces Agency
                      <svg
                        width={32}
                        height={32}
                        fill="inherit"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative bottom-[-1px] ml-1 mr-1 inline h-3 w-3 fill-current"
                      >
                        <title id="ExternalLinkIconId">
                          External Link Title
                        </title>
                        <g clipPath="url(#clip0_3048_45488)">
                          <path d="M13.6837 11.4373H15.992V16.0004H0V0.00305176H4.53895V2.3193C3.97994 2.3193 3.4343 2.338 2.88867 2.31395H2.29756C2.31093 5.7389 2.31093 9.73289 2.29756 13.1578C2.29756 13.5719 2.29756 13.6921 2.29756 13.6921C5.72651 13.6815 10.2628 13.6815 13.6917 13.6921L13.6864 13.1525C13.6623 12.6022 13.681 12.0518 13.681 11.4373H13.6837Z" />
                          <path d="M15.9999 7.99599H13.7051V4.25046C11.782 6.17399 9.92305 8.03339 8.06413 9.88746L6.42188 8.10286C8.25404 6.2755 10.2199 4.31191 12.1832 2.35365H8.01599V0H15.9999V7.99599Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3048_45488">
                            <rect width={32} height={32} />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    .
                  </li>
                  <li>
                    For information on bringing in alcohol and tobacco to
                    Canada, please visit the
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link underline gtm-inbody-link partner"
                      href="http://www.cbsa-asfc.gc.ca/travel-voyage/bgb-rmf-eng.html"
                    >
                      Canada Border Servces Agency
                      <svg
                        width={32}
                        height={32}
                        fill="inherit"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative bottom-[-1px] ml-1 mr-1 inline h-3 w-3 fill-current"
                      >
                        <title id="ExternalLinkIconId">
                          External Link Title
                        </title>
                        <g clipPath="url(#clip0_3048_45488)">
                          <path d="M13.6837 11.4373H15.992V16.0004H0V0.00305176H4.53895V2.3193C3.97994 2.3193 3.4343 2.338 2.88867 2.31395H2.29756C2.31093 5.7389 2.31093 9.73289 2.29756 13.1578C2.29756 13.5719 2.29756 13.6921 2.29756 13.6921C5.72651 13.6815 10.2628 13.6815 13.6917 13.6921L13.6864 13.1525C13.6623 12.6022 13.681 12.0518 13.681 11.4373H13.6837Z" />
                          <path d="M15.9999 7.99599H13.7051V4.25046C11.782 6.17399 9.92305 8.03339 8.06413 9.88746L6.42188 8.10286C8.25404 6.2755 10.2199 4.31191 12.1832 2.35365H8.01599V0H15.9999V7.99599Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3048_45488">
                            <rect width={32} height={32} />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    .
                  </li>
                  <li>
                    For information on bringing in alcohol and tobacco to
                    Canada, please visit the
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link underline gtm-inbody-link partner"
                      href="http://www.cbsa-asfc.gc.ca/travel-voyage/bgb-rmf-eng.html"
                    >
                      Canada Border Servces Agency
                      <svg
                        width={32}
                        height={32}
                        fill="inherit"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative bottom-[-1px] ml-1 mr-1 inline h-3 w-3 fill-current"
                      >
                        <title id="ExternalLinkIconId">
                          External Link Title
                        </title>
                        <g clipPath="url(#clip0_3048_45488)">
                          <path d="M13.6837 11.4373H15.992V16.0004H0V0.00305176H4.53895V2.3193C3.97994 2.3193 3.4343 2.338 2.88867 2.31395H2.29756C2.31093 5.7389 2.31093 9.73289 2.29756 13.1578C2.29756 13.5719 2.29756 13.6921 2.29756 13.6921C5.72651 13.6815 10.2628 13.6815 13.6917 13.6921L13.6864 13.1525C13.6623 12.6022 13.681 12.0518 13.681 11.4373H13.6837Z" />
                          <path d="M15.9999 7.99599H13.7051V4.25046C11.782 6.17399 9.92305 8.03339 8.06413 9.88746L6.42188 8.10286C8.25404 6.2755 10.2199 4.31191 12.1832 2.35365H8.01599V0H15.9999V7.99599Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3048_45488">
                            <rect width={32} height={32} />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComingTwoText;
