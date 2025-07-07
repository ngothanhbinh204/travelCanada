import React from "react";
import { motion } from "framer-motion";
import { VideoSlider } from "../sliderVideo/VideoSlider";
import { sliderVideos } from "../../data/sliderVideos";

const SectionVideoSlider = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative z-10 max-w-screen mx-auto px-4 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <VideoSlider className="w-full" data={sliderVideos} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SectionVideoSlider;
