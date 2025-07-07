const BannerContent = ({ title }) => {
  return (
    <div className="lg:px-8 md:px-0 px-4 relative xl:px-24 z-30">
      <h1 className="break-words text-center uppercase z-10 text-[11vw] font-bold leading-none sm:text-[50px] lg:text-[75px] 2xl:text-[90px] font-alt text-white">
        {title}
      </h1>
    </div>
  );
};

export default BannerContent;
