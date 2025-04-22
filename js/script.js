document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // ARIA attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Optional: Close menu when a link is clicked (for SPA behavior)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Placeholder for Slider/Carousel functionality ---
    // You would typically use a library like Swiper.js or implement
    // custom logic here for the hero feature slider and the cup winners slider.
    // Example: Initialize Swiper if you were using it
    /*
    if (typeof Swiper !== 'undefined') {
        const heroSlider = new Swiper('.hero-feature-slider', { // Add this class to the container
            loop: true,
            pagination: {
                el: '.hero-feature .slider-dots',
                clickable: true,
            },
            // other options...
        });

        const cupWinnerSlider = new Swiper('.cup-winners-slider', { // Add this class
             navigation: {
                nextEl: '.cup-winners .fa-chevron-right',
                prevEl: '.cup-winners .fa-chevron-left',
            },
             pagination: {
                el: '.cup-winners .bottom-dots',
                 clickable: true,
             },
             // other options...
         });
    } else {
        console.log("Slider library (like Swiper.js) not found. Sliders will not be interactive.");
    }
    */

    // --- Basic Dot Click Placeholder (if not using a library) ---
    // This is very basic and doesn't actually change slides
    document.querySelectorAll('.slider-dots .dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots in this group
            dot.parentElement.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            // Add active class to the clicked dot
            dot.classList.add('active');
            console.log(`Dot ${index + 1} clicked. Implement slide change logic here.`);
            // Add logic here to change the actual slide content if doing manually
        });
    });

     console.log("Let's Grow page loaded!");

});