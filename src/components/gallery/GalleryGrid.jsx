import React from "react";

const GalleryGrid = ({ images }) => {
  return (
    <div className="gallery mt-8">
      <div className="grid fu_effect has_effect grid-cols-[3fr_1fr_3fr] grid-rows-2 lg:grid-cols-[8fr_6fr_12fr_9fr] lg:grid-rows-1 gap-2">
        {images.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative h-[80vw] max-h-[480px] md:h-[55vw] lg:h-[30vw] overflow-hidden group z-10 ${
              index === 0 || index === 3
                ? "col-span-2 lg:col-span-1"
                : "lg:col-span-1"
            }`}
          >
            <figure className="relative h-full w-full overflow-hidden group">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-sm object-cover object-center absolute inset-0"
              />
              <figcaption className="absolute bottom-0 right-0 px-4 py-2 text-xs text-white transition-transform duration-300 group-hover:translate-y-[-8px] group-hover:opacity-90 group-hover:ease-in-out">
                {item.alt || "Gallery Image"}
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
