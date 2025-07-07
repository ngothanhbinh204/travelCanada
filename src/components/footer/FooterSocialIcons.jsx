import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const socialIcons = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/ExploreCanada/" },
  {
    icon: <IoLogoInstagram />,
    href: "https://www.instagram.com/explorecanada/",
  },
  { icon: <FaYoutube />, href: "https://www.youtube.com/ExploreCanada/" },
];

const FooterSocialIcons = () => (
  <div className="mb-11 flex flex-wrap justify-center gap-5 xl:mb-14">
    {socialIcons.map((item, index) => (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group icon_social"
      >
        <span className="text-white text-2xl group-hover:scale-90 transition-transform">
          {item.icon}
        </span>
      </a>
    ))}
  </div>
);

export default FooterSocialIcons;
