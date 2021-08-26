// HERO

const swiper1 = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 2000,
  autoplay: {
    delay: 6500,
  },

  debugger: true,
});

// GALLERY

const swiper2 = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  slidesPerColumn: 1,
  slidesPerView: 1,
  slidesPerColumnFill: 'row',
  spaceBetween: 34,

  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerColumn: 1,
      slidesPerView: 1,
      spaceBetween: 0,
    },

    500: {
      slidesPerColumn: 1,
      slidesPerView: 2,
      spaceBetween: 34,
    },

    767.99: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1549.99: {
      slidesPerColumn: 2,
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  debugger: true,
});