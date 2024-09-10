document.addEventListener("DOMContentLoaded", function() {    

    const brands = [
        {src: "assets/images/banner-1.png"},
        {src: "assets/images/banner-2.png"},
        {src: "assets/images/banner-3.png"},
        {src: "assets/images/banner-4.png"},
        {src: "assets/images/banner-5.png"},
        {src: "assets/images/banner-6.png"},
        {src: "assets/images/banner-7.png"}
    ];

    const carousel = document.getElementById('carousel');
    carousel.classList.add('carousel');
    carousel.classList.add('slide-in-bottom');

    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel__container');

    brands.forEach((item, index) => {
        const brand = document.createElement('img');
        brand.src = item.src;
        brand.alt = `Brand ${index + 1}`;
        carouselContainer.appendChild(brand);
    });

    brands.forEach((item, index) => {
        const clonedBrand = document.createElement('img');
        clonedBrand.src = item.src;
        clonedBrand.alt = `Brand (${index + 1} clone)`;
        carouselContainer.appendChild(clonedBrand);
    });

    let scrollPosition = 0;
    const itemWidth = carouselContainer.querySelector('img').clientWidth;

    function scrollCarousel() {
        scrollPosition += 1;
        if (scrollPosition >= itemWidth * brands.length) {
                scrollPosition = 0;
        }
        carouselContainer.style.transform = `translateX(-${scrollPosition}px)`;
        requestAnimationFrame(scrollCarousel);
    }        
    scrollCarousel();

    carousel.appendChild(carouselContainer);

});
