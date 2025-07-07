import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export const SliderCardVideo = ({ item, onVideoClick }) => {
  return (
    <motion.div
      className="relative flex flex-col gap-3 group cursor-pointer rounded-lg overflow-hidden w-full md:max-h-60vh md:max-w-[470px] xl:max-h-[70vh] xl:max-w-[580px] 3xl:max-w-[97%] mx-auto"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onVideoClick(item)}
    >
      {/* Tiêu đề */}
      <h3 className="break-words text-[22px] font-bold leading-tight lg:text-[24px] 2xl:text-[28px] text-center order-1 mt-0">
        {item.title}
      </h3>

      {/* Phụ đề */}
      <p className="text-base leading-[26px] xl:text-lg xl:leading-[28px] mt-0 text-center order-2">
        {item.subtitle}
      </p>

      {/* Box hình ảnh + Nút play */}
      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden order-3">
        {/* Ảnh */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay nếu cần */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Nút Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play
              size={28}
              className="text-white ml-1 drop-shadow-lg"
              fill="white"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
