import Swiper, { Navigation, Pagination }  from "swiper";

Swiper.use([Navigation, Pagination]);
const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },

  pagination: {
    el: '.swiper-pagination',
  }
});

export {reviewsSlider};
