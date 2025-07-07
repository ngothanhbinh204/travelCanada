import React from "react";
const bottomLinks = [
  {
    label: "Privacy Policy",
    href: "https://travel.destinationcanada.com/en-us/privacy-policy",
  },
  {
    label: "Terms of Use",
    href: "https://travel.destinationcanada.com/en-us/terms-use",
  },
  {
    label: "Sitemap",
    href: "https://travel.destinationcanada.com/en-us/sitemap",
  },
  {
    label: "Web Accessibility",
    href: "https://travel.destinationcanada.com/en-us/web-accessibility-statement",
  },
];
const FooterCopyright = () => (
  <div className="flex flex-col items-center gap-x-4 xl:flex-row xl:items-end xl:justify-between font-medium">
    <nav className="mb-5 flex flex-wrap justify-center gap-x-5 xl:mb-0 xl:justify-start">
      {bottomLinks.map((link, index) => (
        <a
          key={index}
          className="block text-[13px] xl:text-[14px]"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
      <button className="block text-[13px] xl:text-[14px] text-white">
        Cookies Settings
      </button>
    </nav>
    <div className="flex flex-shrink-0 flex-col items-center gap-4 xl:ml-auto xl:flex-row xl:items-end xl:gap-8">
      <span className="text-[11px] xl:text-[14px]">
        An official site of Destination Canada 2025
      </span>
      <img
        alt="Canada Logo"
        width="145"
        height="35"
        src="images/canada-logo.webp"
        className="relative mt-3 xl:-top-[5px] xl:mt-0"
      />
    </div>
  </div>
);

export default FooterCopyright;
