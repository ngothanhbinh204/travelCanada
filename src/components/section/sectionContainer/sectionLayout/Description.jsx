const Description = ({ content }) => (
  <div className="text-base text-start leading-[26px] xl:text-lg xl:leading-[28px] mb-6 last:mb-0">
    <p className="mb-3 last:mb-0 empty:hidden">
      <span>{content}</span>
    </p>
  </div>
);

export default Description;
