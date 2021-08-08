var swiper2 = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  slidesPerGroup: 6,
  slidesPerView: 6,
  spaceBetween: 50,

  pagination: {
    el: '.gallery__pagination',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    992: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },

    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },

  debugger: true,
});