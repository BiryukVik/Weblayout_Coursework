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
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

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
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    767.99: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1549.99: {
      slidesperView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  debugger: true,
});

// EVENTS

const swiper3 = new Swiper('.events__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  grid: {
    rows: 1,
  },

  pagination: {
    el: '.events__pagination',
    type: 'bullets',
  },

  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    767.99: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1023.99: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 34,
    },

    1549.99: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  debugger: true,
});

// PROJECTS

const swiper4 = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  grid: {
    rows: 1,
  },

  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    767.99: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1023.99: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1549.99: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  debugger: true,
});