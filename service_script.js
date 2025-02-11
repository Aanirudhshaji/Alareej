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

const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        let currentIndex = 0;

        function moveToSlide(track, currentIndex) {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
        }

        function autoSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            moveToSlide(track, currentIndex);
        }

        slides.forEach((slide, index) => {
            slide.style.left = (100 * index) + '%';
        });

        setInterval(autoSlide, 3000); // Change slide every 5 seconds