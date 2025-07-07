import React from "react";
import Content from "./Content";

const SectionHeadingContent = () => {
  const contents = [
    "Don’t challenge British Columbia to a nature contest. The westernmost province has an unfair advantage: this is where the Pacific Ocean is met by bustling city and towering forest; where soaring snow-capped mountains give way to picturesque valleys, and where lively urban life blends in beautifully with the nature that surrounds it.",
    "From the rugged coastline to the majestic peaks of the Rocky Mountains, British Columbia offers adiverse and breathtaking landscape that captivates the senses. Whether you're exploring the vibrant city of Vancouver, hiking through the lush rainforests of Vancouver Island, or skiing in the world-renowned resorts of Whistler, you'll find a place where nature is not just a backdrop, but an integral part of everyday life.",
    "With its stunning natural beauty, rich cultural heritage, and endless outdoor adventures, British Columbia is a destination that invites you to immerse yourself in the wonders of the great outdoors. Experience the thrill of whale watching, the serenity of kayaking in pristine waters, or the exhilaration of hiking through ancient forests. In British Columbia, nature is not just a destination; it's a way of life.",
  ];
  return (
    <div>
      <div className="relative z-0 text-center my-16 lg:my-24">
        <div className="container_c md:px-16 2xl:px-20 3xl:px-0 max-w-screen-xl xl:mx-auto">
          <div className=" gap-8 lg:grid lg:grid-cols-2 lg:items-start xl:grid-cols-3">
            <div className="lg:col-span-2 self-center text-center xl:col-span-3">
              <h2 className="break-words text-[32px] font-bold leading-tight lg:text-[38px] 2xl:text-[42px] last:mb-0 text-center text-primary">
                Where nature is nurtured
              </h2>
              <Content contents={contents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeadingContent;
