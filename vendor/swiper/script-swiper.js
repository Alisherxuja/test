new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  grabCursor: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },

  slideToClickedSlide: true,

  autoHeight: true,

  slidesPerView: 1,

  watchOverflow: true,

  spaceBetween: 32,

  slidesPerGroup: 1,

  // mousewheel: {
  //   sensvity: 1,
  //   eventsTarget: '.image-slider'
  // },

  loop: true,

  freeMode: false,

  initianlSlide: 1,

  centeredSlides: true,

  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },

  speed: 1000,

  // Обновление слайда
  observer: true,

  observerParents: true,

  observerSlideChildren: true,


  breakpoints: {
    768: {
      sliderPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 1,

    },
    992: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    1920: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

  },

});

new Swiper('.image-slider-second', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,

  loop: true,

  spaceBetween: 19,

  breakpoints: {

    
    992: {
      centeredSlides: false,
    },
    
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    
    576: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    
    480: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },

  slideToClickedSlide: true,

});




new Swiper('.swiper-third', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,

  loop: true,

  spaceBetween: 19,

  centeredSlides: true,

  slideToClickedSlide: true,

  breakpoints: {
    320: {
      slidesPerView: 1,

    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },

    992: {
      slidesPerView: 3,

    },

  },

});