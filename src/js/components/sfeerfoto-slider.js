import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
const sfeerfotoSlider = new Swiper(".sfeerfoto__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: 'true',

  // Navigation arrows
  navigation: {
    nextEl: ".sfeerfoto__arrow--next",
    prevEl: ".sfeerfoto__arrow--prev",
  },

  pagination: {
    el: '.sfeerfoto__pagination',
  }
});

export { sfeerfotoSlider };
