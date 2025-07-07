const Heading = ({ title }) => (
  <h2 className="break-words text-[32px] font-bold leading-tight lg:text-[38px] 2xl:text-[42px] after:content-[''] after:block after:w-[50px] after:mt-[0.3em] after:mb-[0.5em] after:h-[3px] after:bg-link mb-6 last:mb-0 text-left text-black">
    {title}
  </h2>
);

export default Heading;
