import { ChevronLeft, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

export default function MenuLevel2({ data }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <div className="space-y-4 px-9 py-8">
        <h2 className="break-words text-[26px] font-bold leading-tight lg:text-[32px] 2xl:text-[36px] border-greyBorder mb-6 border-b-2 pb-2">
          {data.label}
        </h2>
        {data.children.map((region, idx) => (
          <div key={idx}>
            <div
              className="text-primary mb-5 flex w-full text-left text-xl font-bold last:mb-0 justify-between items-centerborder-b pb-2 cursor-pointer"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{region.label}</span>
              {region.children && (
                <ChevronDown
                  strokeWidth={3}
                  size={20}
                  className={`w-5 h-5 text-xl transition-transform ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.ul
                  className=" mt-1 space-y-1 text-base overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {region.children.map((child, index) => (
                    <li key={index} className=" py-1">
                      <a href="#">{child.label}</a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
