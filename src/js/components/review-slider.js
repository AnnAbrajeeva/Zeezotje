import Swiper, { Navigation, Pagination }  from "swiper";

Swiper.use([Navigation, Pagination]);
const reviewsSlider = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },
});

export {reviewsSlider};
