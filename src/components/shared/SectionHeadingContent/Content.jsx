import React from "react";

const Content = ({ contents }) => {
  return (
    <div>
      <div className="text-base leading-[26px] xl:text-lg xl:leading-[28px] mb-6 mt-6 last:mb-0">
        {contents &&
          contents.map((content, index) => (
            <p key={index} className=" mb-3 md:mb-5 last:mb-0 empty:hidden">
              {content}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Content;
