let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    
    slides[currentIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index !== currentIndex) {
            slide.style.display = 'none';
        }
    });
});

// Automatic slideshow (optional)
setInterval(() => {
    changeSlide(1);
}, 5000);
