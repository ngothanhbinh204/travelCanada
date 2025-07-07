import React from "react";
import { StickyNavContext } from "../../contexts/StickyNavContext";

import SearchButton from "../ui/search/SearchButton";
import MobileMenu from "../Menu/MobileMenu";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import logoMain from "../../assets/images/ke-logo.webp";
import IconChevronDown from "../icons/IconChevronDown";
import { useEffect, useRef, useState, useContext } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const [menu, setMenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  const { isStickyNavVisible } = useContext(StickyNavContext); // get state sticky nav

  const hasChildren = (index) => {
    return (
      index !== null &&
      Array.isArray(menu[index]?.children) &&
      menu[index].children.length > 0
    );
  };
  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // if scroll down -> hidden
        setShow(false);
      } else {
        // if scroll up -> display
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`bg-primary fixed top-0 z-50 w-full transition-transform ${
          show && !isStickyNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-2 lg:px-10 xl:px-20">
          <nav className="flex">
            <a
              className="gtm-main-menu-logo mr-10 py-2"
              href="https://travel.destinationcanada.com/en-us"
            >
              <img className="max-w-22" src={logoMain} alt="" />
            </a>

            <div className="hidden lg:flex">
              <nav className="flex">
                <div>
                  <ul className="c-desktop-nav-list flex h-full">
                    {menu.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            const newIndex =
                              index === activeMenu ? null : index;
                            setActiveMenu(newIndex);
                          }}
                          className="c-desktop-nav-link group relative h-full text-white"
                        >
                          <span className="c-desktop-nav-link__span font-medium flex h-full items-center p-4">
                            <span>{item.label}</span>
                            {item.children?.length > 0 && (
                              <IconChevronDown
                                className={`ml-2 transition-transform ${
                                  activeMenu === item.label ? "rotate-180" : ""
                                }`}
                                size={20}
                              />
                            )}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {hasChildren(activeMenu) && (
                    <DropdownMenu
                      regions={menu[activeMenu].children}
                      onClose={() => setActiveMenu(null)}
                    />
                  )}
                </div>
              </nav>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <SearchButton />
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
