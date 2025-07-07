import React, { useEffect, useState, useContext } from "react";
import { StickyNavContext } from "../../contexts/StickyNavContext";
const StickyNav = ({ sections }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { setIsStickyNavVisible } = useContext(StickyNavContext);
  useEffect(() => {
    const sentinel = document.getElementById("sticky-sentinel");
    const observer = new IntersectionObserver(
      ([entry]) => {
        const sticky = !entry.isIntersecting;
        setIsSticky(sticky);
        setIsStickyNavVisible(sticky);
      },
      { threshold: 1, rootMargin: "-1px 0px 0px 0px" }
    );

    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, []);
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-black text-white shadow-md" : "bg-[#f6f6f6] py-5"
      }`}
    >
      <div className="max-w-1440 px-4 md:px-16 2xl:px-20 hidden lg:block">
        <div className="flex justify-center">
          {sections.map((section, idx) => (
            <button
              key={idx}
              className="hover:bg-primary cursor-pointer inline-block p-5 transition-colors font-medium uppercase hover:text-white"
              onClick={() => handleScroll(section.targetId)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
