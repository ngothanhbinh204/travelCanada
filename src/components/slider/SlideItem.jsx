const SlideItem = ({ image, title, link, credit }) => {
  return (
    <div className="overflow-hidden w-full has_effect fu_effect">
      <div className="relative overflow-hidden rounded h-[66vh] sm:h-[46vw] lg:h-[32vw]">
        <a href={link} className="absolute inset-0 block">
          <figure className="h-full w-full">
            <img
              src={image}
              alt={title}
              className="object-cover h-full w-full"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 right-0 px-4 py-2 text-xs text-white">
              {credit}
            </figcaption>
          </figure>
        </a>
      </div>
      <div className="mt-5">
        <h3 className="text-[22px] font-bold lg:text-[24px] 2xl:text-[28px] mt-2">
          <a
            href={link}
            className="primary2 transition-all duration-150 ease-linear"
          >
            {title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default SlideItem;
