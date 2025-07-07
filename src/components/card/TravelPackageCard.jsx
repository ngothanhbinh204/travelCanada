import React from "react";
import { IconExternalLink } from "../ui/icon/IconExternalLink";

const TravelPackageCard = ({ image, logo, title, link, price, duration }) => {
  return (
    <div className="relative h-full">
      <a
        target="_blank"
        className="inset-0 mb-5 block overflow-hidden last:mb-0"
        href={link}
      >
        <div className="relative">
          <figure className="relative figure_img aspect-square has_effect fu_effect">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="object-cover h-full"
              src={image}
            />
          </figure>
          <div className="absolute left-0 top-0 w-full">
            <img
              alt="Logo"
              loading="lazy"
              decoding="async"
              className="!h-[80px] !w-auto p-2 bg-white"
              src={logo}
            />
          </div>
        </div>
      </a>
      <div className="overflow-hidden max-h-[300px]">
        <div className="mb-4 last:mb-0">
          <h3 className="break-words font-bold leading-tight text-[22px] lg:text-[24px] 2xl:text-[28px]">
            <a
              className="primary2 group transition-all duration-150 ease-linear"
              target="_blank"
              href={link}
            >
              {title}
              <span className="whitespace-nowrap">
                <IconExternalLink className="inline transition-all duration-150 ease-linear group-hover:fill-tertiary w-[0.7em] h-[0.7em]" />
              </span>
            </a>
          </h3>
          <p className="p_base_gray">{price}</p>
          <p className="p_base_gray">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default TravelPackageCard;
