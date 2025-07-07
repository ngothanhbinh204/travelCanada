import { ChevronRight } from "lucide-react";

const Breadcrumbs = ({ items = [] }) => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-2xl 2xl:mx-auto flex flex-wrap items-center gap-x-4 py-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            {item.href ? (
              <p className="text-sm leading-[24px] xl:text-base xl:leading-[24px]">
                <a className="text-link !underline" href={item.href}>
                  {item.label}
                </a>
              </p>
            ) : (
              <p className="text-sm leading-[24px] xl:text-base xl:leading-[24px]">
                {item.label}
              </p>
            )}

            {/* Render chevron nếu không phải mục cuối */}
            {index < items.length - 1 && (
              <ChevronRight
                strokeWidth={3}
                size={24}
                className="w-4 text-base"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
