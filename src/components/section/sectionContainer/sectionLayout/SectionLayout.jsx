import Heading from "./Heading";
import Image from "./Image";
import Description from "./Description";
import { Button } from "../../../ui/Button";
import { button } from "framer-motion/client";

const SectionLayout = ({
  layout = "image-text",
  title,
  imgSrc,
  caption,
  description,
  buttonText,
  buttonLink,
}) => {
  const isImageFirst = layout === "image-text";
  return (
    <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-2xl 2xl:mx-auto">
      <div className="flex flex-col gap-6 lg:gap-8 lg:grid lg:grid-cols-2 lg:items-start xl:grid-cols-3">
        <div
          className={`hidden lg:block relative lg:col-span-2 ${
            isImageFirst ? "order-1" : "order-2"
          }`}
        >
          <Image imgSrc={imgSrc} caption={caption} />
        </div>

        <div
          className={`self-center text-left lg:col-span-1 ${
            isImageFirst ? "order-2" : "order-1"
          }`}
        >
          <Heading title={title} />
          <div className="block lg:hidden mb-4 last:mb-0">
            <Image imgSrc={imgSrc} caption={caption} />
          </div>
          <Description content={description} />
          {buttonText && buttonLink && (
            <Button variant="main" href={buttonLink}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionLayout;
