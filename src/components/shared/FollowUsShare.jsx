import React from "react";
import FollowHeader from "./FollowHeader";
import SocialIcons from "../ui/SocialIcons";
import GalleryGrid from "../gallery/GalleryGrid";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
const FollowUsShare = () => {
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

  const galleryImages = [
    {
      image: "/images/slide_image.webp",
      alt: "Lions Gate Bridge at sunset",
      link: "https://www.instagram.com/explorecanada/",
    },
    {
      image: "/images/slide_image.webp",
      alt: "Grasslands in Saskatchewan",
      link: "https://www.instagram.com/explorecanada/",
    },
    {
      image: "/images/slide_image.webp",
      alt: "Goats crossing a road",
      link: "https://www.instagram.com/explorecanada/",
    },
    {
      image: "/images/slide_image.webp",
      alt: "Streets of Quebec",
      link: "https://www.instagram.com/explorecanada/",
    },
  ];

  return (
    <section className="section_follow max-w-full mx-auto relative z-0 pb-5 lg:pb-9 bg-white">
      <div className=" px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-7xl xl:mx-auto flex flex-col items-center justify-between gap-8 py-8 text-center lg:flex-row lg:text-left">
        <FollowHeader />
        <SocialIcons links={socialList} />
      </div>

      <GalleryGrid images={galleryImages} />
    </section>
  );
};

export default FollowUsShare;
