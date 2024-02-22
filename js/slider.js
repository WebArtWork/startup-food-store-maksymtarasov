let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewhel: true,
  ketboard: true,
});

let swiperFood = new Swiper(".mySwiper-food", {
  direction: 'horizontal', // изменение направления на горизонтальное
  slidesPerView: 3, // отображение 4 элементов
  spaceBetween: 1, // расстояние между элементами

  loop: true,
  speed: 800,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // автоматическая прокрутка
  // autoplay: {
  //   delay: 10000,
  //   disableOnInteraction: true,
  // },

  // скролл по 2 элемента вперёд
  slidesPerGroup: 2,
});
