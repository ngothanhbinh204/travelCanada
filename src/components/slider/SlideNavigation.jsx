import { ArrowLeft, ArrowRight } from "lucide-react";

const SlideNavigation = ({ sliderId, variant }) => {
  const baseButtonClass = `absolute top-1/2 -translate-y-1/2 z-10 p-2 lg:p-3 bg-white group  shadow rounded-full`;
  // Xác định class theo variant
  const getVariantClass = () => {
    switch (variant) {
      case "3_3":
        return " md:translate-x-1/2 2xl:translate-x-1/2 3xl:left-6";
      case "4_2":
        return "slide4_2 md:translate-x-1/2 2xl:translate-x-1/2 3xl:left-6";
      case "center":
        return "left-0 -translate-x-1/2 md:left-1/2 md:-translate-x-[calc(50%+240px)] lg:-translate-x-[calc(50%+230px)] 3xl:-translate-x-[calc(50%+290px)]";
      default:
        return "left-0 md:translate-x-1/2 2xl:translate-x-1/2";
    }
  };

  const getVariantClassRight = () => {
    switch (variant) {
      case "3_3":
        return " absolute md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full c_arrow_right";
      case "4_2":
        return "slide4_2 absolute md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10  bg-white shadow rounded-full c_arrow_right";
      case "center":
        return "left-unset right-0 translate-x-1/2 md:left-1/2 md:translate-x-[calc(50%+180px)] lg:translate-x-[calc(50%+160px)] 3xl:translate-x-[calc(50%+230px)]"; // right
      default:
        return " absolute md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10  bg-white shadow rounded-full c_arrow_right";
    }
  };

  return (
    <>
      <button
        className={`${sliderId}-prev button_ctrlSlide left-0 ${baseButtonClass} ${getVariantClass()}`}
      >
        <ArrowLeft className="transition-transform duration-300 group-hover:scale-125" />
      </button>
      <button
        className={`${sliderId}-next button_ctrlSlide ${baseButtonClass} ${getVariantClassRight()}`}
      >
        <ArrowRight className="transition-transform duration-300 group-hover:scale-125" />
      </button>
    </>
  );
};

export default SlideNavigation;
