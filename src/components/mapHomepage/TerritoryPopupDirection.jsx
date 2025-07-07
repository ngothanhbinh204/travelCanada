import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const TerritoryPopupDirection = ({ territory, onConfirm, onClose }) => {
  return (
    <AnimatePresence>
      {territory && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Click backdrop để tắt popup
          />

          {/* Popup Box */}
          <motion.div
            className="border-link overflow-hidden rounded-md border relative z-10 bg-white w-[90%] max-w-max lg:w-[80%] px-4 py-12 md:p-12 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <h2 className="text-lg font-bold lg:text-4xl mb-4 text-base">
              Do you want to explore{" "}
              <span className="text-primary">{territory.name}</span>?
            </h2>
            <a
              href="#"
              className="inline-block group cursor-pointer rounded-sm px-5 py-3 transition-colors text-primary group pl-0 pr-5 text-lg font-semibold text-left md:!py-1 lg:!py-2"
            >
              <span className="flex items-center gap-3 text-primary group-hover:text-link transition-colors">
                Go To {territory.name}
                <svg
                  className="group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <X
              className="absolute w-8 h-8 top-0 right-0 text-white bg-primary px-1 py-1 hover:bg-white hover:text-primary transition"
              onClick={onClose}
            />
            {/* <button onClick={onClose}>Hủy</button> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerritoryPopupDirection;
