import clsx from "clsx";

const SectionHeader = ({
  className = "",
  subtitle,
  title,
  buttonLabel,
  buttonHref,
}) => {
  const titleClass = clsx(
    "text-[36px] font-bold lg:text-[48px] 2xl:text-[52px] mt-1 first:mt-0 leading-none",
    className || "text-primary"
  );

  return (
    <div className="items-end justify-between md:flex">
      <div className="mb-2 md:mb-0 md:max-w-[70%] xl:max-w-none">
        {subtitle && (
          <p className="text-base text-mid-grey font-semibold">{subtitle}</p>
        )}
        {title && <h3 className={titleClass}>{title}</h3>}
      </div>

      {buttonLabel && (
        <a
          href={buttonHref}
          className="inline-block group cursor-pointer rounded-sm px-5 py-3 transition-colors text-primary group pl-0 pr-5 text-lg font-semibold text-left md:!py-1 lg:!py-2"
        >
          <span className="flex items-center gap-3 text-primary group-hover:text-link transition-colors">
            {buttonLabel}
            <svg
              className="group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
