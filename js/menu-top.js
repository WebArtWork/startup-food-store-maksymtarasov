document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu-top__titles-link');

    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        links.forEach(function(l) {
          l.classList.remove('active');
        });

        link.classList.add('active');
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu-top__descr-link');

    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        links.forEach(function(l) {
          l.classList.remove('active');
        });

        link.classList.add('active');
      });
    });
  });