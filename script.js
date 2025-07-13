document.addEventListener('DOMContentLoaded', function() {
    // Get all carousels
    const carousels = document.querySelectorAll('.image-carousel');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const leftArrow = carousel.querySelector('.left-arrow');
        const rightArrow = carousel.querySelector('.right-arrow');
        let currentIndex = 0;
        
        // Function to show image at specific index
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }
        
        // Function to go to next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
        
        // Function to go to previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
        
        // Add event listeners to arrows
        leftArrow.addEventListener('click', prevImage);
        rightArrow.addEventListener('click', nextImage);
        
        // Initialize with first image
        showImage(0);
    });
});

// Smooth scroll function for Shop All button
function scrollToStore() {
    const storeSection = document.getElementById('store-section');
    storeSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
} 

// Parallax effect for .thumb-holder background (works on all devices)
window.addEventListener('scroll', function() {
    const thumbHolder = document.querySelector('.thumb-holder');
    if (thumbHolder) {
        // Adjust the multiplier for more/less parallax effect
        const offset = window.pageYOffset * 0.5;
        thumbHolder.style.backgroundPosition = `center ${offset}px`;
    }
}); 