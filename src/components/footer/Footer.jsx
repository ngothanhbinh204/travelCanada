import React from "react";
import FooterLogo from "./FooterLogo";
import FooterNavLinks from "./FooterNavLinks";
// import FooterSocialIcons from "./FooterSocialIcons";
import SocialIcons from "../ui/SocialIcons";
import FooterCopyright from "./FooterCopyright";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const socialList = [
  {
    link: "https://www.facebook.com/ExploreCanada/",
    icon: FaFacebookF,
  },
  {
    link: "https://www.instagram.com/explorecanada/",
    icon: IoLogoInstagram,
  },
  {
    link: "https://www.youtube.com/@ExploreCanada",
    icon: FaYoutube,
  },
];
const Footer = () => {
  return (
    <div className="bg_gray">
      <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-xl xl:mx-auto py-16 text-white">
        <FooterLogo />
        <FooterNavLinks />
        <div className="mb-11 flex flex-wrap justify-center gap-5 xl:mb-14">
          <SocialIcons links={socialList} />
        </div>
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
