import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";

const BannerSlide = ({ imageUrl, title }) => {
  return (
    <div className="swiper-slide">
      <div className="relative flex flex-col min-h-[100vw] md:min-h-[90vw] lg:min-h-[640px] sm:py-16 justify-center py-16">
        <BannerImage imageUrl={imageUrl} />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)]"></div>
        <BannerContent title={title} />
      </div>
    </div>
  );
};

export default BannerSlide;
