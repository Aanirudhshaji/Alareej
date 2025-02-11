window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  document.getElementById('explore-button').addEventListener('click', function () {
    window.scrollBy({
        top: 500, 
        behavior: 'smooth'
    });
});
