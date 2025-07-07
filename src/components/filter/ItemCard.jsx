import React from "react";
import clsx from "clsx";

import { Button } from "../ui/Button";

const ItemCard = ({ item }) => {
  if (!item) return null;

  const { image, imageAlt, imageCredit, title, link, provinces, themes } = item;

  const provincesDisplay = Array.isArray(provinces)
    ? provinces.join(", ")
    : provinces;
  const themesDisplay = Array.isArray(themes) ? themes.join(", ") : themes;

  return (
    <div
      className={clsx("card relative h-full bg-white transition-shadow")}
      data-component="card-grid-item"
      data-section-title={title}
    >
      <a
        data-title={title}
        data-provinces={provincesDisplay}
        data-themes={themesDisplay}
        aria-label={title}
        className="gtm-tile_click inset-0 mb-5 block overflow-hidden last:mb-0 group"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative">
          <figure className="relative aspect-square has_effect fu_effect">
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              decoding="async"
              className="object-cover anim--hover-image"
            />
            {imageCredit && (
              <figcaption className="absolute bottom-0 right-0 px-4 py-2 text-xs text-white">
                {imageCredit}
              </figcaption>
            )}
          </figure>
        </div>
      </a>

      <div className="mb-4 last:mb-0">
        <h3 className="break-words font-bold leading-tight text-[22px] lg:text-[24px] 2xl:text-[28px]">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:!text-link group transition-all duration-150 ease-linear"
          >
            {title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default ItemCard;
