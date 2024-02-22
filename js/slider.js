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
  direction: 'horizontal', // изменение направления на горизонтальное
  slidesPerView: 1, // отображение 4 элементов
  spaceBetween: 20, // расстояние между элементами

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

  breakpoints: {
    // При ширине экрана от 1100px и выше
    1100: {
      slidesPerView: 3, // Отображаем 2 элемента
      slidesPerGroup: 2, // Прокручиваем по 1 элементу
    },
    768: {
      slidesPerView: 2, // Отображаем 2 элемента
      slidesPerGroup: 1,
    }
  },
    

  // автоматическая прокрутка
  // autoplay: {
  //   delay: 10000,
  //   disableOnInteraction: true,
  // },

  // скролл по 2 элемента вперёд
  slidesPerGroup: 1,
});
