import React from "react";
import { useRef, useEffect } from "react";
import TabsWrapper from "./TabsWrapper/TabsWrapper";
import GridItems from "./GridItems";
import { motion, AnimatePresence } from "framer-motion";

const DropdownMenu = ({ regions = [], onClose }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const currentRegion = regions[activeIndex] || { children: [] };

  return (
    <div
      ref={nodeRef}
      className="absolute top-full left-0 w-full z-20 bg-white shadow-xl px-8 pt-6 pb-8 overflow-y-scroll"
    >
      <TabsWrapper
        regions={regions}
        activeIndex={activeIndex}
        onChangeTab={setActiveIndex}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="max-h-[80vh] overflow-y-scroll"
        >
          <GridItems items={currentRegion.children || []} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
