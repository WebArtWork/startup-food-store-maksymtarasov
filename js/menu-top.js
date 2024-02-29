document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.menu-top__titles-link');

  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          links.forEach(function(l) {
              l.classList.remove('active');
          });

          link.classList.add('active');

          return true; // Возвращаем true для стандартного поведения ссылки
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.menu-top__descr-link');

  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          links.forEach(function(l) {
              l.classList.remove('active');
          });

          link.classList.add('active');

          return true; // Возвращаем true для стандартного поведения ссылки
      });
  });
});