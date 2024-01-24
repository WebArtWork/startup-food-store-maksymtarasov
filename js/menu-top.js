document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu-top__titles-link');

    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        // Сброс стилей для всех ссылок
        links.forEach(function(l) {
          l.classList.remove('active');
        });

        // Применение стилей для текущей ссылки
        link.classList.add('active');
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu-top__descr-link');

    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        // Сброс стилей для всех ссылок
        links.forEach(function(l) {
          l.classList.remove('active');
        });

        // Применение стилей для текущей ссылки
        link.classList.add('active');
      });
    });
  });