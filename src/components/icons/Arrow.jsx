// src/components/ui/Icon.jsx
import React from "react";
import * as IonIcons from "react-icons/io5";

const Arrow = ({
  name = "IoHomeOutline",
  size = 24,
  color = "currentColor",
  className = "",
  onClick,
  ...props
}) => {
  const IconComponent = IonIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" không tồn tại trong react-icons/io5`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      onClick={onClick}
      {...props}
    />
  );
};

export default Arrow;
