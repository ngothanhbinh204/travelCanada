import clsx from "clsx";
import React from "react";
export const IconExternalLink = ({ className = "", ...props }) => (
  <svg
    width="32"
    height="32"
    fill="inherit"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("relative bottom-[1px] h-3 w-3 fill-current", className)}
    {...props}
  >
    <g clipPath="url(#clip0_3048_45488)">
      <path d="M13.6837 11.4373H15.992V16.0004H0V0.00305176H4.53895V2.3193C3.97994 2.3193 3.4343 2.338 2.88867 2.31395H2.29756C2.31093 5.7389 2.31093 9.73289 2.29756 13.1578C2.29756 13.5719 2.29756 13.6921 2.29756 13.6921C5.72651 13.6815 10.2628 13.6815 13.6917 13.6921L13.6864 13.1525C13.6623 12.6022 13.681 12.0518 13.681 11.4373H13.6837Z" />
      <path d="M15.9999 7.99599H13.7051V4.25046C11.782 6.17399 9.92305 8.03339 8.06413 9.88746L6.42188 8.10286C8.25404 6.2755 10.2199 4.31191 12.1832 2.35365H8.01599V0H15.9999V7.99599Z" />
    </g>
    <defs>
      <clipPath id="clip0_3048_45488">
        <rect width="32" height="32" />
      </clipPath>
    </defs>
  </svg>
);
