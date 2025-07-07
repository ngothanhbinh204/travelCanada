// src/config/sliderPresets.js
export const sliderPreset_3_3 = {
  slidesPerView: 3.3,
  slidesPerGroup: 3,
  spaceBetween: 16,
  breakpoints: {
    200: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
    640: { slidesPerView: 2.3, slidesPerGroup: 2 },
    1024: { slidesPerView: 3.3, slidesPerGroup: 3 },
  },
};

export const sliderPreset_4_2 = {
  slidesPerView: 4.4,
  slidesPerGroup: 4,
  spaceBetween: 16,
  breakpoints: {
    200: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
    640: { slidesPerView: 2.3, slidesPerGroup: 2, spaceBetween: 16 },
    1024: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
      spaceBetween: 16,
    },
    1280: {
      spaceBetween: 24,
      slidesPerView: 4.3,
      slidesPerGroup: 4,
    },
  },
};
