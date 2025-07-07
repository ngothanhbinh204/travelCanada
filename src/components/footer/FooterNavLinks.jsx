import React from "react";
import CountrySelector from "./CountrySelector";

const links = [
  {
    label: "Business Events",
    href: "https://businessevents.destinationcanada.com/",
  },
  { label: "Corporate", href: "https://www.destinationcanada.com/en" },
  { label: "Media", href: "https://media.destinationcanada.com/en-CA" },
  { label: "Trade", href: "https://www.destinationcanada.com/en/csp" },
  {
    label: "Visual Library",
    href: "https://brand.destinationcanada.com/en/visual-library",
  },
];

const FooterNavLinks = () => (
  <div className="mb-11 flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-6 xl:mb-14 lg:justify-between">
    <nav className="flex flex-wrap justify-center gap-x-5 lg:justify-start">
      {links.map((link, index) => (
        <a
          key={index}
          className="text-lg xl:text-xl block font-medium"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </nav>
    <div className="mt-4 flex flex-col items-center lg:mt-0 lg:flex-row lg:items-baseline">
      <p className="text-lg xl:text-xl mr-4 text-center font-medium md:whitespace-nowrap">
        Switch to traveller website from:
      </p>
      <CountrySelector />
    </div>
  </div>
);

export default FooterNavLinks;
