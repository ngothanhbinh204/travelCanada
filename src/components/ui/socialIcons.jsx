import React from "react";

const SocialIcons = ({ links }) => {
  return (
    <div className="flex gap-4 text-canadianRedFlag">
      {links.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group icon_social"
          >
            <IconComponent className="w-6 text-white h-6 group-hover:scale-90 transition-transform duration-200" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
