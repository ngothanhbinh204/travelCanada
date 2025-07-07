import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      const isClickOutsideForm =
        formRef.current && !formRef.current.contains(e.target);

      const isClickOutsideButton =
        buttonRef.current && !buttonRef.current.contains(e.target);

      if (isClickOutsideForm && isClickOutsideButton) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutSide);
    } else {
      document.removeEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isOpen]);
  return (
    <div className="flex">
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          color="white"
          height="2rem"
          width="2rem"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "white" }}
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={formRef}
            key="search-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 p-4 rounded z-50 w-full bg-white px-3 md:px-16 pb-20 pt-16 shadow-md"
          >
            <div className="max-w-7xl mx-auto">
              <h4 className="break-words text-[26px] font-bold leading-tight lg:text-[32px] 2xl:text-[36px] text-primary mb-2">
                {" "}
                Search This Site...
              </h4>
              <div className="relative h-[50px]">
                <input
                  id="inputSearchHeader"
                  name="inputFeild"
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-greyBorder h-full rounded-lg px-3 py-2"
                />
                {/* Nút icon ở bên phải */}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-base hover:text-black"
                >
                  <Search className="w-8 h-8" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchButton;
