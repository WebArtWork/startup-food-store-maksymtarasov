document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.menu-top__titles-link');

  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          links.forEach(function(l) {
              l.classList.remove('active');
          });

          link.classList.add('active');

          return true;
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

          return true;
      });
  });
});