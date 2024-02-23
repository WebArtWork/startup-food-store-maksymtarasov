let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },


  mousewhel: true,
  ketboard: true,
});

let swiperFood = new Swiper(".mySwiper-food", {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,

  loop: true,
  speed: 800,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    }
  },
    

  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },

  slidesPerGroup: 1,
});
