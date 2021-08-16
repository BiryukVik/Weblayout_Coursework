// HERO

var swiper1 = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 6000,
  },

  debugger: true,
});

// GALLERY

var swiper2 = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  slidesPerColumn: 1,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumnFill: 'row',

  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

  breakpoints: {
    767.99: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1549.99: {
      slidesPerColumn: 2,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  debugger: true,
});