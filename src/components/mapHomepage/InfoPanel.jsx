import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { IconExternalLink } from "../ui/icon/IconExternalLink";
import { Button } from "../ui/Button";

const InfoPanel = ({ selectedPlace, onClose }) => {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    setShowPopup(true);
  }, [selectedPlace]);

  if (!selectedPlace) return null;

  return (
    <div>
      <div className="relative hidden lg:block bottom-0 lg:top-0 z-[11] w-full overflow-y-scroll lg:border-r lg:border-[#e0e0e0] bg-black/70 lg:bg-white md:absolute">
        <div className="relative">
          <Button
            className=" absolute right-0 top-0 z-10"
            variant="close"
            onClick={onClose}
          >
            Close X
          </Button>
          <div className="relative h-[400px]">
            <img
              alt={selectedPlace.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              src={selectedPlace.image}
            />
          </div>

          {/* Nội dung */}
          <div className="p-10 flex flex-col justify-center items-center lg:items-start">
            <h2 className="break-words text-[26px] leading-tight lg:text-[32px] 2xl:text-[36px] text-primary mb-4 font-medium">
              {selectedPlace.name}
            </h2>

            <div className="text-white lg:text-base leading-[26px] xl:text-lg xl:leading-[28px] lg:mb-8">
              <p className="mb-3 last:mb-0 empty:hidden">
                {selectedPlace.description}
              </p>
            </div>

            {/* {selectedPlace.points?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-md font-medium text-gray-700 mb-2">
                    Địa danh nổi bật:
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {selectedPlace.points.map((point) => (
                      <li key={point.id}>{point.name}</li>
                    ))}
                  </ul>
                </div>
              )} */}

            <div className="mb-6 flex flex-col flex-wrap items-start gap-4 last:mb-0">
              {selectedPlace.linkDetail && (
                <Button className="!text-xs" variant="main">
                  Discover {selectedPlace.name}
                </Button>
              )}

              {selectedPlace.linkOffer && (
                <Button
                  className=""
                  variant="no_bg"
                  icon={<IconExternalLink />}
                >
                  Visit Travel {selectedPlace.name}
                </Button>
              )}

              {selectedPlace.linkOther && (
                <Button
                  className=""
                  variant="no_bg"
                  icon={<IconExternalLink />}
                >
                  Book a {selectedPlace.name} travel package
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Display for mobile  */}
      {showPopup && (
        <div className="relative lg:hidden bottom-0 lg:top-0 z-[11] w-full overflow-y-scroll lg:border-r lg:border-[#e0e0e0] bg-black/70 lg:bg-white md:absolute">
          <div className="relative">
            <Button
              className="block absolute lg:hidden right-0 top-0 z-10"
              onClick={() => setShowPopup(false)}
              variant="close"
            >
              X
            </Button>

            <div className="hidden lg:relative h-[400px]">
              <img
                alt={selectedPlace.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                src={selectedPlace.image}
              />
            </div>

            {/* Nội dung */}
            <div className="p-10 flex flex-col justify-center items-center lg:items-start">
              <h2 className="break-words text-[26px] leading-tight lg:text-[32px] 2xl:text-[36px] text-primary mb-4 font-medium">
                {selectedPlace.name}
              </h2>

              <div className="text-white lg:text-base leading-[26px] xl:text-lg xl:leading-[28px] lg:mb-8">
                <p className="mb-3 last:mb-0 empty:hidden">
                  {selectedPlace.description}
                </p>
              </div>

              {/* {selectedPlace.points?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-md font-medium text-gray-700 mb-2">
                    Địa danh nổi bật:
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {selectedPlace.points.map((point) => (
                      <li key={point.id}>{point.name}</li>
                    ))}
                  </ul>
                </div>
              )} */}

              <div className="mb-6 flex flex-col flex-wrap items-start gap-4 last:mb-0">
                {selectedPlace.linkDetail && (
                  <Button className="!text-xs" variant="main">
                    Discover {selectedPlace.name}
                  </Button>
                )}

                {selectedPlace.linkOffer && (
                  <Button
                    className="!hidden lg:relative"
                    variant="no_bg"
                    icon={<IconExternalLink />}
                  >
                    Visit Travel {selectedPlace.name}
                  </Button>
                )}

                {selectedPlace.linkOther && (
                  <Button
                    className="!hidden lg:relative"
                    variant="no_bg"
                    icon={<IconExternalLink />}
                  >
                    Book a {selectedPlace.name} travel package
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPanel;
