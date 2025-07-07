import { ChevronRight } from "lucide-react";

const IconChevronRight = ({
  size = 20,
  color = "primary",
  strokeWidth = 3,
  className = "",
}) => {
  return (
    <ChevronRight
      className={`ml-auto text-${color} ${className}`}
      width={size}
      height={size}
      strokeWidth={strokeWidth}
    />
  );
};
export default IconChevronRight;
